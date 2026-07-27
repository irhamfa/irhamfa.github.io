---
title: "Belajar Sass : Simbol & pada Sass"
date: 2020-10-19T07:56:23+07:00
draft: true
tags: ["sass","css"]
categories: ["SASS"]
autoCollapseToc: true
image: "/img/place.svg"
thumbnail: /img/place.svg"
---

Sebelum mempelajari simbol &, mari kita meninjau ulang :hover dan :active. Keadaan dimana kursor berada di atas element disebut hover.
<!--more-->
Pada CSS, dengan selector:hover, Anda dapat menerapkan CSS spesifik saat kursor menghover sebuah element.

## Active
Dengan menggunakan active dengan selector, CSS dapat diterapkan hanya jika element diklik. Ini dapat dilakukan dengan sintaksis: selector:active.

## Simbol &
Dengan nesting, Anda dapat menulis ulang selector:hover sebagai &:hover, seperti ditunjukkan di bawah. Ingat bahwa *&* bisa digunakan dengan selector apapun - hover, active, dan lain-lain.

### contoh

*index.html*
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.sass">
    <link rel="stylesheet" href="style.css">
    <title>Belajar Scss </title>
</head>
<body>
   	<div class="main">
  		<h3>Ayo belajar SASS!</h3>
  		<span class="button">Mulai Belajar</span>
	</div>
</body>
</html>
```
*style.scss*
```scss
.main {
  margin: 20px;
  text-align: center;

  h3 {
    margin-bottom: 15px;
    color: #555;
  }

  .button {
    display: inline-block;
    padding: 8px 24px;
    color: white;
    opacity: 0.8;
    border-radius: 4px;
    background-color: #f778b8;
    cursor: pointer;
    box-shadow: 0 5px #e04893;

    
    &:hover {
      opacity: 1;
    }

    
    &:active {
      position: relative;
      top: 7px;
      box-shadow: none;
    }
  }
}
```
