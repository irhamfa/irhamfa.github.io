---
title: "Mysql : Buat Database Mysql di Terminal"
date: 2020-09-15T13:56:56+07:00
Description: "database mysql sendiri bisa dibuat dengan _phpmyadmin_  lewat browser untuk cara installnya kalian bisa cari tutorialnya sendiri.
Baik kalau gitu mari kita mulai saja buat databasenya"
Tags: [database]
Categories: [Mysql]
DisableComments: false
image: "/img/place.svg"
thumbnail: /img/place.svg"
---

Di postingan sebelumnya kita sudah mengetahui [apa itu mysql dan cara installnya](https://androcode.netlify.app/post/mysql/), kali ini kita akan membuat database mysql di terminal,
<!--more--> 
dan database mysql sendiri bisa dibuat dengan _phpmyadmin_  lewat browser untuk cara installnya kalian bisa cari tutorialnya sendiri.
Baik kalau gitu mari kita mulai saja buat databasenya :


- Masuk ke dalam pengolahan data mysql dengan memasukkan perintah berikut di terminal anda
```zsh
sudo mysql -u root -p
```
Kemudian masukkan password anda yg sudah di setinng sebelumnya 
jika berhasil akan muncul tampilan seperti berikut

![Mysql](https://1.bp.blogspot.com/-_owMToHBEDo/X2pnsfguwBI/AAAAAAAAE5A/FUwWUDGwLOAH25WV2FMkbHR1FsMAVg-owCLcBGAsYHQ/s574/viewmysql.jpg  )

- Setelah masuk kita bisa buat database dengan memasukkan perintah 
```zsh
CREATE DATABASE db_name;
 ```

Ganti **db_name** dengan nama  database yg ingin kita buat, saya akan membuat database dengan nama belajar oh iya setelah kita mengetikkan perintah di mysql jangan lupa kasih tanda ; (titik koma)
```zsh
CREATE DATABASE belajar;
 ```

jika berhasik akan ada keterangan _Query ok_

![create database](https://1.bp.blogspot.com/-I8rphqFsGJ4/X2pnrA1CDeI/AAAAAAAAE40/eYTxnKED-6cbOh_qhyk4GrVrO6QcmA5gQCLcBGAsYHQ/s597/create%2Bdatabase.png)

Dan untuk mengecek database kita, bisa memasukkan perintah
```zsh
SHOW DATABASE;
```
Maka akan tampil semua database yg sudah pernah kita buat

![show database](https://1.bp.blogspot.com/-KKz8xre8vKk/X2pnryqZoZI/AAAAAAAAE44/hD8ijEEJMuQ1c_NjJkHC-0tPX_DFAOAmQCLcBGAsYHQ/s598/showdatabase.png)

Dan untuk perpindah ke halaman database kita bisa mengetikkan perintah 
```zsh
USE db_name;
```
Tadi kita buat database dengan nama belajar, maka masukkan perintah
```zhs
USE belajar;
```
Maka akan tampil seperti ini

![use db](https://1.bp.blogspot.com/-euyeQbalxwA/X2pnsT9dtJI/AAAAAAAAE48/EOuX0_gxO6AAuO5QZAuHiX3SayGGUnszwCLcBGAsYHQ/s579/usedb.png)

Sampai saat ini kita sudah bisa membuat database mysql dengan nama belajar, setelah ini kita bisa membuat table di dalam database belajar.
Untuk membuat table kita bisa memasukkan perintah 
```zsh
CREATE TABLE nama_table (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(255),
    alamat VARCHAR(255)
);
```
Ganti **nama_table** dengan nama tabel yg ingin kalian buat, kali ini saya kan membuat nama table dengan nama _siswa_
```zsh
CREATE TABLE siswa(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(255),
    alamat VARCHAR(255)
);
```
Jika berhasil akan tampil seperti berikut 

![create table](https://1.bp.blogspot.com/-5tK20-K2WZQ/X2pnrMJX2BI/AAAAAAAAE4s/Y0zST5JjUu4YBmXEhklhgcduWzqAtMO-gCLcBGAsYHQ/s597/createtable.png)

Untuk memasukkan data ke dalam table siswa kita bisa memasukkan perintah
```zsh
INSERT INTO siswa(nama, alamat) VALUES ("Irham", "Bungu");
```
Ganti data sesuai keinginan anda, dan jika berhasil akan ada keterangan _Query ok_

Untuk melihat data di dalam table siswa kita bisa memasukkan perintah 
```zsh
SELECT * FROM siswa;
```
Untuk **siswa** ganti sesuai dg nama table anda.
Maka tampil seperti berikut

![lihat data](https://1.bp.blogspot.com/-6oEGGbeoaaA/X2pnrF8wAcI/AAAAAAAAE4w/DuwI6PoRk9I5RAconR61VhWzaKOb4fZSACLcBGAsYHQ/s573/lihatdata.png)

 - Untuk menghapus data pada table bisa memasukkan perinta 
```zsh
DELET FROM siswa WHERE id=1;
```
Itu untuk menghapus data berdasarkan id nya.

Dan untuk Menghapus database bisa memasukkan perintah 
```zsh
DROP DATABASE db_name;
```
