# 네이버 탑 검색어 크롤링
from bs4 import BeautifulSoup
from urllib.request import urlopen

#response = urlopen('https://')
with urlopen('https://search.naver.com/search.naver') as response:
    soup = BeautifulSoup(response, 'html.parser')
    #print(soup.select("span.tit") )
    i = 1
    f = open("Python/WebCrawling/NaverTopSearch/search.txt", 'w', encoding='utf-8')
    for anchor in soup.select("span.tit"):
        #print( str(i) + "위 " + anchor.get_text() )
        data = str(i) + "위 " + anchor.get_text() + "\n" 
        i = i + 1
        f.write(data)
    f.close()