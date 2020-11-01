<script>
	import Question from "./components/Question.svelte";

	const question = {
		question: "Who is the President of America?",
		options: [{
			description: "Donald Trump",
			value: 1
		}, {
			description: "Barack Obama",
			value: 0
		}, {
			description: "Hillary Clinton",
			value: 0
		}, {
			description: "Joe Biden",
			value: 0
		}]
	}
</script>

<main>
	<Question {...question}/>
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
