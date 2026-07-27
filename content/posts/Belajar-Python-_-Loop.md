---
title: "Belajar Python : Loop"
date: 2020-07-24T09:46:39Z
draft: false
categories: ["Python"]
image: "/img/place.svg"
thumbnail: /img/place.svg"
---

Loop digunakan untuk mengulangi urutan (baik list, tupel, dictionary, set, atau string).
<!--more--> 
## Python For Loop
Ini kurang seperti kata kunci for dalam bahasa pemrograman lain, dan berfungsi lebih seperti metode iterator seperti yang ditemukan dalam bahasa pemrograman berorientasi objek lainnya..

Dengan for loop kita dapat mengeksekusi seperangkat pernyataan, satu kali untuk setiap item dalam list, tuple, set dll.

##### Misalnya :
```python
buah = ["melon", "juwet", "jeruk"]
for x in buah:
  print(x)
```
##### Output :
```
melon
juwet
jeruk
```
## Break Statement
Dengan pernyataan break, kita dapat menghentikan loop sebelum loop melewati semua item.
##### Misalnya :
```python
buah = ["melon", "juwet", "jeruk"]
for i in buah:
  if i == "juwet":
    break
  print(i)
```
##### Output
```
melon
```
## Continue Statment
Dengan pernyataan continue, kita dapat menghentikan iterasi loop saat ini, dan melanjutkan dengan yang berikutnya.

##### Misalnya :
```python
buah = ["melon", "juwet", "jeruk"]
for i in buah:
  if i == "juwet":
    continue
  print(i)
```
##### Output :
```
melon
jeruk
```
## range() Function
Untuk mengulang satu set kode beberapa kali, kita dapat menggunakan fungsi range(),

Fungsi range() mengembalikan urutan angka, mulai dari 0 secara default, dan bertambah dengan 1 (secara default), dan berakhir pada angka yang ditentukan.
##### Misalnya :
```python
for i in range(10):
    print(i)
```
##### Output :
```
0
1
2
3
4
5
6
7
8
9
```

> Perhatikan bahwa range(10) bukan nilai 0 hingga 10, tetapi nilai 0 hingga 9.


Fungsi range() default ke 0 sebagai nilai awal, namun dimungkinkan untuk menentukan nilai awal dengan menambahkan parameter: rentang(2, 10), yang berarti nilai dari 2 hingga 10 (tetapi tidak termasuk 10).

##### Misalnya :
```python
for i in range(2,10):
	print(i)
```
##### Output :
```
2
3
4
5
6
7
8
9
```
Fungsi range() secara default untuk menambah urutan dengan 1, namun dimungkinkan untuk menentukan nilai kenaikan dengan menambahkan parameter ketiga: rentang (2, 30, 3):

##### Misalnya :
```python
for x in range(2, 30, 3):
  print(x)
```

##### Output :
```
2
5
8
11
14
17
20
23
26
29 
```

## Else in For Loop
Keyword dalam loop untuk menentukan blok kode yang akan dieksekusi ketika loop selesai.

##### Misalnya :
```python
for x in range(10):
  print(x)
else:
  print("Yea.. Selesai") 

```

##### Outputnya :
```
0
1
2
3
4
5
6
7
8
9
Yea.. Selesai
```

## Loop Bersarang
Loop bersarang adalah loop di dalam loop.

"Loop dalam" akan dieksekusi satu kali untuk setiap iterasi "loop luar".
```python
adj = ["red", "big", "tasty"]
fruits = ["apple", "banana", "cherry"]

for x in adj:
  for y in fruits:
    print(x, y)
```

##### Outputnya :
```
red apple
red banana
red cherry
big apple
big banana
big cherry
tasty apple
tasty banana
tasty cherry 
```
);