<script lang="ts">
  import { fly, slide } from 'svelte/transition';
  import { getColor } from '../../interface/helpers';
  import MsCardBody from './MsCardBody.svelte';
  import MsCardHeader from './MsCardHeader.svelte';

  export let color:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'dark'
    | 'white' = null;
  export let title: string = 'Card title';

  let visible: boolean = true;
  let minimize: boolean = false;
  let maximize: boolean = false;

  let elx: any;
  $: styleElx = '';

  const close = (): void => {
    visible = false;
  };

  const cardMinimize = (): void => {
    minimize = !minimize;
  };

  const cardMaximize = (node): void => {
    maximize = !maximize;
    styleElx = `
        position: fixed;
        height: 100vh;
        width: 100%;
        z-index: 1000;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0;
		left: 0;
		right: 0;
		bottom: 0;
        background: rgba(0,0,0,.5);
        `;

    // document.body.insertBefore<any>(elx, document.body.firstChild);
  };
</script>

{#if visible}
  {#if maximize}
    <div
      class="overlay card-maximize"
      style={maximize && styleElx}
      bind:this={elx}
    >
      <div
        transition:fly={{ y: -50, duration: 500 }}
        class="card card-{color} card-maximize"
        style="min-width:{maximize ? '90%' : undefined}; box-shadow: {maximize
          ? 'none'
          : undefined} "
      >
        <MsCardHeader
          on:cardClose={close}
          on:cardMinimize={cardMinimize}
          on:cardMaximize={cardMaximize}
          {title}
        />
        {#if !minimize}
          <div transition:slide|local>
            <MsCardBody>
              <slot />
            </MsCardBody>
          </div>
        {/if}
      </div>
    </div>
  {/if}
  <div
    transition:fly={{ y: 50, duration: 1000 }}
    class="card card-{color}"
    style="min-width:{maximize ? '90%' : undefined}; box-shadow: {maximize
      ? 'none'
      : undefined} "
  >
    <MsCardHeader
      on:cardClose={close}
      on:cardMinimize={cardMinimize}
      on:cardMaximize={cardMaximize}
      {title}
    />
    {#if !minimize}
      <div transition:slide|local>
        <MsCardBody>
          <slot />
        </MsCardBody>
      </div>
    {/if}
  </div>
{/if}

<style lang="scss">
  @import '../../scss/global';
  .overlay {
    transition: all 1s ease;
    &.card-maximize {
      padding: 10pt;
    }
  }
  .card {
    box-shadow: var(--outer-shadow);
    border-radius: var(--border-radius);
    overflow: hidden;
    @each $val, $i in $colors {
      &.card-#{$val} {
        background: getColor($i, 1);
        color: $dark;
        &.gradient {
          background: linear-gradient(140deg, $i, adjust-hue($i, 30deg));
        }
      }
    }
    &.card-maximize {
      width: 100%;
      height: 100%;
    }
    .card-header {
    }
    .card-body {
    }
    .card-footer {
    }
  }
</style>
