# Assignment Day 14: Case study flowchart, pseudocode, dan JavaScript

Nama: Joseph Marcell Gultom

## Deskripsi case study

Tugas ini membuat alur perhitungan total belanja (checkout) dalam bentuk flowchart, pseudocode, dan fungsi JavaScript `hitungCheckout(price, qty, memberStat)`.

Fungsi menerima tiga parameter: harga satuan produk (`price`), jumlah barang (`qty`), dan status keanggotaan pembeli (`memberStat` bernilai `true` atau `false`).

Sebelum menghitung harga, program memeriksa apakah harga dan jumlah barang bernilai positif serta memastikan jumlah barang bukan pecahan (`qty % 1 != 0`). Jika salah satu syarat tidak terpenuhi, program menampilkan pesan `"Input Tidak Valid"` dan berhenti.

Jika input valid, program menghitung subtotal (`price * qty`). Pembeli yang berstatus member mendapat potongan 10% sehingga total menjadi 90% dari subtotal, sedangkan non-member membayar sesuai subtotal. Setelah itu, jika nilai total masih di bawah Rp250.000, program menambahkan ongkos kirim Rp25.000. Belanja dengan total Rp250.000 ke atas tidak dikenakan ongkos kirim.

## Daftar file

- `analysis.md`: tahapan logika penyelesaian masalah.
- `pseudocode.md`: alur algoritma dalam pseudocode.
- `flowchart.png` dan `flowchart.svg`: diagram alir program.
- `checkout.js`: implementasi fungsi `hitungCheckout` di JavaScript.
- `testing.md`: delapan skenario pengujian beserta kodenya.

## Cara menjalankan program

Pastikan Node.js sudah terpasang di komputer (`node -v`).

1. Buka terminal di folder tugas ini.
2. Jika bagian pengujian di `checkout.js` masih ditutup komentar (`/* ... */`), hapus tanda komentar tersebut terlebih dahulu.
3. Jalankan perintah berikut:

```bash
node checkout.js
```

## Penggunaan AI

- Pembuatan README.md dan merapihkan .md 
