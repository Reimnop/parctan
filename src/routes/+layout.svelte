<script lang="ts">
  import { Footer, Header } from "$lib/components/layout";
  import "../app.css";
</script>

<Header />
<main class="flex-1">
  <slot />
</main>
<Footer />
