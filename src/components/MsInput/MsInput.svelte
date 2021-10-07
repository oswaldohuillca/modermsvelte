<script lang="ts">
    import { createEventDispatcher, onMount } from "svelte";

    import type { Color, Size } from "../../interface/global";
    import { getColor } from "../../interface/helpers";
    export let placeholder: string = "placeholder";
    export let type: "email" | "text" | "password" | "number" = "text";
    export let icon: boolean = false;
    export let iconAfter: boolean = false;
    export let size: "large" | "default" | "small" | "tiny" = "default";
    export let label: string = null;
    export let color: Color = null;
    export let opacity: number = 1;
    export let radius: "rounded" | "default" | "medium" | "square" = "default";

    let ref: HTMLInputElement;

    onMount(() => {
        if (ref) {
            ref.type = type;
        }
    });

    const StyleButton = () => {
        return `background: ${getColor(color, opacity)}`;
    };

    const dispatch = createEventDispatcher();
    let value: string | number = "";
    const onFocus = () => {
        dispatch("focus");
    };
    const onBlur = () => {
        dispatch("blur");
    };
    const onKeyUp = () => {
        dispatch("keyup", {
            detail: value,
        });
    };
</script>

<div class="ms-contain">
    {#if icon && !iconAfter}
        <span class="icon-left">
            <slot />
        </span>
    {/if}
    {#if label}
        <label class="ms-input-label" for="">{label}</label>
    {/if}
    <input
        on:focus={onFocus}
        on:keyup={onKeyUp}
        on:blur={onBlur}
        bind:value
        bind:this={ref}
        style={StyleButton()}
        class="ms-input {icon && !iconAfter
            ? 'left-spacer'
            : 'right-spacer'} {color
            ? color
            : null} ms-input-{color} ms-input-{size} ms-radius-{radius}"
        {placeholder}
    />
    {#if icon && iconAfter}
        <span class="icon-right">
            <slot />
        </span>
    {/if}
</div>

<style lang="scss">
    @import "../../scss/global";
    .ms-contain {
        padding: 5px 0;
        position: relative;
        .ms-input-label {
            padding: 0px 0 5px 10px;
            position: relative;
            display: block;
        }
        .icon-left {
            position: absolute;
            height: 100%;
            display: flex;
            align-items: center;
            padding: 0 6px;
        }
        .icon-right {
            position: absolute;
            height: 100%;
            right: 0;
            top: 0;
            display: flex;
            align-items: center;
            padding: 0 6px;
            margin-right: 1rem;
        }
        .ms-input {
            width: 100%;
            outline: none;
            border: none;
            padding: 10px;
            background: none;
            box-shadow: var(--inner-shadow);
            border-radius: var(--border-radius);
            transition: all 2s ease;
            @each $val, $i in $colors {
                @if ($val == "white") {
                    &.ms-input-#{$val} {
                        background: getColor($i, 1);
                        color: $dark;
                    }
                    &.ms-input-#{$val}::placeholder {
                        color: getColor($dark, 0.5);
                    }
                } @else {
                    &.ms-input-#{$val} {
                        background: getColor($i, 1);
                        color: $white;
                    }
                    &.ms-input-#{$val}::placeholder {
                        color: getColor($white, 0.5);
                    }
                }

                &.ms-input-#{$val}::placeholder {
                    color: getColor($white, 0.5);
                }
            }
            @each $val, $i in $borders {
                &.ms-radius-#{$val} {
                    border-radius: $i;
                }
            }
            @each $val, $i in $sizes {
                &.ms-input-#{$val} {
                    height: $i;
                    min-width: $i;
                    min-height: $i;
                }
            }
            &.left-spacer {
                padding-left: 25px;
            }
            &.right-spacer {
                padding-right: 25px;
            }
            &:focus {
                box-shadow: var(--inner-shadow);
            }
        }
    }
</style>
