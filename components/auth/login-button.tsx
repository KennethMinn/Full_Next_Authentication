"use client";

import React, { ReactNode } from "react";
import { useRouter } from "next/navigation";

type LoginButtonProps = {
  children: ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
};
const LoginButton = ({
  children,
  mode = "redirect",
  asChild,
}: LoginButtonProps) => {
  const router = useRouter();

  const onClick = () => {
    router.push("/auth/login");
  };

  if (mode === "modal") return <span>modal mode</span>;

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};

export default LoginButton;
