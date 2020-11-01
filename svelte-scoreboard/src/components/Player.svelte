<script>

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let name;
    export let score;

    const app_point_to_score = () => score+=1;
    const remove_point_from_score = () => score-=1;

    let show_controls = false;
    const toggle_controls = () => (show_controls = !show_controls)

    const remove = (e) => {
        e.preventDefault();
        dispatch("remove_player", name);
    };

</script>
<main>
    <h2>{name}
        <button on:click={toggle_controls}>
            {#if show_controls}={:else}v{/if}
        </button>
        <button on:click={remove}>
            x
        </button>
    </h2>
    <h4>Score: {score}</h4>
    <button on:click={app_point_to_score}>+1</button>
    <button on:click={remove_point_from_score}>-1</button>

    {#if show_controls}
        <input type="number" bind:value={score}/>
    {/if}
</main>

<style>
    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>
