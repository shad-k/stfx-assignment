import { VaultStatus } from "../types";
import RaisingIcon from "./icons/RaisingIcon";
import LiveIcon from "./icons/LiveIcon";
import ClosedIcon from "./icons/ClosedIcon";

interface Props {
  vaultStatus: VaultStatus;
}

function VaultStatusStepper({ vaultStatus }: Props) {
  const isLiveActive = [VaultStatus.Live, VaultStatus.Closed].includes(
    vaultStatus
  );
  const isClosedActive = VaultStatus.Closed === vaultStatus;

  return (
    <ol className="w-full rounded-xl bg-section text-sm capitalize flex items-center justify-between px-3 py-2">
      {/* Raising */}
      <li className="flex items-center justify-between after:content-[''] after:w-[38px] after:h-[2px] after:border-b after:border-accent-yellow after:border-2 after:rounded-xl after:inline-block after:mx-4">
        <div className="flex flex-col items-center justify-center gap-1">
          <RaisingIcon fill="#FFC700" opacity={1} />
          <span className="text-white font-medium">Raising</span>
        </div>
      </li>

      {/* Live */}
      <li
        className={`flex items-center justify-between after:content-[''] after:w-[38px] after:h-[2px] after:border-b after:border-2 after:rounded-xl after:inline-block after:mx-4 ${
          isLiveActive ? "after:border-accent-yellow" : "after:border-white/30"
        }`}
      >
        <div className="flex flex-col items-center justify-center gap-1">
          <LiveIcon
            fill={isLiveActive ? "#FFC700" : "#FFFFFF"}
            opacity={isLiveActive ? 1 : 0.3}
          />
          <span
            className={`font-medium ${
              isLiveActive ? "text-white" : "text-white/30"
            }`}
          >
            Live
          </span>
        </div>
      </li>

      {/* Closed */}
      <li className="flex items-center justify-between">
        <div className="flex flex-col items-center justify-center gap-1">
          <ClosedIcon
            fill={isClosedActive ? "#FFC700" : "#FFFFFF"}
            opacity={isClosedActive ? 1 : 0.3}
          />
          <span
            className={`font-medium ${
              isClosedActive ? "text-white" : "text-white/30"
            }`}
          >
            Closed
          </span>
        </div>
      </li>
    </ol>
  );
}

export default VaultStatusStepper;
