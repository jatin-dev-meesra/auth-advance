"use server";

import { signOut } from "@/auth";

export const logout = async () => {
  //we can perform some server stuff before logout here
  await signOut();
};
