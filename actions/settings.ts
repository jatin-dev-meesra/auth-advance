"use server";

import * as z from "zod";
import { db } from "@/lib/db";
import { SettingsSchema } from "@/schemas";
import { getUserById } from "@/data/user";
import { currentUser } from "@/lib/auth";

export const settings = async (values: z.infer<typeof SettingsSchema>) => {
  console.log(values);

  const user = await currentUser();

  if (!user) {
    return { error: "Unauthorized" };
  }

  const userId: any = user.id;
  const dbUser = await getUserById(userId);
  if (!dbUser) {
    return { error: "Unauthorized" };
  }

  await db.user.update({
    where: { id: dbUser.id },
    data: {
      name: values.name,
    },
  });

  return { success: "Setting Updated!" };
};
