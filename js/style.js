document.addEventListener('DOMContentLoaded', () => {
    // --- Global Music Player Logic ---
    const backgroundMusic = document.getElementById('backgroundMusic');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const musicToggleButton = document.getElementById('music-toggle');

    let isMusicPlaying = localStorage.getItem('musicPlaying') === 'true';

    const updateMusicState = () => {
        if (isMusicPlaying) {
            backgroundMusic.play().catch(e => {
                console.log("Autoplay prevented or failed:", e);
                isMusicPlaying = false;
                if (playPauseBtn) playPauseBtn.classList.replace('fa-pause', 'fa-play');
                if (musicToggleButton) musicToggleButton.textContent = 'Play Music';
                localStorage.setItem('musicPlaying', 'false');
            });
            if (playPauseBtn) playPauseBtn.classList.replace('fa-play', 'fa-pause');
            if (musicToggleButton) musicToggleButton.textContent = 'Pause Music';
        } else {
            backgroundMusic.pause();
            if (playPauseBtn) playPauseBtn.classList.replace('fa-pause', 'fa-play');
            if (musicToggleButton) musicToggleButton.textContent = 'Play Music';
        }
        localStorage.setItem('musicPlaying', isMusicPlaying);
    };

    if (playPauseBtn) {
        playPauseBtn.addEventListener('click', () => {
            isMusicPlaying = !isMusicPlaying;
            updateMusicState();
        });
    }

    if (musicToggleButton) {
        musicToggleButton.addEventListener('click', () => {
            isMusicPlaying = !isMusicPlaying;
            updateMusicState();
        });
    }

    updateMusicState();


    // --- Page-specific Logic ---

    const currentPage = window.location.pathname.split('/').pop();

    // --- Index Page Logic (index.html - The Unfurling Scroll) ---
    if (currentPage === '' || currentPage === 'index.html') {
        const continueBtn = document.getElementById('continueBtn1');
        const letterParagraphs = document.querySelectorAll('.page-container p, .surprise-text');
        
        letterParagraphs.forEach(p => p.style.opacity = '0');
        if (continueBtn) {
            continueBtn.style.opacity = '0';
        }

        let delay = 1000;
        letterParagraphs.forEach((p, index) => {
            setTimeout(() => {
                p.style.animation = `unveilEffect 1.8s forwards ${index * 0.6}s`;
            }, delay);
            delay += 600;
        });

        if (continueBtn) {
            setTimeout(() => {
                continueBtn.style.animation = 'unveilEffect 1.8s forwards';
                continueBtn.style.display = 'inline-block';
            }, delay + 800);
            
            continueBtn.addEventListener('click', () => {
                isMusicPlaying = true;
                updateMusicState();
                window.location.href = 'memories.html'; // Navigate to Memories
            });
        }
    }

    // --- Memories Page Logic (memories.html - Whispers in the Gallery of Time) ---
    if (currentPage === 'memories.html') {
        updateMusicState();
        // Add navigation for 'Next' button if it exists
        const nextBtn = document.querySelector('.next-btn');
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                window.location.href = 'moments.html'; // Navigate to Moments
            });
        }
    }

    // --- Moments Page Logic (moments.html - Echoes of Laughter) ---
    if (currentPage === 'moments.html') {
        updateMusicState();
        const nextBtn = document.querySelector('.next-btn');
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                window.location.href = 'waterfall.html'; // Navigate to Waterfall
            });
        }
    }

    // --- Waterfall Page Logic (waterfall.html - River of Silent Wishes) ---
    if (currentPage === 'waterfall.html') {
        updateMusicState();
        const nextBtn = document.querySelector('.next-btn');
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                window.location.href = 'journeys.html'; // Navigate to Journeys
            });
        }
    }

    // --- Journeys Page Logic (journeys.html - Paths Intertwined) ---
    if (currentPage === 'journeys.html') {
        updateMusicState();
        const nextBtn = document.querySelector('.next-btn');
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                window.location.href = 'future.html'; // Navigate to Future
            });
        }
    }

    // --- Future Page Logic (future.html - The Unwritten Scroll) ---
    if (currentPage === 'future.html') {
        updateMusicState();
        const nextBtn = document.querySelector('.next-btn');
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                window.location.href = 'celebrate.html'; // Navigate to Celebrate (Final)
            });
        }
    }

    // --- Celebrate Page Logic (celebrate.html - The Temple of Eternal Love) ---
    if (currentPage === 'celebrate.html') {
        updateMusicState();

        const etherealDustEmitter = document.querySelector('.ethereal-dust-emitter');
        const numDustParticles = 100;
        const colors = ['rgba(255, 255, 255, 0.8)', 'rgba(255, 240, 220, 0.7)', 'rgba(255, 250, 240, 0.9)'];

        function createEtherealDust() {
            if (!etherealDustEmitter) return;
            for (let i = 0; i < numDustParticles; i++) {
                const dust = document.createElement('div');
                dust.classList.add('ethereal-dust');

                dust.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                dust.style.left = `${Math.random() * 100}%`;
                dust.style.top = `${Math.random() * 100}%`;
                dust.style.width = `${3 + Math.random() * 3}px`;
                dust.style.height = dust.style.width;

                dust.style.animationDelay = `${Math.random() * 8}s`;
                dust.style.animationDuration = `${10 + Math.random() * 10}s`;

                etherealDustEmitter.appendChild(dust);
            }
        }
        setTimeout(createEtherealDust, 2500);

        const returnToStartBtn = document.querySelector('.return-to-start-btn');
        if (returnToStartBtn) {
            returnToStartBtn.addEventListener('click', () => {
                window.location.href = 'index.html'; // Navigate back to the start
            });
        }
    }

}); // End DOMContentLoaded
