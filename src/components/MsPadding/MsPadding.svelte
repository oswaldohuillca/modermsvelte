<script lang="ts">
  export let padding: number | [number, number, number, number] = 0;
  let newPadding: string;
  if (Array.isArray(padding)) {
    newPadding = `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px `;
  } else {
    newPadding = `${padding}px`;
  }
</script>

<div style="padding: {newPadding};">
  <slot />
</div>

<style lang="scss">
</style>
