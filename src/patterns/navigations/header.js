import React, { useState } from "react";

//importing pattern stylings
import "../../styles/patterns/navigations/header.css";

//importing components
import { Button, Link, Logo, Icon } from "../../components/";

//importing sidebar
import Sidebar from "./sidebar";

//importing media assets
import logo from "../../assets/brandings/logo/logo.svg";
import wallet from "../../assets/icons/wallet.svg";
import hamburger from "../../assets/icons/hamburger.svg";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from "web3";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [provider, setProvider] = useState();

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const connect = async () => {
    //  Create WalletConnect Provider
    const Provider = new WalletConnectProvider({
      infuraId: "5eee22163f644a2caebb48fb76f3cce0"
    });

    //  Enable session (triggers QR Code modal)
    await provider.enable();
    setProvider(Provider);
  };

  const getAddress = async () => {
    await connect();
    const web3 = new Web3(provider);
    const get = await web3.eth.getAccounts();
    console.log(get);
  };

  const renderLinks = (
    <div className="nav-links">
      <Link name="Home" path="/" />
      <Link name="Birds" path="/birds" />
      <Link name="Shop" path="/shop" />
      <Link name="Nesting" path="/nesting" />
      <Link name="Earn" path="/earn" />
      <Link name="Feeding" path="/feeding" />
      <Link name="Upcoming" path="/upcoming" />
    </div>
  );
  return (
    <div className="header">
      <Logo src={logo} className="logo" />
      {renderLinks}
      <Button variant="btnIcon" onClick={getAddress}>
        <Icon src={wallet} style={{ marginRight: "10px" }} />
        connect wallet
      </Button>
      <div className="hamburger" onClick={toggle}>
        <Icon src={hamburger} />
      </div>
      {isOpen ? <Sidebar toggle={toggle} /> : null}
    </div>
  );
};

export default Header;
