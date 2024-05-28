import { db } from "@/lib/db";

export const getPassworResetTokenByToken = async (token: string) => {
  try {
    const passwordResetToken = await db.passwordResetToken.findUnique({
      where: { token: token },
    });
    return passwordResetToken;
  } catch (error) {
    return null;
  }
};

export const getPassworResetTokenByEmail = async (email: string) => {
  try {
    const passwordResetToken = await db.passwordResetToken.findFirst({
      where: { email: email },
    });
    return passwordResetToken;
  } catch (error) {
    return null;
  }
};
