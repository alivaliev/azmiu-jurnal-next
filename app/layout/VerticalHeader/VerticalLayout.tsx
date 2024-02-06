import React from "react";
import Image from "next/image";
import Link from "next/link";

function VerticalLayout() {
  return (
    <div>
      <div className="w-[250px]  bg-[#0C4384] h-[100vh] ">
        <Link href={"/"}>
          <Image
            className="pt-5"
            src="/logo.png"
            width={200}
            height={200}
            alt=""
          />
        </Link>
        <div className="p-5">
          <Link className="mt-5 block" href={"/lessonschedule"}>Dərs Cədvəli</Link>
          <Link className="mt-3 block" href={"/lessonschedule"}>Dərs Cədvəli</Link>
          <Link className="mt-3 block" href={"/lessonschedule"}>Dərs Cədvəli</Link>
        </div>
      </div>
    </div>
  );
}

export default VerticalLayout;
