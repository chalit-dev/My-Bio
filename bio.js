// Update clock hands
function updateClock() {
    const now = new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondDeg = seconds * 6;
    const minuteDeg = minutes * 6 + seconds * 0.1;
    const hourDeg = (hours % 12) * 30 + minutes * 0.5;

    // Floating clock
    document.getElementById("second").style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
    document.getElementById("minute").style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
    document.getElementById("hour").style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;

    // Background clock
    document.getElementById("second-bg").style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
    document.getElementById("minute-bg").style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
    document.getElementById("hour-bg").style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
}

// Parallax scroll effect
function handleScroll() {
    const floatingClock = document.getElementById("floatingClock");
    const scrollPosition = window.scrollY;
    
    // Show clock when scrolling up (negative scroll), hide when scrolling down
    if (scrollPosition < 100) {
        floatingClock.classList.add("show");
    } else {
        floatingClock.classList.remove("show");
    }

    // Optional: Add parallax effect to background clock
    const bgClock = document.querySelector(".bg-clock");
    if (bgClock) {
        bgClock.style.transform = `translateX(-50%) translateY(${scrollPosition * 0.3}px)`;
    }
}

// Initialize
setInterval(updateClock, 1000);
updateClock();
window.addEventListener("scroll", handleScroll);
handleScroll();
// Update clock hands
function updateClock() {
    const now = new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondDeg = seconds * 6;
    const minuteDeg = minutes * 6 + seconds * 0.1;
    const hourDeg = (hours % 12) * 30 + minutes * 0.5;

    // Floating clock
    document.getElementById("second").style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
    document.getElementById("minute").style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
    document.getElementById("hour").style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;

    // Background clock
    document.getElementById("second-bg").style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
    document.getElementById("minute-bg").style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
    document.getElementById("hour-bg").style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
}

// Parallax scroll effect
function handleScroll() {
    const floatingClock = document.getElementById("floatingClock");
    const scrollPosition = window.scrollY;
    
    // Show clock when scrolling up (negative scroll), hide when scrolling down
    if (scrollPosition < 100) {
        floatingClock.classList.add("show");
    } else {
        floatingClock.classList.remove("show");
    }

    // Optional: Add parallax effect to background clock
    const bgClock = document.querySelector(".bg-clock");
    if (bgClock) {
        bgClock.style.transform = `translateX(-50%) translateY(${scrollPosition * 0.3}px)`;
    }
}

// Initialize
setInterval(updateClock, 1000);
updateClock();
window.addEventListener("scroll", handleScroll);
handleScroll();

