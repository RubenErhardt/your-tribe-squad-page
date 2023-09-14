// JavaScript code
const swiper = document.querySelector('#swiper');
const like = document.querySelector('#like');
const dislike = document.querySelector('#dislike');
const infobox = document.querySelector('.infobox'); // Get the infobox element

const cardData = [
  {
    imageUrl: 'https://i.ibb.co/L0Myzg0/Squad1-D-Ryan.jpg',
    name: 'Wingsan',
    age: 21,
  },
  {
    imageUrl: 'https://i.ibb.co/ZW7tNVv/Squad1-D-Ruben.jpg',
    name: 'Ryan',
    age: 19,
  },
  {
    imageUrl: 'https://i.ibb.co/M7P3wdj/Squad1-D-Wingsan.jpg',
    name: 'Ruben',
    age: 23,
  },
  // Add more card data here
];







let cardCount = 0;

function appendNewCard() {
  const card = new Card({
    imageUrl: cardData[cardCount % cardData.length].imageUrl,
    onDismiss: appendNewCard,
    onLike: () => {
      like.style.animationPlayState = 'running';
      like.classList.toggle('trigger');
    },
    onDislike: () => {
      dislike.style.animationPlayState = 'running';
      dislike.classList.toggle('trigger');
    }
  });

  // Update the infobox content with the current card data
  const currentCardData = cardData[cardCount % cardData.length];
  infobox.querySelector('#name').textContent = `Name: ${currentCardData.name}`;
  infobox.querySelector('#age').textContent = `Age: ${currentCardData.age}`;

  swiper.append(card.element);
  cardCount++;

  const cards = swiper.querySelectorAll('.card:not(.dismissing)');
  cards.forEach((card, index) => {
    card.style.setProperty('--i', index);
  });
}

// First 5 cards
for (let i = 0; i < 5; i++) {
  appendNewCard();
}

