// import uuid from 'uuid'

export default (state = [], action) => {
  let theQuote, quoteIndex
  // const id = uuid()
  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, {...action.quote}]
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id!==action.quoteId)
    case 'UPVOTE_QUOTE':
      quoteIndex = state.findIndex(quote => quote.id === action.quoteId)
      // debugger
      theQuote = {...state[quoteIndex], votes: ( state[quoteIndex].votes+1 || 1)}
      return [...state.slice(0, quoteIndex), theQuote, ...state.slice(quoteIndex+1, state.length)]
    case 'DOWNVOTE_QUOTE':
      quoteIndex = state.findIndex(quote => quote.id === action.quoteId)
      theQuote = {...state[quoteIndex], votes: ( state[quoteIndex].votes < 1 ? 0 :state[quoteIndex].votes-1 || 0)}
      return [...state.slice(0, quoteIndex), theQuote, ...state.slice(quoteIndex+1, state.length)]
    default:
      return state;
  }
}
