# 3. Részvizsga - Gyakorlat

## A vizsga a következő feladatok megoldását tartalmazza.

### Beállítások
- Hozz létre egy új Github tárolót "str-ang-exam-001" néven. Ne készíts sem README.md sem más állományt a létrehozáskor. Ekkor ki fog adni egy segédletet, hogy hogyan tudod összekötni egy már meglévő mappával.
- Hozz létre azonos néven egy új Angular projektet a saját gépeden. Legyen benne Routing és SCSS -t használj a stílusokhoz.
- Kösd össze a kettőt az instrukciók alapján.

### Feladatok
A következő pontok meglétét és működését fogjuk pontozni:

- Kösd be a Bootstrap és Font-Awesome könyvtárakat a projektbe a tanult módon!
    - A két kötnyvtárat npm-mel telepítettem, majd az angular.json-ben bekötöttem a megfelelő css és js fájlokat.

- Készíts egy navigation nevű komponenst, amiben egy alapértelmezett Bootstrap stílusú navbar jelenjen meg!
    - A kért navigation komponenst a common mappába hoztam létre.
    - Feltelepítettem Ashok Koyi Bootstrap 4 kiegészítőjét a vscode-ba, amellyel egyszerűen beágyazhatók bootstrap elemek.
    - A navbar-t ezzel a kiegészítővel ágyaztam be.

- A navbar a következő linkeket tartalmazza: Home, Heroes! Kattintásra a kapcsolódó komponens jelenjen meg az alkalmazásban!
    - A kérés szerint konfiguráltam a navbar menupontjait.

- Hozd létre a home és a heroes komponenseket és állítsd be a routing -ban, hogy a '' és 'heroes' útvonalak esetén jelenjenek meg!
    - A két komponenst szintén a common mappába hoztam létre.
    - A routingont az app-routing.module.ts-ben és a navigation komponenst nézetében állítottam be.

- AppComponent: az oldal tetején a navigation jelenjen meg! Alatta legyen az a rész, ahol az oldalak töltődnek be, egy container oszályú divben!
    - A navigation komponenst szelektorát elhelyeztem az app.component nézetében.
    - Alá került a router-outlet szelektor, amelyet a kérés szerint egyconainer osztályú div-be helyeztem el.

- HomeComponent: jelenjen meg benne egy Jumbotron Bootstrap elem, "Heroes" címmel! A nagy kék gomb, ha rákattintanak, akkor a "/heroes" url-re vigyen, fontos, hogy az Angular routing használatával!
    - A Jumbotront a már említett kiegészítő segítségével ágyaztam be, majd testre szabtam.
    - A routingot beállítottam a /heroes url-re. Ehhez az "a" elem "href" attributuma helyett routerLink-et használtam.

- Készíts egy Hero osztályt, az alábbi tulajdonságokkal (a típusok értelemszerűek legyenek): id, name, superPower, address!
    - A hero osztályt a model mappába hoztam létre a kért tulajdonságokkal.
    - Az id number, a többi tulajdonság string típusú lett.

- HeroService: készíts egy service -t, a neve hero legyen! Legyen egy getAll metódusa, ami Hero[] típussal tér vissza, és legalább 5 Hero -t szolgáltat azoknak akik meghívják!
    - A kért hero service-t a service mappába hoztam létre.
    - Készítettem benne egy tömböt, amelynek elemei egy-egy hero objektum.
    - A getAll metódust filter

- HeroesComponent: használja a HeroService -t a Hero példányok lekéréséhez. Jelenítse meg a Hero[] elemeit, egy táblázatban egymás alatt.
    - Injektáltam a HeroService-t és a getAll metódussal lekértem a teljes Hero listát.

- Extra pont: legyen egy pipe -al készített szűrő, ami szöveg beírására szűri a táblázatot a name tulajdonság szerint.
    - Készítettem egy filter pipe-ot a pipe mappában.
    - A filter vár egy tömböt, egy keresőszót és egy paramétert, amely megmondja, hogy melyik tulajdonságban keressen.
    - Ezt a paramétert fixen 'name' értékre állítottam.
    - Az a megoldás később lehetőség ad arra, hogy bármelyik tulajdonságban tudjunk keresni.

- Extra pont: a fejléc sorokra kattintva lehessen a táblázat adatait növekvő sorrendbe rendezni szintén egy pipe használatával.
    - Készítettem egy Sorter pipe-ot a pipe mappában.
    - A sorter vár egy tömböt, egy tulajdonságot, amely megmondja, hogy melyik tulajdonságra rendezzen és egy irányt (direction).
    - A direction határozza meg, hogy melyik irányba (csökkenő/növekvő) rendezze a tömböt.
    - A táblázat fejléc feliratokat elhelyeztem egy-egy gombban.
    - Készítettem egy metódust, amelyet bekötöttem a gombobra a click eseményre.
    - A metódusnak átadom paraméterként az adott gombnak megfelelő tulajdonság nevet.
    - Így kerül átadásra a rendezés paramétere.
    - A rendezési irány jelenleg fix, növekvő, de a pipe fel van készítve a csökkenő irányra is.


### Beadás
Határidő: 2021-02-16 12:00

A feladatot beadni ide kattintva lehet egy űrlapon.
https://forms.office.com/Pages/ResponsePage.aspx?id=uo8WgI7Wd0uJJxcOS3B8gS4sxex9TpFNs4DtYO_uSaZUNlNFSUQwNU1SRUxSS0tPNk1JRVE1WEI5Ui4u