---
title: "맥북프로 한영키 우측Command 키로 변환방법"
date: 2021-12-29 12:10:00
categories: dev
tag: [mac, 맥, 맥북, setting, 설정, customKey, 커스텀, 키]
toc: true
toc_sticky: true
toc_label: "목차"
search: true # 검색이 안되게 하고 싶을 때 false
---

## 한영키 설정 변경

### brew 로 karabiner-elements 설치하기

```
brew install --cask karabiner-elements
```

![karabiner 설치 이미지 1](https://jxlove2020.github.io/images/2021-12-29-customKey-01.png)

설치가 완료되면 허용하라는 알림 팝업창이 뜹니다.
허용을 눌러주시구요

![karabiner 설치 이미지 2](https://jxlove2020.github.io/images/2021-12-29-customKey-02.png)

시스템 환경설정 > 보안 및 개인 정보보호 > 개인정보보호 탭에서  
입력 모니터링 - 키보드 모니터링 하는 것을 허용합니다.

일반 탭에서도 하단에 앱 허용 App Store 및 확인된 개발자 에
karabiner app 관련 안내문이 나오면 허용 버튼을 눌러줍니다.

![karabiner 설치 이미지 2](https://jxlove2020.github.io/images/2021-12-29-karabiner.png)

lunchpad > karabiner-elements 아이콘을 클릭합니다.

![karabiner 설치 이미지 3](https://jxlove2020.github.io/images/2021-12-29-customKey-03.png)

우측 Command 버튼을 f18 로 설정합니다. (우측 Command 클릭하면 설정됩니다.)

이렇게 설정하면 오른쪽 Command 버튼으로 한글 전환이 가능해 집니다.
