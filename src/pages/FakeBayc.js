import { useState, useEffect } from 'react';
import Web3 from 'web3';
import Navigation from '../components/Navigation.js';



function FakeBayc(){

    // state zone 
    const [supply, Setsupply] = useState(null); 
    const [name, Setname] = useState(null); 
    const [message, Setmessage] = useState(null); 

    //contract zone 
    const contract_abi = require("../ABI.js").ABI.abi; 
    const contract_address = "0x1dA89342716B14602664626CD3482b47D5C2005E"; 
    const success = () => {
        console.log("Creation Token OK");
        Setmessage("Création Token OK");
    }; 
    
    // declare the contract
    let web3 = new Web3(window.ethereum);
    var contract = new web3.eth.Contract(contract_abi, contract_address);
    
     useEffect(()=>{
        GetSupplyAndName(); 
     })
    
    async function GetSupplyAndName(){
     
        let a = await contract.methods.tokenCounter().call();
        console.log("a = ", a)
        Setsupply(a + ''); 
        let b = await contract.methods.name().call();
        Setname(b); 
    }
    
    async function MintNft(){
        Setmessage("");
        const accounts = await window.ethereum.request({method: 'eth_requestAccounts' }); 
        console.log('MintNft - accounts', accounts);
        await contract.methods.claimAToken().send({from: accounts[0]}).then(success); 
        
    }
    
    
        return(
            <div>
                <Navigation/>
                
            <h1>Instruction</h1>
            <div>Click on the 'Mint' button to get a nft, then wait the success message !</div>
            <br></br>
            <br></br>
            <div className="Info">Name : {name}</div>
            <div className="Info">Supply : {supply}</div>
            <button className ="Click" onClick={MintNft}>Mint</button>
            <div> {message} </div>
            
            </div>
            
        )
    }
    
    export default FakeBayc; 