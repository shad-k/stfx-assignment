import React from "react";
import { NumberFormatter } from "../../utils";

function LimitOrderForm() {
  const [amount, setAmount] = React.useState<number>(0);

  return (
    <form className="w-full mt-3" onSubmit={(e) => e.preventDefault()}>
      <div className="bg-field py-1.5 px-2 rounded flex flex-col w-full">
        <label htmlFor="amount" className="text-xs font-normal text-white/50">
          Pay: {NumberFormatter.format(amount ?? 0)} USD
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

      <div className="bg-field py-1.5 px-2 rounded flex flex-col w-full mt-3">
        <label
          htmlFor="price"
          className="flex items-center justify-between text-xs font-normal text-white/50"
        >
          <span>Price</span>
          <span>Mark 1,245.64</span>
        </label>
        <div className="flex items-center justify-between w-full mt-2">
          <input
            type="number"
            id="price"
            placeholder="0"
            required
            defaultValue={1299}
            className="bg-transparent text-xl font-medium w-3/4 mr-1"
          />
          <span className="bg-transparent text-sm font-medium text-white">
            USD
          </span>
        </div>
      </div>

      <table className="w-full mt-3 text-white/50 text-xs h-[60px]">
        <tbody>
          <tr>
            <td>Leverage</td>
            <td className="text-right text-white font-semibold">10.00x</td>
          </tr>
          <tr>
            <td>Liq. Price</td>
            <td className="text-right text-white font-semibold">$1048.24</td>
          </tr>
          <tr>
            <td>Current Price</td>
            <td className="text-right text-white font-semibold">$1245.64</td>
          </tr>
        </tbody>
      </table>

      <button
        type="submit"
        className="mt-3 bg-primary-green/20 hover:bg-primary-green/30 border border-primary-green text-primary-green rounded-lg h-10 w-full font-extrabold text-sm tracking-wider"
      >
        Create Limit Order
      </button>
    </form>
  );
}

export default LimitOrderForm;
