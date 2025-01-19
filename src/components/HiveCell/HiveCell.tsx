"use client";

import React from "react";
import "@/components/HiveCell/HiveCell.css";
import Image from "next/image";
import mainLogo from "../../../public/img/logo-BEeYELLOW-png.png";
import { useRouter } from "next/navigation";

const HiveCell = ({
  dimension,
  type,
  textContent,
  backgroundVariant,
  rotate,
}: {
  dimension: string;
  type: string;
  textContent: string;
  backgroundVariant: boolean;
  rotate?: string;
}) => {
  const router = useRouter();

  const handleNavigation = (menuText: string): void => {
    router.push(`/${menuText}`);
  };

  if (type === "logo-menu") {
    return (
      <div
        className="hexagon"
        style={{
          width: dimension,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <Image priority src={mainLogo} alt="main logo" />
        </div>
      </div>
    );
  }

  if (type == "menu-tile") {
    return (
      <div
        className="hexagon hive-tile"
        style={{
          backgroundColor: `${backgroundVariant ? "#975f00" : "#ffcb73"}`,
          width: dimension,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <div>
          <div onClick={() => handleNavigation(textContent)}>{textContent}</div>
        </div>
      </div>
    );
  }

  if (type == "rotate") {
    return (
      <div
        className="hexagon hive-tile"
        style={{
          backgroundColor: `${backgroundVariant ? "#975f00" : "#ffcb73"}`,
          width: dimension,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          transform: `rotate(${rotate})`,
        }}
      >
        <div>
          <div onClick={() => handleNavigation(textContent)}>{textContent}</div>
        </div>
      </div>
    );
  }
};

export default HiveCell;
