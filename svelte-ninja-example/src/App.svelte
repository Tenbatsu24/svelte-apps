<script>
	import Modal from './components/Modal.svelte'
	import AddPersonForm from './components/AddPersonForm.svelte'

	let firstName = "Puru";
	let lastName = "Vaish";
	let fullName;

	$: {
		fullName = `${firstName} ${lastName}`;
		console.log(beltColour);
	}

	let beltColour = 'black';

	const handleClick = () => {
		beltColour = 'orange'
	};

	let people = [
		{name: 'Rehan', beltColour: 'White', age: '19', id:1},
		{name: 'Puru', beltColour: 'Black', age: '20', id:2}
	]

	const addPerson = (e) => {
		people = [...people, e.detail]
	}

	const deletePerson = (e, removed_person) => {
		people = people.filter(person_in_list => person_in_list.id !== removed_person.id)
		// toggleWarningModal()
	}

	let modalData = 
	{
		promoModal:
		{
			isPromo: true,
			message: "Buy new Chcoloated only for $10"
		},
		// warningModal:
		// {
		// 	isWarning: true,
		// 	message: "Warning: you deleted a User!!"
		// }
	}

	const togglePromoModal = () => {
		showPromoModal = !showPromoModal;
	}

	const toggleAddUserModal = () => {
		showAddUserModal = !showAddUserModal;
	}

	// const toggleWarningModal = () => {
	// 	showWarningModal = !showWarningModal
	// }

	let showPromoModal = false;
	let showAddUserModal = false;
	// let showWarningModal = false;

</script>

<Modal {...modalData.promoModal} showModal={showPromoModal} on:click={togglePromoModal}>
	<h3>Recieve our Chocolate Guide!</h3>
	<form>
		<input type="text" placeholder="email address">
		<input type="button" value="Submit">
	</form>
	<div slot="Special Offers for Premium Members">
		<a href="www.google.com">Special Offers for Premium Members</a>
	</div>
</Modal>

<Modal showModal={showAddUserModal} on:click={toggleAddUserModal}>
	<AddPersonForm on:addPerson={(e) => 
		{
			addPerson(e);
			toggleAddUserModal();
		}
	}/>
</Modal>
<!-- <Modal {...modalData.warningModal} showModal={showWarningModal} on:click={toggleWarningModal}/> -->
<main>
	<!-- <p>{fullName} is <strong style="color: {beltColour}">{beltColour}</strong> belt!</p>
	<button on:click={handleClick}>Update Belt Colour</button>
	<input type="text" bind:value={beltColour}>
	<input type="text" bind:value={firstName}>
	<input type="text" bind:value={lastName}> -->
	<div>
		{#each people as person (person.id)}
			<h4>{person.name}</h4>
			{#if person.beltColour === "Black"}
				<p>Master Ninja</p>				
			{:else if person.beltColour !== "White"}
				<p>Not Yet!</p>
			{:else}
				<p>Stay safe!</p>
			{/if}
			<button on:click={(e) => {deletePerson(e, person)}}>X</button>
		{:else}
			<p>No people!!</p>
		{/each}
	</div>
	<button on:click={togglePromoModal}>View Today's Special Offer</button>
	<button on:click={toggleAddUserModal}>Add a new User</button>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff4000;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	a {
		color: white;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>