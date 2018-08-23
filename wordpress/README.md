# wp.alexshi.ca
## Wordpress

## Installation

1. Setup the database using the most recent backup in the ```/sql/``` directory. Delete directory when database is setup.
2. Place everything from the ```/wordpress/``` directory into the apache ```wp``` subdomain root. 
3. Update your ```.htaccess``` with the following :
```
Header add Access-Control-Allow-Headers "origin, x-requested-with, content-type"
Header add Access-Control-Allow-Methods "PUT, GET, POST, DELETE, OPTIONS"

# BEGIN WordPress
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /
RewriteRule ^index\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]
</IfModule>

# END WordPress

# MYSQL DATABASE CREDENTIALS
SetEnv PHP_ALEXSHI_NAME <insert mysql username>
SetEnv PHP_ALEXSHI_DB <insert mysql database name>
SetEnv PHP_ALEXSHI_PASS <insert mysql user's password here>
```