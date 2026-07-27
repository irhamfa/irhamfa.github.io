---
title: "Belajar HTML : Memahami Tag Div"
date: 2020-10-19T13:21:57+07:00
draft: fals
categories:
  - Html
tags:
  - html
autoCollapseToc: true
image: "/img/place.svg"
thumbnail: /img/place.svg"
---
Anda dapat membuat suatu group dari tag-tag HTML yang anda buat dengan
menggunakan tag _div_, seperti pada contoh kasus berikut :
<!--more-->
Setiap website/weblog yang anda buka, jika diperhatikan pasti memiliki empat
bagian/group.<br>
Keempat bagian/group ini antara lain :<br>

  - Header
    Bagian kepala website yang berisi logo website, nama website, slogan website,
    menu website dan lainnya.
  - Content
    Berisi isi dari website itu sendiri, jika website berupa weblog, maka contentnya
    berisi postingan terbaru atau informasi lainnya.
 - Sidebar
    dan biasanya berisi iklan, kategori artikel dan widget
    atau hiasan situs lainnya.
 - Footer
    Bagian kaki dari website yang pada umumnya diisi dengan tag website tersebut,
    misalnya copyright © 2020 by me.

Dalam HTML, kita dapat membagi bagian-bagian tersebut dengan menggunakan tag
_div_
(division/bagian) dan untuk menamai setiap div kita gunakan atribut id atau class 5 .
Berikut contoh penggunaan tag div jika kita terapkan pada bagian-bagian website yang
telah kita sebutkan sebelumnya:

```html
<div id="header">
</div>
<div id="content">
</div>
<div id="sidebar">
</div>
<div id=footer">
</div>
```

Jika anda menampilkannya pada browser, anda tidak akan melihat apa-apa karena tag
div tidak akan menampilkan efek visual. Tag ini hanya digunakan untuk membuat
dokumen HTML lebih terstruktur dengan membagi-bagi dokumen ke dalam bagian-
bagian yang lebih spesifik.

## Pakai Id atau Class ?
Bagi seorang pemula, termasuk saya ketika masih belajar HTML & CSS pasti
menanyakan hal yang sama. Pasalnya atribut ID dan Class digunakan untuk menamai
tag HTML. Lalu apa perbedaan dari keduanya?

### ID
Atribut ID digunakan untuk penamaan elemen HTML yang memiliki karakteristik
unik/berbeda. Tidak boleh ada dua atau lebih elemen yang mempunyai ID yang sama.
Perhatikan contoh berikut :

```html
<div id="menu">
<ul id="menu">
    <li>Beranda</li>
    <li>Tutorial</li>
</ul>
</div>
```
Penggunaan atribut ID pada contoh di atas adalah **SALAH**, karena terdapat dua ID yang
sama, yaitu “menu” pada tag _div_ dan _ul_.<br>
<br>
Perhatikan contoh sebelumnya, bahwa kita menggunakan ID yang berbeda untuk setiap
div yaitu, header, content, sidebar dan footer karena semuanya memiliki struktur dan
fungsi yang berbeda dalam suatu dokumen HTML.

### Class
Class digunakan untuk penamaan elemen yang memiliki karakteristik/struktur sama dan
dapat digunakan berulang kali dalam markup (Kode HTML).<br>
Sebagai contoh, perhatikan kode HTML berikut :

```html
<ul id="menu">
    <li class="merah">Beranda</li>
    <li>Tutorial</li>
    <li class="merah">Berita</li>
    <li>Video</li>
</ul>
```

Pada Kode HTML di atas, saya menggunakan class Merah pada beberapa list item,<br>
karena nantinya list item yang memiliki class merah akan diberi warna background
merah.<br>
<br>
Kesimpulannya adalah, ketika anda memiliki beberapa elemen dengan karakter/format
yang sama, gunakan Class sebagai penamaannya dan Gunakan ID untuk elemen yang
berbeda dan membutuhkan tanda pengenal lebih spesifik.

## Memahami hubungan Child, Parent dan Siblings
Ketika suatu tag memiliki tag/konten didalamnya maka hubungan antar tag-tag tersebut
disebut dengan child-parent dan sibling. Perhatikan contoh berikut :
```html
<div id="wrapper">
    <div id="content">
        <div id="article"></div>
        <div id="sidebar"></div>
    </div>
</div>
```

<h3> Dalam contoh kode HTML tersebut : </h3>

 - **"div id=‚wrapper"**
    disebut Parent, dan tag HTML yang ada di dalamnya <br> disebut
    dengan Child( **div id="content"** ).
 - Begitu juga dengan **div id="content"**> disebut parent untuk **div id="article"** dan
    **div id="sidebar"**.
 - dan hubungan antara **div id="article"** dan **div id="sidebar"** disebut dengan
    sibling, atau saudara.