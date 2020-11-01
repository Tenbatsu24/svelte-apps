<script>
    import { createEventDispatcher } from 'svelte'
import { current_component } from 'svelte/internal';
    import PollStore from "../stores/PollStore.js";

    let dispatch = createEventDispatcher();

    import Button from './UI/Button.svelte'

    const defaultFields = {
        question: '',
        answerA: '',
        answerB: ''
    }

    let fields = {
        question: '',
        answerA: '',
        answerB: ''
    }

    let errors = {
        question: '',
        answerA: '',
        answerB: ''
    }

    let valid = false;

    const buttonConfig = {
        type: "secondary",
        flat: true,
        inverse: false
    }

    const handleSubmit = () => {
        valid = true;

        if (fields.question.trim().length < 5) {
            valid = false;
            errors.question = "Question is too short. Must be at least 5 chars long!"
        } else {
            errors.question = ""
        }

        if (fields.answerA.trim().length < 1) {
            valid = false;
            errors.answerA = "AnswerA is too short. Must be at least 1 chars long!"
        } else {
            errors.answerA = ""
        }

        if (fields.answerB.trim().length < 1) {
            valid = false;
            errors.answerB = "AnswerB is too short. Must be at least 1 chars long!"
        } else {
            errors.answerB = ""
        }

        console.log({fields});
        if (valid) {
            let newPoll = {...fields, votesA: 0, votesB: 0, id:Math.random()}
            PollStore.update(currentPolls => {
                return [newPoll, ...currentPolls]
            });
            dispatch('newPoll')
            fields = {...defaultFields}
            errors = {...defaultFields}
        }
    }

</script>

<form on:submit|preventDefault={handleSubmit}>
    <div class="form-field">
        <label for="question">Poll Question:</label>
        <input type="text" id="question" bind:value={fields.question}>
        <div class:errors={errors}>{errors.question}</div>
    </div>
    <div class="form-field">
        <label for="answerA">Answer A:</label>
        <input type="text" id="answer-a" bind:value={fields.answerA}>
        <div class:errors={errors}>{errors.answerA}</div>
    </div>
    <div class="form-field">
        <label for="answerB">Answer B:</label>
        <input type="text" id="answer-b" bind:value={fields.answerB}>
        <div class:errors={errors}>{errors.answerB}</div>
    </div>
    <Button {...buttonConfig}>Add Poll</Button>
</form>

<style>

    form {
        width: 400px;
        margin: 0 auto;
        text-align: center;
    }

    .form-field {
        margin: 18px auto;
    }

    input {
        width: 100%;
        border-radius: 6px;
    }

    label {
        margin: 10px auto;
        text-align: left;
    }

    .errors {
        font-weight: bold;
        color: #d91b42;
        font-size: 12px;
    }

</style>