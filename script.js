// ---- DATA: Daily schedule ----
const dayData = [
  {
    id: "mon",
    label: "Mon, Dec 1",
    events: [
      {
        time: "10:30 – 12:00 · Room 320A",
        title: "Tutorial 5: Simulation Building Blocks: Game Engines For Military Use 101",
        location: "Room 320A",
        type: "Tutorial",
        presenters: "Aptima Presenters: Stephanie Fussell, PhD; Summer Rebensky, PhD",
      },
      {
        time: "12:45 – 14:15 · Room 310CD",
        title: "Tutorial 2: Humans vs. AI – Architecting Compound AI for Training and Augmenting Human-AI Teams",
        location: "Room 310CD",
        type: "Tutorial",
        presenters: "Presenters: Zachary Klinefelter, PhD; Gabriel Ganberg; Summer Rebensky, PhD; Adam Fouse, PhD; Svitlana Volkova, PhD",
      },
    ],
  },
  {
    id: "tue",
    label: "Tue, Dec 2",
    events: [
      {
        time: "13:15 – 14:30 · Exhibit Hall",
        title: "Wargaming Panel – AI's Impact in M&S and the Battlefield",
        location: "Exhibit Hall",
        type: "Panel",
        presenters: "Panelist: Svitlana Volkova, PhD",
      },
      {
        time: "17:00 – 18:30 · Booth 401",
        title: "Exhibitor Hospitality at I/ITSEC 2025",
        location: "Booth 401",
        type: "Hospitality Event",
        presenters: "Join us for light bites and a complimentary beer, wine, and seltzer bar.",
        highlight: true 
      },
    ],
  },
  {
    id: "wed",
    label: "Wed, Dec 3",
    events: [
      {
        time: "08:30 – 10:00 · Room 320B",
        title: "Paper Session: Innovating Talent Strategies: Competency, Collaboration, and Engagement in the Modern Force",
        location: "Room 320B",
        type: "Paper Session",
        presenters: "Paper: Competency Modeling in the USSF · Julia Brown",
      },
      {
        time: "08:30 – 10:00 · Room 320C",
        title: "Paper Session: Big Data? Bigger Challenges!",
        location: "Room 320C",
        type: "Paper Session",
        presenters: "Session Chair: Summer Rebensky, PhD",
      },
      {
        time: "08:30 – 10:00 · Room 320F",
        title: "Paper Session: Training Strategies – A Data-Centric Approach for Extracting Flight Maneuvers from Pilot Training Time Series Data",
        location: "Room 320F",
        type: "Paper Session",
        presenters: "Aptima Contributors: Samantha Emerson, PhD; Mark Schroeder-Strong, PhD",
      },
      {
        time: "10:30 – 12:00 · Room 320G",
        title: "Paper Session: Cognitive Crossroads – Human-AI Collaboration for Synthetic Media Detection in Training and Operations",
        location: "Room 320G",
        type: "Paper Session",
        presenters: "Aptima Contributors: Laura Cassani; Michael Davinroy; Tatiana Toumbeva, PhD; Peter Bautista; Lauren Fortier; Ashley Hart; Svitlana Volkova, PhD",
      },
      {
        time: "10:30 – 12:00 · Room 320F",
        title: "Paper Session: Of Paper And Pixels – Advancing Training at all Fidelities",
        location: "Room 320F",
        type: "Paper Session",
        presenters: "Paper: Comparing Input Modalities in Extended Reality for a Virtual Learning/Training Task · Stephanie Fussell, PhD; Summer Rebensky, PhD; Samantha Perry, PhD",
      },
      {
        time: "13:00 – 16:00 · Room 210A",
        title: "NTSA Career Fair at I/ITSEC",
        location: "Room 210A",
        type: "Career Fair",
        presenters: "Bella Perault – People Operations Generalist",
        highlight: true
      },
      {
        time: "13:30 – 15:00 · Room 320A",
        title: "Paper Session: The AI Playbook – Designing Missions and Forces at Machine Speed",
        location: "Room 320A",
        type: "Paper Session",
        presenters: "Paper: Applying AI-Driven Generative Models for Computer-Generated Force Scenario Generation · William Dupree, PhD; Svitlana Volkova, PhD; Hsien-Te Kao; Gabriel Ganberg; Alexxa Bessey, PhD; Summer Rebensky, PhD",
      },
    ],
  },
  {
    id: "thu",
    label: "Thu, Dec 4",
    events: [
      {
        time: "08:30 – 10:00 · Destination Lounge",
        title: "Speaker Session: The Next Big Thing – Wearables and Human Sensors",
        location: "Destination Lounge",
        type: "Speaker Session",
        presenters: "Speaker: Sylvain Bruni · Human AI Teams That Train With You: Embodied Agents for Performance and Readiness",
      },
    ],
  },
];

// ---- DATA: Showcase Technologies ----
const techData = [
  {
    id: "nautical",
    name: "NAUTICAL",
    summary: "Accelerate training development with NAUTICAL.",
    valueAdd: "NAUTICAL uses advanced generative AI RAG and Chain-of-Thought prompting to shorten Speed to the Fleet, reduce costs, and improve instructional precision.",
    details: "By acting as an expert resource inside the ISD process, NAUTICAL strengthens Sailor proficiency and enables faster, more adaptive, and more cost-effective training across the fleet.",
  },
  {
    id: "whitecell",
    name: "White Cell In A Box",
    summary: "A portable, data-driven assessment and AAR training solution.",
    valueAdd: "Get faster insights and higher-quality feedback from every training exercise. Captures objective performance data, unifies mission playback, and digitizes evaluations.",
    details: "Helps trainers quickly understand what happened, identify performance gaps, and deliver evidence-based feedback across live, virtual, constructive, and simulator environments.",
    partners: "805th Squadron Operations Center at Nellis Air Force Base",
  },
  {
    id: "propel",
    name: "PROPEL",
    summary: "Tactical Action Officer precision learning.",
    valueAdd: "Provides objective, data-driven performance scoring and personalized learning recommendations. Tracks strengths and weaknesses over time.",
    details: "By combining real-time data with observer inputs, Propel gives teams a holistic view of performance and helps maintain optimal learning zones.",
    partners: "Surface Combat Systems Training Command (SCSTC) ATRC at Dahlgren & SCSTC Hampton Roads",
  },
  {
    id: "jitmma",
    name: "JITMMA",
    summary: "Personnel-to-mission matching for dynamic operational environments.",
    valueAdd: "Identifies which available personnel best match mission tasks, what training bridges gaps, and what job aids support execution.",
    details: "Built for volatile, uncertain, complex, and ambiguous environments where leaders must rapidly reassign tasks across limited personnel.",
  },
  {
    id: "forcegen",
    name: "FORCEGEN",
    summary: "AI-enabled training scenario generation.",
    valueAdd: "Rapidly generates high-quality, mission-relevant scenarios using AI, reducing development time and ensuring relevance to emerging threats.",
    details: "Supports wargaming and training teams in creating up-to-date scenarios informed by CAF DTC and AF National Guard DTOC.",
    partners: "Partnering with USAF Distributed Training Centers & the Chief Modeling and Simulation Office",
  },
  {
    id: "ai-wargaming",
    name: "AI for Wargaming",
    summary: "High-fidelity kinetic and cognitive warfare mission scenarios.",
    valueAdd: "Delivers doctrinally aligned, TTP-correct scenarios at machine speed — enabling mission training at operational relevance.",
    details: "Integrates multiple AI-driven tools to enhance wargaming and training readiness.",
  },
  {
    id: "fitforce",
    name: "FitForce",
    summary: "Scalable, offline-capable fitness training platform.",
    valueAdd: "Improves fitness outcomes, lowers injury rates and cost burdens, and sustains physical readiness.",
    details: "Deploys scientific strength and conditioning practices, sends workouts to a mobile app, and provides tracking and feedback.",
    partners: "Marine Corps TECOM, Human Performance Branch, SMIP, and the Martial Arts & Fitness Center of Excellence",
  },
];

// ---- DATA: Board Mentions (Updated) ----
const boardMentions = [
  { role: "Scholarships Chair", name: "Janet Spruill" }, 
  { role: "Deputy Chair, Education Subcommittee", name: "Kara Orvis, PhD" },
  { role: "Tutorial Subcommittee Members", name: "Ramona Shires, ND; Summer Rebensky, PhD" },
  { role: "Human Performance, Analysis & Engineering Committee Members", name: "Stephanie Fussell, PhD; Summer Rebensky, PhD" },
];

// ---- DATA: Internships ----
const internRoles = [
  { division: "Performance Augmentation Systems", title: "Scientist Intern", location: "Remote", summary: "Support the design and evaluation of human performance augmentation systems." },
  { division: "Performance Augmentation Systems", title: "Software Engineer Intern", location: "Dayton, OH", summary: "Contribute to software for wearable sensors and IoT-based health monitoring." },
  { division: "Intelligent Performance Analytics", title: "AI Engineer Intern", location: "Remote", summary: "Collaborate on the design and implementation of ML models and data workflows." },
  { division: "Strategic Communications", title: "Graphic Artist Intern", location: "Dayton, OH · Woburn, MA · Orlando, FL", summary: "Create engaging visuals that support Aptima’s brand identity." },
  { division: "Strategic Programs Office", title: "Program Analyst Intern", location: "Orlando, FL", summary: "Support financial reporting, data tracking, and performance monitoring." },
  { division: "Training, Learning & Readiness", title: "Scientist Intern", location: "Dayton, OH", summary: "Assist with research, data analysis, and reporting on training projects." },
  { division: "Training, Learning & Readiness", title: "Software Engineer Intern", location: "Dayton, OH", summary: "Develop and test software for training and performance assessment systems." },
];

// ---- DATA: Under 40 ----
const under40Honorees = [
  {
    id: "sam-perry",
    name: "Dr. Samantha Perry",
    photo: "sam-perry.png",
    blurb: "Dr. Samantha Perry is a leader in AI-enabled training and human performance research, guiding one of Aptima’s largest MS&T portfolios. Her work shaping adaptive training systems, mentoring early-career scientists, and advancing the field through prolific scholarship makes her a standout innovator driving the future of defense training."
  },
  {
    id: "alexxa-bessey",
    name: "Dr. Alexxa Bessey",
    photo: "alexxa-bessey.png",
    blurb: "Dr. Alexxa Bessey drives cutting-edge research in team performance, AI-enabled training, and simulation-based evaluation across the Army and Air Force enterprises. Her leadership, mentorship, and policy engagement are shaping the next generation of evidence-based military training."
  },
];

// ---- SCROLL INDICATOR LOGIC ----
function checkScroll(panelId) {
  const panel = document.getElementById(panelId);
  if (!panel) return;
  
  const list = panel.querySelector('.events-list');
  const indicator = panel.querySelector('.scroll-indicator');
  
  if (!list || !indicator) return;

  const isOverflowing = list.scrollHeight > list.clientHeight;
  
  const updateIndicator = () => {
    const atBottom = list.scrollTop + list.clientHeight >= list.scrollHeight - 10;
    if (isOverflowing && !atBottom) {
      indicator.classList.remove('hidden');
    } else {
      indicator.classList.add('hidden');
    }
  };

  updateIndicator();
  list.onscroll = updateIndicator;
}

// ---- DATE LOGIC ----
function getDefaultDayId() {
  const now = new Date();
  now.setHours(0, 0, 0, 0);

  const currentYear = now.getFullYear();

  const dayMap = dayData.map(d => {
    const datePart = d.label.split(', ')[1]; 
    const dateObj = new Date(`${datePart}, ${currentYear}`);
    dateObj.setHours(0, 0, 0, 0);
    return { id: d.id, date: dateObj };
  });

  const todayMatch = dayMap.find(d => d.date.getTime() === now.getTime());
  if (todayMatch) return todayMatch.id;

  const futureMatch = dayMap.find(d => d.date > now);
  if (futureMatch) return futureMatch.id;

  return dayData[0].id;
}

// ---- PANEL UTILITIES ----
function openPanel(id) {
  const panel = document.getElementById(id);
  if (!panel) return;
  panel.classList.add("open");
  panel.setAttribute("aria-hidden", "false");
  setTimeout(() => checkScroll(id), 100);
}

function closePanel(id) {
  const panel = document.getElementById(id);
  if (!panel) return;
  panel.classList.remove("open");
  panel.setAttribute("aria-hidden", "true");
}

// ---- RENDER HELPERS ----
function renderDayTabs() {
  const tabsContainer = document.getElementById("day-tabs");
  if (!tabsContainer) return;
  tabsContainer.innerHTML = "";
  dayData.forEach((day, index) => {
    const btn = document.createElement("button");
    btn.className = "day-tab" + (index === 0 ? " active" : "");
    btn.textContent = day.label;
    btn.dataset.dayId = day.id;
    btn.addEventListener("click", () => selectDay(day.id));
    tabsContainer.appendChild(btn);
  });
}

function selectDay(dayId) {
  const tabsContainer = document.getElementById("day-tabs");
  if (tabsContainer) {
    const buttons = tabsContainer.querySelectorAll(".day-tab");
    buttons.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.dayId === dayId);
    });
  }
  renderEventsForDay(dayId);
  setTimeout(() => checkScroll('events-panel'), 50);
}

function renderEventsForDay(dayId) {
  const day = dayData.find((d) => d.id === dayId) || dayData[0];
  const list = document.getElementById("events-list");
  if (!list || !day) return;
  list.innerHTML = "";
  
  const parseMinutes = (ev) => {
    if (!ev || !ev.time) return 0;
    const firstPart = ev.time.split("–")[0].trim();
    const hhmm = firstPart.split("·")[0].trim().split(" ")[0];
    const [h, m] = hhmm.split(":").map(n => parseInt(n, 10) || 0);
    return h * 60 + m;
  };
  const sortedEvents = [...day.events].sort((a, b) => parseMinutes(a) - parseMinutes(b));

  sortedEvents.forEach((event) => {
    const card = document.createElement("article");
    card.className = "event-card" + (event.highlight ? " highlight" : "");
    card.innerHTML = `
      <div class="event-time">${event.time}</div>
      <div class="event-title">${event.title}</div>
      <div class="event-meta">${event.type} · ${event.location}</div>
      <div class="event-presenters">${event.presenters}</div>
    `;
    list.appendChild(card);
  });
}

function renderTechnologies() {
  const list = document.getElementById("tech-list");
  if (!list) return;
  list.innerHTML = "";
  techData.forEach((tech) => {
    const card = document.createElement("article");
    card.className = "event-card";
    card.innerHTML = `
      <div class="event-title">${tech.name}</div>
      <div class="event-meta">${tech.summary}</div>
      <div class="event-presenters"><strong>Value:</strong> ${tech.valueAdd}</div>
      ${tech.partners ? `<div class="event-presenters"><strong>Partners:</strong> ${tech.partners}</div>` : ""}
      <div class="event-presenters">${tech.details}</div>
    `;
    list.appendChild(card);
  });
}

function renderBoardMentions() {
  const list = document.getElementById("board-list");
  if (!list) return;
  list.innerHTML = "";
  boardMentions.forEach((entry) => {
    const card = document.createElement("article");
    card.className = "event-card";
    card.innerHTML = `
      <div class="event-title">${entry.role}</div>
      <div class="event-presenters">${entry.name}</div>
    `;
    list.appendChild(card);
  });
}

function renderInternships() {
  const list = document.getElementById("intern-list");
  if (!list) return;
  list.innerHTML = "";
  internRoles.forEach((role) => {
    const card = document.createElement("article");
    card.className = "event-card";
    card.innerHTML = `
      <div class="event-time">${role.division}</div>
      <div class="event-title">${role.title}</div>
      <div class="event-meta">${role.location}</div>
      <div class="event-presenters">${role.summary}</div>
    `;
    list.appendChild(card);
  });
}

function renderUnder40() {
  const list = document.getElementById("under40-list");
  if (!list) return;
  list.innerHTML = "";
  under40Honorees.forEach((h) => {
    const card = document.createElement("article");
    card.className = "event-card honoree-card";
    const img = document.createElement("img");
    img.src = h.photo;
    img.alt = h.name;
    img.className = "honoree-photo";
    const nameEl = document.createElement("div");
    nameEl.className = "event-title";
    nameEl.textContent = h.name;
    const blurbEl = document.createElement("div");
    blurbEl.className = "event-presenters";
    blurbEl.textContent = h.blurb;
    card.appendChild(img);
    card.appendChild(nameEl);
    card.appendChild(blurbEl);
    list.appendChild(card);
  });
}

// ---- IDLE TIMER & AUTO-CLOSE LOGIC ----
let idleTimer;
const TIMEOUT_DURATION = 60000; // 60 seconds

function closeAllModals() {
  const openPanels = document.querySelectorAll('.panel.open');
  if (openPanels.length > 0) {
    console.log("User inactive. Closing all panels.");
    openPanels.forEach(panel => {
      closePanel(panel.id);
    });
    document.querySelectorAll('.events-list').forEach(list => {
      list.scrollTop = 0;
    });
  }
}

function resetIdleTimer() {
  clearTimeout(idleTimer);
  idleTimer = setTimeout(closeAllModals, TIMEOUT_DURATION);
}

// ---- INIT ----
document.addEventListener("DOMContentLoaded", () => {
  const map = {
    "open-events": "events-panel",
    "open-tech": "tech-panel",
    "open-board": "board-panel",
    "open-intern": "intern-panel",
    "open-under40": "under40-panel"
  };

  Object.keys(map).forEach(btnId => {
    const btn = document.getElementById(btnId);
    if(btn) btn.addEventListener("click", () => openPanel(map[btnId]));
  });

  document.querySelectorAll("[data-close-panel]").forEach((btn) => {
    btn.addEventListener("click", () => closePanel(btn.dataset.closePanel));
  });

  renderDayTabs();
  const defaultDay = getDefaultDayId();
  selectDay(defaultDay);

  renderTechnologies();
  renderBoardMentions();
  renderInternships();
  renderUnder40();

  document.querySelectorAll(".panel").forEach((panelEl) => {
    panelEl.addEventListener("click", (e) => {
      if (e.target === panelEl) closePanel(panelEl.id);
    });
  });

  const activityEvents = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];
  activityEvents.forEach(evt => {
    document.addEventListener(evt, resetIdleTimer, true);
  });
  resetIdleTimer();
});