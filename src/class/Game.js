import Pack from "./Pack";
import { get, writable } from "svelte/store";

export const GAME_STATE = {
  STOPPED: "stopped",
  STARTED: "started",
  SUCCESS: "success",
  FAILURE: "failure",
};

export default class Game {
  constructor() {
    this.pack = new Pack();
    this.chicksCount = 0;
    this.history = writable([]);
    this.points = writable(0);
    this.eggsCount = writable(0);
    this.state = writable(GAME_STATE.STOPPED);
  }

  handleStart() {
    if (get(this.state) === GAME_STATE.STARTED) return;

    this.state.set(GAME_STATE.STARTED);
    this.reset();
  }

  handleStop() {
    this.state.set(GAME_STATE.STOPPED);
    return this.handleSuccess();
  }

  handleSuccess() {
    if (get(this.eggsCount) >= 5) {
      this.state.set(GAME_STATE.SUCCESS);
      return true;
    }

    this.state.set(GAME_STATE.FAILURE);
    return false;
  }

  incrementEggsCount() {
    this.eggsCount.update((n) => n + 1);
  }

  decrementEggsCount() {
    this.eggsCount.update((n) => n - 1);
  }

  playCard() {
    const card = this.pack.pick();
    this.history.update((h) => [...h, card]);

    card.handle(this);
  }

  reset() {
    this.eggsCount.set(0);
    this.chicksCount = 0;
    this.history.set([]);
    this.pack.init();
  }
}
