# Pseudocode

```text
START

INPUT 
    harga_produk,
    jumlah_produk,
    status_member

// Validasi input
IF harga_produk <= 0 OR jumlah_produk <= 0 OR jumlah_produk % 1 != 0
    OUTPUT "Input Tidak Valid"
    END

// Subtotal
subtotal = harga_produk * jumlah_produk

IF member == true
    total = subtotal * 0.9
ELSE 
    total = subtotal

IF total < 250000 
    ongkir = 25000
    total = total + ongkir

OUTPUT total

END
```
