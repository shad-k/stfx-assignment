import { Investor } from "../../types";
import { PROFILE_URL_BASE } from "../../constants";

interface Props {
  investors: Investor[];
}

function InvestorsAvatarsList({ investors }: Props) {
  const investorsSubset = investors.slice(0, 5);

  return (
    <div className="flex items-center -space-x-3 flex-1 ml-3">
      {investorsSubset.map((investor) => {
        return (
          <a
            href={`${PROFILE_URL_BASE}${investor.name}`}
            target="_blank"
            key={investor.address}
          >
            <img
              src={investor.avatar || "/defaultAvatar.png"}
              className="w-10 h-10 rounded-full"
            />
          </a>
        );
      })}
      <button
        data-modal-target="investorsModal"
        data-modal-toggle="investorsModal"
        className="flex items-center justify-center w-8 h-8 text-xs font-medium text-white bg-[#151922] border border-white/10 rounded-xl hover:bg-gray-600"
        type="button"
        // onClick={() => setOpenInvestorsList(true)}
      >
        +{investors.length - 5}
      </button>
      <div
        id="investorsModal"
        tabIndex={-1}
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-hidden md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative w-full max-w-2xl max-h-full rounded overflow-hidden">
          <div className="relative bg-gray-700 rounded-lg shadow h-[400px] overflow-auto">
            <div className="flex items-start justify-between p-4 border-b">
              <h3 className="text-xl font-semibold text-white">Investors</h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                data-modal-hide="investorsModal"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <div className="p-6 space-y-4 h-full">
              {investors.map((investor) => {
                return (
                  <a
                    href={`${PROFILE_URL_BASE}${investor.name}`}
                    target="_blank"
                    key={investor.address}
                    className="flex items-center"
                  >
                    <img
                      src={investor.avatar || "/defaultAvatar.png"}
                      className="w-10 h-10 border-2 border-white rounded-full mr-2"
                    />
                    <div>{investor.name}</div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvestorsAvatarsList;
