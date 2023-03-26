import ChickCard from "./ChickCard";
import EggCard from "./EggCard";
import FoxCard from "./FoxCard";

export default class Pack {
  constructor() {
    this.cards = [];
    this.init();
  }

  init() {
    for (let i = 0; i < 15; i++) {
      this.cards.push(new EggCard());
    }

    for (let i = 0; i < 10; i++) {
      this.cards.push(new ChickCard());
      this.cards.push(new FoxCard());
    }

    this.shuffle();
  }

  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  pick() {
    return this.cards.pop();
  }
}
