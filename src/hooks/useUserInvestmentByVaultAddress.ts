import userData from "../mockData/user";
import { UserInvestment } from "../types";

export default (vaultAddress: string): UserInvestment | undefined => {
  return userData.user.investments.find(
    ({ address }) => address === vaultAddress
  );
};
