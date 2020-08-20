
export default (state = [], action) => {
  let quote, index
  switch (action.type) {
    case "ADD_QUOTE":
      return state.concat(action.quote);

    case "UPVOTE":
      index = state.findIndex(quote => quote.id === action.quote.id)
      return [...state.slice(0, index), {...action.quote, votes: action.quote.votes+1}, ...state.slice(index+1)]

    case "DOWNVOTE":
      index = state.findIndex(quote => quote.id === action.quote.id)
      return [...state.slice(0, index), {...action.quote, votes: action.quote.votes-1}, ...state.slice(index+1)]

    case "DELETE_QUOTE":
      return state.filter(q => q.id !== action.quote.id)
    default:
      return state;
  }
}


