import React,{useState} from 'react'

import { Logo, Button, Link ,Icon} from '../../components'
import logo from '../../assets/logos/logo.svg'
import { Row, Section, Container } from '../../layouts'

import { section } from '../../styles/sheets/layouts'
import { Links } from '../../data/data'
import { link as linkStyle } from '../../styles/sheets/components'
import { Wallet } from '../../assets/assets'
import ethereum from 'ethereumjs-tx'
const Web3 = require("web3");

const ethEnabled = () => {
  if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider);
    window.ethereum.enable();
	return true
	
  }
  return false;
}
// async function ethEnabled() {
// 	const accounts = await ethereum.enable();
// 	const account = accounts[0];
// 	// do something with new account here
//   }
  
//   ethereum.on('accountsChanged', function (accounts) {
// 	getAccount();
//   })

// let ethenable=new Promise(function(myResovle,myReject)){
// 	if(ethEnabled == true){
// 		const accounts=await ethereum.request({method:'eth_requestAccounts'});
// 		const account=accounts[0];
// 		value=account;
// 	}
// }



//   const getAccounts =() =>{
// 	  if(ethEnabled == true){
// 		  var accounts=ethereum.request({method:'eth_requestAccounts'});
// 		  var account=accounts[0];
// 		  console.log(account);
// 	  }
//   }


function Header(props) {
	//const [value,changedValue]=useState('Connect Wallet')
	
	const renderlinks = (
		<Row>
			{Links.map((link) => (
				<Link
					style={{ ...linkStyle.default, margin: '0px 16px' }}
					key={link.id}
					to={link.to}>
					{link.name}
				</Link>
			))}
		</Row>
	)
	return (
		<Section
			style={{
				...section.default,
				height: '10vh',
				position: 'fixed',
				top: 0,
				left: 0,
				justifyContent: 'space-around',
				alignItems: 'center',
			}}>
			<Logo src={logo} />
			{renderlinks}
			<Button onClick={ethEnabled}
				
				type="btnIcon"><Icon src={Wallet} style={{marginRight:'12px'}}/>Connect Walet</Button>
		</Section>
	)
}

export default Header
