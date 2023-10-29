import { useState } from "react";
import { Record } from "@/types";

export const Index = () => {
  const [record, setRecord] = useState<Record>({
    tokenid: "",
    name: "",
    id: "",
    dateOfbirth: "",
    countryOfbirth: "",
    medHistory: "",
  });

  const createNFT = () => {
    
    // Here, you would add the logic to create the NFT using your desired method.
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center ">
      <div className="w-1/2 flex flex-wrap justify-between p-2 rounded-md">
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
              "Enter list of known diseases, treatments, and vaccines separated by a comma",
            isTextarea: true, // new property to identify this as a textarea
          },
        ].map((field, idx) => (
          <div key={idx} className="mb-2 w-1/2 px-2">
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
                rows={4} // or adjust as needed
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
        onClick={createNFT}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded mt-4"
      >
        Create NFT
      </button>
    </div>
  );
};

export default Index;
