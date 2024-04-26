 function ispisi(unos) {
    console.log('DEBUG: ----->' + unos);
}


ispisi('nesto ispisi na konzolu'); 

/* 
1. Napisite JavaScript funkciju koja prihvaca zadani niz kao parametar i pronalazi najduzu rijec unutar niza
2.
3.
*/

var myNiz = ['ime', 'prezime', 'godine', 'broj cipela', 'itd'];

function pronadjiNajduzuRijec (niz) {
    var najduzaRijec = '';
    //
    // for petlja za trazenje najduze rijeci

    var duljina = 0;
    for (var ime of niz) {
        if (ime.length > duljina) {
            duljina = ime.length;
            najduzaRijec = ime;
        }

    }

    return najduzaRijec;
}
    // 2

    var najduzaRijec = pronadjiNajduzuRijec(myNiz);

    // 3 

    console.log('najduza rijec: ' + najduzaRijec);




    function getMax(a, b) {
        //let retVal;
        if (typeof a !== 'number' || typeof b !== 'number') {
            return 'error';
        }
        return a + b;
    }

    function sumiraj (a, b) {return a * b};
    console.log(sumiraj('2', 3));

    var prvi = sumiraj (3, 3);
    var drugi = sumiraj (5, 5);
    if (prvi !== 'error' && drugi !== 'error') {
        var dvaPutaSuma = prvi * drugi;
        console.log(dvaPutaSuma);
    } else {
        console.log('ne mogu ti izracunati');
    }


       /* if (a===b) {
            return a; // vrati prvi odnosno "a"
        }

        if (a < b) {
            return a;
        }
        return b; */

        /*
        if (a > b ) {
            retVal = a;
        } else if (b > a) {
            retVal = b;
        } else if (a === b) {
            retVal = a; // vrati prvi, odnosno "a"
        }
        return retVal;
    }
}*/

/* console.log('Veci broj je: ' + getMax(5, 2));

function sumiraj(a, b) {
    return a + b;
}
console.log(sumiraj('2', 3));*/

function pomnozi(a, b) {
    return a * b;
}

var dvaPutaSuma = sumiraj ('3', 3) * sumiraj ('5', 5);

var izracun = pomnozi (2, 3) * pomnozi(8, 9) + pomnozi (2, 2)
console.log(izracun);

//djeljenje s nulom

function podijeli(a, b) {
    if(b==0){
        console.log ('dijeljenje s nulom nije defenirano');
        return 'error';
    } 
    return a / b;
}

var dijeljeno = podijeli(12, 0);
console.log('rezultat dijeljenja: ' + dijeljeno); 