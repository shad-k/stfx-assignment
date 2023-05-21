import useUserInvestmentByVaultAddress from "../../hooks/useUserInvestmentByVaultAddress";
import { USDFormatter } from "../../utils";

interface Props {
  raised: number;
  target: number;
  vaultAddress: string;
}

function InvestmentProgress({ raised, target, vaultAddress }: Props) {
  const userInvestment = useUserInvestmentByVaultAddress(vaultAddress);

  return (
    <div className="flex flex-col w-full justify-between space-y-2">
      <div className="w-full text-xs flex items-center">
        <span className="text-primary-green">
          {USDFormatter.format(raised)}
        </span>
        <span className="flex-1 text-white/50 mx-1">
          (your{" "}
          {USDFormatter.format(userInvestment ? userInvestment.amount : 0)})
        </span>
        <span className="">{USDFormatter.format(target)}</span>
      </div>
      <div className="w-full bg-[#4A4B4F]/40 rounded-full h-[6px]">
        <div
          className="bg-primary-green h-[6px] rounded-full"
          style={{ width: `${(raised / target) * 100}%` }}
        ></div>
      </div>
    </div>
  );
}

export default InvestmentProgress;
