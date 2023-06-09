import VaultStatusStepper from "./VaultStatusStepper";
import Investments from "./Investments";
import OrderForm from "./OrderForm";
import InvestForm from "./InvestForm";
import useVaultByAddress from "../hooks/useVaultByAddress";
import ShareSTVButton from "./ShareSTVButton";

function Invest() {
  const vault = useVaultByAddress("0x81900b4cd1a985738c3f4dcde2a5f1dac2ae858c");

  if (!vault) {
    return null;
  }

  return (
    <div className="flex flex-col gap-[10px] max-w-xs w-full">
      <VaultStatusStepper vaultStatus={vault.status} />
      <Investments
        investors={vault.investors}
        raised={vault.raised}
        target={vault.target}
        vaultAddress={vault.address}
      />
      <OrderForm />
      <InvestForm />

      <ShareSTVButton vaultId={vault.vaultId} />
    </div>
  );
}

export default Invest;
