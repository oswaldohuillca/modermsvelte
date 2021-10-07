<script lang="ts">
    import type { ItemType } from ".";
    export let item: ItemType = null;
</script>

{#if item}
    <li>
        {item.name}
    </li>
{/if}

<style lang="scss">
    @import "../../scss/global";
    li {
        list-style: none;
        width: 100%;
        padding: $padding - 10;
        border-radius: $border-radius - 5;
        transition: all 0.5s ease;
        cursor: pointer;
        &:hover {
            background-color: getColor($primary);
            color: $white;
        }
    }
</style>
