// DOM Elements
const childNameInput = document.getElementById('childName');
const childAgeInput = document.getElementById('childAge');
const childGenderSelect = document.getElementById('childGender');
const dedicationInput = document.getElementById('dedication');
const themeSelect = document.getElementById('theme');
const moralSelect = document.getElementById('moral');
const lengthSelect = document.getElementById('length');
const generateBtn = document.querySelector('.generate-btn');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const storyPreview = document.querySelector('.story-preview');
const loadingContainer = document.querySelector('.loading-container');
const errorContainer = document.querySelector('.error-container');
const retryButton = document.querySelector('.retry-button');

// State Management
let currentPage = 0;
let storyPages = [];
let isLoading = false;

// Form Validation
function validateForm() {
    const requiredFields = [childNameInput, childAgeInput, childGenderSelect, themeSelect, moralSelect, lengthSelect];
    let isValid = true;

    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.classList.add('invalid');
            isValid = false;
        } else {
            field.classList.remove('invalid');
        }
    });

    // Age validation
    if (childAgeInput.value) {
        const age = parseInt(childAgeInput.value);
        if (age < 1 || age > 12) {
            childAgeInput.classList.add('invalid');
            isValid = false;
        }
    }

    return isValid;
}

// Event Listeners
generateBtn.addEventListener('click', async () => {
    if (!validateForm()) {
        showError('Please fill in all required fields correctly.');
        return;
    }

    const storyData = {
        childName: childNameInput.value.trim(),
        childAge: parseInt(childAgeInput.value),
        childGender: childGenderSelect.value,
        dedication: dedicationInput.value.trim(),
        theme: themeSelect.value,
        moral: moralSelect.value,
        length: lengthSelect.value
    };

    try {
        isLoading = true;
        showLoading();
        hideError();
        
        // Generate story pages
        storyPages = await generateStoryPages(storyData);
        currentPage = 0;
        
        // Show first page
        showCurrentPage();
        updateNavigationButtons();
        
        // Hide loading state
        hideLoading();
    } catch (error) {
        console.error('Error generating story:', error);
        showError('Failed to generate story. Please try again.');
        hideLoading();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        showCurrentPage();
        updateNavigationButtons();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentPage < storyPages.length - 1) {
        currentPage++;
        showCurrentPage();
        updateNavigationButtons();
    }
});

retryButton.addEventListener('click', () => {
    hideError();
    generateBtn.click();
});

// Theme and Moral Combinations
const validCombinations = {
    adventure: ['courage', 'friendship', 'kindness', 'perseverance'],
    magic: ['courage', 'friendship', 'kindness', 'perseverance'],
    nature: ['courage', 'friendship', 'kindness', 'perseverance'],
    space: ['courage', 'friendship', 'kindness', 'perseverance']
};

// Update Moral Options based on Theme
themeSelect.addEventListener('change', () => {
    const theme = themeSelect.value;
    moralSelect.innerHTML = '<option value="">Select a moral</option>';
    
    if (theme) {
        const morals = getValidMoralsForTheme(theme);
        morals.forEach(moral => {
            const option = document.createElement('option');
            option.value = moral;
            option.textContent = moral.charAt(0).toUpperCase() + moral.slice(1);
            moralSelect.appendChild(option);
        });
    }
});

// Generate Story Pages
async function generateStoryPages(storyData) {
    // Get the appropriate story template based on theme and moral
    const storyTemplate = getStoryTemplate(storyData.theme, storyData.moral);
    
    // Generate pages based on length
    const pageCount = getPageCount(storyData.length);
    const pages = [];
    
    for (let i = 0; i < pageCount; i++) {
        const page = await generatePage(storyTemplate, i + 1, pageCount);
        pages.push(page);
    }
    
    return pages;
}

// Get Story Template
function getStoryTemplate(theme, moral) {
    // This would typically come from your story_generator.js
    // For now, we'll use a placeholder
    return {
        title: `${theme.charAt(0).toUpperCase() + theme.slice(1)} Adventure`,
        moral: moral,
        pages: []
    };
}

// Generate Page
async function generatePage(template, pageNumber, totalPages) {
    // This would typically use your story generation logic
    // For now, we'll use a placeholder
    return {
        title: `Page ${pageNumber}`,
        content: `This is page ${pageNumber} of ${totalPages} in the ${template.title} story about ${template.moral}.`,
        imageUrl: `https://placehold.co/600x400/3498db/ffffff?text=Page+${pageNumber}`
    };
}

// Get Page Count
function getPageCount(length) {
    switch (length) {
        case 'short':
            return 7;
        case 'medium':
            return 12;
        case 'long':
            return 15;
        default:
            return 7;
    }
}

// Show Current Page
function showCurrentPage() {
    if (storyPages.length === 0) return;
    
    const page = storyPages[currentPage];
    const storyImage = storyPreview.querySelector('.story-image');
    const storyTitle = storyPreview.querySelector('.story-title');
    const storyContent = storyPreview.querySelector('.story-content');
    
    storyImage.src = page.imageUrl;
    storyTitle.textContent = page.title;
    storyContent.textContent = page.content;
    
    updateNavigationButtons();
}

// Update Navigation Buttons
function updateNavigationButtons() {
    prevBtn.disabled = currentPage === 0;
    nextBtn.disabled = currentPage === storyPages.length - 1;
}

// Show Loading State
function showLoading() {
    loadingContainer.style.display = 'flex';
    storyPreview.style.display = 'none';
    generateBtn.disabled = true;
}

// Hide Loading State
function hideLoading() {
    loadingContainer.style.display = 'none';
    storyPreview.style.display = 'block';
    generateBtn.disabled = false;
    isLoading = false;
}

// Show Error State
function showError(message) {
    errorContainer.querySelector('.error-text').textContent = message;
    errorContainer.style.display = 'flex';
    storyPreview.style.display = 'none';
    generateBtn.disabled = false;
}

function hideError() {
    errorContainer.style.display = 'none';
}

// Retry Button
retryButton.addEventListener('click', () => {
    hideError();
    generateBtn.click();
});

// Theme and Moral Combinations
function getValidMoralsForTheme(theme) {
    const combinations = {
        adventure: ['courage', 'perseverance', 'friendship'],
        magic: ['kindness', 'courage', 'friendship'],
        nature: ['kindness', 'perseverance', 'friendship'],
        space: ['courage', 'perseverance', 'friendship']
    };
    return combinations[theme] || [];
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Add required field indicators
    const requiredLabels = document.querySelectorAll('.filter-label');
    requiredLabels.forEach(label => {
        if (label.htmlFor !== 'dedication') {
            label.classList.add('required');
        }
    });
}); 