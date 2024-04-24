var names = ['Jane', 'John', 'Bob',, 'Mike'];

/*
1. Pomocu petlje napravite iteraciju kroz niz i ispisite u konzolu sve elemente.
2. Dodajte svoje ime na kraj niza.
3. Koristeci petlju, napravite iteraciju kroz ovaj niz te nakon sto ispisite "Jane" izađite iz petlje.
4. Napisite naredbu za uklanjanje undefied vrijednost iz niza.
5. Sortirajte niz abecedno.
6. Ispisite ga.
*/


// zbroji se clanove niza

//1 Prvi nacin
for(var i = 0; i < names.length; i++);

//1.1  Drugi nacin
for (var myName of names) {
    console.log(myName);
}

//2 Prvi Nacin --> u ovom slucaju moramo znati da cemo postavit ime na index 5
//names[5] = 'Ivan'

//2.2 Drugi Nacin --> koristimo funkciju koja stavlja na kraju niza
names.push('Ivan');

//2.3 Treci Nacin --> --> u ovom slucaju stavljamo na najveci moguci index na definiranom nizu (names.lenght)
//names[names.lenght] = 'Ivan'

//3
for (var myName of names) {
    console.log(myName);
    if (myName === 'Jane') {
        break;
    }
}

//4
var noviNiz = [];
for (var myName of names) {
    if (myName === undefined) {
        continue;
    }
    noviNiz.push(myName);
}

console.log(noviNiz.join());

//4.2
for (var i = 0; i < names.length; i++) {
    if (names[i] === undefined) {
        names.splice(i, 1);
    }
}

console.log('spliced --> ' + names.join());

//5
names.sort();

//6
console.log(names.join());


var brojcaniNiz = [1, 2, , 3, 4, ,5, 'test', [1, 2, 3], 6, 7];

var suma = 0;
for (var x = 0; x < brojcaniNiz.length; x++) {
    if (typeof brojcaniNiz[x] != 'number') {
        console.log('Element na indexu ' + x + ' nije broj pa ga preskacemo nego je = ' + typeof brojcaniNiz[x]);
        continue;
    }
    suma += brojcaniNiz[x];
}


console.log('suma' + suma);

var imena = ['prvo', 'drugo', 'trece'];
console.log(imena.join());
imena[1] = 'peto' ;
console.log(imena.join());



var elementi = ['ime', 'prezime', 'godine'];
//ime, prezime, godine

var ispisi = '';
for (var element of elementi) {
    ispisi += element + ',';
}
console.log(ispisi);

ispisi = '';
for (var i = 0; i < elementi.length; i++) {
    if (i == elementi.length - 1) {
        ispisi += elementi[i];
        // break;
    } else {
        ispisi += elementi[i] + ',';
    }
}
console.log(ispisi);
