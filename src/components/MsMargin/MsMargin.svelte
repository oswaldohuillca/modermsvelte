<script lang="ts">
  export let margin: number | [number, number, number, number] = 0;
  let newMargin: string;
  if (Array.isArray(margin)) {
    newMargin = `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`;
  } else {
    newMargin = `${margin}px`;
  }
</script>

<div style="margin: {newMargin};">
  <slot />
</div>

<style lang="scss">
</style>
