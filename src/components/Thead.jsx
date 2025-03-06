import React from "react";

export default function Thead({children}) {
  return (
    <th
      scope="col"
      className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize rounded-t-xl"
    >
      {children}
    </th>
  );
}
