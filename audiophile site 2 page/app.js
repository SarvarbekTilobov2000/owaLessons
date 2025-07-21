"use strict";

// document.write("hello world");
// document.write("developer")
// const db = ('<h1>senior developer</h1>')
// console.log(db);
//  document.getElementById("text").innerHTML = "New text";
// const db =  5 + 10
// console.log(db)

// console.log(
// 13 % 3
// Math.floor(13/3)
// )

// var ism = "Abbosbek";
// var ism = "Jo'rabek" // qayta elon qilish
// ism='New name'  //Qayta qiymatlash
// console.log(ism);

// let ism = "Samandar";
// //let ism ="new name"//qayta qiymatlab bo'lmay di
// ism='New name'// let bilan ishlatilganda qayta qiymatlash
// console.log(ism);

// const ism = "Muhammadi";
// //const ism='name2'//const ishlaganda ham qayta elon qilib bolmaydi !!!
// // ism ='name2'// const bilan elon qilinganda qayta qiymatlab bolmaydi !!!
// console.log(ism);

// document.getElementById("text").innerHTML = "<h1>start</h1>";
// document.getElementById("text").innerHTML = "Sarvarbek Tilobov";

// let rost = true;
// let yolgon = false;
// console.log(rost)
// console.log(yolgon)

// let cros = null;
// console.log(cros)

// let son=''
// console.log(son);

// let acer;
// console.log(acer)

// let gers = 15555555555555684635168468468476851;
// console.log(gers)

// const also = BigInt(900719925472222222222222222222222222220991);
// console.log(also);

// let id = Symbol('id');
// console.log(id);

// let a = 10
// let b = "10";
// a = a === b
// console.log(!a)

// let massa = +prompt("kilogramni kiriting");
// let kg = massa / 1000;
// console.log(kg + " tonna ga teng")
// let minut = +prompt("minutni kiritin");
// let natija = minut / 60;
// console.log(natija)

// let a = 5,
//     b = 10,
//     c = 15;
// console.log(a)    //5
// a = b;
// console.log(a)    //10
// a += b;
// console.log(a)    //20
// a -= b;
// console.log(b)    //10
// c *= b;
// console.log(c)    //150
// c /= 5;
// console.log(c)    //30
// b %= 2;
// console.log(b)    //0

// TYPE CONVERSION   bu-- - js da saqlanayotgan maluot turini  1 korim - nish dan 2 = - kornishga otishi
//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// const yosh = "23";
// const x = Number("red");
// console.log(typeof x);
// console.log(x + " teng lik")//ozgaruvchiga string malumot qoshib yozildi natija NaN va string
// console.log(Number) // type  ozgartirilishi       x  ozgaruvchi  harflardan iboratligi uchun Nan chiqaradi   <<<<< not a number
// STRING TURDAGI  MALUMOT LARGA  ARIFMETIK APERATORLARNI  ISHLATIB BOLMAYDI
// console.log(Boolean(x>=yosh))// boolen korinishda  ozgardi
// console.log(Boolean(x >= yosh))
// console.log(Symbol(x + yosh));// data symbol korinishida

// const yosh = "20"
// console.log(yosh + 10) //ozgaruvchiga  son qoshildi va u string korinhida bolgani uchun qiymat va  2010 korinishi da  ifodalandi
// console.log(Number(yosh))//typeni  ozgartirish
// console.log(Number(yosh) + 10)// type ozgardi va  son qoshildi
// console.log(Number(yosh) - 50)//type ozgardi va  son ayirib tashlandi
// console.log(Number(yosh) * 5) //type  ozgardi  va sanga kopaytirildi
// console.log(Number(yosh) / 2)//type  ozgartirdim  va  son ga bolin di
// console.log(Number(yosh) % 3)//type ozgardi va qoldiqli bolindi

// const yil = 2021;
// console.log(yil);
// console.log(String(yil))//number  typedan string korinishi ga otkazildi
// console.log("men" + 2008 + "yilda tavallud topganman") //strin malumot bor bolgani uchin  son ham  string koriishidagi  malumot turiga aylandi

// let a = 5, b = 10;
// console.log(a++)//qiymatni bittaga oshirish {post-increment}
// console.log(a) //bu qatorda bittaga oshgani  korinadi
// console.log(++a) //{pre-increment}  bunda shu elon ning ozida bittaga oshirilib chiqadi
// console.log(b--) //{post-increment }  qiymat bttaga kamayadi
// console.log(b)// natija   shu elon da chiqadi  chunki post-increment ishlatilmoqda
// console.log(--b)
// // ++belgisi o'zgaruvchi oldidan qoyilssa osha elon qilinganning o'zidayoq natija ko'rinadi
// let bg = 50;
// console.log(++bg);

// //COMPARISON  yani  solishtirish  aperatorlari
// //>>>>>>>>>>>>>>>>>>>>>>>
// let a = 5, b = 10, c = "5";
// const z = a;
// console.log(a == c) //bu holatda ozgaruvchilarni  qiymatini tekshirib  true or false qaytaradi   j=true
// console.log(a === c)//bu holatda esa  type  bilan tekshirib  natija qaytaradi     j-false
// console.log(a == z)//bu holda qiymatlar ham  type ham br xil shuning uchun  j=true
// console.log(a === z)// j=true
// console.log(a != b) //teng emasliigini   soralmoqda miz  agar  teng bolgan da  false  qaytargan bolardi  j=true
// console.log(a != z)// qiymatlar  teng emas  j=false
// console.log(a > b)//a katta b dan    j=false
// console.log(a < b)//a kichik b dan    j=true
// console.log(a >= b)// bunda  a katta yoki teng   b dan  j=false
// console.log(a >= b)//a kichik yoki teng  b dan  j=true

// //    TAYINLASH APERATORLARI  { assignmant }
// //   >>>>>>>>>>>>>>>>>>>>>>>>
// // let son = 20;
// // let l = +prompt("Sm ni kiriting");
// // let uzunligi = l / 100;
// // console.log("To'liq metr soni: " + uzunligi + " metr");
// // console.log(`To'liq metr soni ${l} metr ga teng `);
// // if (name > 20) {
// //     console.log("Xa");
// // } else {
// //     console.log("yoq");
// // }
// let name = prompt("foydalanuvchi ismi")
// let javob = name + " foydalanuvchi familiyasini kiriting"
// let lok = javob + "yashash joyini kiriting"
// let tel = lok + "telefon numberni kiriting"
// let fam = prompt(javob);
// console.log(String(fam))
// console.log(fam)

// //    TEZLIK XISOBLOVCHI >>>>>>>>>>>>>
// let x = +prompt("tezlikni kititing");
// if (x >= 60) {
//     console.log("siz radarga tushdingiz");
// }
// else if (x <= 59) {
//     console.log("siz normal tezlikdasiz");
// }
// else {
//     console.log("else worked");
// }

// // IF ELSE  BO'YICHA amaliy dastur                                       ➡️
// const htmlPassed = false;
// const cssPassed = true;
// let message = '';
// if (htmlPassed && cssPassed) {
//     message = 'Siz Bootstrap kursini boshlashingiz mumkin!';
// } else if (htmlPassed || cssPassed) {
//     message = 'Iltimos ikkinchi kursni ham tugating!';
// } else {
//     message = 'Iltimos birinchi ikkala kursni tugatib chiqing!';
// }
// console.log(message);

// //IF ELsE  bo'yicha amaliy dastur
// //>>>>>>>>>>>>>>>>>>>>>>>>>
// var yomgir = false;
// var soyabon = true;
// if (yomgir) {
//     console.log("soyabon ol");
// } else {
//     console.log("soyabon shart emas");
// }

// //IF ELSE AMALIY ISH
// const son = +prompt("sonni kiriting");
// if (son > 0) {
//     console.log("berilgan son musbat");
// }
// else {
//     console.log("berilgan son manfiy");
// }
// console.log("keyingi qator");

// //IF ELSE AMALIY ISH
// let tovar = +prompt("yaroqlilik muddatini kiriting");
// if (tovar < 72) {
//     console.log("maxsulot istemolga yaroqli");
// }
// else {
//     console.log("maxsulot istemolga yaroqsiz");
// }

// // MANFIY  OR MUSBAT  >>>>>>>>IF ELSE
// const s = +prompt("javobingizni kiriting");
// if (s > 0) {
//     console.log("kiritilgan noldan katta");
// }
// else if (s == 0) {
//     console.log("kiritilgan son nolga teng");
// }
// else if (s < 0) {
//     console.log("kiritilgan son noldan kichkina");
// }
// else{
//     console.log("not found");
// }

// //IF ELSE  AND ligical operants  amaliy ish>>>>>>>>>>>>
// let energy = +prompt("zaryadnik narxini kiriting");
// if(energy <60000){
//     console.log("Zaryadnik narxi juda arzon 👌");
// }
// else if (61000 <= energy && energy <= 70000) {
//     console.log("zaryadnik narxi normal darajada");
// }
// else if (71000 <= energy && energy <= 80000) {
//     console.log("zaryadnik narxi yuqoriga tomon o'sgan ⬆️");
// }
// else if (81000 <= energy && energy <= 100000) {
//     console.log("zaryadnik narxi juda baland");
// }
// else {
//     console.log("not found");
// }

// let narx = +prompt("narxni kiriting: ")
// if (narx < 20) {
//     console.log("narx juda past");
// }
// else if (20 <= narx && narx <= 40) {
//     console.log("narx normal darajada");
// }
// else if (41 <= narx && narx <= 100) {
//     console.log("narx da tepaga qarab o'sgan ");
// }
// else if (101 <= narx) {
//     console.log("narx juda baland");
// }
// else {
//     console.log("not found");
// }

// //object
// const dasturchi = {
//     ism: "sarvarbek",
//     yosh: 15,
// }
// console.log(dasturchi);
// console.log(dasturchi.yosh);

// //TEMPLATE LITERALS
// let user = "java"
// let user2 = "script"
// let user3 = user + user2;
// console.log(user3);
// // bu usul no professional usul hisoblanadi
// console.log(`dasturlash tili bu ${user}${user2}
//     keyingi qator`);

// //   SVETAFOR STRUKTURASI
// // >>>>>>>>>>>>>>>>>>>>>>>>>>
// let x = prompt("rangni kiriting")
// if (x == "red") {
//     console.log("to'xtab turing");
// }
// else if (x == "yellow") {
//     console.log("harakatga tayorlaning");
// }
// else if (x == "green") {
//     console.log("harakatlaning");
// }
// else {
//     console.log("bu rang hisoblanmaydi");
// }

// //JUFT YOKI TOQ SON LARNI ANIQLOVCHI    kod                                 ➡️
// let a = +prompt("enter the number")
// if (a % 2 == 0) {// bu yerda  kiritilgan data qoldiqli 2 ga bo'linadi  va qoldiq 0 ga teng bolsa juft boladi
//                                                              //   aks holda toq boladi
//     console.log("son juft");
// }
// else {
//     console.log("son toq");
// }

//  //   >>>>>>>>>>> TERNARY OPERATORS >>>>>>>>>>>>>>>>>>>>>>
//  const age = +prompt("yoshingizni kiriting")
// if (age < 18) {
//     alert("siz voyaga yetmagansiz");
// }
// else if(age>=18){
//     alert("siz voyaga yetgansiz")
// }
// else {
//     alert("not found") //>>>> QUYIDA IF ELSE APERATORLARI Bilan ish bajarilga
// }
// //>>>>>>>> QUYIDA TERNARY OPERATORS BILAN ISH BAJARILGAN va  ternary operator ishda ancha qulay hisoblanadi

// let rang = prompt("Rangni kiriting");
// if (rang == "Yashil") {
//     console.log("Yurish mumkin");
// } else if (rang == "Sariq") {
//     console.log("Diqqat");
// } else if (rang == "Qizil") {
//     console.log("Yurish mumkin emas");
// } else {
//     console.log("Bu rang hisoblanmaydi");
// }

// const res = +prompt("sonni kiriting");//juft  yoki toq son aniqlash➡️
// if (res % 2 == 0) {
//     alert("kiritgan soningiz juft son")
// }
// else {
//     alert("kiritilgan raqam toq son")
// }

// //SXEMA 1
// let x = +prompt("sonni kiriting")
// console.log(Math.floor(x / 10) + " o`nlar xonasi");
// console.log(x % 10 + " birlar xonasi");

// const son = +prompt("sonni kiiting")
// if (10 <= son && son < 100) {
//     console.log(Math.floor(son / 10) + " son onlik");
//     console.log(son % 10 + " birlik xonasi");
// }                                                                                         // ➡️
// // else if(son>100){//bu shartni kiritish shart emas chunki if blokda 2xonali sonlar orasida
// //belgilab berilgan  boshqa sonlarda else blok ishlaydi
// //     console.log("ikki xonali son kiriting");
// // }
// else {
//     console.log('not found');
// }

// //SXEMA 2                                                                ➡️
// let son = +prompt("2 xonali son kiriting")
// if (0 < son && son < 100) {
//     let onlik = Math.floor(son / 10)
//     let birlik = son % 10;
//     console.log(son + " sonida");
//     console.log(`${onlik} o'nliklar xonasi`);
//     console.log(`${birlik} birliklar xonasi`);
//     let uch = "sonlari ko'paytmasi " + onlik * birlik + " ga teng, ";
//     let tor = "sonlari qo'shilganda " + (onlik + birlik) + " ga teng, ";
//     let besh = "sonlari ayirmasi " + (onlik - birlik) + " ga teng, ";
//     let olt = "sonlari bo'linmasi " + onlik / birlik + " ga teng";
//     console.log(uch, tor, besh, olt);
// }
// else {

// }

// let number = +prompt("ikki xonali son kiriting")
// if (0 < number < 100) {
//     let on = Math.floor(number / 10)
//     let br = number % 10
//     const add = on + br
//     const subtrack = on - br
//     const multiplay = on * br
//     const tobe = on / br
//     console.log(`O'nliklar xonasi ${on} va birliklar xonasi ${br} Qo'shilganda ${add} ga teng. Ayrilganda ${subtrack} ga bo'linganda ${tobe} ga ko'paytiriganda ${multiplay} ga teng`);
// }
// else {
//     console.log('not found');
// }

// const num = +prompt("soniyani kiriting")
// let min = Math.floor((num / 60));
// const hour = Math.floor(num / 3600);
// let day = Math.floor(num / 86400)
// console.log(`${num} soni ${min} minutga, ${hour} soat ga, ${day} sutkaga teng`);

// const nbm = +prompt("brendni kiriting")
// switch (nbm) {
//     case 10: console.log("tesla"); break
//     case 5: console.log("Stive Jobs"); break
//     default: console.log("not found");
// }

// let p = prompt("brend");
// switch (p) {
//     case "Tesla": console.log("Elon Musk"); break
//     case "Apple": console.log("Stiv Jobs"); break
//     case "Micrasoft": console.log("Bill Geyts"); break
//     default: console.log("not found");
// }

// //<===================if else ===switch case==============================>
// //agar bitta narsa ko'p narsalarga taqqoslanayotganda  switch case ishlatish qulay hisoblanadi
// //agar bittadan kop narsa  kop narsalarga taqqoslanayotgan bollsa if else ishlatish qulay boladi ➡️
// let hafta = +prompt("nechinchi kun")
// if (hafta === 1) {
//     console.log("dushanba");
// } else if (hafta === 2) {
//     console.log("seshanba");
// } else if (hafta === 3) {
//     console.log("chorshanba");
// } else if (hafta === 4) {
//     console.log("payshanba");
// } else if (hafta === 5) {
//     console.log("juma");
// } else if (hafta === 6) {
//     console.log("shanba");
// } else if (hafta === 7) {
//     console.log("yakshanba");
// } else if (typeof hafta === String) {
//     console.log("bu yerga faqat son kiriting");
// } else {
//     console.log("not found");
// }

// const a = "stringdata";
// let b = "stringdata";
// a == b ? console.log("xa") : console.log("yoq");

// const ab = "45"
// let db = 45
// ab == db ? console.log("xa") : console.log("yoq");

// let ball = +prompt("natijani bilish");
// let IELTS = +prompt("IELTS balingiz")
// let usd = +prompt("moliyaviy mablag`ingiz")
// if (ball >= 150 || IELTS >= 7 && usd >= 5000) {
//     console.log("oqishga qabul qilindingiz");
// } else {
//     console.log("oqishga qabul qilinmadingiz");
// }

// // object  >>>>>>>>>>>>>
// let inson = {//obyekt elon qilindi va qiymatlari yozildi
//     name: 'sardor',
//     firstName: 'tolibov',
//     location: 'tafakkur',
//     age: 15,
// }
// console.log(inson);//obyekt chaqirildi
// console.log(inson.age);//obyekt ichidagi qiymat chaqirib olindi boshqalari ham shu ko'rinish da chaqiriladi

// // For
// // javascript da >>> FOR loop dan foydalanib malum bir kod bloki ni  bir naecha bor ishga tushurish mumkun
// // umumiy ko`rinishi { boshlangichifoda : tekshiruv sharti : tanasi }
// // BOSHLANGICH IFODA ---o`zgaruvchilarni elon qilish uchun yoziladi  va bir marta ishga tushadi
// // TEKSHIRUV SHARTI berilgan shart tekshirikadi  agar rost bo`lsa berilgan kod blok ishga tushadi  false bo`lsa  for loop tugatiladi
// // IFODANI YANGILASH tekshiruv sharti rost bolgan holda, boshlangich ifoda yangilanadi
// let sum = 0
// for (let i = 1; i <= 100; i++) {
//     console.log(sum);
//     sum += 10;//sum=sum+i
// }
// console.log('sum: ' + sum);

// let n = 1;////While loop➡️
// while (n <= 20) {
//     if (n % 2 == 0) {
//         console.log(n);
//         n++;
//     }
// }
// console.log(a)

// // BREAK >>>>>>>>>>>>> statement  yordamida berilgan malum bir shart bajarilgan holatda  loop ni to'xtatish imkoniyati mavjud
// // br dan  besh gacha bolgan  saonlarni console ga chiqaruvchi  loop
// for (let i = 0; i <= 10; i++) {
//     ///breack condition
//     if (i === 5) { break }
//     console.log(i);
// }

// for(let i=0; i<=20; i++){
//     console.log(i);
//     if(i==3){break}
// }

// let n = 1;
// do {
//     n++
//     console.log(n);

// let i = 0
// do {
//     i++
//     console.log("while loop");
// }
// while (i < 0)

// function bcBlack() {
//     console.log("sarvarbek");
//     document.body.style.backgroundColor = "#fff";
// }

// function declaration() {
//     console.log("function declaration");
// }
// const expression = function () {
//     console.log("function expression");
// }
// const arrov = () => {
//     console.log("arrov function");
// }
// declaration()
// expression()
// arrov()

// //>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ARREY  va errey metodlari
// let guests = [`sardor`, `sarvar`, `diyor`, `temur`]
// // console.log(guests[1]);//bu yerda  sarvar so'zi consolga chiqadi
// // //chunki js da sanoq son 0 dan boshlanadi    bundan korinadiki sardor=0, sarvar=1, diyor=2, temur=3
// // guests[0] = "jorabek"; //bunda arrey soni bn chaqirib olinib  boshqa bir qiymatga tenglandi➡️
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// // let result = numbers.length //length bu ichidagi elementlar sonini anglatadi➡️
// //let result = huests.indexOf(`diyor`)//bu yerda indexof metodi ishlatilgan va
// //bu diyor qiymatini ni arrey ichida joylashivi nechinchi ekanligini  aniqlab beradi➡️
// // let result = guests.concat(numbers)
// //concat metodi bu yerda biriktirish manosida va ikki arreyni biriktirib yani bitta arrayga aylantirib yozib bermoqda➡️
// //numbers.pop()//Massivdan oxirgi elementni olib tashlaydi va uni qaytaradi
// ////Agar massiv bo'sh bo'lsa, undefined qaytariladi va massiv o'zgartirilmaydi➡️
// //guests.push("senior");//Massiv oxiriga yangi elementlar qo'shadi va massivning yangi uzunligini qaytaradi.➡️

// const name = prompt("ismingizni kiriting")
// const age = +prompt(`Qadirli ${name} yoshingizni kiriting`)
// const born = 2024 - age
// const month = age * 12
// const week = month * 4
// const day = age * 365
// const hour = day * 24
// const minute = hour * 60
// const secunde = minute * 60
// let res = `Qadrli ${name} siz ${born} -yilda tugilgansiz. Siz ${month} oy,
//  ${week} hafta, ${day} kun, ${hour} soat ${minute} minut va ${secunde} sekund yashagansiz👌😁👌`
// console.log(res);

// let name = prompt("ism ni kiriting")
// let names = ["sarvar", 'firdavs', 'jaxongir', 'temur']
// if (names.includes(name)) {
//     alert(`${name} nomli foydalanuvchi bor`)
// } else {
//     alert(`afsuski ${name} nomli foydalanuvchi topilmadi`)////Massiv ma'lum bir elementni o'z ichiga oladimi
//     // yoki yo'qligini aniqlaydi, mos ravishda rost yoki yolg'onni qaytaradi.
// }

// let letter = prompt("ism kiriting:")
// const arr = [`a`, `b`, `s`, `d`]
// switch (true) {
//     case arr.includes(letter): alert(`ha ${letter} bor`); break
//     default: alert(`afsuski ${letter}  harfi topilmadi`);
// }

// let ism = [`sardor`, `sarvar`, `diyor`]
// for (let i = 0; i < ism.length; i++) {
//     let result = ism[i] + "bek";
//     console.log(result);
// }

// let ism = [`sardor`, `sarvar`, `diyor`]
// let i = 0;
// while (i < ism.length) {
//     let result = ism[i] + 'bek';
//     console.log(result);
//     i++
// }

// let nom = prompt("viloyat nomini kiriting")
// switch (nom) {
//     case "farg'gona": alert("farg'onada 1.5mlrd aholi bor")
//         break
//     case "namangan": alert('namanganda 1 mlrd aholi bor')
//         break
//     case "toshkent": alert("toshkentda 4 mlrd aholi bor")
//         break
//     default:
//         alert(`Kechirasiz ${nom} nomli viloyat mavjud emas`)
// }

// let meyor = 20;
// let a = prompt("parolingini kiriting")
// if (a > meyor) {
//     alert(`Bizda meyor ${meyor} ga teng va siz meyordan ${a - meyor} ta ko'p belgi yozdingiz.`)
// } else {
//     alert(`Bizda meyor ${meyor} ga teng va siz ${meyor - a} ta kam belgi ishlatdingz`)
// }

// const ism = "Anna";
// const names = ["John", "Anna"];
// switch (ism) {
//     case names.find((el) => el == ism):
//         console.log(`Ha ${ism} bor`)
//         break
//     default:
//         console.log("Ism yo'q");
// }

// //function declaration>>>>>>>>>>>
// function asos() {
//     alert('quyidagi funksiya function declaration hisoblanadi')
// } asos()

// //function Expression>>>>>>>>>
// let asos = function () {
//     alert('quyidagi funksiya function Expression hisoblanadi')
// } asos()

// //arrow function>>>>>>>>.
// const asos = () => {
//     alert('quyidagi funksiya Arrow function hisoblanadi')
// } asos()

// const calcArea = function (radius) {
//     const area = 3.14 * radius ** 2
//     console.log(area);
// }  calcArea(21)

// const calcArea = function (radius) {
//     const area = 3.14 * radius ** 2
//     return area
// }   const a = calcArea(21)
// console.log(a);

// const calcArea = function (radius) {
//     return area = 3.14 * radius ** 2
// }  const a = calcArea(21)
// console.log(a);

// // ELEMENTLARNI matnini O'ZGARTIRISH>>>>>>>>>>.
// const item = document.getElementbyID(`sarlavha`);
// item.textContent = 'yangi matn';
// document.getElementById('sarlavha');

// const byClassName = document.getElementsByClassName('text');
// const byID = document.getElementById('text');
// const byTAGName = document.getElementsByTagName('div');
// const byNAME = document.getElementsByName('text')

// console.log(``);
// console.log(byID);
// console.log(byTAGName);
// console.log(byNAME);

// //f  lardan foydalanisahda function nomidan keyin qavslar qo'yib ishlatiladi
// // faqatgina  f declarationda o'zidan oldin chaqirib ishlatishning iloji bor
// function decloration() {
//     console.log('function declaration');
// }
// decloration()
// const Expression = function () {
//     console.log("function expression");
// }
// Expression()
// const arrow = () => {
//     console.log('arrow function');
// }
// arrow()

// const age = 24;                                                      //➡️➡️➡️
// if (true) {
//     age = 25
//     console.log("if else ichidagi age", age);
// }
// console.log("tashqi tomondagi age", age);

// let a = 45;                                                        //➡️➡️➡️
// if (true) {
//     a = 50
//     console.log('salom', a);
// }
// console.log(a);

// const ism = function (name, day) {                                    //➡️➡️➡️
//     // console.log(`hayirli kun ${name}`);
//     console.log(`hayirli ${day} ${name}`);
// }
// ism('sarvar', 'kech')

// const calcArea = function (radius) {                                  //➡️➡️➡️
//     const area = 3.14 * radius ** 2;
//     // console.log(area);
//     return area
// }
// const result = calcArea(10)
// console.log(result);

// const sarvar = function (son1, son2) {                   //➡️➡️➡️
//     const result = son1 + son2 * 40
//     return result
// }
// let as = sarvar(20, 100)
// console.log(as)

// const a = function () {                                             //➡️➡️➡️
//     const as = 32 + 38 * 40
//     return as
// }
// const result = a()
// // console.log(result);

//             //funcsiyalar hechnarsaga bog'liq bolmagan holda ichlatiladi➡️➡️➡️
// const a = () => `arrow function`
// const b = a();
// console.log(b);
// //metodlar js dagi malum bir data type ga bog'liq ravishda ishlaydi
// const result = b.toUpperCase()
// console.log(result);

// //CALlback function bu  funksiyani argumentiga berilgan funksiya>>>>>>>>>>>>➡️➡️➡️
// const myfunc = (callback) => {
//     const number = 50;
//     callback(number)
// }
// myfunc(function (val) {
//     console.log(val);
// })

// const alfa = (chaqiruv) => {
//     const betta = "hello callback function"              //➡️➡️➡️
//     chaqiruv(betta)
// }
// alfa(function (good) {
//     console.log(good);
// })

// const m = (salom) => {
//     const res = `birnarsalar yozilgan`;                      //➡️➡️➡️
//     salom(res)
// }
// m(function (n) {
//     console.log(n);
// })

// const inRange = (min, max, number) => {                                          //➡️➡️➡️
//     if (number >= min && number <= max) {
//         console.log(`berilgan ${number} ${min} va ${max} orasida joylashgan`);
//     }
//     else {
//         console.log(`berilgan ${number} son ${min} va ${max} orasida emas`);
//     }
// }
// const minRange = 50;
// const maxRange = 100;
// const givenNumber = 40;
// inRange(minRange, maxRange, givenNumber)

// const simpleCalaulator = (num1, num2, oper) => {         //calculator➡️➡️➡️
//     switch (oper) {
//         case "add": console.log(`yig'indisi :${num1 + num2}`)
//             break;
//         case "subtract": console.log(`ayirmasi :${num1 - num2}`)
//             break;
//         case "multiply": console.log(`ko'paytmasi :${num1 * num2}`)
//             break;
//         case "divide": console.log(`bo'linmasi :${num1 / num2}`)
//             break;
//         default: console.log(`aniqlanmagan amal`);
//     }
// }
// const a = 100;
// const b = 40;
// const operation = "add"
// simpleCalaulator(a, b, operation)

// //ENG KATTA SONNI ANIQLOVCHI FUNCTION>>>>>>>>>>>>>➡️➡️➡️
// const getLargestelement = (array) => {
//     let largest = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > largest) {
//             largest = array[i];
//         }
//     }
//     return largest;
// }
// const nums = [2121, 4545, 45, 641, 155, 11, 1111]
// const result = getLargestelement(nums)
// console.log(`eng katta element ${result}`);

// //ELEMENTLARNI TANLAB OLISH  >>>>>>>>>>>>>>>>>>>>>>>>>>>>➡️➡️➡️
// const byClassName = document.getElementsByClassName('text');
// console.log(byClassName);
// const byID = document.getElementById('text');
// byID.textContent = 'yangi sarlavha'
// //byID.remove()
// console.log(byID);
// const byTAGName = document.getElementsByTagName('text');
// console.log(byTAGName);
// const byNAME = document.getElementsByName('text')
// console.log(byNAME);

// events  bu >> foydalanuvchi yoki brauzerning ozi tomonidan amalga oshirilishi mumkun bolgan➡️➡️➡️
// brauzerda sodir bolAdigan hodisalar
// ELEMENT LARGA EVENT LARNI BOGLASHNI 3 TA USULI BOR
// INLINE EVENT HANDLERS >>>>>>>>>>>>>>
//     EVENT HANDLER PRPORTIES >>>>>>>>>>
//         EVENT LISTENERS >>>>>>>>>>>>
//             INLINE EVENT HANDLERS > event html tegining atributi sifatida function bn korsatib o'tiladi
// function script qismiga yoziladi
// QUYIDAGI  FUNCTION  ELEMENT  CONTENTINI OZGARTIRISH >>>>>>>
// const change = () => {
//     let sarlavha = document.getElementById('head')
//     sarlavha.textContent = "sarlavhaning nomi o'zgartirildi";
// }
// const back = () => {
//     sarlavha.textContent = 'sarlavha'
// }
// const btn = document.getElementById('btn');
// btn.onclick = change;

// function metodlari>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>➡️➡️➡️
//     toUpperCase()  harflarning hammasi bosh harf bn boshlanadi

// const array = [`sarvar`, `doniyor`, `sardor`, `temur`]
// array.forEach(function (name) {
//     const res = name.charAt().toUpperCase() + name.slice(1).toLowerCase() + `bek`
//     console.log(res);
// })

// //YUQORIDAGI ISMLARNI ARRAY KORINISHIDA CHIQARMOQCHI BO'LSAK QUYIDAGILAR>>>>>>>>>>>>>>>>➡️➡️➡️
// const array = [`sarvar`, `donior`, `sardor`, `temur`]
// const arraytwo = []
// array.forEach(function (name) {
//     const result = name.charAt().toUpperCase() + name.slice(1).toLowerCase() + 'bek'
//     arraytwo.push(result)
// })
// console.log(arraytwo);

// const user = {
//     name: 'javascript',                                   //object haqida ➡️➡️➡️
//     age: 15,
//     email: "index@gmail.com",
//     location: "Qashqadaryo",
//     langs: ['uzbek', 'english', 'turkish'],
//     login: function () {
//         console.log("siz sahifangizga kirdingiz");
//     },
//     logout: function () {
//         console.log('siz saifangizni tark etdingiz')
//     },
//     speak: function () {
//         console.log("I can speak:");
//         this.forEach(lang => {
//             console.log(lang);
//         });
//     },
// }
// user.speak()

// const user = {                                                              //➡️➡️➡️
//     langs: ['uzbek', 'english', 'turkish'],
//     login: function () { console.log("siz sahifangizga kirdingiz"); },
//     logout: function () { console.log('siz saifangizni tark etdingiz') },
//     speak: function () {
//         console.log(`I can speak:`);
//         this.langs.forEach((lang) => { console.log(lang); });
//     },
// }
// user.speak()

// const user = {                                                           //➡️➡️➡️
//     name: 'javascript',
//     age: 15,
//     email: "index@gmail.com",
//     location: "Qashqadaryo",
//     ism: `sarvar`,
//     mutaxasisligi: ['bootstrap', 'javascript', 'linux', 'React js', 'tailwind css'],
//     gapir: function () {
//         this.mutaxasisligi.forEach((calback) => { console.log(calback); }
//         )
//     }
// }
// user.gapir()//bu yerda funcsiya chaqirilyabti chuning uchun console.log yozish shart emas
// // console.log(user.age);//user ni yoshini chqarish,  bu yerda object ning value si chaqirilyabti

// const kinolar = [
//     { nomi: `avatar`, likes: '0135' },                                                   //if elde bilan➡️➡️➡️
//     { nomi: `sarvar`, likes: '15' },
//     { nomi: `tilobov`, likes: '15648' }
// ]
// const res = prompt(`kinolaringiz reytingini bilishni hohlaysizmi`)
// if (res == 'ha') {
//     kinolar.forEach((kino) => {
//         alert(`kino nomi ${kino.nomi}, yiggan layklari ${kino.likes}`);
//     })
// }
// else {
//     alert(`tizimda xatolik yuz berdi  qaytadan urunib ko'ring !!!`)
// }

// const movies = [                                                                             //foreach bilan➡️➡️➡️
//     { name: `avatar`, likes: '2615' },
//     { name: `front ortida`, likes: '351' },
//     { name: `epple haqida`, likes: '6351' },
//     { name: `loviya`, likes: '1351' },
//     { name: `qaoskorlar`, likes: '155' }
// ]
// movies.forEach((movie) => {
//     const res = `Kino nomi ${movie.name}🎥 layklari ${movie.likes}❤️ ta`
//     console.log(res);
// })

//  let num = 12.45634684156;
// console.log(Math.trunc(num));// butun sonning o'zini chiqaradi verguldan keyingi raqamlarni olib tashlaydi➡️➡️➡️
// console.log(Math.floor(num));//eng kichik  butun qismiga qarab yaxlitlaydi
// console.log(Math.ceil(num));// sonni eng katta butun songa qarab yaxlitlaydi
// console.log(Math.round(num));//sonni eng yaqin butun songa yaxlitlaydi
// console.log(Math.abs(num)); //berilgan qiymatning  mutloq  miusbat xolda qaytaradi
// console.log(Math.trunc(Math.random() * 5));
// console.log(Math.pow(162, 5));
// console.log(Math.sqrt(30));
// console.log(Number(num.toFixed(2)));
// console.log(Math.max(num));//

// const array = [`google`, [`item1`, `item2`], [1, 3], 48]    //STRING TURDAGI DATA NECHINCHI ONDEXDA LIGINI  ANIQLASH>>>>➡️➡️➡️
// for (let i = 0; i < array.length; i++) {                                 //FOR LOOP bilan
//     if (typeof array[i] == 'string') {
//         console.log('string turdagi malumot', i, 'qatorda bor');
//     }
// }

// const array = [[`item1`, `item2`], [1, 3], 48, `google`]                 //foreAch metodi bilan>>➡️➡️➡️
// array.forEach((item, i) => {
//     if (typeof item == 'string') {
//         console.log('string turdadi data', i, 'qatorda joylashgan');
//     }
// })

// BERILGAN ARRAY ning ichidan arraylarni ajratib olib uning ichidan ham item larni chiqarib yangi arrayga yuborish>➡️➡️➡️
// const datas = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], `google`]
// const newdata = []
// datas.forEach((array) => {
//     const result = Array.isArray(array)
//     if (result) {
//         array.forEach((number) => {
//             newdata.push(number)
//         })
//     }
// })
// console.log(newdata);

// const checkdata = [null, 'false', 0, 99, false, undefined, '', NaN, '0']
// const falsyres = []
// checkdata.forEach((data) => {          //BERILGAN FALSE VALUELARNI ARRAYDAN CHIQARIB BOSHQA ARRAYDA console ga CHIQARISH>>>>>➡️➡️➡️
//     if (!data) {
//         falsyres.push(data)
//     }
// })
// console.log(falsyres);

// const word = 'samarqand'               //BERILGAN SO'Z-HARFLARINI TESKARI QILIB CHIQARISH >>>>>>>>>>>>>>>>➡️➡️➡️
// const splitword = word.split('').reverse()           //1-usul
// let newword = ''
// for (let i = 0; i < splitword.length; i++) {
//     newword += splitword[i]
// }
// console.log(newword);

// const word = "Amazon"                                    //2-usul➡️➡️➡️
// const splitword = word.split("")
// let newword = "";
// for (let i = word.length - 1; i >= 0; i--) {
//     newword += splitword[i]
// }
// console.log(newword);

// const word = prompt(`biror bir malumot kiriting`)//brauzerda string data kiritilganda so'zlarning bosh
// const splitword = word.split(' ')                                   // harfin kichkina qolganlari protiv   ➡️➡️➡️
// let newWord = ''
// splitword.forEach((item) => {
//     const boshi = item.charAt().toLowerCase()
//     const davomi = item.slice(1).toUpperCase()
//     newWord += ' ' + boshi + davomi
// })
// console.log(newWord.trimStart());

// const nembers = [-1, 15, Infinity, 5.2, 0, -5, 1, 84, -5.5]  //ARRAYda HAR HIL SONLAR ICHI DA FAQAT NATURALLARINI AJRATIB
// let naturalNumbers = 0                                                  //YIGINDISINI TOPISH>>>>>>>>>>>>>>>>>>>>>>>>>>>➡️➡️➡️
// nembers.forEach((num) => {
//     //1) son 0.0 dan katta 2) son yaxlitlansa o'ziga teng 3)son cheksiz emas 4) son 0 ga teng amas>> shartlar asosida natural son topilgan
//     if (num > 0.0 && Math.floor(num) === num && num !== Infinity && num !== 0) {
//         naturalNumbers += num
//     }
// });
// console.log(naturalNumbers);

// const word = prompt("O'zingiz haqingizda qisqacha malumot bering: ")//berilgan data da nechta  a  harfi borligini aniqlash➡️➡️➡️
// let split = word.split('') //bu yerda hardoimgidek split qilib harbir harfni array qiymati sifatida ozgartiriladi
// let counter = 0
// split.forEach((word) => {
//     if (word == 'a' || word == 'A') { //kiritilgan data teng bolsa  (a) else (A)  ga if true hissoblanadi
//         counter++                      // va  counter ga bir birlik qoshib boriladi
//     }
// });
// console.log(`Siz yozgan malumot da ${counter} ta a harfi ishtirok etgan ⭐`);

// BERILGAN ARRAY DAGI MALUMOTNI DA TYPE NI BOSHQA ARRAY ICHIDA KO'RSATIB BERISH>>>>>>>.➡️➡️➡️
// const array = ['Nodira', 20.15, true, ' ', ["I'am array"], null, 145]
// const result = []
// array.forEach((element) => {
//     result.push(typeof element)
// });
// console.log(result);

// const word = 'Uzbekistan'
// console.log(word.lastIndexOf(word.slice(-1)) + 1); //bu yerda lastindexof ko'rsatilgan itemning index sini beradi➡️
// //                    ko'rsatilgan item ⬆️

// const numbers = [1, 2, 3, 4, 5]//bunda arraydagi har bir item ga o'zining indeksini qo'shib console ga chiqmoqda➡️
// const result = []
// numbers.forEach((number, i) => {
//     result.push(number + i)
// });
// console.log(result);

// //biror son berilganda  shu songacha nechta natural son bolsa hammasini yigindisini hisoblaydi➡️
// let counter = 0
// for (let i = 1; i <= 100; i++) {
//     counter += i
// }
// console.log(counter);

// const array = []
// let number = 9// bu ishda biror son berib o'tiladi , osha son har loop aylanganda i ga ko'paytiriladi va 1 ga qo'shiladi ➡️
// for (let i = 1; i <= 10; i++) {// masalan : i teng bolsa 4-loop da 4 ga, number 4 ga ko'paytiriladi va 1 qoshiladi
//     let res = number + i + 1
//     array.push(res)
// }
// console.log(array);

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]//berilgan array dagi sonlardni - son qilib chiqarish➡️
// let result = []
// const reverseFunc = (arr) => {
//     arr.forEach((num) => {
//         result.push(num * -1)
//     });
// }
// reverseFunc(numbers)
// console.log(result);

// const res = []
// const fizzbuzzFunc = function (number) {                                                    //➡️
//     for (let i = 1; i <= number; i++) {
//         if (i % 3 == 0 && i % 5 == 0) {
//             res.push('FizBuzz')
//         }
//         else if (i % 5 == 0) {
//             res.push('Buzz')
//         }
//         else if (i % 3 == 0) {
//             res.push('Fizz')
//         }
//         else {
//             res.push(i)
//         }
//     }
// }
// fizzbuzzFunc(100)
// console.log(res);

// const res = []
// const fbf = function (number) {
//     for (let i = 1; i <= number; i++) {
//         if (i % 3 == 0 && i % 5 == 0) {
//             res.push('fizzbuzz')
//         }
//         else if (i % 3 == 0) {
//             res.push('fizz')
//         }
//         else if (i % 5 == 0) {
//             res.push('buzz')
//         }
//         else (res.push(i))
//     }
//     console.log(res);
// }
// fbf(20)

// const parse= 21.65
// console.log(parseFloat(parse));

// const res = document.getElementById('text')                   //ID   bilan tanlab olish
// console.log(res);
// let result = document.getElementsByClassName('text')            //class   bilan tanlab olish
// console.log(result);
// const a=document.getElementsByName('text')                       //Name  bilan tanlab olish
// console.log(a);
// const LG = document.querySelector('.text')                         //So'rov yordamida tanlab olish
// console.log(LG);
// const LG = document.querySelector('#text')                         //So'rov yordamida tanlab olish
// console.log(LG);
// const LG = document.querySelector('h1')                         //So'rov yordamida tanlab olish
// console.log(LG);
// const LG = document.querySelector('')                         //So'rov yordamida tanlab olish
// console.log(LG);

// const arr = ['item1', 'item2', 'item3']
// // arr.unshift('add')  // arrayga elementni boshidan boshlab qoshish   ➡️➡️
// arr.pop()//arraydagi element ni olib tashlash➡️➡️
// console.log(arr);

// // string to number
// let res;
// res = Number('65168')
// res = Number('165165e-315')
// //Boolean to number
// res = Number(true)
// res = Number(false)
// res = Number(null)
// res = Number(false)
// res = Number('hello')
// res = Number(undefined)
// res = Number(NaN)
// console.log(res);

// const a = +prompt("balingizni kiriting va natijangizni bilib oling")
// const money = +prompt('pul miqdori')
// const ielts = +prompt("IELTS bor bo'lsa  1  aks holda  0  kiriting")
// if (a >= 100) {
//     console.log('qabul qilindingiz');
// }
// else if (a >= 100 || money >= 5000 && ielts == 1) {
//     console.log('oqishga qabul qilindingiz');
// }
// else if (a < 50) {
//     console.log('kirmadingiz');
// }
// else {
//     console.log('error');
// }

// let card = document.querySelector('.container')//                     ➡️➡️
// let jins = +prompt('jinsingizni kiriting ')
// if (jins == 1) {
//     card.innerHTML = `<img src="./Без названия (1).jpg" alt="">`
// }
// else if (jins == 2) {
//     card.innerHTML = `<img src="./Без названия.jpg" alt="">`
// }
// else {
//     card.innerHTML = `<h1>Bu turdagi jins topilmadi</h1>`
// }

// const card = document.querySelector('.card');//               ➡️➡️
// let jins = +prompt("Jinsingizni kiriting: ayol=1 / Erkak=2");
// if (jins == 1) {
//     card.innerHTML = `<img src="./Без названия (1).jpg" alt="">`
// }
// else if (jins == 2) {
//     card.innerHTML = `<img src="./Без названия.jpg" alt="">`
// }
// else {
//     card.innerHTML = `<h1>Bu turdagi jins topilmadi</h1>`
// }

// function myName(a, b) {
//     console.log(`${a} ning kasbi ${b}`);
// }
// myName("Sarvar", "Dizayner")
// myName("Muhammadi", "programmer")
// myName("Abdulaziz", "copyrayter")

// const arrov (salomber){
// }
// arrov('salom')

// for (let i = 0; i <= 100; i++) {
//     if (i % 2 == 1) {
//         console.log(i);
//     }
// }

// const res = +prompt("bahoni kiritish")
// if (res >= 6) {
//     console.log('5 ballik sistemada boxolanadi');
// }
// else if (res == 5) {
//     console.log("Sizga 500000 som pul ajratildi");
// }
// else if (res == 4) {
//     console.log("Sizga 400000 som pul ajratildi");
// }
// else if (res == 3) {
//     console.log("Sizga 300000 som pul ajratildi");
// }
// else if (res <= 2) {
//     console.log("Sizga pul ajratilmadi");
// }
// else if (res == String) {
//     console.log(`Sizga pul ajratilmadi`);
// }
// else {
//     console.log('not found');
// }

// const calc = (a) => {
//     return a
// }
// const res = calc(20)
// console.log(res);

// const val = function (b) {
//     const result = res * b
//     console.log(result);
// }

// const selectLang = prompt("Tilni kiriting")
// const language = {
//     uz: { Home: "Bosh sahifa", About: "Biz haqimizda" },
//     en: { Home: "Home", About: "About" }
// }
// console.log(language[selectLang]);
// //Dot nation
// //Breact nation

// let math = {
//     add: function (a, b) {
//         return a + b
//     },
//     subtrack: function (a, b) {
//         return a - b
//     },
//     multip: function (a, b) {
//         return a * b
//     },
//     devis: function (a, b) {
//         return a / b
//     },
//     degree: function (a, b) {
//         return a ** b
//     }
// }
// console.log(math.multip(15, 5));

// //🔯===========Object metod===============🔯
// const language = {
//     uz: { Home: "Bosh sahifa", About: "Biz haqimizda" },
//     en: { Home: "Home", About: "About" },
//     item3: `itemVal3`,
//     item4: `itemVal4`
// }

// const name = 'the first senior developer'//bu string metodi hisoblanadi va qavs ichida qaysi index dan boshlab
// console.log(name.substring(0,10))                        // olib qaysi indexdagi item gacha olishi yoziladi
// console.log(name.split (''));//berilgan elementni array ga aylantirib beruvchi property
// //bu propertyda qaysi elementdan keyin arrayga ajratishini qavs ichiga belgilab korsatiladi
// //misol uchun : probeldan kegin and verguldan keyin and va qaysidir harfdan kegn deb korsatilsa
// //osha korsatlgan harfni console ga chiqarilmaydi
// console.log(name.toLocaleUpperCase()); //HAmma harfrlarni katta harf bilan

// const key1 = Object.keys(language)//Xususiyatlari va usullarini o'z ichiga olgan ob'ekt. Bu siz yaratgan ob'ekt yoki mavjud Document Object Model (DOM) ob'ekti bo'lishi mumkin.
// //Ob'ektning sanab o'tiladigan qator xususiyatlari va usullarining nomlarini qaytaradi➡️
// const key2 = Object.values(language)
// //Ob'ektning sanab bo'ladigan xususiyatlarining qiymatlari qatorini qaytaradi➡️
// const key3 = Object.entries(language)
// //Ob'ektning sanab bo'ladigan xususiyatlarining kalit/qiymatlari qatorini qaytaradi➡️
// const key4 = Object.fromEntries(key3)////fromentries parametr qavslari ichiga ozgartirilishi kerak bolgan abyekt yoziladi
// //Xususiyatlar va usullar uchun kalit-qiymat yozuvlari orqali yaratilgan ob'ektni qaytaradi➡️

// let arr = [`C++`, `django`, `phyton`, `javascript`, `Flutter`]                         ////➡️
// const arr2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// // const pu = arr.push("C++")
// //push metodi array ga ohiridan element qo'shishda ishlatiladi
// // const ushif = arr.unshift("React")//unshift metodi arrayga 1 chi boshdan element qoshishda ishlatiladi
// // const shif = arr.shift()//boshidan 1 ta item olib tashlaydi
// // const po = arr.pop()//oxiridan 1 ta item ni olib tashlaydi
// // const con = arr.concat(arr2)//ikkita arrayni birbiriga qoshib yangi array yaratib beradi
// // const sli = arr2.slice(1, 5)////Massiv qismining nusxasini qaytaradi. Boshlanish va tugatish uchun massiv oxiridan
// // // ofsetni ko'rsatish uchun salbiy indeksdan foydalanish mumkin. Masalan, -2 massivning ikkinchidan oxirgi elementiga ishora qiladi.
// // console.log(`${sli} slice metod`);
// // console.log(arr2);
// // const spl = arr2.splice(1, 5);////Massivdan elementlarni olib tashlaydi va agar kerak bo'lsa, ularning o'rniga yangi
// // //elementlarni qo'shib, o'chirilgan elementlarni qaytaradi.
// // console.log(`${spl} splice metod`);
// // console.log(arr2);
// // const index = arr.indexOf("Friday")////Massivdagi qiymatning birinchi marta paydo bo'lish indeksini qaytaradi yoki
// // //agar u mavjud bo'lmasa -1 ni qaytaradi.
// // console.log(index);
// // let incl = arr.includes("phyton")////Massiv ma'lum bir elementni o'z ichiga oladimi yoki yo'qligini aniqlaydi, mos
// // // ravishda true or false qiymat qaytaradi.
// // const join = arr.join(" ")////Belgilangan ajratuvchi qator bilan ajratilgan qatorga massivning barcha elementlarini qo‘shadi.
// // const a = "Salom Amazon"
// // const newWord = a.split(``).reverse(``).join(``).toUpperCase()

// ovoz berish huquqini tekshirish uchun uchlik operator
// let age = 15;
// let result = (age >= 18) ? "You are eligible to vote." : "You are not eligible to vote yet";

// const person = {
//     name: "sarvar",/
//     surname: "Tilobov",
//     region: "Qashqadaryo",
//     age: 15,
//     job: "developer",
//     myInfo: function () {
//         return `SAlom mening ismim ${this.name} familiyam ${this.surname}, men ${this.region} viloyatida yashayman, meing yoshim ${this.age}  da va men 5 yildan buyon ${this.job} bo'lib ishlab kelaman`;
//     },
// }
// const res = person.myInfo();
// function result() {
//     console.log(res);
// }

// const names = ["sarvar", "farxod", "jonbek"]
// names.forEach(function (name) {
//     const newIsm = name.charAt()
//     // .toUpperCase() + name.slice(1)
//     console.log(newIsm);
// })

// const input = document.querySelector("input")
// function hide() {
//     input.setAttribute("type", "password")
// }
// function show() {
//     input.setAttribute("type", "text")
// }

// const content = document.querySelector(".text");
// // content.style.color = "red";
// // content.style.backgroundColor = "green";
// // content.style.fontWeight= "600"
// // content.style.cssText = "color:red; background-color:green; font-weight:600"
// const input = document.querySelector("input");
// function show() {
//     return input.setAttribute("type", "text")
// }
// function hide() {
//     return input.setAttribute("type", "password")
// }

// let jm = ["Amazon", "Google", "Nike", "result"]//=======================
// for (let i = 0; i < jm.length; i++) {
//     const ress = (jm[i].charAt(5));
//     if (ress) {
//         console.log(ress);
//     }
//     else if (ress == "") {
//         // console.log("err");
//     }
//     else {
//         console.log("else block worked");
//     }
// }

// {
// answer================================================
// let change = function () {
//     const m = document.querySelector(".text")
//     m.textContent = "new heading"
//     m.setAttribute("class", "nClass");
//     console.log(m.getAttribute("class"));
// }
// function fnc2() {
//     let newM = document.querySelector(".ch")
//     return newM.textContent = "ozgarish"
// }

// if()
// answer=====================
// const a = [1, 2, 3]
// const b = ["s", "b", "v"]
// console.log(...a, ...b);
// }

// let official = document.querySelector(".text")
// let btn = document.querySelector("button")
// const textChange = () => {
//     official.textContent = "done successfully "
// }
// function colorChange() {
//     official.style.cssText = `color:red`
// }
// btn.addEventListener("click", colorChange)
// btn.addEventListener('click', textChange)

// let btn = document.querySelector(".btn")
// const t = document.querySelector(".text")
// function changeStyle() {
//     t.style.cssText = "background-color:green"
// }
// btn.addEventListener("click", changeStyle)

// //=============================================================================================================
// const dataBase = [
//     { link: "https://static.500px.com/equipments/camera-1501.jpg", type: "apple", price: 1000, id: 1 },
//     { link: "https://static.500px.com/equipments/camera-1499.jpg", type: "apple", price: 1000, id: 2 },
//     { link: "https://static.500px.com/equipments/camera-1337.jpg", type: "samsung", price: 1500, id: 3 },
//     { link: "https://static.500px.com/equipments/camera-1383.jpg", type: "samsung", price: 1500, id: 4 },
//     { link: "https://assets.asaxiy.uz/product/items/desktop/45fbc6d3e05ebd93369ce542e8f2322d20221215170027675293eIQ1hgOls.png.webp", type: "huawei", price: 2000, id: 5 },
//     { link: "https://assets.asaxiy.uz/product/items/desktop/2e4fb1ddb61e8e45740ed0415f2b28b02023080216475836093BPxc0JpPBr.png.webp", type: "huawei", price: 2000, id: 6 },
//     { link: "https://cdn.nguyenkimmall.com/images/thumbnails/382/382/detailed/866/10055096-dien-thoai-xiaomi-redmi-12c-4gb-64gb-xanh-duong-1.jpg", type: "redmi", price: 5000, id: 7 },
//     { link: "https://angkormeas.com/wp-content/uploads/2023/12/NA_Redmi12c-300x300.jpg", type: "redmi", price: 5000, id: 8 },
//     { link: "https://i.pinimg.com/474x/c8/78/70/c878701d84b33538797f70261543019f.jpg", type: "techno", price: 1100, id: 9 },
//     { link: "https://public.carlcare.com/public/fd683975fbea7dceb19f7407a6e7937a.jpg", type: "techno", price: 1100, id: 10 },
// ]
// const box = document.querySelector(".item")//box element tanlab olish
// const select = document.querySelector(".select")//select element ni tanlab olish
// const newArr = [] //yangi array. bu yerga addfunc ichidagi if block dan qiymatlar kelib tushadi
// const addFunc = (data) => {//asosiy function
//     let image = document.createElement("img");//rasm element yaratish
//     image.setAttribute("src", data.link);//yaratilgan element ga src atribute qo'shish
//     image.setAttribute("alt", data.id);//itemga alt atribute qo'shish
//     image.dataset.type = data.type;
//     image.style.cssText = "width:300px; height:300px; border-radius:10px; margin:20px";//img ga style berish
//     let optionItem = document.createElement("option");//har bir iteratsiyada option item yaratilmoqda
//     if (!newArr.includes(data.type)) {//bu line da newArr ichida data.type bor yoqligi tekshiriladi ! belgisi borligi uchun false qiymatni true ga aylantirib beradi
//         newArr.push(data.type)//birinchi iteratsiyada false chiqadi va newArr ga o'sha qiymatni yuboradi ikkinchi iteratsiyada true qaytadi,va ! belgi borligi uchun ikkinchi (sinonim)word ni qoshib yubormaydi
//         select.append(optionItem); //select ni ichiga qo'shilmoqda optionItem                                                                ⬆️natijada sinonim sozlar 2tadan takrorlanib chiqmaydi
//     }
//     optionItem.textContent = data.type;//option itemga object type tenglash
//     box.append(image); //box itemga image ni  qo'shish
// };
// for (let i = 0; i < dataBase.length; i++) {//asosiy iteratsiya
//     addFunc(dataBase[i])//iteratsiyada asosiy funcsiya chaqirilib argumentiga object ning i chisi berib yuborish
// }
// //=============================================================================================================

// const para = document.querySelectorAll("p")
// para.forEach((text) => {
//   if(text.textContent.includes("succes")){////bu lineda harbir iteratsiyada kelgan element tekshiriladi
//     text.classList.add("succes")                  //// if contenttida succes bolsa shu nomli klass qoshib qoyiladi
//   }
//   if(text.textContent.includes("error")){////bu line da esa error ga tekshirilmoqda
//     text.classList.add("error")
//   }
// })

// const content = document.querySelector("p")
// console.log(content.classList.add("succes"));////bu line da tanlab olingan itemga succes clasi qoshildi
// content.classList.add("error")////bu lineda arror qo'shildi
// console.log(content.classList.remove("error"));////bu line da error olib tashlandi

// let btn = document.querySelector("btn")
// btn = addEventListener("click", function (a) {
//     console.log(a.target);
// })

// const a = document.querySelector("article")
// // //const b = a.children;//bu yerda html collection  qaytadi va bunda foreach ishlamaydi
// // // Array.from(a.children).forEach((child) => {//Array.from() colleksiyani arrayga ozgartiradi va forEach ishlaydi
// // //     child.classList.add("article-child")//arrayning har bir itemi uchun classList orqali
// // //     console.log(child);
// // // });
// // //for (let i = 0; i < b.length; i++) {
// // //  b[i].classList.add("newClass")
// // //   console.log(b[i]);
// // //}

// //=============akhror web  50 -dars=====================
// const li = document.querySelectorAll("li")
// const ul = document.querySelector("ul")
// const button = document.querySelector("button")
// button.addEventListener("click", (e) => {
//     // ul.innerHTML += "<li>Create item</li>"
//     const c = document.createElement('li')
//     c.textContent = "new item"
//     // c.addEventListener("click", (i) => {
//     //     i.target.remove()
//     // })
//     ul.prepend(c)
// })
// li.forEach((i) => {
//     i.addEventListener("click", (e) => {
//         // e.target.style.cssText = "text-decoration:line-through; opacity:0.5";
//         // e.target.remove()
//         // e.stopPropagation()
//     })
// })
// ul.addEventListener("click", function (e) {
//     // if (e.target.tagName == 'LI') {
//        // e.target.remove()
//     // }
//     // console.log(e.target.tagName);
// })

// //=============== variable page=====================
// const container = document.querySelector('.container')
// let input = document.querySelectorAll('.input')
// const btn1 = document.querySelector('.btn1')
// const card1 = document.querySelector(".card1")
// const card2 = document.querySelector(".card2")
// const i = document.querySelector(".fa-x")
// const btn2 = document.querySelector(".btn2")
// btn1.addEventListener("click", function () {
//     card1.classList.replace("hidden", "visible")
//     btn1.classList.add("hidden")
// })
// i.addEventListener("click", function () {
//     btn1.classList.remove('hidden')
//     card1.classList.replace("visible", 'hidden')
// })
// btn2.addEventListener("click", function () {
//     card1.classList.replace('visible', 'hidden')
//     card2.classList.replace('hidden', 'visible')
// })
//// =============== variable page=====================

// // ==============mouse codes =======================
// let mouse = document.querySelector('.mouse')
// window.addEventListener("mousemove", (e) => {
//     const x = e.clientX
//     const y = e.clientY
//     mouse.style.cssText = `transform:translate(${x}px, ${y}px)`
// })// ==============mouse codes =======================

// document.addEventListener("DOMContentLoaded", function () {
//     var button = document.getElementById("myButton");
//     var input = document.getElementById("myInput");
//     button.addEventListener("click", function () {
//         var inputValue = input.value.trim();
//         if (inputValue.length < 4) {
//             input.style.border = "3px solid red";
//         } else if (inputValue.length > 8) {
//             input.style.border = "3px solid green";
//         }
//     });
// });

// const arr = ['php', 'ruby', 'golang', 'js', 'vue js', 'angular', 'react js'];
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const copy = array   //Shallow clone / copy
// copy.push(11)
// console.log("1 :", array);
// console.log("2 :", copy);

// const clone = []
// for (let i of array) {// Deep clone / copy
//     clone.push(i)
// }
// clone.push(10)
// console.log(array);
// console.log(clone);

// const clone = []
// array.forEach(el => {// Deep copy / clone
//     clone.push(el)
// })
// clone.push(11)
// console.log(array);
// console.log(clone);

// const clone = array.map(el => el)
// array.push(12)
// clone.push(11)
// console.log(array);
// console.log(clone);

// const [one, two, three, four, ...any] = arr
// const id1 = one
// const id4 = four
// console.log(id4);

// const car = {
//     isName: 'Mercedes-Benz',
//     color: 'black',
//     speed: 196,
//     full: {
//         country: 'Germany',
//         date: {
//             startedAt: '20/15/2020',
//             finishedAt: '20/15/2030',
//         }
//     }
// }
// const { isName, color, speed, full: { country, date: { startedAt, finishedAt } } } = car
// console.log(isName, color, speed, country, startedAt, finishedAt);

// const btn = document.querySelector('.btn');
// let a = 0;
// const dt = setInterval(() => {
//     a++;
//     console.log(`step${a}`);
// }, 1000)
// btn.addEventListener('click', () => {
//     clearInterval(dt)
// })

// const div = document.querySelector('.divI')
// const btn = document.querySelector('button')
// let i = 0;
// const dt = setInterval(() => {
//     i++
//     const item = document.createElement('h1')
//     item.innerHTML = `step ${i}`
//     div.append(item)
// }, 1000)
// btn.addEventListener('click', () => { div.remove() })
// setTimeout(() => {
//     clearInterval(dt)
// }, 3000);

// async function getWork() {
//     let stop = await 100;
//     for (let i = 0; i <= stop; i++) {
//         console.log(i);
//     }
// }
// getWork()
// console.log('hello');

// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const promise = new Promise((resolve, reject) => {
//     if (data) {
//         return resolve('resollve wrked ')
//     } else {
//         return reject('arr is not definet')
//     }
// });
// // console.log(promise);
// container.textContent = JSON.stringify(data, null, 2);

// promise.then((db) => console.log(db)).catch((bb) => console.log(bb))

// const ism = false;
// const my = () => {
//     return new Promise((resolve, reject) => {
//         if (ism) {
//             resolve(console.log('resolve worked'));
//         } else {
//             reject(console.log('reject worked'));
//         }
//     })
// }
// my().then((data0) => { return data0 }).catch((data1) => { return data1 })

// const container = document.querySelector('.container');
// const base = 'https://fakestoreapi.com';
// function f() {
//     return fetch(`${base}/products`)
//         .then((res) => res.json())
//         .then((data) => {
//             fr(data)
//         });
// }
// function fr(it) {
//     it.forEach(e => {
//         const box = document.createElement('div')
//         const img = document.createElement('img')
//         const newItem = document.createElement('div')
//         const ds = document.createElement('div')
//         box.setAttribute('class', 'card bg-primary mt-5 w-25 p-1')
//         img.setAttribute('src', `${e.image}`)
//         newItem.innerHTML = `<h5>${e.title}</h5>`
//         ds.innerHTML = `<p>${e.description}</p>`
//         ds.setAttribute('class', 'ds')
//         box.append(img)
//         box.append(newItem)
//         box.append(ds)
//         container.append(box)
//     });
// }
// f();

// const container = document.querySelector('.container');
// const data_base = 'fakestoreapi';

// const f = () => fetch(`${data_base}/products`).then((data1) => data1.json().then((data2) => fR(data2)));
// let data = function (data) return data.forEach(e => {});

// const person = {
//     isName: 'Sarvarbek',
//     age: 16,
//     id: 15,
// }
// function f() {
//     console.log(`isName: ${this.isName}, age:  ${this.age}, id: ${this.id}`);
// }
// // f.call({ isName: `Sarvar`, age: `16`, id: `1` })
// f.call(person)

// const list = [
//     {
//         "id": 7,
//         "email": "michael.lawson@reqres.in",
//         "first_name": "Michael",
//         "last_name": "Lawson",
//         "avatar": "https://reqres.in/img/faces/7-image.jpg"
//     },
//     {
//         "id": 8,
//         "email": "lindsay.ferguson@reqres.in",
//         "first_name": "Lindsay",
//         "last_name": "Ferguson",
//         "avatar": "https://reqres.in/img/faces/8-image.jpg"
//     },
//     {
//         "id": 9,
//         "email": "tobias.funke@reqres.in",
//         "first_name": "Tobias",
//         "last_name": "Funke",
//         "avatar": "https://reqres.in/img/faces/9-image.jpg"
//     },
// ]
// function start() {
//     console.log(`isName: ${this.first_name} last-name: ${this.last_name}, email: ${this.email}`);
// }
// for (let i of list) {
//     start.call(i)
// }
// // list.forEach(e => {
// //     console.log(`last-name :${e.last_name},first-name :${e.first_name} email: ${e.email}`);
// // });

// const url = "https://jsonplaceholder.typicode.com";
// async function app() {
//     try {
//         const response = await fetch(`${url}/posts`);
//         const res = await response.json();
//         console.log(res);
//     }
//     catch (err) {
//         console.log(err);
//     }
// };
// app()

// const epam = ['window-1', 'window-2', 'window-3', 'window-4', 'window-5']
// let clone = [...epam];
// console.log(clone[2]);

// const personInfo = {
//     id: 2,
//     description: 'this is good developer',
//     level: "senior",
// }
// const pClone = { ...personInfo };

// //====================================================================================================//➡️➡️➡️
// const seriesDb = {
//   actors: [],
//   count: 0,
//   genres: false,
//   private: false,
//   series: {},
//   start: function () {
//     seriesDb.count = +prompt("nechta serial ho'rdingiz", "");
//     while (
//       seriesDb.count == "" ||
//       seriesDb.count == null ||
//       seriesDb.count == isNaN(seriesDb.count)
//     ) {
//       seriesDb.count = +prompt("nechta serial ko'rdingiz", "");
//     }
//   },
//   rememberMySeries: function () {
//     for (let i = 0; i < 2; i++) {
//       const a = prompt("ohirgi korgan serialingiz"),
//         b = prompt("nechi baho berasiz ");
//       if (a != null && b != null && a != "" && b != "") {
//         seriesDb.series[a] = b;
//         console.log("done");
//       } else {
//         console.log("error");
//         i--;
//       }
//     }
//   },
//   detectLevelSeries: function () {
//     if (seriesDb.count < 5) {
//       console.log("Kam serial ko'ribsiz");
//     } else if (5 < seriesDb.count < 10) {
//       console.log("siz klassik tomoshabin ekansiz");
//     } else if (seriesDb.count >= 10) {
//       console.log("siz meyordan ortiq serial ko'rasiz");
//     } else {
//       console.log("Error");
//     }
//   },
//   showDb: function () {
//     if (!seriesDb.private) {
//       console.log(seriesDb);
//     }
//   },

//   // writeGenres: function () {
//   //   for (let i = 0; i <= 2; i++) {
//   //     seriesDb .genres[i]= prompt(`Yaxxshi ko'rgan janringiz ${i + 1}`);}
//   //   }
// }; 

// function writeGenres(){
//   for(let i=0; i<=2; i++){
//     const genre = prompt(`Yaxshi ko'rgan serialingiz ${i+1}`)
//     console.log(ganre);
//   }
// }
// writeGenres()


// // const a = prompt("ohirgi korgan serialingiz"),
// //     b = prompt("nechi baho berasiz"),
// //     c = prompt("ohirgi korgan serialingiz"),
// //     d = prompt("nechi baho berasiz ");
// // seriesDB.series[a] = b;// bu kodda abyekt ga xususiyat berilmoqda yani a= (ohirgi korgan serial) b=(bahosiga) shunda seriesDb ichida  key=[a] and Value=b boladi
// // seriesDB.series[c] = d;//object ga hususiyat berayotganda [] bn beriladdi
// //====================================================================================================
