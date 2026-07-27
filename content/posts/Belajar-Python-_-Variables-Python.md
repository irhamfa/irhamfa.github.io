---
title: "Belajar Python : Variables Python"
date: 2020-06-10T10:48:47+07:00
categories:
- Python
tags:
- python
keywords:
- python dasar
toc: true
backtotop: true
#thumbnailImage: //example.com/image.jpg
image: "/img/place.svg"
thumbnail: /img/place.svg"
---
Variable adalah nama yang di gunakan untuk merujuk lokasi memori.
<!--more-->
Variable juga di kenal sebagai pengidentifikasi dan digunakan untuk menyimpan nilai
Dalam python kita tidak perlu menentukan jenis variable karena python adalah jenis bahasa yang disimpulkan dan cukup pintar untuk mendapatkan jenis variable.
Nama variable dapat berupa kelompok huruf dan angk, tetapi harus di awali dengan huruf atau garis bawah/underscore.
Dianjurkan untuk menggunakan huruf keciluntuk nama variable.
Satu dan satu adalah dua variable yang berbeda.

#### Penamaan Identifier
Variable adalah contoh pengidentifikasi Identifier digunakan untuk mengidentifikasi literal yang di gunakan dalam progrogram
Aturan untuk memberi nama seperti di hawah.
- Karakter pertama harus berupa huruf atau underscore.
- Semua karakter kecuali karakter pertama mungkin merupakan huruf kecil (a-z), huruf besar (A-Z) atau underscore dan digit (0_9).
- Nama pengidentifikasi tidak boleh  mengandung spasi atau karaker khusus (!, @, #,%, ^, &, * ).
- Nama pengidentifikasi tiak boleh mirip dengan kata kunci apapun yang di tentukan dalam bahasa.
- Nama pengenal terhadap huruf besar kecil, misal myname dan Myname tidak sama.
- Contoh pengidentifikasi yang valid (a123,_ n,n_9).
- Contoh pengidentifikasi yang tidak valid (1a,n%4,n 9).

#### Mendeklarasikan variable dan menetapkan nilai
Python tidak mengikat kita untuk Mendeklarasikan variale sebelum di gunakan dalam aplikasi, ini memungkinkan kita membuat variable pada waktu yang di perlukan.
Kita tidak perlu Mendeklarasikan variable eksplisit dalam python. ketika kami memberikan nilai apapun ke variable itu variable tersebut dinyatakan secara otomatis.
Operator (=) digunakan untuk menetapkan nilai ke Variable.
###### Misalnya

{{< highlight python >}}
a = 10  #a = variable, 10 = values atau nilai
name = "andro" #name = variable, andro = values atau nilai
print (a)
print (name)
{{< /highlight >}}

###### output
{{< highlight shell >}}
10
andro
{{< /highlight >}}

#### Penugasan berganda

Python memungkinkan kita menetapkan nilai ke dalam beberapa variable dalam satu pernyataan yang juga di kenal sebagai banyak tugas.
Kita bisa menetapkan beberapa penugasan dengan dua cara baik dengan menerapkan nilai tunggal ke beberapa variable atau menetapkan beberapa nilai ke beberapa variable.

#### 1. Menerapkan nilai tunggal ke beberapa variable :

###### Misalnya

{{< highlight python >}}  
a=b=c= 10
print (a)
print (b)
print (c)
{{< /highlight >}}

###### output

{{< highlight shell >}}
10
10
10
{{< /highlight >}}

#### 2. Menugaskan beberapa nilai ke beberapa variable :

###### Misalnya

{{< highlight python >}}
a,b,c= 10,20,30
print (a)
print (b)
print (c)
{{< /highlight >}}

###### output

{{< highlight shell >}}
10
20
30
{{< /highlight >}}

Nilai-nilai akan di berikan dalam urutan di mana variable muncul.

#### Fundamental Dasar

Berikut ini berisi dasar-dasar python :
Bagian ini berisi dasar-dasar dasar Python seperti:

i) Token dan tipenya.

ii) Komentar

a) Token:

Token dapat didefinisikan sebagai tanda punctuator, kata-kata yang dicadangkan, dan setiap kata individual dalam sebuah pernyataan.
Token adalah unit terkecil di dalam program yang diberikan.
Ada token berikut dalam Python:

#### Kata kunci.
- Pengidentifikasi.
- Literal.
- Operator.
#### Tuples:
- Tuple adalah bentuk pengumpulan di mana berbagai jenis data dapat - disimpan.
- Ini mirip dengan daftar tempat data dipisahkan oleh koma. Hanya bedanya adalah bahwa daftar menggunakan braket persegi dan tupel menggunakan tanda kurung.
- Tuple terlampir dalam tanda kurung dan tidak dapat diubah.
