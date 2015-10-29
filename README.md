# OSNOVA 3-mesačného kurzu WEB DESIGNER

### Obsah
#### HTML/CSS

- [1. hodina](#1) &#10004;
- [2. hodina](#2) &#10004;
- [3. hodina](#3) &#10004;
- [4. hodina](#4) &#10004;
- [5. hodina](#5) &#10004;
- [6. hodina](#6) &#10004; 
- [7. hodina](#7) &#10004;

#### Responzívny web dizajn

- [8. hodina](#8) &#10004; 
- [9. hodina](#9) &#10004;
- [10. hodina](#10) **&#8592; tu sme** 
- [11. hodina](#11)

#### JavaScript a jQuery

- [12. hodina](#12)
- [13. hodina](#13)
- [14. hodina](#14)
- [15. hodina](#15)
- [16. hodina](#16)
- [17. hodina](#17)
- [18. hodina](#18)
- [19. hodina](#19)
- [20. hodina](#20) 
- [21. hodina](#21)
- [22. hodina](#22)
- [23. hodina](#23) 
- [24. hodina](#24) 

## Modul 1: HTML/CSS

### <a name="1">1. hodina</a>

- Icebreaker (Ako sa volate, co robite, preco ste tu?) (15min)
- Prehlad znalosti o webe (5min)
- [Kniha](html-css-handbook.pdf)
- Intro do tvorby webu (30min)
    - webovy prehliadac
    - textovy editor
    - web hosting
    - server
    - IP adresa
    - domena
- Instalacia editora (20min)
- HTML (15min)
    - znackovaci jazyk
    - tagy
    - parove a neparove
- HTML tagy (z knihy) (40min)
- zadanie/domaca uloha a koniec:
    - Vytvor svoju personal webstránku, ktorá bude obsahovať tagy: h1, p, div, span, a.
- narocnejsia domaca uloha:
    - Najst a pouzit (spravne) HTML tagy, ktore sme nespominali. Najst nejake stare tagy, ktore sa uz nepouzivaju a vyskusat ich. Preco sa nepouzivaju?

### <a name="2">2. hodina</a>

Štruktúra webstránky:
- header
- section
- aside
- article
- footer
- nav

Ostatne HTML tagy:
 - table, tr, td, thead, tbody
 - frame, frameset (nepouzivat)
 - iframe
 - dl dt

Hyperlinky
- relatívna vs. absolútna cesta
- mailto
- otváranie liniek v novom okne
- on-page linky

Intro do CSS: 

- CSS súbor
- Syntax CSS
- Triedy a IDs

Zadanie/domáca úloha:
- Rozsirit svoju stranku o tagy HTML5 struktury, hyperlinky a CSS sa pouzitia roznych vlastnosti

### <a name="3">3. hodina</a>

CSS vlastnosti:
- multitriedy
- hromadná deklarácia
- kontextová deklarácia
- kaskádovosť (prednastavené vlastnosti, dedičnosť, kaskáda)
- jednotky v css (vela)

Ďalšie experimentovanie s CSS ([materiál](3/selektory.zip)):
- pseudo triedy (:hover, kdekoľvek v pravidle)
- pseudo elementy (::first-letter, iba na konci v pravidle)
    - [vraj všetky](http://www.w3schools.com/css/css_pseudo_elements.asp)
    - [tu ich je ešte viac](http://css-tricks.com/almanac/)
    - [finty](http://css-tricks.com/pseudo-element-roundup/)
- dalšie selektory
    - hviezdička
    - priama nadradenosť (zobáčik) >
    - susedstvo +
    - atribút []
    - [pár ďalších](http://code.tutsplus.com/tutorials/the-30-css-selectors-you-must-memorize--net-16048)

Developerské tooly
- inspect element
- firebug

CSS vlastnosti na dnes:

- color (:
- font-size (px alebo em)
- margin (vonkajší okraj)
- padding (vnútorný okraj)
- border (rámček)
- width (šírka)
- height (výška)
- background (farba pozadia a spol.)
- display (spôsob zobrazenia)
- float (plávanie)

**Zadanie/domáca úloha:**
- doplniť do svojej stránky stlpce (box model + float)

### <a name="4">4. hodina</a>

Box model
- príklad
- preskúmanie cez inspect element
- ten druhý model + [rozdiely, úvaha, možnosť prepnúť to cez box-sizing](http://css-tricks.com/box-sizing/) + [Paul Irish](http://www.paulirish.com/2012/box-sizing-border-box-ftw/)

Pozicovanie pomocou
- [float](http://css-tricks.com/all-about-floats/)
- [inline block](http://css-tricks.com/almanac/properties/d/display/)

Trochu viac o vlastnostiach:

* margin
* padding
* border
* background
* text-align

**Zadanie:**

* Vytvoriť stránku s hlavičkou, pätičkou, dvoma stĺpcami s obsahom.
* Stránka nech obsahuje text, nadpisy, odkazy a aspoň jeden vložený obrázok.
* Použite CSS na vytvorenie vlastného jednoduchého dizajnu.

### <a name="5">5. hodina</a>

Práca s textom a typografia:

- farba textu
- [font-family](https://css-tricks.com/almanac/properties/f/font-family/), [font-size](https://css-tricks.com/almanac/properties/f/font-size/)
- [text align](https://css-tricks.com/almanac/properties/t/text-align/)
- [text decoration](https://css-tricks.com/almanac/properties/t/text-decoration/)
- [text transform](https://css-tricks.com/almanac/properties/t/text-transform/)
- [text shadow](https://css-tricks.com/almanac/properties/t/text-shadow/)
- [box shadow](https://css-tricks.com/almanac/properties/b/box-shadow/)

Ako používať shadows bez toho, aby ste ubližovali ľudom (a mnoho iného):

- [7 Rules for Creating Gorgeous UI (Part 1 + 2)](https://medium.com/@erikdkennedy/7-rules-for-creating-gorgeous-ui-part-1-559d4e805cda)
- [Google Material Design](https://design.google.com/resources/)

Používanie web-safe fontov

Embedovanie web fontov

* [na stiahnutie - dafont.com](http://www.dafont.com/)
* [Google Web Fonts](https://www.google.com/fonts)

Citácie

- cite, blockquote, q

Zadanie:

* [Takéto niečo.](5/ramcek.png)

### <a name="6">6. hodina</a>

**Formuláre!**

- form
- input
    * atribút name
    * atribút value
    * atribút type
        * text
        * hidden
        * password
        * file
        * radio
        * checkbox
        * multiple
- textarea (rows, cols)
- button, submit
- select, option
- label
- placeholder
- disabled
- readonly

**Zadanie:**

1. Použite päť rôznych formulárových elementov a odošlite ich cez POST alebo GET na túto adresu:
    * [http://www.matusmarcin.com/learn2code/form.php](http://www.matusmarcin.com/learn2code/form.php)

2. [HTML a CSS formulára](5/zadanie5.png)

* Práca s FTP

### <a name="7">7. hodina</a>

* Zadanie: CSS stránky so stĺpcami ([HTML tu](http://www.matusmarcin.com/learn2code/site.html))
* [**Komplet zadanie tu**](6/lekcia6zadanie.zip)

* Práca s FTP

## Modul 2: Responzívny wed dizajn (RWD)

### <a name="8">8. hodina</a>

* Responzívny dizajn - úvod
* Pohľad do histórie
* Fluid vs Adaptive vs RWD

Úloha 1:
* Fluix layout pre zadanie z minulej hodiny

Hlavné aspekty RWD:
* metatag viewport
* CSS media queries
* min-width a max-width
* responzívne obrázky
* responzívne videá
* testovanie responzívneho dizajnu

Úloha 2:
* Príklad z knihy, strana 71

[Bežné media queries](http://css-tricks.com/snippets/css/media-queries-for-standard-devices/)

Úloha 3:
* Prispôsobiť zadanie z minulej hodiny
    * Ak je šírka menšia ako 480px nezobrazovať dva stĺpce (obsah bude iba pod sebou)
    * Ak je šírka menšia ako 768px zmenšiť fotku a nadpis v hlavičke
    * Ak je šírka menšia ako 1024px zobraziť #wrapper na plnú šírku
    * **[Riešenie na stiahnutie](http://www.matusmarcin.com/learn2code/lekcia7zadanie.zip)**

### <a name="9">9. hodina</a>

Ešte k media queries ([zdroj](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Media_queries)):
* logické operátory v media queries
* media features v media queries:
   * height and width
   * orientation
   * aspect ratio
   * resolution

Nepovinné čítanie: [7 Habits of Highly Effective Media Queries](http://bradfrost.com/blog/post/7-habits-of-highly-effective-media-queries/)

**Mobile first technika**

* Relatívne jednotky aj pre media queries

Užitočné stránky:
* [Viewport sizes](http://viewportsizes.com/)
* [Konvertor: Pixely na em](http://pxtoem.com/)

Úloha: 

1. [Stiahnite si materiály](http://www.matusmarcin.com/learn2code/lekcia8uloha.zip)
2. Dajte obrázky v galérii do 2 stĺpcov (2 na riadok)
3. Pre väčšie rozlíšenia dajte 4 na riadok
4. Pre ešte väčšie rozlíšenia dajte 6 na riadok
5. Pre väčšie rozlíšenia dajte aside do bočného stĺpca
6. Pre väčšie rozlíšenia dajte celému obsahu priestor z ľava aj sprava
7. Bonus: Použite nejakú novú feature media queries.

### <a name="10">10. hodina</a>

**Twitter Bootstrap**

* CSS framework
* základná typografia
* vzhľad formulárov
* *grid*

Úloha 1:

* Základné HTML s Bootstrapom ([stiahnutým](http://getbootstrap.com/getting-started/))

CSS:

* [grid systém](http://getbootstrap.com/css/#grid)
* [typografia](http://getbootstrap.com/css/#type)
* [buttony](http://getbootstrap.com/css/#buttons)
* [obrázky](http://getbootstrap.com/css/#images)
* [formuláre](http://getbootstrap.com/css/#forms)
* [responzívne finty](http://getbootstrap.com/css/#responsive-utilities)

Komponenty:

* [ikonky](http://getbootstrap.com/components/#glyphicons)
* [dropdown](http://getbootstrap.com/components/#dropdowns)
* [navigácie](http://getbootstrap.com/components/#nav)
* [panely](http://getbootstrap.com/components/#panels)
* [responzívne embedy](http://getbootstrap.com/components/#responsive-embed)

Úloha 2:

* Vlastná stránka postavená na Bootstrape
* Bonus: Viac súborov, prepojiť ich medzi sebou


### <a name="11">11. hodina</a>

* Zadanie/domáca úloha.

Zaujímavé čítanie:

* [Bootstrap Expo](http://expo.getbootstrap.com/)
* Ak ste nedávali pozor: Čo možno neviete [časť 1](https://scotch.io/bar-talk/bootstrap-3-tips-and-tricks-you-might-not-know) a [časť 2](https://scotch.io/bar-talk/bootstrap-3-tips-and-tricks-you-still-might-not-know)
* [Bootstrap na stackoverflow](http://stackoverflow.com/questions/tagged/twitter-bootstrap)

## Modul 3: Javascript/jQuery

### <a name="12">12. hodina</a>

* Prehľad front-end technológií, používaných pri tvorbe stránok - HTML, CSS a JavaScript.

[Rýchlokurz](http://www.matusmarcin.com/learn2code/rychlokurz.html) programovania v jazyku JavaScript:

* Chrome Developer Tools
* práca s premennými, 
* poliami, 
* reťazcami, 
* objektami a 
* funkciami. 

* Predstavenie knižnice jQuery - na čo slúži, ako sa používa v praxi a prečo je tak populárna.


### <a name="13">13. hodina</a>

* rekapitulácia [Rýchlokurzu](http://www.matusmarcin.com/learn2code/rychlokurz.html)
* Knihu už by si mal mať

Document Object Model:

* DOM = strom
* Document
* Window

jQuery:

* stiahnutie a vloženie do stránky
* CDN
* document ready
* použitie CSS selektorov
* volanie metód a funkcíí na kolekciu elementov
* reťazenie volaní
* použitie v konzole Developer Tools
* animácie

### <a name="14">14. hodina</a>

**Ako sa vyslovuje jQuery?** 
*[American](https://www.youtube.com/watch?v=hMxGhHNOkCU&t=0m2s)*, *[British](https://www.youtube.com/watch?v=GNb8T5NBdQg)*, *[Indian](https://www.youtube.com/watch?v=trOnyggOeGA)*

Úloha na rozohriatie:

1. animácia z ľava do prava
2. animácia z prava do ľava so zmenou farby

Rekapitulácia:

* vloženie jQuery do stránky
* document ready alebo pred &lt;/body&gt;
* CSS selektory
* testovanie v dev konzole (Chrome)
* css, animácie, reťazenie volaní

Novinky:

* callback
* kľúčové slovo this

Udalosti (eventy):
* Čo sú to eventy? 
* Event Listener
* Event Handler
* Event Object
* event.preventDefault()

Príklad: 

    $('.icon').on('click', function(event) {
        console.log(event);
        $(this).animate({top: 100}, 2000);
    });
    
Úloha:

* Vytvoriť button, ktorý skryje/zobrazí nejaký text    

### <a name="15">15. hodina</a>

**Traverzovanie DOMu:**

* Pamätáte si: DOM = strom?
* [jQuery vie dobre loziť po stromoch](http://api.jquery.com/category/traversing/)

Úloha z knihy ([HTML tu](dl.txt)):

1. časť - strana 32
2. časť - akordeón, strana 34

**[Manipulácia DOMu](http://api.jquery.com/category/manipulation/):**

* html()
* text()
* append(_co_) - _co_ je element (napr. premenná), ktorý chceme prilepiť
* prepend(_co_)
* appendTo(_kam_) - _kam_ je selektor miesta, kam to chceme prilepiť
* prependTo(_kam_)
* before(_co_)
* after(_co_)
* insertBefore(_kam_)
* insertAfter(_kam_)
* [klonovanie](http://api.jquery.com/clone/) a zachovanie event handlerov

Úloha:

* Vytvoriť zoznam v HTML a jQuery listener pre položku (všetky) zoznamu, ktorý pridá nový &lt;li&gt; na koniec zoznamu

**Bublanina a delegácia:**

* Eventy nefungovali na novo pridaných elementoch.
* Našťastie, vieme prácu zdelegovať, pretože máme bublanie.
* Bublanie = posúvanie eventov rodičom
* stopPropagation()
* stopImmediatePropagation()
* Pamätáte si na event.preventDefault()? Tak preto.

Úloha:

* Lightbox príklad (s. 39)

### <a name="16">16. hodina</a>

* Opakovanie
* Lightbox príklad

Novinky: 

* window.setTimeout()
* window.setInterval()

Ukážka otravného skriptu:

    setInterval(function () {alert("Hello")}, 3000);
    
Ako ho zastaviť?

    window.clearInterval(intervalVariable)
    
Trochu menej otravný skript:

    setTimeout(function(){alert('Hello')},3000) 

Úloha: 

* Obohatenie Lightbox príkladu o slideshow.
* Skúste pridať aj šípky pre manuálne ovládanie.

Mierna zachádzka:

**Podmienky a vetvenie**

* if
* else

Príklad: 

    if (premenna) {
        // vykona sa nieco
    }

If-Else:

    if (premenna == 2) {
        // premenna je 2
    } else {
       // premenna bud nie je alebo nie je 2
    }

### <a name="17">17. hodina</a>

Rekapitulácia, anyone?

Úloha:

* Efekt plynulého zoscrollovania k elementu (s. 42)

**Pokročilé jQuery animácie**

* queue (_kjú_)
* delay
* easing
* CSS3 animácie
* is (:animated)

Funguje? Super. Dajte si teraz pohov.

### <a name="18">18. hodina</a>

Rekapitulácia a prehľad:

* HTML vs CSS vs JS

Preskúmajte a použite:

* CSS3 animations[.](http://css-tricks.com/snippets/css/keyframe-animation-syntax/)
* CSS3 transitions[.](http://css3.bradshawenterprises.com/transitions/)
* CSS3 transforms[.](http://desandro.github.io/3dtransforms/)

__1. úloha:__ Máte 20 minút na to, aby ste si urobili veľmi rýchly prehľad v animáciách, transitions a transformáciách. Vyberte si jednu z nich, pochopte ju a použite.

* Čo su animácie, transitions (prechody) a transformácie?
* Prehľad pár základných a ich použitie.

__2. úloha:__ Použite ich. Čím viac, tým lepšie. Môžete zapojiť aj JS.

### <a name="19">19. hodina</a>

Toto sme spravili minule &raquo; [Aha, lopta!](animacia.html)

Pokračovanie:

* [CSS3 animations](http://css-tricks.com/snippets/css/keyframe-animation-syntax/)
* [CSS3 transitions](http://css3.bradshawenterprises.com/transitions/)
* [CSS3 transforms](http://desandro.github.io/3dtransforms/)

**AJAX**

* [Kto je to AJAX](http://media.tumblr.com/845e4846c54f60c4dd305d12b0e07137/tumblr_inline_mlmtlyqvEP1qz4rgp.jpg)?
* Na čo nám je dobrý?
* Ako ho použijeme?

**Úloha:**

(viac-menej to, čo na s. 47-48 v knihe) 

Predpríprava (ak nemáte takto [stránku](elvis.zip)):

* Upraviť scrollovacie zadanie - rozdeliť ho do viacerých súborov.
* Každý súbor bude mať menu a svoju čast z menu. 
* Ak máte štyri položky v menu, vzniknú štyri súbory.
* V menu zmeňte odkazy z #hash na subor.html

Teraz by ste mali mať stránku, ktorá pozostáva zo štyroch podstránok. Ako klikáte v menu, načítava sa vám vždy patričná nová stránka.

* Nahrajte si to na svoje FTP.
* Alebo si nainštalujte [server](http://www.wampserver.com/en/).

Samotná úloha:

Upravíme našu stránku, aby sa obsah načítal cez AJAX. 
 
1. Event listener na menu.
2. Metóda AJAX [jQuery.load()](http://api.jquery.com/load/)
4. **Fix pre Same-Origin-Policy:** Stiahnite si súbor [.htaccess](http://www.matusmarcin.com/learn2code/lekcia17/_htaccess) a nahrajte ho na svoje FTP.
3. Nezabudnite sa odkazovať na súbory na svojom serveri (FTP)
4. Skúsiť to cez [_$.ajax_ a _success_](http://api.jquery.com/jQuery.ajax/)

AJAX a <abbr title="JavaScript Object Notation">JSON</abbr>:

* Vytiahnuť z Facebooku údaje o niekom alebo niečom (s. 49)

### <a name="20">20. hodina</a>

* Vytiahnuť z Facebooku údaje o niekom alebo niečom (s. 49)
* Verzia s _promise()_

Dosť bolo AJAXu. Či?

[jQuery UI](http://jqueryui.com/):

* pár príkladov (s. 52, [HTML](jqueryui.html))

Úloha:

* Parallax scrollovanie, [ehm](paralax.zip)

Zadanie:

* Ako sa majú vaše stránky?


### <a name="21">21. hodina</a>

Použijeme všetko, čo sme sa naučili, na vytvorenie vlastného jQuery pluginu a jednoduchého parallax efektu.

Budeme váľať šunky.

### <a name="22">22. hodina</a>

Vlastná práca.

**Dôležité:**

Vaše projekty budú hodnotené podľa:

* Kvality a úrovne kódu (s ohľadom na vašu počiatočnú úroveň)
* Rozsahu a obsahu (s ohľadom na použité či nepoužité nástroje a knižnice)
* Vizuálnej formy a UX/UI
* Originality a prínosu (pre ľudstvo :)

**Musím?**

1. Áno, musíte vytvoriť vlastnú stránku
2. Na poslednej hodine budeme prechádzať aj vaše stránky.

### <a name="23">23. hodina</a>

Vlastná práca.

Bonus: PHP Mailer ([HTML formulár](mailform.txt), [PHP súbory](phpmailer.zip))

### <a name="24">24. hodina</a>

Vlastná práca, prezentácia.
