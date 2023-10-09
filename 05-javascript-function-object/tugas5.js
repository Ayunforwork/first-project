//soal1
function cetakFunction() {
    return "Hallo Nama Saya Ai Yuni Fitriani";
}

console.log(cetakFunction());

//soal 2
function myFunction(a, b) {
    return a + b;
}

let angka1 = 20
let angka2 = 7
let output = myFunction(angka1, angka2)
console.log(output);

//soal 3
let Hello = "";

Hello = () => {
    return "Hello";
}

console.log(Hello());

//soal 4
let obj = {
    nama: "john",
    umur: 22,
    bahasa: "indonesia"
}

console.log(obj.bahasa);

//soal 5
 let arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku", 1992]
let objDaftarPeserta = {
    nama: arrayDaftarPeserta[0],
    "jenis kelamin": arrayDaftarPeserta[1],
    hobi: arrayDaftarPeserta[2],
    "tahun lahir": arrayDaftarPeserta[3],
}

console.log(objDaftarPeserta);

//soal 6
var buah = [
    {
        nama: "nanas",
        warna: "kuning",
        adaBijinya: false,
        harga: 9000,
    },
    {
        nama: "jeruk",
        warna: "orange",
        adaBijinya: true,
        harga: 8000
    },
    {
        nama: "semangka",
        warna: "hijsu dan merah",
        adaBijinya: false,
        harga: 10000
    },
    {
        nama: "pisang",
        warna: "kuning",
        adaBijinya: false,
        harga: 5000
    }
];

var arrayBuahFilter = buah.filter(function (buah) {
    return buah.adaBijinya != true;
})

console.log(arrayBuahFilter);

//soal7
let phone = {
    name: "Galaxy Note 20",
    brand: "Samsung",
    year: 2020
}

const {name, brand, year} = phone

console.log(name, brand, year)

//soal 8
let dataBukuTambahan = {
    penulis:"john doe",
    tahunTerbit: 2020
}

let buku = {
    nama: "pemrograman dasar",
    jumlahHalaman: 172
}

let objOutput = {...dataBukuTambahan, ...buku};


console.log(objOutput);

//soal 9
let mobil = {
    merk: "bmw",
    color: "red",
    year: 2002
}

const functionObject = (param) => {
    return param
}

console.log(functionObject(mobil))