import Image from "next/image";
import { Button } from "@/components/ui/button";
import LoginButton from "@/components/auth/login-button";

export default function Home() {
  return (
    <main className=" flex h-full flex-col items-center justify-center bg-sky-500">
      <h1 className=" text-white font-bold text-6xl mb-5 drop-shadow-md">
        Authentication
      </h1>
      <LoginButton>
        <Button variant="secondary" size={"lg"}>
          Sign in
        </Button>
      </LoginButton>
    </main>
  );
}
