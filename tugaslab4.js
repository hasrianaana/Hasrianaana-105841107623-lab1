let nilaiMahasiswaHasriana = [90, 80, 75, 95, 85];
nilaiMahasiswaHasriana.map((nilai, index) => {
    console.log("nilai Mahasiswa ke " + index + " adalah " + nilai);
});

//game check jodoh
let namaCewek = Ridha;
let namaCowok = Akbar;
let hasil = Math.floor(Math.random() * 71) + 30;
if (hasil >= 80){
    document.write("selamat " + namaCewek + " dan " + namaCowok + " adalah jodoh sejati");
} else if (hasil >= 70) {
    document.write("selamat " + namaCewek + " dan " + namaCowok + " adalah yang di sengajai");
}else if (hasil >= 60){
    document.write("selamat " + namaCewek + " dan " + namaCowok + " adalah jodoh yang palsu");
}else {
    document.write("maaf " + namaCewek + " dan " + namaCowok + " tidak jodoh ");
}