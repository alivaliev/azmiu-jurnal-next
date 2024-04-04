import React from "react";
import Image from "next/image";
import Link from "next/link";
import './VerticalLayout.scss'
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
import LaptopIcon from '@mui/icons-material/Laptop';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import ModeIcon from '@mui/icons-material/Mode';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import { blue, brown, grey, red } from "@mui/material/colors";

function VerticalLayout() {
  return (
    <div>
      <div className="bg-[#151B54] w-[15%] h-[100vh] fixed">
        <Link href={"/"}>
          <Image
            className="pt-2 "
            src="/logo.png"
            width={250}
            height={250}
            alt=""
          />
        </Link>
        <div className="mt-2 p-5">
          <ul >
            <li className="flex items-center text-m text-gray-400 hover:text-white hover:fill-white transition duration-[30ms]">
              <AutoStoriesIcon 
              sx={{  fontSize: 15 }}
               />
              <Link  href={"/subject"}>
                Fənn
              </Link>
            </li>
            <li className="flex items-center text-m text-gray-400 hover:text-white hover:fill-white transition duration-[30ms]">
            <CalendarViewMonthIcon 
              sx={{  fontSize: 15 }}
               />
              <Link   href={"/lessonschedule"}>
                Dərs cədvəli
              </Link>
            </li>
            <li>
            <LaptopIcon 
              sx={{ fontSize: 15 }}
               />
              <Link   href={"/onlinelesson"}>
                Online dərslər
              </Link>
            </li>
            <li>
            <AccessTimeIcon 
              sx={{  fontSize: 15 }}
               />
              <Link   href={"/attendance"}>
                Davamiyyət (Online dərslər)
              </Link>
            </li>
            <li>
            <AccountCircleIcon 
              sx={{  fontSize: 15 }}
               />
              <Link   href={"/profile"}>
                Profil
              </Link>
            </li>
            <li>
            <CastForEducationIcon 
              sx={{  fontSize: 15 }}
               />
              <Link   href={"/onlineexam"}>
                Online imtahan
              </Link>
            </li>
            <li>
            <ModeIcon 
              sx={{  fontSize: 15 }}
               />
              <Link   href={"/writtenexam"}>
                Yazılı imtahan
              </Link>
            </li>
            <li>
            <ContentPasteIcon 
              sx={{  fontSize: 15 }}
               />
              <Link   href={"/lms"}>
                LMS
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default VerticalLayout;
