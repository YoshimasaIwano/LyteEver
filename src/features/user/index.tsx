import { useState } from "react";
import { Record } from "@/types";
import forge from "node-forge";
const Index = () => {
  const [nftTicket, setNftTicket] = useState("");
  const [records, setRecords] = useState<Record[]>([]);

  const fetchRecords = () => {
    // console.log("Fetching records for NFT ticket:", nftTicket);
    // setRecords([
    //   {
    //     tokenid: "1",
    //     name: "John Doe",
    //     id: "1234",
    //     dateOfbirth: "01/01/1990",
    //     countryOfbirth: "USA",
    //     medHistory: "Flu, COVID-19 Vaccine",
    //   },
    //   {
    //     tokenid: "2",
    //     name: "Jane Smith",
    //     id: "5678",
    //     dateOfbirth: "05/12/1985",
    //     countryOfbirth: "Canada",
    //     medHistory: "Chickenpox, Flu Vaccine",
    //   },
    // ]);
    const privateKey = localStorage.getItem("privateKey");
    if (!privateKey) {
      console.log("Private Key not found. No medical Records available yet");
      return;
    }
    const encryptedBytes = forge.util.decode64(nftTicket);
    const decrypted = forge.pki.privateKeyFromPem(privateKey);
    const decryptedBuffer = decrypted.decrypt(encryptedBytes);
    const decryptedString = forge.util.decodeUtf8(decryptedBuffer);

    const decryptedRecord = JSON.parse(decryptedString);

  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center">
      <div className="flex w-1/2 flex-col items-center justify-center p-4">
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
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-blue-500 "
      >
        Show Records
      </button>

      <div
        className="mt-2 w-1/2 rounded-md bg-slate-100"
        style={{ maxHeight: "300px", overflowY: "scroll" }}
      >
        <ul>
          {records.map((record, index) => (
            <li key={index} className="border-4 p-4">
              <div className="flex flex-col space-y-2">
                <div className="flex justify-between">
                  <span className="font-semibold">Token ID:</span>
                  <span>{record.tokenid}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Name:</span>
                  <span>{record.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">ID:</span>
                  <span>{record.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Date of Birth:</span>
                  <span>{record.dateOfbirth}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Country of Birth:</span>
                  <span>{record.countryOfbirth}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Medical History:</span>
                  <span>{record.medHistory}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Index;
