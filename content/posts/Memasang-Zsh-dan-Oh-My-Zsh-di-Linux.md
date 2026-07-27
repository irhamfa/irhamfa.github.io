---
title: "Begini Cara Mempercantik Tampilan Terminal Linux Anda"
date: 2020-06-24T21:25:08+07:00
draft: false
categories:
- Tips
tags:
- terminal
- zsh
- linux
image: "/img/place.svg"
thumbnail: /img/place.svg"
---
Z Shell atau lebih dikenal dengan nama zsh adalah sebuah interactive UNIX shell seperti halnya bash yang biasa kita pakai.
<!--more-->
Zsh menjadi salah satu shell yang cukup populer di Linux dan Mac OS X. Ia memiliki fitur-fitur yang kaya dan mudah diatur sesuai kebutuhan.

### Cara Pasang zsh

```bash
sudo apt install zsh
```

Kemudian setelah selesai meng-install zsh tulis perintah di bawah untuk mengaktifkan zsh.

```bash
chsh -s /usr/bin/zsh
```

Setelah itu masukkan password anda dan reboot komputer mu.
Setelah selesai reboot kemudian buka terminal anda, kemudian muncul pilihan, kita bisa bemilih nomer 2 atau ketikkan 2 di terminal anda.

![zsh options](https://1.bp.blogspot.com/-P05UiZQgXr8/XvNj7E7yQKI/AAAAAAAAE0M/T6Mq_LVmxi4AysIJnyGHxC_0FvBkeWIJwCLcBGAsYHQ/s1600/Screenshot_2020-06-24_20-57-58.png)

### Pasang Oh My Zsa

Setelah Z shell terpasang. Selanjutnya, kita akan melanjutkan dengan konfigurasi Oh My Zsh. Agar berjalan dengan lancar, pastikan git dan wget sudah terpasang. jika belum kita bisa meng-installnya dengan mengetikkan perintah di bawah.

```bash
sudo apt install git wget
```

Jika sudah selesai salin kode berikut untuk pemasang Oh My Zsh dan menjalankannya.

```bash
sh -c "$(wget https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"
```

Jika berhasil maka akan tampil seperti ini.
![zsh options](https://1.bp.blogspot.com/-XL9JVISDYuw/XvNj7WuhgGI/AAAAAAAAE0Q/zra0ml-SAMsw3IYr7VyVgixvsm6Rh48lgCLcBGAsYHQ/s1600/Screenshot_2020-06-24_20-59-27.png)

Ganti konfigurasi yang sudah ada dengan konfigurasi dari Oh My Zsh dengan perintah.

```bash
cp ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc
```

Dan umtuk menerapkannya.
```bash
source ~/.zshrc
```

### Pasang Tema

Konfigurasi rekomendasi Oh My Zsh menggunakan theme robbyrussell. Kita bisa mengganti theme ini dengan theme lain dengan mudah. Sebelumnya, pilih dulu salah satu tema yang disediakan [disini](https://github.com/robbyrussell/oh-my-zsh/wiki/Themes).
Kemudian, edit file .zshrc untuk mengganti tema sekarang dengan tema pilihan kita.
Untuk mengedit kita bisa gunakan perintah.
```bash
nano ~/.zshrc
```

Ganti nilai untuk variabel **ZSH_THEME="funky"** dengan nama tema yang dipilih. 

![zsh options](https://4.bp.blogspot.com/-lIoBG5PPHWY/XvNj7e0ZB-I/AAAAAAAAE0U/T2vqNdjdqWYayZIFxHYdSXiYph8sJUZdACLcBGAsYHQ/s1600/Screenshot_2020-06-24_20-57-5g8.png)

Tekan tombol _CTRL-X_ untuk keluar dan tekan tombol _Y_ untuk menyimpan saat muncul dialog terakhir tekan tombol _ENTER_

Dan umtuk menerapkannya.

```bash
source ~/.zshrc
```

![zsh options](https://3.bp.blogspot.com/-E_KX5O_6isg/XvNj8MNr_bI/AAAAAAAAE0Y/bofFUpiprgQj_QJ59WlaSSl74lsqrY5BQCLcBGAsYHQ/s1600/Screenshot_2020-06-24_21-31-50.png)
