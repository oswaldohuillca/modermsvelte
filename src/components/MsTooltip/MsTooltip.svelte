<script lang="ts">
    import { fly } from "svelte/transition";
    export let tooltipLabel: string = null;
    let show: boolean = false;
</script>

<div
    class="ms-tooltip"
    on:mouseenter={() => (show = true)}
    on:mouseleave={() => (show = false)}
>
    {#if tooltipLabel && show}
        <div
            transition:fly={{ y: 20, duration: 500 }}
            class="ms-tooltip-content"
        >
            {tooltipLabel}
        </div>
    {:else if show}
        <div
            transition:fly={{ y: 20, duration: 500 }}
            class="ms-tooltip-content"
        >
            <slot name="tooltip-content" />
        </div>
    {/if}

    <slot />
</div>

<style lang="scss">
    @import "../../scss/global";
    $ver: (
        top: 0,
        let: 0,
        right: 0,
        booton: 0,
    );

    .ms-tooltip {
        width: fit-content;
        position: relative;
        .ms-tooltip-content {
            position: absolute;
            z-index: 10000;
            top: -20px;
            background: red;
            padding: $padding - 5;
        }
    }
</style>
