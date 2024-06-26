"use client";
import { UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import CategoryList from "./_components/CategoryList";
import BussinesList from "./_components/BussinesList";

export default function Home() {
  const router = useRouter();

 
  return (
    <div>
      <CategoryList />
      <BussinesList/>
    </div >
  );
}
