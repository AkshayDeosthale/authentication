import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";

export default function Home() {
  const { data: session, status } = useSession();

  const renderButton = () => {
    if (session) {
      return (
        <button
          className="border-2 border-black p-2 rounded-lg"
          onClick={() => signOut()}
        >
          sign out now
        </button>
      );
    } else {
      return (
        <button
          className="border-2 border-black p-2 rounded-lg"
          onClick={() =>
            signIn("google", { callbackUrl: "http://localhost:3000/dashboard" })
          }
        >
          Sign in here
        </button>
      );
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Authentication app</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <button
        className="border-4  p-2 rounded-full h-48 w-48 border-green-500 text-white hover:bg-blue-900 "
        onClick={() =>
          signIn("google", { callbackUrl: "http://localhost:3000/dashboard" })
        }
      >
        Sign in here
      </button>
    </div>
  );
}
