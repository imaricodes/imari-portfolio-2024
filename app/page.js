import Image from "next/image";
import cn from "../lib/utils";
import Sidebar from "@/components/ContactsSidebar";
import Main from "@/components/Main";

export default function Page() {
  return (
    <div className="flex h-screen w-full">
      <div className="h-full px-10 pt-10">
        <Sidebar />
      </div>
      <div className=" w-full">
        <Main />
      </div>
    </div>
  );
}
