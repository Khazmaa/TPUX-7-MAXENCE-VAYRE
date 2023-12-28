import React, { useEffect, useState } from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import { formatBalance, formatChainAsNum } from '../utils' ;
import { redirect } from "react-router-dom";
import Navigation from "../components/Navigation";



let injectedProvider = false;

if (typeof window.ethereum !== 'undefined') {
  injectedProvider = true;
  console.log(window.ethereum);
}

const SepoliaChainId = '0xaa36a7';

const isSepoliaChain = (chainId) => {
  return chainId === SepoliaChainId;
};

const Chaininfo = () => {
  const [hasProvider, setHasProvider] = useState(null)
  const initialState = { accounts: [], balance: "", chainId: "" }            
  const [wallet, setWallet] = useState(initialState) 
  

  useEffect(() => {
    const getProvider = async () => {
      const provider = await detectEthereumProvider({ silent: true })
      setHasProvider(Boolean(provider))
    }

    getProvider()
  }, [])

  

  const updateWallet = async (accounts) => {
    const balance = formatBalance(await window.ethereum.request({  
      method: "eth_getBalance",                                     
      params: [accounts[0], "latest"],                               
    }))                                                             
    const chainId = await window.ethereum.request({                 
      method: "eth_chainId",                                         
    })                                                               
    setWallet({ accounts, balance, chainId })

    if (!isSepoliaChain(chainId)) {
      console.log('updateWallet - NOT SEPOLIA')
      window.location.href = "/error";
    }
  };
                                             

  const handleConnect = async () => {               
    let accounts = await window.ethereum.request({  
      method: "eth_requestAccounts",                
    })
    console.log('handleConnect - acccounts', accounts);                                             
    updateWallet(accounts)                          
  }  

  return (
    <div>
      <Navigation/>
     
      <div className="Chaininfo">
        <h2>Injected Provider {injectedProvider ? 'DOES' : 'DOES NOT'} Exist</h2>
        { hasProvider &&                               
        <button onClick={handleConnect}>Connect MetaMask</button>
        
      }
      
      { wallet.accounts.length > 0 &&               
      <>
        <div>Wallet Accounts: { wallet.accounts[0] }</div>
        <div>Wallet Balance: {wallet.balance}</div>                   
        <div>Hex ChainId: {wallet.chainId}</div>                      
        <div>Numeric ChainId: {formatChainAsNum(wallet.chainId)}</div> 
      </>
      }
      </div>
    </div>
  );
};

export default Chaininfo;
