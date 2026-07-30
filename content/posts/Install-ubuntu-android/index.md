---
title: "Install Ubuntu Di Android"
date: 2026-07-30T19:38:54+07:00
draft: false
url: "install-ubuntu-di-android"

tags:
    - Tips
    - Android
    - Termux

categories:
    - Tips

image: "/img/place.svg"
thumbnail: /img/place.svg"
---

Kali ini saya akan membagikan bagaimana cara install ubuntu di Android.<br>
Emang bisa ya ubuntu di install di android?<br>
Tentu bisa karena android itu pake kernel linux jadi bisa.<br>
# Apa itu Ubuntu?
Ubuntu adalah sistem operasi sumber terbuka (open-source) berbasis Linux yang populer dan gratis. Ia dikenal karena kemudahan penggunaan, dukungan komunitas yang luas, dan cocok untuk berbagai keperluan, mulai dari desktop, server, hingga pengembangan perangkat lunak. 

## Bagaimana cara install ubuntu di android?
Jadi bagaimana cara install ubuntu di amdroid? <br>
carananya ada dg kita meng install apliksi termux terlebih dahulu, kita bisa download aplikasi termux lewat<ins> [*sini*](https://f-droid.org/id/packages/com.termux/).</ins><br>
Setelah itu bisa install seperti aplikasi biasa, kemudian buka termux yg sudah ter-install tadi.<br>
Setelah terbuka kita update dulu package nya dg melakukan perintah:
```bash
apt update
```
Setelah itu kita install aplikasi *proot-distro* dg cara:
```bash
apt install proot-distro
```
# Apa itu proot?
PRoot Termux adalah alat yang memungkinkan pengguna menjalankan aplikasi dan sistem operasi Linux lengkap di dalam lingkungan Termux tanpa perlu melakukan root pada perangkat Android.<br>
Bukan cuma ubuntu, kita busa install berbagai varian linux seperti Archlinux, apline linux, debian, manjaro dan masih banyak lagi.<br>
masukkan perintah `proot-distro list` untuk melihat apa aja yg bisa.di install.
![proot](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjD4z3tH0D1MiZasbhSNo1l4NfWEo6V7YDpYuXoKARWv9MXC50liOVG9lxChoeF4LTz25wl9_JXs0zjlDJLwH9hhg8BelmtlQPGwPc4anIE3lYAre2qhFBQkg2nChGpoMye1_fypGMQ3zD9xpIY3BPW3TIUV0dgEQPp77Bnc2_ar47VADzLX8fNxyCar1E/s1080/IMG_20250628_212710.jpg)
Setelah itu kita tingall install sesuai keinginan kita.<br>
Karena kita akan install ubuntu, maka tuliskan perintah
```shell
proot-distro install ubuntu
```
Tunggu sampai prosesnya selesai ya.<br>
Setelah selesai kita bisa login ke ubuntunya dengan perintah:
```shell
proot-distro login ubuntu
```
sesudah login update package dan install sudo dg perintah
```shell
apt update && apt install sudo
```
# Buat User 
Sekarang kita buat user untuk ubuntu.<br>
Ganti password root
```shell
passwd
```
Tambahkan grup 
```shell
groupadd storage
groupadd wheel
groupadd video
```
Tambah regular user, ganti `user` sesuai nama yg kalian inginkan. 
```shell
useradd -m -g users -G wheel,audio,video,storage -s /bin/bash user
```
Ganti password user
```shell
passwd user 
```
> *user* sesuai yg kalian buat tadi 

Setelah sudah edit file `/etc/sudoers` dan tambahkan dibawah `root ALL=(ALL:ALL) ALL`
```shell
user ALL=(ALL:ALL) ALL
```
Setelah sudah sekarang kita login pake user yg udah di buat 
```shell
su user 
cd 
```
sekarang udah bisa login ke user kita.<br>
Kalo login dari termux langsung ke user bisa masukkan perintah:
```shell
proot-distro login ubuntu --user namauserkalian
```
Sekarang sudah selesai yeey.