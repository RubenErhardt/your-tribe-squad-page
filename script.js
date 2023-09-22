const swiper = document.querySelector('#swiper');
const infobox = document.querySelector('.infobox'); 

const cardData = [
  {
    imageUrl: 'https://i.ibb.co/1sGQ14j/Squad1-D-Ryan.jpg',
    name: 'Ryan',
    age: 19,
    link: 'https://ryank2004.github.io/your-tribe-profile-card/',
  },
  {
    imageUrl: 'https://i.ibb.co/ZW7tNVv/Squad1-D-Ruben.jpg',
    name: 'Ruben',
    age: 22,
    link: 'https://rubenerhardt.github.io/your-tribe-profile-card/',
  },
  {
    imageUrl: 'https://i.ibb.co/M7P3wdj/Squad1-D-Wingsan.jpg',
    name: 'Wing-San',
    age: 24,
    link: 'https://wingsvn.github.io/your-tribe-profile-card/',
  },
  {
    imageUrl: 'https://i.ibb.co/dMGfPc7/Squad1-D-Yusing.jpg',
    name: 'Yu Jing',
    age: 19,
    link: 'https://yujing-student.github.io/your-tribe-profile-card/',
  },
  {
    imageUrl: 'https://i.ibb.co/4Tqz5Wq/Squad1-D-Anne.jpg',
    name: 'Anne',
    age: 20,
    link: 'https://annevd.github.io/your-tribe-profile-card/',
  },
  {
    imageUrl: 'https://i.ibb.co/3RhwF5n/Squad1-D-Lisa.jpg',
    name: 'Lisa',
    age: 22,
    link: 'https://lisagjh.github.io/your-tribe-profile-card/profilecard-versie-2/versie2.html',
  },
  {
    imageUrl: 'https://i.ibb.co/gjksmg0/Squad1-D-Tom.jpg',
    name: 'Tom',
    age: 21,
    link: 'https://tomdeeterink1.github.io/your-tribe-profile-card/',
  },
  {
    imageUrl: 'https://i.ibb.co/2KmMXq8/Squad1-D-Daan.jpg',
    name: 'Daan',
    age: 19,
    link: 'https://www.example.com/daan',
  },
  {
    imageUrl: 'https://i.ibb.co/j3zLyPb/Squad1-D-Nadira.jpg',
    name: 'Nadira',
    age: 20,
    link: 'https://naddybs.github.io/your-tribe-profile-card/',
  },
  {
    imageUrl: 'https://i.ibb.co/ZYXtBtL/Squad1-D-Jasper.jpg',
    name: 'Jasper',
    age: 20,
    link: 'https://treppord.github.io/your-tribe-profile-card/',
  },
  {
    imageUrl: 'https://i.ibb.co/yhfTZyj/Squad1-D-Sascha.jpg',
    name: 'Sascha',
    age: 20,
    link: 'https://saschavanvliet.github.io/your-tribe-profile-card/',
  },
  {
    imageUrl: 'https://i.ibb.co/VSq0gmL/Squad1-D-Zainab.jpg',
    name: 'Zainab',
    age: 20,
    link: 'https://zainablfz.github.io/your-tribe-profile-card/',
  },
  {
    imageUrl: 'https://i.ibb.co/HnfG8FS/Squad1-D-Sammy.jpg',
    name: 'Sammy',
    age: 20,
    link: 'https://samarafelladina.github.io/your-tribe-profile-card/',
  },
  {
  imageUrl: 'https://i.ibb.co/Fh6Hzvt/Squad1-D-Riley.jpg',
    name: 'Riley',
    age: 21,
    link: 'https://rileyesther.github.io/your-tribe-profile-card/',
  },
  {
    imageUrl: 'https://i.ibb.co/PDV706m/Squad1-D-Bibek.jpg',
      name: 'Bibek',
      age: 20,
      link: 'https://bibekma.github.io/your-tribe-profile-card/visitekaartje2/',
  },
  {
    imageUrl: 'https://i.ibb.co/6W4WKS3/Squad1-D-Eva.jpg',
      name: 'Eva',
      age: 201,
      link: 'https://www.example.com/eva',
  },
  {
    imageUrl: 'https://i.ibb.co/Lp6GDfw/Squad1-D-Jesse.jpg',
      name: 'Jesse',
      age: 20,
      link: 'https://j3ss3hva.github.io/your-tribe-profile-card/',
  },
  {
    imageUrl: 'https://i.ibb.co/mDfCF46/Squad1-D-Lesley.jpg',
      name: 'Lesley',
      age: 20,
      link: 'https://oniwiththehoodie.github.io/your-tribe-profile-card/',
  },
  {
    imageUrl: 'https://i.ibb.co/jvfdgzC/Squad1-D-Niels.jpg',
      name: 'Niels',
      age: 19,
      link: 'https://nielsmaas03.github.io/your-tribe-profile-card/',
  },
  {
    imageUrl: 'https://i.ibb.co/TbYmj4Q/Squad1-D-Pom.jpg',
      name: 'Pom',
      age: 23,
      link: 'https://pommelienn.github.io/your-tribe-profile-card/',
  },
  
];
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  // Shuffle the cardData array before creating and displaying the cards
  shuffleArray(cardData);

let cardCount = 0;
const upcomingCards = [];

function createCard(cardData) {
  const card = new Card({
    imageUrl: cardData.imageUrl,
  

    onDismiss: () => {
      card.element.style.transform = 'translateX(-300%)'; // kaartje naar links laten gaan
      card.element.style.opacity = '10'; // kaartje uitlaten fade 
      setTimeout(() => {
        cardCount++;
        appendNewCard();
        card.element.style.transition = '200'; // resetten van de transitie 
        card.element.style.transform = '200'; // 
        card.element.style.opacity = '100'; // Reset the opacity
      }, 300); // wachten transistie klaar
      // cardCount wordt alleen verhoogd als de kaart wordt afgewezen
      cardCount++;
    },
    


    //deze code zorgt ervoor dat wanneer je liked naar een visitekaartje
    onLike: () => {
      // wanneer je lijkt kijken of er een link bestaat
      if (cardData.link) {
        // als er een link bestaat openen
        window.open(cardData.link, '_blank');
      }

      
      appendNewCard(); //nieuw kaart
    },
  });

  return card.element;
}

function appendNewCard() {
  const currentCardData = cardData[cardCount % cardData.length];

  // dit zorgt voor live data van name en leeftijd
  infobox.querySelector('#name').textContent = `Naam: ${currentCardData.name}`;
  infobox.querySelector('#age').textContent = `Leeftijd: ${currentCardData.age}`;
  

  //dit hele stuk zorgt ervoor dat de kaartjes netjes onder elkaar zijn en niet 20 dubbele schaduws krijgt
  swiper.innerHTML = ''; 

  for (const upcomingCardData of upcomingCards) {
    swiper.append(createCard(upcomingCardData));
  }

  swiper.append(createCard(currentCardData));

  

  upcomingCards.shift();

  // dit zorgt ervoor dat je de volgende kaart kan zien
  upcomingCards.push(cardData[(cardCount + 1) % cardData.length]);
}

// dit zorgt ervoor dat je de volgende kaart kan zien
for (let i = 1; i <= 2; i++) {
  upcomingCards.push(cardData[(cardCount + i) % cardData.length]);
}

// hierdoor kan je alle kaartjes zien tot 20 kaartjes
for (let i = 0; i < 20; i++) {
  appendNewCard();
}


