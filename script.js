const swiper = document.querySelector('#swiper');
const infobox = document.querySelector('.infobox'); // Get the infobox element

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

let cardCount = 0;
const upcomingCards = [];

function createCard(cardData) {
  const card = new Card({
    imageUrl: cardData.imageUrl,
    onDismiss: () => {
      card.element.style.transform = 'translateX(-300%)'; // Move the card to the left
      card.element.style.opacity = '10'; // Make the card fade out
      setTimeout(() => {
        appendNewCard();
        card.element.style.transition = '200'; // Reset the transition
        card.element.style.transform = '200'; // Reset the transform
        card.element.style.opacity = '100'; // Reset the opacity
      }, 600); // Wait for the animation to finish (0.3 seconds)
    },
    onLike: () => {
      // Check if a link exists
      if (cardData.link) {
        // Open the link in a new tab
        window.open(cardData.link, '_blank');
      }
      appendNewCard();
    },
  });

  return card.element;
}

function appendNewCard() {
  const currentCardData = cardData[cardCount % cardData.length];

  // Update the infobox content with the current card data
  infobox.querySelector('#name').textContent = `Naam: ${currentCardData.name}`;
  infobox.querySelector('#age').textContent = `Leeftijd: ${currentCardData.age}`;

  swiper.innerHTML = ''; // Clear the swiper

  // Add upcoming cards to swiper
  for (const upcomingCardData of upcomingCards) {
    swiper.append(createCard(upcomingCardData));
  }

  // Add the current card to swiper
  swiper.append(createCard(currentCardData));

  cardCount++;

  // Manage the upcoming cards stack (pop one from the beginning)
  upcomingCards.shift();

  // Preload the next card
  upcomingCards.push(cardData[(cardCount + 1) % cardData.length]);
}

// Preload the initial upcoming cards
for (let i = 1; i <= 2; i++) {
  upcomingCards.push(cardData[(cardCount + i) % cardData.length]);
}

// Add 20 cards initially
for (let i = 0; i < 20; i++) {
  appendNewCard();
}


