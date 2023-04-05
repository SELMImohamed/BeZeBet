import React, { Component, useState } from 'react';
import { ethers } from "ethers";

export default function MetaMask() {

    const [errorMessage, setErrorMessage] = useState(null); 
    const [defaultAccount, setDefaultAccount] = useState(null);
    const [userBalance, setUserBalance] = useState(null);

    const connectWallet = () => {
        if(window.ethereum) {
            window.ethereum.request({ method: 'eth_requestAccounts' })
            .then(result => {
                accountChanged([result[0]])
            })
        }else{
            setErrorMessage("Please install MetaMask extension");
        }
    }

    const accountChanged = (accountName) => {
        setDefaultAccount(accountName);
        getUserBalance(accountName);
    }

    const getUserBalance = (accountAddress) => {
        window.ethereum.request({ method: 'eth_getBalance', params: [String(accountAddress), 'latest']})
        .then(balance => {
            setUserBalance(ethers.formatEther(balance));
        })
    }

  return (
    <div>
        <h1>MetaMask</h1>
        <button onClick={connectWallet}>Connect</button>
        <p>Adress: {defaultAccount}</p>
        <p>Balance: {userBalance}</p>

        {errorMessage}
    </div>
  )
}
