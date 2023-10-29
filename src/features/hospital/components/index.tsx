import { useState } from "react";
import { Record } from "@/types";
import React from "react";
import { useConversion } from "@/hooks/useConversion";
import { useRouter } from "next/router";

export const Index: React.FC = () => {
  const [record, setRecord] = useState<Record>({
    tokenid: "1234",
    name: "yoshi",
    id: "12",
    dateOfbirth: "12/17/1998",
    countryOfbirth: "Japan",
    medHistory: "covid-19 2/3/22, flu 2/3/22",
  });

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
        const nftResponse = await createNFT(response.content); // Replace with your NFT creation function

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
    return { success: true };
  }



  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center ">
      <div className="lg:w-2/3 flex flex-wrap justify-between p-2 rounded-md">
        {[
          {
            label: "Token ID (Patient ID)",
            value: record.tokenid,
            setter: (value: string) =>
              setRecord((prev) => ({ ...prev, tokenid: value })),
            placeholder: "e.g.) 1234",
          },
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
        onClick={handleSubmitRecord}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded mt-4"
      >
        Create NFT
      </button>
    </div>
  );
};

export default Index;
