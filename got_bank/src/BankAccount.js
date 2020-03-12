import React, { Component } from 'react';

class BankAccount extends Component {
  render() {
    return (
      <React.Fragment>
      <h2>Welcome {this.props.myAccount.name}</h2>
      <h3>Your balance is ${this.props.myAccount.balance} </h3>
      </React.Fragment>


    );
  }
}

export default BankAccount;