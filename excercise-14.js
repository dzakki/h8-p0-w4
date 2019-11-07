function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];

    let usersTrip = [
        // 
    ]

    for (let i = 0; i < arrPenumpang.length; i++) {
        let objTemp = {}
        let indexRute = {}
        objTemp.penumpang = arrPenumpang[i][0]
        objTemp.naikDari = arrPenumpang[i][1]
        objTemp.tujuan = arrPenumpang[i][2]
        for (let j = 0; j < rute.length; j++) {
            if (objTemp.naikDari == rute[j]) {
                indexRute.naikDari = j+1
            }
            if (objTemp.tujuan == rute[j]) {
                indexRute.tujuan = j+1
            }
        }
        objTemp.bayar = (indexRute.tujuan - indexRute.naikDari) * 2000
        usersTrip.push(objTemp)
    }

    return usersTrip

}
  
  //TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]