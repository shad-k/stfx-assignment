import { IoCopyOutline } from "react-icons/io5";
import { FaTelegramPlane, FaTwitter } from "react-icons/fa";

import {
  createTelegramShareURL,
  createTwitterShareURL,
  createVaultURL,
} from "../utils";
import React from "react";

interface Props {
  vaultId: number;
}

function ShareSTVButton({ vaultId }: Props) {
  const vaultURL = createVaultURL(vaultId);
  const [copying, setCopying] = React.useState(false);
  const copySTVURL = () => {
    setCopying(true);
    navigator.clipboard.writeText(vaultURL).then(
      () => {
        console.log("Content copied to clipboard");
        setTimeout(() => {
          setCopying(false);
        }, 3000);
      },
      () => {
        console.error("Failed to copy");
        setTimeout(() => {
          setCopying(false);
        }, 3000);
      }
    );
  };

  return (
    <>
      <button
        data-modal-target="shareModal"
        data-modal-toggle="shareModal"
        type="button"
        className="w-full rounded-xl bg-section hover:bg-white/10 flex items-center justify-center px-3 py-2 font-extrabold text-sm text-primary-green h-10 gap-1"
      >
        <img src="/share.svg" />
        Share STV
      </button>

      <div
        id="shareModal"
        tabIndex={-1}
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative w-full max-w-sm max-h-full">
          {/* <!-- Modal content --> */}
          <div className="relative bg-slate-800 text-white rounded-lg shadow">
            {/* <!-- Modal header --> */}
            <div className="flex items-start justify-between p-4 rounded-t">
              <h3 className="w-full text-center text-xl font-semibold">
                Share STV
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                data-modal-hide="shareModal"
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
            {/* <!-- Modal body --> */}
            <div className="p-6">
              <div className="bg-white/5 hover:bg-white/10 border border-white/30 text-white/50 rounded-lg h-10 w-full flex items-center justify-between p-4">
                <span>{vaultURL}</span>

                <button onClick={copySTVURL} disabled={copying}>
                  {copying ? (
                    <span className="text-xs text-primary-green">Copied</span>
                  ) : (
                    <IoCopyOutline />
                  )}
                </button>
              </div>

              <a
                href={createTelegramShareURL(vaultURL)}
                target="_blank"
                className="h-10 w-full border-2 border-white/10 flex items-center justify-center rounded-lg mt-6 mb-2"
              >
                <FaTelegramPlane className="mr-2" />
                Share on Telegram
              </a>
              <a
                href={createTwitterShareURL(vaultURL)}
                target="_blank"
                className="h-10 w-full border-2 border-white/10 flex items-center justify-center rounded-lg"
              >
                <FaTwitter className="mr-2" />
                Share on Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShareSTVButton;
