<script lang="ts">
  import { Glow } from "$components/elements";
  import GameAndEditor from "./GameAndEditor.svelte";
  import ModsExample from "./ModsExample.svelte";
  import ToolsExample from "./ToolsExample.svelte";
</script>

<div class="hero mt-5 md:mt-10 [&_*]:min-w-0">
  <div class="hero-content flex-col gap-8 md:flex-row-reverse lg:gap-x-16">
    <GameAndEditor />
    <div class="flex-1">
      <h1 class="text-3xl font-bold md:text-4xl">
        The <Glow
          class="bg-gradient-to-r from-primary to-accent box-decoration-clone bg-clip-text text-transparent"
          glowClass="blur-2xl opacity-50"
        >
          advanced
        </Glow>
        <br />
        Project Arrhythmia experience
      </h1>
      <p class="mt-4 text-lg font-medium">
        <b>Parctan</b>
        is an ecosystem that puts together all of the modern PA things and makes them easy and accessible
        for everyone.
      </p>
    </div>
  </div>
</div>

<h2 class="mt-10 text-center text-3xl font-bold md:mt-20 md:text-4xl">
  What does <Glow
    class="bg-gradient-to-r from-primary to-accent box-decoration-clone bg-clip-text text-transparent"
    glowClass="blur-xl opacity-50"
  >
    Parctan
  </Glow> have?
</h2>

<section class="hero mt-8 rounded-lg bg-neutral/25 md:mt-16 md:px-12 [&_*]:min-w-0">
  <div class="group hero-content flex-col gap-8 p-8 md:flex-row md:p-12 lg:gap-x-16">
    <ToolsExample />
    <div class="flex-1">
      <h1 class="text-3xl font-bold md:text-4xl">
        Level editing, <Glow class="text-primary" glowClass="blur-xl opacity-25">outmaxed</Glow>
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
  <div class="group hero-content flex-col gap-8 p-8 md:flex-row-reverse md:p-12 lg:gap-x-16">
    <ModsExample />
    <div class="flex-1">
      <h1 class="text-3xl font-bold md:text-4xl">
        Make your <Glow class="text-accent" glowClass="blur-xl opacity-25">own</Glow> PA
      </h1>
      <p class="mt-4 text-lg font-medium">
        PA mods offer countless tweaks and features for the game. We put them all in a single place
        and made it faster and easier for everyone to use them.
      </p>
      <a class="btn btn-accent mt-6" href="/">Browse Mods</a>
    </div>
  </div>
</section>
