import React from "react";
import { Proizvod } from "@prisma/client";

const formatKey = (key: string) => {
  return key
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/^./, (str) => str.toUpperCase());
};

const ProductDetailsTable = ({ props }: { props: Proizvod }) => {

  const keysToIgnore = ["slika", "id", "description"];
  const entries = Object.entries(props).filter(([key]) => !keysToIgnore.includes(key));

  const half = Math.ceil(entries.length / 2);
  const firstHalf = entries.slice(0, half);
  const secondHalf = entries.slice(half);

  return (
    <div className="flex gap-20 rounded-[30px] bg-gray-100 justify-center ">
      {/* Prva tabela */}
      <table className="table-auto  border border-gray-300">
        <tbody>
          {firstHalf.map(([key, value]) => (
            <tr key={key}>
              <td className="capitalize font-semibold border px-4 py-2">{formatKey(key)}:</td>
              <td className="border px-4 py-2">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Druga tabela */}
      <table className="table-auto border border-gray-300">
        <tbody>
          {secondHalf.map(([key, value]) => (
            <tr key={key}>
              <td className="capitalize font-semibold border px-4 py-2">{formatKey(key)}:</td>
              <td className="border px-4 py-2">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductDetailsTable;
