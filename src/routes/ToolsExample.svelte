<script lang="ts">
  import editor from "$assets/images/root/editor.svg";
  import picture from "$assets/images/root/picture.svg";
</script>

<div class="relative">
  <img
    class="relative origin-center translate-x-[7%] translate-y-[8%] rotate-[2deg] scale-[72%] drop-shadow-xl"
    id="editor"
    width="415"
    height="207"
    src={editor}
    alt="Editor window"
  />
  <div
    class="absolute left-0 top-0 h-full w-[45%] -translate-x-[5%] -rotate-6 scale-75 rounded-[10%] bg-white p-[5%] pb-[10%] drop-shadow-xl"
    id="frame"
  >
    <div class="h-full w-full rounded-[8%] bg-neutral-900 p-[15%]">
      <img class="h-full w-full" width="80" height="72" src={picture} alt="Hill and sun" />
    </div>
  </div>
</div>

<style lang="postcss">
  * {
    @apply duration-200 ease-[cubic-bezier(0,0.55,0.45,1)];
  }

  :global(.group):hover #editor {
    @apply transform-none;
  }

  :global(.group):hover #frame {
    @apply -translate-y-[9%] translate-x-[20%] rotate-0 scale-[60%] bg-transparent opacity-90;
  }
</style>
