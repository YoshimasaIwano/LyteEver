import Web3 from "web3";

let web3: Web3;

if (
  typeof window !== "undefined" &&
  typeof (window as any).ethereum !== "undefined"
) {
  // We're in the browser and metamask is running
  web3 = new Web3((window as any).ethereum);
} else {
  // We're on the server or the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/v3/YOUR_INFURA_KEY" // You can switch to mainnet or other testnets
  );
  web3 = new Web3(provider);
}

export default web3;
