---
title: "Belajar Laravel : Install Laravel Di Linux"
date: 2020-08-09T11:44:31+07:00
draft: false
categories:
- PHP
image: "/img/place.svg"
thumbnail: /img/place.svg"
---
Tutorial ini berfungsi untuk semua distro linux. Mau pakai Ubuntu, Linux Mint semua bisa. Asalkan sistem kamu memenuhi spesifikasi berikut:
<!--more-->
 - PHP >= 7.0 (sejak laravel versi 5.5 minimum php7)
 - OpenSSL PHP Extension
 - PDO PHP Extension
 - Mbstring PHP Extension
 - Tokenizer PHP Extension
 - XML PHP Extension

## Install Composer

Composer adalah aplikasi manajer paket untuk bahasa pemrograman PHP yang menyediakan format standar untuk mengelola dependensi PHP dan pustaka-pustaka yang diperlukan.

Untuk menginstallnya bisa menggunakan perintah :
```
sudo apt install composer
```
Setelah selesai kita bisa membuat projek dengan perintah :
```
laravel new blog
```
atau 
```
composer create-project --prefer-dist laravel/laravel blog

```
Dan Saya membuat projek dengan nama _blog_
Tetapi saya lebih sering menggunakan yg ke-dua

## Testing Laravel
Jika proses di atas lancar tanpa error. Maka laravel sudah terinstall dengan baik.
Sekarang kita masuk ke direktori project kita kemudian masukkan perintah di terminal anda :
```
php artisan serve
```
Maka laravel akan berjalan menggunakan default server php, pada port 8000. Sehingga ketika kita membuka http://localhost:8000


![Laravel Priview](https://1.bp.blogspot.com/--mZ0pEjxQNw/Xy-E2o2xkwI/AAAAAAAAE2U/gouUfZBlpJwtD4FZJNX9rqKc_vkUmssJACLcBGAsYHQ/s1365/Screenshot_20200809_120508.png)

> Referensi : https://id.wikipedia.org/wiki/Laravel<br>
> Referensi	: https://id.wikipedia.org/wiki/Composer<br>
> Reverensi : https://jagongoding.com/web/laravel/cara-install-laravel-di-linux/