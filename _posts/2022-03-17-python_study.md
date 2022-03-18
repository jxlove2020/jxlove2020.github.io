---
title: "Python 자료구조와 JSON 데이터 처리"
date: 2022-03-17 12:10:00
categories: Python
tag: [Python, 파이썬, API, 라이브러리, 딕셔너리]
toc: true
toc_sticky: true
toc_label: "목차"
search: true # 검색이 안되게 하고 싶을 때 false
lastmod: 2022-03-17 12:10:00
sitemap:
  changefreq: daily
  priority: 1.0
---

## Python 자료구조와 JSON 데이터 처리

```python
# 클라이언트와 서버 사이 데이터 교환시
# 파이썬 객체 타입을 문자열 데이터로 변환
# 파이썬 문자열 데이터를 파이썬 객체 타입으로 변환
# 파이썬 대표적인 자료 구조 4개 => List [], Tuple (), Dictionary {x: x}, Set {}
```

### 파이썬 딕셔너리 타입

```python
# 파이썬 자료구조의 한 형태. "키(key) : 값(value)" 쌍을 요소로 갖는 컬렉션 객체
# 키(key)를 통하여 빠르게 값(value)을 찾아내는 해시테이블(Hash Table) 구조를 가지는 객체
# 파이썬에서 딕셔너리 객체는 "dict" 클래스 구현
# 딕셔너리의 키(key)는 값을 변경할 수 없다. => 즉, Immutable 속성
# 딕셔너리의 값(value)은 둘 다 가능 => 즉, Immutable, Mutable 모두 가능

a = { 'name': 'Joseph' }
print( 'a =>', a )
print( 'type(a) =>', type(a) )  # dict
print( "type(a['name']) =>", type(a['name']) )  # str

print ( '-' * 50 ) # 구분선

# a 의 dictionary 타입을 list 타입으로 변경
b = list(a)
print( 'b =>', b )
print( 'type(b) =>', type(b) )  # list
print( 'b[0] =>', b[0] )  # name
print( 'type(b[0]) =>', type(b[0]) )  # str
```

    a => {'name': 'Joseph'}
    type(a) => <class 'dict'>
    type(a['name']) => <class 'str'>
    --------------------------------------------------
    b => ['name']
    type(b) => <class 'list'>
    b[0] => name
    type(b[0]) => <class 'str'>

### 파이썬 제공 JSON 기본모듈

```python
# 파이썬 3.x 이상 버전 사용
import json

# 파이썬 dict 타입
members ={
    'id': 1,
    'name': 'Joseph',
    'age': 43,
    'email': 'jxlove2020@gmail.com'
}

print (type (members))

# 딕셔너리 타입을 JONS 문자열로 변환 => json.dumps()
jsonStr = json.dumps(members)
print(jsonStr)
# print(type(jsonStr)) # str

print ( '-' * 80 ) # 구분선

# 문자열로 변환시 option 을 줄 수 있다. indent 를 주면 보기 좋게 변환이 된다.
jsonStr2 = json.dumps(members, indent = 4)
print(jsonStr2)
# print(type(jsonStr2)) # str
```

    <class 'dict'>
    {"id": 1, "name": "Joseph", "age": 43, "email": "jxlove2020@gmail.com"}
    --------------------------------------------------------------------------------
    {
        "id": 1,
        "name": "Joseph",
        "age": 43,
        "email": "jxlove2020@gmail.com"
    }

### JSON 문자열을 객체로 변환 및 출력

```python
# 파이썬 3.x 이상 버전 사용
import json

strMembers = '{"id": 1, "name": "Joseph", "age": 43, "email": "jxlove2020@gmail.com"}'
print( type(strMembers) ) # str

# JSON 문자열 데이터를 딕셔너리 타입으로 변환
jsonObj = json.loads( jsonStr )
print(type(jsonObj))

print(jsonObj)
print(jsonObj['name'])

print ( '-' * 80 ) # 구분선

# 반복문
for v in jsonObj:
    print(v)

```

    <class 'str'>
    <class 'dict'>
    {'id': 1, 'name': 'Joseph', 'age': 43, 'email': 'jxlove2020@gmail.com'}
    Joseph
    --------------------------------------------------------------------------------
    id
    name
    age
    email

### 딕셔너리 자료구조 반복문

```python
# 반복문에 키 와 값을 같이 표기 하고 싶을 때 items() 사용
zooDict = {'rabbit': 30, 'fox': 20, 'monkey': 30, 'lion': 5}
for k, v in zooDict.items():
    # print (k, v)
    print (f"{k}이 {v} 마리 있습니다.")

print ( '-' * 80 ) # 구분선

# keys() 사용
for k in zooDict.keys():
    print (k)

print ( '-' * 80 ) # 구분선

# values() 사용
for v in zooDict.values():
    print (v)
```

    rabbit이 30 마리 있습니다.
    fox이 20 마리 있습니다.
    monkey이 30 마리 있습니다.
    lion이 5 마리 있습니다.
    --------------------------------------------------------------------------------
    rabbit
    fox
    monkey
    lion
    --------------------------------------------------------------------------------
    30
    20
    30
    5

### 딕셔너리 추가

```python
# 딕셔너리 추가 setdefault()
nameDict = {'lee': 37, 'song': 35, 'park': 40, 'jo': 33}
nameDict.setdefault('son') # 키만 추가 했으므로 값은 None으로 입력됩니다
nameDict.setdefault('jung', 28) # 키와 값이 모두 입력 됩니다.
print('nameDict =>', nameDict)
```

    nameDict => {'lee': 37, 'song': 35, 'park': 40, 'jo': 33, 'son': None, 'jung': 28}

### 딕셔너리 수정

```python
# 딕셔너리 수정 update()
nameDict2 = {'lee': 37, 'song': 35, 'park': 40, 'jo': 33}
# nameDict2.update('lee'=43) # 따옴표가 있으면 오류가 납니다.
nameDict2.update(lee=43) # 따옴표를 빼고 사용
print('nameDict2 =>', nameDict2)

# 딕셔너리에 키가 없는 것을 수정하려고 하면 입력 처리가 됩니다.
nameDict2.update(tom=43) # 따옴표를 빼고 사용
print('nameDict2 =>', nameDict2)

# 여러 항목 수정
nameDict2.update(mini=25, juni=30) # 따옴표를 빼고 사용
print('nameDict2 =>', nameDict2)

```

    nameDict2 => {'lee': 43, 'song': 35, 'park': 40, 'jo': 33}
    nameDict2 => {'lee': 43, 'song': 35, 'park': 40, 'jo': 33, 'tom': 43}
    nameDict2 => {'lee': 43, 'song': 35, 'park': 40, 'jo': 33, 'tom': 43, 'mini': 25, 'juni': 30}

### 딕셔너리 수정 - 키가 숫자인 경우

```python
# 딕셔너리 수정 update()
nameDict3 = {1: 'joy', 2: 'tomy', 3: 'suji'} # 키가 숫자인 경우
# nameDict2.update(3=emily) # 오류가 납니다.
# update() 메서드 안의 딕셔너리를 {} 로 감싸준 후 수정
nameDict3.update({3:'roy'})
print('nameDict3 =>', nameDict3)
```

    nameDict3 => {1: 'joy', 2: 'tomy', 3: 'roy'}

### 딕셔너리 선언

```python
# 빈 중괄호 사용
emptyDict = {} # dict
print(type(emptyDict))
```

    <class 'dict'>

```python
# 생성자 사용
zooDict = dict(rabbit=30, lion=5, hippo=3)
print(type(zooDict))
```

    <class 'dict'>

### 딕셔너리 변환

```python
# (1) 리스트를 딕셔너리로 변환
animals = [ ['rabbit', 3], ['lion', 4 ], ['hippo', 10] ]
animals_dict = dict( animals )
print( animals_dict )
print( type(animals_dict) )

print( '-' * 100, '[구분선]' )

# (2) 튜플을 딕셔너리로 변환
goods = ( ('book', 1000), ('bag', 20000), ('pencil', 300) )
goods_dict = dict( goods )
print( goods_dict )
print( type(goods_dict) )

print( '-' * 100, '[구분선]' )

# (3) 리스트안에 튜플을 딕셔너리로 변환, 튜플안에 리스트를 딕셔너리로 변환
fruits = [ ('grape', 10), ('pineapple', 20), ('mango', 5) ]
fruits_dict = dict( fruits )
print( fruits_dict )
print( type(fruits_dict) )

```

    {'rabbit': 3, 'lion': 4, 'hippo': 10}
    <class 'dict'>
    ---------------------------------------------------------------------------------------------------- [구분선]
    {'book': 1000, 'bag': 20000, 'pencil': 300}
    <class 'dict'>
    ---------------------------------------------------------------------------------------------------- [구분선]
    {'grape': 10, 'pineapple': 20, 'mango': 5}
    <class 'dict'>

### 출력 서식 기호

```python
fruits = {'apple': 20, 'pear': 15, 'peach': 10}

for key, value in fruits.items():
    print("%s : %d , " % (key, value), end='')
print()

for key in fruits.keys():
    print("%s : %03d , " % (key, fruits[key]), end='')
print()
```

    apple : 20 , pear : 15 , peach : 10 ,
    apple : 020 , pear : 015 , peach : 010 ,

### 키(key)와 값(value) 직접 추가 및 삭제

```python
# 파이썬 3.x 이상 버전 사용
import json

goods = {
        'price': 50000,
        'vegetable': [ 'cabbage', 'cucumber', 'carrot', 'lettuce' ]
}

# goods.setdefault( 'fruit' )
# goods['fruit'] = None
goods['fruit'] = [ 'pear', 'orange', 'peach', 'apple' ]

print( goods )
print( '-' * 125, '[구분선]' )
print( json.dumps(goods, indent=4) )


print( '-' * 125, '[구분선]' )

# 삭제 => remove() 메서드 사용.
goods['fruit'].remove('apple')
print( goods )
# 추가
goods['fruit'].append('new-apple')
print( goods )

# 항목을 완전 삭제 => del
del goods['fruit']
print( goods )
```

    {'price': 50000, 'vegetable': ['cabbage', 'cucumber', 'carrot', 'lettuce'], 'fruit': ['pear', 'orange', 'peach', 'apple']}
    ----------------------------------------------------------------------------------------------------------------------------- [구분선]
    {
        "price": 50000,
        "vegetable": [
            "cabbage",
            "cucumber",
            "carrot",
            "lettuce"
        ],
        "fruit": [
            "pear",
            "orange",
            "peach",
            "apple"
        ]
    }
    ----------------------------------------------------------------------------------------------------------------------------- [구분선]
    {'price': 50000, 'vegetable': ['cabbage', 'cucumber', 'carrot', 'lettuce'], 'fruit': ['pear', 'orange', 'peach']}
    {'price': 50000, 'vegetable': ['cabbage', 'cucumber', 'carrot', 'lettuce'], 'fruit': ['pear', 'orange', 'peach', 'new-apple']}
    {'price': 50000, 'vegetable': ['cabbage', 'cucumber', 'carrot', 'lettuce']}

### 정렬 sort(), reverse()

```python
randomDict = {
    'number': [4, 2, 5, 6, 1, 3, 7],
    'alphabet': ['f', 'd', 'a', 'c', 'b', 'e']
}

print('원본 데이터  ', randomDict)

# sort 는 기본으로 오름차순으로 정렬됩니다
randomDict['number'].sort()
randomDict['alphabet'].sort()
print('오름차순 정렬', randomDict)

# reverse 는 정렬이 된 상태에서 하지 않으면 정렬이 되지 않은 상태에서 reverse 됩니다
# randomDict['number'].reverse()
# randomDict['alphabet'].reverse()
randomDict['number'].sort(reverse=True) # sort 에서 reverse 옵션을 주어 역정렬
randomDict['alphabet'].sort(reverse=True) # sort 에서 reverse 옵션을 주어 역정렬
print('내림차순 정렬', randomDict)
```

    원본 데이터   {'number': [4, 2, 5, 6, 1, 3, 7], 'alphabet': ['f', 'd', 'a', 'c', 'b', 'e']}
    오름차순 정렬 {'number': [1, 2, 3, 4, 5, 6, 7], 'alphabet': ['a', 'b', 'c', 'd', 'e', 'f']}
    내림차순 정렬 {'number': [7, 6, 5, 4, 3, 2, 1], 'alphabet': ['f', 'e', 'd', 'c', 'b', 'a']}

### 딕셔너리 반복 - 중첩

```python
member_group = {
    'name': '동호회멤버',
    'member_num': 5,
    'members': {
        'member1': '토미',
        'member2': '제이',
        'member3': '조이',
        'member4': '로이',
        'member5': '수지'
    },
    'features': ['노래', '댄스', '기타', '드럼', '건반']
}

for key in member_group:
    if (type(member_group[key]) is dict):  # is 대신 == 사용 가능
        for k in member_group[key]:
            print(f'{k} 은 {member_group[key][k]} 입니다.')
    elif(type(member_group[key]) == list): # == 대신 is 사용 가능
        for item in member_group[key]:
            print(key, ":", item)
    else:
        print(key, ":", member_group[key])
```

    name : 동호회멤버
    member_num : 5
    member1 은 토미 입니다.
    member2 은 제이 입니다.
    member3 은 조이 입니다.
    member4 은 로이 입니다.
    member5 은 수지 입니다.
    features : 노래
    features : 댄스
    features : 기타
    features : 드럼
    features : 건반

### 공공데이터 API 사용을 위한 파이썬 라이브러리

```python
# URL Encode 파이썬 3 에 내장되어 있음. urllib
from urllib.parse import urlparse, urlunparse, parse_qs, parse_qsl

# urlparse 임포트
# urlparse => url을 6개의 요소로 분석하여 반환
url = urlparse('https://google.com:80/subpage/search.google?name=홍길동&password=1234#id001')
print(url.scheme)   # https 통신방식
print(url.netloc)   # google.com:80 서버주소
print(url.port)     # 80 포트번호
print(url.params)     #
print(url.path)     # 서버 상의 도큐먼트 위치
print(url.query)    # 쿼리스트링
print(url.fragment) # 식별자

print('-' * 100)
print(url)

print('-' * 100)
print(url.geturl())

print('-' * 100)
# urlunparse 임포트
print(urlunparse(url))

# qs => query string
# parse_qs 임포트 => 딕셔너리 타입으로 반환
print('-' * 100)
print(parse_qs(url.query))

print('-' * 100)
# parse_qsl 임포트 => 리스트 타입으로 반환
print(parse_qsl(url.query))
```

    https
    google.com:80
    80

    /subpage/search.google
    name=홍길동&password=1234
    id001
    ----------------------------------------------------------------------------------------------------
    ParseResult(scheme='https', netloc='google.com:80', path='/subpage/search.google', params='', query='name=홍길동&password=1234', fragment='id001')
    ----------------------------------------------------------------------------------------------------
    https://google.com:80/subpage/search.google?name=홍길동&password=1234#id001
    ----------------------------------------------------------------------------------------------------
    https://google.com:80/subpage/search.google?name=홍길동&password=1234#id001
    ----------------------------------------------------------------------------------------------------
    {'name': ['홍길동'], 'password': ['1234']}
    ----------------------------------------------------------------------------------------------------
    [('name', '홍길동'), ('password', '1234')]

### urllib.parse 사용하여 쿼리 스트링 값 변경

```python
# URL Encode 파이썬 3 에 내장되어 있음. urllib
from urllib.parse import urlparse, urlunparse, parse_qs, parse_qsl, urlencode

# urlparse 임포트
# urlparse => url을 6개의 요소로 분석하여 반환
url = urlparse('https://google.com:80/subpage/search.google?name=홍길동&password=1234#id001')

print(parse_qsl(url.query))
test_qs = dict(parse_qsl(url.query))
print(test_qs)

test_qs['password'] = '5678'
print(test_qs)

# urlencode 임포트 - 쿼리스트링 파라미터를 인코딩 하기 위해서 사용
test_url= url._replace(query=urlencode(test_qs))
print(test_url)

print(urlunparse(test_url))
```

    [('name', '홍길동'), ('password', '1234')]
    {'name': '홍길동', 'password': '1234'}
    {'name': '홍길동', 'password': '5678'}
    ParseResult(scheme='https', netloc='google.com:80', path='/subpage/search.google', params='', query='name=%ED%99%8D%EA%B8%B8%EB%8F%99&password=5678', fragment='id001')
    https://google.com:80/subpage/search.google?name=%ED%99%8D%EA%B8%B8%EB%8F%99&password=5678#id001

### urlencode 와 doseq 옵션 사용

```python
# URL Encode 파이썬 3 에 내장되어 있음. urllib
from urllib.parse import urlparse, urlunparse, parse_qs, parse_qsl, urlencode

# urlparse 임포트
# urlparse => url을 6개의 요소로 분석하여 반환
url = urlparse('https://google.com:80/subpage/search.google?name=홍길동&password=1234#id001')

qs = parse_qs(url.query)
print(qs) # 딕셔너리 타입 으로 반환

print('-' * 100)
result1 = urlencode(qs)
print(f'result1 값은 {result1} 타입은 {type(result1)}') # 타입은 str, doseq 는 False

print('-' * 100)
result2 = urlencode(qs, doseq=True)
print(f'result2 값은 {result2} 타입은 {type(result2)}') # 타입은 str, doseq 는 True

print('-' * 100)
# doseq 옵션 상세
params = {'aaa': '111', 'bbb': ['222', '333']}
rst1 = urlencode(params)
rst2 = urlencode(params, doseq=True)
print(rst1)
print(rst2)

```

    {'name': ['홍길동'], 'password': ['1234']}
    ----------------------------------------------------------------------------------------------------
    result1 값은 name=%5B%27%ED%99%8D%EA%B8%B8%EB%8F%99%27%5D&password=%5B%271234%27%5D 타입은 <class 'str'>
    ----------------------------------------------------------------------------------------------------
    result2 값은 name=%ED%99%8D%EA%B8%B8%EB%8F%99&password=1234 타입은 <class 'str'>
    ----------------------------------------------------------------------------------------------------
    aaa=111&bbb=%5B%27222%27%2C+%27333%27%5D
    aaa=111&bbb=222&bbb=333

### 한글 인코딩 디코딩

```python
from urllib.parse import quote, unquote

qt = quote("대한민국")
print(qt)

# unqt = unquote(qt)
unqt = unquote("%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD")
print(unqt)
```

    %EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD
    대한민국

# 파이썬 모듈 설치

```python
# !pip install requests # requests 모듈 설치 ( 주피터노트북에서는 pip 앞에 ! 표를 붙여줘야 함 )

from urllib.parse import urlencode, unquote # 내장 모듈
import json # 내장 모듈
import requests # requests 모듈을 설치해야 사용할 수 있음
```
