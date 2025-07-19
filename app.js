// Application Data
const eventsData = [
    {
        id: 1,
        title: "Circuit Design Workshop",
        date: "2025-07-25",
        description: "Hands-on PCB design and analysis session with industry experts",
        image: "/api/placeholder/300/200",
        category: "workshop"
    },
    {
        id: 2,
        title: "Robotics Competition",
        date: "2025-08-10", 
        description: "Autonomous robot programming challenge with exciting prizes",
        image: "/api/placeholder/300/200",
        category: "competition"
    },
    {
        id: 3,
        title: "Tech Talk: AI in Electronics",
        date: "2025-08-15",
        description: "Industry expert presentation on AI applications in modern electronics",
        image: "/api/placeholder/300/200",
        category: "seminar"
    },
    {
        id: 4,
        title: "Hackathon 2025",
        date: "2025-09-05",
        description: "48-hour innovation challenge to solve real-world problems",
        image: "/api/placeholder/300/200",
        category: "hackathon"
    }
];

const projectsData = [
    {
        id: 1,
        title: "Smart Home Automation",
        domain: "IoT",
        description: "Voice-controlled home system using ESP32 with mobile app integration",
        image: "/api/placeholder/400/250",
        techStack: ["ESP32", "React Native", "Firebase", "Alexa SDK"],
        github: "https://github.com/electromos/smart-home",
        demo: "https://demo.electromos.com/smart-home"
    },
    {
        id: 2,
        title: "Line Following Robot",
        domain: "Robotics",
        description: "Autonomous robot with computer vision and PID control",
        image: "/api/placeholder/400/250",
        techStack: ["Arduino", "OpenCV", "C++", "Sensors"],
        github: "https://github.com/electromos/line-robot",
        demo: "https://demo.electromos.com/line-robot"
    },
    {
        id: 3,
        title: "Digital Signal Processor",
        domain: "Embedded Systems",
        description: "Custom DSP implementation for real-time audio processing",
        image: "/api/placeholder/400/250",
        techStack: ["STM32", "C", "MATLAB", "Signal Processing"],
        github: "https://github.com/electromos/dsp-audio",
        demo: "https://demo.electromos.com/dsp-audio"
    },
    {
        id: 4,
        title: "Weather Monitoring System",
        domain: "IoT",
        description: "Cloud-based environmental monitoring with data visualization",
        image: "/api/placeholder/400/250",
        techStack: ["Raspberry Pi", "Python", "AWS", "React"],
        github: "https://github.com/electromos/weather-monitor",
        demo: "https://demo.electromos.com/weather-monitor"
    },
    {
        id: 5,
        title: "Gesture Controlled Drone",
        domain: "Robotics",
        description: "Hand gesture recognition system for drone control",
        image: "/api/placeholder/400/250",
        techStack: ["Arduino", "Computer Vision", "Machine Learning", "Drone API"],
        github: "https://github.com/electromos/gesture-drone",
        demo: "https://demo.electromos.com/gesture-drone"
    },
    {
        id: 6,
        title: "Solar Panel Optimizer",
        domain: "Power Electronics",
        description: "MPPT controller for maximum power point tracking",
        image: "/api/placeholder/400/250",
        techStack: ["Microcontroller", "Power Electronics", "Algorithms", "Monitoring"],
        github: "https://github.com/electromos/solar-mppt",
        demo: "https://demo.electromos.com/solar-mppt"
    }
];

const highlightsData = [
    {
        id: 1,
        title: "Arduino Workshop Success",
        description: "50+ students learned embedded programming fundamentals",
        image: "/api/placeholder/350/200"
    },
    {
        id: 2,
        title: "Inter-IIT Competition",
        description: "Won 2nd place in robotics category at national level",
        image: "/api/placeholder/350/200"
    },
    {
        id: 3,
        title: "Industry Partnership",
        description: "Collaboration with leading tech companies for internships",
        image: "/api/placeholder/350/200"
    },
    {
        id: 4,
        title: "Innovation Lab Setup",
        description: "New lab with cutting-edge equipment for advanced projects",
        image: "/api/placeholder/350/200"
    },
    {
        id: 5,
        title: "Guest Lecture Series",
        description: "Renowned experts shared insights on emerging technologies",
        image: "/api/placeholder/350/200"
    }
];

// Global Variables
let currentHighlight = 0;

let signalAnimationId;
let rcAnimationId;

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
	document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
	    // VANTA.NET background
   /* VANTA.NET({
        el: "#vanta-bg",
        backgroundAlpha: 1,
        backgroundColor: 0x232a3c,   // dark navy (decimal or hex)
        color: 0xff5e8a,             // line/dot color (decimal or hex)
        points: 10,
        spacing: 15,
        maxDistance: 20,
        minHeight: 200,
        minWidth: 200,
        mouseControls: true,
        touchControls: false,
        gyroControls: false,
        scale: 1,
        scaleMobile: 1,
        showDots: true
    });*/
 
});
// ─── Loader Progress Logic ─────────────────────────────────────────
(function() {
  const bar = document.getElementById('progress-bar');
  const loader = document.getElementById('loader');
  let progress = 0;

  // simulate incremental progress up to 90%
  const interval = setInterval(() => {
    if (progress < 90) {
      progress += Math.random() * 5;            // random step for realism
      bar.style.width = progress + '%';
    } else {
      clearInterval(interval);
    }
  }, 200);

  // on full load, jump to 100% and fade out
  window.addEventListener('load', () => {
    clearInterval(interval);
    bar.style.width = '100%';

    setTimeout(() => {
      loader.classList.add('fade-out');
      setTimeout(() => loader.remove(), 500);
    }, 300); // give users a brief moment to see 100%
  });
})();

// ──────────────────────────────────────────────────────────────────

});

function initializeApp() {
    setupEventListeners();
    renderEvents();
    renderProjects();
    renderHighlights();
    setupSimulations();
    setupScrollAnimations();
    setupCarousel();
}

// Event Listeners Setup
function setupEventListeners() {
    // Dark mode toggle
    
    // Mobile menu toggle
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            scrollToSection(targetId);
            navMenu.classList.remove('active');
        });
    });

    // Contact form
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', handleContactForm);


    // Modal close
    const modal = document.getElementById('success-modal');
    const closeBtn = document.querySelector('.modal-close');
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
}

// Dark Mode Toggle with Particle Effect

// Smooth Scrolling
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    const navHeight = document.querySelector('.navbar').offsetHeight;
    const targetPosition = section.offsetTop - navHeight - 20;
    
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}

// Render Events
function renderEvents() {
    const eventsGrid = document.getElementById('events-grid');
    eventsGrid.innerHTML = '';
    
    eventsData.forEach((event, index) => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card fade-in-up';
        eventCard.style.animationDelay = `${index * 0.1}s`;
        
        const eventDate = new Date(event.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        eventCard.innerHTML = `
            <div class="event-category">${event.category}</div>
            <img src="${event.image}" alt="${event.title}" class="event-image">
            <h3 class="event-title">${event.title}</h3>
            <div class="event-date">${eventDate}</div>
            <p class="event-description">${event.description}</p>
        `;
        
        eventsGrid.appendChild(eventCard);
    });
}

// Render Projects
function renderProjects(filter = 'all') {
    const projectsGrid = document.getElementById('projects-grid');
    projectsGrid.innerHTML = '';
    
    const filteredProjects = filter === 'all' 
        ? projectsData 
        : projectsData.filter(project => project.domain === filter);
    
    filteredProjects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card fade-in-up';
        projectCard.style.animationDelay = `${index * 0.1}s`;
        
        const techStackHTML = project.techStack.map(tech => 
            `<span class="tech-tag">${tech}</span>`
        ).join('');
        
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <span class="project-domain">${project.domain}</span>
                <p class="project-description">${project.description}</p>
                <div class="tech-stack">${techStackHTML}</div>
                <div class="project-links">
                    <a href="${project.github}" target="_blank" class="project-link">GitHub</a>
                    <a href="${project.demo}" target="_blank" class="project-link">Live Demo</a>
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}



// Render Highlights
function renderHighlights() {
    const highlightsContainer = document.getElementById('highlights-container');
    const dotsContainer = document.getElementById('highlights-dots');
    
    highlightsContainer.innerHTML = '';
    dotsContainer.innerHTML = '';
    
    highlightsData.forEach((highlight, index) => {
        // Create highlight card
        const highlightCard = document.createElement('div');
        highlightCard.className = 'highlight-card';
        
        highlightCard.innerHTML = `
            <img src="${highlight.image}" alt="${highlight.title}" class="highlight-image">
            <div class="highlight-content">
                <h3 class="highlight-title">${highlight.title}</h3>
                <p class="highlight-description">${highlight.description}</p>
            </div>
        `;
        
        highlightsContainer.appendChild(highlightCard);
        
        // Create dot
        const dot = document.createElement('div');
        dot.className = `dot ${index === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => goToHighlight(index));
        dotsContainer.appendChild(dot);
    });
}

// Carousel Setup
function setupCarousel() {
    const prevBtn = document.getElementById('highlights-prev');
    const nextBtn = document.getElementById('highlights-next');
    
    prevBtn.addEventListener('click', () => {
        currentHighlight = currentHighlight > 0 ? currentHighlight - 1 : highlightsData.length - 1;
        updateCarousel();
    });
    
    nextBtn.addEventListener('click', () => {
        currentHighlight = currentHighlight < highlightsData.length - 1 ? currentHighlight + 1 : 0;
        updateCarousel();
    });
    
    // Auto-scroll carousel
    setInterval(() => {
        currentHighlight = currentHighlight < highlightsData.length - 1 ? currentHighlight + 1 : 0;
        updateCarousel();
    }, 5000);
}

function goToHighlight(index) {
    currentHighlight = index;
    updateCarousel();
}

function updateCarousel() {
    const container = document.getElementById('highlights-container');
    const dots = document.querySelectorAll('.dot');
    
    const cardWidth = 374; // 350px + 24px margin
    const offset = -currentHighlight * cardWidth;
    
    container.style.transform = `translateX(${offset}px)`;
    
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentHighlight);
    });
}

// Simulations Setup
function setupSimulations() {
    setupSignalProcessing();
    setupLogicGates();
    setupRCCircuit();
}

function setupSignalProcessing() {
    const canvas      = document.getElementById('signal-canvas');
    const ctx         = canvas.getContext('2d');
    const freqSlider  = document.getElementById('freq-slider');
    const ampSlider   = document.getElementById('amp-slider');
    const filterSelect= document.getElementById('filter-select');
    const freqValue   = document.getElementById('freq-value');
    const ampValue    = document.getElementById('amp-value');

    // real-time variables
    let time = 0;                      // seconds
    const dt = 0.001;                  // 1 ms sampling interval
    const RC = 0.01;                   // 10 ms
    const cutoff = 1 / (2 * Math.PI * RC);

    // α coefficients for discrete RC filters
    const α_lp = dt / (RC + dt);
    const α_hp = RC / (RC + dt);

    // filter states
    let y_lp = 0, y_hp = 0, x_prev = 0;

    function drawSignal() {
        const f = parseFloat(freqSlider.value);     // in Hz
        const A = parseFloat(ampSlider.value);      // in V
        const filter = filterSelect.value;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // draw grid & axes (omitted for brevity—keep your existing code) …

        const N = canvas.width - 40; // data points
        ctx.beginPath();
        ctx.strokeStyle = '#1FB8CD'; ctx.lineWidth = 2;

        // original signal
        for (let i = 0; i < N; i++) {
            const t_sample = time + i * dt;
            const x = A * Math.sin(2 * Math.PI * f * t_sample);
            const y = canvas.height/2 - x * (canvas.height/4);
            ctx[i === 0 ? 'moveTo' : 'lineTo'](40 + i, y);
        }
        ctx.stroke();

        // filtered signal
        if (filter !== 'none') {
            // reset local filter state per-frame for visualization consistency
            let lp = 0, hp = 0, prev = 0;
            ctx.beginPath();
            ctx.strokeStyle = '#FFC185'; ctx.lineWidth = 3;

            for (let i = 0; i < N; i++) {
                const t_sample = time + i * dt;
                const x = A * Math.sin(2 * Math.PI * f * t_sample);
                
                if (filter === 'lowpass') {
                    lp = lp + α_lp * (x - lp);
                    var out = lp;
                } else {
                    // high-pass: y[n] = α ( y[n-1] + x[n] - x[n-1] )
                    hp = α_hp * (hp + x - prev);
                    prev = x;
                    var out = hp;
                }

                const y = canvas.height/2 - out * (canvas.height/4);
                ctx[i === 0 ? 'moveTo' : 'lineTo'](40 + i, y);
            }
            ctx.stroke();
        }

        // === LEGEND & INFO DISPLAY ===

// 💠 Original Signal label
ctx.font = 'bold 15px "Verdana", sans-serif';
ctx.fillStyle = '#1FB8CD';
ctx.fillText('Original Signal', canvas.width - 150, 25);

// 🔶 Filtered Signal label
if (filter !== 'none') {
    ctx.font = 'bold 15px "Verdana", sans-serif';
    ctx.fillStyle = '#FFC185';
    ctx.fillText('Filtered Signal', canvas.width - 150, 45);

    // ⚙️ Technical filter info (lighter font)
    ctx.font = '11px "Verdana", sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.8)';
    ctx.fillText(
      `${filter === 'lowpass' ? 'Low-pass' : 'High-pass'} RC=${RC}s`, 
      canvas.width - 150, 70
    );
    ctx.fillText(`Cutoff = ${cutoff.toFixed(1)} Hz`, canvas.width - 150, 85);
}

// 📊 Real-time input info (bottom left)
ctx.font = '11px "Verdana", sans-serif';
ctx.fillStyle = 'rgba(255,255,255,0.9)';
ctx.fillText(`Input: ${f}Hz, ${A.toFixed(1)}V`, 10, canvas.height - 40);
ctx.fillText(`Time: ${time.toFixed(3)}s`, 10, canvas.height - 25);

        // advance global time
        time += dt;

        // loop
        signalAnimationId = requestAnimationFrame(drawSignal);
    }

    // update display values
    freqSlider.addEventListener('input', () => { freqValue.textContent = freqSlider.value; });
    ampSlider .addEventListener('input', () => { ampValue.textContent = parseFloat(ampSlider.value).toFixed(1); });
    filterSelect.addEventListener('change', () => { y_lp = y_hp = x_prev = 0; });

    drawSignal();
}

function setupLogicGates() {
    const gateSelect    = document.getElementById('gate-select');
    const inputA        = document.getElementById('input-a');
    const inputB        = document.getElementById('input-b');
    const groupB        = document.getElementById('group-b');
    const logicOutput   = document.getElementById('logic-output');
    const truthTable    = document.querySelector('#truth-table tbody');
    
    function computeGate(gate, a, b) {
        switch (gate) {
            case 'AND':  return a & b;
            case 'OR':   return a | b;
            case 'NOT':  return a ^ 1;
            case 'XOR':  return a ^ b;
            case 'NAND': return (a & b) ^ 1;
            case 'NOR':  return (a | b) ^ 1;
            case 'XNOR': return (a ^ b) ^ 1;
            default:     return 0;
        }
    }
    
    function updateLogicOutput() {
        const gate = gateSelect.value;
        const a    = +inputA.dataset.state;
        const b    = +inputB.dataset.state;
        
        // Hide B for NOT gate
        groupB.style.display = (gate === 'NOT') ? 'none' : 'flex';
        
        // compute and display
        const out = computeGate(gate, a, b);
        logicOutput.textContent = out;
        logicOutput.classList.toggle('active', out === 1);
        
        // regenerate truth table
        renderTruthTable(gate);
    }
    
    function renderTruthTable(gate) {
        truthTable.innerHTML = '';
        const rows = (gate === 'NOT')
            ? [[0,0],[1,0]]      // for NOT: B unused, show A→Out
            : [[0,0],[0,1],[1,0],[1,1]];
        
        rows.forEach(([a,b]) => {
            const out = computeGate(gate, a, b);
            const tr = document.createElement('tr');
            tr.innerHTML = `
              <td>${a}</td>
              <td>${gate==='NOT'?'–':b}</td>
              <td>${out}</td>
            `;
            truthTable.appendChild(tr);
        });
    }
    
    // toggle handlers
    function makeToggle(btn) {
        btn.addEventListener('click', () => {
            const cur = +btn.dataset.state;
            const nxt = cur ^ 1;
            btn.dataset.state = nxt;
            btn.textContent    = nxt;
            btn.classList.toggle('active', nxt === 1);
            updateLogicOutput();
        });
    }
    
    // init
    makeToggle(inputA);
    makeToggle(inputB);
    gateSelect.addEventListener('change', updateLogicOutput);
    
    // first render
    updateLogicOutput();
}

// RC Circuit Simulation
function setupRCCircuit() {
    const canvas = document.getElementById('rc-canvas');
    const ctx = canvas.getContext('2d');
    const rSlider = document.getElementById('r-slider');
    const cSlider = document.getElementById('c-slider');
    const rValue = document.getElementById('r-value');
    const cValue = document.getElementById('c-value');
    const timeConstant = document.getElementById('time-constant');
    const startBtn = document.getElementById('rc-start');
    const resetBtn = document.getElementById('rc-reset');
    
    let isCharging = false;
    let startTime = 0;
    let voltage = 0;
    const voltageData = [];
    
    function updateTimeConstant() {
        const R = parseFloat(rSlider.value) * 1000; // Convert to ohms
        const C = parseFloat(cSlider.value) * 1e-6; // Convert to farads
        const tau = R * C;
        timeConstant.textContent = tau.toFixed(3);
    }
    
    function drawRCResponse() {
        if (!isCharging && voltageData.length === 0) return;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw grid
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.lineWidth = 1;
        for (let i = 0; i < canvas.width; i += 50) {
            ctx.beginPath();
            ctx.moveTo(i, 0);
            ctx.lineTo(i, canvas.height);
            ctx.stroke();
        }
        for (let i = 0; i < canvas.height; i += 50) {
            ctx.beginPath();
            ctx.moveTo(0, i);
            ctx.lineTo(canvas.width, i);
            ctx.stroke();
        }
        
        // Draw axes
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, canvas.height - 50);
        ctx.lineTo(canvas.width, canvas.height - 50);
        ctx.moveTo(50, 0);
        ctx.lineTo(50, canvas.height);
        ctx.stroke();
        
        // Draw voltage curve
        if (voltageData.length > 1) {
            ctx.strokeStyle = '#1FB8CD';
            ctx.lineWidth = 3;
            ctx.beginPath();
            
            voltageData.forEach((v, index) => {
                const x = 50 + (index / voltageData.length) * (canvas.width - 100);
                const y = canvas.height - 50 - (v / 5) * (canvas.height - 100);
                
                if (index === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
            });
            
            ctx.stroke();
        }
        
        // Draw current voltage level
        ctx.fillStyle = '#1FB8CD';
        ctx.font = '16px Helvetica';
        ctx.fillText(`Voltage: ${voltage.toFixed(2)}V`, canvas.width - 150, 30);
        
        if (isCharging) {
            rcAnimationId = requestAnimationFrame(drawRCResponse);
        }
    }
    
    function startCharging() {
        if (isCharging) return;
        
        isCharging = true;
        startTime = Date.now();
        voltageData.length = 0;
        voltage = 0;
        
        const R = parseFloat(rSlider.value) * 1000;
        const C = parseFloat(cSlider.value) * 1e-6;
        const tau = R * C;
        
        function updateVoltage() {
            if (!isCharging) return;
            
            const elapsed = (Date.now() - startTime) / 1000;
            voltage = 5 * (1 - Math.exp(-elapsed / tau));
            voltageData.push(voltage);
            
            if (voltageData.length > 200) {
                voltageData.shift();
            }
            
            if (voltage < 4.95) {
                setTimeout(updateVoltage, 50);
            } else {
                isCharging = false;
            }
        }
        
        updateVoltage();
        drawRCResponse();
    }
    
    function resetCircuit() {
        isCharging = false;
        voltage = 0;
        voltageData.length = 0;
        if (rcAnimationId) {
            cancelAnimationFrame(rcAnimationId);
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    
    // Event listeners
    rSlider.addEventListener('input', () => {
        rValue.textContent = rSlider.value;
        updateTimeConstant();
    });
    
    cSlider.addEventListener('input', () => {
        cValue.textContent = cSlider.value;
        updateTimeConstant();
    });
    
    startBtn.addEventListener('click', startCharging);
    resetBtn.addEventListener('click', resetCircuit);
    
    updateTimeConstant();
}

// Toggle Simulation
function toggleSimulation(simId) {
    const simCard = document.getElementById(simId);
    const toggle = simCard.querySelector('.sim-toggle');
    
    simCard.classList.toggle('active');
    toggle.textContent = simCard.classList.contains('active') ? '−' : '+';
}

// Contact Form Handling
function handleContactForm(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const name = formData.get('name').trim();
    const email = formData.get('email').trim();
    const message = formData.get('message').trim();
    
    // Clear previous errors
    document.querySelectorAll('.form-error').forEach(error => {
        error.classList.remove('active');
        error.textContent = '';
    });
    
    let isValid = true;
    
    // Validate name
    if (!name) {
        showError('name-error', 'Name is required');
        isValid = false;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        showError('email-error', 'Email is required');
        isValid = false;
    } else if (!emailRegex.test(email)) {
        showError('email-error', 'Please enter a valid email');
        isValid = false;
    }
    
    // Validate message
    if (!message) {
        showError('message-error', 'Message is required');
        isValid = false;
    } else if (message.length < 10) {
        showError('message-error', 'Message must be at least 10 characters');
        isValid = false;
    }
    
    if (isValid) {
        // Simulate form submission
        setTimeout(() => {
            document.getElementById('success-modal').classList.add('active');
            e.target.reset();
        }, 500);
    }
}

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.classList.add('active');
}

// Component Issue Form
function openComponentForm() {
    window.open('https://forms.google.com/placeholder-component-request', '_blank');
}

// Scroll Animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe all fade-in-up elements
    document.querySelectorAll('.fade-in-up').forEach(el => {
        observer.observe(el);
    });
    
    // Add fade-in-up class to sections
    const sections = document.querySelectorAll('section > .container');
    sections.forEach((section, index) => {
        section.classList.add('fade-in-up');
        section.style.animationDelay = `${index * 0.1}s`;
        observer.observe(section);
    });
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.15)';
        navbar.style.backdropFilter = 'blur(25px)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.1)';
        navbar.style.backdropFilter = 'blur(20px)';
    }
});

// Utility Functions
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance optimized scroll handler
const handleScroll = debounce(() => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.15)';
        navbar.style.backdropFilter = 'blur(25px)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.1)';
        navbar.style.backdropFilter = 'blur(20px)';
    }
}, 10);

window.addEventListener('scroll', handleScroll);

// Error handling
window.addEventListener('error', (e) => {
    console.error('Application error:', e.error);
});

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    if (signalAnimationId) cancelAnimationFrame(signalAnimationId);
    if (rcAnimationId) cancelAnimationFrame(rcAnimationId);
});
