<script lang="ts">
  import editor from "$lib/assets/images/root/editor.svg";
  import game from "$lib/assets/images/root/game.svg";
  import player from "$lib/assets/images/root/player.svg";
</script>

<div class="relative">
  <img
    class="relative origin-center translate-x-[7%] translate-y-[8%] rotate-[2deg] scale-[72%] opacity-80 drop-shadow-xl"
    id="editor"
    width="415"
    height="207"
    src={editor}
    alt="Editor window"
  />
  <div
    class="absolute left-0 top-0 h-full w-full origin-center -translate-x-[4%] translate-y-[5%] -rotate-[3deg] scale-[72%] drop-shadow-xl"
    id="game"
  >
    <img width="415" height="207" src={game} alt="Game window" />
    <img
      class="absolute left-0 top-0 h-full w-full origin-center scale-50"
      id="player-blur"
      width="32"
      height="96"
      src={player}
      alt="Player"
    />
    <img
      class="absolute left-0 top-0 h-full w-full origin-center scale-50 saturate-0"
      id="player"
      width="32"
      height="96"
      src={player}
      alt="Player"
    />
  </div>
</div>

<style lang="postcss">
  * {
    @apply motion-safe:animate-[1s_cubic-bezier(0.85,_0,_0.15,_1)_0s_infinite_alternate_both_running];
  }

  #editor {
    animation-name: editor;
  }

  #game {
    animation-name: game;
  }

  #player {
    animation-name: player;
  }

  #player-blur {
    animation-name: player-blur;
  }

  @keyframes editor {
    100% {
      transform: translate(8%, 0%) rotate(5deg) scale(80%);
    }
  }

  @keyframes game {
    100% {
      transform: translate(-6%, 0%) rotate(-6deg) scale(83%);
    }
  }

  @keyframes player {
    100% {
      filter: none;
      transform: translate(-1%, -1%) rotate(-5deg) scale(55%);
    }
  }

  @keyframes player-blur {
    100% {
      opacity: 50%;
      filter: blur(1rem);
      transform: translate(-1%, -1%) rotate(-5deg) scale(55%);
    }
  }
</style>
