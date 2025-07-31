function nextPage(pageNumber) {
    // Professional page transition with smooth animation
    const currentPage = document.querySelector('.page.active');
    const nextPageElement = document.getElementById('page' + pageNumber);
    
    if (!nextPageElement) {
        console.error('Page not found: page' + pageNumber);
        return;
    }
    
    if (currentPage) {
        currentPage.style.transform = 'translateX(-100%)';
        currentPage.style.opacity = '0';
        
        setTimeout(() => {
            currentPage.classList.remove('active');
            currentPage.style.transform = 'translateX(100%)';
            
            // Show next page with smooth entrance
            nextPageElement.classList.add('active');
            nextPageElement.style.transform = 'translateX(100%)';
            nextPageElement.style.opacity = '0';
            
            // Trigger smooth entrance animation
            requestAnimationFrame(() => {
                nextPageElement.style.transform = 'translateX(0)';
                nextPageElement.style.opacity = '1';
            });
        }, 300);
    } else {
        nextPageElement.classList.add('active');
    }
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
    // Handle loading screen
    const loadingScreen = document.getElementById('loading-screen');
    
    // Hide loading screen after content is ready
    setTimeout(() => {
        if (loadingScreen) {
            loadingScreen.classList.add('hidden');
            setTimeout(() => {
                loadingScreen.remove();
            }, 800);
        }
    }, 3200); // Wait for loading animation to complete
    
    // Initialize first page with proper animation
    const firstPage = document.getElementById('page1');
    if (firstPage) {
        setTimeout(() => {
            firstPage.classList.add('active');
        }, 3500); // Delay until after loading screen
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

// Professional Netflix-style particles - with error handling
if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js',
      {
        "particles": {
          "number": {
            "value": 50,
            "density": {
              "enable": true,
              "value_area": 1000
            }
          },
      "color": {
        "value": ["#e50914", "#f5c842", "#ffffff"]
      },
      "shape": {
        "type": "circle"
      },
      "opacity": {
        "value": 0.3,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 2,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 2,
          "size_min": 0.5,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 120,
        "color": "#e50914",
        "opacity": 0.2,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 0.5
          }
        },
        "push": {
          "particles_nb": 4
        }
      }
    },
    "retina_detect": true
  }
);
} else {
    console.warn('particlesJS not loaded, continuing without particles');
}

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