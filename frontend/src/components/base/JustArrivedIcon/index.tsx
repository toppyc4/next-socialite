"use client";
import { useState } from "react";

export const JustArrivedIcon = ({
  key,
  interestObj,
}: {
  key: string;
  interestObj: { name: string; selected: boolean; interest_type: string };
}) => {
  const [interest, setInterest] = useState(interestObj);
  return (
    <button
      key={key}
      className={`p-2 mr-2 my-2 rounded-3xl font-semibold text-md md:text-xl ${
        interest.selected
          ? "bg-neutral-500 hover:bg-neutral-400 text-black "
          : "bg-neutral-300 hover:bg-neutral-400 hover:text-neutral-600  cursor-pointer text-gray-400"
      } `}
      onClick={() => {
        setInterest({
          ...interest,
          selected: !interest.selected,
        });
      }}
    >
      {interestObj.name}
    </button>
  );
};
