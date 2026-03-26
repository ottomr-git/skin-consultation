// ===== 產品資料庫 =====
const PRODUCTS = {
  "icd-cleansing-oil": {
    id: "icd-cleansing-oil", name: "淨膚卸妝油", brand: "ICD映皙美", price: 990,
    desc: "76%天然成分，溫和清潔殘妝、淨化毛孔及更新角質",
    features: ["深層清潔毛孔", "溫和不刺激", "更新老廢角質"],
    category: "潔顏"
  },
  "icd-cleansing-powder": {
    id: "icd-cleansing-powder", name: "活膚潔顏粉", brand: "ICD映皙美", price: 990,
    desc: "木瓜酵素弱酸性潔顏粉，深層清潔同時溫和代謝角質",
    features: ["木瓜酵素溫和去角質", "弱酸性配方", "維持油水平衡"],
    category: "潔顏"
  },
  "icd-gel-cleanser": {
    id: "icd-gel-cleanser", name: "平衡潔顏凝膠", brand: "ICD映皙美", price: 960,
    desc: "pH 5.5 弱酸性，洗後不乾澀，含巨型積雪草粉末",
    features: ["pH 5.5 弱酸性", "適合敏感肌", "洗後不乾澀"],
    category: "潔顏"
  },
  "icd-calming-gel": {
    id: "icd-calming-gel", name: "舒緩平衡凝露", brand: "ICD映皙美", price: 1160,
    desc: "大馬士革玫瑰花水基底，24K純金 + 8重玻尿酸，舒緩鎮靜",
    features: ["24K純金成分", "8重玻尿酸", "舒緩鎮靜"],
    category: "保濕"
  },
  "icd-oil-mist": {
    id: "icd-oil-mist", name: "油水平衡噴霧", brand: "ICD映皙美", price: 1160,
    desc: "8:2 油水黃金比例雙層噴霧，隨時補充保濕",
    features: ["8:2油水黃金比例", "隨時補充保濕", "打造平衡光采肌"],
    category: "保濕"
  },
  "icd-multi-stick": {
    id: "icd-multi-stick", name: "亮采全能精華棒", brand: "ICD映皙美", price: 790,
    desc: "植萃油脂與保濕成分，局部加強保濕撫紋，25項臨床試驗實證",
    features: ["亮白淡紋雙功能", "方便攜帶隨時使用", "妝前妝後皆可"],
    category: "補強"
  },
  "icd-derma-spray": {
    id: "icd-derma-spray", name: "活妍能量噴霧", brand: "ICD映皙美", price: null, priceNote: "含於活妍保養組",
    desc: "89.6% BYoungPool萃取，Boo-Se-Boo保養程序，強化補水",
    features: ["89.6% BYoungPool萃取", "Boo-Se-Boo第一步", "打造水光肌"],
    category: "精華", series: "活妍專科"
  },
  "icd-derma-serum": {
    id: "icd-derma-serum", name: "活妍煥采精華", brand: "ICD映皙美", price: null, priceNote: "含於活妍保養組",
    desc: "73.4% BYoungPool萃取，NMN青春因子，提升肌膚彈力",
    features: ["NMN青春因子", "提升肌膚彈力", "強化滋養"],
    category: "精華", series: "活妍專科"
  },
  "icd-derma-set": {
    id: "icd-derma-set", name: "活妍專科保養組", brand: "ICD映皙美", price: 2980,
    desc: "Boo-Se-Boo保養程序(噴霧→精華→噴霧)，含活妍能量噴霧+活妍煥采精華",
    features: ["Boo-Se-Boo保養程序", "NMN青春因子", "保濕修護舒緩彈力"],
    category: "套組", series: "活妍專科"
  },
  "icd-derma-cream": {
    id: "icd-derma-cream", name: "活妍奇肌霜", brand: "ICD映皙美", price: 1980,
    desc: "64.7% BYoungPool萃取，低刺激高保濕，@cosme乳霜類第3名",
    features: ["@cosme乳霜類第3名", "低刺激高保濕", "FG特優96%好評"],
    category: "乳霜", series: "活妍專科"
  },
  "icd-r100-toner": {
    id: "icd-r100-toner", name: "光點100精華水", brand: "ICD映皙美", price: 2650,
    desc: "4重超微流科技微分子精華水，12小時長效保濕，啟動亮白機制",
    features: ["柔性微脂體科技", "12小時長效保濕", "亮白與皺紋改善"],
    category: "精華", series: "光點100超微流"
  },
  "icd-r100-ampoule": {
    id: "icd-r100-ampoule", name: "光點100精華(極光小金瓶)", brand: "ICD映皙美", price: 3970,
    desc: "復活草×依克多因，4週改善暗沉膚色，打擊暗沉撫平細紋",
    features: ["4週改善暗沉膚色", "復活草高效修護", "極光小金瓶"],
    category: "精華", series: "光點100超微流"
  },
  "icd-r100-cream": {
    id: "icd-r100-cream", name: "光點100乳霜(小金盾)", brand: "ICD映皙美", price: 3300,
    desc: "5重超微流科技微分子乳霜，搭配彩虹藻，淡化斑點均勻膚色",
    features: ["幫助淡化斑點", "清透緊緻透亮", "小金盾"],
    category: "乳霜", series: "光點100超微流"
  },
  "icd-collagen-mask": {
    id: "icd-collagen-mask", name: "膠原100瞬透水面膜", brand: "ICD映皙美", price: 1980,
    desc: "100%純度膠原蛋白面膜，3GSM超密集結構，噴霧後溶解滲透",
    features: ["100%膠原蛋白", "3GSM技術", "噴霧後溶解滲透"],
    category: "面膜"
  },
  "icd-sunscreen": {
    id: "icd-sunscreen", name: "極效保濕防曬乳 SPF50+", brand: "ICD映皙美", price: 830,
    desc: "13小時長效防曬，亮白淡紋防曬三功能，不泛白，通過敏感肌測試",
    features: ["SPF50+ PA++++", "13小時長效防曬", "通過敏感肌測試"],
    category: "防曬"
  },
  "lifening-collagen": {
    id: "lifening-collagen", name: "微分子膠原飲", brand: "來沛寧 LIFENING", price: 2980,
    desc: "700道爾頓微分子膠原蛋白，液態膠原極佳吸收率，7種莓果濃縮",
    features: ["700道爾頓微分子", "液態極佳吸收率", "7種莓果濃縮"],
    category: "內在保養"
  }
};

// ===== 產品組合 =====
const SETS = {
  "derma-3set": {
    id: "derma-3set", name: "活妍三件組", price: 4960,
    includes: ["活妍能量噴霧", "活妍煥采精華", "活妍奇肌霜"],
    suitable: "已有基礎保濕產品，想加強修護抗老",
    when: ["已有自己的保濕產品，想升級加入活妍系列", "想要Boo-Se-Boo保養程序+乳霜的完整修護"]
  },
  "derma-5set": {
    id: "derma-5set", name: "活妍五件組", price: 7280,
    includes: ["油水平衡噴霧", "舒緩平衡凝露", "活妍能量噴霧", "活妍煥采精華", "活妍奇肌霜"],
    suitable: "完整保養流程，從保濕到修護一次到位，特別適合敏感肌/屏障脆弱者",
    when: ["沒有現成保養品，需要一套完整保養流程", "希望保濕+舒緩+修護+抗老一次到位"]
  },
  "r100-3set": {
    id: "r100-3set", name: "光點三件組", price: 9920,
    includes: ["光點100精華水", "光點100精華", "光點100乳霜"],
    suitable: "進階亮白、淡斑、抗老",
    when: ["暗沉蠟黃，想要明顯改善膚色", "有斑點困擾，想要淡化色素沉澱"]
  }
};

// ===== 膚質資料 =====
const SKIN_TYPES = {
  dry: { name: "乾性肌膚", desc: "肌膚經常感到緊繃、乾燥，容易脫皮，缺乏光澤", chars: ["緊繃感", "脫皮", "缺乏光澤", "細紋明顯"] },
  oily: { name: "油性肌膚", desc: "T字部位容易出油，毛孔粗大，容易長痘痘粉刺", chars: ["T字出油", "毛孔粗大", "容易長痘", "粉刺"] },
  combination: { name: "混合性肌膚", desc: "T字部位出油，兩頰偏乾，需要分區保養", chars: ["T字出油", "兩頰偏乾", "毛孔不均勻"] },
  sensitive: { name: "敏感性肌膚", desc: "肌膚容易泛紅、刺痛，對外在環境刺激敏感", chars: ["容易泛紅", "刺痛感", "對環境敏感", "屏障脆弱"] }
};

// ===== 肌膚困擾資料 =====
const CONCERNS = {
  acne: { name: "痘痘/粉刺", advice: "注重清潔與控油，選擇弱酸性不致粉刺的產品" },
  dullness: { name: "暗沉/膚色不均", advice: "使用光點100系列啟動亮白機制" },
  dryness: { name: "乾燥/缺水", advice: "加強保濕補水，多重保濕層次疊加" },
  oiliness: { name: "出油/油光", advice: "保持清潔同時注意保濕，油水平衡才能減少出油" },
  wrinkles: { name: "細紋/老化", advice: "使用含抗老成分的精華與乳霜" },
  pores: { name: "毛孔粗大", advice: "溫和去角質搭配收斂型產品，做好防曬" },
  spots: { name: "斑點/色素沉澱", advice: "使用光點100系列亮白成分，搭配嚴格防曬" },
  sensitivity: { name: "泛紅/敏感", advice: "選擇低刺激舒緩鎮靜產品，強化肌膚屏障" }
};

// ===== 問題設計 =====
const QUESTIONS = [
  {
    id: "age",
    title: "請問您的年齡區間？",
    desc: "年齡會影響肌膚需求與產品推薦",
    type: "single",
    options: [
      { value: "18-25", label: "18 - 25 歲", hint: "基礎保養期" },
      { value: "26-35", label: "26 - 35 歲", hint: "預防保養期" },
      { value: "36-45", label: "36 - 45 歲", hint: "積極修護期" },
      { value: "46+", label: "46 歲以上", hint: "全方位抗老期" }
    ]
  },
  {
    id: "skinType",
    title: "您覺得自己的膚質最接近哪一種？",
    desc: "選擇最符合您日常肌膚感受的選項",
    type: "single",
    options: [
      { value: "dry", label: "乾性肌膚", hint: "經常感到緊繃乾燥，容易脫皮" },
      { value: "oily", label: "油性肌膚", hint: "T字部位出油明顯，毛孔粗大" },
      { value: "combination", label: "混合性肌膚", hint: "T字出油但兩頰偏乾" },
      { value: "sensitive", label: "敏感性肌膚", hint: "容易泛紅、刺痛，對環境敏感" }
    ]
  },
  {
    id: "concerns",
    title: "您目前最在意的肌膚困擾是？",
    desc: "可複選，最多選 3 項",
    type: "multi",
    maxSelect: 3,
    options: [
      { value: "acne", label: "痘痘/粉刺" },
      { value: "dullness", label: "暗沉/膚色不均" },
      { value: "dryness", label: "乾燥/缺水" },
      { value: "oiliness", label: "出油/油光" },
      { value: "wrinkles", label: "細紋/老化" },
      { value: "pores", label: "毛孔粗大" },
      { value: "spots", label: "斑點/色素沉澱" },
      { value: "sensitivity", label: "泛紅/敏感" }
    ]
  },
  {
    id: "routine",
    title: "您目前的保養習慣是？",
    desc: "了解您現有的保養程度",
    type: "single",
    options: [
      { value: "minimal", label: "極簡保養", hint: "洗臉後幾乎不擦保養品" },
      { value: "basic", label: "基礎保養", hint: "洗臉 + 化妝水/乳液" },
      { value: "complete", label: "完整保養", hint: "有使用精華、乳霜等多步驟" }
    ]
  },
  {
    id: "makeup",
    title: "您平常有上妝的習慣嗎？",
    desc: "",
    type: "single",
    options: [
      { value: "daily", label: "每天上妝" },
      { value: "sometimes", label: "偶爾上妝" },
      { value: "rarely", label: "很少/不上妝" }
    ]
  },
  {
    id: "sunscreen",
    title: "您目前有使用防曬的習慣嗎？",
    desc: "防曬是保養中最重要的一環",
    type: "single",
    options: [
      { value: "always", label: "每天使用", hint: "出門前一定會擦防曬" },
      { value: "sometimes", label: "偶爾使用", hint: "天氣好或戶外活動時才擦" },
      { value: "rarely", label: "幾乎不用", hint: "目前沒有防曬習慣" }
    ]
  },
  {
    id: "budget",
    title: "您對保養品的預算規劃？",
    desc: "幫助我們推薦最適合的產品組合",
    type: "single",
    options: [
      { value: "starter", label: "先從基礎單品開始", hint: "每月預算 NT$1,000 ~ 3,000" },
      { value: "moderate", label: "願意投資一套完整保養", hint: "每月預算 NT$3,000 ~ 7,000" },
      { value: "premium", label: "追求最好的保養效果", hint: "每月預算 NT$7,000 以上" }
    ]
  }
];

// ===== State =====
let currentQuestion = 0;
let answers = {};

// ===== Page Navigation =====
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
  window.scrollTo(0, 0);
}

function startQuiz() {
  currentQuestion = 0;
  answers = {};
  showPage('page-quiz');
  renderQuestion();
}

function restart() {
  currentQuestion = 0;
  answers = {};
  showPage('page-welcome');
}

// ===== Quiz Rendering =====
function renderQuestion() {
  const q = QUESTIONS[currentQuestion];
  const total = QUESTIONS.length;

  // Progress
  document.getElementById('progress-fill').style.width = ((currentQuestion + 1) / total * 100) + '%';
  document.getElementById('progress-text').textContent = `${currentQuestion + 1} / ${total}`;

  // Prev button
  document.getElementById('btn-prev').style.display = currentQuestion > 0 ? 'inline-block' : 'none';

  // Next button text
  const btnNext = document.getElementById('btn-next');
  btnNext.textContent = currentQuestion === total - 1 ? '查看結果' : '下一題';

  // Build question HTML
  const isMulti = q.type === 'multi';
  const selected = answers[q.id] || (isMulti ? [] : null);

  let html = `<div class="question-block">
    <h2 class="question-title">${q.title}</h2>
    ${q.desc ? `<p class="question-desc">${q.desc}</p>` : ''}
    <div class="options-list">`;

  q.options.forEach(opt => {
    const isSelected = isMulti ? selected.includes(opt.value) : selected === opt.value;
    const indicator = isMulti ? 'option-checkbox' : 'option-radio';
    html += `
      <div class="option-item ${isSelected ? 'selected' : ''}" onclick="selectOption('${q.id}', '${opt.value}', ${isMulti})">
        <div class="${indicator}"></div>
        <div class="option-text">
          <div class="option-label">${opt.label}</div>
          ${opt.hint ? `<div class="option-hint">${opt.hint}</div>` : ''}
        </div>
      </div>`;
  });

  html += `</div></div>`;
  document.getElementById('quiz-content').innerHTML = html;

  updateNextButton();
}

function selectOption(qId, value, isMulti) {
  if (isMulti) {
    if (!answers[qId]) answers[qId] = [];
    const idx = answers[qId].indexOf(value);
    const q = QUESTIONS.find(q => q.id === qId);
    if (idx > -1) {
      answers[qId].splice(idx, 1);
    } else if (answers[qId].length < (q.maxSelect || 99)) {
      answers[qId].push(value);
    }
  } else {
    answers[qId] = value;
  }
  renderQuestion();
}

function updateNextButton() {
  const q = QUESTIONS[currentQuestion];
  const btnNext = document.getElementById('btn-next');
  const answer = answers[q.id];
  const hasAnswer = q.type === 'multi' ? (answer && answer.length > 0) : !!answer;
  btnNext.disabled = !hasAnswer;
}

function nextQuestion() {
  if (currentQuestion < QUESTIONS.length - 1) {
    currentQuestion++;
    renderQuestion();
  } else {
    showAnalyzing();
  }
}

function prevQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    renderQuestion();
  }
}

function showAnalyzing() {
  showPage('page-analyzing');
  setTimeout(() => {
    generateResults();
    showPage('page-result');
  }, 1800);
}

// ===== Recommendation Engine =====
function generateResults() {
  const { age, skinType, concerns, routine, makeup, sunscreen, budget } = answers;

  // 1. Render Skin Type
  renderSkinType(skinType);

  // 2. Render Concerns
  renderConcerns(concerns);

  // 3. Calculate recommended products
  const recommendedProducts = getRecommendedProducts(skinType, concerns, age, makeup, sunscreen, budget);
  renderProducts(recommendedProducts);

  // 4. Recommend set
  const recommendedSet = getRecommendedSet(age, concerns, routine, budget);
  renderSet(recommendedSet);

  // 5. Render routine
  const routineSteps = getRoutineSteps(skinType, concerns, age, makeup);
  renderRoutine(routineSteps);
}

function renderSkinType(skinType) {
  const st = SKIN_TYPES[skinType];
  document.getElementById('skin-card').innerHTML = `
    <div class="skin-type-name">${st.name}</div>
    <div class="skin-type-desc">${st.desc}</div>
    <div class="skin-chars">
      ${st.chars.map(c => `<span class="char-tag">${c}</span>`).join('')}
    </div>`;
}

function renderConcerns(concerns) {
  document.getElementById('concern-tags').innerHTML = concerns.map(c => {
    const concern = CONCERNS[c];
    return `<div class="concern-tag">${concern.name}<span class="concern-advice">${concern.advice}</span></div>`;
  }).join('');
}

function getRecommendedProducts(skinType, concerns, age, makeup, sunscreen, budget) {
  const products = new Set();

  // Cleansing - based on skin type
  if (makeup === 'daily' || makeup === 'sometimes') {
    products.add('icd-cleansing-oil');
  }
  if (skinType === 'oily' || skinType === 'combination') {
    products.add('icd-cleansing-powder');
  }
  if (skinType === 'dry' || skinType === 'sensitive') {
    products.add('icd-gel-cleanser');
  }
  // If combination, also recommend gel cleanser for cheeks
  if (skinType === 'combination') {
    products.add('icd-gel-cleanser');
  }

  // Moisturizing - always recommend
  products.add('icd-calming-gel');
  products.add('icd-oil-mist');

  // Concerns-based products
  if (concerns.includes('dullness') || concerns.includes('spots')) {
    products.add('icd-r100-toner');
    products.add('icd-r100-ampoule');
    products.add('icd-r100-cream');
  }

  if (concerns.includes('wrinkles') || concerns.includes('sensitivity')) {
    products.add('icd-derma-set');
    products.add('icd-derma-cream');
  }

  if (concerns.includes('dryness')) {
    products.add('icd-multi-stick');
    products.add('icd-collagen-mask');
  }

  if (concerns.includes('pores')) {
    products.add('icd-cleansing-oil');
    products.add('icd-cleansing-powder');
  }

  // Age-based additions
  if (age === '36-45' || age === '46+') {
    products.add('icd-derma-set');
    products.add('icd-derma-cream');
    products.add('icd-collagen-mask');
    products.add('lifening-collagen');
  }

  if (age === '26-35') {
    products.add('icd-r100-toner');
  }

  if (age === '46+') {
    products.add('icd-r100-toner');
    products.add('icd-r100-ampoule');
    products.add('icd-r100-cream');
  }

  // Sunscreen - always recommend
  if (sunscreen !== 'always') {
    products.add('icd-sunscreen');
  } else {
    products.add('icd-sunscreen'); // Still show, it's essential
  }

  // Multi stick for wrinkles
  if (concerns.includes('wrinkles')) {
    products.add('icd-multi-stick');
  }

  // Budget filter: if starter, limit to essentials
  if (budget === 'starter') {
    const essentials = new Set(['icd-gel-cleanser', 'icd-cleansing-powder', 'icd-calming-gel', 'icd-oil-mist', 'icd-sunscreen', 'icd-cleansing-oil']);
    // Keep only essentials + one concern-specific product
    const filtered = new Set();
    products.forEach(p => {
      if (essentials.has(p)) filtered.add(p);
    });
    // Add at least one concern product
    if (concerns.includes('dullness') || concerns.includes('spots')) filtered.add('icd-r100-toner');
    if (concerns.includes('wrinkles')) filtered.add('icd-multi-stick');
    if (concerns.includes('sensitivity')) filtered.add('icd-derma-set');
    return Array.from(filtered);
  }

  return Array.from(products);
}

function getRecommendedSet(age, concerns, routine, budget) {
  if (budget === 'starter') return null;

  // Anti-aging / Sensitive → Derma sets
  if (concerns.includes('wrinkles') || concerns.includes('sensitivity') || age === '36-45' || age === '46+') {
    if (routine === 'minimal' || routine === 'basic') {
      // No existing products → 5-set
      return 'derma-5set';
    } else {
      // Already has basics → 3-set
      return 'derma-3set';
    }
  }

  // Dullness / Spots → R100
  if (concerns.includes('dullness') || concerns.includes('spots')) {
    if (budget === 'premium' || age === '26-35') {
      return 'r100-3set';
    }
  }

  // 26-35 with moderate+ budget
  if (age === '26-35' && budget !== 'starter') {
    return 'r100-3set';
  }

  // Moderate budget, needs complete routine
  if (budget === 'moderate' && routine !== 'complete') {
    return 'derma-5set';
  }

  return null;
}

function renderProducts(productIds) {
  const grid = document.getElementById('product-grid');

  // Sort: cleansing → moisturizing → serum → cream → mask → sunscreen → inner beauty
  const categoryOrder = { "潔顏": 1, "保濕": 2, "精華": 3, "套組": 4, "乳霜": 5, "補強": 6, "面膜": 7, "防曬": 8, "內在保養": 9 };
  productIds.sort((a, b) => (categoryOrder[PRODUCTS[a]?.category] || 99) - (categoryOrder[PRODUCTS[b]?.category] || 99));

  grid.innerHTML = productIds.map(pid => {
    const p = PRODUCTS[pid];
    if (!p) return '';

    let priceHtml = '';
    if (p.price) {
      priceHtml = `<div class="product-price">NT$ ${p.price.toLocaleString()}</div>`;
    } else if (p.priceNote) {
      priceHtml = `<div class="product-price"><span class="product-price-note">${p.priceNote}</span></div>`;
    }

    return `
      <div class="product-card">
        <div class="product-brand">${p.brand}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.desc}</div>
        <ul class="product-features">
          ${p.features.map(f => `<li>${f}</li>`).join('')}
        </ul>
        ${priceHtml}
      </div>`;
  }).join('');
}

function renderSet(setId) {
  const section = document.getElementById('result-set');
  if (!setId) {
    section.style.display = 'none';
    return;
  }

  const s = SETS[setId];
  section.style.display = 'block';
  document.getElementById('set-card').innerHTML = `
    <div class="set-card">
      <div class="set-name">${s.name}</div>
      <div class="set-price">NT$ ${s.price.toLocaleString()}</div>
      <ul class="set-includes">
        ${s.includes.map(item => `<li>${item}</li>`).join('')}
      </ul>
      <div class="set-reason">
        <strong>推薦原因：</strong>${s.suitable}
      </div>
    </div>`;
}

function getRoutineSteps(skinType, concerns, age, makeup) {
  const morning = [];
  const evening = [];

  const hasBrightening = concerns.includes('dullness') || concerns.includes('spots');
  const hasAntiAging = concerns.includes('wrinkles') || age === '36-45' || age === '46+';

  // Helper: cleanser step
  const cleanserStep = (skinType === 'oily' || skinType === 'combination')
    ? { name: "潔顏", product: "活膚潔顏粉", note: "木瓜酵素弱酸性潔顏，深層清潔同時溫和代謝角質" }
    : { name: "潔顏", product: "平衡潔顏凝膠", note: "pH 5.5 弱酸性，溫和不刺激，適合乾性及敏感肌" };

  // Helper: core skincare steps (shared by AM & PM)
  function addCoreSteps(target) {
    if (hasBrightening && (age !== '18-25')) {
      target.push({ name: "精華水", product: "光點100精華水", note: "啟動亮白機制，12小時長效保濕" });
      target.push({ name: "精華", product: "光點100精華(極光小金瓶)", note: "打擊暗沉撫平細紋" });
      target.push({ name: "乳霜", product: "光點100乳霜(小金盾)", note: "鎖定光澤封存養分，均勻膚色" });
    } else if (hasAntiAging) {
      target.push({ name: "噴霧(第一次)", product: "活妍能量噴霧", note: "Boo-Se-Boo 第一步，強化補水" });
      target.push({ name: "精華", product: "活妍煥采精華", note: "Boo-Se-Boo 第二步，強化滋養" });
      target.push({ name: "噴霧(第二次)", product: "活妍能量噴霧", note: "Boo-Se-Boo 第三步，鎖住精華" });
      target.push({ name: "乳霜", product: "活妍奇肌霜", note: "低刺激高保濕，深層修護" });
    } else {
      target.push({ name: "保濕", product: "舒緩平衡凝露", note: "24K純金 + 8重玻尿酸，舒緩鎮靜補水保濕" });
    }
    target.push({ name: "補強", product: "油水平衡噴霧", note: "全臉噴灑，油水平衡，讓肌膚散發水漾光澤" });
  }

  // ── 早上 ──
  morning.push(cleanserStep);
  addCoreSteps(morning);
  morning.push({ name: "防曬", product: "極效保濕防曬乳 SPF50+", note: "外出前30分鐘使用，日間保養最後一步" });

  // ── 晚上 ──
  if (makeup === 'daily' || makeup === 'sometimes') {
    evening.push({ name: "卸妝", product: "淨膚卸妝油", note: "有上妝時使用，取適量於乾燥手心輕柔按摩後沖淨" });
  }
  evening.push(cleanserStep);
  addCoreSteps(evening);

  // 面膜（晚間，週2-3次）
  if (hasAntiAging || concerns.includes('dryness')) {
    evening.push({ name: "面膜 (週2-3次)", product: "膠原100瞬透水面膜", note: "搭配噴霧使用，100%膠原蛋白加強彈力" });
  }

  // 內在保養
  const extras = [];
  if (age === '36-45' || age === '46+') {
    extras.push({ name: "內在保養 (每日)", product: "微分子膠原飲", note: "每日1瓶，由內而外補充膠原蛋白" });
  }

  return { morning, evening, extras };
}

function renderRoutine(routine) {
  const { morning, evening, extras } = routine;

  function renderSteps(steps) {
    return steps.map((step, i) => `
      <div class="routine-step">
        <div class="step-number">${i + 1}</div>
        <div class="step-content">
          <div class="step-name">${step.name}</div>
          <div class="step-product">${step.product}</div>
          <div class="step-note">${step.note}</div>
        </div>
      </div>`).join('');
  }

  let html = `
    <div class="routine-period">
      <div class="period-header morning">
        <span class="period-icon">&#9788;</span>
        <span class="period-label">早上保養</span>
      </div>
      <div class="routine-steps-inner">${renderSteps(morning)}</div>
    </div>
    <div class="routine-period">
      <div class="period-header evening">
        <span class="period-icon">&#9790;</span>
        <span class="period-label">晚上保養</span>
      </div>
      <div class="routine-steps-inner">${renderSteps(evening)}</div>
    </div>`;

  if (extras.length > 0) {
    html += `
      <div class="routine-period">
        <div class="period-header extras">
          <span class="period-icon">&#10024;</span>
          <span class="period-label">日常加強</span>
        </div>
        <div class="routine-steps-inner">${renderSteps(extras)}</div>
      </div>`;
  }

  document.getElementById('routine-steps').innerHTML = html;
}
