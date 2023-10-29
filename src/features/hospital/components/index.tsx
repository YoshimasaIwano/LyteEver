import { useState } from "react";
import { Record } from "@/types";
import React from "react";
import { useConversion } from "@/hooks/useConversion";
import { useRouter } from "next/router";
import { useAuthContext } from "@/hooks/useAuthContext";
import forge from "node-forge";
import axios from "axios";

export const Index: React.FC = () => {
  const [record, setRecord] = useState<Record>({
    name: "",
    id: "",
    dateOfbirth: "",
    countryOfbirth: "",
    medHistory: "",
  });
  const auth = useAuthContext();
  const isConnected = auth?.user !== undefined;

  const mutation = useConversion();
  const router = useRouter();

  const handleSubmitRecord = async () => {
    const text = JSON.stringify(record);
    try {
      // Convert the record using useConversion
      const response = await mutation.mutateAsync(text);

      // Check the response if necessary, for example:
      if (response && response.content) {
        // Use the response data to create the NFT

        const keypair = forge.pki.rsa.generateKeyPair({ bits: 2048 });
        const publicKey = forge.pki.publicKeyToPem(keypair.publicKey);
        const privateKey = forge.pki.privateKeyToPem(keypair.privateKey);

        localStorage.setItem("privateKey", privateKey);

        const encrypted = forge.pki.publicKeyFromPem(publicKey);
        const encryptedBytes = forge.util.encodeUtf8(response.content);
        const encryptedBuffer = encrypted.encrypt(encryptedBytes);
        const encryptedString = forge.util.encode64(encryptedBuffer);
        const nftResponse = await createNFT(encryptedString); // Replace with your NFT creation function

        // Check the nftResponse if necessary and decide if you should navigate:
        if (nftResponse && nftResponse.success) {
          // Replace condition based on your actual response structure
          // Redirect after successful NFT creation
          router.push("/");
        } else {
          // Handle NFT creation error
        }
      }
    } catch (error) {
      // Handle error (for example, show an error message to the user)
    }
  };

  const createNFT = async (data: string) => {
    // Replace with your NFT creation function
    const response = await axios.post(
      `https://lyteeverleo.vercel.app/api/mintHT/${process.env.NEXT_PUBLIC_PUBLIC_KEY}`,
      { data }
    );
    if (response.status === 200) {
      return { success: true };
    } else {
      return { success: false };
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center ">
      <div className="lg:w-2/3 flex flex-wrap justify-between p-2 rounded-md">
        {[
          {
            label: "Name",
            value: record.name,
            setter: (value: string) =>
              setRecord((prev) => ({ ...prev, name: value })),
            placeholder: "FirstName LastName",
          },
          {
            label: "ID",
            value: record.id,
            setter: (value: string) =>
              setRecord((prev) => ({ ...prev, id: value })),
            placeholder: "e.g.) 1234",
          },
          {
            label: "Date of Birth",
            value: record.dateOfbirth,
            setter: (value: string) =>
              setRecord((prev) => ({
                ...prev,
                dateOfbirth: value,
              })),
            placeholder: "e.g.) 12/17/2023",
          },
          {
            label: "Country of Birth",
            value: record.countryOfbirth,
            setter: (value: string) =>
              setRecord((prev) => ({
                ...prev,
                countryOfbirth: value,
              })),
            placeholder: "e.g.) U.S.A",
          },
          {
            label: "Medical History",
            value: record.medHistory,
            setter: (value: string) =>
              setRecord((prev) => ({
                ...prev,
                medHistory: value,
              })),
            placeholder:
              "Enter list of known diseases, treatments, and vaccines with dates separated by a comma",
            isTextarea: true, // new property to identify this as a textarea
          },
        ].map((field, idx) => (
          <div key={idx} className="mb-2 w-full px-2">
            <label
              htmlFor={field.label}
              className="block text-sm font-medium text-gray-700"
            >
              {field.label}
            </label>
            {field.isTextarea ? (
              <textarea
                id={field.label}
                value={field.value}
                onChange={(e) => field.setter(e.target.value)}
                placeholder={field.placeholder || ""}
                className="mt-2 w-full p-2 border rounded shadow-sm"
                rows={6} // or adjust as needed
              />
            ) : (
              <input
                type="text"
                id={field.label}
                value={field.value}
                onChange={(e) => field.setter(e.target.value)}
                placeholder={field.placeholder || ""}
                className="mt-2 w-full p-2 border rounded shadow-sm"
              />
            )}
          </div>
        ))}
      </div>
      <button
        disabled={!isConnected}
        onClick={handleSubmitRecord}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded mt-4"
      >
        Create NFT
      </button>
    </div>
  );
};

export default Index;
