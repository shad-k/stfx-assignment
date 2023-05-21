import React from "react";
import { NumberFormatter } from "../../utils";

function MarketOrderForm() {
  const [amount, setAmount] = React.useState<number>(0);

  return (
    <form className="w-full mt-3" onSubmit={(e) => e.preventDefault()}>
      <div className="bg-field py-1.5 px-2 rounded flex flex-col w-full">
        <label
          htmlFor="amount"
          className="flex items-center justify-between text-xs font-normal text-white/50"
        >
          <span>Pay {NumberFormatter.format(amount ?? 0)} USD</span>
          <span>Price 1,245.64</span>
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
          <span className="bg-transparent text-sm font-medium text-white">
            USDC
          </span>
        </div>
      </div>
      <button
        type="submit"
        className="mt-3 bg-primary-green/20 hover:bg-primary-green/30 border border-primary-green text-primary-green rounded-lg h-10 w-full font-extrabold text-sm"
      >
        Create Market Order
      </button>
    </form>
  );
}

export default MarketOrderForm;
