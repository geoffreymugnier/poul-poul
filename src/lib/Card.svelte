<script>
  export let index;
  export let picture;

  $: rotationValue = (i) => (i % 2 === 0 ? 1 : -1) * (2 + Math.random());
</script>

<div
  class="card"
  style="
    --index: {index};
    --img: url({picture});
    --rotate: {rotationValue(index)}deg;
    "
/>

<style>
  .card {
    width: 100px;
    height: 150px;
    background-size: cover;
    border-radius: 10px;
    display: inline-block;
    text-align: center;
    position: absolute;
    animation: drop 0.5s ease;
    transition: transform 0.3s ease;
    z-index: --index;
    background-image: var(--img);
  }

  @keyframes drop {
    0% {
      transform: translateY(-100%) rotate(0deg);
      opacity: 0;
    }
    100% {
      transform: translateY(0) rotate(var(--rotate));
      opacity: 1;
    }
  }
</style>
