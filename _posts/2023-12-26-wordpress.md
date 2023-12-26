---
title: "ubuntu 22 에 워드프레스 세팅"
date: 2023-12-26 12:10:00
categories: wordpress
tag: [ubuntu22, wordpress]
toc: true
toc_sticky: true
toc_label: "목차"
search: true # 검색이 안되게 하고 싶을 때 false
lastmod: 2023-12-26 12:00:00
sitemap:
  changefreq: daily
  priority: 1.0
---

```bash
# 스왑 메모리 2g 세팅
wget -q https://raw.githubusercontent.com/laelbe/linux-simple-scripts/main/_server_tools/add_swapfile -O /root/add_swapfile
bash /root/add_swapfile 2
free -m
sudo apt update && sudo apt upgrade -y

# 워드프레스 설치 작업 시작
sudo apt install apache2 ghostscript libapache2-mod-php mysql-server php php-bcmath php-curl php-imagick php-intl php-json php-mbstring php-mysql php-xml php-zip -y
sudo mkdir -p /var/www/html
sudo chown www-data: /var/www/html
curl https://wordpress.org/latest.tar.gz | sudo -u www-data tar zx -C /var/www/html
cd /var/www/html
ls
cd wordpress
ls
cd
clear
sudo touch /etc/apache2/sites-available/wordpress.conf  # 빈화면

sudo vi /etc/apache2/sites-available/wordpress.conf
		
		<VirtualHost *:80>
			DocumentRoot /var/www/html/wordpress
			<Directory /var/www/html/wordpress>
				Options FollowSymLinks
				AllowOverride Limit Options FileInfo
				DirectoryIndex index.php
				Require all granted
			</Directory>
			<Directory /var/www/html/wordpress/wp-content>
				Options FollowSymLinks
				Require all granted
			</Directory>
		</VirtualHost>
		
```

```bash

sudo a2ensite wordpress
sudo a2dissite 000-default
sudo a2enmod rewrite
sudo systemctl reload apache2
sudo systemctl restart apache2


# mysql
sudo mysql -u root

mysql> CREATE DATABASE wordpress;
mysql> CREATE USER diorco@localhost IDENTIFIED BY '1qazXSW@';
mysql> GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, ALTER ON wordpress.* TO diorco@localhost;
mysql> FLUSH PRIVILEGES;
mysql> EXIT;

# mysql 서비스 재시작
sudo service mysql start

# 워드프레스 설정샘플을 wp-config.php 로 카피 생성
sudo -u www-data cp /var/www/html/wordpress/wp-config-sample.php /var/www/html/wordpress/wp-config.php

# 워드프레스 설정 값 변경 시작 ========================================================================================
vi /var/www/html/wordpress/wp-config.php

		define ( 'DB_NAME', 'wordpress' );
		define ( 'DB_USER', 'diorco' );
		define ( 'DB_PASSWORD', '1qazXSW@' );

		# https://api.wordpress.org/secret-key/1.1/salt/ 사이트로 가서 8개 키값 작성 - 새로고침 마다 새로 받음
		define('AUTH_KEY',         '/;r.yPG}(F[;x7DCf_?lqS|h,|sY8~=+agvkf(!X#)J+ZRICPGt1ztLx{7CME,Xy');
		define('SECURE_AUTH_KEY',  'GGt-g1IGXpV/2XTZuKsEA8u]Go|SmV;T]tA<|@Vhs!tu[h:&,&/AOGj^ysM%|bW}');
		define('LOGGED_IN_KEY',    '1:.G@KU14S$$c1*mlf&AEM-vSA17dI3=X/6I=b#>p6SBKY8uSKK-fg/-dV&lt7-l');
		define('NONCE_KEY',        'bsH<E`}M@0;J=jd!*-`|W`E0EUp,GA?S(P4p h^SM0l<} >y!&bhaZQ{eWsAHGlt');
		define('AUTH_SALT',        'C@XF^MC3~+dbZ]Mu+Q2;)iZ3-_^R+i>lE[/]d0t;+n-[ng[@#CkokA-:C8|S`D%J');
		define('SECURE_AUTH_SALT', 'xo/{H,w4$`BgDE!]ew]dnaL-f8q@/X<w{=)R)xf`|iV:>#ROZi8ZZaB5, tA9ksk');
		define('LOGGED_IN_SALT',   '8ZN9vj0)|/J=86TmLWe0?LH4H+Lcc,!i?=a-Pf}NdJ:;3Za?8 -i0T &Ga_t4A[.');
		define('NONCE_SALT',       'Pm04i/aTB)4$]$bt1dE/vc##p}LJFLCqa3 UL<+?S*z|:L9Hm.jwmrcqbZNt<5UM');


define( 'WP_HOME', 'http://web.ezdentone.com');
define( 'WP_SITEURL', 'http://web.ezdentone.com');

#define('WP_ALLOW_MULTISITE', true);
if (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] === 'https') {
    $_SERVER['HTTPS'] = 'on';
    $_SERVER['SERVER_PORT'] = 443;

}

#define('ADMIN_COOKIE_PATH', '/');
#define('COOKIE_DOMAIN', '');
define('COOKIEPATH', '');

# 워드프레스 설정 값 변경 끝   ========================================================================================

# 추가
sudo apt install phpmyadmin php-mbstring php-zip php-gd php-json php-curl -y
apache2 체크 ok
yes
password
confirm password



sudo systemctl restart apache2
sudo service mysql start

# php apache2 환경 설정 두 군데 검색하여 수정 ( 현재 버전 8.1 다른 버전일 수 있으니 확인 후 작업 )
sudo vi /etc/php/8.1/apache2/php.ini
sudo vi /etc/php/8.1/cli/php.ini 

# 아래 내용 검색 하여 수정
post_max_size = 100M 
file_uploads = On 
upload_max_filesize = 90M 
max_file_uploads = 50 
default_socket_timeout = 120 

sudo systemctl restart apache2
sudo service mysql start
```

```htaccess ( 기존 소스 ) - vi .htaccess

# BEGIN WordPress
# "BEGIN WordPress"와 "END WordPress" 사이의 지시문(줄)은
# 동적으로 생성되며 워드프레스 필터를 통해서만 수정해야합니다.
# 이 표시 사이의 지시문을 변경하면 덮어쓰게 됩니다.
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]
RewriteBase /
RewriteRule ^index\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]
</IfModule>

# END WordPress

```
```htaccess ( 바꿀 소스 )  - vi .htaccess - 안바꿨음...

# BEGIN WordPress
# "BEGIN WordPress"와 "END WordPress" 사이의 지시문(줄)은
# 동적으로 생성되며 워드프레스 필터를 통해서만 수정해야합니다.
# 이 표시 사이의 지시문을 변경하면 덮어쓰게 됩니다.
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI} [R=301,L]

RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]

RewriteBase /
RewriteRule ^index\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]
</IfModule>

# END WordPress

```
# 404 페이지 를 /index 페이지로 이동시키려면 theme 폴더로 들어가서 404.php 제일 상단에 아래 소스 넣어 주면 됨
```
<?php
header("HTTP/1.1 301 Moved Permanently");
header("Location: ".get_bloginfo('url'));
exit();
?>
```



# wix
ezdentone.com  23.236.62.147

