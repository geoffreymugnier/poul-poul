import Card from "./Card";
import Fox from "../assets/fox.jpg";

export default class FoxCard extends Card {
  constructor() {
    super();
    this.picture = Fox;
  }

  handle(game) {
    if (game.chicksCount > 0) {
      game.chicksCount--;
      game.incrementEggsCount();
    }
  }
}
