import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import rootReducer from '../reducers/index'
import {createStore} from 'redux'


class Quotes extends Component {
  
  render() {
    
    console.log(this.props)
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {this.props.quotes.map(quote => <QuoteCard key={quote.id} quote={quote}/>)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed
const mapStateToProps = (state) => {
  console.log(state)
  return {...state}
}

export default connect(mapStateToProps)(Quotes);
