// ── Routine Data ──
const R = {
  A: {
    title: "Chest + Triceps",
    sections: [
      { title: "CHEST", exercises: [
        { id:"bench", kr:"바벨 벤치프레스", sets:4, reps:"5-6", rpe:[8,8,9,10], rest:"3m", tempo:"2-0-1-0", type:"str", inc:2.5,
          tips:["마지막 세트 AMRAP (최소5개)","AMRAP 8개+ → 다음주 +2.5kg","6-7개 → 유지 / 5개 미만 → -2.5kg"],
          warmup:"빈바x15 → 40%x10 → 60%x6 → 80%x3" },
        { id:"inc_db", kr:"인클라인 덤벨프레스 (30도)", sets:4, reps:"8-10", rpe:[8,8,9,10], rest:"90s", tempo:"3-0-1-1", type:"hyp", inc:2,
          tips:["상부 가슴 스트레치 강조","내리기 3초 필수","4세트 합산 38개+ → +2kg"] },
        { id:"fly", kr:"케이블 플라이", sets:3, reps:"12-15", rpe:[8,9,10], rest:"60s", tempo:"2-0-1-2", type:"iso", inc:1,
          tips:["수축 시 2초 홀드","무게보다 수축감 우선"] },
        { id:"m_chest", kr:"머신 체스트프레스", sets:3, reps:"10-12", rpe:[9,9,10], rest:"60s", tempo:"2-0-1-1", type:"hyp", inc:2.5,
          tips:["벤치 후 안전하게 추가 볼륨","머신이니 실패까지 OK"] },
      ]},
      { title: "TRICEPS", exercises: [
        { id:"cgbp", kr:"클로즈그립 벤치프레스", sets:3, reps:"8-10", rpe:[8,9,10], rest:"90s", tempo:"2-0-1-0", type:"hyp", inc:2.5,
          tips:["어깨너비보다 약간 좁게","삼두 전체 + 가슴 하부","팔꿈치 벌어지면 그립 너무 좁음"] },
        { id:"push", kr:"케이블 푸시다운", sets:3, reps:"10-12", rpe:[8,9,10], rest:"60s", tempo:"2-0-1-1", type:"iso", inc:1,
          tips:["삼두 외측두 집중","마지막세트 드롭: 실패→줄여서실패→또줄여서실패","팔꿈치 고정"] },
      ]}
    ]
  },
  B: {
    title: "Back + Biceps",
    sections: [
      { title: "BACK", exercises: [
        { id:"row", kr:"바벨 로우 (펜들레이)", sets:4, reps:"5-6", rpe:[8,8,9,10], rest:"3m", tempo:"1-1-1-0", type:"str", inc:2.5,
          tips:["바닥에서 매 rep 정지","상체 45도 이상 → 무게 과함 → -5kg","AMRAP 8개+ → +2.5kg"],
          warmup:"40%x10 → 60%x6 → 80%x3" },
        { id:"lat", kr:"랫풀다운 (와이드)", sets:4, reps:"8-10", rpe:[8,8,9,10], rest:"90s", tempo:"3-0-1-2", type:"hyp", inc:2.5,
          tips:["등 넓이 (광배근 상부)","올릴 때 3초","수축 시 2초 홀드"] },
        { id:"s_row", kr:"케이블 시티드 로우 (V바)", sets:3, reps:"10-12", rpe:[8,9,10], rest:"90s", tempo:"2-0-1-2", type:"hyp", inc:2.5,
          tips:["등 두께 (승모+능형근)","당기고 2초 쥐어짜기","흔들리면 무게 과함"] },
        { id:"m_row", kr:"머신로우 / 원암덤벨로우", sets:3, reps:"10-12", rpe:[9,9,10], rest:"60s", tempo:"2-0-1-2", type:"hyp", inc:2,
          tips:["좌우 불균형 교정","마무리 수축 집중"] },
      ]},
      { title: "BICEPS", exercises: [
        { id:"curl", kr:"바벨컬 (EZ/스트레이트)", sets:3, reps:"8-10", rpe:[8,9,10], rest:"60s", tempo:"2-0-1-1", type:"hyp", inc:2.5,
          tips:["치팅 절대 금지","반동 나오면 무게 내려","팔꿈치 몸 옆 고정"] },
        { id:"ham", kr:"해머컬 (덤벨)", sets:3, reps:"12-15", rpe:[8,9,10], rest:"60s", tempo:"2-0-1-1", type:"iso", inc:1,
          tips:["상완근+전완근 → 팔 두께","마지막세트 드롭: 실패→줄여서실패→또줄여서실패"] },
      ]}
    ]
  },
  C: {
    title: "Shoulder + Acc",
    sections: [
      { title: "SHOULDER", exercises: [
        { id:"ohp", kr:"덤벨 숄더프레스 (시티드)", sets:4, reps:"8-10", rpe:[8,8,9,10], rest:"2m", tempo:"2-0-1-1", type:"hyp", inc:2,
          tips:["전면+측면 삼각근 메인","4세트 합산 38개+ → +2kg","허리 아치 과하면 무게 과함"] },
        { id:"lat_r", kr:"사이드 레터럴레이즈", sets:4, reps:"12-15", rpe:[8,9,9,10], rest:"60s", tempo:"1-0-1-1", type:"iso", inc:1,
          tips:["어깨 넓이 핵심","승모근 올라오면 -2kg","마지막세트 드롭: 실패→줄여서→또줄여서","8kg 제대로 > 14kg 치팅"] },
        { id:"rear", kr:"리어델트 머신", sets:3, reps:"12-15", rpe:[8,9,10], rest:"60s", tempo:"1-0-1-2", type:"iso", inc:1,
          tips:["후면삼각근","수축 2초 쥐어짜기"] },
        { id:"face", kr:"페이스풀 (로프)", sets:3, reps:"15-20", rpe:[8,9,9], rest:"45s", tempo:"1-0-1-2", type:"iso", inc:1,
          tips:["후면삼각근+외회전=어깨건강","가볍게, 수축 2초","로프를 귀 옆까지"] },
        { id:"m_ohp", kr:"머신 숄더프레스", sets:3, reps:"12-15", rpe:[9,9,10], rest:"60s", tempo:"2-0-1-1", type:"hyp", inc:2.5,
          tips:["전면삼각근 마무리","머신이니 실패까지 OK"] },
      ]},
      { title: "ACCESSORIES", exercises: [
        { id:"shrug", kr:"덤벨 쉬러그", sets:3, reps:"12-15", rpe:[8,9,9], rest:"60s", tempo:"1-0-1-2", type:"iso", inc:2,
          tips:["승모근 상부","2초 홀드 필수","귀에 어깨 붙이는 느낌"] },
        { id:"inc_l", kr:"인클라인 덤벨프레스 (가볍게)", sets:3, reps:"12-15", rpe:[8,8,9], rest:"60s", tempo:"3-0-1-1", type:"iso", inc:2,
          tips:["상부 가슴 주2회 자극","Day A보다 가볍게","RPE 8-9 유지"] },
      ]}
    ]
  }
};

// ── State ──
let day = "A";
let st = {};
let openCards = {};

// ── Init ──
document.addEventListener("DOMContentLoaded", () => { load(); render(); });

function pick(d) {
  day = d;
  document.querySelectorAll(".tab").forEach(t => t.classList.toggle("on", t.dataset.d === d));
  openCards = {};
  load();
  render();
  window.scrollTo(0, 0);
}

// ── Keys ──
function todayKey() {
  const d = new Date();
  return `w_${day}_${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
}

function load() {
  const s = localStorage.getItem(todayKey());
  if (s) { st = JSON.parse(s); return; }
  st = {};
  forEachEx((ex) => {
    const rec = getRecommendation(ex.id, ex);
    st[ex.id] = {
      sets: Array.from({length: ex.sets}, (_, i) => ({
        kg: rec ? String(rec.kg) : "",
        reps: "",
        done: false
      }))
    };
  });
}

function save() {
  localStorage.setItem(todayKey(), JSON.stringify(st));
}

function forEachEx(fn) {
  R[day].sections.forEach(s => s.exercises.forEach(fn));
}

// ── Recommendation Engine ──
function getRecommendation(exId, ex) {
  // Find most recent completed workout for this exercise
  const keys = Object.keys(localStorage)
    .filter(k => k.startsWith(`w_${day}_`))
    .sort().reverse();

  const tk = todayKey();
  for (const key of keys) {
    if (key === tk) continue;
    try {
      const data = JSON.parse(localStorage.getItem(key));
      if (!data[exId]) continue;
      const sets = data[exId].sets.filter(s => s.done && s.kg);
      if (sets.length === 0) continue;

      const lastKg = parseFloat(sets[0].kg);
      const totalReps = sets.reduce((sum, s) => sum + (parseInt(s.reps) || 0), 0);
      const lastSetReps = parseInt(sets[sets.length - 1].reps) || 0;
      const repRange = ex.reps.split("-").map(Number);
      const upper = repRange[1] || repRange[0];

      let recKg = lastKg;
      let reason = "";

      if (ex.type === "str") {
        // Strength: AMRAP based
        if (lastSetReps >= 8) {
          recKg = lastKg + ex.inc;
          reason = `AMRAP ${lastSetReps}reps -> +${ex.inc}kg`;
        } else if (lastSetReps >= upper) {
          reason = `${lastKg}kg / AMRAP ${lastSetReps} -> Maintain`;
        } else {
          recKg = lastKg - ex.inc;
          reason = `AMRAP ${lastSetReps}reps -> -${ex.inc}kg`;
        }
      } else if (ex.type === "hyp") {
        // Hypertrophy: total reps based
        const threshold = upper * ex.sets;
        if (totalReps >= threshold) {
          recKg = lastKg + ex.inc;
          reason = `Total ${totalReps}/${threshold}reps -> +${ex.inc}kg`;
        } else {
          reason = `Total ${totalReps}/${threshold}reps -> Maintain`;
        }
      } else {
        // Isolation: if all sets hit upper range
        const allHitUpper = sets.every(s => (parseInt(s.reps) || 0) >= upper);
        if (allHitUpper) {
          recKg = lastKg + ex.inc;
          reason = `All sets ${upper}reps+ -> +${ex.inc}kg`;
        } else {
          reason = `Maintain ${lastKg}kg`;
        }
      }

      return { kg: Math.max(0, recKg), reason, lastKg, totalReps, lastSetReps };
    } catch(e) { continue; }
  }
  return null;
}

// ── Render ──
function render() {
  const routine = R[day];
  let h = "";

  // Progress
  let total = 0, done = 0;
  forEachEx(ex => {
    const s = st[ex.id];
    if (s) { total += s.sets.length; done += s.sets.filter(x => x.done).length; }
  });
  const pct = total ? Math.round(done / total * 100) : 0;
  h += `<div class="prog"><div class="prog-bar"><div class="prog-fill" style="width:${pct}%"></div></div><span class="prog-txt">${done}/${total} (${pct}%)</span></div>`;

  routine.sections.forEach(sec => {
    h += `<div class="sec-title">${sec.title}</div>`;
    sec.exercises.forEach(ex => {
      const s = st[ex.id];
      const allDone = s && s.sets.every(x => x.done);
      const cnt = s ? s.sets.filter(x => x.done).length : 0;
      const isOpen = openCards[ex.id];
      const rec = getRecommendation(ex.id, ex);

      h += `<div class="ex${allDone ? " done" : ""}${isOpen ? " open" : ""}" id="c-${ex.id}">`;

      // Header
      h += `<div class="ex-head" onclick="toggle('${ex.id}')">`;
      h += `<div><div class="ex-name">${ex.kr}</div>`;
      h += `<div class="ex-sub">${ex.sets}x${ex.reps} / ${ex.rest} / ${ex.tempo}</div></div>`;
      h += `<div class="ex-info">`;
      if (rec && !allDone) {
        h += `<span style="font-size:10px;color:var(--blue);font-weight:600">${rec.kg}kg</span>`;
      }
      h += `<span class="ex-badge${allDone ? " done" : ""}">${allDone ? "DONE" : cnt+"/"+ex.sets}</span>`;
      h += `<span class="ex-arrow">&#9660;</span>`;
      h += `</div></div>`;

      // Sets (collapsible)
      h += `<div class="sets">`;

      // Recommendation banner
      if (rec) {
        h += `<div class="rec-banner"><b>&#8593;</b> ${rec.reason}</div>`;
      }

      // Header
      h += `<div class="set-head"><span></span><span>KG</span><span>REPS</span><span>RPE</span><span></span></div>`;

      s.sets.forEach((set, i) => {
        const rpeV = ex.rpe[i];
        const rpeClass = rpeV === 10 ? "rpe rpe10" : "rpe";
        const rpeText = rpeV === 10 ? "MAX" : "RPE"+rpeV;
        const placeholder = rec ? rec.kg : "";

        h += `<div class="set-row${set.done ? " checked-row" : ""}">`;
        h += `<span class="set-n">${i+1}</span>`;
        h += `<input class="set-in${!set.kg && rec ? " has-rec" : ""}" type="number" inputmode="decimal" placeholder="${placeholder}" value="${set.kg}" onchange="upd('${ex.id}',${i},'kg',this.value)" onfocus="this.select()">`;
        h += `<input class="set-in" type="number" inputmode="numeric" placeholder="${ex.reps}" value="${set.reps}" onchange="upd('${ex.id}',${i},'reps',this.value)" onfocus="this.select()">`;
        h += `<span class="${rpeClass}">${rpeText}</span>`;
        h += `<button class="chk${set.done ? " on" : ""}" onclick="chk('${ex.id}',${i})">${set.done ? "&#10003;" : ""}</button>`;
        h += `</div>`;
      });

      // Info button
      h += `<div style="text-align:center;padding:4px 0 2px">`;
      h += `<button style="background:none;border:1px solid var(--border);color:var(--t2);font-size:10px;padding:4px 14px;border-radius:8px;cursor:pointer" onclick="detail('${ex.id}')">Tips & History</button>`;
      h += `</div>`;

      h += `</div></div>`;
    });
  });

  document.getElementById("main").innerHTML = h;
  document.getElementById("finish").style.display = "flex";
}

// ── Actions ──
function toggle(id) {
  openCards[id] = !openCards[id];
  render();
}

function upd(id, i, field, val) {
  st[id].sets[i][field] = val;
  save();
}

function chk(id, i) {
  const set = st[id].sets[i];
  set.done = !set.done;
  if (set.done) {
    // Auto-fill from previous set or recommendation
    if (!set.kg && i > 0 && st[id].sets[i-1].kg) {
      set.kg = st[id].sets[i-1].kg;
    }
    if (!set.kg) {
      const ex = findEx(id);
      if (ex) {
        const rec = getRecommendation(id, ex);
        if (rec) set.kg = String(rec.kg);
      }
    }
  }
  save();
  render();
}

function findEx(id) {
  let found = null;
  R[day].sections.forEach(s => s.exercises.forEach(e => { if (e.id === id) found = e; }));
  return found;
}

// ── Detail ──
function detail(id) {
  const ex = findEx(id);
  if (!ex) return;
  document.getElementById("det-title").textContent = ex.kr;

  let h = "";
  h += `<div class="d-sec"><h3>INFO</h3><table class="d-tbl">`;
  h += `<tr><th>Sets x Reps</th><td>${ex.sets} x ${ex.reps}</td></tr>`;
  h += `<tr><th>Rest</th><td>${ex.rest}</td></tr>`;
  h += `<tr><th>Tempo</th><td>${ex.tempo} (down-pause-up-squeeze)</td></tr>`;
  h += `<tr><th>RPE</th><td>${ex.rpe.join(" → ")}</td></tr>`;
  h += `<tr><th>Progression</th><td>+${ex.inc}kg when target met</td></tr>`;
  h += `</table></div>`;

  if (ex.warmup) {
    h += `<div class="d-sec"><h3>WARM-UP</h3><p>${ex.warmup}</p></div>`;
  }

  // Recommendation
  const rec = getRecommendation(ex.id, ex);
  if (rec) {
    h += `<div class="d-sec"><h3>NEXT WEIGHT</h3><div class="d-rec">`;
    h += `<p>${rec.reason}</p>`;
    h += `<p style="margin-top:4px;font-size:12px;opacity:.7">Recommended: ${rec.kg}kg (editable)</p>`;
    h += `</div></div>`;
  }

  h += `<div class="d-sec"><h3>TIPS</h3><ul>`;
  ex.tips.forEach(t => h += `<li>${t}</li>`);
  h += `</ul></div>`;

  // Previous records
  const prev = getPrev(ex.id);
  if (prev.length) {
    h += `<div class="d-sec"><h3>PREVIOUS</h3><table class="d-tbl"><tr><th>Date</th><th>Sets</th></tr>`;
    prev.forEach(r => h += `<tr><td>${r.date}</td><td>${r.sum}</td></tr>`);
    h += `</table></div>`;
  }

  document.getElementById("det-body").innerHTML = h;
  document.getElementById("det-modal").classList.remove("hide");
}

function closeDet() { document.getElementById("det-modal").classList.add("hide"); }

function getPrev(id) {
  const out = [];
  const keys = Object.keys(localStorage).filter(k => k.startsWith(`w_${day}_`)).sort().reverse();
  const tk = todayKey();
  for (const k of keys) {
    if (k === tk || out.length >= 5) break;
    try {
      const d = JSON.parse(localStorage.getItem(k));
      if (!d[id]) continue;
      const sets = d[id].sets.filter(s => s.done);
      if (!sets.length) continue;
      out.push({ date: k.slice(4), sum: sets.map(s => `${s.kg||"?"}x${s.reps||"?"}`).join(" / ") });
    } catch(e) {}
  }
  return out;
}

// ── Finish ──
function finish() {
  let total = 0, done = 0;
  const exData = [];
  forEachEx(ex => {
    const s = st[ex.id];
    if (!s) return;
    total += s.sets.length;
    const ds = s.sets.filter(x => x.done);
    done += ds.length;
    if (ds.length) exData.push({ name: ex.kr, sets: ds.map(x => ({kg:x.kg, reps:x.reps})) });
  });
  if (!done) { alert("Complete at least 1 set!"); return; }

  const pct = Math.round(done/total*100);
  const hist = JSON.parse(localStorage.getItem("hist") || "[]");
  hist.unshift({
    date: new Date().toISOString(),
    day, title: R[day].title, pct, exercises: exData
  });
  if (hist.length > 100) hist.pop();
  localStorage.setItem("hist", JSON.stringify(hist));
  alert(`Day ${day} Complete! (${pct}%)\n${done}/${total} sets`);
}

// ── History ──
function showHistory() {
  const hist = JSON.parse(localStorage.getItem("hist") || "[]");
  const el = document.getElementById("hist-body");
  if (!hist.length) {
    el.innerHTML = '<div class="h-empty">No records yet.</div>';
    document.getElementById("hist-modal").classList.remove("hide");
    return;
  }
  let h = "";
  hist.forEach((r, i) => {
    const d = new Date(r.date);
    const ds = `${d.getFullYear()}.${String(d.getMonth()+1).padStart(2,"0")}.${String(d.getDate()).padStart(2,"0")}`;
    const dn = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][d.getDay()];
    h += `<div class="h-card">`;
    h += `<button class="h-del" onclick="delHist(${i})">Del</button>`;
    h += `<div class="h-date">${ds} (${dn})</div>`;
    h += `<div class="h-type">Day ${r.day} - ${r.title} (${r.pct}%)</div>`;
    r.exercises.forEach(ex => {
      h += `<div class="h-ex"><span>${ex.name}</span><span class="h-sets">${ex.sets.map(s=>`${s.kg||"?"}x${s.reps||"?"}`).join(" / ")}</span></div>`;
    });
    h += `</div>`;
  });
  el.innerHTML = h;
  document.getElementById("hist-modal").classList.remove("hide");
}

function closeHist() { document.getElementById("hist-modal").classList.add("hide"); }

function delHist(i) {
  if (!confirm("Delete?")) return;
  const h = JSON.parse(localStorage.getItem("hist") || "[]");
  h.splice(i, 1);
  localStorage.setItem("hist", JSON.stringify(h));
  showHistory();
}

// ── SW ──
if ("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js").catch(()=>{});
