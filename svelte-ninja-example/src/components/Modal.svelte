<script> 
    export let showModal = false;
    export let isPromo = false;
    export let isWarning = false;
    export let message = "";



</script>

{#if showModal}
<div class="backdrop" class:promo={isPromo} class:warning={isWarning} on:click|self>
    <div class="modal">
        <p>{message}</p>
        <slot>

        </slot>
        <slot name="Special Offers for Premium Members"></slot>
    </div>
</div>
{/if}

<style>
    .backdrop {
        width: 100%;
        height: 100%;
        position: fixed;
        background: rgba(0, 0, 0, 0.8);
    }

    .modal {
        padding: 10px;
        border-radius: 10px;
        max-width: 400px;
        margin: 10% auto;
        text-align: center;
        background: whitesmoke;
    }

    .promo .modal {
        background: crimson;
        color: white;
    }

    .warning .modal {
        background: red;
        color: white;
    }


</style>