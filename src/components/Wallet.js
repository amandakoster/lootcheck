import React, { Component } from 'react';
import { connect } from 'react-redux';

//export separatley in order to test without redux store
export class Wallet extends Component{
  render() {
    return(
      <div>
        <h3 className="balance">Wallet balance: {this.props.balance}</h3>
      </div>
    );
  }
};

// To implicitly return an object from an arrow function all you need to do is to surround the object with parentheses 
export default connect(state => ({ balance: state }), null)(Wallet);