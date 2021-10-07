<script lang="ts">
</script>

<main class="card-body">
    <slot />
</main>

<style lang="scss">
    @import "../../scss/global";
    .card-body {
        padding: $padding;
        transition: all 0.5s ease;
        transform-origin: center center;
    }
</style>
