import { auth } from "@/auth";
import React from "react";

const Setting = async () => {
  const session = await auth();
  return <div>Setting Page</div>;
};

export default Setting;
