function nextPage(pageNumber) {
    console.log('=== nextPage called ===');
    console.log('Requested page:', pageNumber);
    console.log('Total pages found:', document.querySelectorAll('.page').length);
    
    // Professional page transition with smooth animation
    const currentPage = document.querySelector('.page.active');
    const nextPageElement = document.getElementById('page' + pageNumber);
    
    console.log('Current active page:', currentPage ? currentPage.id : 'None');
    console.log('Target page element:', nextPageElement ? nextPageElement.id : 'NOT FOUND');
    
    if (!nextPageElement) {
        console.error('ERROR: Page not found: page' + pageNumber);
        alert('Debug: Page ' + pageNumber + ' not found!');
        return;
    }
    
    // Simplified transition without complex animations
    if (currentPage) {
        currentPage.classList.remove('active');
        console.log('Removed active from:', currentPage.id);
    }
    
    nextPageElement.classList.add('active');
    console.log('Added active to:', nextPageElement.id);
    
    // Force display update
    nextPageElement.style.display = 'flex';
    nextPageElement.style.opacity = '1';
    
    console.log('Page transition completed successfully');
}

function acceptProposal() {
    // Create a full-screen celebration effect
    const celebration = document.createElement('div');
    celebration.className = 'celebration';
    celebration.innerHTML = `
        <div class="celebration-content">
            <h1>🎉 Yaaay! 🎉</h1>
            <p>You just made me the happiest person alive! 💖</p>
        </div>
    `;
    document.body.appendChild(celebration);
    
    // Add confetti effect
    createConfetti();
}

function rejectProposal() {
    let keepAsking = true;
    while (keepAsking) {
        keepAsking = !confirm("Are you really sure? 🥺\nPlease think again!");
        if (keepAsking) {
            alert("I knew you'd change your mind! 😊\nSo... will you be mine?");
        }
    }
    // If they somehow break the loop, ask one more time
    setTimeout(() => {
        location.reload();
    }, 500);
}

// Simple confetti effect
function createConfetti() {
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 5000);
    }
}

// Professional loading and initialization
document.addEventListener('DOMContentLoaded', function() {
    // Handle loading screen - simplified
    const loadingScreen = document.getElementById('loading-screen');
    
    // Hide loading screen immediately for debugging
    setTimeout(() => {
        if (loadingScreen) {
            loadingScreen.style.display = 'none';
        }
    }, 1000); // Shorter delay
    
    // Initialize first page immediately
    const firstPage = document.getElementById('page1');
    if (firstPage) {
        setTimeout(() => {
            firstPage.classList.add('active');
            firstPage.style.display = 'flex';
            console.log('First page activated:', firstPage.id);
        }, 1200); // Shorter delay
    }
    
    // Add smooth fade-in effect to all pages
    document.querySelectorAll('.page').forEach((page, index) => {
        page.classList.add('fade-in');
        page.style.transition = 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    });
    
    // Add loading optimization for images
    document.querySelectorAll('img').forEach(img => {
        img.loading = 'lazy';
        img.style.transition = 'all 0.3s ease';
        
        // Add subtle hover effect to images
        img.addEventListener('mouseenter', () => {
            img.style.transform = 'scale(1.02)';
        });
        
        img.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1)';
        });
    });
});

// Performance optimization for smooth scrolling
if ('scrollBehavior' in document.documentElement.style) {
    document.documentElement.style.scrollBehavior = 'smooth';
}

// Particles temporarily disabled for debugging
console.log('Particles.js disabled for debugging');

// Professional floating hearts with better performance
function createFloatingHearts() {
    const container = document.querySelector('.floating-hearts');
    if (!container) return;
    
    const heart = document.createElement('div');
    heart.innerHTML = '💖';
    heart.style.cssText = `
        position: absolute;
        left: ${Math.random() * 100}vw;
        font-size: 1.5rem;
        animation: professionalFloatUp ${Math.random() * 3 + 4}s linear forwards;
        pointer-events: none;
        z-index: -1;
    `;
    container.appendChild(heart);
    
    // Clean up after animation
    setTimeout(() => {
        if (heart.parentNode) {
            heart.remove();
        }
    }, 7000);
}

// Start heart animation with better timing
let heartInterval;
function startHeartAnimation() {
    heartInterval = setInterval(createFloatingHearts, 800);
}

// Initialize heart animation when page 12 is active
function initializeSpecialEffects() {
    const page12 = document.getElementById('page12');
    if (page12) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    startHeartAnimation();
                } else if (heartInterval) {
                    clearInterval(heartInterval);
                }
            });
        });
        observer.observe(page12);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeSpecialEffects); 