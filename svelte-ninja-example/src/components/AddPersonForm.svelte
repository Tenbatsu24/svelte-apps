<script>

    import { createEventDispatcher } from 'svelte';
    let dispatch = createEventDispatcher();

    let name;
    let beltColour;
    let age;
    let skills = [];

    const handleSubmit = () => {
        const person = {name, beltColour, age, skills,id:Math.random()};
        dispatch('addPerson', person);
    }

</script>

<form on:submit|preventDefault={handleSubmit}>
    <input type="text" placeholder="name" bind:value={name}>
    <label for="beltColour">Belt Colour:</label>
    <select id="beltColour" bind:value={beltColour}>
        <option value="black">Black</option>
        <option value="black">Red</option>
        <option value="black">Yellow</option>
        <option value="black">White</option>
    </select>
    <input type="number" placeholder="age" bind:value={age}>
    <label for="skills">Skills:</label>
    <div id="skills">
        <input type="checkbox" bind:group={skills} value="canFight">fighting<br>
        <input type="checkbox" bind:group={skills} value="canSneak">sneaking<br>
        <input type="checkbox" bind:group={skills} value="canRun">running<br>
    </div>
    <button type="submit"> Add Person </button>
</form>