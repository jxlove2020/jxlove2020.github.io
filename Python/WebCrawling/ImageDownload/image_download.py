# 아래 주소로 pip 설치 : 구글 이미지를 다운로드 받을 수 있다. 100장 내외 가능
# pip install git+https://github.com/Joeclinton1/google-images-download.git

from google_images_download import google_images_download   #importing the library

response = google_images_download.googleimagesdownload()   #class instantiation

arguments = {"keywords":"박보검","limit":20,"print_urls":True}   #creating list of arguments
paths = response.download(arguments)   #passing the arguments to the function
print(paths)   #printing absolute paths of the downloaded images
