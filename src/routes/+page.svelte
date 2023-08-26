<script lang="ts">
  import GameAndEditor from "./GameAndEditor.svelte";
  import ModsExample from "./ModsExample.svelte";
  import ToolsExample from "./ToolsExample.svelte";
</script>

<div class="hero mt-5 md:mt-10 [&_*]:min-w-0">
  <div class="hero-content flex-col gap-8 md:flex-row-reverse lg:gap-x-16">
    <GameAndEditor />
    <div class="flex-1">
      <h1 class="text-3xl font-bold md:text-4xl">
        <span
          class="bg-gradient-to-r from-primary to-accent box-decoration-clone bg-clip-text text-transparent"
        >
          Everything
        </span>
        for Project Arrhythmia
      </h1>
      <p class="mt-4 text-lg font-medium">
        <b>Parctan</b>
        is an ecosystem that puts together all of the modern PA things and makes them easy and accessible
        for everyone.
      </p>
    </div>
  </div>
</div>

<section class="hero mt-5 rounded-lg bg-neutral/25 md:mt-16 [&_*]:min-w-0">
  <div class="group hero-content flex-col gap-8 p-8 md:flex-row md:py-12 lg:gap-x-16 lg:mx-8">
    <ToolsExample />
    <div class="flex-1">
      <h1 class="text-3xl font-bold md:text-4xl">
        Level editing, <span class="text-primary">outmaxed</span>
      </h1>
      <p class="mt-4 text-lg font-medium">
        Explore the collection of powerful tools for the Project Arrhythmia’s Level Editor and use
        them to make various prefabs and text patterns.
      </p>
      <a class="btn btn-primary mt-6 hover:drop-shadow-xl" href="/">Browse Tools</a>
    </div>
  </div>
</section>

<section class="hero mt-5 rounded-lg bg-neutral/25 md:mt-10 [&_*]:min-w-0">
  <div class="group hero-content flex-col gap-8 p-8 md:flex-row-reverse md:py-12 lg:gap-x-16 lg:mx-8">
    <ModsExample />
    <div class="flex-1">
      <h1 class="text-3xl font-bold md:text-4xl">
        Make your <span class="text-accent">own</span>
         PA
      </h1>
      <p class="mt-4 text-lg font-medium">
        PA mods offer countless tweaks and features for the game. We put them all in a single place
        and made it faster and easier for everyone to use them.
      </p>
      <a class="btn btn-accent mt-6" href="/">Browse Mods</a>
    </div>
  </div>
</section>
