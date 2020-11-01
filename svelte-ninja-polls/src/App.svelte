<script>
	import Footer from './components/Footer.svelte';
	import Header from './components/Header.svelte';
	import Tabs from './components/UI/Tabs.svelte';
	import CreatePollForm from './components/CreatePollForm.svelte';
	import PollList from './components/Poll/PollList.svelte';

	//tabs
	let tab_items = ['Current Polls', 'Add New Poll']
	let active_item = tab_items[0];
	let tab_info;

	$: tab_info = {
		tab_items, active_item
	}

	const tabChange = (e) => {
		active_item = e.detail;
	}

	const addNewPoll = (e) => {
		active_item = tab_items[0];
	}
 
</script>

<svelte:head>
	<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"> 
</svelte:head>

<Header/>
<main>
	<Tabs {...tab_info} on:tabChange={tabChange}/>
	{#if active_item === tab_items[0]}
		<PollList/>
	{:else}
		<CreatePollForm on:newPoll={addNewPoll}/>
	{/if}
</main>
<Footer/>

<style>

main {
	max-width: 960px;
	margin: 40px auto;
}

</style>