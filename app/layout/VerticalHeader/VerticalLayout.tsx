import React from "react";
import Image from "next/image";
import Link from "next/link";

function VerticalLayout() {
  return (
    <div>
      <div className="bg-[#151B54] h-[100vh] ">
        <Link href={"/"}>
          <Image
            className="pt-2 ml-2"
            src="/logo.png"
            width={250}
            height={250}
            alt=""
          />
        </Link>
        <div className="mt-2 p-5">
          <ul >
            <li>
              <Link
                className="text-[#C6C4D2] mt-3 block"
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
              <Link
                className="text-[#C6C4D2] mt-3 block"
                href={"/attendance"}
              >
                Davamiyyət (Online dərslər)
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
