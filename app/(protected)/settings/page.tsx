import { logout } from "@/actions/logout";
import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import React from "react";

const Setting = async () => {
  const session = await auth();
  return (
    <div>
      <h1> Setting Page</h1>
      <form action={logout}>
        <Button>Sign out</Button>
      </form>
    </div>
  );
};

export default Setting;
