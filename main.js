let g1 = [];
let g2 = [];
let g3 = [];
let g4 = [];
let g5 = [];

let n1 = 0;
let n2 = 0;
let n3 = 0;
let n4 = 0;
let n5 = 0;


let pool = ["Wiktoria", " Luca", " Harry N", " Samuel", " Kylie", " Hasan", " Jessica", " Eleanor", " Hugo", " Jennifer", " Natalia", " Aaminah", " Ahsan", " Helin", " Khabab", " Emily", " Clara", " Phoebe", " Matthew", " Amelia", " Lily", " Jasmine", " Sara", " Ari", " Nadav", " Storm", " Harry W", " Isaac", " Jakub", " Raphie"];
const backup = ["Wiktoria", " Luca", " Harry N", " Samuel", " Kylie", " Hasan", " Jessica", " Eleanor", " Hugo", " Jennifer", " Natalia", " Aaminah", " Ahsan", " Helin", " Khabab", " Emily", " Clara", " Phoebe", " Matthew", " Amelia", " Lily", " Jasmine", " Sara", " Ari", " Nadav", " Storm", " Harry W", " Isaac", " Jakub", " Raphie"];

function randomiser() {
    for (i = 0; i < 30; i++) {
        switch (Math.floor((Math.random() * 5) + 1)) {
            case 1:
                if (n1 != 6) {
                    g1.push(pool[0])
                    pool.shift()
                    n1++
                }
                break
            case 2:
                if (n2 != 6) {
                    g2.push(pool[0])
                    pool.shift()
                    n2++
                }
                break
            case 3:
                if (n3 != 6) {
                    g3.push(pool[0])
                    pool.shift()
                    n3++
                }
                break
            case 4:
                if (n4 != 6) {
                    g4.push(pool[0])
                    pool.shift()
                    n4++
                }
                break
            case 5:
                if (n5 != 6) {
                    g5.push(pool[0])
                    pool.shift()
                    n5++
                }
                break
                //console.log(Math.round((Math.random() * 4) + 1))
        }

    }

}
predone = false

function begin() {
    if (predone == true) {
        location.reload()
    }
    if (predone == false) {
        while (pool.length != 0) {
            randomiser()
        }
        //document.getElementById("g1").innerHTML += g1
        //document.getElementById("g2").innerHTML += g2
        //document.getElementById("g3").innerHTML += g3
        //document.getElementById("g4").innerHTML += g4
        //document.getElementById("g5").innerHTML += g5
        const table = document.getElementById("table")
        let data = ``;
        for (i = 0; i < 5; i++) {
            cur = i == 0 ? g1 : i == 1 ? g2 : i == 2 ? g3 : i == 3 ? g4 : g5
            if (cur.length == 6) {
                data += `<tr><td>Group ${i+1}</td><td>${cur[0]}</td><td>${cur[1]}</td><td>${cur[2]}</td><td>${cur[3]}</td><td>${cur[4]}</td><td>${cur[5]}</td> <td></td></tr>`
            } else {
                data += `<tr><td>Group ${i+1}</td><td>${cur[0]}</td><td>${cur[1]}</td><td>${cur[2]}</td><td>${cur[3]}</td><td>${cur[4]}</td><td>${cur[5]}</td><td>${cur[6]}</td></tr>`
            }

        }
        table.innerHTML += data
        predone = true

        document.getElementById("nameGetter").style.left = "70%"
            //<tr><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td></tr>
    }
}

function gathername() {
    return document.getElementById("grpselect").value
}

function genName() {
    const group = gathername()
    const result = document.getElementById("result")

    result.innerHTML = group == 0 ? "Please select a group" :
        group == 1 ? g1[Math.floor(Math.random() * 6)] :
        group == 2 ? g2[Math.floor(Math.random() * 5)] :
        group == 3 ? g3[Math.floor(Math.random() * 5)] :
        group == 4 ? g4[Math.floor(Math.random() * 5)] :
        group == 5 ? g5[Math.floor(Math.random() * 5)] :
        group == 6 ? backup[Math.floor(Math.random() * 30)] : "Error"

}
