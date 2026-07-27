---
title: "Belajar Python : Tipe Data Python"
date: 2020-06-13T09:14:04+07:00
draft: false
categories:
- Python
tags:
- python
keywords:
- python dasar
toc: true
backtotop: true
image: "/img/place.svg"
thumbnail: /img/place.svg"
---

Variable dapat menyimpan nilai dari tepe data yang berbeda.
<!--more-->
Python adalah bahasa yang di tulis secara dinamis maka kita tidak perlu mendefinisikan jenis Variable saat mendeklarasikannya.

Python memungkinkan kita untuk memeriksa Variable yang di gunakan dalam program dengan fungsi type().

###### Misalnya
{{< highlight python >}}
a = 10
b = "hello"
c = 11.5
print(type(a))
print(type(b))
print(type(c))
{{< /highlight >}}

###### output
{{< highlight Python >}}
<type 'int'>
<type 'str'>
<type 'float'>
{{< /highlight >}}

#### Tipe Data Standar
Variabledapat menampung berbagai jenis nilai, nama seseorang harus di simpan sebagai string dan idnya harus di simpan sebagai integer.
Python menyediakan berbagai tipe data yang menentukan metode penyimpananya masing-masing, berikut tipe data yang didefinisikan dalam python :
  - Integer
  - String
  - Boolean
  - Float
  - Hexadecimal
  - Complex
  - List
  - Tuple
  - Dictionary

##### Angka
menyimpan nilai numerik , Python membuat objek number ketika nomor di tugaskan de Variable.
###### Misalnya
{{< highlight Python >}}
a = 3, b = 4 #a dan b adalah objek angka
{{< /highlight >}}

Python mendukung 4 tipe data momor.
  - int
  - long
  - complex
  - float

##### String
String dapat didefinisikan sebagai urutan karakter yang di wakili oleh tanda kutip.
Dalam string operator + digunakan untuk menggabungkan dua String.
###### Misalnya
{{< highlight Python >}}
nama1 = "andro" #String 1
nama2 = "code" #String 2
print(nama1+nama2) #string1+string2
{{< /highlight >}}

###### output
{{< highlight Python >}}
androcode
{{< /highlight >}}

##### List
List dapat berisi data dari berbagai tipe item yang di simpan dalam list dipisah dengan koma(,) dan terlampir dalam kurung siku [].
Kita dapat menggunakan operator slice [:] untuk mengakses data daftar. Operator gabungan (+) dan operator pengulangan ( * ) bekerja dengan daftar dengan cara yang sama seperti mereka bekerja dengan string.

###### Misalnya
{{< highlight Python >}}
l = [ 1 , "hi","andro" ,"code" ]  
print(l [ 3 :]);
print(l [ 0 : 2 ]);
print(l);
print(l + l);
print(l * 3 );
{{< /highlight >}}

###### output
{{< highlight Python >}}
['code']
[1, 'hi']
[1, 'hi', 'andro', 'code']
[1, 'hi', 'andro', 'code', 1, 'hi', 'andro', 'code']
[1, 'hi', 'andro', 'code', 1, 'hi', 'andro', 'code', 1, 'hi', 'andro', 'code']
{{< /highlight >}}

##### Tuple
Sebuah tuple mirip dengan daftar dalam banyak hal. Seperti daftar, tupel juga berisi koleksi item dari berbagai tipe data. Butir tupel dipisahkan dengan koma (,) dan diapit tanda kurung ().

Sebuah tuple adalah struktur data read-only karena kami tidak dapat mengubah ukuran dan nilai item tuple.

##### Dictionary
Kamus adalah seperangkat item nilai kunci yang dipesan. Ini seperti array asosiatif atau tabel hash di mana setiap kunci menyimpan nilai tertentu. Kunci dapat menampung semua tipe data primitif sedangkan nilainya adalah objek Python yang arbitrer.
Item dalam kamus dipisahkan dengan koma dan dilampirkan dalam kurung kurawal {}.


>(https://belajarpython.com/tutorial/tipe-data-python)<br>
>(https://www.javatpoint.com/python-data-types)
