---
title: "Mysql"
date: 2020-09-12T14:44:50+07:00
draft: false
categories:
  - Database

tags:
 - Mysql

image: "/img/place.svg"
thumbnail: /img/place.svg"
---

MySQL adalah sebuah perangkat lunak sistem manajemen basis data SQL (bahasa Inggris: database management system) atau DBMS yang multialur, multipengguna, dengan sekitar 6 juta instalasi di seluruh dunia.<!--more-->
 MySQL AB membuat MySQL tersedia sebagai perangkat lunak gratis di bawah lisensi GNU General Public License (GPL), tetapi mereka juga menjual di bawah lisensi komersial untuk kasus-kasus di mana penggunaannya tidak cocok dengan penggunaan GPL.

MySQL adalah sebuah implementasi dari sistem manajemen basis data relasional (RDBMS) yang didistribusikan secara gratis di bawah lisensi GPL (General Public License). Setiap pengguna dapat secara bebas menggunakan MySQL, tetapi dengan batasan perangkat lunak tersebut tidak boleh dijadikan produk turunan yang bersifat komersial. MySQL sebenarnya merupakan turunan salah satu konsep utama dalam basisdata yang telah ada sebelumnya; SQL (Structured Query Language). SQL adalah sebuah konsep pengoperasian basisdata, terutama untuk pemilihan atau seleksi dan pemasukan data, yang memungkinkan pengoperasian data dikerjakan dengan mudah secara otomatis.

## Keistimewaan  Mysql
 1. Portabilitas. MySQL dapat berjalan stabil pada berbagai sistem operasi seperti Windows, Linux, FreeBSD, Mac Os X Server, Solaris, Amiga, dan masih banyak lagi.
 2. Perangkat lunak sumber terbuka. MySQL didistribusikan sebagai perangkat lunak sumber terbuka, di bawah lisensi GPL sehingga dapat digunakan secara gratis.
 3. Multi-user. MySQL dapat digunakan oleh beberapa pengguna dalam waktu yang bersamaan tanpa mengalami masalah atau konflik.
 4. 'Performance tuning', MySQL memiliki kecepatan yang menakjubkan dalam menangani query sederhana, dengan kata lain dapat memproses lebih banyak SQL per satuan waktu.
 5. Ragam tipe data. MySQL memiliki ragam tipe data yang sangat kaya, seperti signed / unsigned integer, float, double, char, text, date, timestamp, dan lain-lain.
 6. Perintah dan Fungsi. MySQL memiliki operator dan fungsi secara penuh yang mendukung perintah Select dan Where dalam perintah (query).
 7. Keamanan. MySQL memiliki beberapa lapisan keamanan seperti level subnetmask, nama host, dan izin akses user dengan sistem perizinan yang mendetail serta sandi terenkripsi.
 8. Skalabilitas dan Pembatasan. MySQL mampu menangani basis data dalam skala besar, dengan jumlah rekaman (records) lebih dari 50 juta dan 60 ribu tabel serta 5 miliar baris. Selain itu batas indeks yang dapat ditampung mencapai 32 indeks pada tiap tabelnya.
 9. Konektivitas. MySQL dapat melakukan koneksi dengan klien menggunakan protokol TCP/IP, Unix soket (UNIX), atau Named Pipes (NT).
 10. Lokalisasi. MySQL dapat mendeteksi pesan kesalahan pada klien dengan menggunakan lebih dari dua puluh bahasa. Meskipun demikian, bahasa Indonesia belum termasuk di dalamnya.
 11. Antar Muka. MySQL memiliki antar muka (interface) terhadap berbagai aplikasi dan bahasa pemrograman dengan menggunakan fungsi API (Application Programming Interface).
 12. Klien dan Peralatan. MySQL dilengkapi dengan berbagai peralatan (tool) yang dapat digunakan untuk administrasi basis data, dan pada setiap peralatan yang ada disertakan petunjuk online.
 13. Struktur tabel. MySQL memiliki struktur tabel yang lebih fleksibel dalam menangani ALTER TABLE, dibandingkan basis data lainnya semacam PostgreSQL ataupun Oracle.

## Kelebihan Mysql
 1. Berlisensi GPL dan Multi Platform.
 2. Dapat diintegrasikan dengan beberapa bahasa Pemrograman seperti .Net, Java, Python, Perl yang merupakan bahasa pemrograman yang paling dominan di kalangan programmer.
 3. Mendukung ODBC untuk sistem operasi Windows sehingga bisa digunakan aplikasi yang berjalan diwindows.
 4. Bisa dijalankan pada spesifikasi hardware yang rendah karena lebih hemat resource memory (dibandingkan database lain) sehingga mudah digunakan untuk bahan pembelajaran.
 5. MySQL dapat mendeteksi pesan kesalahan pada klien dengan menggunakan lebih dari 20 bahasa meskipun bahasa indonesia belum termasuk didalamnya.
 6. MySQL dapat diintegrasikan dengan Hosting.

## Kekurangan Mysql
 1. Banyak mengklaim kurang support terhadap pemrograman Visual/Desktop, sehingga sedikit yang menggunakan untuk aplikasi visual.
 2. Karena berlisensi GPL sehingga sulit mendapatkan update untuk problem yang urgent, sehingga perusahaan skala menengah keatas lebih memilih RDBMS berlisensi dan disupport seperti Oracle dan MS SQL Server
 3. Sangat diragukan dalam menangani data skala besar, karena ada beberapa opini yang pro dan kontra terhadap kemampuan MySQL terhadap pengolahan data yang besar.

## Kemampuan Mysql
 1. Unjuk kerja yang tinggi dalam memproses query sederhana, dalam arti dapat memproses lebih banyak SQL per satuan waktu.
 2. Memiliki lebih banyak tipe data seperti: signed/unsigned integer yang memiliki panjang data sebesar 1,2,3,4 dan 8 byte, FLOAT, DOUBLE, CHAR, VARCHAR, TEXT, BLOB, DATE, TIME, DATETIME, TIMESTAMP, YEAR, SET dan tipe ENUM.
 3. Mendukung field yang dijadikan Index, dengan maksimal 32 index dalam satu tabel. *
 4. MYSQL memiliki beberapa lapisan keamanan, seperti subnetmask, nama host, dan izin akses user dengan sistem perijinan yang mendetail serta sandi/password terenkripsi.
 5. Konektivitas , MySQL dapat melakukan koneksi dengan klien menggunakan protokol TCP/IP,Unix soket (UNIX),atau Named Pipes(NT).
 6. Multi-user. MySQL dapat digunakan oleh beberapa pengguna dalam waktu yang bersamaan tanpa mengalami masalah atau konflik
 7. Command and function, MySQL memiliki fungsi dan operator secara penuh yang mendukung perintah select dan where dalam query.
 8. Structure Table, MySQL memiliki struktur tabel yang lebih fleksibel dalam menangani ALTER TABLE dibandingkan DBMS lainnya.
 9. Mendukung penuh terhadap kalimat SQL GROUP BY dan ORDER BY. Mendukung terhadap fungsi penuh ( COUNT(),COUNT(), DISTINCT() AVG(), STD(), SUM(), MAX() dan MIN() ).

Itulah penjelasan singkat tentang mysql jika ada yg kurang tepat mungkin bisa di koreksi atau coba cari-cari di google.

## Install Mysql di Linux

**Ubuntu**
``` bash
sudo apt install mysql
```

**Arch**
```bash
sudo pacman -S mariadb
```
Tunggu hingga proses download selesai, kemudian jika sudah selesai
lalu hidupkan service mariadb.

```
sudo systemctl start mariadb
```

```
sudo systemctl enable mariadb
```

Jika sudah lanjut instalasi mysql dengan perintah berikut :
```
sudo mysql_secure_installation
```

Kemudian Setup wizard yg muncul.

Kemudian jika sudah setup mysqlnya kita bisa masuk mysql dengan perintah berikut :
```
sudo mysql -u root -p
```

kemudian masukkan passsword root dan password mysql yang sudah anda seting tadi.
Kalau berhasil Akan tampak seperti ini :
![mysql](https://1.bp.blogspot.com/-aqDRYQaUKOg/X1yC4GL4FnI/AAAAAAAAE4A/5MBmukaqJVAPaw5wesO6ap7843Cve1_1gCLcBGAsYHQ/s574/scrot_2020-09-12-30_574x221.png)

Yea.... Berhasil horee...
