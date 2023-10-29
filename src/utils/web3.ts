import Web3 from 'web3';

let web3: Web3;

if (typeof window !== 'undefined' && typeof (window as any).ethereum !== 'undefined') {
    // We're in the browser and metamask is running
    web3 = new Web3((window as any).ethereum);
} else {
    // We're on the server or the user is not running metamask
    // Use the Sepolia endpoint provided by your provider. In this case, I'll use Infura as an example:
    const provider = new Web3.providers.HttpProvider(
        'https://sepolia.infura.io/v3/69c296b88e394df1ad00a6170beb6cb0'
    );
    web3 = new Web3(provider);
}

export default web3;
