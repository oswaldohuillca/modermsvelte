<script lang="ts">
    import { fly } from "svelte/transition";
    import MsButton from "../MsButton/MsButton.svelte";
    import Plus from "svelte-material-icons/Plus.svelte";
    import Alert from "svelte-material-icons/Alert.svelte";
    import { getColor } from "../../interface/helpers";
    export let color:
        | "primary"
        | "secondary"
        | "success"
        | "warning"
        | "danger"
        | "dark"
        | "white" = null;
    export let show: boolean = true;
    function closeAlert(e) {
        show = false;
        console.log(e);
    }
</script>

{#if show}
    <section
        transition:fly={{ y: -100, duration: 2000 }}
        class="ms-alert ms-alert-{color}"
    >
        <div class="ms-alert-icon">
            <Alert
                size="2rem"
                color={color == "white" ? getColor("dark") : getColor(color)}
            />
        </div>
        <div
            class="ms-alert-content"
            style="color: {color == 'white'
                ? getColor('dark')
                : getColor(color)};"
        >
            <slot />
        </div>
        <div class="ms-alert-close">
            <MsButton
                on:click={closeAlert}
                size="tiny"
                inner={true}
                radius="rounded"
                icon="close"
                iconSize="1rem"
            />
        </div>
    </section>
{/if}

<style lang="scss">
    @import "../../scss/global";
    .ms-alert {
        padding: $padding;
        border-radius: $border-radius;
        box-shadow: var(--outer-shadow);
        display: flex;
        justify-items: stretch;
        position: relative;
        margin: 20px 0;
        @each $val, $i in $colors {
            &-#{$val} {
                background: lighten($i, 35);
            }
        }
        &-icon {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        &-content {
            display: flex;
            padding: $padding - 10;
            align-items: center;
            width: 100%;
        }
        &-close {
            position: absolute;
            right: 15px;
        }
    }
</style>
