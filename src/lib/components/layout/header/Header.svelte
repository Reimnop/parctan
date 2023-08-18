<script lang="ts">
  import { enhance } from "$app/forms";
  import { page } from "$app/stores";
  import icon from "$assets/images/icon.svg";
  import type { SubmitFunction } from "@sveltejs/kit";
  import RiContrastFill from "~icons/ri/contrast-fill";
  import RiMoonFill from "~icons/ri/moon-fill";
  import RiSunFill from "~icons/ri/sun-fill";
  import Logo from "./Logo.svelte";

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
      param: "light",
    },
    {
      icon: RiMoonFill,
      className: "[[data-theme='dark']_&]:bg-[hsl(var(--bc)_/_0.1)]",
      tip: "Dark",
      param: "dark",
    },
    {
      icon: RiContrastFill,
      className: "[[data-theme='']_&]:bg-[hsl(var(--bc)_/_0.1)]",
      tip: "System",
      param: "system",
    },
  ];

  const submitTheme: SubmitFunction = ({ action }) => {
    const theme = action.searchParams.get("theme");
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme === "system" ? "" : theme);
    }
  };
</script>

<header class="mx-auto max-w-7xl">
  <nav class="navbar">
    <div class="flex-1">
      <a class="btn btn-link m-0 p-0" href="/">
        <Logo />
        <img width="96" height="58" class="h-8 md:hidden" src={icon} alt="Parctan" />
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
              <ul class="menu rounded-box menu-horizontal w-full">
                <form class="flex gap-1" method="post" use:enhance={submitTheme}>
                  {#each themes as theme}
                    <li>
                      <button
                        class="tooltip {theme.className}"
                        data-tip={theme.tip}
                        type="submit"
                        formaction="/?/setTheme&theme={theme.param}&redirectTo={$page.url.pathname}"
                      >
                        <svelte:component this={theme.icon} class="h-5 w-5" />
                      </button>
                    </li>
                  {/each}
                </form>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>
