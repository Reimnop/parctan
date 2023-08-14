<script>
  import Logo from "../Logo.svelte";
</script>

<header class="mx-auto max-w-7xl p-4">
  <nav class="navbar">
    <div class="flex-1">
      <a class="btn btn-link m-0 p-0" href="/">
        <Logo />
        <img class="h-8 md:hidden" src="/assets/images/icon.svg" alt="Parctan" />
      </a>
    </div>
    <div class="flex-none space-x-4">
      <div class="hidden gap-4 md:flex">
        <a class="btn btn-ghost" href="/">About</a>
        <a class="btn btn-ghost" href="/">Tools</a>
        <a class="btn btn-ghost" href="/">Mods</a>
      </div>
      <button class="avatar placeholder btn btn-link p-0 !no-underline">
        <div class="h-10 rounded-full bg-neutral text-neutral-content">
          <span class="text-lg">U</span>
        </div>
      </button>
    </div>
  </nav>
</header>
