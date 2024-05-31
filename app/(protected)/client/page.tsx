"use client";
import React from "react";
import { UserInfo } from "@/components/user-info";
import { useCurrentSession } from "@/hooks/use-current-user";

const ClientPage = () => {
  const { session, status } = useCurrentSession();

  return (
    <div>
      <UserInfo user={session?.user} label="Client Component" />
    </div>
  );
};

export default ClientPage;
