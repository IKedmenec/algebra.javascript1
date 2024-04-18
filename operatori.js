var x = 'Lorem ipsum',
    y = 2345,
    z = '2345',
    q = false,
    w = true;

var trueFalse = q;

console.log ('trueFalse=' + trueFalse)

/* if (trueFalse) {
    console.log ( 'q = ' + trueFalse)
}*/

/* if (trueFalse === true) {
    console.log ('1. q = ' + trueFalse);
}

if (trueFalse != 'true') {
    console.log ('2. q = ' + trueFalse);
} */

if (q && w) {
    console.log ('q i w su true');
} else {
    console.log('jedan od q ili w nije true')
}

console.log('ostatak pri cjelobrojnom dijeljenju od 9/2 =' + (9 % 2));
console.log('ostatak pri cjelobrojnom dijeljenju od 5/2 =' + (5 % 2));

if (9 % 2 === 0 && 5 % 2 === 0) {
    console.log('ostatak pro cjelobrojnom dijelenju je 0')
} else {
    console.log('ostatak pri cjelobrojnom dijeljenju NIJE 0')
}


/// Parni brojevi

var nj = 0;
for (i = 0; i <=10; i++) {
    if (i=== 0) {
        continue;
    }
    if (i % 2 === 0) {
        console.log('Broj ' + i + ' je paran');
    }
}

/// Neparni brojevi

var nj = 0;
for (i = 0; i <=10; i++) {
    if (i=== 0) {
        continue;
    }
    if (i % 2 !== 0) {
        console.log('Broj ' + i + ' je paran');
    }
}