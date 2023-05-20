import React from "react";

import VaultStatusStepper from "./VaultStatusStepper";
import { VaultStatus } from "../types";

function Invest() {
  const [vaultStatus, setVaultStatus] = React.useState(VaultStatus.Raising);

  return (
    <div className="flex flex-col gap-[10px] max-w-xs w-full">
      <VaultStatusStepper vaultStatus={vaultStatus} />
    </div>
  );
}

export default Invest;
