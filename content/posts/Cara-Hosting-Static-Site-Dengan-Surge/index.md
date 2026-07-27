---
title: "Cara Deploy Static Site Dengan Surge.sh"
date: 2020-10-23T08:52:48+07:00
draft: false
categories:
- Tips
tags: ["hosting"]
image: "/img/place.svg"
thumbnail: /img/place.svg"
blackfriday :
  hrefTargetBlank = true
---
surge.sh sebuah layanan seperti hosting plus subdomain _.surge.sh_ gratis, dan hanya saja extensi file yang bisa diupload dibatasi hanya bisa file html, css, dan javascript.
<!--more-->
## Deploy Static Site pada surge.sh
 - Pastikan sudah menginstall aplikasi nodejs bisa cek disini cara installnya [Nodejs](http://nodejs.org/)
 - Kemudian, instal Surge menggunakan npm dengan menjalankan perintah berikut:
 ```bash
 npm instal -g surge
 ```
 - Sekarang, jalankan surge dari dalam direktori aplikasi atau website yang ingin dipublikasikan atau dihostingkan ke web surge. Dan masukkan Email dan password anda kemudian bisa atur nama yg ingin kalian gunakan.
 
 ![surge](surge.png)

 - Hasil aplikasi yang sudah di deploy [Androcode](http://androcode.surge.sh)
 Jika ingin update ringgal jalanin surge lagi.
