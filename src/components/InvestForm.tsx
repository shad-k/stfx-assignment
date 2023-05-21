import React from "react";
import { NumberFormatter } from "../utils";

function InvestForm() {
  const [amount, setAmount] = React.useState<number>(0);
  const userBalance = 16340;

  return (
    <div className="w-full rounded-xl bg-section flex flex-col items-center justify-between px-3 py-2">
      <form className="w-full mt-3" onSubmit={(e) => e.preventDefault()}>
        <div className="bg-field py-1.5 px-2 rounded flex flex-col w-full">
          <label
            htmlFor="amount"
            className="flex items-center justify-between text-xs font-normal text-white/50"
          >
            <span>Invest</span>
            <span>Balance {NumberFormatter.format(userBalance)}</span>
          </label>
          <div className="flex items-center justify-between w-full mt-2">
            <input
              type="number"
              id="amount"
              placeholder="0"
              required
              value={amount}
              className="bg-transparent text-xl font-medium w-3/4 mr-1"
              onChange={(e) => {
                const value = (e.target as HTMLInputElement).value;
                setAmount(parseInt(value === "" ? "0" : value));
              }}
            />

            <button
              className="bg-transparent text-xs font-medium text-primary-green px-2 border-r border-white/10"
              onClick={() => setAmount(userBalance)}
            >
              max
            </button>
            <span className="bg-transparent text-sm font-medium text-white ml-2">
              USDC
            </span>
          </div>
        </div>

        <button
          type="submit"
          className="mt-3 bg-white/5 hover:bg-white/10 border border-white/30 text-white/50 rounded-lg h-10 w-full font-extrabold text-sm"
        >
          Invest
        </button>
      </form>
    </div>
  );
}

export default InvestForm;
