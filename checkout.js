//checkout.js
function hitungCheckout(price, qty, memberStat){
	let subtotal;
	let total;
	if(price<=0 || qty<=0 || qty%1 != 0){

		return "Input Tidak Valid", false;
	}
	subtotal = price * qty;

	if(memberStat==true){
		total = subtotal * 0.9;
	}
	else {
		total = subtotal;
	}

	if(total<250000){
		total = total + 25000;
	}

	return total;
}

/*
//skenario 1: Member
let skenario1 = hitungCheckout(300000, 1, true);
//skenario 2: Non-member
let skenario2 = hitungCheckout(300000, 1, false);
//skenario 3: Total di bawah Rp250.000
let skenario3 = hitungCheckout(100000, 2, false);
//skenario 4: Tepat Rp250.000
let skenario4 = hitungCheckout(250000, 1, false);
//skenario 5: Di atas Rp250.000
let skenario5 = hitungCheckout(200000, 2, false);
//skenario 6: Jumlah 0
let skenario6 = hitungCheckout(100000, 0, false);
//skenario 7: Jumlah pecahan
let skenario7 = hitungCheckout(100000, 1.5, false);
//skenario 8: Harga tidak valid
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
]

//cetak semua hasil
for (i=0; i<8; i++){
	console.log("Skenario " + (i+1) + " Total: " + allSken[i]);
}

*/ 