# BELAJAR_NODE.JS
* 🧑‍💻 Wildan Setya Nugraha
* 🪑 2A-D3 Teknik Informatika
* 🏫 Politeknik Negeri Bandung
## Node.Js

Node.Js ini jika menurut saya pribadi merupakan sebuah platform yang sering dikaitkan dan dijalankan menggunakan
JavaScript di luar browser atau dengan kata lain bahasa JavaScript dapat dijalankan juga pada sisi server. 

Kita tahu bahwasannya
JavaScript ini hanya dapat dijalankannya tuh terbatas yaitu pada sisi client saja atau bagaimana sebuah website itu dapat interaktif agar website tersebut terlihat hidup dan menarik dari sisi pengguna websitenya.
Berbeda halnya dengan Node.Js, Node.Js ini akan mengeksekusi JavaScript sebelum website tersebut tampil di browser. 

Dalam pembelajaran kali ini, saya belajar bagaimana cara menggunakan Node.Js dengan dibagi beberapa section untuk pembelajarannya.

* ## Section_2
Pada section_2 ini saya belajar:
- Apa itu Node.Js
- Cara menginstall Node.Js
- Cara menjalankan script Node.Js  

  *Menjalankan Node.Js ini, hanya tinggal menuliskan perintah node [nama_file.js] pada terminal*

* ## Section_3
Pada section_3 ini saya belajar bagaimana import modul/library:
- Modul yang sudah disedikan oleh Node.Js itu sendiri
- Modul yang kita sediakan sendiri atau yang dari lokal kita
- Modul third party atau NPM (Node Package Manager)

Nah untuk mengimport modul kita gunakan syntax yaitu *'require(modul)'* yang disimpan pada sebuah variabel. 
Bagi modul yang disediakan sendiri atau dari lokal kita perlu memasukkan path dari modul itu.

Bagi dari NPM kita perlu menginstallnya di terminal, yaitu dengan cara: 
- Menginisialisasinya terlebih dahulu dengan menuliskan perintah *npm init*. Setelah itu, pasti akan terdapat file *package.json*
- Tinggal menginstallnya dengan cara menuliskan perintah juga pada termintal, yaitu *npm install nama_modul*. Setelah terinstall maka akan ada di depedencies di file *package.json* 


* ## Section_4
Pada section_4, saya belajar bagaimana cara memanipulasi file dengan perintah-perintah yang ada.
- (Lesson_2) Belajar bagaimana mengambil inputan dari Users pada terminal menggunakan *process.argv*. 
- (Lesson_3 & Lesson_4) Belajar parsing menggunakan modul Yargs.
- (Lesson_5) Mengubah JavaScript Object ke JSON ataupun sebaliknya.
- (Lesson_8, Lesson_9) Tentang Arrow Functions.
- (Lesson_11) Membaca sebuah note menggunakan arrow functions.

* ## Section_5
Pada section_5, saya belajar mendebug di Node.Js menggunakan perintah *node inspect [name_file.js]*

* ## Section_6
Pada section_6 ini saya belajar:
- (Lesson_2) Dasar Asynchronous

Asynchronous ini adalah ketika kode aysnchronous berjalan, maka tidak akan menunggu untuk dieksekusi terlebih dahulu sehingga akan lanjut ke kode selanjutnya. Hal ini sangat berguna ketika kita mengambil sebuah data yang banyak tapi kita tidak harus menunggu terlebih dahulu sampai data yang banyak tersebut selesai dieksekusi.

- (Lesson_4, Lesson_5, Lesson_6) Membuat HTTP Request

Bagaimana cara dapat berkomunikasi dengan berbagai API dan server, seperti meminta data ke server dan server akan mengirimkan responnya. Ini kita dapat lakukan dengan menggunakan modul npm yaitu npm request

- (Lesson_7) Handling Errors

Cara kita menghandle ketika kita meminta/request ke server, namun server gagal untuk meresponnya. Atau bisa jadi hal yang diminta tidak terdapat di server itu sendiri. Nah makanya diperlukanlah yang namanya Error Handling agar ketika error terjadi program tidak berhenti.

- (Lesson_8, Lesson_9, Lesson_10, Lesson_11) Callback

Callback Function ini merupakan function yang berada sebagai parameter function lain dan kemudian dieksekusi oleh function yang membungkusnya.

- (Lesson_12, Lesson_13) Destructing Object

Bagaimana memecah objek ke dalam yang bentuk lebih simpel, seperti:

const users = {
  
  name: 'Wildan',
  
  age: 19
 
 }
 
ketika dengan cara biasa untuk mengambil value dengan key name dari objek users maka kita perlu melakukan

*users.name*

dan jika banyak yang harus kita ambil value nya, itu sangat merepotkan, sehinggga kita bisa memecahnya dengan cara

{ name, age } = users

perlu diingat variabel yang akan diisi oleh value dari objek itu harus sama dengan key yang ada di objeknya.

* ## Section_7_I
Pada section_7 awal ini belajar tentang web server.

Web Server ini adalah layanan untuk menerima permintaan HTTP atau HTTPS dari pengguna web browser. Selanjutnya web server ini akan mengirimkan respon permintaan tersebut kepada client dalam bentuk halaman web.

Dalam hal ini kita menggunakan framework yaitu express

ada beberapa poin penting menurut saya dalam web server ini, yaitu:
- app.get ====== get disini adalah method ketika klien meminta, lalu web server akan mengirimkan sesuatu kepada klien tersebut
- app.listen ==== web server ini berjalan pada port berapa
- Dalam hal ini kita juga dapat mengirimkan kepada klien dalam bentuk html, css, images, ataupun lainnya.
- __dirname === path atau alamat dari file program yang sedang dieksekusi

* ## Section_7_II
belajar memanipulasi query string browser, sehingga kita dapat memberikan data kepada klien berdasarkan parameter yang diberikan oleh klien di URL browsernya

* ## Section_7_III
Pada section_7_III ini saya belajar cara mendeploy application.

Deploy ini maksudnya bagaimana Node.js application ini dapat dilihat atau dapat berinteraksi dengan semua orang, salah satu media deploy yaitu GitHub ataupun Heroku


