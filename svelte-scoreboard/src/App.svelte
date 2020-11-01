<script>

	import Navbar from './components/Navbar.svelte';
	import Player from './components/Player.svelte';
	import AddPlayer from './components/AddPlayer.svelte';

	let players = [
		{
			name: "Rehan",
			score: 100
		},
		{
			name: "Someone Else",
			score: 1
		}
	]

	const add_player = (e) => {
		players = [...players, e.detail]
	}
	const remove_from_list = (e) => {
		players = players.filter(player => player.name !== e.detail)
	}

</script>

<Navbar/>
<div>
	<AddPlayer on:add_player={add_player}/>
	{#if (players.length === 0)}
		<p> No Players </p>
	{:else}
		{#each players as player}
			<Player {...player} on:remove_player={remove_from_list}/>
		{/each}
	{/if}
</div>

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
