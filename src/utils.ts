import {
  SHARE_STV_TELEGRAM_URL,
  SHARE_STV_TWITTER_URL,
  STV_BASE_URL,
} from "./constants";

export const USDFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export const NumberFormatter = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 0,
});

export const createTelegramShareURL = (stvUrl: string) => {
  return `${SHARE_STV_TELEGRAM_URL}&url=${stvUrl}`;
};

export const createTwitterShareURL = (stvUrl: string) => {
  return `${SHARE_STV_TWITTER_URL}${stvUrl}`;
};

export const createVaultURL = (vaultId: number) => {
  return `${STV_BASE_URL}${vaultId}`;
};
