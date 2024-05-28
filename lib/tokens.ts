import { getVerificationTokenByEmail } from "@/data/verification-token";
import { getPassworResetTokenByEmail } from "@/data/password-reset-token";
import { v4 as uuidv4 } from "uuid";
import { db } from "@/lib/db";

export const generateVerificationToken = async (email: string) => {
  const token = uuidv4();
  //   token for 1 hour only
  const expires = new Date(new Date().getTime() + 3600 * 1000);

  const existingToken = await getVerificationTokenByEmail(email);
  if (existingToken) {
    await db.verificationToken.delete({
      where: {
        id: existingToken.id,
      },
    });
  }

  const verificationToken = await db.verificationToken.create({
    data: {
      email: email,
      token: token,
      expires: expires,
    },
  });

  return verificationToken;
};

export const generatePasswordResetToken = async (email: string) => {
  const token = uuidv4();
  //   token for 1 hour only
  const expires = new Date(new Date().getTime() + 3600 * 1000);

  const existingToken = await getPassworResetTokenByEmail(email);
  if (existingToken) {
    await db.passwordResetToken.delete({
      where: {
        id: existingToken.id,
      },
    });
  }

  const passwordResetToken = await db.passwordResetToken.create({
    data: {
      email: email,
      token: token,
      expires: expires,
    },
  });

  return passwordResetToken;
};
