"use client";

import { UserButton } from "@clerk/nextjs";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div> 
      <p>Jersson soy yo</p>
      <ChevronDown ></ChevronDown>
      <div className=" bg-green-900 w-20 borde rounded-sm solid 1px">
        <Link href="/about">ABOUT</Link>
        <UserButton afterSignOutUrl="/"/>
      </div>
    </div>
  );
}
