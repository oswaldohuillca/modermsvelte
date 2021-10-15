<script lang="ts">
  export let headding: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
</script>

{#if headding === 'h1'}
  <h1><slot /></h1>
{/if}

{#if headding === 'h2'}
  <h2><slot /></h2>
{/if}

{#if headding === 'h3'}
  <h3><slot /></h3>
{/if}

{#if headding === 'h4'}
  <h4><slot /></h4>
{/if}

{#if headding === 'h5'}
  <h5><slot /></h5>
{/if}

{#if headding === 'h6'}
  <h6><slot /></h6>
{/if}

{#if headding === 'p'}
  <p><slot /></p>
{/if}

{#if headding === 'span'}
  <span><slot /></span>
{/if}

<style lang="scss">
  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.8rem;
  }

  h3 {
    font-size: 1.6rem;
  }
</style>
