---
title: "CRA (create-react-app) 초기 세팅"
date: 2021-12-14 12:10:00
categories: react
tag: [react, cra, create-react-app]
toc: true
toc_sticky: true
toc_label: "목차"
search: true # 검색이 안되게 하고 싶을 때 false
lastmod: 2022-12-14 12:00:00
sitemap:
  changefreq: daily
  priority: 1.0
---

# create react app 설치

```bash
npx create-react-app .
npm i react-router-dom
```

# app.js

```js
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Profile from "./components/Profile";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/profile/*" element={<Profile />}></Route>
          {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
```

# components

### Header.js

```js
import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div>
      <ul>
        <Link to="/">
          <li>메인페이지</li>
        </Link>
        <Link to="/profile">
          <li>프로필 페이지</li>
        </Link>
      </ul>
    </div>
  );
}

export default Header;
```

### Main.js

```js
import React from "react";

function Main(props) {
  return <div>메인</div>;
}

export default Main;
```

### Profile.js

```js
import React from "react";

function Profile(props) {
  return <div>profile</div>;
}

export default Profile;
```

### NotFound.js

```js
import React from "react";

function NotFound(props) {
  return <div>NotFound</div>;
}

export default NotFound;
```

# 실행

```
npm start
```

http://localhost:3000 url 을 실행하게 되면 react로 만들어진 기본 웹 사이트가 만들어집니다.
이제 조금씩 수정해서 나만의 site를 만들어 봅시다. ^^
