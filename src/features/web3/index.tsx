import { useEffect, useState } from "react";
import web3 from "@/utils/web3";

const EthereumComponent: React.FC = () => {
  const [account, setAccount] = useState<string | null>(null);

  useEffect(() => {
    const loadAccount = async () => {
      const accounts = await web3.eth.getAccounts();
      console.log(accounts);
      setAccount(accounts[0]);
    };

    loadAccount();
  }, []);


  return <div>{account ? `Your account: ${account}` : "Not connected"}</div>;
};

export default EthereumComponent;
