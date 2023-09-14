const swiper = document.querySelector('#swiper');
const infobox = document.querySelector('.infobox'); // Get the infobox element

const cardData = [
  {
    imageUrl: 'https://i.ibb.co/1sGQ14j/Squad1-D-Ryan.jpg',
    name: 'Ryan',
    age: 21,
    link: 'https://www.example.com/ryan',
  },
  {
    imageUrl: 'https://i.ibb.co/ZW7tNVv/Squad1-D-Ruben.jpg',
    name: 'Ruben',
    age: 22,
    link: 'https://www.example.com/ruben',
  },
  {
    imageUrl: 'https://i.ibb.co/M7P3wdj/Squad1-D-Wingsan.jpg',
    name: 'Wingsan',
    age: 23,
    link: 'https://www.example.com/wingsan',
  },
  {
    imageUrl: 'https://i.ibb.co/dMGfPc7/Squad1-D-Yusing.jpg',
    name: 'Yusing',
    age: 19,
    link: 'https://www.example.com/yusing',
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


