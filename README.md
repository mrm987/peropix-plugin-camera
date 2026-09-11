# 카메라 구도 (PeroPix 공식 플러그인)

인물을 돌려 보며 방위·높이·거리를 고르면 구도 태그와 가중치를 만듭니다. 「지금 씬에 넣기」가 스타일 카드의
「카메라_구도」 블록을 갈아 끼웁니다.

화면에는 **캡슐 마네킹**이 기본으로 서 있고, 앞·뒤를 색으로 갈라 칠해 방위가 한눈에 들어옵니다.
도구줄 끝의 **경찰 모자**를 누르면 3등신 입체 모델로 바뀌고, 한 번 더 누르면 돌아옵니다
(어느 쪽으로 보든 만들어지는 태그는 같습니다). 모델은 **처음 누를 때** 받습니다.

화면은 **한국어·영어·일본어**로 나옵니다 — 앱 설정의 언어를 따라가고, 바꾸면 그 자리에서 바뀝니다
(문구는 `web/i18n.js` 에 있습니다).

**설치** — PeroPix 의 플러그인 모드 → 관리 → 플러그인 목록에서 「카메라 구도」를 설치하십시오.
앱은 [목록 저장소](https://github.com/mrm987/peropix-plugins) 를 통해 이 저장소의 태그 압축본을 받습니다.

### 넣는 블록의 이름표는 `카메라_` 로 시작합니다

한국어에서는 `카메라_구도`, 영어에서는 `Camera_Framing`, 일본어에서는 `カメラ_構図` 입니다. 넣기를 누르면
**이 접두어가 붙은 블록을 먼저 걷어 내고** 지금 구도를 넣으므로, 언어를 바꾸어 다시 넣어도 옛 이름의 블록이
남지 않습니다. 접두어가 없는 블록(직접 만드신 것)은 건드리지 않습니다.

## 담고 있는 것

- `web/index.html` — 플러그인 화면 하나. 앱이 주는 공통 자산(`/plug/_app/base.css`·`peropix.js`)을 씁니다.
- `web/i18n.js` — 화면 문구 (한국어 원문이 키이고, 영어·일본어만 표로 둡니다).
- `web/model/character.glb` — 경찰 모자를 눌렀을 때 세우는 3등신 데포르메 모델. 리깅·애니메이션 없음, +Y 위 · +Z 정면.
- `web/lib/` — [three.js](https://threejs.org) r180 (MIT, `web/lib/three-LICENSE.txt`). 인터넷 없이 떠야 하므로
  CDN 이 아니라 함께 담았습니다. 배포본의 폴더 구조 그대로 두어야 서로를 찾습니다.

## 판 올리기

`plugin.json` 의 `version` 을 올리고 같은 번호로 태그(`v1.2.0`)를 답니다. 앱은 목록 저장소의 `index.json` 에 적힌
태그의 압축본을 받으므로, 태그를 달아야 사용자에게 갑니다.

## 라이선스

[MIT](LICENSE). 함께 담은 three.js 도 MIT 입니다 (`web/lib/three-LICENSE.txt`).

---

A PeroPix plugin: pick a camera direction, height and distance by looking at the subject, then paste the resulting
composition tags into your style card. The UI follows the app's language (Korean, English, Japanese).
Install it from the plugin list inside the app.
