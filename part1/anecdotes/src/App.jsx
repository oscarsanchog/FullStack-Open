import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
  ]

  const getRandomValue = () => {
    const randomValue = Math.floor(Math.random() * anecdotes.length)
    //console.log(randomValue)
    return randomValue
  }
  const votesArray = new Uint8Array(anecdotes.length)
  

  const [selected, setSelected] = useState(getRandomValue())
  const [votes, setVotes] = useState(votesArray)
  //const [mostVoted, setMostVoted] = useState(0)

  const handleSelected = () => {
    setSelected(getRandomValue())
  }

  /* const mostVotedFunction = () => {
    const max = Math.max(...votes)
    setMostVoted(max)
  } */

  const handleVote = () => {
    const copyVotes = [...votes]
    copyVotes[selected] += 1
    setVotes(copyVotes)
    //const max = Math.max(...copyVote)
    //setMostVoted(max)
  }

  const maxVote = Math.max(...votes)
  const mostVotedIndex = votes.indexOf(maxVote)
  const mostVoted = votes[mostVotedIndex]

  // console.log(mostVotedIndex)
  //console.log(votes.indexOf(mostVoted))
  const MostVoted = () =>
    mostVoted === 0 ? (
      <p>Make your first vote!</p>
    ) : (
      <>
        <p>{anecdotes[mostVotedIndex]}</p>
        <p>{`Has ${mostVoted} votes`}</p>
      </>
    )

  return (
    <>
      <div>
        <h1>Anecdote of the day</h1>
        <p>{anecdotes[selected]}</p>
        <p>{`Votes: ${votes[selected]}`}</p>
        <button onClick={handleVote}>Vote</button>
        <button onClick={handleSelected}>Next anectote</button>
      </div>

      <div>
        <h2>Anecdote with most votes</h2>
        <MostVoted/>
      </div>
    </>
  )
}

export default App
