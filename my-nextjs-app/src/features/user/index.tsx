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
    <>
      <div className="space-y-4">
        <div>
          <label
            htmlFor="nftTicket"
            className="block text-sm font-medium text-gray-700"
          >
            Enter NFT Ticket
          </label>
          <textarea
            id="nftTicket"
            value={nftTicket}
            onChange={(e) => setNftTicket(e.target.value)}
            rows={4}
            className="mt-1 block w-full p-2 border rounded-md"
          />
        </div>

        <button
          onClick={fetchRecords}
          className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Show Records
        </button>

        <div>
          <h2 className="text-xl mb-2">Records:</h2>
          <ul>
            {records.map((record, index) => (
              <li key={index} className="border-b py-1">
                {record}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Index;
