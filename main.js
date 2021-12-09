var g1 = [];
var g2 = [];
var g3 = [];
var g4 = [];
var g5 = [];

var n1 = 0;
var n2 = 0;
var n3 = 0;
var n4 = 0;
var n5 = 0;


var pool = [" Hasan"," Samuel"," Luca", " Kylie", " Harry N", " Jessica", " Eleanor", " Hugo", " Jennifer", " Natalia", " Aaminah", " Ahsan", " Helin", " Khabab", " Emily", " Clara", " Phoebe", " Matthew", " Amelia", " Lily", " Jasmine", " Sara", " Ari", " Hilde", " Nadav", " Storm", " Harry W", " Isaac", " Jakub", " Raphie"];

function randomiser() {
    for (i = 0; i < pool.length; i++) {
        switch (Math.round((Math.random() * 4) + 1)) {
            case 1:
                if (n1 != 7) {
                    g1.push(pool[1])
                    pool.shift()
                    n1++
                }
                break
            case 2:
                if (n2 != 7) {
                    g2.push(pool[1])
                    pool.shift()
                    n2++
                }
                break
            case 3:
                if (n3 != 7) {
                    g3.push(pool[1])
                    pool.shift()
                    n3++
                }
                break
            case 4:
                if (n4 != 7) {
                    g4.push(pool[1])
                    pool.shift()
                    n4++
                }
                break
            case 5:
                if (n5 != 7) {
                    g5.push(pool[1])
                    pool.shift()
                    n5++
                }
                break
        }

    }

}
predone = false

function begin() {
    if (predone == false) {
        while (pool.length != 0) {
            randomiser()
        }
        document.getElementById("g1").innerHTML += g1
        document.getElementById("g2").innerHTML += g2
        document.getElementById("g3").innerHTML += g3
        document.getElementById("g4").innerHTML += g4
        document.getElementById("g5").innerHTML += g5
        predone = true
    }
}