<script>

    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    let player = {
        name: "",
        score: 0
    }

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch("add_player", player);
        player = {
            name: "",
            score: 0
        };
    };

</script>

<form on:submit={onSubmit}>
    <input type="text" placeholder="Player Name" bind:value={player.name}>
    <input type="number" placeholder="Player Score" bind:value={player.score}>
    <input type="submit" value="Add Player">
</form>
