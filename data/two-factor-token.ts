import { db } from "@/lib/db";

export const getTwoFactorTokenByToken = async (token: string) => {
  try {
    const towFactorToken = await db.twoFactorToken.findUnique({
      where: { token: token },
    });
    return towFactorToken;
  } catch (error) {
    return null;
  }
};

export const getTwoFactorTokenByEmail = async (email: string) => {
  try {
    const twoFactorToken = await db.twoFactorToken.findFirst({
      where: { email: email },
    });
    return twoFactorToken;
  } catch (error) {
    return null;
  }
};
