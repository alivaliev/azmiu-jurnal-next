import React from "react";
import Image from "next/image";
import Link from "next/link";

function VerticalLayout() {
  return (
    <div>
      <div className="bg-[#2B547E] h-[100vh] ">
        <Link href={"/"}>
          <Image
            className="pt-5 ml-6"
            src="/logo.png"
            width={200}
            height={200}
            alt=""
          />
        </Link>
        <div className="p-5">
          <ul>
            <li>
              <Link
                className="text-[#C6C4D2] mt-5 block"
                href={"/subject"}
              >
                Fənn
              </Link>
            </li>
            <li>
              <Link
                className="text-[#C6C4D2] mt-3 block"
                href={"/lessonschedule"}
              >
                Dərs cədvəli
              </Link>
            </li>
            <li>
              <Link
                className="text-[#C6C4D2] mt-3 block"
                href={"/onlinelesson"}
              >
                Online dərslər
              </Link>
            </li>
            <li>
              <Link className="text-[#C6C4D2] mt-3 block" href={"/profile"}>
                Profil
              </Link>
            </li>
            <li>
              <Link className="text-[#C6C4D2] mt-3 block" href={"/onlineexam"}>
                Online imtahan
              </Link>
            </li>
            <li>
              <Link className="text-[#C6C4D2] mt-3 block" href={"/writtenexam"}>
                Yazılı imtahan
              </Link>
            </li>
            <li></li>
            <Link className="text-[#C6C4D2] mt-3 block" href={"/lms"}>
              LMS
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default VerticalLayout;
