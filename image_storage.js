const fs = require('fs');
const path = require('path');
const https = require('https');
const { Storage } = require('@google-cloud/storage');
const AWS = require('aws-sdk');

class ImageStorage {
    constructor(config = {}) {
        this.config = {
            storageType: config.storageType || 'local', // 'local', 's3', or 'gcs'
            localPath: config.localPath || 'images',
            s3Bucket: config.s3Bucket,
            gcsBucket: config.gcsBucket
        };

        // Initialize storage clients based on config
        if (this.config.storageType === 's3') {
            this.s3 = new AWS.S3({
                accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                region: process.env.AWS_REGION
            });
        } else if (this.config.storageType === 'gcs') {
            this.gcs = new Storage({
                projectId: process.env.GOOGLE_CLOUD_PROJECT,
                keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS
            });
        }

        // Ensure local directory exists
        if (this.config.storageType === 'local') {
            fs.mkdirSync(this.config.localPath, { recursive: true });
        }
    }

    async downloadImage(url, filename) {
        return new Promise((resolve, reject) => {
            https.get(url, (response) => {
                if (response.statusCode === 200) {
                    const chunks = [];
                    response.on('data', chunk => chunks.push(chunk));
                    response.on('end', () => {
                        const buffer = Buffer.concat(chunks);
                        resolve(buffer);
                    });
                } else {
                    reject(new Error(`Failed to download image: ${response.statusCode}`));
                }
            }).on('error', reject);
        });
    }

    async saveImage(imageBuffer, filename) {
        switch (this.config.storageType) {
            case 'local':
                return this.saveLocal(imageBuffer, filename);
            case 's3':
                return this.saveS3(imageBuffer, filename);
            case 'gcs':
                return this.saveGCS(imageBuffer, filename);
            default:
                throw new Error('Invalid storage type');
        }
    }

    async saveLocal(imageBuffer, filename) {
        const filepath = path.join(this.config.localPath, filename);
        await fs.promises.writeFile(filepath, imageBuffer);
        return `/images/${filename}`;
    }

    async saveS3(imageBuffer, filename) {
        const params = {
            Bucket: this.config.s3Bucket,
            Key: filename,
            Body: imageBuffer,
            ContentType: 'image/png'
        };
        await this.s3.upload(params).promise();
        return `https://${this.config.s3Bucket}.s3.amazonaws.com/${filename}`;
    }

    async saveGCS(imageBuffer, filename) {
        const bucket = this.gcs.bucket(this.config.gcsBucket);
        const file = bucket.file(filename);
        await file.save(imageBuffer, {
            contentType: 'image/png',
            public: true
        });
        return `https://storage.googleapis.com/${this.config.gcsBucket}/${filename}`;
    }

    async processImage(url, filename) {
        try {
            const imageBuffer = await this.downloadImage(url);
            const savedUrl = await this.saveImage(imageBuffer, filename);
            return savedUrl;
        } catch (error) {
            console.error('Error processing image:', error);
            throw error;
        }
    }
}

module.exports = ImageStorage; 