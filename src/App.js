import React, { Component } from 'react';
import Web3 from 'web3';
import './App.css';
import Main from './components/main.js';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: ''
    };
  }

  componentDidMount() {
    this.loadBlockchainData();
  }

  async loadBlockchainData() {
    try {
      // Check if Web3 provider is available from Metamask or similar extension
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        await window.ethereum.enable(); // Request user permission to connect
        const accounts = await web3.eth.getAccounts();
        this.setState({ account: accounts[0] });
      } else {
        console.log('Please install MetaMask or use a compatible browser extension.');
      }
    } catch (error) {
      console.error('Error loading blockchain data:', error);
    }
  }

  render() {
    return (
     <>
     <Main/>
     </>
    );
  }
}

export default App;
