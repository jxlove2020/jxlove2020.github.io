---
title: "개발자 맥북프로 초기 설정"
date: 2021-12-28 12:10:00
categories: dev
tag:
  [
    mac,
    맥,
    북,
    프로,
    초기화,
    setting,
    설정,
    visualstudio,
    code,
    비주얼스튜디오,
    코드,
  ]
toc: true
toc_sticky: true
toc_label: "목차"
search: true # 검색이 안되게 하고 싶을 때 false
---

### 맥북프로 초기화

맥북프로 초기화 하기 ( `Option` + `command` + `R` )  
자신이 사용하고 있는 맥북에서 호환되는 가장 최신 버전의 macOS 로 복구 할 수 있습니다.

macOS 버전에 따라서 설치가 안되거나 실행이 안되는 프로그램이 있을 수 있으니  
가능한 최신 버전을 설치하는게 좋은 것 같아요.

### 크롬 설치

저는 맥북프로 에서 safari 브라우저대신 크롬 브라우저를 설치해서 사용합니다.  
<a href="https://www.google.com/intl/ko/chrome/" target="_blank">크롬브라우저 설치 페이지</a>  
크롬 브라우저를 다운로드 받은 후에 설치, 실행하여 기본 브라우저로 설정해 줍니다.

### 비주얼 스튜디오 설치

에디터를 설치합니다.  
<a href="https://code.visualstudio.com/" target="_blank">비주얼스튜디오 코드 설치 페이지</a>  
비주얼스튜디오 코드를 다운로드 받은 후에 설치하여 기본 설정해 줍니다.

### brew 설치

<a href="https://brew.sh/index_ko" target="_blank">Homebrew 홈 페이지</a>
를 방문합니다.

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

코드 블록에 있는 내용을 복사하여 터미널에 붙여넣기 하면 설치가 됩니다.
`brew --version` 명령어로 버전을 확인합니다.
