<script>
  import Game, { GAME_STATE } from "./class/Game";
  import Card from "./lib/Card.svelte";

  const game = new Game();
  const { history, eggsCount, state } = game;

  let interval = null;

  const handleStart = () => {
    game.handleStart();

    interval = setInterval(() => {
      game.playCard();
    }, 1000);
  };

  const handleStop = () => {
    game.handleStop();
    clearInterval(interval);
  };
</script>

<main>
  {#if $state === GAME_STATE.STOPPED || $state === GAME_STATE.FAILURE}
    <button on:click={() => handleStart()}>GO GO GO</button>
  {:else if $state === GAME_STATE.STARTED}
    <button on:click={() => handleStop()}>OMELETTE</button>
  {/if}

  {#if $state === GAME_STATE.SUCCESS}
    <h2>bien vu bg 🎉</h2>
  {:else if $state === GAME_STATE.FAILURE}
    <h2>raté bg, y'avait {$eggsCount} oeufs 😭</h2>
  {/if}

  <div class="card-stack">
    {#each $history as card, i (card)}
      <Card index={i} picture={card.picture} />
    {/each}
  </div>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .card-stack {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
  }
</style>
