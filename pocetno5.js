var myString = '   Lorem ipsum sit amet ipsum ';
console.log(myString)
var duljina = myString.length 
console.log('Duljina teksta je: ' + duljina + ' znakova');
console.log(typeof duljina); 
console.log('Znam na mjestu 12 je: ' + myString.charAt(12));
console.log(myString.trim());

console.log(myString.indexOf('ipsum'));
console.log(myString.replace('ipsum', 'novi moj string'));
console.log(myString.replaceAll('ipsum', 'novi moj string'));
console.log(myString.toUpperCase())

