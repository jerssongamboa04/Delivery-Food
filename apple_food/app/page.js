"use client";
import { useRouter } from "next/navigation";
import CategoryList from "./_components/CategoryList";
import BussinesList from "./_components/BussinesList";
import { Button } from "../app/components/ui/button";

export default function Home() {
  const router = useRouter();

 
  return (
    <div>
      <CategoryList />
      <BussinesList/>
      {/* <Button>suscribete</Button> */}
    </div >
  );
}
