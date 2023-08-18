<script lang="ts">
  let className: string;
  export let glowClass: string;
  export { className as class };
</script>

<span class="relative {className}">
  <slot />
  <span class="absolute left-0 h-full w-full {className} {glowClass}" aria-hidden="true">
    <slot />
  </span>
</span>
