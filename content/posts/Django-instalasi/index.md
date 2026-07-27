---
title: "Django Instalasi"
date: 2021-03-02T14:37:50+07:00
draft: false
url: "Django-Instalasi"
tags:
    - Python
    - django

categories:
    - Python
    - Django

image: "/img/place.svg"
thumbnail: /img/place.svg"
---

Saat ini saya lagi belajar Django, Django merupakan salah satu framework python.
Kali ini saya akan belajar instalasi django dan semoga nanti ada terusannya.

### Setup django
{{< highlight zsh >}}
sudo pacman -S python
{{< / highlight >}}

jika sudah selesai bisa masukkan perintah python di terminal maka nanti akan ada versi python yang kita gunakan
{{< highlight zsh >}}
Python 3.9.2 (default, Feb 21 2021, 02:28:33) 
[GCC 10.2.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>>
{{< / highlight >}}

saya pada saat ini menggunakan versi 3.9.2 bisa jadi kalian nanti menggunakan versi lebih tinggi dari pubya saya, 
walaupun versi python kita berbeda tapi insyaallah nanti tidak akan terjadi apa-apa.

#### setelah ini install pip
{{< highlight zsh >}}
sudo pacman -S python-pip
{{< / highlight >}}

kemudian install virtual environment

{{< highlight zsh >}}
pip install virtualenv
{{< / highlight >}}

#### kemudian buat virtual environment 
buat folder dengan nama apa aja terserah teman"
{{< highlight zsh >}}
mkdir django %% cd django
{{< / highlight >}}

Selanjutnya kita perlu membuat dan mengaktifkan virtual environment agar kita bisa menginstal framework Django secara local atau hanya di dalam folder project kita saja. Untuk membuat virtual environment baru ketikkan perintah berikut.

kemudian buat virtual environment
{{< highlight zsh >}}
virtualenv my-env
{{< / highlight >}}

untuk mengaktifkannya virtual environment bisa masukkan perintah
{{< highlight zsh >}}
source my-env/bin/activate
{{< / highlight >}}

dan untuk menonaktifkannya masukkan perintah
{{< highlight zsh >}}
deactivate
{{< / highlight >}}


Setelah semuannya berjalan dengan lancar sekarang tinggal install Django
{{< highlight zsh >}}
pip install django
{{< / highlight >}}

jika sudah selesai kita bisa cek dengan perintah
{{< highlight zsh >}}
pip list
{{< / highlight >}}

maka kita bisa melihat apa aja yg sudah kita install

{{< highlight zsh >}}
Package    Version
---------- -------
asgiref    3.3.1
Django     3.1.7
pip        21.0.1
pytz       2021.1
setuptools 53.0.0
sqlparse   0.4.1
wheel      0.36.2
{{< / highlight >}}

### Membuat Project dan app Baru

Untuk membuat project kita bisa memasukka perintah
{{< highlight zsh >}}
django-admin startproject androcode
{{< / highlight >}}
**androcode** bisa sesuaikan dengan nama sesuka kalian
kemudian masuk ke folder project yg sudah kita buat kemudian buat app dengan perintah
{{< highlight zsh >}}
python manage.py startapp crud
{{< / highlight >}}

Untuk mengecek apakah aplikasi yg kita buat berjalan apa tidak kita bisa memasukkan perintah
{{< highlight zsh >}}
python manage.py runserver
{{< / highlight >}}

kemudian masukkan alamat url [localhost:8000](http://localhost:8000)
maka akan seperti ini
![image django](django.png)

Yea sudah berhasil selanjutnya kita akan lanjutkan ya.... hehehe di tunggu.