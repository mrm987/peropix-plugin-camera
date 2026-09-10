# 카메라 구도 (PeroPix 공식 플러그인)

인물을 돌려 보며 방위·높이·거리를 고르면 구도 태그와 가중치를 만듭니다. 「지금 씬에 넣기」가 스타일 카드의
「카메라」 블록을 갈아 끼웁니다.

**설치** — PeroPix 의 플러그인 모드 → 관리 → 플러그인 목록에서 「카메라 구도」를 설치하십시오.
앱은 [목록 저장소](https://github.com/mrm987/peropix-plugins) 를 통해 이 저장소의 태그 압축본을 받습니다.

## 담고 있는 것

- `web/index.html` — 플러그인 화면 하나. 앱이 주는 공통 자산(`/plug/_app/base.css`·`peropix.js`)을 씁니다.
- `web/model/character.glb` — 화면에 세우는 3등신 데포르메 모델. 리깅·애니메이션 없음, +Y 위 · +Z 정면.
- `web/lib/` — [three.js](https://threejs.org) r180 (MIT, `web/lib/three-LICENSE.txt`). 인터넷 없이 떠야 하므로
  CDN 이 아니라 함께 담았습니다. 배포본의 폴더 구조 그대로 두어야 서로를 찾습니다.

## 판 올리기

`plugin.json` 의 `version` 을 올리고 같은 번호로 태그(`v1.1.0`)를 답니다. 앱은 목록 저장소의 `index.json` 에 적힌
태그의 압축본을 받으므로, 태그를 달아야 사용자에게 갑니다.

---

A PeroPix plugin: pick a camera direction, height and distance by looking at the subject, then paste the resulting
composition tags into your style card. Install it from the plugin list inside the app.
