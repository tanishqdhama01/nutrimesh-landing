const dishesDatabase = [
  {
    name: "Dal Tadka (Yellow Lentil)",
    region: "North",
    category: "dals",
    serving: "1 katori (150g)",
    calories: 148,
    protein: 8.5,
    carbs: 21.0,
    fat: 3.6,
    tags: ["High Protein", "Comfort"]
  },
  {
    name: "Rajma Masala (Red Kidney Beans)",
    region: "North",
    category: "curries",
    serving: "1 katori (180g)",
    calories: 224,
    protein: 12.2,
    carbs: 34.0,
    fat: 4.5,
    tags: ["High Protein", "Fibre Rich"]
  },
  {
    name: "Paneer Bhurji (Cottage Cheese)",
    region: "North",
    category: "curries",
    serving: "1 katori (130g)",
    calories: 275,
    protein: 16.8,
    carbs: 6.2,
    fat: 20.5,
    tags: ["High Protein", "Low Carb"]
  },
  {
    name: "South Indian Drumstick Sambar",
    region: "South",
    category: "dals",
    serving: "1 katori (160g)",
    calories: 112,
    protein: 5.4,
    carbs: 18.2,
    fat: 2.2,
    tags: ["Low Calorie", "Fibre Rich"]
  },
  {
    name: "Avial (Kerala Coconut Veg Medley)",
    region: "South",
    category: "curries",
    serving: "1 katori (140g)",
    calories: 165,
    protein: 3.8,
    carbs: 14.5,
    fat: 10.2,
    tags: ["Micronutrient Rich", "Traditional"]
  },
  {
    name: "Maharashtrian Thalipeeth (1)",
    region: "West",
    category: "breads",
    serving: "1 piece (110g)",
    calories: 236,
    protein: 7.5,
    carbs: 32.0,
    fat: 8.5,
    tags: ["Multigrain", "Fibre Rich"]
  },
  {
    name: "Gujarati Methi Thepla (1)",
    region: "West",
    category: "breads",
    serving: "1 piece (45g)",
    calories: 118,
    protein: 3.2,
    carbs: 16.8,
    fat: 4.2,
    tags: ["Fasting Friendly", "Digestive"]
  },
  {
    name: "Sprouted Moong Usal",
    region: "West",
    category: "dals",
    serving: "1 katori (150g)",
    calories: 172,
    protein: 11.4,
    carbs: 24.5,
    fat: 3.2,
    tags: ["High Protein", "Low GI"]
  },
  {
    name: "Mochar Ghonto (Bengal Banana Blossom)",
    region: "East",
    category: "curries",
    serving: "1 katori (140g)",
    calories: 135,
    protein: 4.1,
    carbs: 22.0,
    fat: 3.5,
    tags: ["High Iron", "Gut Health"]
  },
  {
    name: "Cholar Dal with Coconut",
    region: "East",
    category: "dals",
    serving: "1 katori (160g)",
    calories: 215,
    protein: 9.8,
    carbs: 29.5,
    fat: 6.8,
    tags: ["Festive", "Protein"]
  },
  {
    name: "Kuttu Roti (Buckwheat Fasting Roti)",
    region: "North",
    category: "fasting",
    serving: "1 piece (50g)",
    calories: 132,
    protein: 4.5,
    carbs: 23.0,
    fat: 2.4,
    tags: ["Vrat / Fasting", "Gluten Free"]
  },
  {
    name: "Sabudana Khichdi (Mild Peanut)",
    region: "West",
    category: "fasting",
    serving: "1 katori (150g)",
    calories: 310,
    protein: 5.2,
    carbs: 48.0,
    fat: 11.5,
    tags: ["Vrat / Fasting", "Energy Dense"]
  }
];

// ============================================================
// 3. SHARED POT SIMULATOR LOGIC
// ============================================================
const potPresets = {
  rajma: {
    name: "Rajma Masala Pot (4 Servings)",
    baseCal: 224,
    basePro: 12.2,
    baseCarb: 34.0,
    baseFat: 4.5,
    totalCookedWeight: "720g (approx 4.5 katoris)"
  },
  daltadka: {
    name: "Moong & Toor Dal Tadka Pot",
    baseCal: 148,
    basePro: 8.5,
    baseCarb: 21.0,
    baseFat: 3.6,
    totalCookedWeight: "650g (approx 4.5 katoris)"
  },
  paneerbhurji: {
    name: "Amritsari Paneer Bhurji Kadai",
    baseCal: 275,
    basePro: 16.8,
    baseCarb: 6.2,
    baseFat: 20.5,
    totalCookedWeight: "520g (approx 4.0 katoris)"
  },
  sambar: {
    name: "Madras Drumstick & Shallot Sambar",
    baseCal: 112,
    basePro: 5.4,
    baseCarb: 18.2,
    baseFat: 2.2,
    totalCookedWeight: "800g (approx 5.0 katoris)"
  }
};

let currentMembers = [
  {
    id: "rohan",
    name: "Rohan",
    avatar: "🏋️",
    goalTag: "Hypertrophy Target: 130g",
    katoris: 2.0,
    swapTip: "Mesh Recommendation: Added 1 katori sprouted moong (+11g P) closes your post-workout gap."
  },
  {
    id: "priya",
    name: "Priya",
    avatar: "🏃‍♀️",
    goalTag: "Active Deficit: 55g",
    katoris: 1.5,
    swapTip: "Mesh Recommendation: 1.5 katoris balances daily endurance energy without insulin spikes."
  },
  {
    id: "dadi",
    name: "Dadi Ji",
    avatar: "👵",
    goalTag: "Low GI & BP Guard: 45g",
    katoris: 1.0,
    swapTip: "Mesh Recommendation: 1.0 katori provides clean bio-available protein while keeping sodium <320mg."
  }
];

function initSimulator() {
  const dishSelect = document.getElementById("sim-dish-select");
  if (!dishSelect) return;

  dishSelect.addEventListener("change", renderSimulator);
  renderSimulator();
}

function renderSimulator() {
  const dishSelect = document.getElementById("sim-dish-select");
  const selectedKey = dishSelect ? dishSelect.value : "rajma";
  const preset = potPresets[selectedKey];

  // Calculate totals across members
  let totalKatoris = 0;
  currentMembers.forEach(m => totalKatoris += m.katoris);

  const totalPotCal = Math.round(preset.baseCal * totalKatoris);
  const totalPotPro = Math.round(preset.basePro * totalKatoris);

  const potWeightEl = document.getElementById("pot-total-weight");
  const potCalEl = document.getElementById("pot-total-cal");
  const potProEl = document.getElementById("pot-total-pro");

  if (potWeightEl) {
    const baseline = preset.totalCookedWeight.match(/(\d+)g.*?([\d.]+) katoris/);
    const gramsPerKatori = Number(baseline[1]) / Number(baseline[2]);
    potWeightEl.textContent = `${Math.round(gramsPerKatori * totalKatoris)}g (approx ${totalKatoris.toFixed(1)} katoris)`;
  }
  if (potCalEl) potCalEl.textContent = `${totalPotCal} kcal`;
  if (potProEl) potProEl.textContent = `${totalPotPro} g`;

  // Render Member Cards
  const grid = document.getElementById("members-mesh-grid");
  if (!grid) return;

  grid.innerHTML = "";

  currentMembers.forEach((member, index) => {
    const mCalories = Math.round(preset.baseCal * member.katoris);
    const mProtein = Math.round(preset.basePro * member.katoris * 10) / 10;
    const mCarbs = Math.round(preset.baseCarb * member.katoris * 10) / 10;
    const mFat = Math.round(preset.baseFat * member.katoris * 10) / 10;

    const proPercent = Math.min(100, Math.round((mProtein / 35) * 100));
    const carbPercent = Math.min(100, Math.round((mCarbs / 70) * 100));
    const fatPercent = Math.min(100, Math.round((mFat / 25) * 100));

    const card = document.createElement("div");
    card.className = "member-sim-card";
    card.innerHTML = `
      <div class="member-card-header">
        <div class="member-avatar-info">
          <div class="member-avatar">${member.avatar}</div>
          <div>
            <div class="member-name">${member.name}</div>
            <div class="member-tag">${member.goalTag}</div>
          </div>
        </div>
      </div>

      <div class="portion-control">
        <button class="portion-btn" aria-label="Decrease ${member.name} portion" onclick="updatePortion(${index}, -0.5)">-</button>
        <span class="portion-val">${member.katoris.toFixed(1)} katoris</span>
        <button class="portion-btn" aria-label="Increase ${member.name} portion" onclick="updatePortion(${index}, 0.5)">+</button>
      </div>

      <div class="member-macro-bars">
        <div class="macro-bar-row">
          <div class="macro-label-row">
            <span class="macro-label-name">Calories</span>
            <span class="macro-label-val">${mCalories} kcal</span>
          </div>
          <div class="progress-track">
            <div class="progress-fill fill-carbs" style="width: ${Math.min(100, (mCalories/600)*100)}%"></div>
          </div>
        </div>

        <div class="macro-bar-row">
          <div class="macro-label-row">
            <span class="macro-label-name">Protein</span>
            <span class="macro-label-val">${mProtein}g</span>
          </div>
          <div class="progress-track">
            <div class="progress-fill fill-protein" style="width: ${proPercent}%"></div>
          </div>
        </div>

        <div class="macro-bar-row">
          <div class="macro-label-row">
            <span class="macro-label-name">Carbs</span>
            <span class="macro-label-val">${mCarbs}g</span>
          </div>
          <div class="progress-track">
            <div class="progress-fill fill-carbs" style="width: ${carbPercent}%"></div>
          </div>
        </div>

        <div class="macro-bar-row">
          <div class="macro-label-row">
            <span class="macro-label-name">Fat</span>
            <span class="macro-label-val">${mFat}g</span>
          </div>
          <div class="progress-track">
            <div class="progress-fill fill-fat" style="width: ${fatPercent}%"></div>
          </div>
        </div>
      </div>

      <div class="swap-tip-box">
        💡 ${member.swapTip}
      </div>
    `;

    grid.appendChild(card);
  });
}

window.updatePortion = function(index, change) {
  const current = currentMembers[index].katoris;
  const next = Math.max(0.5, Math.min(3.5, current + change));
  currentMembers[index].katoris = next;
  renderSimulator();
};

// ============================================================
// 450+ DISH CATALOGUE EXPLORER
// ============================================================
function initCatalogue() {
  const searchInput = document.getElementById("catalogue-search-input");
  const filterChips = document.querySelectorAll(".filter-chip");

  let activeFilter = "all";
  let searchQuery = "";

  function filterAndRender() {
    const grid = document.getElementById("dishes-grid");
    if (!grid) return;

    const filtered = dishesDatabase.filter(dish => {
      const matchesSearch = dish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            dish.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            dish.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

      let matchesFilter = true;
      if (activeFilter === "North") matchesFilter = dish.region === "North";
      else if (activeFilter === "South") matchesFilter = dish.region === "South";
      else if (activeFilter === "West") matchesFilter = dish.region === "West";
      else if (activeFilter === "East") matchesFilter = dish.region === "East";
      else if (activeFilter === "high-protein") matchesFilter = dish.protein >= 8;
      else if (activeFilter === "fasting") matchesFilter = dish.category === "fasting" || dish.tags.includes("Vrat / Fasting");

      return matchesSearch && matchesFilter;
    });

    grid.innerHTML = "";

    if (filtered.length === 0) {
      grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 2.5rem; color: var(--muted-foreground);">
        No dishes matched "${searchQuery.replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;", "'":"&#39;"}[c]))}". Try searching for Dal, Roti, Sambar or Thepla.
      </div>`;
      return;
    }

    filtered.forEach(dish => {
      const card = document.createElement("div");
      card.className = "dish-card";
      card.innerHTML = `
        <div class="dish-header">
          <div class="dish-name">${dish.name}</div>
          <span class="dish-region-badge">${dish.region}</span>
        </div>
        <div class="dish-portion">${dish.serving} • ${dish.tags.join(" • ")}</div>
        <div class="dish-macros-row">
          <div class="macro-box">
            <div class="macro-box-val">${dish.calories}</div>
            <div class="macro-box-lbl">kcal</div>
          </div>
          <div class="macro-box">
            <div class="macro-box-val">${dish.protein}g</div>
            <div class="macro-box-lbl">Pro</div>
          </div>
          <div class="macro-box">
            <div class="macro-box-val">${dish.carbs}g</div>
            <div class="macro-box-lbl">Carb</div>
          </div>
          <div class="macro-box">
            <div class="macro-box-val">${dish.fat}g</div>
            <div class="macro-box-lbl">Fat</div>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      filterAndRender();
    });
  }

  filterChips.forEach(chip => {
    chip.addEventListener("click", () => {
      filterChips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      activeFilter = chip.getAttribute("data-filter");
      filterAndRender();
    });
  });

  filterAndRender();
}

// ============================================================
// FAQ ACCORDION
// ============================================================
function initFaqAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    const questionBtn = item.querySelector(".faq-question");
    if (questionBtn) {
      questionBtn.addEventListener("click", () => {
        const isActive = item.classList.contains("active");
        faqItems.forEach(i => { i.classList.remove("active"); i.querySelector("button")?.setAttribute("aria-expanded", "false"); });
        questionBtn.setAttribute("aria-expanded", String(!isActive));
        if (!isActive) {
          item.classList.add("active");
        }
      });
    }
  });
}

// ============================================================
// MOBILE & NOTCH NAVIGATION MENU
// ============================================================

document.addEventListener("DOMContentLoaded", () => { initSimulator(); initCatalogue(); initFaqAccordion(); document.querySelectorAll(".faq-question").forEach(b => b.setAttribute("aria-expanded",String(b.parentElement.classList.contains("active")))); });
