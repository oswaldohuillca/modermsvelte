<script lang="ts">
    export let xsm: number = 100;
    export let sm: number = null;
    export let md: number = null;
    export let lg: number = null;
    export let xlg: number = null;
</script>

<div class="col-xsm-{xsm} col-sm-{sm} col-md-{md} col-lg-{lg} col-xlg-{xlg}">
    <slot />
</div>

<style lang="scss">
    @import "../../scss/global";

    @each $media, $val in $screems {
        @media (min-width: $val) {
            @for $i from 0 through 20 {
                .col-#{$media}-#{$i * 5} {
                    width: $i * 5%;
                }
            }
        }
    }
</style>
