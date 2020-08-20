// TODO: Create action creators as defined in tests
export const addQuote = (quote) => {
  console.log(quote)
  return {
    type: "ADD_QUOTE",
    quote: {
      ...quote, votes: 0
    }
  }
}

export const upVote = (quote) => {
  return {
    type: 'UPVOTE',
    quote: quote
  }
}

export const downVote = (quote) => {
  return {
    type: "DOWNVOTE",
    quote: quote,
  };
}

  export const deleteQuote = (quote) => {
  return {
    type: "DELETE_QUOTE",
    quote: quote
  };
};

