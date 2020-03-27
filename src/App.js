import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickButton } from './actions';

class App extends Component {
  state = {    
    inputValue: ''
  }

  inputChange = event => {
    this.setState({ inputValue: event.target.value })
  }

  render() {
    const { clickButton, newValue } = this.props;
    const { inputValue } = this.state;
    return (
      <div className="App" style={
        { paddingTop: '20px' ,
          textAlign: 'center'}}>
        <input onChange={this.inputChange} 
          placeholder="Digite o novo estado" 
          type='text' 
          value={inputValue}  />
        <button onClick={() => clickButton(inputValue)}>Clique aqui</button>
        <h1>{newValue}</h1>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  newValue: store.clickState.newValue
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickButton }, dispatch);
  
export default connect(mapStateToProps, mapDispatchToProps)(App);