<script lang="ts">
    export let gap: number = 0;
</script>

<div class="grid grid-gap-{gap}">
    <slot />
</div>

<style lang="scss">
    @import "../../scss/global";
    .grid {
        display: grid;
        @for $i from 0 through 20 {
            &-gap-#{$i} {
                gap: $i;
            }
        }
    }
</style>
