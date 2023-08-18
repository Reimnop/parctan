<script lang="ts">
  import editor from "$assets/images/root/editor.svg";
  import mods from "$assets/images/root/mods.svg";
</script>

<div class="relative">
  <div class="relative origin-center -rotate-[3deg] scale-[80%] drop-shadow-xl" id="editor">
    <img width="415" height="207" src={editor} alt="Editor window" />
    <img
      class="absolute left-0 top-0 h-full w-full scale-95 opacity-0"
      id="mods-blur"
      width="415"
      height="207"
      src={mods}
      alt="Mods"
    />
    <img
      class="absolute left-0 top-0 h-full w-full scale-95 opacity-0"
      id="mods"
      width="415"
      height="207"
      src={mods}
      alt="Mods"
    />
  </div>
</div>

<style lang="postcss">
  * {
    @apply duration-200 ease-[cubic-bezier(0,0.55,0.45,1)];
  }

  :global(.group):hover #editor {
    @apply rotate-[1deg] scale-[92%];
  }

  :global(.group):hover #mods {
    @apply scale-100 opacity-100;
  }

  :global(.group):hover #mods-blur {
    @apply scale-100 opacity-25 blur-xl;
  }
</style>
