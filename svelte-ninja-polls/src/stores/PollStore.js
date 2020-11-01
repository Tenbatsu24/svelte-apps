import { writable } from 'svelte/store';

const PollStore = writable([{
    question: "I don't know, don't ask me",
    answerA: "Still don't know",
    answerB: "Still don't",
    votesA: 1,
    votesB: 10,
    id: Math.random()
}]);

export default PollStore;
