---
title: "Cara Install Sublime Text Di Fedora"
date: 2020-08-17T13:20:54+07:00
draft: false
categories:
- Tips
tags:
- text editor
- linux
image: "/img/place.svg"
thumbnail: /img/place.svg"
---
Sublime Text adalah  kode editor sumber lintas platform, dan cukup ringan bagi laptop kentang seperti punya saya 😢.

<!--more-->

Begini cara install sublimetext di fedora dan ikuti langkah langkah berikut ini :

 Install the GPG key
```
sudo rpm -v --import https://download.sublimetext.com/sublimehq-rpm-pub.gpg
```
Untuk versi **Stable**
```
sudo dnf config-manager --add-repo https://download.sublimetext.com/rpm/stable/x86_64/sublime-text.repo
```
Untuk versi **Dev**
```
sudo dnf config-manager --add-repo https://download.sublimetext.com/rpm/dev/x86_64/sublime-text.repo
```
Kemudian Install Sublime-text
```
sudo dnf install sublime-text
```
![install](https://1.bp.blogspot.com/-3H05tqrvJGo/Xzojuc8wNhI/AAAAAAAAE28/oVjWcLcxzkwDIXSNSVBp7YrYA24xuuEowCLcBGAsYHQ/s969/fed%2Bsub%2B1.png)

Jila kalian ingin meng-install sublime text ketikkan _y_ dan tidak dengan _n_ <br>
Tunggu sampai proses selesai, dan ketika sudah selesai

![sublime complete](https://1.bp.blogspot.com/-peUAkoEcapI/XzojwF01eSI/AAAAAAAAE3E/QNG1UFgJqtkTaosoALIuiqbea2MFaepaACLcBGAsYHQ/s990/sub%2B2.png)



Kemudian buka Sublime-text yg sudah anda install tadi <br>
jika kalian ingin memasukkan lisensinya bisa ke menu _help ⏩ insert lisensi_  <br>

![lisensi insert](https://1.bp.blogspot.com/-9H9V-XsFud8/XzojvTWiM_I/AAAAAAAAE3A/Uq-erRdxa5ERpwItS3s0pfKHHqBfk_wuQCLcBGAsYHQ/s649/sub%2B3.png) <br>

Dan masukkan lisensi anda, jika sudah selesai akan seperti ini <br>
![lisensi insert](https://1.bp.blogspot.com/-6kyrAmBbuyU/Xzojx1BqkkI/AAAAAAAAE3I/Fq0nw4REhv8G76SWrCQcy5C-PBN464f_QCLcBGAsYHQ/s644/sub%2B4.png) <br>	

Dan Sublime-text siap di gunakan 😚.

> Buat yg belum punya lisensi sublime-textnya bisa beli di official web sublime-text atau tidak memasukkan lisensi 
juga ga papa, sublime-text bisa digunakan tanpa harus memasukkan lisensinya.


---

