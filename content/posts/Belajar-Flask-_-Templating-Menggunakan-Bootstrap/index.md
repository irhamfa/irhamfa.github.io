---
title: "Belajar Flask : Templating Menggunakan Bootstrap"
date: 2020-10-15T20:47:41+07:00
draft: false
tags: ["flask","python"]
categories: ["Flask","Python"]
author: "Irham"
autoCollapseToc: true
image: "/img/place.svg"
thumbnail: /img/place.svg"
---
Pada tulisan kali ini saya akan menjelaskan bagaimana pembuatan template dasar menggunakan Flask Framework dengan struktur folder dan file sebagai berikut.
<!--more-->

```js
Project
    templates
    includes
        _navbar.html
    index.html
    about.html
    contact.html
app.py
```

#### Edit app.py

File *app.py*

```python
from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

# Routing Statis
@app.route("/seting")
def show_seting():
    return "Ini Halaman seting"

# Routing Dinamis
@app.route("/profile/<username>")
def show_profile(username):
    return "Kamu di Halaman profile %s" % username

@app.route("/blog/<int:blog_id>")
def show_blog(blog_id):
    return "Kamu di blog nomer %d" % blog_id

@app.route('/about')
def show_about():
   return render_template("about.html")

@app.route('/contact')
def show_contact():
   return render_template("contact.html")

```

Pada *app.py* kalian harus mengimport *render_template* pada baris pertama, maka jadi seperti ini

```py
from flask import Flask, render_template
```

File *app.py* menyimpan daftar route aplikasi dimana setiap halaman website memiliki route dengan satu atau beberapa define function (method) disingkat def. Route dan def diketik dengan level yang sama (sejajar).

#### Membuat Folder Templates dan Includes

Setelah membuat file *app.py* selanjutnya membuat folder *templates* kemudian didalam folder tersebut dibuat satu folder lagi dengan nama *includes*. Semua halaman html akan diletakkan didalam folder templates dan *_navbar.html* akan diletakkan di folder *includes*.

#### Membuat File layout.html

layout.html adalah file html yang diletakkan didalam folder templates, digunakan sebagai template dasar untuk halaman html yang lainnya pada file layout.html berisi title, css, dan js aplikasi utama kemudian setiap halaman (index.html, about.html & contact.html) akan *meng-extends* (mengikut) ke layout.html, sehingga anda tidak perlu mengetik keseluruhan code html ke setiap page.
Dan kita akan memanggil bootstrap dengan CDN.

File *templates/layout.html*

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
    {% block title %} {% endblock %}
    </title>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
</head>
<body>
    {% include 'includes/_navbar.html' %}

    {% block body %} {% endblock %}
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
</script>
</body>
</html>
```

#### Membuat File *navbar.html*

File *_navbar.html* adalah halaman html yang menampilkan navigation bar atau menu navigasi utama website.

File *templates/includes/_navbar.html*

```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/">Androcode</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/about">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/contact">Contact</a>
      </li>
    </ul>
  </div>
</nav>
```

#### Membuat File Index About Contact

File *templates/index.html*

```html
{% extends 'layout.html' %}


{% block title %} Home {% endblock %}

{% block body %}

<div class="jumbotron">
    <div class="container">
        <h2>Hallo Semua</h2>
        <p>Kita akan belajar membuat template flask dengan bootstrap</p>
        <p>
        <a href="#" role="button" class="btn btn-primary">
            More &raquo;
        </a>
        </p>
    </div>
</div>
<div class="container">
    <div class="row">
        <div class="col-md-4">
            <h2>Heading</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti perferendis necessitatibus dolor, ex doloribus consectetur tempore voluptas voluptate laborum incidunt sunt veritatis placeat dolorum quas expedita id ab adipisci illo?</p>
            <p>
                <a href="#" role="button" class="btn btn-default">Learn more &raquo;</a>
            </p>
        </div>
        <div class="col-md-4">
            <h2>Heading</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti perferendis necessitatibus dolor, ex doloribus consectetur tempore voluptas voluptate laborum incidunt sunt veritatis placeat dolorum quas expedita id ab adipisci illo?</p>
            <p>
                <a href="#" role="button" class="btn btn-default">Learn more &raquo;</a>
            </p>
        </div>
        <div class="col-md-4">
            <h2>Heading</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti perferendis necessitatibus dolor, ex doloribus consectetur tempore voluptas voluptate laborum incidunt sunt veritatis placeat dolorum quas expedita id ab adipisci illo?</p>
            <p>
                <a href="#" role="button" class="btn btn-default">Learn more &raquo;</a>
            </p>
        </div>
    </div>
</div>

{% endblock %}
```

File *templates/about.html*

```html
{% extends 'layout.html' %}

{% block title %} About {% endblock %}


{% block body %}

<div class="container">
    <div class="starter-template">
        <h2>Templating with bootstrap</h2>
        <p class="lead">Templating Use Bootstrap</p>
    </div>
</div>

{% endblock %}
```

File *templates/contact.html*

```html

{% extends 'layout.html' %}

{% block title %} Contact Us {% endblock %}

{% block body %}
<div class="container">
    <div class="row">
        <div class="col-md-6">
            <div class="well well-sm">
                <form class="form-horizontal" method="post">
                    <fieldset>
                        <legend class="text-center header">Contact us</legend>
                        <div class="form-group">
                            <div class="col-md-10 col-md-offset-1">
                                <input id="fname" name="name" type="text" placeholder="First Name" class="form-control">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-md-10 col-md-offset-1">
                                <input id="lname" name="name" type="text" placeholder="Last Name" class="form-control">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-md-10 col-md-offset-1">
                                <input id="email" name="email" type="text" placeholder="Email Address"
                                    class="form-control">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-md-10 col-md-offset-1">
                                <input id="phone" name="phone" type="text" placeholder="Phone" class="form-control">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-md-10 col-md-offset-1">
                                <textarea class="form-control" id="message" name="message"
                                    placeholder="Enter your massage." rows="7"></textarea>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-md-12 text-center">
                                <button type="submit" class="btn btn-primary btn-lg">Submit</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
        <div class="col-md-6">
            <div>
                <hr />
                <div id="map1" class="map">
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</div>
{% endblock %}
{% endblock %}
```

Jika kalian sudah membuat dan menuliskan kodenya sekarang kita akan menjalankan aplikasinnya denga perintah

```sh
FLASK_APP=app.py FLASK_DEBUG=1 python -m flask run
```

Dan masukkan alamat ini <http://localhost:5000> di browser anda, dan kita bisa melihat tampilannya.

![images run Flask](run%20tem.png)

