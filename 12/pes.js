// toto barz nerobte
// alert('ty kon');

// toto tiez nerobte
// document.write('ty kon');

/* viac riadkovy
komentar ako v css */

var kolobeziek = 7;

console.log('Servus, jak sa mas? Kolobeziek je: ' + kolobeziek);

var pes = {
    typ: 'Podengo',
    stav: 'Fúzatý',
    vek: '7',
    hmotnosť: 'Priveľa',
    nalada: 'Švihnutý',
    vratVek: function () {
        return 'Mám ' + pes.vek + ' rokov. Haf!';
    },
    zostarni: function () {
        pes.vek++;
        return 'Hotovo';
    },
    podSem: function () {
        return pes;
    }
}

console.log(pes.vratVek());
console.log(pes.zostarni());
console.log(pes.vratVek());

var cena = 55;
kolobeziek = 22;

function vyratajCenuPoZlave(kolobeziek) {
    if (kolobeziek > 20) {
        cena = 25;
    } else if(kolobeziek > 10) {
        cena = 39;
    } else {
        cena = 55;
    }
    return cena;
}

console.log(cena);