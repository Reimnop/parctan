<script lang="ts">
  import icon from "$assets/images/icon.svg";
  import RiDiscordFill from "~icons/ri/discord-fill";
  import RiGitHubFill from "~icons/ri/github-fill";
  import RiYouTubeFill from "~icons/ri/youtube-fill";

  const links = [
    {
      icon: RiDiscordFill,
      href: "/",
    },
    {
      icon: RiGitHubFill,
      href: "/",
    },
    {
      icon: RiYouTubeFill,
      href: "/",
    },
  ];
</script>

<footer class="mt-4 flex flex-col gap-y-2 pt-4 md:flex-row md:items-center md:justify-between">
  <div class="flex items-center gap-x-4">
    <img class="row-span-2 h-5 max-w-none" width="96" height="58" src={icon} alt="Parctan icon" />
    <div class="divider divider-horizontal mx-0 hidden w-1 md:flex" />
    <div class="md:flex">
      <div>
        made by <a class="link-hover font-semibold" href="/">enchart</a>
      </div>
      <div class="divider divider-horizontal mx-2" />
      <a class="link-hover" href="/">MIT License</a>
    </div>
  </div>
  <div class="flex gap-x-4">
    {#each links as link}
      <a class="btn btn-circle btn-link btn-sm text-neutral-content" href={link.href}>
        <svelte:component this={link.icon} class="h-6 w-6 md:h-7 md:w-7" />
      </a>
    {/each}
  </div>
</footer>
