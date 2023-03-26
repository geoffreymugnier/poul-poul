import Egg from "../assets/egg.jpg";
import Card from "./Card";

export default class EggCard extends Card {
  constructor() {
    super();
    this.picture = Egg;
  }

  handle(game) {
    game.incrementEggsCount();
  }
}
