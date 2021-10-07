<script lang="ts">
    import { createEventDispatcher } from "svelte";

    import MsButton from "../MsButton/MsButton.svelte";
    export let title: string;

    const dispatch = createEventDispatcher();

    function close(): void {
        dispatch("cardClose");
    }

    function minimize(): void {
        dispatch("cardMinimize");
    }

    function maximize(): void {
        dispatch("cardMaximize");
    }
</script>

<header class="ms-card-header">
    {title}
    <div class="ms-cross">
        <div class="icons">
            <div class="ms-cross-icon">
                <MsButton
                    on:click={minimize}
                    icon="minimize"
                    iconSize="1rem"
                    size="tiny"
                    inner={true}
                />
            </div>

            <div class="ms-cross-icon">
                <MsButton
                    on:click={maximize}
                    icon="maximize"
                    iconSize="1rem"
                    size="tiny"
                    inner={true}
                />
            </div>
            <div class="ms-cross-icon">
                <MsButton
                    on:click={close}
                    icon="close"
                    iconSize="1rem"
                    size="tiny"
                    inner={true}
                />
            </div>
        </div>
    </div>
</header>

<style lang="scss">
    @import "../../scss/global";
    .ms-card-header {
        padding: 15px;
        position: relative;
        background: getColor($dark, 0.1);
        z-index: $z-index-100;
        .ms-cross {
            position: absolute;
            right: 15px;
            top: 0;
            height: 100%;
            display: flex;
            align-items: center;
            .icons {
                display: flex;
                .ms-cross-icon {
                    padding: 2px;
                }
            }
        }
    }
</style>
