<script lang="ts">
  import icon from "$assets/images/icon.svg";
  import RiDiscordFill from "~icons/ri/discord-fill";
  import RiGitHubFill from "~icons/ri/github-fill";
  import RiYouTubeFill from "~icons/ri/youtube-fill";

  const links = [
    {
      icon: RiDiscordFill,
      title: "Discord",
      href: "/",
    },
    {
      icon: RiGitHubFill,
      title: "GitHub",
      href: "/",
    },
    {
      icon: RiYouTubeFill,
      title: "YouTube",
      href: "/",
    },
  ];
</script>

<footer class="mt-4 flex flex-row flex-wrap items-center justify-between gap-x-8 gap-y-2 pt-4">
  <div class="flex items-center gap-x-4">
    <img
      class="row-span-2 h-5 w-8 max-w-none"
      width="96"
      height="58"
      src={icon}
      alt="Parctan icon"
    />
    <div class="divider divider-horizontal mx-0 hidden w-1 sm:flex" />
    <div class="sm:flex">
      <div>
        made by <a class="link-hover font-semibold" href="/">Parctan Team</a>
      </div>
      <div class="divider divider-horizontal mx-2" />
      <a class="link-hover" href="/">License</a>
    </div>
  </div>
  <div class="flex gap-x-4">
    {#each links as { icon, title, href }}
      <a class="btn btn-circle btn-link btn-sm text-neutral-content" {href} {title}>
        <svelte:component
          this={icon}
          class="h-6 w-6 md:h-7 md:w-7"
          aria-hidden="true"
          focusable="false"
        />
        <span class="visually-hidden">{title}</span>
      </a>
    {/each}
  </div>
</footer>
