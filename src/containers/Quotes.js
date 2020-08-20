import React, { Component } from "react";
import { connect } from "react-redux";
import QuoteCard from "../components/QuoteCard";
import { upVote, downVote, deleteQuote } from "../actions/quotes";

class Quotes extends Component {
  render() {
    return (
      <div>
        <hr />
        <div className='row justify-content-center'>
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
              {this.props.quotes.map((quote) => (
                <QuoteCard
                  downVote={this.props.downVote}
                  upVote={this.props.upVote}
                  deleteQuote={this.props.deleteQuote}
                  key={quote.id}
                  quote={quote}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { quotes: state.quotes };
};

export default connect(mapStateToProps, { upVote, downVote, deleteQuote })(Quotes);
