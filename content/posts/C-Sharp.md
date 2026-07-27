---
title: "C Sharp"
date: 2020-07-10T13:23:47+07:00
draft: false
categories:
- C Sharp
description: "Androcode.my.id adalah blog dokumentasi belajar agar tidak lupa dengan apa yang sudah dipelajari );"

lightgallery: true
image: "/img/place.svg"
thumbnail: /img/place.svg"
---

**C#** merupakan bahasa pemrograman berorientasi objek yang di kembangkan oleh **Microsoft** sebagai bagian dari inisiatif kerangka **.Net Framework**. <!--more-->
Bahasa pemrograman ini di buat berbasiskan bahasa C++ yang telah di pengaruhi oleh aspek-aspek ataupun fitur bahasa yang terdapat pada bahasa-bahasa pemrograman lainya seperti _Java, Delphi, Visual Basic dan lain-lain_ dengan beberapa penyederhanaan.
## Struktur Progran
 Sebelum kita mempelajari blok bangunan dasar bahasa pemrograman C #, mari kita lihat struktur program C # minimum sehingga kita dapat menjadikannya sebagai referensi dalam bab-bab mendatang.

### Membuat Program Hello World
Program terdiri dari bagian-bagian berikut :

 - Deklarasi Namespace
 - Kelas
 - Metode kelas
 - Atribut kelas
 - Metode Utama
 - Pernyataan dan Ekspresi
 - Komentar

```c#
using System;

namespace HelloWorldApplication {
   class HelloWorld {
      static void Main(string[] args) {
         /* my first program in C# */
         Console.WriteLine("Hello World");
         Console.ReadKey();
      }
   }
}
```
output
``` 
Hello World
```
>
### Mari kita lihat berbagai bagian dari program yang diberikan :

 - Baris pertama program menggunakan Sistem; - kata kunci menggunakan digunakan untuk memasukkan namespace Sistem dalam program. Suatu program umumnya memiliki beberapa pernyataan menggunakan .
 - Baris berikutnya memiliki deklarasi namespace . Sebuah namespace adalah kumpulan kelas. The HelloWorldApplication namespace berisi kelas HelloWorld .

 - Baris berikutnya memiliki deklarasi kelas , kelas HelloWorld berisi data dan definisi metode yang digunakan program Anda. Kelas umumnya mengandung banyak metode. Metode mendefinisikan perilaku kelas. Namun, kelas HelloWorld hanya memiliki satu metode Main .

 - Baris berikutnya mendefinisikan metode Utama , yang merupakan titik masuk untuk semua program C #. The Main metode negara apa kelas tidak ketika dijalankan.

 - Baris berikutnya /*...*/ diabaikan oleh kompiler dan ia dimasukkan untuk menambahkan komentar dalam program.

 - Metode Utama menentukan perilakunya dengan pernyataan Console.WriteLine ("Hello World");

 - WriteLine adalah metode kelas Konsol yang didefinisikan dalam namespace Sistem . Pernyataan ini menyebabkan pesan "Halo, Dunia!" untuk ditampilkan di layar.

 - Baris terakhir Konsol.ReadKey (); adalah untuk Pengguna VS.NET. Ini membuat program menunggu penekanan tombol dan mencegah layar dari menjalankan dan menutup dengan cepat ketika program diluncurkan dari Visual Studio .NET.
>

### Perlu dicatat poin-poin berikut :

 - C # peka huruf besar-kecil.

 - Semua pernyataan dan ekspresi harus diakhiri dengan tanda titik koma (;).

 - Eksekusi program dimulai pada metode Utama.

 - Tidak seperti Java, nama file program bisa berbeda dari nama kelas.
