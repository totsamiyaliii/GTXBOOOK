const books = [
  ///Hammasi////////////////////////////////////////////////////
  {
    title: "Alkimyogar",
    author: "Paulo Coelho",
    cover: "covers/alkimyogar.png",
    file: "books/alkimyogar.pdf",
    genre: "Falsafiy Jahon nasri",
    year: 1988
  },
  {
    title: "O‘tkan kunlar",
    author: "Abdulla Qodiriy",
    cover: "covers/2.jpg",
    file: "books/2.pdf",
    genre: "Tarixiy roman",
    year: 1925
  },
  {
    title: "Molxona",
    author: "Jorj Oruel",
    cover: "covers/3.jpg",
    file: "books/3.pdf",
    genre: "Satira",
    year: 1945
  },
  {
    title: "Alvido bolalik",
    author: "Tohir Malik",
    cover: "covers/4.jpg",
    file: "books/4.pdf",
    genre: "O`zbek Nasri",
    year: 1983
  },
  {
    title: "Mehrobdan Chayon",
    author: "Abdulla Qodiriy",
    cover: "covers/5.jpg",
    file: "books/5.pdf",
    genre: "Tarixiy roman",
    year: 1929
  },
  {
    title: "Saylanma",
    author: "Abdulla Oripov",
    cover: "covers/6.jpg",
    file: "books/6.pdf",
    genre: "She’riyat",
    year: 1995
  },
  {
    title: "Dunyoning ishlari",
    author: "O‘tkir Hoshimov",
    cover: "covers/7.jpg",
    file: "books/7.pdf",
    genre: "Dramatik hikoya",
    year: 1982
  },
  {
    title: "Sarviqomat Dilbarim",
    author: "Chingiz Aytmatov",
    cover: "covers/8.jpg",
    file: "books/8.pdf",
    genre: "Adabiy hikoya",
    year: 1966
  },
  {
    title: "Tunda kechgan Umrlar",
    author: "O‘tkir Hoshimov",
    cover: "covers/9.webp",
    file: "books/9.pdf",
    genre: "Dramatik hikoya",
    year: 1984
  },
  {
    title: "Shaytanat 1",
    author: "Tohir Malik",
    cover: "covers/10.jpg",
    file: "books/10.pdf",
    genre: "Detektiv",
    year: 1993
  },
  {
    title: "Shaytanat 2",
    author: "Tohir Malik",
    cover: "covers/10.jpg",
    file: "books/11.pdf",
    genre: "Detektiv",
    year: 1994
  },
  {
    title: "Shaytanat 3",
    author: "Tohir Malik",
    cover: "covers/10.jpg",
    file: "books/12.pdf",
    genre: "Detektiv",
    year: 1995
  },
  {
    title: "Shaytanat 4",
    author: "Tohir Malik",
    cover: "covers/10.jpg",
    file: "books/13.pdf",
    genre: "Detektiv",
    year: 1996
  },
  {
    title: "Shaytanat 5",
    author: "Tohir Malik",
    cover: "covers/10.jpg",
    file: "books/14.pdf",
    genre: "Detektiv",
    year: 1997
  },
  {
    title: "Xatolaring bilan Sevaman",
    author: "Senaiy Demerjiy",
    cover: "covers/15.jpg",
    file: "books/15.pdf",
    genre: "Romantik Jahon nasri",
    year: 2016
  },
  {
    title: "Qulogim Senda Qizim",
    author: "Abdulloh Abdulmatiy",
    cover: "covers/16.jpg",
    file: "books/16.pdf",
    genre: "Sharq mumtoz adabiyoti",
    year: 2010
  },
  {
    title: "Qiyomat",
    author: "Chingiz Aytmatov",
    cover: "covers/17.jpg",
    file: "books/17.pdf",
    genre: "Falsafiy roman",
    year: 1986
  },
  {
    title: "Muqaddima",
    author: "Ibn Xaldun",
    cover: "covers/18.jpg",
    file: "books/18.pdf",
    genre: "Tarix-falsafa",
    year: 1377
  },
  {
    title: "Jannat qidirgan Umrlar",
    author: "Shuhrat",
    cover: "covers/19.jpg",
    file: "books/19.pdf",
    genre: "Adabiy hikoya",
    year: 1980
  },
  {
    title: "Olis yulduzlar ostida",
    author: "Shukur Xolmirzayev",
    cover: "covers/20.jpg",
    file: "books/20.pdf",
    genre: "Adabiy hikoya",
    year: 1976
  },
  {
    title: "Bolalik va umr ko‘chalari",
    author: "Erkin Malik",
    cover: "covers/21.jpg",
    file: "books/21.pdf",
    genre: "Adabiy dram",
    year: 1991
  },
  {
    title: "Tosiqlarga qaramay sevdik",
    author: "Mirach Chig‘atoy",
    cover: "covers/22.jpg",
    file: "books/22.pdf",
    genre: "Romantik hikoya",
    year: 2018
  },
  {
    title: "Hokimiyatning 48 qoidasi",
    author: "Robert Grin",
    cover: "covers/23.jpg",
    file: "books/23.pdf",
    genre: "Psixologiya",
    year: 1998
  },
  {
    title: "Bizni yolg‘iz deb o‘yladilar",
    author: "Shongul Unsal",
    cover: "covers/24.jpg",
    file: "books/24.pdf",
    genre: "Jahon nasri",
    year: 2020
  },
  {
    title: "Qalb iffati",
    author: "Nurian Cheleen",
    cover: "covers/25.jpg",
    file: "books/25.pdf",
    genre: "Romantik hikoya",
    year: 2021
  },
  {
    title: "Axmoqlik qilmang",
    author: "Jen Sincero",
    cover: "covers/26.jpg",
    file: "books/26.pdf",
    genre: "Jahon nasri",
    year: 2013
  },
  {
    title: "Pul psixologiyasi",
    author: "Morgan Housel",
    cover: "covers/27.jpg",
    file: "books/27.pdf",
    genre: "Moliyaviy psixologiya",
    year: 2020
  },
  {
    title: "Yashamoq",
    author: "Yu Hua",
    cover: "covers/28.jpg",
    file: "books/28.pdf",
    genre: "Adabiy dram",
    year: 1993
  },
  {
    title: "Duo taqdirni o‘zgartiradi",
    author: "Atham Amin Nemutlu",
    cover: "covers/29.jpg",
    file: "books/29.pdf",
    genre: "Sharq mumtoz adabiyoti",
    year: 2015
  },
  {
    title: "Asarga tatigulik kun",
    author: "Chingiz Aytmatov",
    cover: "covers/30.jpg",
    file: "books/30.pdf",
    genre: "Adabiy hikoya",
    year: 1980
  }, {
    title: "Ming Quyosh",
    author: "Xolid Husayniy",
    cover: "covers/31.jpg",
    file: "books/31.pdf",
    genre: "O`zbek Nasri",
    year: 2007
  },
  {
    title: "Tazkirotul Avliyo",
    author: "Fazliddin Attor",
    cover: "covers/32.jpg",
    file: "books/32.pdf",
    genre: "Sharq mumtoz adabiyoti",
    year: 1310
  },
  {
    title: "Uchgacha ayni vaqt",
    author: "Masara Ibuku",
    cover: "covers/33.jpg",
    file: "books/33.pdf",
    genre: "Psixologiya",
    year: 2019
  },
  {
    title: "Men",
    author: "Duman Fotx",
    cover: "covers/34.jpg",
    file: "books/34.pdf",
    genre: "Jahon nasri",
    year: 2021
  },
  {
    title: "Qiyomat va Oxirat",
    author: "Imom G‘azzoliy",
    cover: "covers/35.jpg",
    file: "books/35.pdf",
    genre: "Sharq mumtoz adabiyoti",
    year: 1100
  },
  {
    title: "Boy ota kambag‘al ota",
    author: "Robert Kiyosaki",
    cover: "covers/36.jpg",
    file: "books/36.pdf",
    genre: "Moliyaviy Jahon nasri",
    year: 1997
  },
  {
    title: "Ikki eshik orasi",
    author: "O‘tkir Hoshimov",
    cover: "covers/37.jpg",
    file: "books/37.pdf",
    genre: "Adabiy dram",
    year: 1984
  },
  {
    title: "Ko‘rlik",
    author: "Joze Saramago",
    cover: "covers/38.jpg",
    file: "books/38.pdf",
    genre: "Falsafiy roman",
    year: 1995
  },
  {
    title: "Yolvoraman Xiyonat Qilma",
    author: "Amina Shelkugli",
    cover: "covers/39.jpg",
    file: "books/39.pdf",
    genre: "Romantik",
    year: 2018
  },
  {
    title: "Yaralangan joyingizdan gullaysiz",
    author: "So‘ngul Unsal",
    cover: "covers/40.jpg",
    file: "books/40.pdf",
    genre: "Jahon nasri",
    year: 2019
  },
  {
    title: "Atom Odamlar",
    author: "Jeyms Klir",
    cover: "covers/41.jpg",
    file: "books/41.pdf",
    genre: "Jahon nasri",
    year: 2018
  },
  {
    title: "Urush sanati",
    author: "Sun Zi",
    cover: "covers/42.jpg",
    file: "books/42.pdf",
    genre: "Strategiya",
    year: -500
  },
  {
    title: "Sariq devni minib",
    author: "Xudoyberdi To‘xtaboyev",
    cover: "covers/43.jpg",
    file: "books/43.pdf",
    genre: "Bolalar adabiyoti",
    year: 1971
  },
  {
    title: "Garri Poter 1",
    author: "J.K. Rowling",
    cover: "covers/44.jpg",
    file: "books/44.pdf",
    genre: "Fantastika",
    year: 1997
  },
  {
    title: "Garri Poter 2",
    author: "J.K. Rowling",
    cover: "covers/44.jpg",
    file: "books/45.pdf",
    genre: "Fantastika",
    year: 1998
  },
  {
    title: "Garri Poter 3",
    author: "J.K. Rowling",
    cover: "covers/44.jpg",
    file: "books/46.pdf",
    genre: "Fantastika",
    year: 1999
  },
  {
    title: "Garri Poter 4",
    author: "J.K. Rowling",
    cover: "covers/44.jpg",
    file: "books/47.pdf",
    genre: "Fantastika",
    year: 2000
  },
  {
    title: "Garri Poter 5",
    author: "J.K. Rowling",
    cover: "covers/44.jpg",
    file: "books/48.pdf",
    genre: "Fantastika",
    year: 2003
  },
  {
    title: "Garri Poter 6",
    author: "J.K. Rowling",
    cover: "covers/44.jpg",
    file: "books/49.pdf",
    genre: "Fantastika",
    year: 2005
  },
  {
    title: "Garri Poter 7",
    author: "J.K. Rowling",
    cover: "covers/44.jpg",
    file: "books/50.pdf",
    genre: "Fantastika",
    year: 2007
  },
  {
    title: "Ko‘xna dunyo",
    author: "Odil Yoqubov",
    cover: "covers/51.webp",
    file: "books/51.pdf",
    genre: "Tarixiy roman",
    year: 1975
  },
  {
    title: "Hamlet",
    author: "Vilyam Shekspir",
    cover: "covers/52.jpg",
    file: "books/52.pdf",
    genre: "Dramaturgiya",
    year: 1601
  },
  {
    title: "Odamiylik Mulki",
    author: "Tohir Malik",
    cover: "covers/53.jpg",
    file: "books/53.pdf",
    genre: "Adabiy dram",
    year: 1986
  },
  {
    title: "Murdalar gapirmaydilar",
    author: "Tohir Malik",
    cover: "covers/54.jpg",
    file: "books/54.pdf",
    genre: "Detektiv",
    year: 1985
  },
  {
    title: "Yulduzlar mangu yonadi",
    author: "Tog‘ay Murod",
    cover: "covers/55.jpg",
    file: "books/55.pdf",
    genre: "Adabiy hikoya",
    year: 1984
  },
  {
    title: "Qizil va qora",
    author: "Stendal",
    cover: "covers/56.jpg",
    file: "books/56.pdf",
    genre: "Klassik roman",
    year: 1830
  },
  {
    title: "Kafansiz ko‘milganlar",
    author: "Shukrullo",
    cover: "covers/57.jpg",
    file: "books/57.pdf",
    genre: "Adabiy hikoya",
    year: 1960
  },
  {
    title: "Oltin zanglamas",
    author: "Shuhrat",
    cover: "covers/58.png",
    file: "books/58.pdf",
    genre: "Adabiy hikoya",
    year: 1962
  },
  {
    title: "Guliston",
    author: "Sa‘diy Sheroziy",
    cover: "covers/59.jpg",
    file: "books/59.pdf",
    genre: "She’riyat",
    year: 1258
  },
  {
    title: "Yulduzli tunlar",
    author: "Pirimqul Qodirov",
    cover: "covers/60.jpg",
    file: "books/60.pdf",
    genre: "Tarixiy roman",
    year: 1972
  },
  {
    title: "Navoiy",
    author: "Oybek",
    cover: "covers/61.jpg",
    file: "books/61.pdf",
    genre: "Tarixiy biografiya",
    year: 1943
  },
  {
    title: "Nur borki, soya bor",
    author: "O‘tkir Hoshimov",
    cover: "covers/62.jpg",
    file: "books/62.pdf",
    genre: "Adabiy hikoya",
    year: 1988
  },
  {
    title: "Ikki karra ikki besh",
    author: "O‘tkir Hoshimov",
    cover: "covers/63.jpg",
    file: "books/63.pdf",
    genre: "Adabiy hikoya",
    year: 1983
  },
  {
    title: "Bahor qaytmaydi",
    author: "O‘tkir Hoshimov",
    cover: "covers/64.jpg",
    file: "books/64.pdf",
    genre: "Adabiy hikoya",
    year: 1976
  }, {
    title: "Ulug‘bek xazinasi",
    author: "Odil Yoqubov",
    cover: "covers/65.jpg",
    file: "books/65.pdf",
    genre: "Tarixiy roman",
    year: 1974
  },
  {
    title: "Xalq bo‘l, elim",
    author: "Muhammad Yusuf",
    cover: "covers/66.jpg",
    file: "books/66.pdf",
    genre: "She’riyat",
    year: 1995
  },
  {
    title: "Payg‘ambarlar Tarixi",
    author: "Muhammad Sayyid Tantoviy",
    cover: "covers/67.jpg",
    file: "books/67.pdf",
    genre: "Sharq mumtoz adabiyoti",
    year: 1999
  },
  {
    title: "Usta va Margarita",
    author: "Mixail Bulgakov",
    cover: "covers/68.jpg",
    file: "books/68.pdf",
    genre: "Fantastika",
    year: 1940
  },
  {
    title: "Zulmat ichra nur",
    author: "Mirkarim Osim",
    cover: "covers/69.jpg",
    file: "books/69.pdf",
    genre: "Adabiy hikoya",
    year: 1986
  },
  {
    title: "Tom Soyerning yangi sarguzashtlari",
    author: "Mark Tven",
    cover: "covers/70.jpg",
    file: "books/70.pdf",
    genre: "Klassika",
    year: 1876
  },
  {
    title: "Gul va Navroz",
    author: "Lutfiy",
    cover: "covers/71.jpg",
    file: "books/71.pdf",
    genre: "She’riyat",
    year: 1430
  },
  {
    title: "Qobusnoma",
    author: "Kaykovus",
    cover: "covers/72.jpg",
    file: "books/72.pdf",
    genre: "Nasihatnoma",
    year: 1082
  },
  {
    title: "Yo‘l-yo‘l poyjoma kiygan bolakay",
    author: "Jon Boyn",
    cover: "covers/73.jpg",
    file: "books/73.pdf",
    genre: "Tarixiy hikoya",
    year: 2006
  },
  {
    title: "Bonu",
    author: "Iqbol Mirzo",
    cover: "covers/74.jpg",
    file: "books/74.pdf",
    genre: "She’riyat",
    year: 2003
  },
  {
    title: "Tom tog‘aning kulbasi",
    author: "Garriet Bicher-Stou",
    cover: "covers/75.jpg",
    file: "books/75.pdf",
    genre: "Klassika",
    year: 1852
  },
  {
    title: "Buyuk Getsbi",
    author: "Frensis Skott Fitsjerald",
    cover: "covers/76.jpeg",
    file: "books/76.pdf",
    genre: "Klassik roman",
    year: 1925
  },
  {
    title: "Zanjirband Prometey",
    author: "Esxil",
    cover: "covers/77.jpg",
    file: "books/77.pdf",
    genre: "Tragediya",
    year: -456
  },
  {
    title: "Ruhlar isyoni",
    author: "Erkin Vohidov",
    cover: "covers/78.jpg",
    file: "books/78.pdf",
    genre: "She’riyat",
    year: 1989
  },
  {
    title: "Champo otli ilon",
    author: "Erkin Malik",
    cover: "covers/79.jpg",
    file: "books/79.pdf",
    genre: "Adabiy hikoya",
    year: 2001
  },
  {
    title: "Kecha va Kunduz",
    author: "Cho‘lpon",
    cover: "covers/80.jpg",
    file: "books/80.pdf",
    genre: "Tarixiy roman",
    year: 1934
  },
  {
    title: "Kassandra tamg‘asi",
    author: "Chingiz Aytmatov",
    cover: "covers/81.jpg",
    file: "books/81.pdf",
    genre: "Falsafiy hikoya",
    year: 1986
  },
  {
    title: "Baskervillar iti",
    author: "Artur Konan Doyl",
    cover: "covers/82.jpg",
    file: "books/82.pdf",
    genre: "Detektiv",
    year: 1902
  },
  {
    title: "Sherlok Xolms haqida hikoyalar",
    author: "Artur Konan Doyl",
    cover: "covers/83.jpg",
    file: "books/83.pdf",
    genre: "Detektiv",
    year: 1892
  },
  {
    title: "Kapitan Vrungelning sarguzashtlari",
    author: "Andrey Nekrasov",
    cover: "covers/84.jpg",
    file: "books/84.pdf",
    genre: "Sarguzasht",
    year: 1937
  },
  {
    title: "Mahbub ul-qulub",
    author: "Alisher Navoiy",
    cover: "covers/85.jpg",
    file: "books/85.pdf",
    genre: "Nasihatnoma",
    year: 1500
  },
  {
    title: "Graf Monte Kristo",
    author: "Aleksandr Dyuma",
    cover: "covers/86.jpg",
    file: "books/86.pdf",
    genre: "Sarguzasht",
    year: 1844
  },
  {
    title: "O‘nta negr bolasi",
    author: "Agata Kristi",
    cover: "covers/87.jpg",
    file: "books/87.pdf",
    genre: "Detektiv",
    year: 1939
  },
  {
    title: "Daxshat",
    author: "Abdulla Qahhor",
    cover: "covers/88.jpg",
    file: "books/88.pdf",
    genre: "Adabiy hikoya",
    year: 1958
  },
  {
    title: "Iblis devori (qissa)",
    author: "Tohir Malik",
    cover: "covers/89.jpg",
    file: "books/89.pdf",
    genre: "Detektiv",
    year: 1987
  },
  {
    title: "Urush va tinchlik (IV tom)",
    author: "Lev Tolstoy",
    cover: "covers/90.jpg",
    file: "books/90.pdf",
    genre: "Tarixiy roman",
    year: 1869
  },
  {
    title: "Urush va tinchlik (III tom)",
    author: "Lev Tolstoy",
    cover: "covers/91.jpg",
    file: "books/91.pdf",
    genre: "Tarixiy roman",
    year: 1869
  },
  {
    title: "Urush va tinchlik (II tom)",
    author: "Lev Tolstoy",
    cover: "covers/92.jpg",
    file: "books/92.pdf",
    genre: "Tarixiy roman",
    year: 1869
  },
  {
    title: "Dunyoning ishlari",
    author: "O‘tkir Hoshimov",
    cover: "covers/93.jpg",
    file: "books/93.pdf",
    genre: "Adabiy hikoya",
    year: 1982
  },
  {
    title: "Urush va Tinchlik (I tom)",
    author: "Lev Tolstoy",
    cover: "covers/94.jpg",
    file: "books/94.pdf",
    genre: "Tarixiy roman",
    year: 1869
  },
  {
    title: "Jarayon",
    author: "Frans Kafka",
    cover: "covers/95.jpg",
    file: "books/95.pdf",
    genre: "Falsafiy roman",
    year: 1925
  },
  {
    title: "Chol va dengiz",
    author: "Ernest Heminguey",
    cover: "covers/96.jpg",
    file: "books/96.pdf",
    genre: "Klassika",
    year: 1952
  },
  {
    title: "Boburnoma",
    author: "Zahriddin Muhammad Bobur",
    cover: "covers/97.jpg",
    file: "books/97.pdf",
    genre: "Tarixiy biografiya",
    year: 1526
  },
  {
    title: "Game of Thrones",
    author: "J. R. R. Martin",
    cover: "covers/98.jpg",
    file: "books/98.pdf",
    genre: "Fantastika",
    year: 1996
  },
  {
    title: "Yevgeniy Onegin",
    author: "Aleksandr Pushkin",
    cover: "covers/99.jpg",
    file: "books/99.pdf",
    genre: "Klassika",
    year: 1833
  },
  //Detektiv////////////////////////////////////////////////////////
  {
    title: "O‘g‘irlangan million",
    author: "Agata Kristi",
    cover: "covers/100.jpg",
    file: "books/100.pdf",
    genre: "Detektiv",
    year: 1936
  },
  {
    title: "Sherlk Xolms",
    author: "Artur Konan doyl",
    cover: "covers/101.jpg",
    file: "books/101.pdf",
    genre: "Detektiv",
    year: 1990
  },
  {
    title: "Sherlk xolmsning sarguzashtlari",
    author: "Artut Konan Doyl",
    cover: "covers/102.jpg",
    file: "books/102.pdf",
    genre: "Detektiv",
    year: 1892
  },
  {
    title: "O`girlanga bolalik",
    author: "Komil sindarov",
    cover: "covers/103.jpg",
    file: "books/103.pdf",
    genre: "Detektiv",
    year: 1960
  },
  {
    title: "Jinoyat takrorlanmaydi",
    author: "Tohir malik",
    cover: "covers/104.jpg",
    file: "books/104.pdf",
    genre: "Detektiv",
    year: 1986
  },
  {
    title: "morg kochasidagi qotillik",
    author: "Elgar alan",
    cover: "covers/105.jpg",
    file: "books/105.pdf",
    genre: "Detektiv",
    year: 1841
  },
  {
    title: "o`limga mahkum qilinganlar",
    author: "Nuriddin ismoilov",
    cover: "covers/106.jpg",
    file: "books/106.pdf",
    genre: "Detektiv",
    year: 2007
  },
  {
    title: "Suiqasd",
    author: "Akbar Mirzo",
    cover: "covers/107.jpg",
    file: "books/107.pdf",
    genre: "Detektiv",
    year: 2016
  },
  {
    title: "Qora quzgun",
    author: "Fozil tilovatov",
    cover: "covers/108.jpg",
    file: "books/108.pdf",
    genre: "Detektiv",
    year: 2011
  },
  {
    title: "Kumush",
    author: "Artur KOnan doyl",
    cover: "covers/109.jpg",
    file: "books/109.pdf",
    genre: "Detektiv",
    year: 1925
  },
  {
    title: "Jaholat",
    author: "Nuriddin ismoilov ",
    cover: "covers/110.jpg",
    file: "books/110.pdf",
    genre: "Detektiv",
    year: 2009
  }, {
    title: "Tungi qotillik 1",
    author: "Komil Sindorov",
    cover: "covers/113.jpg",
    file: "books/111.pdf",
    genre: "Detektiv",
    year: 2019
  },
  {
    title: "Kutubxonadagi murda",
    author: "Agata Kristi",
    cover: "covers/112.jpg",
    file: "books/112.pdf",
    genre: "Detektiv",
    year: 2018
  },
  {
    title: "Tungi qotillik 2",
    author: "Komil sindorov",
    cover: "covers/113.jpg",
    file: "books/113.pdf",
    genre: "Detektiv",
    year: 2019
  },
  {
    title: "So`ngi bekat",
    author: "Shukur Xolmirzayev ",
    cover: "covers/114.jpg",
    file: "books/114.pdf",
    genre: "Detektiv",
    year: 2023
  },
  {
    title: "Dor ostidagi odam",
    author: "Omina shenilkogli",
    cover: "covers/115.jpg",
    file: "books/115.pdf",
    genre: "Detektiv",
    year: 2021
  },
  {
    title: "Bir asirlik omonat",
    author: "Komil Sindarov",
    cover: "covers/116.webp",
    file: "books/116.pdf",
    genre: "Detektiv",
    year: 2022
  },
  {
    title: "Sir",
    author: "Fotih Durman",
    cover: "covers/117.jpg",
    file: "books/117.pdf",
    genre: "Detektiv",
    year: 2022
  },
  {
    title: "yer ostidagi avliyo ",
    author: "Azamat qorijonov",
    cover: "covers/118.jpg",
    file: "books/118.pdf",
    genre: "Detektiv",
    year: 2022
  },
  {
    title: "Uchinchi karta siri ",
    author: "Azamat qorijonov",
    cover: "covers/119.jpg",
    file: "books/119.pdf",
    genre: "Detektiv",
    year: 2022
  },
  {
    title: "Sirli pichoq izidan",
    author: "Azamat qorijonov",
    cover: "covers/120.jpg",
    file: "books/120.pdf",
    genre: "Detektiv",
    year: 2019
  },
  {
    title: "Sharpalar soyasi",
    author: "Azamat qorjovov",
    cover: "covers/121.jpg",
    file: "books/121.pdf",
    genre: "Detektiv",
    year: 2016
  },
  {
    title: "Ulib tirilganlar qismati",
    author: "Azamat qorjovov",
    cover: "covers/122.jpg",
    file: "books/122.pdf",
    genre: "Detektiv",
    year: 2010
  },
  {
    title: "Bexosiyat uy",
    author: "Azamat qorjovov",
    cover: "covers/123.jpg",
    file: "books/123.pdf",
    genre: "Detektiv",
    year: 2022
  },
  {
    title: "Detiktiv hikoylalar ",
    author: "Azamat qorijonov",
    cover: "covers/124.jpg",
    file: "books/124.pdf",
    genre: "Detektiv",
    year: 2022
  },
  {
    title: "Bizga sajda yarashadi ",
    author: "Ahmad gunbay yildiz",
    cover: "covers/125.jpg",
    file: "books/125.pdf",
    genre: "Detektiv",
    year: 2022
  },
  {
    title: "Eng kichik jinoyat ",
    author: "Tohir Malik",
    cover: "covers/126.png",
    file: "books/126.pdf",
    genre: "Detektiv",
    year: 2014
  },
  {
    title: "Davron",
    author: "Tohir Malik",
    cover: "covers/127.jpg",
    file: "books/127.pdf",
    genre: "Detektiv",
    year: 2006
  },
  {
    title: "ov",
    author: "Tohir Malik",
    cover: "covers/128.jpg",
    file: "books/128.pdf",
    genre: "Detektiv",
    year: 2016
  },
  {
    title: "So`ngi o`q",
    author: "Tohir Malik",
    cover: "covers/129.jpg",
    file: "books/129.pdf",
    genre: "Detektiv",
    year: 2005
  },
  {
    title: "Alifbo boyicha qotillik",
    author: "Agata Kristi",
    cover: "covers/130.jpg",
    file: "books/130.pdf",
    genre: "Detektiv",
    year: 1936
  }, {
    title: "Zindonband qiz nolasi",
    author: "Azamat qorjovov",
    cover: "covers/131.jpg",
    file: "books/131.pdf",
    genre: "Detektiv",
    year: 2016
  },
  {
    title: "izquvar Puaro",
    author: "Agata Kristi",
    cover: "covers/132.jpg",
    file: "books/132.pdf",
    genre: "Detektiv",
    year: 1989
  },
  {
    title: "Boskom vodiysining siri ",
    author: "Artur Konan Doyl",
    cover: "covers/133.jpg",
    file: "books/133.pdf",
    genre: "Detektiv",
    year: 2019
  },
  {
    title: "Bulbul oshiyoni",
    author: "agata kristi",
    cover: "covers/134.jpg",
    file: "books/134.pdf",
    genre: "Detektiv",
    year: 2013
  },
  {
    title: "Samvoiy Qotil",
    author: "Jaxon detiktiv durdonalari",
    cover: "covers/135.jpg",
    file: "books/135.pdf",
    genre: "Detektiv",
    year: 1983
  },
  {
    title: "boyvachaning qasiri",
    author: "Agata kristi",
    cover: "covers/136.webp",
    file: "books/136.pdf",
    genre: "Detektiv",
    year: 1977
  },
  {
    title: "Ishtar ibodadxonasining qotilik",
    author: "Agata kristi",
    cover: "covers/137.webp",
    file: "books/137.pdf",
    genre: "Detektiv",
    year: 1985
  },
  {
    title: "Yo`qotilgan Kalit",
    author: "Agata kristi",
    cover: "covers/138.jpg",
    file: "books/138.pdf",
    genre: "Detektiv",
    year: 1975
  },
  {
    title: "Qidiruvdagi qiz",
    author: "Luqmon Bo`rixon ",
    cover: "covers/139.jpg",
    file: "books/139.pdf",
    genre: "Detektiv",
    year: 1971
  },
  {
    title: "Muzeydagi sirli Qotillik",
    author: "Aleksey korbaston",
    cover: "covers/140.jpg",
    file: "books/140.pdf",
    genre: "Detektiv",
    year: 1977
  }, {
    title: "Dorixonadagi qotilik",
    author: "Komil Sindarov",
    cover: "covers/141.jpg",
    file: "books/141.pdf",
    genre: "Detektiv",
    year: 1974
  },
  {
    title: "Jinlar Bazmi",
    author: "Abdullahmid ismoil",
    cover: "covers/142.jpg",
    file: "books/142.pdf",
    genre: "Detektiv",
    year: 1993
  },
  {
    title: "Nomi chiqmagan xotin",
    author: "Hakim nazir",
    cover: "covers/143.jpg",
    file: "books/143.pdf",
    genre: "Detektiv",
    year: 1988
  },
  {
    title: "oq Fotiha",
    author: "Hakim Nazir",
    cover: "covers/144.jpg",
    file: "books/144.pdf",
    genre: "Detektiv",
    year: 1990
  },
  {
    title: "Liderlar Kitobi",
    author: "Otabek xasanov",
    cover: "covers/145.jpg",
    file: "books/145.pdf",
    genre: "Detektiv",
    year: 2020
  },
  {
    title: "Zilzila",
    author: "Tohir Malik",
    cover: "covers/146.jpg",
    file: "books/146.pdf",
    genre: "Detektiv",
    year: 1990
  },
  {
    title: "Vasiyotnoma",
    author: "Tohir Malik",
    cover: "covers/147.jpg",
    file: "books/147.txt",
    genre: "Detektiv",
    year: 1983
  },
  {
    title: "So`ngi ajdarning halokati ",
    author: "Tohir Malik",
    cover: "covers/148.jpg",
    file: "books/148.txt",
    genre: "Detektiv",
    year: 1984
  },
  {
    title: "voy onajonim",
    author: "Tohir Malik",
    cover: "covers/149.jpg",
    file: "books/149.pdf",
    genre: "Detektiv",
    year: 1980
  },
  {
    title: "Jinoyat va Jazo",
    author: "Fyoder Dostoyavsekiy",
    cover: "covers/150.jpg",
    file: "books/150.pdf",
    genre: "Detektiv",
    year: 1866
  }, {
    title: "Da vinchi Siri",
    author: "Den Braun",
    cover: "covers/151.jpg",
    file: "books/151.pdf",
    genre: "Detektiv",
    year: 2003
  },
  {
    title: "Mafiya Sardori 1",
    author: "Nuriddin Ismoilov",
    cover: "covers/152.jpg",
    file: "books/152.pdf",
    genre: "Detektiv",
    year: 2008
  },
  {
    title: "Mafiya Sardori 2",
    author: "Nuriddin Ismoilov",
    cover: "covers/153.jpg",
    file: "books/153.pdf",
    genre: "Detektiv",
    year: 2008
  },
  {
    title: "Mafiya Sardori 3",
    author: "Nuriddin Ismoilov",
    cover: "covers/154.jpg",
    file: "books/154.pdf",
    genre: "Detektiv",
    year: 2008
  },
  {
    title: "Tergov",
    author: "Jornid Abdulaxonov",
    cover: "covers/155.jpg",
    file: "books/155.pdf",
    genre: "Detektiv",
    year: 2000
  },
  {
    title: "Gongkongdan Kelgan Tobut",
    author: "Jeyms Xadli Cheyz",
    cover: "covers/156.jpg",
    file: "books/156.pdf",
    genre: "Detektiv",
    year: 1962
  },
  {
    title: "Tansoqchi 1",
    author: "Nuriddin Ismoilov",
    cover: "covers/157.jpg",
    file: "books/157.pdf",
    genre: "Detektiv",
    year: 2012
  },
  {
    title: "Tansoqchi 2",
    author: "Nuriddin Ismoilov",
    cover: "covers/158.jpg",
    file: "books/158.pdf",
    genre: "Detektiv",
    year: 2012
  },
  {
    title: "Ajal chorlagan Kun",
    author: "Norumrod Norqobilov",
    cover: "covers/159.jpg",
    file: "books/159.pdf",
    genre: "Detektiv",
    year: 2005
  },
  {
    title: "Tikuvchining Xatosi",
    author: "Agata Kristi",
    cover: "covers/160.jpg",
    file: "books/160.txt",
    genre: "Detektiv",
    year: 1941
  }, {
    title: "Tun panjaralari",
    author: "Nazar eshonqulov",
    cover: "covers/161.jpg",
    file: "books/161.pdf",
    genre: "Detektiv",
    year: 1988
  },
  {
    title: "Qora Kitob",
    author: "Nazar Eshonquluv",
    cover: "covers/162.jpg",
    file: "books/162.pdf",
    genre: "Detektiv",
    year: 1988
  },
  {
    title: "Maymun Yetaklagan Odam",
    author: "Nazar Eshonqulov",
    cover: "covers/163.jpg",
    file: "books/163.pdf",
    genre: "Detektiv",
    year: 1989
  },
  {
    title: "Sutxorning O`limi",
    author: "Sadriddin Ayniy",
    cover: "covers/164.jpg",
    file: "books/164.pdf",
    genre: "Detektiv",
    year: 1939
  },
  {
    title: "Kukarcha",
    author: "Jaxon Adabiyot Durdonalari ",
    cover: "covers/165.jpg",
    file: "books/165.pdf",
    genre: "Detektiv",
    year: 1980
  },
  {
    title: "Qiyomat Qarz",
    author: "O`lmas Umarbekov",
    cover: "covers/166.jpg",
    file: "books/166.pdf",
    genre: "Detektiv",
    year: 2023
  },
  {
    title: "Baxorninng 17 Daqiqasi",
    author: "Yuliyan Semenov",
    cover: "covers/167.jpg",
    file: "books/167.pdf",
    genre: "Detektiv",
    year: 1973
  },
  {
    title: "Partyaning Oltinlari",
    author: "Igor Bunich",
    cover: "covers/168.jpg",
    file: "books/168.pdf",
    genre: "Detektiv",
    year: 2016
  },
  {
    title: "Ikki kara Ikki besh",
    author: "Utkir Xoshimov",
    cover: "covers/169.jpg",
    file: "books/169.pdf",
    genre: "Detektiv",
    year: 2023
  },
  {
    title: "Qora ot kechalari O`ldiradi",
    author: "Yatsek Roy",
    cover: "covers/170.jpg",
    file: "books/170.pdf",
    genre: "Detektiv",
    year: 2020
  }, {
    title: "Imo ishoralar Siri",
    author: "Davron Mamarasulov",
    cover: "covers/171.jpg",
    file: "books/171.pdf",
    genre: "Detektiv",
    year: 2016
  },
  {
    title: "Izgirinda",
    author: "Kril Teador",
    cover: "covers/172.jpg",
    file: "books/172.pdf",
    genre: "Detektiv",
    year: 1910
  },
  {
    title: "Tiriklayin Komilgan Odam",
    author: "Olimjon Xayit",
    cover: "covers/173.jpg",
    file: "books/173.pdf",
    genre: "Detektiv",
    year: 2019
  },
  {
    title: "Qimorboz",
    author: "Fyoder Dostayevskiy",
    cover: "covers/174.jpg",
    file: "books/174.pdf",
    genre: "Detektiv",
    year: 1866
  },
  {
    title: "Qonli Qilich ",
    author: "Saidvafo Boboyev",
    cover: "covers/175.jpg",
    file: "books/175.pdf",
    genre: "Detektiv",
    year: 2010
  },
  {
    title: "Qora Qasir Asiri 1",
    author: "Habib Temirov",
    cover: "covers/176.jpg",
    file: "books/176.pdf",
    genre: "Detektiv",
    year: 2009
  },
  {
    title: "Qora Qasir Asiri 2",
    author: "Habib Temirov",
    cover: "covers/177.jpg",
    file: "books/177.pdf",
    genre: "Detektiv",
    year: 2008
  },
  {
    title: "Qora Qasir Asiri 3",
    author: "Habib Temirov",
    cover: "covers/178.jpg",
    file: "books/178.pdf",
    genre: "Detektiv",
    year: 2010
  },
  {
    title: "Qora Qasir Asiri 4",
    author: "Habib Temirov",
    cover: "covers/179.jpg",
    file: "books/179.pdf",
    genre: "Detektiv",
    year: 2010
  },
  {
    title: "Halqa ",
    author: "Akrom Malik",
    cover: "covers/180.jpg",
    file: "books/180.epub",
    genre: "Detektiv",
    year: 2021
  }, {
    title: "Qil Ustidagi Taqdir",
    author: "Azamat Korjovov",
    cover: "covers/181.jpg",
    file: "books/181.pdf",
    genre: "Detektiv",
    year: 2015
  },
  {
    title: "Millin Dollarlik xatolar ",
    author: "Pavel Ankeov",
    cover: "covers/182.jpg",
    file: "books/182.pdf",
    genre: "Detektiv",
    year: 2021
  },
  {
    title: "Advokatlik osonmi ",
    author: "Abdulla Avloniy",
    cover: "covers/183.jpg",
    file: "books/183.pdf",
    genre: "Detektiv",
    year: 1918
  },
  {
    title: "Biz va siz ",
    author: "Abdulla Avloniy",
    cover: "covers/184.jpg",
    file: "books/184.pdf",
    genre: "Detektiv",
    year: 1915
  },
  {
    title: "Pinak ",
    author: "Abdulla Avloniy",
    cover: "covers/185.jpg",
    file: "books/185.pdf",
    genre: "Detektiv",
    year: 1919
  },
  {
    title: "Po'rtug'oliyo inqilobi ",
    author: "Abdulla Avloniy",
    cover: "covers/186.jpg",
    file: "books/186.pdf",
    genre: "Detektiv",
    year: 1910
  },
  {
    title: "Juvonmarg ",
    author: "Abdulla Badriy",
    cover: "covers/187.jpg",
    file: "books/187.pdf",
    genre: "Detektiv",
    year: 1916
  },
  {
    title: "Asarlar. 6 tomlik. 5-tom ",
    author: "Abdulla Qahhor",
    cover: "covers/188.jpg",
    file: "books/188.pdf",
    genre: "Detektiv",
    year: 1968
  },
  {
    title: "Ayajonlarim ",
    author: "Abdulla Qahhor",
    cover: "covers/189.jpg",
    file: "books/189.pdf",
    genre: "Detektiv",
    year: 1962
  },
  {
    title: "Og'riq tishlar ",
    author: "Abdulla Qahhor",
    cover: "covers/190.jpg",
    file: "books/190.pdf",
    genre: "Detektiv",
    year: 1956
  },
  {
    title: "Og'riq tishlar ",
    author: "Abdulla Qahhor",
    cover: "covers/191.jpg",
    file: "books/191.pdf",
    genre: "Detektiv",
    year: 1956
  },
  {
    title: "So'nggi nusxalar ",
    author: "Abdulla Qahhor",
    cover: "covers/192.jpg",
    file: "books/192.pdf",
    genre: "Detektiv",
    year: 1958
  },
  {
    title: "Yangi yer ",
    author: "Abdulla Qahhor",
    cover: "covers/193.jpg",
    file: "books/193.pdf",
    genre: "Detektiv",
    year: 1953
  },
  {
    title: "Oyna sindi ",
    author: "Abduqahhor ibrohimov",
    cover: "covers/194.jpg",
    file: "books/194.pdf",
    genre: "Detektiv",
    year: 1996
  },
  {
    title: "Tusmol ",
    author: "Abduqahhor Ibrohimov",
    cover: "covers/195.jpg",
    file: "books/195.pdf",
    genre: "Detektiv",
    year: 1998
  },
  {
    title: "Abulfayzxon ",
    author: "Abduratif Fitrat",
    cover: "covers/196.jpg",
    file: "books/196.pdf",
    genre: "Detektiv",
    year: 1919
  },
  {
    title: "Arslon ",
    author: "Abdurtaf Fitrat",
    cover: "covers/197.jpg",
    file: "books/197.pdf",
    genre: "Detektiv",
    year: 1919
  },
  {
    title: "Chin sevish ",
    author: "Abdurtaif Fitrat",
    cover: "covers/198.jpg",
    file: "books/198.pdf",
    genre: "Detektiv",
    year: 1915
  },
  {
    title: "Hind ixtilolchilari ",
    author: "Abdurtaif Fitrat",
    cover: "covers/199.jpg",
    file: "books/199.pdf",
    genre: "Detektiv",
    year: 1919
  },
  //Fantastika////////////////////////////////////////////////////////
  {
    title: "G'aroyib avtobus",
    author: "Abdurahmon Akbar",
    cover: "covers/200.jpg",
    file: "books/200.pdf",
    genre: "Fantastika",
    year: 2010
  },
  {
    title: "Jonimning suratlari",
    author: "Abdurahmon Akbar",
    cover: "covers/201.jpg",
    file: "books/201.pdf",
    genre: "Fantastika",
    year: 2022
  },
  {
    title: "Uyquchining tushlari",
    author: "Abdurahmon Akbar",
    cover: "covers/202.jpg",
    file: "books/202.pdf",
    genre: "Fantastika",
    year: 2012
  },
  {
    title: "Kichkintoy va Paxtaoy",
    author: "Abdurahmon Akbarov",
    cover: "covers/203.jpg",
    file: "books/203.pdf",
    genre: "Fantastika",
    year: 2008
  },
  {
    title: "Ertaklar",
    author: "Aleksandr Pushkin",
    cover: "covers/204.jpg",
    file: "books/204.pdf",
    genre: "Fantastika",
    year: 1830
  },
  {
    title: "Ertaklar",
    author: "Aleksandr Pushkin",
    cover: "covers/205.jpg",
    file: "books/205.pdf",
    genre: "Fantastika",
    year: 1949
  },
  {
    title: "Hikmatlar",
    author: "Alisher Navoiy",
    cover: "covers/206.jpg",
    file: "books/206.pdf",
    genre: "Fantastika",
    year: 1999
  },
  {
    title: "Shiroq",
    author: "Alisher Sa'dulla",
    cover: "covers/207.jpg",
    file: "books/207.pdf",
    genre: "Fantastika",
    year: 2005
  },
  {
    title: "Amir Temur haqida hikoyalar",
    author: "Alisher Sa'dulla",
    cover: "covers/208.jpg",
    file: "books/208.pdf",
    genre: "Fantastika",
    year: 1980
  },
  {
    title: "Akam klarned chaladi",
    author: "Anatoliy Aleksin",
    cover: "covers/209.jpg",
    file: "books/209.pdf",
    genre: "Fantastika",
    year: 1975
  }, {
    title: "Krosh va uning o'rtoqlari",
    author: "Anatoliy Ribakov",
    cover: "covers/210.jpg",
    file: "books/210.pdf",
    genre: "Fantastika",
    year: 1960
  },
  {
    title: "Kichkina Shahzoda",
    author: "Antuan de Sent-Ekzyuperi",
    cover: "covers/211.jpg",
    file: "books/211.pdf",
    genre: "Fantastika",
    year: 1943
  },
  {
    title: "Alamazon va Gulmat hangomasi",
    author: "Anvar Obidjon",
    cover: "covers/212.jpg",
    file: "books/212.pdf",
    genre: "Fantastika",
    year: 1990
  }, {
    title: "Bahromning hikoyasi",
    author: "Anvar Obidjon",
    cover: "covers/213.jpg",
    file: "books/213.pdf",
    genre: "Fantastika",
    year: 1995
  },
  {
    title: "Ey yorug' dunyo",
    author: "Anvar Obidjon",
    cover: "covers/214.jpg",
    file: "books/214.pdf",
    genre: "Fantastika",
    year: 2000
  },
  {
    title: "Hajviy hikoyalar",
    author: "Anvar Obidjon",
    cover: "covers/215.jpg",
    file: "books/215.pdf",
    genre: "Fantastika",
    year: 1998
  },
  {
    title: "Juda qiziq voqeya",
    author: "Anvar Obidjon",
    cover: "covers/216.jpg",
    file: "books/216.pdf",
    genre: "Fantastika",
    year: 1997
  },
  {
    title: "Kezargon Boychechak",
    author: "Anvar Obidjon",
    cover: "covers/217.jpg",
    file: "books/217.pdf",
    genre: "Fantastika",
    year: 2005
  },
  {
    title: "Masxaraboz bola",
    author: "Anvar Obidjon",
    cover: "covers/218.jpg",
    file: "books/218.pdf",
    genre: "Fantastika",
    year: 1996
  },
  {
    title: "Meshpolvonning janglari",
    author: "Anvar Obidjon",
    cover: "covers/219.jpg",
    file: "books/219.pdf",
    genre: "Fantastika",
    year: 2002
  },
  {
    title: "Mushuk bibi miyovladi",
    author: "Anvar Obidjon",
    cover: "covers/220.jpg",
    file: "books/220.pdf",
    genre: "Fantastika",
    year: 2000
  }, {
    title: "O'g'irlangan pahlavon",
    author: "Anvar Obidjon",
    cover: "covers/221.jpg",
    file: "books/221.pdf",
    genre: "Fantastika",
    year: 2004
  },
  {
    title: "Oltin yurakli avtobola",
    author: "Anvar Obidjon",
    cover: "covers/222.jpg",
    file: "books/222.pdf",
    genre: "Fantastika",
    year: 2008
  },
  {
    title: "Ona yer",
    author: "Anvar Obidjon",
    cover: "covers/223.jpg",
    file: "books/223.pdf",
    genre: "Fantastika",
    year: 1995
  },
  {
    title: "Qorinbotir",
    author: "Anvar Obidjon",
    cover: "covers/224.jpg",
    file: "books/224.pdf",
    genre: "Fantastika",
    year: 2007
  },
  {
    title: "Mittivoy va Karlson",
    author: "Astrid Lindgren",
    cover: "covers/225.jpg",
    file: "books/225.pdf",
    genre: "Fantastika",
    year: 1955
  },
  {
    title: "G'aroyib bolalar",
    author: "Aziz Nesin",
    cover: "covers/226.jpg",
    file: "books/226.pdf",
    genre: "Fantastika",
    year: 1960
  },
  {
    title: "Hayvonlar haqida hikoyalar",
    author: "Aziz Nesin",
    cover: "covers/227.jpg",
    file: "books/227.pdf",
    genre: "Fantastika",
    year: 1965
  },
  {
    title: "So'rasam maylimi, oyi",
    author: "Bibisora Otayeva",
    cover: "covers/228.jpg",
    file: "books/228.pdf",
    genre: "Fantastika",
    year: 2005
  },
  {
    title: "Cho'pchagim cho'pchak",
    author: "Boris Pak",
    cover: "covers/229.jpg",
    file: "books/229.pdf",
    genre: "Fantastika",
    year: 1980
  },
  {
    title: "Ko'r muzikachi",
    author: "B.G Korolenko",
    cover: "covers/230.jpg",
    file: "books/230.pdf",
    genre: "Fantastika",
    year: 1988
  }, {
    title: "Dunyo bolalari",
    author: "Robert Makkloskn",
    cover: "covers/231.jpg",
    file: "books/231.pdf",
    genre: "Fantastika",
    year: 1985
  },
  {
    title: "Buvijonim keldilar",
    author: "E'tibor Oxunova",
    cover: "covers/232.jpg",
    file: "books/232.pdf",
    genre: "Fantastika",
    year: 2003
  },
  {
    title: "Anton bo'rini uchratgan kecha",
    author: "Edith Shrayber Vike",
    cover: "covers/233.jpg",
    file: "books/233.pdf",
    genre: "Fantastika",
    year: 1978
  },
  {
    title: "Izquvar Brok",
    author: "Eduard Vovrushka",
    cover: "covers/234.jpg",
    file: "books/234.pdf",
    genre: "Fantastika",
    year: 1970
  },
  {
    title: "Gullarim-bulbullarim",
    author: "Ergash Raimov",
    cover: "covers/235.jpg",
    file: "books/235.pdf",
    genre: "Fantastika",
    year: 1987
  },
  {
    title: "Champo otli ilon",
    author: "Erkin Malik",
    cover: "covers/236.jpg",
    file: "books/236.pdf",
    genre: "Fantastika",
    year: 2005
  },
  {
    title: "Tush kinoga o'xshaydi",
    author: "Erkin Usmonov",
    cover: "covers/237.jpg",
    file: "books/237.pdf",
    genre: "Fantastika",
    year: 2010
  },
  {
    title: "Mening yulduzim",
    author: "Erkin Vohidov",
    cover: "covers/238.jpg",
    file: "books/238.pdf",
    genre: "Fantastika",
    year: 2000
  },
  {
    title: "Bir qultum biloq suvi",
    author: "Farhod Musajonov",
    cover: "covers/239.jpg",
    file: "books/239.pdf",
    genre: "Fantastika",
    year: 2008
  },
  {
    title: "Bosh kelma, Aliqulov",
    author: "Farhod Musajonov",
    cover: "covers/240.jpg",
    file: "books/240.pdf",
    genre: "Fantastika",
    year: 2005
  },
  {
    title: "Orzuga ayb yo'q",
    author: "Farhod Musajonov",
    cover: "covers/241.jpg",
    file: "books/241.pdf",
    genre: "Fantastika",
    year: 2010
  },
  {
    title: "Qissalar",
    author: "Farhod Musajonov",
    cover: "covers/242.jpg",
    file: "books/242.pdf",
    genre: "Fantastika",
    year: 2010
  },
  {
    title: "Quyosh rasmi",
    author: "Farid Usmon",
    cover: "covers/243.jpg",
    file: "books/243.pdf",
    genre: "Fantastika",
    year: 2012
  },
  {
    title: "Cho'ldan topilgan bola",
    author: "Frensis Bret-Gart",
    cover: "covers/244.jpg",
    file: "books/244.pdf",
    genre: "Fantastika",
    year: 1888
  },
  {
    title: "Farzandlarimga",
    author: "G'afur G'ulom",
    cover: "covers/245.jpg",
    file: "books/245.pdf",
    genre: "Fantastika",
    year: 1940
  },
  {
    title: "Oltin bola",
    author: "Gans Xristian Andersen",
    cover: "covers/246.jpg",
    file: "books/246.pdf",
    genre: "Fantastika",
    year: 1945
  },
  {
    title: "Quyosh Bola Oy Bola",
    author: "Qombar Ota",
    cover: "covers/247.jpg",
    file: "books/247.pdf",
    genre: "Fantastika",
    year: 1982
  },
  {
    title: "Qor Odam",
    author: "Gans Xristian Anderson",
    cover: "covers/248.jpg",
    file: "books/248.pdf",
    genre: "Fantastika",
    year: 1861
  },
  {
    title: "Oygul bilan Baxtiyor",
    author: "Hamid Olimjin",
    cover: "covers/249.jpg",
    file: "books/249.pdf",
    genre: "Fantastika",
    year: 1935
  },
  {
    title: "Oygul bilan Baxtiyor",
    author: "Hamid Olimjon",
    cover: "covers/250.jpg",
    file: "books/250.epub",
    genre: "Fantastika",
    year: 1935
  },
  {
    title: "Oygul va baxtiyor",
    author: "Hamid Olimjon",
    cover: "covers/251.jpg",
    file: "books/251.pdf",
    genre: "Fantastika",
    year: 1954
  },
  {
    title: "Oygul va baxtiyor",
    author: "Hamid Olimjon",
    cover: "covers/252.jpg",
    file: "books/252.pdf",
    genre: "Fantastika",
    year: 1946
  },
  {
    title: "Mumu",
    author: "Ivan Turgenov",
    cover: "covers/253.jpg",
    file: "books/253.pdf",
    genre: "Fantastika",
    year: 1852
  },
  {
    title: "Jelsamino Yolgonchilar Mamlakatida",
    author: "Janni rodari",
    cover: "covers/254.jpg",
    file: "books/254.pdf",
    genre: "Fantastika",
    year: 1958
  },
  {
    title: "Rim Ertaklari",
    author: "Janni rodari",
    cover: "covers/255.jpg",
    file: "books/255.pdf",
    genre: "Fantastika",
    year: 1989
  },
  {
    title: "Kish xaqida qissa",
    author: "Jek London",
    cover: "covers/256.jpg",
    file: "books/256.pdf",
    genre: "Fantastika",
    year: 1902
  },
  {
    title: "Amu Tolqini",
    author: "Joldasboy Dilmuratov",
    cover: "covers/257.jpg",
    file: "books/257.pdf",
    genre: "Fantastika",
    year: 1980
  },
  {
    title: "Guliverning sayohatlari",
    author: "Jonatan Svift",
    cover: "covers/258.jpg",
    file: "books/258.pdf",
    genre: "Fantastika",
    year: 1726
  },
  {
    title: "Xayvonlar Hojaligi xaqida g'aroyib qissa",
    author: "Jorj Oruell",
    cover: "covers/259.jpg",
    file: "books/259.pdf",
    genre: "Fantastika",
    year: 1945
  },
  {
    title: "O'n besh yoshli kapitan",
    author: "Jyul Vern",
    cover: "covers/260.jpg",
    file: "books/260.pdf",
    genre: "Fantastika",
    year: 1878
  }, {
    title: "Dilbar",
    author: "Karim Raximov",
    cover: "covers/261.jpg",
    file: "books/261.pdf",
    genre: "Fantastika",
    year: 1957
  },
  {
    title: "Pinokkioning boshidan kechirganlari",
    author: "Karlo Kollodi",
    cover: "covers/262.jpg",
    file: "books/262.pdf",
    genre: "Fantastika",
    year: 1883
  },
  {
    title: "Alisaning Sayoxatlari",
    author: "Kir bulichov",
    cover: "covers/263.jpg",
    file: "books/263.pdf",
    genre: "Fantastika",
    year: 1970
  },
  {
    title: "Bolalar Shodligi",
    author: "Latif Maxmudov",
    cover: "covers/264.jpg",
    file: "books/264.pdf",
    genre: "Fantastika",
    year: 1968
  },
  {
    title: "Burgut Olib qochgan bola",
    author: "Latif Mahmudov",
    cover: "covers/265.jpg",
    file: "books/265.pdf",
    genre: "Fantastika",
    year: 1985
  },
  {
    title: "Chinor",
    author: "Latif Mahmudov",
    cover: "covers/266.jpg",
    file: "books/266.pdf",
    genre: "Fantastika",
    year: 1961
  },
  {
    title: "Dangasaning xoli voy",
    author: "Latif Mahmudov",
    cover: "covers/267.jpg",
    file: "books/267.pdf",
    genre: "Fantastika",
    year: 1989
  },
  {
    title: "Ikki do'st",
    author: "Latif Mahmudov",
    cover: "covers/268.jpg",
    file: "books/268.pdf",
    genre: "Fantastika",
    year: 1963
  },
  {
    title: "Jasur Bolalar",
    author: "Latif Mahmudov",
    cover: "covers/269.jpg",
    file: "books/269.pdf",
    genre: "Fantastika",
    year: 1975
  },
  {
    title: "Qopga yashiringan odam",
    author: "Latif Mahmudov",
    cover: "covers/270.jpg",
    file: "books/270.pdf",
    genre: "Fantastika",
    year: 1976
  },
  {
    title: "Shox Daryoning Siri",
    author: "Latif Mahmudov",
    cover: "covers/271.jpg",
    file: "books/271.pdf",
    genre: "Fantastika",
    year: 1966
  },
  {
    title: "Sirli xat",
    author: "Latif Mahmudov",
    cover: "covers/272.jpg",
    file: "books/272.pdf",
    genre: "Fantastika",
    year: 1981
  },
  {
    title: "Oq kaptar",
    author: "Lyev brandet",
    cover: "covers/273.jpg",
    file: "books/273.pdf",
    genre: "Fantastika",
    year: 1980
  },
  {
    title: "Alisa mo'jizalar mamlakatida",
    author: "Lyuis Keroll",
    cover: "covers/274.jpg",
    file: "books/274.pdf",
    genre: "Fantastika",
    year: 1865
  },
  {
    title: "Bolalik",
    author: "Maksim Goriky",
    cover: "covers/275.jpg",
    file: "books/275.pdf",
    genre: "Fantastika",
    year: 1913
  },
  {
    title: "Top Soyerning yangi sarguzashtlari",
    author: "Mark Tven",
    cover: "covers/276.jpg",
    file: "books/276.pdf",
    genre: "Fantastika",
    year: 1896
  },
  {
    title: "Yulduzlar. Quyosh. oy",
    author: "Mirali Mirkmalov",
    cover: "covers/277.jpg",
    file: "books/277.pdf",
    genre: "Fantastika",
    year: 1995
  },
  {
    title: "Eng yorug' yulduzlar",
    author: "Miraziz A'zam",
    cover: "covers/278.jpg",
    file: "books/278.pdf",
    genre: "Fantastika",
    year: 2000
  },
  {
    title: "Qirq Bolaga qirq savol",
    author: "Miraziz A'zam",
    cover: "covers/279.jpg",
    file: "books/279.pdf",
    genre: "Fantastika",
    year: 2005
  },
  {
    title: "Saylanma",
    author: "Miraziz A'zam",
    cover: "covers/280.jpg",
    file: "books/280.pdf",
    genre: "Fantastika",
    year: 2010
  },
  {
    title: "Senga Nima Boldi",
    author: "Mirkarim Osim",
    cover: "covers/281.jpg",
    file: "books/281.pdf",
    genre: "Fantastika",
    year: 2012
  },
  {
    title: "Aljabrning Tug`ilishi",
    author: "Mirkasim Osim",
    cover: "covers/282.jpg",
    file: "books/282.pdf",
    genre: "Fantastika",
    year: 1970
  },
  {
    title: "Yangi Zilopiyadagi Sarguzashtlar",
    author: "Muazzam ibrohimova",
    cover: "covers/283.jpg",
    file: "books/283.pdf",
    genre: "Fantastika",
    year: 1965
  },
  {
    title: "Yangi Zilopiyadagi Sarguzashtlar",
    author: "Muazzam ibrohimova",
    cover: "covers/284.jpg",
    file: "books/284.pdf",
    genre: "Fantastika",
    year: 2010
  },
  {
    title: "G`unchalar",
    author: "Nazarmad",
    cover: "covers/285.jpg",
    file: "books/285.pdf",
    genre: "Fantastika",
    year: 2000
  },
  {
    title: "Bilmasvoy bilan do'stlarini boshidan kechirganlari",
    author: "Nikolay Nosov",
    cover: "covers/286.jpg",
    file: "books/286.pdf",
    genre: "Fantastika",
    year: 1987
  },
  {
    title: "Bilmasvoy Quyosh Shahrida",
    author: "Nikolay Nosov",
    cover: "covers/287.jpg",
    file: "books/287.pdf",
    genre: "Fantastika",
    year: 1958
  },
  {
    title: "Bilmasvoy bilan do'stlarini boshidan kechirganlari",
    author: "Nikoloay Nosov",
    cover: "covers/288.jpg",
    file: "books/288.pdf",
    genre: "Fantastika",
    year: 1954
  },
  {
    title: "Bolaligim-Poshsholigim",
    author: "Nosir Fozilov",
    cover: "covers/289.jpg",
    file: "books/289.pdf",
    genre: "Fantastika",
    year: 1980
  },
  {
    title: "Saraton",
    author: "Nosir Fozilov",
    cover: "covers/290.jpg",
    file: "books/290.pdf",
    genre: "Fantastika",
    year: 1983
  },
  {
    title: "Shum bolaning Nabiralari",
    author: "Nosir Fozilov",
    cover: "covers/291.jpg",
    file: "books/291.pdf",
    genre: "Fantastika",
    year: 1985
  },
  {
    title: "Oshiq Bulut",
    author: "Nozim Hikmat",
    cover: "covers/292.jpg",
    file: "books/292.pdf",
    genre: "Fantastika",
    year: 1930
  },
  {
    title: "Yetti Botir",
    author: "Nuriy Bayramov",
    cover: "covers/293.jpg",
    file: "books/293.pdf",
    genre: "Fantastika",
    year: 2005
  },
  {
    title: "Xayrixon va Maylixon",
    author: "Obid Rasul",
    cover: "covers/294.jpg",
    file: "books/294.pdf",
    genre: "Fantastika",
    year: 2008
  },
  {
    title: "Akraming sarguzashtlari",
    author: "Po`lat Mo`min",
    cover: "covers/295.jpg",
    file: "books/295.pdf",
    genre: "Fantastika",
    year: 1988
  },
  {
    title: "Ahil bo`lib, Dadil bo`lib",
    author: "Po`lat Mo`min",
    cover: "covers/296.jpg",
    file: "books/296.pdf",
    genre: "Fantastika",
    year: 2005
  },
  {
    title: "Bolajan-Bolajonim",
    author: "Po`lat Mo`min",
    cover: "covers/297.jpg",
    file: "books/297.pdf",
    genre: "Fantastika",
    year: 2005
  },
  {
    title: "Ibn Sino ulashar davo",
    author: "Po`lat Mo`min",
    cover: "covers/298.jpg",
    file: "books/298.pdf",
    genre: "Fantastika",
    year: 2007
  },
  {
    title: "Odab va Oftob",
    author: "Po`lat Mo`min",
    cover: "covers/299.jpg",
    file: "books/299.pdf",
    genre: "Fantastika",
    year: 2006
  },
  {
    title: "Oltmish olti Oltin Qul",
    author: "Po`lat Mo`min",
    cover: "covers/300.jpg",
    file: "books/300.pdf",
    genre: "Fantastika",
    year: 2008
  },

  //Tarixiy Roman///////////////////////////////////////////
  {
    title: "Amir Temur saboqlari (1-kitob)",
    author: "B.Axmedov",
    cover: "covers/301.jpg",
    file: "books/301.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Amir Temur saboqlari (2-kitob)",
    author: "B.Axmedov",
    cover: "covers/302.jpg",
    file: "books/302.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Amir Temur saboqlari (3-kitob)",
    author: "B.Axmedov",
    cover: "covers/303.jpg",
    file: "books/303.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Amir Temur shaxsining zamondoshlari tomonidan baholanishi (1997)",
    author: "Aziz Nosirov Nosirovich",
    cover: "covers/304.jpg",
    file: "books/304.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Amir Temur va temuriylar davrida madaniyat va san'at",
    author: "Mamakon Raxmonov",
    cover: "covers/305.jpg",
    file: "books/305.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Amir Temur va Ulug'bek zamondoshlari xotirasida",
    author: "B.Axmedov",
    cover: "covers/306.jpg",
    file: "books/306.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Amir Temur va uning dunyo tarixidagi o'rni ",
    author: "B.A.Axmedov",
    cover: "covers/307.jpg",
    file: "books/307.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Amir Temur Yevropa elchilari nigohida ",
    author: "Rui Donsale De Klavinxo",
    cover: "covers/308.jpg",
    file: "books/308.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Amir Temur. Zafar yo'li",
    author: "Ashraf Axmad",
    cover: "covers/309.jpg",
    file: "books/309.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Amir Temurning milliy davlatchilik siyosati (2006)",
    author: "MuhammadAli",
    cover: "covers/310.jpg",
    file: "books/310.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Amir Temurning turkiy yorlig'i ",
    author: "B.Mannopov",
    cover: "covers/311.jpg",
    file: "books/311.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Amir Temurning turkiy yorlig'i",
    author: "B.Mannopov",
    cover: "covers/312.jpg",
    file: "books/312.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Dinimiz fidoyilari",
    author: "Amirsaidxon Usmonxo'jayev",
    cover: "covers/313.jpg",
    file: "books/313.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Go'ri Amir maqbarasi",
    author: "Amriddin Berdimurodov",
    cover: "covers/314.jpg",
    file: "books/314.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Qadimgi O'zbekiston ilk yozma manbalarda",
    author: "Anatoliy Sagdullayev",
    cover: "covers/315.jpg",
    file: "books/315.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Jonon mening jonimda",
    author: "Annemarie Shimmel",
    cover: "covers/316.jpg",
    file: "books/316.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "O'zbek atamasining kelib chiqishi haqida",
    author: "Anvar Shukurov",
    cover: "covers/317.jpg",
    file: "books/317.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Ulug'bek (hayoti va faoliyati)",
    author: "Ashraf Ahmedov",
    cover: "covers/318.jpg",
    file: "books/318.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: " Ulug'bek Muhammad Tarag'ay",
    author: "Ashraf Ahmedov",
    cover: "covers/319.jpg",
    file: "books/319.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Ulug'bek Muhammad Tarag'ay (2011)",
    author: "Ashraf Ahmedov",
    cover: "covers/320.jpg",
    file: "books/320.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Akam haqida",
    author: "Asil Rashidov",
    cover: "covers/321.jpg",
    file: "books/321.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Toshkent Muhammad Solih tavsifida",
    author: "Asom O'rinboyev",
    cover: "covers/322.jpg",
    file: "books/322.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Navoiy zamondoshlari maktublarida",
    author: "Asomiddin O'rinboyev",
    cover: "covers/323.jpg",
    file: "books/323.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Atroflari bo'ylab Toshkent",
    author: "Ya.Buryakov",
    cover: "covers/324.jpg",
    file: "books/324.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Tarixi jahonnamoyi",
    author: "Avaz Muhammad Attor Xo'qandiy",
    cover: "covers/325.jpg",
    file: "books/325.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Inoyatullo Suvonqulov. Allomalar olami",
    author: "Axtam O'rolov",
    cover: "covers/326.jpg",
    file: "books/326.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Boburiylar va bunyodkorlik",
    author: "Axtam O'rolov",
    cover: "covers/327.jpg",
    file: "books/327.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "O'zbek ayollari tarix sahnasida",
    author: "Azamat Ziyo",
    cover: "covers/328.jpg",
    file: "books/328.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "O'zbek davlatchiligi tarixi",
    author: "Azamat Ziyo",
    cover: "covers/329.jpg",
    file: "books/329.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: " Ilk o'rta asrlar markaziy sivilizatsiyasida turk-sug'd munosabatlari",
    author: "Azimxo'ja Otaxo'jayev",
    cover: "covers/330.jpg",
    file: "books/330.pdf",
    genre: "Tarixiy roman",
    year: 1
  }, {
    title: "Abu Rayhon Beruniy. Abu Ali ibn Sino",
    author: "Aziz Qayumov",
    cover: "covers/331.jpg",
    file: "books/331.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Ahmad Farg'oniy",
    author: "Aziz Qayumov",
    cover: "covers/332.jpg",
    file: "books/332.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Akademik Ahmadali Asqarov",
    author: "Aziz Qayumov",
    cover: "covers/333.jpg",
    file: "books/333.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Davlatshoh Samarqandiy",
    author: "B.Ahmedov",
    cover: "covers/334.jpg",
    file: "books/334.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: " Bayt Al-Hikma va O'rta Osiyo olimlarining Bag'doddagi ilmiy faoliyati",
    author: "Bahrom Abduhalimov",
    cover: "covers/335.jpg",
    file: "books/335.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Katta qirg'inning kelib chiqishi arafasidagi sharoit",
    author: "Bahrom Irzayev",
    cover: "covers/336.jpg",
    file: "books/336.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Mustaqillik yillarida O'zbekistonda musiqa madaniyatining rivojlanishi",
    author: "Bahrom Irzayev",
    cover: "covers/337.jpg",
    file: "books/337.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "O'zbek musiqa madaniyati tarixi sahifalaridan",
    author: "Bahrom Irzayev",
    cover: "covers/338.jpg",
    file: "books/338.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "O'zbek yoshlari va xorijiy ta'lim",
    author: "Bahrom Irzayev",
    cover: "covers/339.jpg",
    file: "books/339.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Turkiston jadidlarining Ko'mak tashkiloti",
    author: "Bahrom Irzayev",
    cover: "covers/340.jpg",
    file: "books/340.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Xorazmning o'rta asrlardagi metallsozlik hunarmandchiligi",
    author: "Baxit Turganov",
    cover: "covers/341.jpg",
    file: "books/341.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Katta qirg'inning huquqiy hujjatlar bazasi",
    author: "Baxtiyor Hasanov",
    cover: "covers/342.jpg",
    file: "books/342.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Amir Temur darslari",
    author: "Bo'riboy Ahmedov",
    cover: "covers/343.jpg",
    file: "books/343.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Amir Temur haqida hikoyalar",
    author: "Bo'riboy Ahmedov",
    cover: "covers/344.jpg",
    file: "books/344.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Amir Temurni yod etib",
    author: "Bo'riboy Ahmedov",
    cover: "covers/345.jpg",
    file: "books/345.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "O'zbekiston tarixi manbalari",
    author: "Bo'riboy Ahmedov",
    cover: "covers/346.jpg",
    file: "books/346.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "O'zbekistonning atoqli tarixshunos olimlari",
    author: "Bo'riboy Ahmedov",
    cover: "covers/347.jpg",
    file: "books/347.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Sohibqiron Temur",
    author: "Bo'riboy Ahmedov",
    cover: "covers/348.jpg",
    file: "books/348.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Sohibqiron Temur ",
    author: "Bo'riboy Ahmedov",
    cover: "covers/349.jpg",
    file: "books/349.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Tarixdan saboqlar",
    author: "Bo'riboy Ahmedov",
    cover: "covers/350.jpg",
    file: "books/350.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Ulug'bek",
    author: "Bo'riboy Ahmedov",
    cover: "covers/351.jpg",
    file: "books/351.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Qadimgi Farg'onaning ilk o'rta asr madaniyati",
    author: "Boqijon Matboboyev",
    cover: "covers/352.jpg",
    file: "books/352.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Buxoro (qisqacha spravochnik)",
    author: "Ya.Ashkurov",
    cover: "covers/353.jpg",
    file: "books/353.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Buyuk Boburiylar tarixi",
    author: "A.Nizomidinnov",
    cover: "covers/354.jpg",
    file: "books/354.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: " Mahmudxo'ja Behbudiy va uning tarixiy tafakkuri",
    author: "D.Alimova",
    cover: "covers/355.jpg",
    file: "books/355.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Firdavsmonand shahar",
    author: "Dilmurod Bobojonov",
    cover: "covers/356.jpg",
    file: "books/356.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Toshkent tarixi",
    author: "Dilorom Alimova",
    cover: "covers/357.jpg",
    file: "books/357.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Turkiston milliy ozodlik harakati",
    author: "Dono Ziyoyeva",
    cover: "covers/358.jpg",
    file: "books/358.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Qadimgi O'zbekiston sivilizatsiyasi",
    author: "Edvard Rtveladze",
    cover: "covers/359.jpg",
    file: "books/359.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "O'zbekistonning tarixiy o'tmishi",
    author: "Edvard Rtveladze",
    cover: "covers/360.jpg",
    file: "books/360.pdf",
    genre: "Tarixiy roman",
    year: 1
  }, {
    title: "Hakimxonning hayoti va sayohatlari",
    author: "Enver Xurshut",
    cover: "covers/361.jpg",
    file: "books/361.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Urxun alifbosi qanday tuzilgan",
    author: "Ergash Umarov",
    cover: "covers/362.jpg",
    file: "books/362.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Amir Temur saltanati",
    author: "Erkin Azimov",
    cover: "covers/363.jpg",
    file: "books/363.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Merosimiz ildizlari",
    author: "Eshqobil Xoliqov",
    cover: "covers/364.jpg",
    file: "books/364.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Eski Termiz tarixiy manbalarda",
    author: "I.Botirov",
    cover: "covers/365.jpg",
    file: "books/365.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Farg'ona o'lkashunosligi (to'plam)",
    author: "Ivanov.G.P",
    cover: "covers/366.jpg",
    file: "books/366.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Temuriylar davrida Buxoro (1996)",
    author: "Farxod Qosimov",
    cover: "covers/367.jpg",
    file: "books/367.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: " Tarix. 1-qism. Qadimgi davr",
    author: "Farhod Sultonov",
    cover: "covers/368.jpg",
    file: "books/368.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: " O'zbekiston hukmdorlari",
    author: "Farhod Sultonov",
    cover: "covers/369.jpg",
    file: "books/369.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: " O'rta asrlar tarixi ",
    author: "Farhod Sultonov",
    cover: "covers/370.jpg",
    file: "books/370.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: " Tarixiy sanalar. 2-qism (eng yangi davr)",
    author: "Farhod Sultonov",
    cover: "covers/371.jpg",
    file: "books/371.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Qadimgi dunyo tarixi",
    author: "Farhod Sultonov",
    cover: "covers/372.jpg",
    file: "books/372.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Rashohat",
    author: "RashahotFaxruddin Ali Safiy",
    cover: "covers/373.jpg",
    file: "books/373.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Fayzulla Xo'jayev hayoti va faoliyati haqida yangi mulohazalar",
    author: "Fayzulla Xo'jayev",
    cover: "covers/374.jpg",
    file: "books/374.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Sharq va g'arb",
    author: "Fozila Sulaymonova",
    cover: "covers/375.jpg",
    file: "books/375.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Dukchi Eshon Voqeyasi",
    author: "Fozilbek Otabek o`gli",
    cover: "covers/376.jpg",
    file: "books/376.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Xalq Fodjiysai",
    author: "F.Xaydarov",
    cover: "covers/377.jpg",
    file: "books/377.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Tun Yabgu Xoqon",
    author: "G`aybulla Boboyorev",
    cover: "covers/378.jpg",
    file: "books/378.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Qadimgi Xorazim",
    author: "Gayratdin XojaNiyazov",
    cover: "covers/379.jpg",
    file: "books/379.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Buyuklik Xislati",
    author: "Xumomiddin Xondamir",
    cover: "covers/380.jpg",
    file: "books/380.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Boburiyzodalar",
    author: "G`ofurjon Satimov",
    cover: "covers/381.jpg",
    file: "books/381.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Markaziy Osiyo Va Hindiston Tarixi",
    author: "G`ofurjon Satimov",
    cover: "covers/382.jpg",
    file: "books/382.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Rossiya Imperyasi Markaziy Osiyoda",
    author: "F.X.Axmodjonov",
    cover: "covers/383.jpg",
    file: "books/383.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Sharq Javoxirlari",
    author: "G`ulomxon Gafurov",
    cover: "covers/384.jpg",
    file: "books/384.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Xumoyunnoma",
    author: "Gulbadanbegim",
    cover: "covers/385.jpg",
    file: "books/385.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Xakimxon",
    author: "Sodir Erkionv",
    cover: "covers/386.jpg",
    file: "books/386.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "O`zbek Davlatchiligi Tarixi",
    author: "Boboyev Xalimboy",
    cover: "covers/387.jpg",
    file: "books/387.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Abdulg`oziy Baxodirxon",
    author: "Xalim Xudoynazarov",
    cover: "covers/388.jpg",
    file: "books/388.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "X.Xudoynazarov",
    author: "Shajari Turk",
    cover: "covers/389.jpg",
    file: "books/389.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Amir Temur xayotidagi g`ariyobotlar",
    author: "Xamdam Sodikov",
    cover: "covers/390.jpg",
    file: "books/390.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Sulton Jaloliddin Manguberdi",
    author: "Xamid Sodikov",
    cover: "covers/391.jpg",
    file: "books/391.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "VXIII O`rta Osiyo",
    author: "Xamid Ziyoyev",
    cover: "covers/392.jpg",
    file: "books/392.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Buyuk Amir Temur Saltanati Va Uning Taqdiri",
    author: "Xamid Ziyoyev",
    cover: "covers/393.jpg",
    file: "books/393.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Istiqlol Manaviyat Negizi",
    author: "Xamid Ziyoyev",
    cover: "covers/394.jpg",
    file: "books/394.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "O`zbekiston Mustaqil va Zulum iskanjasida",
    author: "Xamid Ziyoyev",
    cover: "covers/395.jpg",
    file: "books/395.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "O`zbekiston Mustaqillik uchun Kurash Tarixi",
    author: "Xamid Ziyoyev",
    cover: "covers/396.jpg",
    file: "books/396.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Sabir volga va Ural Buylaridagi Uzbeklar",
    author: "Xamid Ziyoyev",
    cover: "covers/397.jpg",
    file: "books/397.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Ko'hna sharq darg'alari",
    author: "Hamidjon Homidiy",
    cover: "covers/398.jpg",
    file: "books/398.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Tarixning Ochilmagan Saxifalari",
    author: "Xamid Ziyoyev",
    cover: "covers/399.jpg",
    file: "books/399.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  {
    title: "Turkistonda Rosiiya Tajavuzi",
    author: "Xamid Ziyoyev",
    cover: "covers/400.jpg",
    file: "books/400.pdf",
    genre: "Tarixiy roman",
    year: 1
  },
  //Klasika//////////////////////////////////////////////////////////////////
  {
    title: "Devoni hikmat",
    author: "Ahmad Yassaviy",
    cover: "covers/401.jpg",
    file: "books/401.pdf",
    genre: "Klassika",
    year: 1
  },
  {
    title: "Devoni hikmat",
    author: "Ahmad Yassaviy",
    cover: "covers/402.jpg",
    file: "books/402.pdf",
    genre: "Klassika",
    year: 1
  },
  {
    title: "Hikmatlar",
    author: "Ahmad Yassaviy",
    cover: "covers/403.jpg",
    file: "books/403.pdf",
    genre: "Klassika",
    year: 1
  },
  {
    title: "Hibatul haqoyiq",
    author: "Ahmad Yugnakiy",
    cover: "covers/404.jpg",
    file: "books/404.pdf",
    genre: "Klassika",
    year: 1
  },
  {
    title: "Hibatul haqoyiq",
    author: "Ahmad Yugnakiy",
    cover: "covers/405.jpg",
    file: "books/405.pdf",
    genre: "Klassika",
    year: 1
  },
  {
    title: "Sozlar munozarasi",
    author: "Ahmadiy",
    cover: "covers/406.jpg",
    file: "books/406.pdf",
    genre: "Klassika",
    year: 1
  },
  {
    title: "G'azallar. Sharhlar",
    author: "Alisher Navoiy",
    cover: "covers/407.jpg",
    file: "books/407.pdf",
    genre: "Klassika",
    year: 1
  },
  {
    title: "Hayratul abror ",
    author: "Alisher Navoiy",
    cover: "covers/408.jpg",
    file: "books/408.pdf",
    genre: "Klassika",
    year: 1
  },
  {
    title: "Hayratul abrordan",
    author: "Alisher Navoiy",
    cover: "covers/409.jpg",
    file: "books/409.pdf",
    genre: "Klassika",
    year: 1
  },
  {
    title: "Layli va Majnun nasriy bayoni",
    author: "Alisher Navoiy",
    cover: "covers/410.jpg",
    file: "books/410.pdf",
    genre: "Klassika",
    year: 1
  },
  {
    title: "Lisonut tayr",
    author: "Alisher Navoiy",
    cover: "covers/411.jpg",
    file: "books/411.pdf",
    genre: "Klassika",
    year: 1
  },
  {
    title: "Mahbubul qulub ",
    author: "Alisher Navoiy",
    cover: "covers/412.jpg",
    file: "books/412.pdf",
    genre: "Klassika",
    year: 1
  },
  {
    title: "Sab'ai sayyor nasriy bayoni",
    author: "Alisher Navoiy",
    cover: "covers/413.jpg",
    file: "books/413.pdf",
    genre: "Klassika",
    year: 1
  },
  {
    title: "Saddi Iskandariy nasriy bayoni",
    author: "Alisher Navoiy",
    cover: "covers/414.jpg",
    file: "books/414.pdf",
    genre: "Klassika",
    year: 1
  },
  {
    title: "Devon",
    author: "Amiriy",
    cover: "covers/415.jpg",
    file: "books/415.pdf",
    genre: "Klassika",
    year: 1
  },
  {
    title: "Ismidur Obiravon",
    author: "Amoniy Araboniy",
    cover: "covers/416.jpg",
    file: "books/416.pdf",
    genre: "Klassika",
    year: 1
  },
  {
    title: "Devon",
    author: "Anbar Otin",
    cover: "covers/417.jpg",
    file: "books/417.pdf",
    genre: "Klassika",
    year: 1
  },
  {
    title: "She'rlar",
    author: "Anbar Otin",
    cover: "covers/418.jpg",
    file: "books/418.pdf",
    genre: "Klassika",
    year: 1
  },
  {
    title: "Devon",
    author: "Atoyi",
    cover: "covers/419.jpg",
    file: "books/419.pdf",
    genre: "Klassika",
    year: 1
  },
  {
    title: "Saylanma",
    author: "Avaz O'tar",
    cover: "covers/420.jpg",
    file: "books/420.pdf",
    genre: "Klassika",
    year: 1
  },
  {
    title: "Hikmat",
    author: "Azim Xoja eshon",
    cover: "covers/421.jpg",
    file: "books/421.pdf",
    genre: "Klassika",
    year: 1
  },
  {
    title: "Agar oshiqligim aytsam",
    author: "Boborahim Mashrab",
    cover: "covers/422.jpg",
    file: "books/422.pdf",
    genre: "Klassika",
    year: 1
  },
  {
    title: "Mabdayi nur",
    author: "Boborahim Mashrab",
    cover: "covers/423.jpg",
    file: "books/423.pdf",
    genre: "Klassika",
    year: 1
  },
  {
    title: "Mehribonim qaydasan",
    author: "Boborahim Mashrab",
    cover: "covers/424.jpg",
    file: "books/424.pdf",
    genre: "Klassika",
    year: 1
  },
  {
    title: "Devoni Hariqiy",
    author: "Bositxon Shoshiy",
    cover: "covers/425.jpg",
    file: "books/425.pdf",
    genre: "Klassika",
    year: 1
  },
  {
    title: "Tanlangan asarlar",
    author: "Dilshodi Barno",
    cover: "covers/426.jpg",
    file: "books/426.pdf",
    genre: "Klassika",
    year: 1
  },
  {
    title: "Furqat she'riyatidan",
    author: "Xolid Rasul",
    cover: "covers/427.jpg",
    file: "books/427.pdf",
    genre: "Klassika",
    year: 1
  },
  {
    title: "Ishqingda kuyib jono",
    author: "Furqat",
    cover: "covers/428.jpg",
    file: "books/428.pdf",
    genre: "Klassika",
    year: 1
  },
  {
    title: "Muhabbat yo'lida",
    author: "Furqat",
    cover: "covers/429.jpg",
    file: "books/429.pdf",
    genre: "Klassika",
    year: 1
  },
  {
    title: "Tanlangan asarlar",
    author: "Furqat",
    cover: "covers/430.jpg",
    file: "books/430.pdf",
    genre: "Klassika",
    year: 1
  },
  {
    title: "Devon",
    author: "Gadoiy",
    cover: "covers/431.jpg",
    file: "books/431.pdf",
    genre: "Klassika",
    year: 1
  },
  {
    title: "Zarbulmasal",
    author: "Gulxaniy",
    cover: "covers/432.jpg",
    file: "books/432.pdf",
    genre: "Klassika",
    year: 1
  },
  {
    title: " Zarbulmasal va g'azallar",
    author: "Gulxaniy",
    cover: "covers/433.jpg",
    file: "books/433.pdf",
    genre: "Klassika",
    year: 1
  },
  {
    title: "Gulshanul asror",
    author: "Haydar Xorazmiy",
    cover: "covers/434.jpg",
    file: "books/434.pdf",
    genre: "Klassika",
    year: 1
  },
  {
    title: "Devon",
    author: "Haziniy",
    cover: "covers/435.jpg",
    file: "books/435.pdf",
    genre: "Klassika",
    year: 1
  },
  {
    title: "Tasadduq yo Rasululloh",
    author: "Haziniy",
    cover: "covers/436.jpg",
    file: "books/436.pdf",
    genre: "Klassika",
    year: 1
  },
  {
    title: "Hofiz Xorazmiy she'riyatidan",
    author: "Xamid Sulaymonov",
    cover: "covers/437.jpg",
    file: "books/437.pdf",
    genre: "Klassika",
    year: 1
  },
  {
    title: "Devon. 1-kitob",
    author: "Hofiz Xorazmiy",
    cover: "covers/438.jpg",
    file: "books/438.pdf",
    genre: "Klassika",
    year: 1
  },
  {
    title: "Devon. 2-kitob",
    author: "Hofiz Xorazmiy",
    cover: "covers/439.jpg",
    file: "books/439.pdf",
    genre: "Klassika",
    year: 1
  },
  {
    title: "Jamolingdin ko'zum ravshan",
    author: "Husayn Boyqaro",
    cover: "covers/440.jpg",
    file: "books/440.pdf",
    genre: "Klassika",
    year: 1
  },
  {
    title: "Risola",
    author: "Husayn Boyqaro",
    cover: "covers/441.jpg",
    file: "books/441.pdf",
    genre: "Klassika",
    year: 1
  },
  {
    title: "Irq bitigi ",
    author: "Hojiniyoz Qori Bobojonov",
    cover: "covers/442.jpg",
    file: "books/442.pdf",
    genre: "Klassika",
    year: 1
  },
  {
    title: "Devon",
    author: "Komil Xorazmiy ",
    cover: "covers/443.jpg",
    file: "books/443.pdf",
    genre: "Klassika",
    year: 1
  },
  {
    title: "Tanlangan asarlar",
    author: "Komil Xorazmiy",
    cover: "covers/444.jpg",
    file: "books/444.pdf",
    genre: "Klassika",
    year: 1
  },
  {
    title: "Devon",
    author: "Komron Mirzo",
    cover: "covers/445.jpg",
    file: "books/445.pdf",
    genre: "Klassika",
    year: 1
  },
  {
    title: "Gul va Navro'z",
    author: "Lutfiy",
    cover: "covers/446.jpg",
    file: "books/446.pdf",
    genre: "Klassika",
    year: 1
  },
  {
    title: "Sensan sevarim ",
    author: "Lutfiy",
    cover: "covers/447.jpg",
    file: "books/447.pdf",
    genre: "Klassika",
    year: 1
  },
  {
    title: "Tanlangan asarlar ",
    author: "Lutfiy",
    cover: "covers/448.jpg",
    file: "books/448.pdf",
    genre: "Klassika",
    year: 1
  },
  {
    title: "Kulliyot",
    author: "Mavlono Xarobotiy",
    cover: "covers/449.jpg",
    file: "books/449.pdf",
    genre: "Klassika",
    year: 1
  },
  {
    title: "Tanlangan asarlar",
    author: "Maxmur",
    cover: "covers/450.jpg",
    file: "books/450.pdf",
    genre: "Klassika",
    year: 1
  },
  {
    title: "Tanlangan asarlar",
    author: "Miriy",
    cover: "covers/451.jpg",
    file: "books/451.pdf",
    genre: "Klassika",
    year: 1
  },
  {
    title: "Elga shohu ishqqa qul",
    author: "Muhammad Rahimxon Feruz",
    cover: "covers/452.jpg",
    file: "books/452.pdf",
    genre: "Klassika",
    year: 1
  },
  {
    title: "Ne bo'ldi yorim kelmadi",
    author: "Muhammad Rahimxon Feruz",
    cover: "covers/453.jpg",
    file: "books/453.pdf",
    genre: "Klassika",
    year: 1
  },
  {
    title: "Shayboniynoma",
    author: "Muhammad Solih",
    cover: "covers/454.jpg",
    file: "books/454.pdf",
    genre: "Klassika",
    year: 1
  },
  {
    title: "Asarlar. 2-jild. Devon",
    author: "Muhammadrizo Ogahiy",
    cover: "covers/455.jpg",
    file: "books/455.pdf",
    genre: "Klassika",
    year: 1
  },
  {
    title: "Asarlar. 3-jild. Ijodiy tarjimalar",
    author: "Muhammadrizo Ogahiy",
    cover: "covers/456.jpg",
    file: "books/456.pdf",
    genre: "Klassika",
    year: 1
  },
  {
    title: "Asarlar. 4-jild. Badiiy tarjimalar",
    author: "Muhammadrizo Ogahiy",
    cover: "covers/457.jpg",
    file: "books/457.pdf",
    genre: "Klassika",
    year: 1
  },
  {
    title: "Asarlar. 5-jild. Tarixiy asarlar",
    author: "Muhammadrizo Ogahiy",
    cover: "covers/458.jpg",
    file: "books/458.pdf",
    genre: "Klassika",
    year: 1
  },
  {
    title: "Asarlar. 6-jild",
    author: "Muhammadrizo Ogahiy",
    cover: "covers/459.jpg",
    file: "books/459.pdf",
    genre: "Klassika",
    year: 1
  },
  {
    title: "Ruboiy va qit'alar",
    author: "Mujrim Obid",
    cover: "covers/460.jpg",
    file: "books/460.pdf",
    genre: "Klassika",
    year: 1
  },
  {
    title: "Bog' aro",
    author: "Muqimiy",
    cover: "covers/461.jpg",
    file: "books/461.pdf",
    genre: "Klassika",
    year: 1
  },
  {
    title: "Tanlangan asarlar",
    author: "Muqimiy",
    cover: "covers/462.jpg",
    file: "books/462.pdf",
    genre: "Klassika",
    year: 1
  },
  {
    title: "Tanlangan asarlar. 1-jild. Lirika",
    author: "Muqimiy",
    cover: "covers/463.jpg",
    file: "books/463.pdf",
    genre: "Klassika",
    year: 1
  },
  {
    title: "Tanlangan asarlar. 2-jild. Hajviyot",
    author: "Muqimiy",
    cover: "covers/464.jpg",
    file: "books/464.pdf",
    genre: "Klassika",
    year: 1
  },
  {
    "title": "Boz va bulbul",
    "author": "Nishotiy",
    "cover": "covers/465.jpg",
    "file": "books/465.pdf",
    "genre": "Klassika",
    "year": 2023
  },
  {
    "title": "Husn va Dil (doston)",
    "author": "Nishotiy",
    "cover": "covers/466.jpg",
    "file": "books/466.pdf",
    "genre": "Klassika",
    "year": 2023
  },
  {
    "title": "Lirika",
    "author": "Nishotiy",
    "cover": "covers/467.jpg",
    "file": "books/467.pdf",
    "genre": "Klassika",
    "year": 2023
  },
  {
    "title": "Tanlangan she'rlar",
    "author": "Nodim Namangoniy",
    "cover": "covers/468.jpg",
    "file": "books/468.pdf",
    "genre": "Klassika",
    "year": 2023
  },
  {
    "title": "Nodira she'riyatidan",
    "author": "X.S.Sulaymonov",
    "cover": "covers/469.jpg",
    "file": "books/469.pdf",
    "genre": "Klassika",
    "year": 1979
  },
  {
    "title": "Nodira-Komila (2-kitob)",
    "author": "Nodira",
    "cover": "covers/470.jpg",
    "file": "books/470.pdf",
    "genre": "Klassika",
    "year": 2004
  },
  {
    "title": "Asarlar. 2 jildlik. 1-jild ",
    "author": "Nodira",
    "cover": "covers/471.jpg",
    "file": "books/471.pdf",
    "genre": "Klassika",
    "year": 1968
  },
  {
    "title": "Asarlar. 2 jildlik. 2-jild. 1-kitob",
    "author": "Nodira",
    "cover": "covers/472.jpg",
    "file": "books/472.pdf",
    "genre": "Klassika",
    "year": 1971
  },
  {
    "title": "Devon",
    "author": "Nodira",
    "cover": "covers/473.jpg",
    "file": "books/473.pdf",
    "genre": "Klassika",
    "year": 2023
  },
  {
    "title": "Devon",
    "author": "Nodira",
    "cover": "covers/474.jpg",
    "file": "books/474.pdf",
    "genre": "Klassika",
    "year": 1963
  },
  {
    "title": "G'azallar",
    "author": "Nodira",
    "cover": "covers/475.jpg",
    "file": "books/475.pdf",
    "genre": "Klassika",
    "year": 2023
  },
  {
    "title": "She'rlar",
    "author": "Nodira",
    "cover": "covers/476.jpg",
    "file": "books/476.pdf",
    "genre": "Klassika",
    "year": 1958
  },
  {
    "title": "She'rlar",
    "author": "Nodira",
    "cover": "covers/477.jpg",
    "file": "books/477.pdf",
    "genre": "Klassika",
    "year": 1960
  },
  {
    "title": "Ummon",
    "author": "Nojiy",
    "cover": "covers/478.jpg",
    "file": "books/478.pdf",
    "genre": "Klassika",
    "year": 2023
  },
  {
    "title": "Qisasi Rabg'uziy",
    "author": "Nosiruddin Rabg'uziy",
    "cover": "covers/479.jpg",
    "file": "books/479.pdf",
    "genre": "Klassika",
    "year": 2023
  },
  {
    "title": "Qisasi Rabg'uziy. 1-kitob",
    "author": "Nosiruddin Rabg'uziy",
    "cover": "covers/480.jpg",
    "file": "books/480.pdf",
    "genre": "Klassika",
    "year": 2023
  },
  {
    "title": "Qisasi Rabg'uziy. 2-kitob",
    "author": "Nosiruddin Rabg'uziy",
    "cover": "covers/481.jpg",
    "file": "books/481.pdf",
    "genre": "Klassika",
    "year": 2023
  },
  {
    "title": "O'rxun bitiglari",
    "author": "Yollug Tigin",
    "cover": "covers/482.jpg",
    "file": "books/482.pdf",
    "genre": "Klassika",
    "year": 2023
  },
  {
    "title": "Firdavs ul-iqbol",
    "author": "Ogahiy, Munis",
    "cover": "covers/483.jpg",
    "file": "books/483.pdf",
    "genre": "Klassika",
    "year": 2023
  },
  {
    "title": "Asarlar. 1-jild. Devon",
    "author": "Ogahiy",
    "cover": "covers/484.jpg",
    "file": "books/484.pdf",
    "genre": "Klassika",
    "year": 2023
  },
  {
    "title": "Miftohul-adl va Gulzordan (1962)",
    "author": "Poshshoxo'ja",
    "cover": "covers/485.jpg",
    "file": "books/485.pdf",
    "genre": "Klassika",
    "year": 2023
  },
  {
    "title": "Vafo qilsang",
    "author": "Qul Ubaydiy",
    "cover": "covers/486.jpg",
    "file": "books/486.pdf",
    "genre": "Klassika",
    "year": 2023
  },
  {
    "title": "Xusrav va Shirin",
    "author": "Qutb Xorazmiy",
    "cover": "covers/487.jpg",
    "file": "books/487.pdf",
    "genre": "Klassika",
    "year": 2023
  },
  {
    "title": "Hayrat-ul inson",
    "author": "Rojiy Marg'inoniy",
    "cover": "covers/488.jpg",
    "file": "books/488.pdf",
    "genre": "Klassika",
    "year": 2023
  },
  {
    "title": "Jamoling gulshanining bulbuliman",
    "author": "Rojiy Xorazmiy",
    "cover": "covers/489.jpg",
    "file": "books/489.pdf",
    "genre": "Klassika",
    "year": 2023
  },
  {
    "title": "Tanlangan asarlar",
    "author": "Sakkokiy",
    "cover": "covers/490.jpg",
    "file": "books/490.pdf",
    "genre": "Klassika",
    "year": 2023
  },
  {
    "title": "Gulistoni bit-turkiy",
    "author": "Sayfi Saroyi",
    "cover": "covers/491.jpg",
    "file": "books/491.pdf",
    "genre": "Klassika",
    "year": 2023
  },
  {
    "title": "She'rlar. Guliston",
    "author": "Sayfi Saroyi",
    "cover": "covers/492.jpg",
    "file": "books/492.pdf",
    "genre": "Klassika",
    "year": 2023
  },
  {
    "title": "Taashshuqnoma",
    "author": "Sayid Ahmad",
    "cover": "covers/493.jpg",
    "file": "books/493.pdf",
    "genre": "Klassika",
    "year": 2023
  },
  {
    "title": "Haqiqatnoma",
    "author": "Sayyid Qosimiy",
    "cover": "covers/494.jpg",
    "file": "books/494.pdf",
    "genre": "Klassika",
    "year": 2023
  },
  {
    "title": "Sadoqatnoma",
    "author": "Sayyid Qosimiy",
    "cover": "covers/495.jpg",
    "file": "books/495.pdf",
    "genre": "Klassika",
    "year": 2023
  },
  {
    "title": "Savodi ta'lim",
    "author": "Shermuhammad Munis",
    "cover": "covers/496.jpg",
    "file": "books/496.pdf",
    "genre": "Klassika",
    "year": 2023
  },
  {
    "title": "Saylanma",
    "author": "Shermuhammad Munis",
    "cover": "covers/497.jpg",
    "file": "books/497.pdf",
    "genre": "Klassika",
    "year": 2023
  },
  {
    "title": "Devon",
    "author": "Shohg'arib Mirzo",
    "cover": "covers/498.jpg",
    "file": "books/498.pdf",
    "genre": "Klassika",
    "year": 2023
  },
  {
    "title": "Navbahor",
    "author": "Sidqiy Xondayliqiy",
    "cover": "covers/499.jpg",
    "file": "books/499.pdf",
    "genre": "Klassika",
    "year": 1
  },
  {
    "title": "Tanlangan asarlar (1998)",
    "author": "Sidqiy Xondayliqiy",
    "cover": "covers/500.jpg",
    "file": "books/500.pdf",
    "genre": "Klassika",
    "year": 1998
  },
  //She`riyat//////////////////////////////////////////
  {
    "title": "Kuzda kulgan chechaklar",
    "author": "A'zam O'ktam",
    "cover": "covers/501.jpg",
    "file": "books/501.pdf",
    "genre": "She’riyat",
    "year": 2015
  },
  {
    "title": "Qirqinchi bahor",
    "author": "A'zam O'ktam",
    "cover": "covers/502.jpg",
    "file": "books/502.pdf",
    "genre": "She’riyat",
    "year": 2017
  },
  {
    "title": "Sog'intirib ketgum qadamlarimni",
    "author": "A'zam Obidov",
    "cover": "covers/503.jpg",
    "file": "books/503.pdf",
    "genre": "She’riyat",
    "year": 2009
  },
  {
    "title": "Xavotir oroli",
    "author": "A'zam Obidov",
    "cover": "covers/504.jpg",
    "file": "books/504.pdf",
    "genre": "She’riyat",
    "year": 2010
  },
  {
    "title": "Yo'limni poylaydi mo'jiza",
    "author": "A'zam Obidov",
    "cover": "covers/505.jpg",
    "file": "books/505.pdf",
    "genre": "She’riyat",
    "year": 2011
  },
  {
    "title": "Marg'ilon qo'ymas meni",
    "author": "Abdukarim Jumaboyev",
    "cover": "covers/506.jpg",
    "file": "books/506.pdf",
    "genre": "She’riyat",
    "year": 2012
  },
  {
    "title": "Marg'ilonda bo‘lganmisiz hech",
    "author": "Abdukarim Jumaboyev",
    "cover": "covers/507.jpg",
    "file": "books/507.pdf",
    "genre": "She’riyat",
    "year": 2012
  },
  {
    "title": "Umidli dunyo",
    "author": "Abdukarim Jumaboyev",
    "cover": "covers/508.jpg",
    "file": "books/508.pdf",
    "genre": "She’riyat",
    "year": 2013
  },
  {
    "title": "Horg'in vodiy",
    "author": "Abdul Jalil",
    "cover": "covers/509.jpg",
    "file": "books/509.pdf",
    "genre": "She’riyat",
    "year": 1998
  },
  {
    "title": "Asarlar",
    "author": "Abdulhamid Cho'lpon",
    "cover": "covers/510.jpg",
    "file": "books/510.pdf",
    "genre": "She’riyat",
    "year": 1992
  },
  {
    "title": "Binafsha",
    "author": "Abdulhamid Cho'lpon",
    "cover": "covers/511.jpg",
    "file": "books/511.pdf",
    "genre": "She’riyat",
    "year": 1924
  },
  {
    "title": "Buloqlar quchog'ida",
    "author": "Abdulhamid Cho'lpon",
    "cover": "covers/512.jpg",
    "file": "books/512.pdf",
    "genre": "She’riyat",
    "year": 1925
  },
  {
    "title": "Go'zal Turkiston",
    "author": "Abdulhamid Cho'lpon",
    "cover": "covers/513.jpg",
    "file": "books/513.pdf",
    "genre": "She’riyat",
    "year": 1923
  },
  {
    "title": "Oydanda Go'zal",
    "author": "Abdulhamid Cho'lpon",
    "cover": "covers/514.jpg",
    "file": "books/514.pdf",
    "genre": "She’riyat",
    "year": 1926
  },
  {
    "title": "Chorlov",
    "author": "Abdulhamid Parda",
    "cover": "covers/515.jpg",
    "file": "books/515.pdf",
    "genre": "She’riyat",
    "year": 2004
  },
  {
    "title": "Nomalar",
    "author": "Abdulhamid Parda",
    "cover": "covers/516.jpg",
    "file": "books/516.pdf",
    "genre": "She’riyat",
    "year": 2006
  },
  {
    "title": "Tanlangan asarlar. 1",
    "author": "Abdulhamid Parda",
    "cover": "covers/517.jpg",
    "file": "books/517.pdf",
    "genre": "She’riyat",
    "year": 2008
  },
  {
    "title": "Tanlangan asarlar. 2",
    "author": "Abdulhamid Parda",
    "cover": "covers/518.jpg",
    "file": "books/518.pdf",
    "genre": "She’riyat",
    "year": 2009
  },
  {
    "title": "Tanlangan asarlar. 3",
    "author": "Abdulhamid Parda",
    "cover": "covers/519.jpg",
    "file": "books/519.pdf",
    "genre": "She’riyat",
    "year": 2010
  },
  {
    "title": "Tanlangan asarlar. 4",
    "author": "Abdulhamid Parda",
    "cover": "covers/520.jpg",
    "file": "books/520.pdf",
    "genre": "She’riyat",
    "year": 2011
  },
  {
    "title": "Tanlangan asarlar. 5",
    "author": "Abdulhamid Parda",
    "cover": "covers/521.jpg",
    "file": "books/521.pdf",
    "genre": "She’riyat",
    "year": 2004
  },
  {
    "title": "Tanlangan asarlar. 6",
    "author": "Abdulhamid Parda",
    "cover": "covers/522.jpg",
    "file": "books/522.pdf",
    "genre": "She’riyat",
    "year": 2006
  },
  {
    "title": "Tanlangan asrtlar. 1",
    "author": "Abdulla Avloniy",
    "cover": "covers/523.jpg",
    "file": "books/523.pdf",
    "genre": "She’riyat",
    "year": 2001
  },
  {
    "title": "Uyg'oq ruhlar",
    "author": "Abdulla Jalil",
    "cover": "covers/524.jpg",
    "file": "books/524.pdf",
    "genre": "She’riyat",
    "year": 2003
  },
  {
    "title": "Bedorlik",
    "author": "Abdulla Oripov",
    "cover": "covers/525.jpg",
    "file": "books/525.pdf",
    "genre": "She’riyat",
    "year": 1979
  },
  {
    "title": "Birinchi Muhabbatim",
    "author": "Abdulla Oripov",
    "cover": "covers/526.jpg",
    "file": "books/526.pdf",
    "genre": "She’riyat",
    "year": 1981
  },
  {
    "title": "Haj daftari. Hikmat sadolari",
    "author": "Abdulla Oripov",
    "cover": "covers/527.jpg",
    "file": "books/527.pdf",
    "genre": "She’riyat",
    "year": 1992
  },
  {
    "title": "Hayrat",
    "author": "Abdulla Oripov",
    "cover": "covers/528.jpg",
    "file": "books/528.pdf",
    "genre": "She’riyat",
    "year": 1994
  },
  {
    "title": "Ishonch kopriklari",
    "author": "Abdulla Oripov",
    "cover": "covers/529.jpg",
    "file": "books/529.pdf",
    "genre": "She’riyat",
    "year": 1997
  },
  {
    "title": "Jannatga yo'l",
    "author": "Abdulla Oripov",
    "cover": "covers/530.jpg",
    "file": "books/530.pdf",
    "genre": "She’riyat",
    "year": 1999
  },
  {
    "title": "Ko'ztumor",
    "author": "Abdulla Oripov",
    "cover": "covers/531.jpg",
    "file": "books/531.pdf",
    "genre": "She’riyat",
    "year": 2001
  },
  {
    "title": "Menga xush xabar ayt",
    "author": "Abdulla Oripov",
    "cover": "covers/532.jpg",
    "file": "books/532.pdf",
    "genre": "She’riyat",
    "year": 2003
  },
  {
    "title": "Mitti yulduz",
    "author": "Abdulla Oripov",
    "cover": "covers/533.jpg",
    "file": "books/533.pdf",
    "genre": "She’riyat",
    "year": 2005
  },
  {
    "title": "Najot qal'asi",
    "author": "Abdulla Oripov",
    "cover": "covers/534.jpg",
    "file": "books/534.pdf",
    "genre": "She’riyat",
    "year": 2007
  },
  {
    "title": "O'zbekiston. Qasida",
    "author": "Abdulla Oripov",
    "cover": "covers/535.jpg",
    "file": "books/535.pdf",
    "genre": "She’riyat",
    "year": 2008
  },
  {
    "title": "Quyosh bekati",
    "author": "Abdulla Oripov",
    "cover": "covers/536.jpg",
    "file": "books/536.pdf",
    "genre": "She’riyat",
    "year": 2010
  },
  {
    "title": "Ruhim",
    "author": "Abdulla Oripov",
    "cover": "covers/537.jpg",
    "file": "books/537.pdf",
    "genre": "She’riyat",
    "year": 2011
  },
  {
    "title": "Savob",
    "author": "Abdulla Oripov",
    "cover": "covers/538.jpg",
    "file": "books/538.pdf",
    "genre": "She’riyat",
    "year": 2013
  },
  {
    "title": "Shoir yuragi",
    "author": "Abdulla Oripov",
    "cover": "covers/539.jpg",
    "file": "books/539.pdf",
    "genre": "She’riyat",
    "year": 2014
  },
  {
    "title": "Surat va siyrat",
    "author": "Abdulla Oripov",
    "cover": "covers/540.jpg",
    "file": "books/540.pdf",
    "genre": "She’riyat",
    "year": 2015
  },
  {
    "title": "Talosh Pallasi",
    "author": "Abdulla Oripov",
    "cover": "covers/541.jpg",
    "file": "books/541.pdf",
    "genre": "She’riyat",
    "year": 2016
  },
  {
    "title": "Tanlangan asarlar. 2",
    "author": "Abdulla Oripov",
    "cover": "covers/542.jpg",
    "file": "books/542.pdf",
    "genre": "She’riyat",
    "year": 2001
  },
  {
    "title": "Saylanma",
    "author": "Abdulla Oripov",
    "cover": "covers/543.jpg",
    "file": "books/543.pdf",
    "genre": "She’riyat",
    "year": 2003
  },
  {
    "title": "Tanlangan Asarlar. 4",
    "author": "Abdulla Oripov",
    "cover": "covers/544.jpg",
    "file": "books/544.pdf",
    "genre": "She’riyat",
    "year": 2005
  },
  {
    "title": "Tanlangan asarlar. 5",
    "author": "Abdulla Oripov",
    "cover": "covers/545.jpg",
    "file": "books/545.pdf",
    "genre": "She’riyat",
    "year": 2007
  },
  {
    "title": "Tanlangan asarlar. 6",
    "author": "Abdulla Oripov",
    "cover": "covers/546.jpg",
    "file": "books/546.pdf",
    "genre": "She’riyat",
    "year": 2008
  },
  {
    "title": "Quyosh Bekati",
    "author": "Abdulla Oripov",
    "cover": "covers/547.jpg",
    "file": "books/547.pdf",
    "genre": "She’riyat",
    "year": 2009
  },
  {
    "title": "Tanlangan asarlar. 7",
    "author": "Abdulla Oripov",
    "cover": "covers/548.jpg",
    "file": "books/548.pdf",
    "genre": "She’riyat",
    "year": 2010
  },
  {
    "title": "Tanlangan Asarlar. 8",
    "author": "Abdulla Oripov",
    "cover": "covers/549.jpg",
    "file": "books/549.pdf",
    "genre": "She’riyat",
    "year": 2012
  },
  {
    "title": "Yillar armoni",
    "author": "Abdulla Oripov",
    "cover": "covers/550.jpg",
    "file": "books/550.pdf",
    "genre": "She’riyat",
    "year": 2014
  },
  {
    "title": "Atirgul soyasi",
    "author": "Kuz hiloli",
    "cover": "covers/551.jpg",
    "file": "books/551.pdf",
    "genre": "She’riyat",
    "year": 2015
  },
  {
    "title": "Roz",
    "author": "Abdulla Sher",
    "cover": "covers/552.jpg",
    "file": "books/552.pdf",
    "genre": "She’riyat",
    "year": 2016
  },
  {
    "title": "Oy mo'ralar uyalib",
    "author": "Abdulla Shonosir",
    "cover": "covers/553.jpg",
    "file": "books/553.pdf",
    "genre": "She’riyat",
    "year": 2017
  },
  {
    "title": "Bomdod",
    "author": "Abdullo Zuhur",
    "cover": "covers/554.jpg",
    "file": "books/554.pdf",
    "genre": "She’riyat",
    "year": 2017
  },
  {
    "title": "Quyosh bolasi",
    "author": "Abdumajid Azim",
    "cover": "covers/555.jpg",
    "file": "books/555.pdf",
    "genre": "She’riyat",
    "year": 2018
  },
  {
    "title": "Ruhi rivonim",
    "author": "Abdumajid Azim",
    "cover": "covers/556.jpg",
    "file": "books/556.pdf",
    "genre": "She’riyat",
    "year": 2019
  },
  {
    "title": "Tanlangan asarlar 4/1",
    "author": "Abdumajid Azim",
    "cover": "covers/557.jpg",
    "file": "books/557.pdf",
    "genre": "She’riyat",
    "year": 2020
  },
  {
    "title": "Tanlangan asarlar 4/2",
    "author": "Abdumajid Azim",
    "cover": "covers/558.jpg",
    "file": "books/558.pdf",
    "genre": "She’riyat",
    "year": 2020
  },
  {
    "title": "Tanlangan asarlar 4/3",
    "author": "Abdumajid Azim",
    "cover": "covers/559.jpg",
    "file": "books/559.pdf",
    "genre": "She’riyat",
    "year": 2020
  },
  {
    "title": "Tanlangan asarlar 4/4",
    "author": "Abdumajid Azim",
    "cover": "covers/560.jpg",
    "file": "books/560.pdf",
    "genre": "She’riyat",
    "year": 2021
  },
  {
    "title": "Tong tabassumi",
    "author": "Abdumajid Azim",
    "cover": "covers/561.jpg",
    "file": "books/561.pdf",
    "genre": "She’riyat",
    "year": 2022
  },
  {
    "title": "Umid belanchagi",
    "author": "Abdumajid Azim",
    "cover": "covers/562.jpg",
    "file": "books/562.pdf",
    "genre": "She’riyat",
    "year": 2022
  },
  {
    "title": "Qalbimning vatani",
    "author": "Abdumajid Azimov",
    "cover": "covers/563.jpg",
    "file": "books/563.pdf",
    "genre": "She’riyat",
    "year": 2023
  },
  {
    "title": "G'uboringni yozgayman",
    "author": "Abdunabi Boyqo'ziyev",
    "cover": "covers/564.jpg",
    "file": "books/564.pdf",
    "genre": "She’riyat",
    "year": 2020
  },
  {
    "title": "Judolig' dashti",
    "author": "Abdunabi Boyqo'ziyev",
    "cover": "covers/565.jpg",
    "file": "books/565.pdf",
    "genre": "She’riyat",
    "year": 2021
  },
  {
    "title": "Ko'zlari daryoyim-ey",
    "author": "Abdunabi Boyqo'ziyev",
    "cover": "covers/566.jpg",
    "file": "books/566.pdf",
    "genre": "She’riyat",
    "year": 2022
  },
  {
    "title": "Ra'noliging",
    "author": "Abduqahhor G'afforiy",
    "cover": "covers/567.jpg",
    "file": "books/567.pdf",
    "genre": "She’riyat",
    "year": 2021
  },
  {
    "title": "Yurt qayg'usi",
    "author": "Abdurauf Fitrat",
    "cover": "covers/568.jpg",
    "file": "books/568.pdf",
    "genre": "She’riyat",
    "year": 1923
  },
  {
    "title": "Ruxsat bering, sher o'qiyman",
    "author": "Abdurazzoq Obro'y",
    "cover": "covers/569.jpg",
    "file": "books/569.pdf",
    "genre": "She’riyat",
    "year": 2020
  },
  {
    "title": "Qiyofa",
    "author": "Abdusaid Ko'chimov",
    "cover": "covers/570.jpg",
    "file": "books/570.pdf",
    "genre": "She’riyat",
    "year": 2019
  },
  {
    "title": "Nayson",
    "author": "Abduvali Qutbiddin",
    "cover": "covers/571.jpg",
    "file": "books/571.pdf",
    "genre": "She’riyat",
    "year": 2019
  },
  {
    "title": "Xayol kechasi",
    "author": "Abduvali Qutbiddin",
    "cover": "covers/572.jpg",
    "file": "books/572.pdf",
    "genre": "She’riyat",
    "year": 2020
  },
  {
    "title": "Quyoshga yo'l",
    "author": "Adiba Umirova",
    "cover": "covers/573.jpg",
    "file": "books/573.pdf",
    "genre": "She’riyat",
    "year": 2021
  },
  {
    "title": "Yashil tushlar",
    "author": "Adiba Umirova",
    "cover": "covers/574.jpg",
    "file": "books/574.pdf",
    "genre": "She’riyat",
    "year": 2022
  },
  {
    "title": "Saylanma",
    "author": "Ahmad Ho'ja",
    "cover": "covers/575.jpg",
    "file": "books/575.pdf",
    "genre": "She’riyat",
    "year": 2019
  },
  {
    "title": "Chamanyalla",
    "author": "Akmal Po'lat",
    "cover": "covers/576.jpg",
    "file": "books/576.pdf",
    "genre": "She’riyat",
    "year": 2020
  },
  {
    "title": "Kuylarim",
    "author": "Akmal Po'lat",
    "cover": "covers/577.jpg",
    "file": "books/577.pdf",
    "genre": "She’riyat",
    "year": 2021
  },
  {
    "title": "1001 xazina",
    "author": "Alisher Aymatli",
    "cover": "covers/578.jpg",
    "file": "books/578.pdf",
    "genre": "She’riyat",
    "year": 2020
  },
  {
    "title": "60",
    "author": "Alisher Aymatli",
    "cover": "covers/579.jpg",
    "file": "books/579.pdf",
    "genre": "She’riyat",
    "year": 2021
  },
  {
    "title": "Ko'ngil hikmatlari",
    "author": "Alisher Aymatli",
    "cover": "covers/580.jpg",
    "file": "books/580.pdf",
    "genre": "She’riyat",
    "year": 2022
  },
  {
    "title": "Vola",
    "author": "Alisher Nazar",
    "cover": "covers/581.jpg",
    "file": "books/581.pdf",
    "genre": "She’riyat",
    "year": 2023
  },
  {
    "title": "Evrilish",
    "author": "Amir Xudoyberdi",
    "cover": "covers/582.jpg",
    "file": "books/582.pdf",
    "genre": "She’riyat",
    "year": 2018
  },
  {
    "title": "Oydin lahzalar",
    "author": "Amir Xudoyberdi",
    "cover": "covers/583.jpg",
    "file": "books/583.pdf",
    "genre": "She’riyat",
    "year": 2019
  },
  {
    "title": "Bezgakshamol",
    "author": "Anvar Obidjon",
    "cover": "covers/584.jpg",
    "file": "books/584.pdf",
    "genre": "She’riyat",
    "year": 2020
  },
  {
    "title": "Bezgakshamol 2",
    "author": "Anvar Obidjon",
    "cover": "covers/585.jpg",
    "file": "books/585.pdf",
    "genre": "She’riyat",
    "year": 2021
  },
  {
    "title": "Ketmagin",
    "author": "Anvar Obidjon",
    "cover": "covers/586.jpg",
    "file": "books/586.pdf",
    "genre": "She’riyat",
    "year": 2022
  },
  {
    "title": "Taskin",
    "author": "Anvar Samad",
    "cover": "covers/587.jpg",
    "file": "books/587.pdf",
    "genre": "She’riyat",
    "year": 2019
  },
  {
    "title": "Sog'inch fasli",
    "author": "Anvar Tog'ayev",
    "cover": "covers/588.jpg",
    "file": "books/588.pdf",
    "genre": "She’riyat",
    "year": 2020
  },
  {
    "title": "Yillar in'omi",
    "author": "Isom Ziyo",
    "cover": "covers/589.jpg",
    "file": "books/589.pdf",
    "genre": "She’riyat",
    "year": 2021
  },
  {
    "title": "Sizga aytar so'zim",
    "author": "Asqad Muxtor",
    "cover": "covers/590.jpg",
    "file": "books/590.pdf",
    "genre": "She’riyat",
    "year": 2017
  },
  {
    "title": "Tanlangan asarlar",
    "author": "Asqad Muxtor",
    "cover": "covers/591.jpg",
    "file": "books/591.pdf",
    "genre": "She’riyat",
    "year": 2018
  },
  {
    "title": "Ishq",
    "author": "Asqar Mahkam",
    "cover": "covers/592.jpg",
    "file": "books/592.pdf",
    "genre": "She’riyat",
    "year": 2020
  },
  {
    "title": "Tavajjuh",
    "author": "Asqar Mahkam",
    "cover": "covers/593.jpg",
    "file": "books/593.pdf",
    "genre": "She’riyat",
    "year": 2021
  },
  {
    "title": "Bir kun qaytaman",
    "author": "Asqar Qosim",
    "cover": "covers/594.jpg",
    "file": "books/594.pdf",
    "genre": "She’riyat",
    "year": 2022
  },
  {
    "title": "Ey, qaro ko'zim",
    "author": "Asqar Qosim",
    "cover": "covers/595.jpg",
    "file": "books/595.pdf",
    "genre": "She’riyat",
    "year": 2023
  },
  {
    "title": "Zamin ko'rki",
    "author": "Asqar Qosim",
    "cover": "covers/596.jpg",
    "file": "books/596.pdf",
    "genre": "She’riyat",
    "year": 2023
  },
  {
    "title": "Men Yerlikman",
    "author": "Azim Suyun",
    "cover": "covers/597.jpg",
    "file": "books/597.pdf",
    "genre": "She’riyat",
    "year": 2021
  },
  {
    "title": "Javzo",
    "author": "Azim Suyun",
    "cover": "covers/598.jpg",
    "file": "books/598.pdf",
    "genre": "She’riyat",
    "year": 2022
  },
  {
    "title": "Muhabbat Xayratlari",
    "author": "Azim Suyun",
    "cover": "covers/599.jpg",
    "file": "books/599.pdf",
    "genre": "She’riyat",
    "year": 2023
  },
  {
    title: "Sarbadorlar",
    author: "Azim Suyun",
    cover: "covers/600.jpg",
    file: "books/600.pdf",
    genre: "She’riyat",
    year: 2023
  },

  //Jahon nasri/////////////////////////////////////////////////////////////////////////////
  {
    title: "Halokat",
    author: "Abdijamil Nurpeisov",
    cover: "covers/601.jpg",
    file: "books/601.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Zulmat",
    author: "Abdijamil Nurpeisov",
    cover: "covers/602.jpg",
    file: "books/602.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Xon va o'zgalar",
    author: "Abdulhusayn Nushin",
    cover: "covers/603.jpg",
    file: "books/603.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Yer",
    author: "Abdurahmon ash-Sharqoviy",
    cover: "covers/604.jpg",
    file: "books/604.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "O'n yetti yoshlilar",
    author: "Agniya Kuznetsova",
    cover: "covers/605.jpg",
    file: "books/605.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "O'rgimchak uyasi tolasi",
    author: "Agutagava Ryunoske",
    cover: "covers/606.jpg",
    file: "books/606.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Bir vijdon uyg'onur",
    author: "Ahmad Lutfiy Qozonchi",
    cover: "covers/607.jpg",
    file: "books/607.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "O'gay ona",
    author: "Ahmad Lutfiy Qozonchi",
    cover: "covers/608.jpg",
    file: "books/608.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Qaynona",
    author: "Ahmad Lutfiy Qozonchi",
    cover: "covers/609.jpg",
    file: "books/609.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Madina amma ertaklari",
    author: "Akram Aylisli",
    cover: "covers/610.jpg",
    file: "books/610.pdf",
    genre: "Jahon nasri",
    year: 1
  }, 
  {
    title: "Begona",
    author: "Alber Kamyu",
    cover: "covers/611.jpg",
    file: "books/611.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Vabo",
    author: "Alber Kamyu",
    cover: "covers/612.jpg",
    file: "books/612.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Mening generalim",
    author: "Albert Lixanov",
    cover: "covers/613.jpg",
    file: "books/613.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Toshqin",
    author: "Albert Lixanov",
    cover: "covers/614.jpg",
    file: "books/614.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Amfibiya odam",
    author: "Aleksandr Belyayev",
    cover: "covers/615.jpg",
    file: "books/615.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Jahongir",
    author: "Aleksandr Belyayev",
    cover: "covers/616.jpg",
    file: "books/616.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Kets yulduzi",
    author: "Aleksandr Belyayev",
    cover: "covers/617.jpg",
    file: "books/617.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Ikki Diana",
    author: "Aleksandr Dyuma",
    cover: "covers/618.jpg",
    file: "books/618.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Qalb xotirasi",
    author: "Aleksandr Ilchenko",
    cover: "covers/619.jpg",
    file: "books/619.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Yoqut ko'zli bilaguzuk",
    author: "Aleksandr Kuprin",
    cover: "covers/620.jpg",
    file: "books/620.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Dubrovskiy",
    author: "Aleksandr Pushkin",
    cover: "covers/621.jpg",
    file: "books/621.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Kapitan qizi",
    author: "Aleksandr Pushkin",
    cover: "covers/622.jpg",
    file: "books/622.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Kapitan qizi",
    author: "Aleksandr Pushkin",
    cover: "covers/623.jpg",
    file: "books/623.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Marhum Ivan Petrovich Belkin qissalari",
    author: "Aleksandr Pushkin",
    cover: "covers/624.jpg",
    file: "books/624.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Suv parisi",
    author: "Aleksandr Pushkin",
    cover: "covers/625.jpg",
    file: "books/625.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Temir oqim",
    author: "Aleksandr Serafimovich",
    cover: "covers/626.jpg",
    file: "books/626.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Muhabbat mangu",
    author: "Aleksandr Udalov",
    cover: "covers/627.jpg",
    file: "books/627.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Muzeydagi sirli qotillik",
    author: "Aleksey Korobitsin",
    cover: "covers/628.jpg",
    file: "books/628.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Injener Garinning mo'jizasi",
    author: "Aleksey Tolstoy",
    cover: "covers/629.jpg",
    file: "books/629.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Qog'oz yo'li",
    author: "Erik Orsenna",
    cover: "covers/630.jpg",
    file: "books/630.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Uch Ogayni",
    author: "Erix Mariya Remark",
    cover: "covers/631.jpg",
    file: "books/631.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Cho'qqilar uyg'oq",
    author: "Alim Keshokov",
    cover: "covers/632.jpg",
    file: "books/632.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Yovoyi Yorga",
    author: "Ernest Seton-Tompson",
    cover: "covers/633.jpg",
    file: "books/633.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Soyalar choshgohda yo'qoladi",
    author: "Anatoliy Ivanov",
    cover: "covers/634.jpg",
    file: "books/634.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Paganini qismati",
    author: "Anatoliy Vinogradov",
    cover: "covers/635.jpg",
    file: "books/635.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Kapitan Vrungelning sarguzashtlari",
    author: "Andrey Nekrasov",
    cover: "covers/636.jpg",
    file: "books/636.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Anna Zegers",
    author: "Barhayot o'liklar",
    cover: "covers/637.jpg",
    file: "books/637.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Varana vodiysida",
    author: "Annabxau Satxe",
    cover: "covers/638.jpg",
    file: "books/638.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Besh qavatli uyning oltinchi qavati",
    author: "Anor",
    cover: "covers/639.jpg",
    file: "books/639.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Oq ko'rfaz",
    author: "Anor",
    cover: "covers/640.jpg",
    file: "books/640.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Tanlangan asarlar. 1-jild. Hikoyalar",
    author: "Anton Chexov",
    cover: "covers/641.jpg",
    file: "books/641.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Tanlangan asarlar. 2-jild. Hikoyalar",
    author: "Anton Chexov",
    cover: "covers/642.jpg",
    file: "books/642.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Tanlangan asarlar. 2-jild. Qissa va hikoyalar",
    author: "Anton Chexov",
    cover: "covers/643.jpg",
    file: "books/643.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Qorasoy",
    author: "Anvar Bikchentoyev",
    cover: "covers/644.jpg",
    file: "books/644.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Bo'ri po'stin",
    author: "Arkadiy Averchenko",
    cover: "covers/645.jpg",
    file: "books/645.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Baskervillar iti",
    author: "Artur Konan Doyl",
    cover: "covers/646.jpg",
    file: "books/646.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Sherlok Xolms haqida hikoyalar",
    author: "Artur Konan Doyl",
    cover: "covers/647.jpg",
    file: "books/647.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Yo'qolgan dunyo",
    author: "Artur Konan Doyl",
    cover: "covers/648.jpg",
    file: "books/648.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Dengiz sarguzashtlari",
    author: "Artur Lielayz",
    cover: "covers/649.jpg",
    file: "books/649.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Oqsoq bo'ri",
    author: "Axiyor Hakimov",
    cover: "covers/650.jpg",
    file: "books/650.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Poyga",
    author: "Axiyor Hakimov",
    cover: "covers/651.jpg",
    file: "books/651.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Qissalar",
    author: "Axiyor Hakimov",
    cover: "covers/652.jpg",
    file: "books/652.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Shu'la",
    author: "Axiyor Hakimov",
    cover: "covers/653.jpg",
    file: "books/653.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Koinot oqimlari",
    author: "Ayzek Azimov",
    cover: "covers/654.jpg",
    file: "books/654.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Koinot oqimlari",
    author: "Ayzek Azimov",
    cover: "covers/655.jpg",
    file: "books/655.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Futbol qiroli",
    author: "Aziz Nesin",
    cover: "covers/656.jpg",
    file: "books/656.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Keyin xursand bo'lasiz",
    author: "Aziz Nesin",
    cover: "covers/657.jpg",
    file: "books/657.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Qaysar chol qissasi",
    author: "Berislav Kosier",
    cover: "covers/658.jpg",
    file: "books/658.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Darichalar",
    author: "Bhisham Sahniy",
    cover: "covers/659.jpg",
    file: "books/659.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Aleksey Kulikov jangchi",
    author: "Boris Gorbatov",
    cover: "covers/660.jpg",
    file: "books/660.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Maxsus topshiriq",
    author: "Boris Parmuzin",
    cover: "covers/661.jpg",
    file: "books/661.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Nyurnberg qasosi",
    author: "Boris Polevoy",
    cover: "covers/662.jpg",
    file: "books/662.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Ro'yxatlarda yo'q edi nomi",
    author: "Boris Vasilev",
    cover: "covers/663.jpg",
    file: "books/663.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Tonglar edi sokin bu yerda",
    author: "Boris Vasilev",
    cover: "covers/664.jpg",
    file: "books/664.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Bizning oila",
    author: "Bourjon Mumish o'g'li",
    cover: "covers/665.jpg",
    file: "books/665.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Tarjimai holim",
    author: "Branislav Nushich",
    cover: "covers/666.jpg",
    file: "books/666.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Data Tutashxia",
    author: "Chabua Amirejibi",
    cover: "covers/667.jpg",
    file: "books/667.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Beorom Tamir",
    author: "Chadraabalin Lodoydamba",
    cover: "covers/668.jpg",
    file: "books/668.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Oliver Tvistning boshidan kechirganlari",
    author: "Charlz Dikkens",
    cover: "covers/669.jpg",
    file: "books/669.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Tug'ishganlar",
    author: "Cherkez Ali",
    cover: "covers/670.jpg",
    file: "books/670.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Cho'qqida qolgan ovchining ohi-zori",
    author: "Chingiz Aytmatov",
    cover: "covers/671.jpg",
    file: "books/671.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Alvido, ey Gulsari",
    author: "Chingiz Aytmatov",
    cover: "covers/672.jpg",
    file: "books/672.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Birinchi muallim",
    author: "Chingiz Aytmatov",
    cover: "covers/673.jpg",
    file: "books/673.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Birinchi muallim",
    author: "Chingiz Aytmatov",
    cover: "covers/674.jpg",
    file: "books/674.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Bo'tako'z",
    author: "Chingiz Aytmatov",
    cover: "covers/675.jpg",
    file: "books/675.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Bolaligim",
    author: "Chingiz Aytmatov",
    cover: "covers/676.jpg",
    file: "books/676.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Chingizxonning oq buluti",
    author: "Chingiz Aytmatov",
    cover: "covers/677.jpg",
    file: "books/677.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Erta kelgan turnalar",
    author: "Chingiz Aytmatov",
    cover: "covers/678.jpg",
    file: "books/678.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Erta kelgan turnalar",
    author: "Chingiz Aytmatov",
    cover: "covers/679.jpg",
    file: "books/679.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Erta qaytgan turnalar",
    author: "Chingiz Aytmatov",
    cover: "covers/680.jpg",
    file: "books/680.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Hikoyalar",
    author: "Chingiz Aytmatov",
    cover: "covers/681.jpg",
    file: "books/681.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Jamila",
    author: "Chingiz Aytmatov",
    cover: "covers/682.jpg",
    file: "books/682.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Oqkema",
    author: "Chingiz Aytmatov",
    cover: "covers/683.jpg",
    file: "books/683.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Oxirzamon nishonalari",
    author: "Chingiz Aytmatov",
    cover: "covers/684.jpg",
    file: "books/684.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Qiyomat",
    author: "Chingiz Aytmatov",
    cover: "covers/685.jpg",
    file: "books/685.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Qiyomat. Asrga tatigulik kun",
    author: "Chingiz Aytmatov",
    cover: "covers/686.jpg",
    file: "books/686.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Sarvqomat dilbarim",
    author: "Chingiz Aytmatov",
    cover: "covers/687.jpg",
    file: "books/687.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Sarvqomat dilbarim",
    author: "Chingiz Aytmatov",
    cover: "covers/688.jpg",
    file: "books/688.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Sohil yoqalab chopayotgan Olapar",
    author: "Chingiz Aytmatov",
    cover: "covers/689.jpg",
    file: "books/689.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Somon yo'li",
    author: "Chingiz Aytmatov",
    cover: "covers/690.jpg",
    file: "books/690.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Muhammad. Mamad. Mamish",
    author: "Chingiz Husaynov",
    cover: "covers/691.jpg",
    file: "books/691.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Vayronalik shunday boshlanadi",
    author: "Chinua Achebe",
    cover: "covers/692.jpg",
    file: "books/692.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Xalqdan chiqqan odam",
    author: "Chinua Achebe",
    cover: "covers/693.jpg",
    file: "books/693.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Robinzon Kruzoning hayoti va ajoyib sarguzashtlari",
    author: "Daniel Defo",
    cover: "covers/694.jpg",
    file: "books/694.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Da Vinchi siri",
    author: "Den Braun",
    cover: "covers/695.jpg",
    file: "books/695.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Omen",
    author: "Devid Zeltser",
    cover: "covers/696.jpg",
    file: "books/696.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Baron Myunxauzenning sarguzashtlari",
    author: "E.Raspe",
    cover: "covers/697.jpg",
    file: "books/697.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Tokio vaqti bilan oltiyu o'ttizda",
    author: "Ed.Arbenov, M.Pismanik",
    cover: "covers/698.jpg",
    file: "books/698.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "To'xtating samolyotni, tushib qolaman",
    author: "Efreym Sevela",
    cover: "covers/699.jpg",
    file: "books/699.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  {
    title: "Hamal",
    author: "Emil Zolya",
    cover: "covers/700.jpg",
    file: "books/700.pdf",
    genre: "Jahon nasri",
    year: 1
  },
  //O`zbek Nasri
  {
    title: "Qariya",
    author: "Abbos Said",
    cover: "covers/701.jpg",
    file: "books/701.pdf",
    genre: "O`zbek Nasri",
    year: 2000
  },
  {
    title: "Hikoyalar, tarjimalar",
    author: "Abdulhamid Cho‘lpon",
    cover: "covers/702.jpg",
    file: "books/702.pdf",
    genre: "O`zbek Nasri",
    year: 1920
  },
  {
    title: "Jinlar bazmi",
    author: "Abdulhamid Ismoil",
    cover: "covers/703.jpg",
    file: "books/703.pdf",
    genre: "O`zbek Nasri",
    year: 2010
  },
  {
    title: "Manaschi",
    author: "Abdulhamid Ismoil",
    cover: "covers/704.jpg",
    file: "books/704.pdf",
    genre: "O`zbek Nasri",
    year: 2015
  },
  {
    title: "Murtad",
    author: "Abdulhamid Ismoil",
    cover: "covers/705.jpg",
    file: "books/705.pdf",
    genre: "O`zbek Nasri",
    year: 2012
  },
  {
    title: "Qullikdan hurlikka",
    author: "Abdulhamid Ko‘char",
    cover: "covers/706.jpg",
    file: "books/706.pdf",
    genre: "O`zbek Nasri",
    year: 1995
  },
  {
    title: "Polvon yig‘lagan tun",
    author: "Abdulla Ayizov",
    cover: "covers/707.jpg",
    file: "books/707.pdf",
    genre: "O`zbek Nasri",
    year: 2005
  },
  {
    title: "Hayot yog‘dulari",
    author: "Abdulla Chimirzayev",
    cover: "covers/708.jpg",
    file: "books/708.pdf",
    genre: "O`zbek Nasri",
    year: 1990
  },
  {
    title: "Asarlar. 1-jild. Sarob",
    author: "Abdulla Qahhor",
    cover: "covers/709.jpg",
    file: "books/709.pdf",
    genre: "O`zbek Nasri",
    year: 1958
  },
  {
    title: "Asarlar. 5 jildlik. 2-jild. Qo‘shchinor chiroqlari",
    author: "Abdulla Qahhor",
    cover: "covers/710.jpg",
    file: "books/710.pdf",
    genre: "O`zbek Nasri",
    year: 1960
  },
  {
    title: "Asarlar. 5 jildlik. 3-jild. O‘tmishdan ertaklar",
    author: "Abdulla Qahhor",
    cover: "covers/711.jpg",
    file: "books/711.pdf",
    genre: "O`zbek Nasri",
    year: 1962
  },
  {
    title: "Asarlar. 6 tomlik. 3-tom",
    author: "Abdulla Qahhor",
    cover: "covers/712.jpg",
    file: "books/712.pdf",
    genre: "O`zbek Nasri",
    year: 1967
  },
  {
    title: "Asarlar. 6 tomlik. 4-tom",
    author: "Abdulla Qahhor",
    cover: "covers/713.jpg",
    file: "books/713.pdf",
    genre: "O`zbek Nasri",
    year: 1967
  },
  {
    title: "Asarlar. 6 tomlik. 6-tom",
    author: "Abdulla Qahhor",
    cover: "covers/714.jpg",
    file: "books/714.pdf",
    genre: "O`zbek Nasri",
    year: 1971
  },
  {
    title: "Dahshat",
    author: "Abdulla Qahhor",
    cover: "covers/715.jpg",
    file: "books/715.pdf",
    genre: "O`zbek Nasri",
    year: 1942
  },
  {
    title: "Hikoyalar",
    author: "Abdulla Qahhor",
    cover: "covers/716.jpg",
    file: "books/716.pdf",
    genre: "O`zbek Nasri",
    year: 1933
  },
  {
    title: "Hikoyalar",
    author: "Abdulla Qahhor",
    cover: "covers/717.jpg",
    file: "books/717.pdf",
    genre: "O`zbek Nasri",
    year: 1949
  },
  {
    title: "Ming bir jon",
    author: "Abdulla Qahhor",
    cover: "covers/718.jpg",
    file: "books/718.pdf",
    genre: "O`zbek Nasri",
    year: 1959
  },
  {
    title: "Muhabbat",
    author: "Abdulla Qahhor",
    cover: "covers/719.jpg",
    file: "books/719.pdf",
    genre: "O`zbek Nasri",
    year: 1958
  },
  {
    title: "Nurli cho‘qqilar",
    author: "Abdulla Qahhor",
    cover: "covers/720.jpg",
    file: "books/720.pdf",
    genre: "O`zbek Nasri",
    year: 1967
  },
  {
    title: "O‘tmishdan ertaklar",
    author: "Abdulla Qahhor",
    cover: "covers/721.jpg",
    file: "books/721.pdf",
    genre: "O`zbek Nasri",
    year: 1976
  },
  {
    title: "O‘tmishdan ertaklar",
    author: "Abdulla Qahhor",
    cover: "covers/722.jpg",
    file: "books/722.pdf",
    genre: "O`zbek Nasri",
    year: 1976
  },
  {
    title: "Oltin yulduz",
    author: "Abdulla Qahhor",
    cover: "covers/723.jpg",
    file: "books/723.pdf",
    genre: "O`zbek Nasri",
    year: 1965
  },
  {
    title: "Oltin yulduz",
    author: "Abdulla Qahhor",
    cover: "covers/724.jpg",
    file: "books/724.pdf",
    genre: "O`zbek Nasri",
    year: 1965
  },
  {
    title: "Portretlar, felyetonlar",
    author: "Abdulla Qahhor",
    cover: "covers/725.jpg",
    file: "books/725.pdf",
    genre: "O`zbek Nasri",
    year: 1960
  },
  {
    title: "Qanotsiz chittak",
    author: "Abdulla Qahhor",
    cover: "covers/726.jpg",
    file: "books/726.pdf",
    genre: "O`zbek Nasri",
    year: 1937
  },
  {
    title: "Qo‘shchinor chiroqlari",
    author: "Abdulla Qahhor",
    cover: "covers/727.jpg",
    file: "books/727.pdf",
    genre: "O`zbek Nasri",
    year: 1958
  },
  {
    title: "Qotilning tug‘ilishi",
    author: "Abdulla Qahhor",
    cover: "covers/728.jpg",
    file: "books/728.pdf",
    genre: "O`zbek Nasri",
    year: 1933
  },
  {
    title: "Sarob",
    author: "Abdulla Qahhor",
    cover: "covers/729.jpg",
    file: "books/729.pdf",
    genre: "O`zbek Nasri",
    year: 1958
  },
  {
    title: "Sinchalak",
    author: "Abdulla Qahhor",
    cover: "covers/730.jpg",
    file: "books/730.pdf",
    genre: "O`zbek Nasri",
    year: 1960
  }, {
    title: "Sinchalak",
    author: "Abdulla Qahhor",
    cover: "covers/731.jpg",
    file: "books/731.pdf",
    genre: "O`zbek Nasri",
    year: 1960
  },
  {
    title: "Tanlangan asarlar. 3 tomlik. 1-tom",
    author: "Abdulla Qahhor",
    cover: "covers/732.jpg",
    file: "books/732.pdf",
    genre: "O`zbek Nasri",
    year: 1957
  },
  {
    title: "Tanlangan asarlar. 3 tomlik. 2-tom",
    author: "Abdulla Qahhor",
    cover: "covers/733.jpg",
    file: "books/733.pdf",
    genre: "O`zbek Nasri",
    year: 1957
  },
  {
    title: "Tanlangan asarlar. 3 tomlik. 3-tom",
    author: "Abdulla Qahhor",
    cover: "covers/734.jpg",
    file: "books/734.pdf",
    genre: "O`zbek Nasri",
    year: 1956
  },
  {
    title: "Mulk",
    author: "Asad Dilmurod",
    cover: "covers/735.jpg",
    file: "books/735.pdf",
    genre: "O`zbek Nasri",
    year: 1960
  },
  {
    title: "Diyori bakr",
    author: "Abdulla Qodiriy",
    cover: "covers/736.jpg",
    file: "books/736.pdf",
    genre: "O`zbek Nasri",
    year: 1920
  },
  {
    title: "Jinlar bazmi",
    author: "Abdulla Qodiriy",
    cover: "covers/737.jpg",
    file: "books/737.pdf",
    genre: "O`zbek Nasri",
    year: 1922
  },
  {
    title: "Mehrobdan chayon",
    author: "Abdulla Qodiriy",
    cover: "covers/738.jpg",
    file: "books/738.pdf",
    genre: "O`zbek Nasri",
    year: 1967
  },
  {
    title: "Mehrobdan chayon",
    author: "Abdulla Qodiriy",
    cover: "covers/739.jpg",
    file: "books/739.pdf",
    genre: "O`zbek Nasri",
    year: 1929
  },
  {
    title: "O‘tkan kunlar",
    author: "Abdulla Qodiriy",
    cover: "covers/740.jpg",
    file: "books/740.pdf",
    genre: "O`zbek Nasri",
    year: 1974
  },
  {
    title: "O‘tkan kunlar",
    author: "Abdulla Qodiriy",
    cover: "covers/741.jpg",
    file: "books/741.pdf",
    genre: "O`zbek Nasri",
    year: 1925
  },
  {
    title: "Obid ketmon",
    author: "Abdulla Qodiriy",
    cover: "covers/742.jpg",
    file: "books/742.pdf",
    genre: "O`zbek Nasri",
    year: 1927
  },
  {
    title: "To‘la asarlar to‘plami. 6 jildlik 1-jild",
    author: "Abdulla Qodiriy",
    cover: "covers/743.jpg",
    file: "books/743.pdf",
    genre: "O`zbek Nasri",
    year: 1968
  },
  {
    title: "Alushta ertagi",
    author: "Abdumutal Abdullayev",
    cover: "covers/744.jpg",
    file: "books/744.pdf",
    genre: "O`zbek Nasri",
    year: 1985
  },
  {
    title: "Dard",
    author: "Abdumutal Abdullayev",
    cover: "covers/745.jpg",
    file: "books/745.pdf",
    genre: "O`zbek Nasri",
    year: 1988
  },
  {
    title: "Hazrati Attor",
    author: "Abdumutal Abdullayev",
    cover: "covers/746.jpg",
    file: "books/746.pdf",
    genre: "O`zbek Nasri",
    year: 1990
  },
  {
    title: "Muallaq odam",
    author: "Abdunabi Abdiyev",
    cover: "covers/747.jpg",
    file: "books/747.pdf",
    genre: "O`zbek Nasri",
    year: 1995
  },
  {
    title: "Vaqt daryosi",
    author: "Abdunabi Hamro",
    cover: "covers/748.jpg",
    file: "books/748.pdf",
    genre: "O`zbek Nasri",
    year: 2000
  },
  {
    title: "Uyqu kelmas kechalar",
    author: "Abduqahhor Ibrohimov",
    cover: "covers/749.jpg",
    file: "books/749.pdf",
    genre: "O`zbek Nasri",
    year: 2010
  },
  {
    title: "Otchopar yoxud o‘n uchinchi uy",
    author: "Abduqayum Yo‘ldosh",
    cover: "covers/750.jpg",
    file: "books/750.pdf",
    genre: "O`zbek Nasri",
    year: 2000
  }, {
    title: "Sunbulaning ilk shanbasi",
    author: "Abduqayum Yo‘ldosh",
    cover: "covers/751.jpg",
    file: "books/751.pdf",
    genre: "O`zbek Nasri",
    year: 2003
  },
  {
    title: "Timsohning ko‘z yoshlari",
    author: "Abduqayum Yo‘ldosh",
    cover: "covers/752.jpg",
    file: "books/752.pdf",
    genre: "O`zbek Nasri",
    year: 2004
  },
  {
    title: "Timsohning ko‘z yoshlari",
    author: "Abduqayum Yo‘ldosh",
    cover: "covers/753.jpg",
    file: "books/753.pdf",
    genre: "O`zbek Nasri",
    year: 2004
  },
  {
    title: "Toy",
    author: "Abduqayum Yo‘ldosh",
    cover: "covers/754.jpg",
    file: "books/754.pdf",
    genre: "O`zbek Nasri",
    year: 2005
  },
  {
    title: "Yulduzning yo‘li",
    author: "Abduqayum Yo‘ldosh",
    cover: "covers/755.jpg",
    file: "books/755.pdf",
    genre: "O`zbek Nasri",
    year: 2005
  },
  {
    title: "Qaro ko‘zim",
    author: "Abdurahmon Karimov, Abduqayum Yo‘ldosh",
    cover: "covers/756.jpg",
    file: "books/756.pdf",
    genre: "O`zbek Nasri",
    year: 2006
  },
  {
    title: "Nurafshon yog‘du",
    author: "Abdurashid Nurmurodov",
    cover: "covers/757.jpg",
    file: "books/757.pdf",
    genre: "O`zbek Nasri",
    year: 1992
  },
  {
    title: "Uch g‘ildirakli velosiped",
    author: "Abdurashid Pardayev",
    cover: "covers/758.jpg",
    file: "books/758.pdf",
    genre: "O`zbek Nasri",
    year: 2000
  },
  {
    title: "Hind sayyohining qissasi",
    author: "Abdurauf Fitrat",
    cover: "covers/759.jpg",
    file: "books/759.pdf",
    genre: "O`zbek Nasri",
    year: 1911
  },
  {
    title: "Hindistonda bir farangi ila buxorolik mudarrisning munozarasi",
    author: "Abdurauf Fitrat",
    cover: "covers/760.jpg",
    file: "books/760.pdf",
    genre: "O`zbek Nasri",
    year: 1911
  },
  {
    title: "Tanlangan asarlar. 1-jild",
    author: "Abdurauf Fitrat",
    cover: "covers/761.jpg",
    file: "books/761.pdf",
    genre: "O`zbek Nasri",
    year: 1992
  },
  {
    title: "Halqa",
    author: "Abdusaid Ko‘chimov",
    cover: "covers/762.jpg",
    file: "books/762.pdf",
    genre: "O`zbek Nasri",
    year: 2005
  },
  {
    title: "Yaxshilik daraxti",
    author: "Abdusattor Hotamov",
    cover: "covers/763.jpg",
    file: "books/763.pdf",
    genre: "O`zbek Nasri",
    year: 1998
  },
  {
    title: "Oriyat",
    author: "Abdusattor Sodiqov",
    cover: "covers/764.jpg",
    file: "books/764.pdf",
    genre: "O`zbek Nasri",
    year: 1995
  },
  {
    title: "Alibek va qirq do‘stining sarguzashtlari",
    author: "Abulqosim Mamarasulov",
    cover: "covers/765.jpg",
    file: "books/765.pdf",
    genre: "O`zbek Nasri",
    year: 1982
  },
  {
    title: "Barlos qishlog‘ining oydin kechalari",
    author: "Abulqosim Mamarasulov",
    cover: "covers/766.jpg",
    file: "books/766.pdf",
    genre: "O`zbek Nasri",
    year: 1985
  },
  {
    title: "Barlos qishlog‘ining zumrad tonglari",
    author: "Abulqosim Mamarasulov",
    cover: "covers/767.jpg",
    file: "books/767.pdf",
    genre: "O`zbek Nasri",
    year: 1987
  },
  {
    title: "Jur’at",
    author: "Adham Damin",
    cover: "covers/768.jpg",
    file: "books/768.pdf",
    genre: "O`zbek Nasri",
    year: 1995
  },
  {
    title: "Saylanma. 1-jild",
    author: "Adham Damin",
    cover: "covers/769.jpg",
    file: "books/769.pdf",
    genre: "O`zbek Nasri",
    year: 2000
  },
  {
    title: "Toshqin daryo",
    author: "Afzal Tohirov",
    cover: "covers/770.jpg",
    file: "books/770.pdf",
    genre: "O`zbek Nasri",
    year: 2005
  }, 
  {
    title: "Ko‘hna Buxoro qissalari",
    author: "Ahad Hasan",
    cover: "covers/771.jpg",
    file: "books/771.pdf",
    genre: "O`zbek Nasri",
    year: 1980
  },
  {
    title: "Asqartog‘ tomonlarda",
    author: "Ahmad A‘zam",
    cover: "covers/772.jpg",
    file: "books/772.pdf",
    genre: "O`zbek Nasri",
    year: 2000
  },
  {
    title: "Bu kunning davomi",
    author: "Ahmad A‘zam",
    cover: "covers/773.jpg",
    file: "books/773.pdf",
    genre: "O`zbek Nasri",
    year: 2002
  },
  {
    title: "Hali hayot bor...",
    author: "Ahmad A‘zam",
    cover: "covers/774.jpg",
    file: "books/774.pdf",
    genre: "O`zbek Nasri",
    year: 2004
  },
  {
    title: "O‘zi uylanmagan sovchi",
    author: "Ahmad A‘zam",
    cover: "covers/775.jpg",
    file: "books/775.pdf",
    genre: "O`zbek Nasri",
    year: 2007
  },
  {
    title: "Odam zahri",
    author: "Ahmad A‘zam",
    cover: "covers/776.jpg",
    file: "books/776.pdf",
    genre: "O`zbek Nasri",
    year: 2008
  },
  {
    title: "Ro‘yo yoxud G‘ulistonga safar",
    author: "Ahmad A‘zam",
    cover: "covers/777.jpg",
    file: "books/777.pdf",
    genre: "O`zbek Nasri",
    year: 2010
  },
  {
    title: "Soyasini yo‘qotgan odam",
    author: "Ahmad A‘zam",
    cover: "covers/778.jpg",
    file: "books/778.pdf",
    genre: "O`zbek Nasri",
    year: 2012
  },
  {
    title: "Olis manzil",
    author: "Ahmadali Rizayev",
    cover: "covers/779.jpg",
    file: "books/779.pdf",
    genre: "O`zbek Nasri",
    year: 1990
  },
  {
    title: "Siz bilgan Dukchi eshon",
    author: "Alinazar Egamnazarov",
    cover: "covers/780.jpg",
    file: "books/780.pdf",
    genre: "O`zbek Nasri",
    year: 1985
  },
  {
    title: "Latofat do‘konidagi qatl",
    author: "Alisher Ibodinov",
    cover: "covers/781.jpg",
    file: "books/781.pdf",
    genre: "O`zbek Nasri",
    year: 2015
  },
  {
    title: "Oq, oppoq bulutlar",
    author: "Alisher Ibodinov",
    cover: "covers/782.jpg",
    file: "books/782.pdf",
    genre: "O`zbek Nasri",
    year: 2017
  },
  {
    title: "Sohil yaqin, yaqin",
    author: "Alisher Ibodinov",
    cover: "covers/783.jpg",
    file: "books/783.pdf",
    genre: "O`zbek Nasri",
    year: 2018
  },
  {
    title: "Tog‘ burguti",
    author: "Anvar Javlonov",
    cover: "covers/784.jpg",
    file: "books/784.pdf",
    genre: "O`zbek Nasri",
    year: 2000
  },
  {
    title: "Taklifnoma",
    author: "Anvar Jo‘raboyev",
    cover: "covers/785.jpg",
    file: "books/785.pdf",
    genre: "O`zbek Nasri",
    year: 1992
  },
  {
    title: "Erinsangiz kulmang",
    author: "Anvar Muqimov",
    cover: "covers/786.jpg",
    file: "books/786.pdf",
    genre: "O`zbek Nasri",
    year: 2005
  },
  {
    title: "Ne kuylarga tushdim mano",
    author: "Anvar Muqimov",
    cover: "covers/787.jpg",
    file: "books/787.pdf",
    genre: "O`zbek Nasri",
    year: 2007
  },
  {
    title: "Azal kotiblari",
    author: "Anvar Namozov",
    cover: "covers/788.jpg",
    file: "books/788.pdf",
    genre: "O`zbek Nasri",
    year: 2010
  },
  {
    title: "Notanish",
    author: "Anvar Namozov",
    cover: "covers/789.jpg",
    file: "books/789.pdf",
    genre: "O`zbek Nasri",
    year: 2011
  },
  {
    title: "Akang qarag‘ay Gulmat",
    author: "Anvar Obidjon",
    cover: "covers/790.jpg",
    file: "books/790.pdf",
    genre: "O`zbek Nasri",
    year: 2002
  },
  {
    title: "Alamazon va Gulmat",
    author: "Anvar Obidjon",
    cover: "covers/791.jpg",
    file: "books/791.pdf",
    genre: "O`zbek Nasri",
    year: 2004
  },
  {
    title: "Baloga qolgan futbolchi",
    author: "Anvar Obidjon",
    cover: "covers/792.jpg",
    file: "books/792.pdf",
    genre: "O`zbek Nasri",
    year: 2005
  },
  {
    title: "Oltin yurakli avtobola",
    author: "Anvar Obidjon",
    cover: "covers/793.jpg",
    file: "books/793.pdf",
    genre: "O`zbek Nasri",
    year: 2007
  },
  {
    title: "G‘o‘bdintog‘ hikoyalari",
    author: "Anvar Suyun",
    cover: "covers/794.jpg",
    file: "books/794.pdf",
    genre: "O`zbek Nasri",
    year: 2008
  },
  {
    title: "Fano dashtidagi qush",
    author: "Asad Dilmurod",
    cover: "covers/795.jpg",
    file: "books/795.pdf",
    genre: "O`zbek Nasri",
    year: 2010
  },
  {
    title: "Girih",
    author: "Asad Dilmurod",
    cover: "covers/796.jpg",
    file: "books/796.pdf",
    genre: "O`zbek Nasri",
    year: 2012
  },
  {
    title: "Girih",
    author: "Asad Dilmurod",
    cover: "covers/797.jpg",
    file: "books/797.pdf",
    genre: "O`zbek Nasri",
    year: 2012
  },
  {
    title: "Ko'chki ",
    author: "Asad Dilmurod",
    cover: "covers/798.jpg",
    file: "books/798.pdf",
    genre: "O`zbek Nasri",
    year: 2014
  },
  {
    title: "Mahmud Torobiy",
    author: "Asad Dilmurod",
    cover: "covers/799.jpg",
    file: "books/799.pdf",
    genre: "O`zbek Nasri",
    year: 2015
  },
  {
    title: "Mezon burji",
    author: "Asad Dilmurod",
    cover: "covers/800.jpg",
    file: "books/800.pdf",
    genre: "O`zbek Nasri",
    year: 2018
  },
  //Sharq mumtoz adabiyoti//////////////////////////////////////////////////////////////////
  {
    "title": "Ruboiyot",
    "author": "Abdulxoliq G'ijduvoniy",
    "cover": "covers/901.jpg",
    "file": "books/901.pdf",
    "genre": "Sharq mumtoz adabiyoti",
    "year": 1
  },
  {
    "title": "Bahoriston",
    "author": "Abdurahmon Jomiy",
    "cover": "covers/902.jpg",
    "file": "books/902.pdf",
    "genre": "Sharq mumtoz adabiyoti",
    "year": 1
  },
  {
    "title": "Layli va Majnun",
    "author": "Abdurahmon Jomiy",
    "cover": "covers/903.jpg",
    "file": "books/903.pdf",
    "genre": "Sharq mumtoz adabiyoti",
    "year": 1
  },
  {
    "title": "Salomon va Absol",
    "author": "Abdurahmon Jomiy",
    "cover": "covers/904.jpg",
    "file": "books/904.pdf",
    "genre": "Sharq mumtoz adabiyoti",
    "year": 1
  },
  {
    "title": "Yusuf va Zulayxo",
    "author": "Abdurahmon Jomiy",
    "cover": "covers/905.jpg",
    "file": "books/905.pdf",
    "genre": "Sharq mumtoz adabiyoti",
    "year": 1
  },
  {
    "title": "Ruboiy va masnaviylar",
    "author": "Abu Abdulloh Rudakiy",
    "cover": "covers/906.jpg",
    "file": "books/906.pdf",
    "genre": "Sharq mumtoz adabiyoti",
    "year": 1
  },
  {
    "title": "G'azallar, qit'alar",
    "author": "Abu Ali ibn Sino",
    "cover": "covers/907.jpg",
    "file": "books/907.pdf",
    "genre": "Sharq mumtoz adabiyoti",
    "year": 1
  },
  {
    "title": "Salomon va Ibsol",
    "author": "Abu Ali ibn Sino",
    "cover": "covers/908.jpg",
    "file": "books/908.pdf",
    "genre": "Sharq mumtoz adabiyoti",
    "year": 1
  },
  {
    "title": "Salomon va Ibsol",
    "author": "Abu Ali ibn Sino",
    "cover": "covers/909.jpg",
    "file": "books/909.pdf",
    "genre": "Sharq mumtoz adabiyoti",
    "year": 1
  },
  {
    "title": "She'r san'ati",
    "author": "Abu Ali ibn Sino",
    "cover": "covers/910.jpg",
    "file": "books/910.pdf",
    "genre": "Sharq mumtoz adabiyoti",
    "year": 1
  },
  {
    title: "Shohnoma",
    author: "Abulqosim Firdavsiy",
    cover: "covers/911.jpg",
    file: "books/911.pdf",
    genre: "Sharq mumtoz adabiyoti",
    year: 1
  },
  {
    title: "Shohnoma. Semurg' va Zol",
    author: "Abulqosim Firdavsiy",
    cover: "covers/912.jpg",
    file: "books/912.pdf",
    genre: "Sharq mumtoz adabiyoti",
    year: 1
  },
  {
    title: "Ruboiyot",
    author: "Abusaid Abulxayr",
    cover: "covers/913.jpg",
    file: "books/913.pdf",
    genre: "Sharq mumtoz adabiyoti",
    year: 1
  },
  {
    title: "Ruboiyot",
    author: "Abusaid Abulxayr",
    cover: "covers/914.jpg",
    file: "books/914.pdf",
    genre: "Sharq mumtoz adabiyoti",
    year: 1
  },
  {
    title: "Ruboiyot",
    author: "Adib Sobir Termiziy",
    cover: "covers/915.jpg",
    file: "books/915.pdf",
    genre: "Sharq mumtoz adabiyoti",
    year: 1
  },
  {
    title: "Tanlangan asarlar",
    author: "Adib Sobir Termiziy",
    cover: "covers/916.jpg",
    file: "books/916.pdf",
    genre: "Sharq mumtoz adabiyoti",
    year: 1
  },
  {
    title: "Shoh va gado",
    author: "Bahriddin Hiloliy",
    cover: "covers/917.jpg",
    file: "books/917.pdf",
    genre: "Sharq mumtoz adabiyoti",
    year: 1
  },
  {
    title: "Berdaq she'riyatidan",
    author: "Abduraxmonov.F",
    cover: "covers/918.jpg",
    file: "books/918.pdf",
    genre: "Sharq mumtoz adabiyoti",
    year: 1
  },
  {
    title: "Saylanma",
    author: "Berdaq",
    cover: "covers/919.jpg",
    file: "books/919.pdf",
    genre: "Sharq mumtoz adabiyoti",
    year: 1
  },
  {
    title: "Tanlangan asarlar",
    author: "Berdaq",
    cover: "covers/920.jpg",
    file: "books/920.pdf",
    genre: "Sharq mumtoz adabiyoti",
    year: 1
  },
  {
    title: "Bilol Nozim she'riyatidan",
    author: "Murod Torayev",
    cover: "covers/921.jpg",
    file: "books/921.pdf",
    genre: "Sharq mumtoz adabiyoti",
    year: 1
  },
  {
    title: "Ruboiyot",
    author: "Bobo Tohir",
    cover: "covers/922.jpg",
    file: "books/922.pdf",
    genre: "Sharq mumtoz adabiyoti",
    year: 1
  },
  {
    title: "Mantiqut-tayr",
    author: "Fariduddin Attor",
    cover: "covers/923.jpg",
    file: "books/923.pdf",
    genre: "Sharq mumtoz adabiyoti",
    year: 1
  },
  {
    title: "Ruboiyot",
    author: "Fariduddin Attor",
    cover: "covers/924.jpg",
    file: "books/924.pdf",
    genre: "Sharq mumtoz adabiyoti",
    year: 1
  },
  {
    title: "Ilohiynoma",
    author: "Fariduddin Attor",
    cover: "covers/925.jpg",
    file: "books/925.pdf",
    genre: "Sharq mumtoz adabiyoti",
    year: 1
  },
  {
    title: "Mantiqut tayr",
    author: "Fazliddin Attor",
    cover: "covers/926.jpg",
    file: "books/926.pdf",
    genre: "Sharq mumtoz adabiyoti",
    year: 1
  },
  {
    title: "Ruboiyot",
    author: "Foniy",
    cover: "covers/927.jpg",
    file: "books/927.pdf",
    genre: "Sharq mumtoz adabiyoti",
    year: 1
  },
  {
    title: "Devon",
    author: "Fuzuliy",
    cover: "covers/928.jpg",
    file: "books/928.pdf",
    genre: "Sharq mumtoz adabiyoti",
    year: 1
  },
  {
    title: "Ruboiyot",
    author: "Hakim Sanoiy",
    cover: "covers/929.jpg",
    file: "books/929.pdf",
    genre: "Sharq mumtoz adabiyoti",
    year: 1
  },
  {
    title: "Hofiz Sheroziy she'riyatidan",
    author: "Axmadjonov.E",
    cover: "covers/930.jpg",
    file: "books/930.pdf",
    genre: "Sharq mumtoz adabiyoti",
    year: 1
  },
  {
    title: "G'azal va ruboiylar",
    author: "Hofiz Sheroziy",
    cover: "covers/931.jpg",
    file: "books/931.pdf",
    genre: "Sharq mumtoz adabiyoti",
    year: 1
  },
  {
    title: "Rubbiyot",
    author: "Imomiddin Nasimiy",
    cover: "covers/932.jpg",
    file: "books/932.pdf",
    genre: "Sharq mumtoz adabiyoti",
    year: 1
  },
  {
    title: "Hikmatlar",
    author: "Jaloliddin Rumiy",
    cover: "covers/933.jpg",
    file: "books/933.pdf",
    genre: "Sharq mumtoz adabiyoti",
    year: 1
  },
  {
    title: "Ma'naviy masnaviy. 1-jild, 1-kitob",
    author: "Jaloliddin Rumiy",
    cover: "covers/934.jpg",
    file: "books/934.pdf",
    genre: "Sharq mumtoz adabiyoti",
    year: 1
  },
  {
    title: "Masnaviyi ma'naviy 1",
    author: "Jaloliddin Rumiy",
    cover: "covers/935.jpg",
    file: "books/935.pdf",
    genre: "Sharq mumtoz adabiyoti",
    year: 1
  },
  {
    title: "Masnaviyi ma'naviy 2",
    author: "Jaloliddin Rumiy",
    cover: "covers/936.jpg",
    file: "books/936.pdf",
    genre: "Sharq mumtoz adabiyoti",
    year: 1
  },
  {
    title: "Masnaviyi ma'naviy 3",
    author: "Jaloliddin Rumiy",
    cover: "covers/937.jpg",
    file: "books/937.pdf",
    genre: "Sharq mumtoz adabiyoti",
    year: 1
  },
  {
    title: "Masnaviyi ma'naviy 4",
    author: "Jaloliddin Rumiy",
    cover: "covers/938.jpg",
    file: "books/938.pdf",
    genre: "Sharq mumtoz adabiyoti",
    year: 1
  },
  {
    title: "Masnaviyi ma'naviy 5",
    author: "Jaloliddin Rumiy",
    cover: "covers/939.jpg",
    file: "books/939.pdf",
    genre: "Sharq mumtoz adabiyoti",
    year: 1
  },
  {
    title: "Masnaviyi ma'naviy 6",
    author: "Jaloliddin Rumiy",
    cover: "covers/940.jpg",
    file: "books/940.pdf",
    genre: "Sharq mumtoz adabiyoti",
    year: 1
  },
  {
    title: "Masnaviyi ma'naviy. 1-kitob",
    author: "Jaloliddin Rumiy",
    cover: "covers/941.jpg",
    file: "books/941.pdf",
    genre: "Sharq mumtoz adabiyoti",
    year: 1
  },
  {
    title: "Ruboiyot",
    author: "Jaloliddin Rumiy",
    cover: "covers/942.jpg",
    file: "books/942.pdf",
    genre: "Sharq mumtoz adabiyoti",
    year: 1
  },
  {
    title: "Qobusnoma",
    author: "Kaykovus",
    cover: "covers/943.jpg",
    file: "books/943.pdf",
    genre: "Sharq mumtoz adabiyoti",
    year: 1
  },
  {
    title: "Qobusnoma",
    author: "Kaykovus",
    cover: "covers/944.jpg",
    file: "books/944.pdf",
    genre: "Sharq mumtoz adabiyoti",
    year: 1
  },
  {
    title: "Ruboiyot",
    author: "Majdiddin Bag'dodiy",
    cover: "covers/945.jpg",
    file: "books/945.pdf",
    genre: "Sharq mumtoz adabiyoti",
    year: 1
  },
  {
    title: "Maxtumquli she'riyatidan",
    author: "Jumaniyoz Sharipov",
    cover: "covers/946.jpg",
    file: "books/946.pdf",
    genre: "Sharq mumtoz adabiyoti",
    year: 1
  },
  {
    title: "Dunyo o'tib boradur",
    author: "Maxtumquli",
    cover: "covers/947.jpg",
    file: "books/947.pdf",
    genre: "Sharq mumtoz adabiyoti",
    year: 1
  },
  {
    title: "Saylanma",
    author: "Maxtumquli",
    cover: "covers/948.jpg",
    file: "books/948.pdf",
    genre: "Sharq mumtoz adabiyoti",
    year: 1
  },
  {
    title: "G'azal va ruboiylar",
    author: "Mirzo Abdulqodir Bedil",
    cover: "covers/949.jpg",
    file: "books/949.pdf",
    genre: "Sharq mumtoz adabiyoti",
    year: 1
  },
  {
    title: "Ruboiylar",
    author: "Mirzo Abdulqodir Bedil",
    cover: "covers/950.jpg",
    file: "books/950.pdf",
    genre: "Sharq mumtoz adabiyoti",
    year: 1
  },
  {
    title: "Ruboiylar",
    author: "Mirzo Abdulqodir Bedil",
    cover: "covers/951.jpg",
    file: "books/951.pdf",
    genre: "Sharq mumtoz adabiyoti",
    year: 1
  },
  {
    title: "G'azal va ruboiylar",
    author: "Mirzo G'olib",
    cover: "covers/952.jpg",
    file: "books/952.pdf",
    genre: "Sharq mumtoz adabiyoti",
    year: 1
  },
  {
    title: "G'azallar, muxammas, ruboiylar",
    author: "Mirzo G'olib",
    cover: "covers/953.jpg",
    file: "books/953.pdf",
    genre: "Sharq mumtoz adabiyoti",
    year: 1
  },
  {
    title: "1-jild. Devon",
    author: "Muhammad Fuzuliy",
    cover: "covers/954.jpg",
    file: "books/954.pdf",
    genre: "Sharq mumtoz adabiyoti",
    year: 1
  },
  {
    title: "2-jild. Dostonlar - Layli va Majnun. Bangu boda. Suhbatul asmor",
    author: "Muhammad Fuzuliy",
    cover: "covers/955.jpg",
    file: "books/955.pdf",
    genre: "Sharq mumtoz adabiyoti",
    year: 1
  },
  {
    title: "Zuhra va Tohir. She'rlar",
    author: "Mullanafas",
    cover: "covers/956.jpg",
    file: "books/956.pdf",
    genre: "Sharq mumtoz adabiyoti",
    year: 1
  },
  {
    title: "Ruboiyot",
    author: "Najmiddin Kubro",
    cover: "covers/957.jpg",
    file: "books/957.pdf",
    genre: "Sharq mumtoz adabiyoti",
    year: 1
  },
  {
    title: "Asarlar",
    author: "Nizomiy",
    cover: "covers/958.jpg",
    file: "books/958.pdf",
    genre: "Sharq mumtoz adabiyoti",
    year: 1
  },
  {
    title: "Haft paykar",
    author: "Nizomiy",
    cover: "covers/959.jpg",
    file: "books/959.pdf",
    genre: "Sharq mumtoz adabiyoti",
    year: 1
  },
  {
    title: "Iqbolnoma",
    author: "Nizomiy",
    cover: "covers/960.jpg",
    file: "books/960.pdf",
    genre: "Sharq mumtoz adabiyoti",
    year: 1
  },
  {
    title: "Tanlangan she'rlar",
    author: "Nizomiy",
    cover: "covers/961.jpg",
    file: "books/961.pdf",
    genre: "Sharq mumtoz adabiyoti",
    year: 1
  },
  {
    title: "Ruboiylar",
    author: "Pahlavon Mahmud",
    cover: "covers/962.jpg",
    file: "books/962.pdf",
    genre: "Sharq mumtoz adabiyoti",
    year: 1
  },
  {
    title: "Ruboiyot",
    author: "Pahlavon Mahmud",
    cover: "covers/963.jpg",
    file: "books/963.pdf",
    genre: "Sharq mumtoz adabiyoti",
    year: 1
  },
  {
    title: "Rudakiy va Bobo Tohir she'riyatidan",
    author: "Islom Shomuxamedov",
    cover: "covers/964.jpg",
    file: "books/964.pdf",
    genre: "Sharq mumtoz adabiyoti",
    year: 1
  },
  {
    title: "Bo'ston",
    author: "Sa'diy Sheroziy",
    cover: "covers/965.jpg",
    file: "books/965.pdf",
    genre: "Sharq mumtoz adabiyoti",
    year: 1
  },
  {
    title: "G'azal, ruboiy, hikmatlar",
    author: "Sa'diy Sheroziy",
    cover: "covers/966.jpg",
    file: "books/966.pdf",
    genre: "Sharq mumtoz adabiyoti",
    year: 1
  },
  {
    title: "Guliston",
    author: "Sa'diy Sheroziy",
    cover: "covers/967.jpg",
    file: "books/967.pdf",
    genre: "Sharq mumtoz adabiyoti",
    year: 1
  },
  {
    title: "Tanlangan she'rlar",
    author: "Sa'diy Sheroziy",
    cover: "covers/968.jpg",
    file: "books/968.pdf",
    genre: "Sharq mumtoz adabiyoti",
    year: 1
  },
  {
    title: "G'azallar",
    author: "Shams Tabriziy",
    cover: "covers/969.jpg",
    file: "books/969.pdf",
    genre: "Sharq mumtoz adabiyoti",
    year: 1
  },
  {
    title: "Ruboiyot",
    author: "Ubaydiy",
    cover: "covers/970.jpg",
    file: "books/970.pdf",
    genre: "Sharq mumtoz adabiyoti",
    year: 1
  },
  {
    title: "Ruboiylar",
    author: "Umar Xayyom",
    cover: "covers/971.jpg",
    file: "books/971.pdf",
    genre: "Sharq mumtoz adabiyoti",
    year: 1
  },
  {
    title: "Ruboiyot",
    author: "Umar Xayyom",
    cover: "covers/972.jpg",
    file: "books/972.pdf",
    genre: "Sharq mumtoz adabiyoti",
    year: 1
  },
  {
    title: "Ruboiyot",
    author: "Xoja Abdulloh Ansoriy",
    cover: "covers/973.jpg",
    file: "books/973.pdf",
    genre: "Sharq mumtoz adabiyoti",
    year: 1
  },
  {
    title: "Ruboiyot",
    author: "Xusrav Dehlaviy",
    cover: "covers/974.jpg",
    file: "books/974.pdf",
    genre: "Sharq mumtoz adabiyoti",
    year: 1
  },
  {
    title: "Tanlangan she'rlar",
    author: "Xusrav Dehlaviy",
    cover: "covers/975.jpg",
    file: "books/975.pdf",
    genre: "Sharq mumtoz adabiyoti",
    year: 1
  },
  {
    title: "Haqdin so'ylar bu tilim",
    author: "Yunus Emro",
    cover: "covers/976.jpg",
    file: "books/976.pdf",
    genre: "Sharq mumtoz adabiyoti",
    year: 1
  },
]