var niz = [ 'a', 'b', 'c', 'd'];
var prazanNiz = []
console.log(niz);
console.log(typeof niz);

for (i = 0; i<niz.length; i++) {
    console.log('1. element na poziciji [' + i + '] =' + prazanNiz [i]);
}

var i = 0;
do {
    console.log('2. element na poziciji [' + i + '] =' + prazanNiz [i]);
    i++;
} while (i < prazanNiz.length);