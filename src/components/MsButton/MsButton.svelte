<script lang="ts">
    import { createEventDispatcher } from "svelte";

    import type { Radius, Size } from "../../interface/global";
    import { getColor } from "../../interface/helpers";
    import MsIcon from "../MsIcon/MsIcon.svelte";
    export let label: string = null;
    export let iconAfter: boolean = false;
    export let btnBlock: boolean = false;
    export let color:
        | "primary"
        | "secondary"
        | "success"
        | "warning"
        | "danger"
        | "dark"
        | "white" = null;
    export let size: Size = "default";
    export let radius: Radius = "default";
    export let gradient: boolean = false;
    export let inner: boolean = false;
    export let icon: string = null;
    export let iconSize: string = "1.5rem";
    export let iconPack: string = "material-icons";

    const dispatch = createEventDispatcher();
    const handleClik = () => {
        dispatch("click");
    };
</script>

<div class="ms-contain">
    <button
        on:click={handleClik}
        class="ms-button {btnBlock
            ? 'block'
            : ''} ms-button-{color} ms-button-{size} ms-radius-{radius} {gradient
            ? 'gradient'
            : null} {inner ? 'ms-button-inner' : null} {inner
            ? 'width-tiny'
            : null}"
    >
        {#if icon && !iconAfter}
            <MsIcon
                {icon}
                {iconPack}
                color={!color || color == "white" ? getColor("dark") : "white"}
                size={iconSize}
            />
        {/if}
        {#if label}
            <span
                class="text {icon && !iconAfter ? 'left' : 'right'} {color &&
                color !== 'white'
                    ? 'color-white'
                    : 'color-dark'}"
            >
                {label}
            </span>
        {/if}
        {#if icon && iconAfter}
            <MsIcon
                {icon}
                {iconPack}
                color={!color || color == "white" ? getColor("dark") : "white"}
            />
        {/if}
    </button>
</div>

<style lang="scss">
    @import "../../scss/global";
    .ms-contain {
        position: relative;
        .ms-button {
            overflow: hidden;
            position: relative;
            white-space: nowrap;
            height: 40px;
            padding: 10px 10px;
            border: none;
            cursor: pointer;
            box-shadow: var(--outer-shadow);
            background: none;
            transition: all 0.2s ease;
            outline: none;
            display: flex;
            justify-content: center;
            align-items: center;

            @each $val, $i in $colors {
                @if ($val == "white") {
                    &.ms-button-#{$val} {
                        background: getColor($i, 1);
                        color: $dark;
                        &.gradient {
                            background: linear-gradient(
                                140deg,
                                $i,
                                adjust-hue($i, 30deg)
                            );
                        }
                    }
                } @else {
                    &.ms-button-#{$val} {
                        background: getColor($i, 1);
                        color: $white;
                        &.gradient {
                            background: linear-gradient(
                                140deg,
                                $i,
                                adjust-hue($i, 30deg)
                            );
                        }
                    }
                }
            }
            @each $val, $i in $sizes {
                @if ($val == "tiny") {
                    &.width-tiny {
                        width: $i;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        padding: 0;
                    }
                }
                &.ms-button-#{$val} {
                    height: $i;
                    min-width: $i;
                    min-height: $i;
                }
            }
            @each $val, $i in $borders {
                &.ms-radius-#{$val} {
                    border-radius: $i;
                }
            }
            &.block {
                width: 100%;
            }
            &:active {
                box-shadow: var(--inner-shadow);
            }
            &.ms-button-inner {
                box-shadow: var(--inner-shadow);
            }
            .text {
                &.left {
                    margin-left: 0.5em;
                }
                &.right {
                    margin-right: 0.5em;
                }
                &.color-white {
                    color: $white;
                }
                &.color-dark {
                    color: $dark;
                }
            }
            &::before {
                position: absolute;
                top: 0;
                left: -75%;
                z-index: 2;
                display: block;
                content: "";
                width: 50%;
                height: 100%;
                background: -webkit-linear-gradient(
                    left,
                    rgba(255, 255, 255, 0) 0%,
                    rgba(255, 255, 255, 0.3) 100%
                );
                background: linear-gradient(
                    to right,
                    rgba(255, 255, 255, 0) 0%,
                    rgba(255, 255, 255, 0.3) 100%
                );
                -webkit-transform: skewX(-25deg);
                transform: skewX(-25deg);
            }
            &:hover::before {
                -webkit-animation: shine 0.75s;
                animation: shine 0.75s;
            }
        }
    }

    /* Shine */
    @-webkit-keyframes shine {
        100% {
            left: 125%;
        }
    }
    @keyframes shine {
        100% {
            left: 125%;
        }
    }
</style>
