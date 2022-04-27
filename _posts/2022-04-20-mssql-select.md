---
title: "MSSQL 데이터베이스 정리 2"
date: 2022-04-20 12:10:00
categories: MSSQL
tag: [MSSQL, 데이터베이스, 쿼리문]
toc: true
toc_sticky: true
toc_label: "목차"
search: true # 검색이 안되게 하고 싶을 때 false
lastmod: 2022-04-21 12:10:00
sitemap:
  changefreq: daily
  priority: 1.0
---

# MS_SQL SELECT

제 기준 SQL Server 2016 with SP2 환경으로 설치하였습니다.

### MS_SQL Sample Database

<a href="https://github.com/Microsoft/sql-server-samples/tree/master/samples/databases/northwind-pubs" target="_blank">Pubs DB 다운로드</a>
Pubs (책 판매와 출판에 대한 샘플 DB)

<a href="https://github.com/Microsoft/sql-server-samples/releases/tag/adventureworks" target="_blank">Adventure Works DB 다운로드</a>
Adventure Works (자전거 회사에 대한 샘플 DB)

### SELECT 절

pubs (책 판매와 출판에 대한 샘플 DB) 사용

```sql
-- SELECT 기본형태
SELECT stor_id, ord_num, qty, title_id FROM dbo.sales;
-- WHERE 조건절 ( 7067 상점아이디가 속해 있는 값 가져오기 )
SELECT * FROM dbo.sales WHERE store_id = 7067;
-- 모든열 가져오기
SELECT * FROM dbo.sales;
-- 검색할 열의 순서 지정
SELECT ord_date, ord_num, stor_id FROM dbo.sales;
-- AS ( 별칭 사용 )
SELECT stor_id AS '상점아이디', qty AS '판매수량' FROM dbo.sales;
-- AS 생략 가능
SELECT ord_date '주문날짜' FROM dbo.sales;
-- 새로운 열을 추가
SELECT '상점아이디 =>' AS '추가 열', stor_id FROM dbo.sales;
-- 오름차순 정렬 ( ASCENDING )
SELECT * FROM dbo.sales ORDER BY qty ASC;
-- 내림차순 정렬 ( DESCENDING )
SELECT * FROM dbo.sales ORDER BY qty DESC;
```

### 중복데이터 걸러내기

```sql
-- DISTINCT 사용
SELECT DISTINCT * FROM dbo.sales;
-- TOP 갯수 ( 상위개수 가져오기 )
SELECT TOP 3 * FROM dbo.sales ORDER BY qty DESC; -- 100, 90, 80, 80, 80, 70 일때 상위 3개 만 가져오기
-- TOP 갯수 에서 같은 값이면 잘려지는데, 잘려지지 않도록 하려면 WITH TIES 사용 ( 100, 90, 80, 80, 80, 70 일때 )
SELECT TOP 3 WITH TIES * FROM dbo.sales ORDER BY qty DESC; -- 3개 이상의 값이 나올수 있다. ( 5개 출력 )
-- 상위 10 퍼센트 데이터 가져오기
SELECT TOP 10 PERCENT * FROM dbo.titles;
```

### SELECT 절 변수 선언

```sql
-- DECLARE 로 변수 선언
DECLARE @n INT=3;
SELECT TOP(@n) stor_id, qty FROM dbo.sales ORDER BY qty DESC;
SELECT TOP(@n) WITH TIES stor_id, qty FROM dbo.sales ORDER BY qty DESC;
```

### 비교 연산자

```sql
-- 크다 >, 작다 <, 같다 =, 크거나 같다 >=,작거나 같다 <=, <> 같지 않다.
SELECT * FROM dbo.sales WHERE qty >= 25 ORDER BY qty DESC;

-- BETWEEN
SELECT * FROM dbo.sales WHERE qty BETWEEN 25 AND 40 ORDER BY qty DESC;

SELECT * FROM dbo.sales
WHERE ord_date
BETWEEN '1992-05-01' AND '1994-05-31'
ORDER BY ord_date;

-- NOT BETWEEN
SELECT * FROM dbo.sales WHERE qty NOT BETWEEN 25 AND 40 ORDER BY qty DESC;

-- 비교 연산자
USE AdventureWorks  -- AdventureWorks 데이터베이스 사용
DECLARE @p_id int;  -- INT 정수형 변수 선언
SET @p_id = 750;    -- 상품아이디 750 번 값 세팅

IF (@p_id <> 0)     -- 750 과 0은 값이 같지 않으므로 결과는 참이기 때문에 아래 쿼리문 수행
  SELECT ProductID, Name, ProductNumber
  FROM Production.Product
  WHERE ProductID = @p_id;
```

### 논리 연산자

```sql
USE pubs -- pubs 데이터베이스 사용
-- AND ( 두 조건 모두 참 이면 출력 )
SELECT * FROM dbo.titles WHERE price > 15 AND type='psychology' ORDER BY price;
-- OR ( 둘 중 하나의 조건이 참 이면 출력 )
SELECT * FROM dbo.titles WHERE price > 20 OR type='psychology' ORDER BY price;
-- NOT ( 조건을 만족하지 않는 것 출력 )
SELECT * FROM dbo.titles WHERE NOT price > 15 ORDER BY price;
```

### 집계함수

COUNT 함수와 AVG 함수 는 NULL 은 제외하고 계산하기 때문에 주의 해야 한다.
처음부터 NULL 을 제외하고 값을 계산하는게 좋다.

```sql
USE pubs -- pubs 데이터베이스 사용
-- COUNT ( 총 갯수 - NULL 포함 )
SELECT COUNT(*) FROM dbo.titles;
-- WHERE 절이 없어도 NULL 은 제외하고 계산
SELECT COUNT(price) FROM dbo.titles;
-- 처음부터 NULL 여부 체크후 가져오기
SELECT COUNT(*) FROM dbo.titles WHERE price IS NOT NULL;

-- AVG ( 평균 )
SELECT AVG(price) FROM dbo.titles;

-- SUM ( 합계 )
SELECT SUM(price) / COUNT(price) FROM dbo.titles;
SELECT SUM(price) / COUNT(*) FROM dbo.titles;
SELECT SUM(price) / COUNT(*) FROM dbo.titles WHERE price IS NOT NULL;

-- MAX ( 최대 ), MIN ( 최소 )
SELECT MAX(price) FROM dbo.titles;
SELECT MIN(price) FROM dbo.titles;
```
