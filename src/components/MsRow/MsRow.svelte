<script lang="ts">
</script>

<div class="row">
    <slot />
</div>

<style lang="scss">
    @import "../../scss/global";
    .row {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
    }
</style>
