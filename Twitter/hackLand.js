function electionWinner(votes) {

    const eligible = votes.filter(e => typeof (e) === 'string').sort();

    let vote = {};
    for (let i = 0; i < eligible.length; i++) {
        let casted = eligible[i];

        vote[casted] = vote[casted] ? vote[casted] + 1 : 1;
    }

    return Object.keys(vote).reduce((a, b) => vote[a] > vote[b] ? a : b);
  
}



const votes = [10, 'Alex', 'Michael', 'Harry', 'Dave', 'Michael', 'Victor', 'Harry', 'Alex', 'Mary', 'Mary']
const votes2 = [10, 'Victor', 'Veronica', 'Ryan', 'Dave', 'Maria', 'Maria', 'Farah', 'Farah', 'Ryan', 'Veronica']

console.log(electionWinner(votes2));