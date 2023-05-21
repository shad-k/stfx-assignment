import { Investor } from "../types";
import InvestmentProgress from "./InvestmentProgress";
import InvestorsAvatarsList from "./InvestorsAvatarsList";

interface Props {
  investors: Investor[];
  raised: number;
  target: number;
  vaultAddress: string;
}

function Investments({ investors, raised, target, vaultAddress }: Props) {
  return (
    <div className="w-full rounded-xl bg-section font-sm capitalize flex flex-col items-center justify-between px-3 py-2">
      <div className="flex items-center justify-between w-full">
        <span className="font-medium">Investors:</span>
        <InvestorsAvatarsList investors={investors} />
        <button>
          <img src="/ellipsis.svg" className="h-full" />
        </button>
      </div>

      <div className="w-full mt-2">
        <InvestmentProgress
          raised={raised}
          target={target}
          vaultAddress={vaultAddress}
        />
      </div>
    </div>
  );
}

export default Investments;
