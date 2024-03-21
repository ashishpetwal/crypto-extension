import { useState } from "react";

const Filter = ({positive, setPositive}) => {

    const toggleGainer = () => {
        setPositive(true);
    }

    const toggleLoser = () => {
        setPositive(false);
    }

    return (
      <div className="flex mx-auto items-center border rounded-full max-w-48 font-medium text-lg mt-4">
        <button
          onClick={toggleGainer}
          className={`w-[50%] ${
            positive ? "bg-green-200 shadow-lg" : "bg-slate-200"
          } text-center border rounded-full`}
        >
          Gainers
        </button>
        <button
          onClick={toggleLoser}
          className={`w-[50%] ${
            !positive ? "bg-red-200 shadow-lg" : "bg-slate-200"
          } text-center border-2 rounded-full`}
        >
          Losers
        </button>
      </div>
    );
}

export default Filter;