<script>
    export let question;
    export let options;

    let color = "green"
    let highlight_correct = false;
    let choice;
    let attempts = 0;

    const check_correct = (correct, index) => {
        if (correct) {
            color = "green";
        } else {
            color = "red";
        }
        highlight_correct = true;
        choice = index;
        attempts += 1;
    }

</script>

<div>
    <h1> Questions! </h1>
    <div>
        <h3>{question}</h3>
        {#each options as option, i}
            <p on:click={check_correct(option.value, i)}>
                {#if highlight_correct & option.value & choice === i}
                    <strong style="color: {color}">{option.description}</strong>
                {:else if highlight_correct & !option.value & choice === i}
                    <strong style="color: {color}"> {option.description} </strong>
                {:else}
                    {option.description}
                {/if}
            </p>
        {/each}
        <p>Attempts Taken: {attempts}</p>
    </div>
</div>
