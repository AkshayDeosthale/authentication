import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import React from "react";

const dashboard = () => {
  const { data: session, status } = useSession();
  console.log(session);

  return (
    <div className="text-white h-96 w-96 border-green-500 rounded-xl border-4 flex flex-col space-y-10 p-10">
      {session && <div>You are logged in as {session?.user?.name}</div>}
      {session && (
        <div>You are logged in with the email ID : {session?.user?.email}</div>
      )}
      <button onClick={() => signOut({ callbackUrl: "/" })}>Log out now</button>
      <div>
        <img src={session?.user?.image} className="rounded-full" />
      </div>
    </div>
  );
};

export default dashboard;
