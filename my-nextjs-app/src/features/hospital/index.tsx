import { useState } from "react";

export const Index = () => {
  const [address, setAddress] = useState("");

  const createNFT = () => {
    console.log("Creating NFT for address:", address);
    // Here, you would add the logic to create the NFT using your desired method.
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex flex-col items-center text-center p-4 rounded-md">
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
          className="mt-2 w-2/3 p-2 border rounded-md shadow-sm"
        />
      </div>

      <div className="w-2/3 p-2 rounded-full bg-gradient-to-r from-gray-200 to-gray-300">
        <button
          onClick={createNFT}
          className="w-full p-4 bg-purple-500 text-white font-semibold rounded-md transition duration-300 ease-in-out hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
        >
          Create NFT
        </button>
      </div>
    </div>
  );
};


export default Index;
