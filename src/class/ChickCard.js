import Card from "./Card";
import Chick from "../assets/chick.jpg";
import { get } from "svelte/store";

export default class ChickCard extends Card {
  constructor() {
    super();
    this.picture = Chick;
  }

  handle(game) {
    if (get(game.eggsCount) > 0) {
      game.decrementEggsCount();
      game.chicksCount++;
    }
  }
}
