<script lang="ts">
    import MsInputSelectItem from "./MsInputSelectItem.svelte";
    import type { ItemType } from ".";
    export let items: ItemType[] = null;
</script>

<ul>
    {#each items as item, i}
        <MsInputSelectItem {item} />
    {/each}
</ul>

<style lang="scss">
    @import "../../scss/global";
    ul {
        padding: $padding;
    }
</style>
