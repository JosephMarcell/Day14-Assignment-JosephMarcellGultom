# Analisis masalah

Pada soal ini terdapat tiga input yang dimasukkan ke parameter fungsi `hitungCheckout(price, qty, memberStat)`:
- harga produk (`price`, bertipe `number`)
- jumlah produk (`qty`, bertipe `number`)
- status member (`memberStat`, bertipe `boolean`)

## Tahapan algoritma

1. Validasi input
   - Cek apakah harga produk bernilai positif dan jumlah produk merupakan bilangan bulat positif.
   - Jika ya, lanjutkan perhitungan.
   - Jika tidak, tampilkan `"Input Tidak Valid"` lalu hentikan proses.

2. Hitung subtotal dasar
   - Hitung `subtotal = harga_produk * jumlah_produk`.

3. Cek status membership
   - Jika member (`true`), beri diskon 10% sehingga `total = subtotal * 0.9`.
   - Jika bukan member (`false`), `total = subtotal`.

4. Cek batas ongkos kirim
   - Jika `total` kurang dari Rp250.000, tambahkan ongkir Rp25.000.
   - Jika Rp250.000 atau lebih, ongkir Rp0.

5. Keluarkan hasil
   - Kembalikan nilai `total`.
