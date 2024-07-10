# 채팅 애플리케이션

Node.js, MongoDB, React를 사용한 웹소켓 기반의 채팅 애플리케이션

## 목차
- [설치](#설치)
- [백엔드](#백엔드)
- [프론트엔드](#프론트엔드)

## 설치

### 사전 요구 사항
- Node.js 및 npm 설치

<br>

## 백엔드

디렉토리 구조
```
📦back
 ┣ 📂Controllers
 ┃ ┣ 📜chat.controller.js
 ┃ ┗ 📜user.controller.js
 ┣ 📂Models
 ┃ ┣ 📜chat.js
 ┃ ┗ 📜user.js
 ┣ 📜.env
 ┣ 📜app.js
 ┣ 📜index.js
 ┣ 📜package.json
```
백엔드 의존성 설치
```bash
cd back
npm install
```

백엔드 서버 시작
```bash
nodemon index.js
```
<br>

# 프론트엔드
디렉토리 구조
```
📦front
 ┣ 📂public
 ┃ ┣ 📜index.html
 ┣ 📂src
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂InputField
 ┃ ┃ ┃ ┣ 📜InputField.css
 ┃ ┃ ┃ ┗ 📜InputField.jsx
 ┃ ┃ ┗ 📂MessageContainer
 ┃ ┃ ┃ ┣ 📜MessageContainer.css
 ┃ ┃ ┃ ┗ 📜MessageContainer.js
 ┃ ┣ 📜App.js
 ┃ ┣ 📜index.js
 ┣ 📜package.json
 ┗ 📜README.md
```
프론트엔드 의존성 설치
```bash
cd front
npm install
```
프론트엔드 서버 시작
```bash
npm start
```