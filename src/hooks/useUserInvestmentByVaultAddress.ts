import userData from "../mockData/user";
import { UserInvestment } from "../types";

// hook to fetch a user's invesment by vault address

export default (vaultAddress: string): UserInvestment | undefined => {
  return userData.user.investments.find(
    ({ address }) => address === vaultAddress
  );
};
