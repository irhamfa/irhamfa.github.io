---
title: "Laravel Di Termux"
date: 2026-07-30T19:20:28+07:00
draft: false
url: "laravel-termux"

tags:
    - Laravel
    - Termux
    - Android

categories:
    - Pemrograman

image: "/img/place.svg"
thumbnail: /img/place.svg"
---

 Laravel adalah kerangka kerja aplikasi web berbasis PHP yang sumber terbuka, menggunakan konsep Model-View-Controller.
## Apa Itu Laravel
Laravel merupakan framework PHP yang open-source dan berisi banyak modul dasar
untuk mengoptimalkan kinerja PHP dalam pengembangan aplikasi web, apalagi PHP
adalah bahasa pemrograman yang dinamis dan Laravel disini bisa bertindak untuk
membuat web development lebih cepat, lebih aman, dan lebih simpel.<br>
 Framework ini diluncurkan pada tanggal 9 Juni 2011 oleh Taylor Otwell. Awalnya
 tujuan dari Laravel adalah sebagai alternatif dari Codelgniter. Taylor Otwell
 melihat bahwa framework PHP lainnya yaitu Codelgniter belum menyediakan fitur
 tertentu seperti dukungan bawaan untuk otentikasi dan otorisasi pengguna. Sejak
 saat itu Laravel sudah mengeluarkan berbagai pembaruan dan penambahan fitur.
 Saat ini laravel sudah sampai ke versi 11.<br >
 Laravel sendiri bekerja di sisi back-end atau istilahnya server-side. Selain powerful, Laravel juga mudah untuk dimengerti. Dengan mengikuti pola arsitektur model-view-controller (MVC) Laravel bisa mempercepat proses pembuatan aplikasi web.

###  Kelebihan Laravel
 Laravel pada dasarnya adalah framework PHP yang digunakan untuk mempercepat web
 development.<br >
• Mempercepat waktu pengembangan aplikasi karena Laravel menggunakan komponen
dari framework yang lain dan built-in libraries dalam mengembangkan aplikasi
web.<br>
• Mempermudah pengelolaan resource karena<br>
• Performa aplikasi yang lebih baik.  Laravel sudah melewati tes kualitas dan
kecepatan sehingga aplikasi yang dibangun dengan Laravel bisa memiliki performa
yang lebih cepat.<br>
• Lebih sedikit kode. Dengan menggunakan framework Laravel kamu bisa lebih sedikit menggunakan kode original dengan menggunakan fungsi built-in dari Laravel.

###  Fitur Laravel
 -  Eloquent ORM
 -  Artisan CLI
 -  MVC Architecture
 -  Paginasi Otomatis

### Install Laravel
Install laravel menggunakan composer,
pertama install php dan composer dahulu.
```bash
sudo apt install php 
```
kemudian install composer
```bash
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
```
{{< highlight php >}}

php -r "if (hash_file('sha384', 'composer-setup.php') === 'dac665fdc30fdd8ec78b38b9800061b4150413ff2e3b6f88543c636f7cd84f6db9189d43a81e5503cda447da73c7e5b6') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"

{{< / highlight >}}
```bash
php composer-setup.php
```
```bash
php -r "unlink('composer-setup.php');"
```

Kemudian pindah file ```composer.phar```  agar bisa diakses secara global.
```bash
sudo mv composer.phar /usr/local/bin/composer
```
Atau kalo di Termux.
```bash
 mv composer.phar ~/../usr/bin/composer
 ```
Sekarang kita sudah bisa membuat Projek Laravelnya.
```bash
composer create-project laravel/laravel example-app
```
Tunggu hingga proses selesai kemudian jalankan Servernya.
```bash 
cd example-app
```
Jalankan Server dg php artisan.
```bash
php a rtisan serve 
```
<br>

[![Screenshot-20240416-074513-Termux.png](https://i.postimg.cc/2jv5gV01/Screenshot-20240416-074513-Termux.png)](https://postimg.cc/t7qyxCQb)

Jika sudah buka di browser alamat url ```localhost:8000``` 

[![Screenshot-20240416-074535-Chrome.png](https://i.postimg.cc/8zCNk5mB/Screenshot-20240416-074535-Chrome.png)](https://postimg.cc/kBLkf7ZB) 