<script lang="ts">
  import RiContrastFill from "~icons/ri/contrast-fill";
  import RiMoonFill from "~icons/ri/moon-fill";
  import RiSunFill from "~icons/ri/sun-fill";
  import Logo from "../Logo.svelte";

  const links = [
    { title: "About", href: "/" },
    { title: "Tools", href: "/" },
    { title: "Mods", href: "/" },
  ];

  const themes = [
    {
      icon: RiSunFill,
      className: "[[data-theme='light']_&]:bg-[hsl(var(--bc)_/_0.1)]",
      tip: "Light",
    },
    {
      icon: RiMoonFill,
      className: "[[data-theme='dark']_&]:bg-[hsl(var(--bc)_/_0.1)]",
      tip: "Dark",
    },
    {
      icon: RiContrastFill,
      className: "[[data-theme='']_&]:bg-[hsl(var(--bc)_/_0.1)]",
      tip: "System",
    },
  ];
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
        {#each links as link}
          <a class="btn btn-ghost" href={link.href}>{link.title}</a>
        {/each}
      </div>
      <div class="dropdown dropdown-end">
        <button class="avatar placeholder btn btn-link p-0 !no-underline">
          <div class="h-12 rounded-full bg-neutral text-neutral-content">
            <span class="text-lg">U</span>
          </div>
        </button>
        <ul
          class="menu dropdown-content rounded-box z-[1] mt-2 w-52 bg-neutral p-2 text-base shadow"
        >
          <div class="md:hidden">
            {#each links as link}
              <li><a href={link.href}>{link.title}</a></li>
            {/each}
            <li class="menu-title"><div class="divider m-0 h-0" /></li>
          </div>
          <li><a href="/">Sign in</a></li>
          <li class="menu-title"><div class="divider m-0 h-0" /></li>
          <li>
            <details>
              <summary>Theme</summary>
              <ul class="menu rounded-box menu-horizontal w-full space-x-1">
                {#each themes as theme}
                  <li>
                    <a class="tooltip {theme.className}" data-tip={theme.tip} href="/">
                      <svelte:component this={theme.icon} class="h-5 w-5" />
                    </a>
                  </li>
                {/each}
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>
