import mockVaultsData from "../mockData/vaults";

// hook to fetch a vault by address

export default (vaultAddress: string) => {
  return mockVaultsData.vaults.find(({ address }) => address === vaultAddress);
};
