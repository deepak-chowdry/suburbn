import Navbar from "@/Components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
     <Navbar />
      <div className="flex items-center justify-center h-screen">
        Welcome to suburbn.
      </div>
    </>
  );
}
