"use client";
import React from "react";
import Link from "next/link";
import LogoLgImg from "@/public/assets/logo/meesra_logo_big.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";

const MeesraHomePage = () => {
  return (
    <div className="bg-m-blue h-screen w-full flex flex-col gap-5 justify-center items-center">
      <Image
        src={LogoLgImg}
        priority
        className="h-10 hidden sm:block"
        alt="logo"
      />
      <LoginButton>
        <Button variant="secondary">Login</Button>
      </LoginButton>
    </div>
  );
};

export default MeesraHomePage;
