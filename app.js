// ── Routine Data ──
const ROUTINE = {
  A: {
    name: "Day A",
    title: "Chest + Triceps",
    sections: [
      {
        title: "CHEST",
        exercises: [
          {
            id: "bench",
            name: "Barbell Bench Press",
            nameKr: "바벨 벤치프레스",
            sets: 4,
            reps: "5-6",
            rpe: [8, 8, 9, 10],
            rest: "3min",
            tempo: "2-0-1-0",
            tips: [
              "가슴 전체 근력의 베이스.",
              "마지막 세트는 AMRAP (최소 5개).",
              "AMRAP 8개 이상 → 다음 주 2.5kg 증량.",
              "AMRAP 6-7개 → 유지. 5개 미만 → 2.5kg 감량."
            ],
            warmup: "바만x15 → 40%x10 → 60%x6 → 80%x3"
          },
          {
            id: "incline_db",
            name: "Incline DB Press",
            nameKr: "인클라인 덤벨프레스 (30도)",
            sets: 4,
            reps: "8-10",
            rpe: [8, 8, 9, 10],
            rest: "90s",
            tempo: "3-0-1-1",
            tips: [
              "상부 가슴 스트레치 강조.",
              "내리기 3초 필수.",
              "4세트 합산 38개 이상 → 2kg 증량."
            ]
          },
          {
            id: "cable_fly",
            name: "Cable Fly",
            nameKr: "케이블 플라이 (중간 높이)",
            sets: 3,
            reps: "12-15",
            rpe: [8, 9, 10],
            rest: "60s",
            tempo: "2-0-1-2",
            tips: [
              "가슴 안쪽 수축 + 스트레치.",
              "수축 시 2초 홀드.",
              "무게보다 수축감이 핵심."
            ]
          },
          {
            id: "machine_chest",
            name: "Machine Chest Press",
            nameKr: "머신 체스트프레스",
            sets: 3,
            reps: "10-12",
            rpe: [9, 9, 10],
            rest: "60s",
            tempo: "2-0-1-1",
            tips: [
              "벤치로 지친 후 안전하게 추가 볼륨.",
              "머신이니까 실패까지 밀어도 OK."
            ]
          }
        ]
      },
      {
        title: "TRICEPS",
        exercises: [
          {
            id: "cgbp",
            name: "Close-Grip Bench Press",
            nameKr: "클로즈그립 벤치프레스",
            sets: 3,
            reps: "8-10",
            rpe: [8, 9, 10],
            rest: "90s",
            tempo: "2-0-1-0",
            tips: [
              "어깨너비보다 약간 좁게 그립.",
              "삼두 전체 + 가슴 하부 동원.",
              "팔꿈치가 옆으로 벌어지면 그립 너무 좁은 것."
            ]
          },
          {
            id: "pushdown",
            name: "Cable Pushdown",
            nameKr: "케이블 푸시다운 (스트레이트바)",
            sets: 3,
            reps: "10-12",
            rpe: [8, 9, 10],
            rest: "60s",
            tempo: "2-0-1-1",
            tips: [
              "삼두 외측두 집중.",
              "마지막 세트 드롭세트: 실패→무게 줄여서 실패→또 줄여서 실패.",
              "팔꿈치 고정. 어깨 개입 X."
            ]
          }
        ]
      }
    ]
  },
  B: {
    name: "Day B",
    title: "Back + Biceps",
    sections: [
      {
        title: "BACK",
        exercises: [
          {
            id: "pendlay",
            name: "Pendlay Row",
            nameKr: "바벨 로우 (펜들레이)",
            sets: 4,
            reps: "5-6",
            rpe: [8, 8, 9, 10],
            rest: "3min",
            tempo: "1-1-1-0",
            tips: [
              "등 두께 근력 베이스.",
              "바닥에서 매 rep 정지 (반동 제거).",
              "상체 45도 이상 올라가면 무게 과함 → 5kg 내림.",
              "AMRAP 8개 이상 → 다음 주 2.5kg 증량."
            ],
            warmup: "40%x10 → 60%x6 → 80%x3"
          },
          {
            id: "lat_pull",
            name: "Lat Pulldown (Wide)",
            nameKr: "랫풀다운 (와이드 오버그립)",
            sets: 4,
            reps: "8-10",
            rpe: [8, 8, 9, 10],
            rest: "90s",
            tempo: "3-0-1-2",
            tips: [
              "등 넓이 (광배근 상부).",
              "올릴 때 3초 천천히.",
              "수축 시 2초 홀드.",
              "4세트 합산 38개 이상 → 2.5kg 증량."
            ]
          },
          {
            id: "seated_row",
            name: "Seated Cable Row",
            nameKr: "케이블 시티드 로우 (V바)",
            sets: 3,
            reps: "10-12",
            rpe: [8, 9, 10],
            rest: "90s",
            tempo: "2-0-1-2",
            tips: [
              "등 두께 (중부 승모+능형근).",
              "당기고 2초 쥐어짜기.",
              "몸이 앞뒤로 흔들리면 무게 과함."
            ]
          },
          {
            id: "machine_row",
            name: "Machine Row / 1-Arm DB Row",
            nameKr: "머신 로우 or 원암 덤벨 로우",
            sets: 3,
            reps: "10-12",
            rpe: [9, 9, 10],
            rest: "60s",
            tempo: "2-0-1-2",
            tips: [
              "좌우 불균형 교정.",
              "마무리 볼륨, 수축 집중."
            ]
          }
        ]
      },
      {
        title: "BICEPS",
        exercises: [
          {
            id: "barbell_curl",
            name: "Barbell Curl",
            nameKr: "바벨컬 (EZ바 or 스트레이트)",
            sets: 3,
            reps: "8-10",
            rpe: [8, 9, 10],
            rest: "60s",
            tempo: "2-0-1-1",
            tips: [
              "이두 전체 볼륨.",
              "치팅 절대 금지. 반동 나오면 무게 내려.",
              "팔꿈치 몸 옆에 고정."
            ]
          },
          {
            id: "hammer_curl",
            name: "Hammer Curl",
            nameKr: "해머컬 (덤벨)",
            sets: 3,
            reps: "12-15",
            rpe: [8, 9, 10],
            rest: "60s",
            tempo: "2-0-1-1",
            tips: [
              "상완근 + 전완근 → 팔 두께.",
              "마지막 세트 드롭세트: 실패→무게 줄여서 실패→또 줄여서 실패.",
              "전완이 터질 것 같으면 잘 하고 있는 거."
            ]
          }
        ]
      }
    ]
  },
  C: {
    name: "Day C",
    title: "Shoulder + Accessories",
    sections: [
      {
        title: "SHOULDER",
        exercises: [
          {
            id: "db_ohp",
            name: "DB Shoulder Press",
            nameKr: "덤벨 숄더프레스 (시티드)",
            sets: 4,
            reps: "8-10",
            rpe: [8, 8, 9, 10],
            rest: "2min",
            tempo: "2-0-1-1",
            tips: [
              "전면+측면 삼각근 메인 종목.",
              "4세트 합산 38개 이상 → 2kg 증량.",
              "허리 아치 과하면 무게 과함."
            ]
          },
          {
            id: "lateral_raise",
            name: "Lateral Raise",
            nameKr: "사이드 레터럴레이즈 (덤벨)",
            sets: 4,
            reps: "12-15",
            rpe: [8, 9, 9, 10],
            rest: "60s",
            tempo: "1-0-1-1",
            tips: [
              "어깨 넓이 핵심 = 측면삼각근.",
              "승모근 올라오면 무게 과함 → 2kg 내려.",
              "새끼손가락이 위를 향하게 (약간 쏟는 느낌).",
              "마지막 세트 드롭세트: 실패→줄여서 실패→또 줄여서 실패.",
              "8kg 제대로 > 14kg 치팅."
            ]
          },
          {
            id: "rear_delt",
            name: "Rear Delt Machine",
            nameKr: "리어델트 머신 (펙덱 리버스)",
            sets: 3,
            reps: "12-15",
            rpe: [8, 9, 10],
            rest: "60s",
            tempo: "1-0-1-2",
            tips: [
              "후면삼각근.",
              "수축 시 2초 쥐어짜기."
            ]
          },
          {
            id: "facepull",
            name: "Face Pull",
            nameKr: "페이스풀 (로프)",
            sets: 3,
            reps: "15-20",
            rpe: [8, 9, 9],
            rest: "45s",
            tempo: "1-0-1-2",
            tips: [
              "후면삼각근 + 외회전 → 어깨 건강.",
              "가볍게, 수축 2초.",
              "로프를 귀 옆까지 당기기."
            ]
          },
          {
            id: "machine_ohp",
            name: "Machine Shoulder Press",
            nameKr: "머신 숄더프레스",
            sets: 3,
            reps: "12-15",
            rpe: [9, 9, 10],
            rest: "60s",
            tempo: "2-0-1-1",
            tips: [
              "전면삼각근 마무리.",
              "머신이니까 실패까지 OK."
            ]
          }
        ]
      },
      {
        title: "ACCESSORIES",
        exercises: [
          {
            id: "shrug",
            name: "DB Shrug",
            nameKr: "덤벨 쉬러그",
            sets: 3,
            reps: "12-15",
            rpe: [8, 9, 9],
            rest: "60s",
            tempo: "1-0-1-2",
            tips: [
              "승모근 상부.",
              "2초 홀드 필수.",
              "귀에 어깨 갖다 붙이는 느낌."
            ]
          },
          {
            id: "incline_db_light",
            name: "Incline DB Press (Light)",
            nameKr: "인클라인 덤벨프레스 (가볍게)",
            sets: 3,
            reps: "12-15",
            rpe: [8, 8, 9],
            rest: "60s",
            tempo: "3-0-1-1",
            tips: [
              "상부 가슴 빈도 추가 (주 2회 자극).",
              "Day A보다 가볍게. 여기서 무리하면 월요일에 영향.",
              "RPE 8-9 유지."
            ]
          }
        ]
      }
    ]
  }
};

// ── State ──
let currentDay = "A";
let workoutState = {}; // { exerciseId: { sets: [{kg:'', reps:'', done:false}] } }

// ── Init ──
document.addEventListener("DOMContentLoaded", () => {
  loadTodayState();
  renderWorkout();
});

function selectDay(day) {
  currentDay = day;
  document.querySelectorAll(".day-tab").forEach((t) => {
    t.classList.toggle("active", t.dataset.day === day);
  });
  loadTodayState();
  renderWorkout();
  window.scrollTo(0, 0);
}

// ── Load/Save State (per day, per date) ──
function getTodayKey() {
  const d = new Date();
  return `workout_${currentDay}_${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function loadTodayState() {
  const saved = localStorage.getItem(getTodayKey());
  if (saved) {
    workoutState = JSON.parse(saved);
  } else {
    workoutState = {};
    const routine = ROUTINE[currentDay];
    routine.sections.forEach((sec) => {
      sec.exercises.forEach((ex) => {
        workoutState[ex.id] = {
          sets: Array.from({ length: ex.sets }, () => ({
            kg: "",
            reps: "",
            done: false,
          })),
        };
      });
    });
  }
}

function saveState() {
  localStorage.setItem(getTodayKey(), JSON.stringify(workoutState));
  updateProgress();
}

// ── Render Workout ──
function renderWorkout() {
  const routine = ROUTINE[currentDay];
  const container = document.getElementById("workout-content");
  let html = "";

  // Progress bar
  html += `<div class="progress-bar"><div class="progress-fill" id="progress-fill"></div></div>`;
  html += `<div class="progress-text" id="progress-text"></div>`;

  routine.sections.forEach((sec) => {
    html += `<div class="section-title">${sec.title}</div>`;

    sec.exercises.forEach((ex) => {
      const state = workoutState[ex.id];
      const allDone = state && state.sets.every((s) => s.done);
      const doneCount = state ? state.sets.filter((s) => s.done).length : 0;

      html += `<div class="exercise-card ${allDone ? "completed" : ""}" id="card-${ex.id}">`;
      html += `<div class="exercise-header" onclick="toggleDetail('${ex.id}')">`;
      html += `<div>`;
      html += `<div class="exercise-name">${ex.nameKr}</div>`;
      html += `<div class="exercise-meta">${ex.sets}x${ex.reps} / ${ex.rest} / ${ex.tempo}</div>`;
      html += `</div>`;
      html += `<span class="exercise-badge ${allDone ? "done" : ""}">${allDone ? "DONE" : doneCount + "/" + ex.sets}</span>`;
      html += `</div>`;

      // Sets
      html += `<div class="sets-area">`;

      // Header row
      html += `<div class="set-header">`;
      html += `<div class="input-label" style="flex:1">KG</div>`;
      html += `<div class="input-label" style="flex:1">REPS</div>`;
      html += `<div style="width:36px"></div>`;
      html += `</div>`;

      state.sets.forEach((s, i) => {
        const rpeVal = ex.rpe[i];
        const rpeLabel =
          rpeVal === 10
            ? "RPE10 FAIL"
            : `RPE ${rpeVal}`;
        html += `<div class="set-row">`;
        html += `<div class="set-label">S${i + 1}</div>`;
        html += `<input class="set-input" type="number" inputmode="decimal" placeholder="kg" value="${s.kg}" onchange="updateSet('${ex.id}',${i},'kg',this.value)" onfocus="this.select()">`;
        html += `<input class="set-input" type="number" inputmode="numeric" placeholder="reps" value="${s.reps}" onchange="updateSet('${ex.id}',${i},'reps',this.value)" onfocus="this.select()">`;
        html += `<span class="rpe-tag">${rpeLabel}</span>`;
        html += `<button class="set-check ${s.done ? "checked" : ""}" onclick="toggleSet('${ex.id}',${i})">${s.done ? "\u2713" : ""}</button>`;
        html += `</div>`;
      });

      html += `</div></div>`;
    });
  });

  container.innerHTML = html;
  document.getElementById("finish-area").style.display = "flex";
  updateProgress();
}

// ── Set Operations ──
function updateSet(exId, setIdx, field, value) {
  workoutState[exId].sets[setIdx][field] = value;
  saveState();
}

function toggleSet(exId, setIdx) {
  const set = workoutState[exId].sets[setIdx];
  set.done = !set.done;

  // Auto-fill kg from previous set if empty
  if (set.done && !set.kg && setIdx > 0) {
    const prev = workoutState[exId].sets[setIdx - 1];
    if (prev.kg) set.kg = prev.kg;
  }

  saveState();
  renderWorkout();
}

function updateProgress() {
  let total = 0;
  let done = 0;
  const routine = ROUTINE[currentDay];
  routine.sections.forEach((sec) => {
    sec.exercises.forEach((ex) => {
      const state = workoutState[ex.id];
      if (state) {
        total += state.sets.length;
        done += state.sets.filter((s) => s.done).length;
      }
    });
  });

  const pct = total > 0 ? Math.round((done / total) * 100) : 0;
  const fill = document.getElementById("progress-fill");
  const text = document.getElementById("progress-text");
  if (fill) fill.style.width = pct + "%";
  if (text) text.textContent = `${done}/${total} sets (${pct}%)`;
}

// ── Detail Modal ──
function toggleDetail(exId) {
  const routine = ROUTINE[currentDay];
  let exercise = null;
  routine.sections.forEach((sec) => {
    sec.exercises.forEach((ex) => {
      if (ex.id === exId) exercise = ex;
    });
  });
  if (!exercise) return;

  const modal = document.getElementById("detail-modal");
  document.getElementById("detail-title").textContent = exercise.nameKr;

  let html = "";

  // Info table
  html += `<div class="detail-section">`;
  html += `<h3>INFO</h3>`;
  html += `<table class="detail-table">`;
  html += `<tr><th>Sets x Reps</th><td>${exercise.sets} x ${exercise.reps}</td></tr>`;
  html += `<tr><th>Rest</th><td>${exercise.rest}</td></tr>`;
  html += `<tr><th>Tempo</th><td>${exercise.tempo} (down-pause-up-squeeze)</td></tr>`;
  html += `<tr><th>RPE</th><td>${exercise.rpe.join(" → ")}</td></tr>`;
  html += `</table></div>`;

  if (exercise.warmup) {
    html += `<div class="detail-section"><h3>WARM-UP</h3><p>${exercise.warmup}</p></div>`;
  }

  // Tips
  html += `<div class="detail-section"><h3>TIPS</h3><ul>`;
  exercise.tips.forEach((t) => {
    html += `<li>${t}</li>`;
  });
  html += `</ul></div>`;

  // Previous records
  const prevRecords = getPreviousRecords(exId);
  if (prevRecords.length > 0) {
    html += `<div class="detail-section"><h3>PREVIOUS RECORDS</h3>`;
    html += `<table class="detail-table"><tr><th>Date</th><th>Sets</th></tr>`;
    prevRecords.forEach((r) => {
      html += `<tr><td>${r.date}</td><td>${r.summary}</td></tr>`;
    });
    html += `</table></div>`;
  }

  document.getElementById("detail-content").innerHTML = html;
  modal.classList.remove("hidden");
}

function closeDetail() {
  document.getElementById("detail-modal").classList.add("hidden");
}

function getPreviousRecords(exId) {
  const records = [];
  const keys = Object.keys(localStorage)
    .filter((k) => k.startsWith("workout_"))
    .sort()
    .reverse();

  const todayKey = getTodayKey();

  for (const key of keys) {
    if (key === todayKey) continue;
    if (records.length >= 5) break;

    try {
      const data = JSON.parse(localStorage.getItem(key));
      if (data[exId]) {
        const sets = data[exId].sets.filter((s) => s.done);
        if (sets.length > 0) {
          const dateStr = key.split("_").slice(2).join("-");
          const summary = sets.map((s) => `${s.kg || "?"}kg x ${s.reps || "?"}`).join(", ");
          records.push({ date: dateStr, summary });
        }
      }
    } catch (e) { /* skip */ }
  }
  return records;
}

// ── Finish Workout ──
function finishWorkout() {
  const routine = ROUTINE[currentDay];
  let total = 0;
  let done = 0;
  routine.sections.forEach((sec) => {
    sec.exercises.forEach((ex) => {
      const state = workoutState[ex.id];
      if (state) {
        total += state.sets.length;
        done += state.sets.filter((s) => s.done).length;
      }
    });
  });

  if (done === 0) {
    alert("No sets completed yet!");
    return;
  }

  const pct = Math.round((done / total) * 100);

  // Save to history
  const historyKey = "history";
  const history = JSON.parse(localStorage.getItem(historyKey) || "[]");

  const record = {
    date: new Date().toISOString(),
    day: currentDay,
    title: routine.title,
    completion: pct,
    exercises: [],
  };

  routine.sections.forEach((sec) => {
    sec.exercises.forEach((ex) => {
      const state = workoutState[ex.id];
      if (state) {
        const doneSets = state.sets.filter((s) => s.done);
        if (doneSets.length > 0) {
          record.exercises.push({
            name: ex.nameKr,
            sets: doneSets.map((s) => ({
              kg: s.kg,
              reps: s.reps,
            })),
          });
        }
      }
    });
  });

  history.unshift(record);
  if (history.length > 100) history.pop();
  localStorage.setItem(historyKey, JSON.stringify(history));

  alert(`Day ${currentDay} Complete! (${pct}%)\n${done}/${total} sets`);
}

// ── History ──
function showHistory() {
  const modal = document.getElementById("history-modal");
  const history = JSON.parse(localStorage.getItem("history") || "[]");

  if (history.length === 0) {
    document.getElementById("history-content").innerHTML =
      '<div class="history-empty">No workout history yet.<br>Finish a workout to see records here.</div>';
    modal.classList.remove("hidden");
    return;
  }

  let html = "";
  history.forEach((h, idx) => {
    const d = new Date(h.date);
    const dateStr = `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dayName = dayNames[d.getDay()];

    html += `<div class="history-day">`;
    html += `<button class="history-delete" onclick="deleteHistory(${idx})">Delete</button>`;
    html += `<div class="history-date">${dateStr} (${dayName})</div>`;
    html += `<div class="history-type">Day ${h.day} - ${h.title} (${h.completion}%)</div>`;

    h.exercises.forEach((ex) => {
      const summary = ex.sets.map((s) => `${s.kg || "?"}x${s.reps || "?"}`).join(" / ");
      html += `<div class="history-exercise">`;
      html += `<span>${ex.name}</span>`;
      html += `<span class="history-sets">${summary}</span>`;
      html += `</div>`;
    });

    html += `</div>`;
  });

  document.getElementById("history-content").innerHTML = html;
  modal.classList.remove("hidden");
}

function closeHistory() {
  document.getElementById("history-modal").classList.add("hidden");
}

function deleteHistory(idx) {
  if (!confirm("Delete this record?")) return;
  const history = JSON.parse(localStorage.getItem("history") || "[]");
  history.splice(idx, 1);
  localStorage.setItem("history", JSON.stringify(history));
  showHistory();
}

// ── Service Worker ──
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").catch(() => {});
}
