"use client";

import HiveCell from "@/components/HiveCell/HiveCell";
import { useState } from "react";

export default function Home() {
  const [visible, setVisible] = useState<boolean>(true);

  return (
    <div>
      <h1
        style={{ fontWeight: "bolder", fontSize: "5rem", textAlign: "center" }}
      >
        Design System
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexWrap: "wrap",
          height: "95vh",
        }}
      >
        <HiveCell
          dimension={20}
          type="logo-menu"
          textContent=""
          setVisible={setVisible}
          hoverable={true}
        />
        <HiveCell
          dimension={20}
          type="menu-tile"
          textContent="Web App"
          innerStyleCustom={{ fontSize: "3.125rem" }}
          hoverable={true}
        />
        <HiveCell
          dimension={10}
          type="menu-tile"
          textContent="TextContent 2"
          innerStyleCustom={{ fontSize: "1.3rem" }}
          hoverable={true}
        />
        <HiveCell
          dimension={20}
          type="menu-tile"
          textContent="TEST"
          hoverable={true}
          customHandler={() => alert("Test")}
        />
        <HiveCell
          dimension={20}
          type="menu-tile"
          textContent="TEST"
          outerStyleCustom={{ backgroundColor: "blueviolet" }}
          hoverable={true}
        />
        <HiveCell
          dimension={20}
          type=""
          textContent=""
          rotate={true}
          rotationValue="-30deg"
          children={<div onClick={() => console.log("TEST")}>Press me</div>}
          hoverable={true}
        />
        <HiveCell
          dimension={20}
          type="exit"
          textContent=""
          setVisible={setVisible}
          hoverable={true}
        />
      </div>
    </div>
  );
}
