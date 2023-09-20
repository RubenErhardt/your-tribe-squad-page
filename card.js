 // Constructor: Initialiseert een nieuwe kaart met opgegeven gegevens.
    // `imageUrl` is de URL van de afbeelding van de kaart.
    // `onDismiss`, `onLike` en `onDislike` zijn callback-functies die worden aangeroepen wanneer de kaart wordt weggeklikt, geliket of gedisliket.

class Card {
  constructor({
    imageUrl,
    onDismiss,
    onLike,
    onDislike

 // Hier worden de gegevens aan de kaart toegewezen.
  }) {
    this.imageUrl = imageUrl;
    this.onDismiss = onDismiss;
    this.onLike = onLike;
    this.onDislike = onDislike;
    this.#init();
  }
  #startPoint;
  #offsetX;
  #offsetY;
  
  #init = () => {
    const card = document.createElement('div');
    card.classList.add('card');
    const img = document.createElement('img');
    img.src = this.imageUrl;
    card.append(img);
    this.element = card;
    
  
    this.#listenToMouseEvents();
  }
  
  #listenToMouseEvents = () => {
    this.element.addEventListener('mousedown', (e) => {
      const { clientX, clientY } = e;
      this.#startPoint = { x: clientX, y: clientY }
      document.addEventListener('mousemove', this.#handleMouseMove);
      this.element.style.transition = 'transform 0s';
    });
  
    document.addEventListener('mouseup', this.#handleMoveUp);
    
    // Voorkom dat de kaart wordt gesleept met de muis
    this.element.addEventListener('dragstart', (e) => {
      e.preventDefault();
    });
  }
  
  #handleMove = (x, y) => {
    this.#offsetX = x - this.#startPoint.x;
    this.#offsetY = y - this.#startPoint.y;
    const rotate = this.#offsetX * 0.1;
    this.element.style.transform = `translate(${this.#offsetX}px, ${this.#offsetY}px) rotate(${rotate}deg)`;
    
    // verwijder van de kaart
    if (Math.abs(this.#offsetX) > this.element.clientWidth * 0.7) {
      this.#dismiss(this.#offsetX > 0 ? 1 : -1);
    }
  }
  
  #handleMouseMove = (e) => {
    e.preventDefault();
    if (!this.#startPoint) return;
    const { clientX, clientY } = e;
    this.#handleMove(clientX, clientY);
  }
  
  #handleMoveUp = () => {
    this.#startPoint = null;
    document.removeEventListener('mousemove', this.#handleMouseMove);
    this.element.style.transform = '';
  }
  
  // Methode om de kaart te (verwijderen)
  #dismiss = (direction) => {
    this.#startPoint = null;
    document.removeEventListener('mouseup', this.#handleMoveUp);
    document.removeEventListener('mousemove', this.#handleMouseMove);
    this.element.style.transition = 'transform 1s';
    this.element.style.transform = `translate(${direction * window.innerWidth}px, ${this.#offsetY}px) rotate(${90 * direction}deg)`;
    this.element.classList.add('dismissing');
    setTimeout(() => {
      this.element.remove();
    }, 1000);
    if (typeof this.onDismiss === 'function') {
      this.onDismiss();
    }
    if (typeof this.onLike === 'function' && direction === 1) {
      this.onLike();
    }
    if (typeof this.onDislike === 'function' && direction === -1) {
      this.onDislike();
    }
  }
}
