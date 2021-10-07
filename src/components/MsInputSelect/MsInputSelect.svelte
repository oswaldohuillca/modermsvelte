<script lang="ts">
    import { fly } from "svelte/transition";

    import MsIcon from "../MsIcon/MsIcon.svelte";
    import MsInput from "../MsInput/MsInput.svelte";
    import MsInputSelectGroup from "./MsInputSelectGroup.svelte";

    export let label: string = null;
    export let icon: string = null;
    export let placeholder: string = null;

    let contentShow: boolean = false;

    const onFocus = (e) => {
        console.log(e);
        contentShow = true;
    };
    const onBlur = (e) => {
        console.log(e);
        contentShow = false;
    };
    const onKeyUp = (e) => {
        console.log(e.detail);
    };

    const data = [
        { id: 1, name: "foo" },
        { id: 2, name: "bar" },
    ];
</script>

<div class="ms-input-select">
    {#if label}
        <label for="">{label}</label>
    {/if}
    <MsInput
        on:focus={onFocus}
        on:keyup={onKeyUp}
        on:blur={onBlur}
        {placeholder}
    />

    {#if contentShow}
        <div
            transition:fly={{ y: 50, duration: 1000 }}
            class="ms-input-select-group"
        >
            <MsInputSelectGroup items={data} />
        </div>
    {/if}

    {#if icon}
        <div>
            <MsIcon {icon} />
        </div>
    {/if}
</div>

<style lang="scss">
    @import "../../scss/global";
    .ms-input-select {
        position: relative;
        &-group {
            position: absolute;
            top: 50px;
            left: 0;
            width: 100%;
            background: $white;
            z-index: $z-index-200;
            border-radius: var(--border-radius);
            box-shadow: var(--outer-shadow);
        }
    }
</style>
