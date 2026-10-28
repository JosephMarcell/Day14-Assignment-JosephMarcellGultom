# Pengujian program

Pengujian fungsi `hitungCheckout(price, qty, memberStat)` dilakukan pada delapan skenario:

| No | Skenario | Input | Hasil yang diharapkan |
| :-: | :--- | :--- | :--- |
| 1 | Member | `(300000, 1, true)` | `270000` (diskon 10%, gratis ongkir) |
| 2 | Non-member | `(300000, 1, false)` | `300000` (tanpa diskon, gratis ongkir) |
| 3 | Total di bawah Rp250.000 | `(100000, 2, false)` | `225000` (subtotal 200.000 + ongkir 25.000) |
| 4 | Tepat Rp250.000 | `(250000, 1, false)` | `250000` (gratis ongkir) |
| 5 | Di atas Rp250.000 | `(200000, 2, false)` | `400000` (gratis ongkir) |
| 6 | Jumlah 0 | `(100000, 0, false)` | `"Input Tidak Valid"` / `false` |
| 7 | Jumlah pecahan | `(100000, 1.5, false)` | `"Input Tidak Valid"` / `false` |
| 8 | Harga tidak valid | `(-50000, 1, false)` | `"Input Tidak Valid"` / `false` |

## Kode pengujian

```javascript
// Skenario 1: Member
let skenario1 = hitungCheckout(300000, 1, true);

// Skenario 2: Non-member
let skenario2 = hitungCheckout(300000, 1, false);

// Skenario 3: Total di bawah Rp250.000
let skenario3 = hitungCheckout(100000, 2, false);

// Skenario 4: Tepat Rp250.000
let skenario4 = hitungCheckout(250000, 1, false);

// Skenario 5: Di atas Rp250.000
let skenario5 = hitungCheckout(200000, 2, false);

// Skenario 6: Jumlah 0
let skenario6 = hitungCheckout(100000, 0, false);

// Skenario 7: Jumlah pecahan
let skenario7 = hitungCheckout(100000, 1.5, false);

// Skenario 8: Harga tidak valid
let skenario8 = hitungCheckout(-50000, 1, false);

let allSken = [
    skenario1,
    skenario2,
    skenario3,
    skenario4,
    skenario5,
    skenario6,
    skenario7,
    skenario8,
];

// Cetak semua hasil
for (let i = 0; i < 8; i++) {
    console.log("Skenario " + (i + 1) + " Total: " + allSken[i]);
}
```
