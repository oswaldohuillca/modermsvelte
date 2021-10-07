<script lang="ts">

</script>

<div class="skill">
    <div class="outer">
        <div class="inner"></div>
    </div>
</div>

<style lang="scss">
.skill{
    width: 160px;
    height: 160px;
    position: relative;
    .outer{
        width: 160px;
        height: 160px;
        //border: 1px solid red;
        border-radius: 50%;
        box-shadow: 6px 6px 10px -1px rgba(0,0,0,0.15),
                    -6px -6px 10px -1px rgba(255,255,255, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .inner{
        height: 120px;
        width: 120px;
        //border: 1px solid red;
        border-radius: 50%;
        box-shadow: inset 4px 4px 6px -1px rgba(0,0,0,0.2),
                    inset -4px -4px 6px -1px rgba(255,255,255, 0.7),
                    -0.5px -0.5px 0px rgba(255,255,255, 1),
                    0.5px 0.5px 0px rgba(0,0,0, 0.15),
                    0px 12px 10px 10px rgba(0,0,0, 0.05);
    }
}
</style>