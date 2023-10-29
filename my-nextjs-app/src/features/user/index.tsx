// pages/user/index.tsx

import { useState } from "react";

const Index = () => {
  const [nftTicket, setNftTicket] = useState("");
  const [records, setRecords] = useState<string[]>([]);

  const fetchRecords = () => {
    console.log("Fetching records for NFT ticket:", nftTicket);

    // Here, you would typically fetch the records associated with the NFT ticket.
    // For demonstration purposes, we'll just use a static example.
    setRecords(["Record 1 for NFT", "Record 2 for NFT"]);
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center p-4">
        <label
          htmlFor="nftTicket"
          className="block text-sm font-medium text-gray-700"
        >
          Enter NFT Ticket
        </label>
        <input
        type="text"
          id="nftTicket"
          value={nftTicket}
          onChange={(e) => setNftTicket(e.target.value)}
          className="mt-1 block w-full p-2 border rounded-md"
        />
      </div>

      <button
        onClick={fetchRecords}
        className="px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-blue-500 "
      >
        Show Records
      </button>

      <div className="py-1">
        <ul>
          {records.map((record, index) => (
            <li key={index} className="border-b py-1">
              {record}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Index;
