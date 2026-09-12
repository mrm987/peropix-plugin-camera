/* 카메라 구도 — 화면 문구 (한국어·영어·일본어)
 *
 * ★★**한국어 원문이 키다.** `T("복사")` 는 한국어에서는 그대로 돌려주고, 다른 언어에서는 아래 표에서 찾는다.
 *   표에 없는 문구는 빈칸이 아니라 한국어로 떨어진다.
 * ★공식 플러그인은 앱이 지원하는 세 언어를 다 갖춘다 (사용자 결정 2026-09-11).
 * ★`{이름}` 은 자리표시자다. `T("오른쪽 {d}°", {d: 45})`.
 */
(function () {
  "use strict";

  var EN = {
    "카메라 구도": "Camera Framing",
    "지금 씬에 넣기": "Insert into the scene",
    "복사": "Copy",
    "드래그 둘러보기 · 휠 거리 · ←→ 방위 · ↑↓ 높이 · Home 정면":
      "Drag to look around · wheel for distance · ←→ azimuth · ↑↓ height · Home to front",
    "방위": "Azimuth",
    "높이": "Height",
    "거리": "Distance",
    "배율": "Multiplier",

    // 마네킹의 앞·뒤 색 안내
    "앞": "front", "뒤": "back",

    // 높이 눈금
    "바로 위": "Directly above", "거의 위": "Nearly above", "직부감": "Steep high angle",
    "강한 부감": "Strong high angle", "부감": "High angle", "약한 부감": "Slight high angle",
    "수평": "Eye level",
    "약한 앙각": "Slight low angle", "앙각": "Low angle", "강한 앙각": "Strong low angle",
    "거의 아래": "Nearly below", "바로 아래": "Directly below",

    // 거리 눈금
    "얼굴": "Face", "상반신": "Upper body", "허벅지": "Thighs", "전신": "Full body",
    "원경": "Wide", "광각": "Very wide",

    // 방위
    "정면": "Front", "후면": "Back", "오른쪽 {d}°": "Right {d}°", "왼쪽 {d}°": "Left {d}°",

    // 블록 이름
    "구도": "Framing",

    // 알림
    "모델을 불러오는 중…": "Loading the model…",
    "모델을 불러오지 못했습니다: {e}": "Could not load the model: {e}",
    "넣는 중…": "Inserting…",
    "앱이 거절했습니다: {e}": "The app refused: {e}",
    "넣었습니다.": "Inserted.",
    "카메라 구도를 스타일 카드에 넣었습니다": "The framing went into the style card",
    "복사했습니다.": "Copied.",
  };

  var JA = {
    "카메라 구도": "カメラ構図",
    "지금 씬에 넣기": "現在のシーンに入れる",
    "복사": "コピー",
    "드래그 둘러보기 · 휠 거리 · ←→ 방위 · ↑↓ 높이 · Home 정면":
      "ドラッグで見回す・ホイールで距離・←→ 方位・↑↓ 高さ・Home で正面",
    "방위": "方位",
    "높이": "高さ",
    "거리": "距離",
    "배율": "倍率",

    "앞": "前", "뒤": "後",

    "바로 위": "真上", "거의 위": "ほぼ真上", "직부감": "真俯瞰",
    "강한 부감": "強い俯瞰", "부감": "俯瞰", "약한 부감": "弱い俯瞰",
    "수평": "水平",
    "약한 앙각": "弱い煽り", "앙각": "煽り", "강한 앙각": "強い煽り",
    "거의 아래": "ほぼ真下", "바로 아래": "真下",

    "얼굴": "顔", "상반신": "上半身", "허벅지": "太もも", "전신": "全身",
    "원경": "遠景", "광각": "広角",

    "정면": "正面", "후면": "背面", "오른쪽 {d}°": "右 {d}°", "왼쪽 {d}°": "左 {d}°",

    "구도": "構図",

    "모델을 불러오는 중…": "モデルを読み込み中…",
    "모델을 불러오지 못했습니다: {e}": "モデルを読み込めませんでした: {e}",
    "넣는 중…": "挿入中…",
    "앱이 거절했습니다: {e}": "アプリが拒否しました: {e}",
    "넣었습니다.": "入れました。",
    "카메라 구도를 스타일 카드에 넣었습니다": "カメラ構図をスタイルカードに入れました",
    "복사했습니다.": "コピーしました。",
  };

  var TBL = { en: EN, ja: JA };
  var LANG = "ko";

  function T(s, v) {
    var d = TBL[LANG];
    var out = (d && d[s]) || s;
    if (v) out = out.replace(/\{(\w+)\}/g, function (m, k) { return k in v ? String(v[k]) : m; });
    return out;
  }

  /** 넣는 블록의 이름표 — **언제나 `<플러그인>_<블록>`** 꼴이다 (사용자 지시 2026-09-11: 사용자 블록과 안 겹치게) */
  var PREFIX = { ko: "카메라_", en: "Camera_", ja: "カメラ_" };
  function blockLabel() { return (PREFIX[LANG] || PREFIX.ko) + T("구도"); }
  /** 언어를 바꿔도 옛 이름의 블록을 찾아 지울 수 있게, 접두어 전부를 알려 준다 */
  function prefixes() { return [PREFIX.ko, PREFIX.en, PREFIX.ja]; }

  function applyStatic() {
    document.querySelectorAll("[data-t]").forEach(function (el) { el.textContent = T(el.getAttribute("data-t")); });
    document.querySelectorAll("[data-t-title]").forEach(function (el) { el.title = T(el.getAttribute("data-t-title")); });
    document.title = T("카메라 구도");
  }

  window.T = T;
  window.cameraLang = function () { return LANG; };
  window.cameraBlockLabel = blockLabel;
  window.cameraPrefixes = prefixes;
  window.setCameraLang = function (l) {
    LANG = TBL[l] ? l : "ko";
    document.documentElement.lang = LANG;
    applyStatic();
  };
})();
