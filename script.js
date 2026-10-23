
(() => {
  "use strict";

  const $ = id => document.getElementById(id);
  const SAVE_KEY = "techlingo-options-v4";

  const courses = [
    {
      id: "coding", title: "Coding Quest", icon: "💻", tag: "TECHNOLOGY",
      color: "#7457ed", tint: "#eeeaff",
      desc: "Learn programming logic, variables, and how apps work.",
      lessons: [
        ["What is a variable?", "A variable stores information that a program can use.", ["A computer screen", "A named place to store data", "A type of keyboard", "A website address"], 1, "Variables let programs store and update information."],
        ["What is a loop?", "A loop repeats instructions.", ["A repeating set of instructions", "A broken program", "A computer cable", "A password"], 0, "Loops help you repeat actions without rewriting them."],
        ["What is a bug?", "A program runs, but its result is wrong. What is this called?", ["A feature", "An update", "A bug", "A variable"], 2, "A bug is an error or unexpected behavior in a program."]
      ]
    },
    {
      id: "ai", title: "AI Explorer", icon: "🤖", tag: "ARTIFICIAL INTELLIGENCE",
      color: "#188cbd", tint: "#e1f6ff",
      desc: "Discover AI, machine learning, and responsible use.",
      lessons: [
        ["What is a training dataset?", "What helps a machine-learning model learn patterns?", ["Random button clicks only", "Examples of data", "A computer's color", "A screen saver"], 1, "Training data provides examples from which a model can learn."],
        ["Can AI make mistakes?", "Which statement about AI is most accurate?", ["AI is always correct", "AI never needs checking", "AI can make mistakes and should be checked", "AI understands everything perfectly"], 2, "AI outputs can be incorrect, incomplete, or biased."],
        ["Protect private information", "What is the safest approach when using an AI tool?", ["Share every password", "Share private details publicly", "Avoid entering sensitive personal information", "Assume every tool is private"], 2, "Follow the tool's privacy rules and avoid sharing sensitive information."]
      ]
    },
    {
      id: "cyber", title: "Cyber Defender", icon: "🛡️", tag: "CYBERSECURITY",
      color: "#20a47c", tint: "#e0fff3",
      desc: "Learn online safety, secure accounts, and spot scams.",
      lessons: [
        ["Spot a suspicious message", "A message pressures you to click an unfamiliar link immediately. What should you do?", ["Click quickly", "Pause and verify it through a trusted source", "Send it to everyone", "Give it your password"], 1, "Urgency and unfamiliar links are common warning signs."],
        ["Strong account security", "Which approach best protects an account?", ["Reuse one simple password everywhere", "Share passwords with friends", "Use unique passwords and multifactor authentication", "Write passwords in a public post"], 2, "Unique passwords and multifactor authentication add protection."],
        ["Public Wi-Fi", "What should you do before entering sensitive information online?", ["Check that the site and connection are trustworthy", "Ignore browser warnings", "Trust every pop-up", "Disable all security"], 0, "Be careful on public networks and always check site security."]
      ]
    },
    {
      id: "business", title: "Business Builder", icon: "🚀", tag: "ENTREPRENEURSHIP",
      color: "#e49a25", tint: "#fff2d8",
      desc: "Learn how businesses create value, budget, and plan.",
      lessons: [
        ["Revenue vs. profit", "A business earns $200 and spends $130. What is its profit?", ["$330", "$200", "$130", "$70"], 3, "Profit is revenue minus expenses: $200 - $130 = $70."],
        ["Know your customer", "Why should a business learn about its customers?", ["To ignore their needs", "To build something that solves a real problem", "To make every product identical", "To avoid feedback"], 1, "Understanding customers helps a business create useful products."],
        ["Test an idea", "What is a sensible first step for a new product idea?", ["Spend all available money immediately", "Never ask for feedback", "Create a small test and learn from it", "Assume everyone will buy it"], 2, "Small experiments help you learn before committing more resources."]
      ]
    },
    {
      id: "game", title: "Game Developer", icon: "🎮", tag: "CREATIVE TECH",
      color: "#df6288", tint: "#ffebf1",
      desc: "Explore game loops, player feedback, and level design.",
      lessons: [
        ["What makes a game loop?", "A game loop usually includes:", ["Only the title screen", "Input, updating the world, and drawing the scene", "A keyboard with no code", "Only a game ending"], 1, "Games repeatedly process input, update state, and render frames."],
        ["Good feedback", "A player collects a coin. What helps make the action feel clear?", ["No response at all", "A clear sound or visual effect", "A random error message", "Hiding the score"], 1, "Feedback tells players that their actions had an effect."],
        ["Level design", "Why might a game gradually introduce harder challenges?", ["To help players learn and improve", "To make the rules impossible to understand", "To remove player choice", "To prevent all progress"], 0, "Gradual difficulty gives players time to learn skills."]
      ]
    },
    {
      id: "finance", title: "Money Master", icon: "💰", tag: "FINANCIAL LITERACY",
      color: "#289b79", tint: "#e3fff3",
      desc: "Learn budgeting, saving, investing basics, and risk.",
      lessons: [
        ["Needs and wants", "Which is generally a basic need?", ["A new game skin", "A luxury gadget", "Food for meals", "A collectible"], 2, "Needs include essentials such as food, shelter, and necessary care."],
        ["Diversification", "What does diversification mean in investing?", ["Putting everything into one asset", "Spreading investments across different assets", "Buying only what is trending", "Guaranteeing a profit"], 1, "Diversification can reduce concentration risk, but it cannot eliminate all risk."],
        ["Risk and return", "Which statement is most accurate?", ["Higher returns are always guaranteed", "Every investment is risk-free", "Potential returns usually come with uncertainty and risk", "Past performance guarantees future results"], 2, "No investment return is guaranteed, and losses are possible."]
      ]
    },
    {
      id: "trading", title: "Day Trading Academy", icon: "📊", tag: "OPTIONS & MARKET BASICS",
      color: "#7b61e8", tint: "#eee8ff",
      desc: "Explore market orders, puts, calls, strike prices, expiration, premiums, and risk in a fictional-money classroom.",
      lessons: [
        ["What is a stock?", "A stock generally represents:", ["A loan from a bank", "An ownership share in a company", "A guaranteed payment", "An insurance policy"], 1, "A stock represents an ownership interest in a company. Its price can rise or fall."],
        ["What is a call option?", "A call option buyer gets which right under the contract's terms?", ["The right to buy the underlying asset at the strike price", "A guaranteed profit", "The right to force any price to rise", "A promise that the stock cannot fall"], 0, "A call gives its buyer the right, but not the obligation, to buy at the strike price under the contract's terms."],
        ["What is a put option?", "A put option buyer gets which right under the contract's terms?", ["The right to buy at any price", "A guaranteed payout if a stock falls", "The right to sell the underlying asset at the strike price", "A promise that a stock will fall"], 2, "A put gives its buyer the right, but not the obligation, to sell the underlying asset at the strike price under the contract's terms."],
        ["Understand the strike price", "A put has a $95 strike price. What does $95 represent?", ["The premium automatically paid", "The contract's specified selling price, subject to its terms", "The guaranteed market price", "The date the option expires"], 1, "The strike price is the contract price used for exercise. It does not guarantee the stock will trade there."],
        ["What is the premium?", "You pay $3 per share for an option. What is the $3 called?", ["The strike price", "The dividend", "The expiration", "The premium"], 3, "The premium is the price paid to buy the option. It is an important part of the buyer's cost."],
        ["Expiration matters", "What can happen to a purchased option that has no exercise value at expiration?", ["It always becomes more valuable", "It can expire worthless", "It automatically renews forever", "It guarantees a refund"], 1, "An option can expire worthless. Its buyer can lose the entire premium paid."],
        ["Calculate a put outcome", "A hypothetical put has a $95 strike. At expiration, the stock is $80. Ignoring the premium, what is the put's intrinsic value per share?", ["$15", "$95", "$80", "$175"], 0, "For a put, intrinsic value at expiration is max(strike price - stock price, 0): $95 - $80 = $15 per share."],
        ["Calculate a call outcome", "A hypothetical call has a $50 strike. At expiration, the stock is $62. Ignoring the premium, what is its intrinsic value per share?", ["$62", "$50", "$12", "$112"], 2, "For a call, intrinsic value at expiration is max(stock price - strike price, 0): $62 - $50 = $12 per share."],
        ["Premium changes the result", "A put has a $95 strike, the stock ends at $80, and the premium was $4 per share. What is the simplified expiration profit per share before fees?", ["$15", "$11", "$4", "-$11"], 1, "Intrinsic value is $15. Subtract the $4 premium: simplified profit is $11 per share. This ignores fees and other contract-specific factors."],
        ["Know the risk", "You buy an option and your prediction is wrong. What is a possible result?", ["The broker must repay you", "You cannot lose money as a buyer", "You automatically earn interest", "You can lose the premium paid"], 3, "A purchased option can expire worthless, resulting in a loss of the premium. Other option strategies can involve different and sometimes much larger risks."],
        ["A prediction isn't enough", "A stock moves in the direction you expected, but your option still loses value. Why might that happen?", ["Options never change value", "The strike, premium, time remaining, or volatility can matter", "The market must be broken", "The option's premium is always refunded"], 1, "Option prices can be affected by several factors, including time remaining and implied volatility, not just direction."],
        ["Practice responsibly", "What is the best way to start learning about options?", ["Use borrowed money immediately", "Assume online predictions are guaranteed", "Use educational examples and a fictional-money simulator first", "Ignore the possibility of losing the premium"], 2, "Learning concepts and using a simulator can build understanding without risking real money. Simulation still cannot predict real outcomes."]
      ]
    }
  ];

  let state = {
    xp: 0, coins: 100, streak: 1, completed: [], achievements: [],
    cash: 10000, stocks: {}, prices: { NOVA: 42, PIXL: 76, ORBIT: 118 },
    marketTurn: 0, lessonCorrect: 0
  };

  try {
    const saved = JSON.parse(localStorage.getItem(SAVE_KEY) || "null");
    if (saved && typeof saved === "object") {
      state = { ...state, ...saved };
    }
  } catch (e) {
    console.warn("Could not load save; starting fresh.", e);
  }

  if (!Array.isArray(state.completed)) state.completed = [];
  if (!Array.isArray(state.achievements)) state.achievements = [];
  if (!state.stocks || typeof state.stocks !== "object") state.stocks = {};
  if (!state.prices || typeof state.prices !== "object") state.prices = { NOVA: 42, PIXL: 76, ORBIT: 118 };

  const money = n => "$" + Number(n).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const escapeHTML = s => String(s).replace(/[&<>"']/g, c => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[c]));
  const totalLessons = () => courses.reduce((n, c) => n + c.lessons.length, 0);
  const isDone = key => state.completed.includes(key);
  const doneCount = () => state.completed.length;

  function save() {
    try { localStorage.setItem(SAVE_KEY, JSON.stringify(state)); }
    catch (e) { console.warn("Progress could not be saved.", e); }
  }

  let toastTimer;
  function toast(message) {
    const el = $("toast");
    el.textContent = message;
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("show"), 2600);
  }

  function updateStats() {
    $("xp").textContent = state.xp;
    $("coins").textContent = state.coins;
    $("streak").textContent = state.streak;
    $("cashBalance").textContent = money(state.cash);
    const stockValue = Object.entries(state.stocks).reduce((sum, [symbol, quantity]) =>
      sum + (state.prices[symbol] || 0) * quantity, 0);
    $("portfolioValue").textContent = money(state.cash + stockValue);
    const pct = Math.round(doneCount() / totalLessons() * 100);
    $("progressLabel").textContent = pct + "%";
    $("progressBar").style.width = pct + "%";
    $("progressText").textContent = `${doneCount()} of ${totalLessons()} lessons completed.`;
  }

  function renderCourses() {
    $("courseCount").textContent = courses.length + " PATHS";
    $("courseGrid").innerHTML = courses.map(c => {
      const done = c.lessons.filter((_, i) => isDone(c.id + ":" + i)).length;
      const pct = Math.round(done / c.lessons.length * 100);
      return `<article class="course-card" data-course="${c.id}" style="--accent:${c.color};--tint:${c.tint}">
        <div class="card-top">
          <div class="course-icon">${c.icon}</div>
          <span class="course-tag">${escapeHTML(c.tag)}</span>
        </div>
        <h3>${escapeHTML(c.title)}</h3>
        <p>${escapeHTML(c.desc)}</p>
        <div class="card-footer"><span>${done}/${c.lessons.length} lessons</span><span>${pct}%</span></div>
        <div class="mini-track"><div style="width:${pct}%;background:${c.color}"></div></div>
      </article>`;
    }).join("");
    $("courseGrid").querySelectorAll("[data-course]").forEach(card =>
      card.addEventListener("click", () => openCourse(card.dataset.course)));
  }

  const practiceItems = [
    { icon: "🧩", title: "Quick Knowledge Check", desc: "Test yourself on coding, AI, and digital safety.", action: () => openCourse("coding") },
    { icon: "📊", title: "Puts & Calls Workshop", desc: "Practice strike price, intrinsic value, and option premiums.", action: () => openCourse("trading") },
    { icon: "🪙", title: "Budget Challenge", desc: "Review revenue, costs, and saving decisions.", action: () => openCourse("business") },
    { icon: "🛡️", title: "Security Scenarios", desc: "Learn to recognize suspicious messages and protect accounts.", action: () => openCourse("cyber") }
  ];

  function renderPractice() {
    $("practiceGrid").innerHTML = practiceItems.map((p, i) =>
      `<article class="practice-card"><div class="practice-icon">${p.icon}</div>
       <h3>${escapeHTML(p.title)}</h3><p>${escapeHTML(p.desc)}</p>
       <button class="secondary-btn" data-practice="${i}">Start practice →</button></article>`
    ).join("");
    $("practiceGrid").querySelectorAll("[data-practice]").forEach(btn =>
      btn.addEventListener("click", () => practiceItems[Number(btn.dataset.practice)].action()));
  }

  let activeCourse = null;
  let activeIndex = 0;
  let answered = false;
  let sessionCorrect = 0;
  let sessionRewarded = false;

  function openCourse(id) {
    activeCourse = courses.find(c => c.id === id);
    if (!activeCourse) return;
    activeIndex = 0;
    answered = false;
    sessionCorrect = 0;
    sessionRewarded = false;
    renderLesson();
    $("lessonModal").classList.add("open");
    $("lessonModal").setAttribute("aria-hidden", "false");
    $("closeLesson").focus();
  }

  function closeLesson() {
    $("lessonModal").classList.remove("open");
    $("lessonModal").setAttribute("aria-hidden", "true");
    activeCourse = null;
  }

  function renderLesson() {
    if (!activeCourse) return;
    const lesson = activeCourse.lessons[activeIndex];
    const key = activeCourse.id + ":" + activeIndex;
    const done = isDone(key);
    $("lessonContent").innerHTML = `
      <div class="eyebrow">${escapeHTML(activeCourse.tag)}</div>
      <div class="lesson-progress"><div style="width:${((activeIndex + 1) / activeCourse.lessons.length) * 100}%"></div></div>
      <div class="lesson-count">LESSON ${activeIndex + 1} OF ${activeCourse.lessons.length}${done ? " · COMPLETED" : ""}</div>
      <h2 id="lessonTitle">${escapeHTML(lesson[0])}</h2>
      <p class="lesson-prompt">${escapeHTML(lesson[1])}</p>
      <div class="answer-list">${lesson[2].map((answer, i) =>
        `<button class="answer-option" data-answer="${i}">${String.fromCharCode(65 + i)}. ${escapeHTML(answer)}</button>`
      ).join("")}</div>
      <div id="lessonFeedback"></div>
      <div class="lesson-bottom">
        <span class="lesson-count">${activeCourse.icon} ${escapeHTML(activeCourse.title)}</span>
        <button class="primary-btn" id="lessonNext" disabled>${activeIndex === activeCourse.lessons.length - 1 ? "Finish course" : "Next lesson →"}</button>
      </div>`;
    $("lessonContent").querySelectorAll("[data-answer]").forEach(btn =>
      btn.addEventListener("click", () => answerLesson(Number(btn.dataset.answer))));
    $("lessonNext").addEventListener("click", nextLesson);
    answered = false;
  }

  function answerLesson(choice) {
    if (!activeCourse || answered) return;
    answered = true;
    const lesson = activeCourse.lessons[activeIndex];
    const key = activeCourse.id + ":" + activeIndex;
    const correct = choice === lesson[3];
    const wasDone = isDone(key);
    if (correct) {
      sessionCorrect++;
      if (!wasDone) {
        state.xp += 20;
        state.coins += 10;
        state.lessonCorrect++;
        state.completed.push(key);
        toast("Correct! +20 XP and +10 coins 🎉");
      } else {
        toast("Correct! You've already earned rewards for this lesson.");
      }
    } else {
      toast("Good try! Read the explanation and keep learning.");
    }

    const buttons = $("lessonContent").querySelectorAll("[data-answer]");
    buttons.forEach((btn, i) => {
      btn.disabled = true;
      if (i === lesson[3]) btn.classList.add("correct");
      else if (i === choice) btn.classList.add("wrong");
    });

    $("lessonFeedback").innerHTML = `<div class="explanation"><b>${correct ? "✅ Correct!" : "💡 Let's learn:"}</b><br>${escapeHTML(lesson[4])}</div>`;
    $("lessonNext").disabled = false;
    save();
    updateStats();
    renderCourses();
    refreshAchievements();
  }

  function nextLesson() {
    if (!activeCourse || $("lessonNext").disabled) return;
    if (activeIndex < activeCourse.lessons.length - 1) {
      activeIndex++;
      renderLesson();
      return;
    }
    const title = activeCourse.title;
    closeLesson();
    if (!sessionRewarded) {
      sessionRewarded = true;
      if (activeCourse.lessons.every((_, i) => isDone(activeCourse.id + ":" + i))) {
        toast(`Course review complete: ${title}! 🏆`);
      }
    }
    renderCourses();
    renderProjects();
    refreshAchievements();
    updateStats();
  }

  function renderMarket() {
    const assets = [
      { symbol: "NOVA", name: "Nova Robotics", icon: "🤖" },
      { symbol: "PIXL", name: "Pixel Studios", icon: "🎨" },
      { symbol: "ORBIT", name: "Orbit Energy", icon: "🪐" }
    ];
    $("assetList").innerHTML = assets.map(a => {
      const price = state.prices[a.symbol];
      return `<div class="asset-row">
        <div class="asset-info"><div class="asset-icon">${a.icon}</div><div><b>${a.symbol}</b><small>${a.name} · fictional</small></div></div>
        <div class="asset-price">${money(price)}<small class="muted">Simulated price</small></div>
        <button class="secondary-btn" data-buy="${a.symbol}">Practice buy</button>
      </div>`;
    }).join("");
    $("assetList").querySelectorAll("[data-buy]").forEach(btn =>
      btn.addEventListener("click", () => buyPracticeStock(btn.dataset.buy)));

    const holdings = Object.entries(state.stocks).filter(([, qty]) => qty > 0);
    $("holdingsList").innerHTML = holdings.length ? holdings.map(([symbol, qty]) =>
      `<div class="asset-row"><div class="asset-info"><div class="asset-icon">📦</div><div><b>${symbol}</b><small>${qty} practice share${qty === 1 ? "" : "s"}</small></div></div><div class="asset-price">${money((state.prices[symbol] || 0) * qty)}<small class="muted">Current simulated value</small></div><button class="secondary-btn" data-sell="${symbol}">Practice sell 1</button></div>`
    ).join("") : `<div class="empty-state">No practice holdings yet. Try a fictional stock above to learn how a portfolio works.</div>`;

    $("holdingsList").querySelectorAll("[data-sell]").forEach(btn =>
      btn.addEventListener("click", () => sellPracticeStock(btn.dataset.sell)));
    $("marketMood").textContent = state.marketTurn === 0 ? "Starting" : (state.marketTurn % 2 ? "Mixed" : "Changing");
    updateStats();
  }

  function buyPracticeStock(symbol) {
    const price = state.prices[symbol];
    if (!price || state.cash < price) {
      toast("Not enough virtual cash for this practice purchase.");
      return;
    }
    state.cash -= price;
    state.stocks[symbol] = (state.stocks[symbol] || 0) + 1;
    save();
    renderMarket();
    toast("Fictional share added to your practice portfolio.");
  }

  function sellPracticeStock(symbol) {
    if (!state.stocks[symbol]) return;
    state.stocks[symbol]--;
    state.cash += state.prices[symbol] || 0;
    if (state.stocks[symbol] <= 0) delete state.stocks[symbol];
    save();
    renderMarket();
    toast("Fictional share sold in the simulator.");
  }

  function advanceMarket() {
    const old = { ...state.prices };
    Object.keys(state.prices).forEach(symbol => {
      const move = (Math.random() * 0.16) - 0.08;
      state.prices[symbol] = Math.max(1, Math.round(state.prices[symbol] * (1 + move) * 100) / 100);
    });
    state.marketTurn++;
    save();
    renderMarket();
    toast("The fictional market moved. Prices can rise or fall.");
  }

  function calculateOption() {
    const type = $("optionType").value;
    const stock = Number($("stockAtExpiry").value);
    const strike = Number($("strikePrice").value);
    const premium = Number($("premium").value);
    const contracts = Number($("contracts").value);
    const result = $("optionResult");

    if (![stock, strike, premium, contracts].every(Number.isFinite) ||
        stock < 0 || strike < 0 || premium < 0 ||
        !Number.isInteger(contracts) || contracts < 1 || contracts > 100) {
      result.textContent = "Please enter valid non-negative prices and a whole number of contracts from 1 to 100.";
      return;
    }

    const intrinsic = type === "put" ? Math.max(strike - stock, 0) : Math.max(stock - strike, 0);
    const cost = premium * 100 * contracts;
    const value = intrinsic * 100 * contracts;
    const pnl = value - cost;
    const typeName = type === "put" ? "put" : "call";

    result.innerHTML = `
      <div><b>Hypothetical ${typeName} outcome at expiration</b></div>
      <p>Intrinsic value per share: <strong>${money(intrinsic)}</strong></p>
      <p>Total intrinsic value (${contracts} contract${contracts === 1 ? "" : "s"}): <strong>${money(value)}</strong></p>
      <p>Premium paid in this example: <strong>${money(cost)}</strong></p>
      <div class="result-number ${pnl >= 0 ? "positive" : "negative"}">${pnl >= 0 ? "+" : ""}${money(pnl)}</div>
      <p>${pnl > 0 ? "This scenario has a positive simplified result before fees." : pnl < 0 ? "In this scenario, the premium exceeds the option's intrinsic value." : "In this scenario, intrinsic value exactly equals the premium paid."}</p>
      <p class="small-print">This is a mathematical example, not a recommendation or forecast. It assumes standard 100-share contracts and holding to expiration.</p>`;
  }

  const projects = [
    { icon: "🧠", title: "Explain a concept", desc: "Pick a lesson and explain it in your own words.", course: "trading", goal: "Explain what a put is, including strike price and premium." },
    { icon: "🔐", title: "Digital safety checklist", desc: "Create a checklist for protecting an online account.", course: "cyber", goal: "List three ways to make an online account safer." },
    { icon: "💡", title: "Invent an app", desc: "Sketch an app that solves a small everyday problem.", course: "coding", goal: "Describe the problem, the users, and three features." },
    { icon: "📒", title: "Build a budget", desc: "Practice sorting fictional income and expenses.", course: "business", goal: "Calculate how much money remains after planned expenses." }
  ];

  function renderProjects() {
    $("projectGrid").innerHTML = projects.map((p, i) =>
      `<article class="project-card"><div class="practice-icon">${p.icon}</div><h3>${escapeHTML(p.title)}</h3><p>${escapeHTML(p.desc)}</p><button class="secondary-btn" data-project="${i}">Open project →</button></article>`
    ).join("");
    $("projectGrid").querySelectorAll("[data-project]").forEach(btn =>
      btn.addEventListener("click", () => openProject(Number(btn.dataset.project))));
  }

  function openProject(index) {
    const p = projects[index];
    const content = $("lessonContent");
    $("lessonModal").classList.add("open");
    $("lessonModal").setAttribute("aria-hidden", "false");
    content.innerHTML = `<div class="eyebrow">TECHLINGO PROJECT</div>
      <h2 id="lessonTitle">${escapeHTML(p.icon + " " + p.title)}</h2>
      <p class="lesson-prompt">${escapeHTML(p.desc)}<br><br><b>Your mission:</b> ${escapeHTML(p.goal)}</p>
      <label>Your project notes<textarea id="projectNotes" rows="5" placeholder="Write your ideas here..."></textarea></label>
      <div class="lesson-bottom"><span class="lesson-count">Take your time</span><button class="primary-btn" id="saveProject">Save project</button></div>`;
    $("projectNotes").value = state["project_" + index] || "";
    $("saveProject").addEventListener("click", () => {
      state["project_" + index] = $("projectNotes").value;
      save();
      closeLesson();
      toast("Project notes saved on this device.");
    });
  }

  const achievementList = [
    { id: "first", icon: "🌱", title: "First Steps", desc: "Complete your first lesson.", check: () => doneCount() >= 1 },
    { id: "five", icon: "⭐", title: "Curious Mind", desc: "Complete 5 lessons.", check: () => doneCount() >= 5 },
    { id: "ten", icon: "🚀", title: "Fast Learner", desc: "Complete 10 lessons.", check: () => doneCount() >= 10 },
    { id: "trading", icon: "📊", title: "Options Student", desc: "Complete every lesson in Day Trading Academy.", check: () => courses.find(c => c.id === "trading").lessons.every((_, i) => isDone("trading:" + i)) },
    { id: "allpaths", icon: "🌈", title: "Explorer", desc: "Complete a lesson in every learning path.", check: () => courses.every(c => c.lessons.some((_, i) => isDone(c.id + ":" + i))) },
    { id: "xp", icon: "⚡", title: "XP Collector", desc: "Earn 200 XP.", check: () => state.xp >= 200 }
  ];

  function refreshAchievements() {
    achievementList.forEach(a => {
      if (a.check() && !state.achievements.includes(a.id)) {
        state.achievements.push(a.id);
        toast("Achievement unlocked: " + a.title + " " + a.icon);
      }
    });
    save();
    $("achievementGrid").innerHTML = achievementList.map(a => {
      const unlocked = state.achievements.includes(a.id);
      return `<div class="achievement-card ${unlocked ? "" : "locked"}"><div class="achievement-icon">${a.icon}</div><div><h3>${unlocked ? "✓ " : "🔒 "}${escapeHTML(a.title)}</h3><p>${escapeHTML(a.desc)}</p></div></div>`;
    }).join("");
  }

  function showPage(page) {
    document.querySelectorAll(".page").forEach(el => el.classList.remove("active"));
    document.querySelectorAll(".nav-btn").forEach(el => el.classList.toggle("active", el.dataset.page === page));
    const target = $("page-" + page);
    if (target) target.classList.add("active");
    if (page === "market") renderMarket();
    if (page === "achievements") refreshAchievements();
    if (page === "projects") renderProjects();
    if (page === "learn") renderCourses();
  }

  document.querySelectorAll(".nav-btn").forEach(btn =>
    btn.addEventListener("click", () => showPage(btn.dataset.page)));

  $("closeLesson").addEventListener("click", closeLesson);
  $("lessonModal").addEventListener("click", e => {
    if (e.target === $("lessonModal")) closeLesson();
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && $("lessonModal").classList.contains("open")) closeLesson();
  });

  $("advanceMarket").addEventListener("click", advanceMarket);
  $("calculateOption").addEventListener("click", calculateOption);

  renderCourses();
  renderPractice();
  renderProjects();
  renderMarket();
  refreshAchievements();
  updateStats();

  console.log("TECHLINGO loaded successfully. Options lessons are included.");
})();
