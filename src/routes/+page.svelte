<script lang="ts">
  import { GameAndEditor } from "$lib/components/images";
  import { Glow } from "$lib/components/elements";
</script>

<div class="hero mt-5 md:mt-10 [&_*]:min-w-0">
  <div class="hero-content flex-col gap-8 md:flex-row-reverse lg:gap-x-16">
    <GameAndEditor />
    <div class="flex-1">
      <h1 class="text-3xl font-bold md:text-4xl">
        The <Glow class="bg-clip-text text-transparent box-decoration-clone bg-gradient-to-r from-primary to-accent animate-pulse" glowClass="blur-2xl opacity-50">advanced</Glow>
        <br />
        Project Arrhythmia experience
      </h1>
      <p class="mt-4 text-lg">
        Parctan is an ecosystem that puts together all of the modern PA things and makes them easy
        and accessible for everyone.
      </p>
    </div>
  </div>
</div>
