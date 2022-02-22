---
title: "Visualstudio Code 설치하기"
date: 2021-12-27 12:10:00
categories: dev
tag:
  [
    visualstudio,
    code,
    비주얼스튜디오,
    코드,
    extension,
    확장,
    설치,
    prettier,
    format,
    포맷,
    설정,
  ]
toc: true
toc_sticky: true
toc_label: "목차"
search: true # 검색이 안되게 하고 싶을 때 false
lastmod: 2022-02-22 12:00:00
sitemap:
  changefreq: daily
  priority: 1.0
---

### Visualstudio Code 설치하기

- <a href = "https://code.visualstudio.com/">visualstudio code 다운 받으러가기</a>  
  다운 받은 visualstudio code 를 설치합니다.

### Extensions 설치하기

- Auto Rename Tag  
  쌍을 이루는 HTML 태그의 이름을 자동으로 바꿉니다.
- Beautify  
  비주얼 스튜디오 코드에서 javascript, JSON, CSS, Sass 및 HTML 등 들여쓰기 정리
- Brackets Light  
  에디터의 밝은 색 테마 지원
- Bracket Pair Colorizer  
  일치하는 브래킷을 색상으로 식별 할 수 있습니다.
- Color Highlight  
  rgb 칼라 코드의 텍스트 배경색을 해당 색상으로 보여줍니다.
- CSS Navigation  
  특정 HTML 영역에서 Ctrl + 마우스 왼쪽버튼을 눌러 연결된 CSS 확인
- CSS Peek  
  소스 코드 내의 문자열에서 발견되는 css/scss/less (클래스 및 ID) 에 대한 정의로 이동
- Debugger for Chrome  
  크롬 개발자 도구에서 디버깅하는 것을 VS Code 에서 할 수 있습니다.
- Font Awesome Auto-complete & Preview  
  폰트 어썸 아이콘을 실시간으로 미리 보여줌
- html tag wrapper  
  상위 태그를 자동으로 감싸줌. 그룹할 태그를 드래그해 Ctrl + i 로 선택
- Korean Language Pack for Visual Studio Code  
  비주얼 스튜디오 코드의 한국어 팩
- Visual Studio IntelliCode  
  자동완성 추천 기능으로 별표가 표시 되어 나옴
- Live Server  
  웹서버를 통해 결과물을 브라우저에 실시간으로 보여줌
- Power Mode  
  코드를 입력할 때 특수 효과를 적용함.
- Prettier - Code formatter  
  일관된 코드 스타일을 적용할 수 있게 도와줍니다.
- Python  
  파이썬
- Pylance  
  파이썬 IntelliCode
- Jupyter
  주피터 노트북 사용할 수 있게 해줍니다.
- vscode icons  
  에디터의 내비게이션 아이콘 모양을 변경함

### 비주얼스튜디오 폴더 View 변경 방법

![폴더구조 변경 이미지 1](https://jxlove2020.github.io/images/2021-12-27-folder-01.png)

기존 폴더 View 방식이 조금 불편하여 설정을 변경하려 합니다.  
설정에서 compact 찾기 하면 아래와 같이 나옵니다.

![폴더구조 변경 이미지 2](https://jxlove2020.github.io/images/2021-12-27-folder-02.png)

compact folders 부분을 체크 해제 하게 되면 폴더 View 방식이 아래와 같이 변경됩니다.

![폴더구조 변경 이미지 3](https://jxlove2020.github.io/images/2021-12-27-folder-03.png)

### Prettier 설치 후 Format 변경

visual studio code 화면에서 톱니바퀴 모양의 설정 버튼을 눌러 아래와 같은 화면을 띄웁니다.  
단축키로는 `ctrl` + `,` 버튼을 함께 누릅니다.

![비주얼스튜디오코드 설정화면 1](https://jxlove2020.github.io/images/2021-12-27-folder-04.png)

format 이라고 검색을 하면  
아래와 같은 화면이 나옵니다.

![비주얼스튜디오코드 설정화면 2](https://jxlove2020.github.io/images/2021-12-27-folder-05.png)

Editor: Default Formatter 에는 Prettier - Code formatter 를 찾아서 선택해 줍니다.

Editor: Format On Save 에 체크해 줍니다.
