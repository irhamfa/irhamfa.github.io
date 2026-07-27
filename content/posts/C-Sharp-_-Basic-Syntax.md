---
title: "C Sharp : Basic Syntax"
date: 2020-07-24T09:18:40Z
draft: false
categories:
- C Sharp
description: "C # adalah bahasa pemrograman berorientasi objek. Dalam metodologi Pemrograman Berorientasi Objek, suatu program terdiri dari berbagai objek yang saling berinteraksi melalui tindakan."
image: "/img/place.svg"
thumbnail: /img/place.svg"
---

C # adalah bahasa pemrograman berorientasi objek. Dalam metodologi Pemrograman Berorientasi Objek, suatu program terdiri dari berbagai objek yang saling berinteraksi melalui tindakan.<!--more--> Tindakan yang dilakukan suatu objek disebut metode. Objek dari jenis yang sama dikatakan memiliki tipe yang sama atau, dikatakan berada di kelas yang sama.

Sebagai contoh, mari kita pertimbangkan objek Rectangle. Ini memiliki atribut seperti panjang dan lebar. Bergantung pada desain, mungkin perlu cara untuk menerima nilai atribut ini, menghitung area, dan menampilkan detail.

Mari kita lihat kelas segipanjang di bawah
``` c#
using System;

namespace SegipanjangApplication {
   class Segipanjang {
      
      // member variables
      double length;
      double width;
      
      public void Acceptdetails() {
         length = 4.5;    
         width = 3.5;
      }
      public double GetArea() {
         return length * width; 
      }
      public void Display() {
         Console.WriteLine("Length: {0}", length);
         Console.WriteLine("Width: {0}", width);
         Console.WriteLine("Area: {0}", GetArea());
      }
   }
   class ExecuteSegipanjang {
      static void Main(string[] args) {
         Segipanjang r = new Segipanjang();
         r.Acceptdetails();
         r.Display();
         Console.ReadLine(); 
      }
   }
}
```
Output
```
Length: 4.5
Width: 3.5
Area: 15.75
```

#### Menggunakan Keyword
Pernyataan pertama dalam program C # adalah.
``` c#
using System;
```
Kata kunci  digunakan untuk memasukkan ruang nama dalam program. Suatu program dapat menyertakan banyak pernyataan.

#### Class Keyword
Kata kunci kelas digunakan untuk mendeklarasikan kelas.

#### Comments di C Sharp
Komentar digunakan untuk menjelaskan kode. Compiler mengabaikan entri komentar. Komentar multiline dalam program C # dimulai dengan / * dan diakhiri dengan karakter * / seperti yang ditunjukkan di bawah ini :
``` c#
/* Ini komen 
multi
baris  */
```
Komentar satu baris ditandai dengan simbol '//'. 
``` c#
// ini komen satu baris
```
#### Keywords C Sharp
Kata kunci adalah kata-kata yang dicadangkan yang telah ditentukan sebelumnya untuk kompiler C #. Kata kunci ini tidak dapat digunakan sebagai pengidentifikasi. Namun, jika Anda ingin menggunakan kata kunci ini sebagai pengidentifikasi, Anda dapat mengawali kata kunci dengan karakter @.

Dalam C #, beberapa pengidentifikasi memiliki makna khusus dalam konteks kode, seperti get dan set disebut kata kunci kontekstual.

Tabel berikut mencantumkan kata kunci yang dipesan dan kata kunci kontekstual dalam C # .

| Reserved Keywords |           |          |            |
| ----------------- | --------- | -------- | ---------- | ---------------------- | --------------------- | ------- |
| abstract          | as        | base     | bool       | break                  | byte                  | case    |
| catch             | char      | checked  | class      | const                  | continue              | decimal |
| default           | delegate  | do       | double     | else                   | enum                  | event   |
| explicit          | extern    | false    | finally    | fixed                  | float                 | for     |
| foreach           | goto      | if       | implicit   | in                     | in (generic modifier) | int     |
| interface         | internal  | is       | lock       | long                   | namespace             | new     |
| null              | object    | operator | out        | out (generic modifier) | override              | params  |
| private           | protected | public   | readonly   | ref                    | return                | sbyte   |
| sealed            | short     | sizeof   | stackalloc | static                 | string                | struct  |
| switch            | this      | throw    | true       | try                    | typeof                | uint    |
| ulong             | unchecked | unsafe   | ushort     | using                  | virtual               | void    |
| volatile          | while     |


| Contextual Keywords |        |           |            |         |         |
| ------------------- | ------ | --------- | ---------- | ------- | ------- | -------------- |
| add                 | alias  | ascending | descending | dynamic | from    | get            |
| global              | group  | into      | join       | let     | orderby | partial (type) |
| partial (method)    | remove | select    | set        |
---

