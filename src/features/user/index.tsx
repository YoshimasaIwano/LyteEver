import { useState, useEffect } from "react";
import { Record } from "@/types";
import { useAuthContext } from "@/hooks/useAuthContext";
import forge from "node-forge";

const Index = () => {
  const [nftTicket, setNftTicket] = useState("");
  const [records, setRecords] = useState<Record[]>([]);
  const auth = useAuthContext();
  const isConnected = auth?.user !== undefined;

  useEffect(() => {
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
    setRecords(decryptedRecord);
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center">
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
