<script lang="ts">
  import { page } from "$app/stores";
  import { Footer, Header } from "$lib/components/layout";
  import "../app.css";
  import montserrat from "$lib/assets/fonts/Montserrat-VariableFont_wght.ttf";
</script>

<svelte:head>
  <title>{$page.data.title}</title>
  <meta property="og:title" content={$page.data.title} />
  <meta property="twitter:title" content={$page.data.title} />

  <meta name="description" content={$page.data.description} />
  <meta name="og:description" content={$page.data.description} />
  <meta name="twitter:description" content={$page.data.description} />

  <link rel="canonical" href={$page.data.url} />
  <meta name="og:url" content={$page.data.url} />
  <meta name="twitter:url" content={$page.data.url} />

  <link rel="preload" href={montserrat} as="font" type="font/ttf" crossorigin="anonymous" />
</svelte:head>

<Header />
<main class="flex-1">
  <slot />
</main>
<Footer />
