import { useState } from "react";

export const Index = () => {
  const [address, setAddress] = useState("");

  const createNFT = () => {
    console.log("Creating NFT for address:", address);
    // Here, you would add the logic to create the NFT using your desired method.
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center ">
      <div className="flex w-1/2 flex-col items-center text-center p-4 rounded-md">
        <label
          htmlFor="address"
          className="block text-sm font-medium text-gray-700"
        >
          Enter Address
        </label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="mt-2 w-full p-2 border rounded shadow-sm"
        />
      </div>
      <button
        onClick={createNFT}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 rounded"
      >
        Create NFT
      </button>
    </div>
  );
};

export default Index;
