---
title: "Namauser Is Not in the Sudoers File"
date: 2020-08-10T06:47:01+07:00
draft: false
categories:
- Tips
tags:
- linux

image: "/img/place.svg"
thumbnail: /img/place.svg"
---

Masalah ini saya temukan, mungkin karena ada konflik dengan file konfigurasi pada folder /home saya (dari sistem operasi sebelumnya, Kubuntu 18.04) tapi ini insyaallah bisa di semua distro.
<!--more--> Oke, langsung saja:

Langkah-langkah:

 -  Masuk terminal, bisa dengan cara *CTRL+ALT+T*. Masukan username dan password anda.

 - Masuk ke user root:
```
su
```
Masukan password root yang sudah dibuat.

 - Edit file /etc/sudoers dengan nano.
```
nano /etc/sudoers
```
 - Tambahkan baris berikut ini _setelah baris root ALL=(ALL) ALL)_:
```
namauser ALL=(ALL) ALL
```
_namauser_ ganti dengan nama user anda sendiri

 - Simpan dengan cara ctrl+x, ketik y untuk konfirmasi. Enter lagi.

sekarang coba apakah bisa atau tidak.
