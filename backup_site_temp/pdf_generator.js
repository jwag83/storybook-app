const puppeteer = require('puppeteer');
const fs = require('fs').promises;
const path = require('path');

class PDFGenerator {
    constructor() {
        this.outputDir = 'exports';
    }

    async ensureOutputDir() {
        try {
            await fs.mkdir(this.outputDir, { recursive: true });
        } catch (error) {
            console.error('Error creating output directory:', error);
        }
    }

    async generatePDF(storyData, filename) {
        await this.ensureOutputDir();
        
        const browser = await puppeteer.launch({
            headless: 'new',
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });

        try {
            const page = await browser.newPage();
            await page.setViewport({ width: 1024, height: 768 });

            // Generate HTML content
            const html = this.generateStoryHTML(storyData);
            await page.setContent(html);

            // Generate PDF
            const pdfPath = path.join(this.outputDir, filename);
            await page.pdf({
                path: pdfPath,
                format: 'A4',
                printBackground: true,
                margin: {
                    top: '20mm',
                    right: '20mm',
                    bottom: '20mm',
                    left: '20mm'
                }
            });

            return pdfPath;
        } finally {
            await browser.close();
        }
    }

    generateStoryHTML(storyData) {
        return `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <title>${storyData.title}</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        line-height: 1.6;
                        color: #333;
                        margin: 0;
                        padding: 20px;
                        background: white;
                    }
                    .story-page {
                        page-break-after: always;
                        margin-bottom: 20px;
                        padding: 20px;
                        border: 1px solid #ddd;
                        border-radius: 8px;
                    }
                    .story-image {
                        width: 100%;
                        max-width: 600px;
                        height: auto;
                        margin: 0 auto;
                        display: block;
                        border-radius: 8px;
                    }
                    .story-text {
                        margin-top: 20px;
                        text-align: center;
                        font-size: 16px;
                    }
                    h1 {
                        text-align: center;
                        color: #2c3e50;
                        margin-bottom: 30px;
                    }
                    h2 {
                        color: #2c3e50;
                        margin-bottom: 15px;
                    }
                    .page-number {
                        position: absolute;
                        bottom: 10px;
                        right: 10px;
                        font-size: 12px;
                        color: #666;
                    }
                </style>
            </head>
            <body>
                <h1>${storyData.title}</h1>
                ${storyData.pages.map((page, index) => `
                    <div class="story-page">
                        <img src="${page.imageUrl}" alt="${page.title}" class="story-image">
                        <div class="story-text">
                            <h2>${page.title}</h2>
                            <p>${page.text}</p>
                        </div>
                        <div class="page-number">${index + 1}</div>
                    </div>
                `).join('')}
            </body>
            </html>
        `;
    }
}

module.exports = new PDFGenerator(); 