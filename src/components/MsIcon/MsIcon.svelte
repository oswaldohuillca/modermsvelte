<script lang="ts">
    export let icon: string;
    export let iconPack: string = "material-icons";
    export let color: string = null;
    export let size: string = "1.5rem";
</script>

<i class="ms-icon {iconPack} ms-icon-{color}" style="font-size: {size};"
    >{icon}</i
>

<style lang="scss">
    @import "../../scss/global";
    .ms-icon {
        @each $val, $i in $colors {
            &-#{$val} {
                color: $i;
            }
        }
    }
</style>
