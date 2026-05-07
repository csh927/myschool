# Firebase 실시간 게시판 가이드북 (CDN 버전)

이 가이드북은 `index.html` 파일을 통해 Firebase 실시간 게시판을 운영하는 방법을 설명합니다.

## 1. Firebase 설정 (Console)
1. [Firebase Console](https://console.firebase.google.com/)에서 프로젝트를 선택합니다.
2. **Build > Firestore Database**를 클릭하고 데이터베이스를 생성합니다.
3. **Rules(규칙)** 탭에서 다음과 같이 수정하고 '게시'를 누릅니다:
   ```javascript
   allow read, write: if true;
   ```

## 2. 데이터 초기화 (선택 사항)
게시판에 테스트용 데이터를 넣고 싶다면 터미널에서 다음 명령어를 실행하세요:
```bash
node seed.js
```

## 3. 웹사이트 수정 방법
- **이미지 변경**: `assets` 폴더 안에 원하는 이미지를 넣고, `index.html` 코드에서 파일명을 수정하면 됩니다.
- **메뉴 수정**: `index.html` 하단의 `pages` 객체 안의 HTML 코드를 수정하여 내용을 바꿀 수 있습니다.

## 4. 게시판 작동 원리
- 사용자가 '글쓰기'를 누르면 `addDoc` 함수가 실행되어 Firestore에 저장됩니다.
- `onSnapshot` 함수가 데이터베이스를 실시간으로 감시하고 있어, 새로운 글이 추가되면 즉시 화면에 나타납니다.
