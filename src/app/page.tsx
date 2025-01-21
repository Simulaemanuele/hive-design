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
          backgroundVariant={false}
          setVisible={setVisible}
          hoverable={true}
        />
        <HiveCell
          dimension={20}
          type="menu-tile"
          textContent="Web App"
          backgroundVariant={false}
          hoverable={true}
        />
        <HiveCell
          dimension={20}
          type="menu-tile"
          textContent="TextContent 2"
          backgroundVariant={true}
          hoverable={true}
        />
        <HiveCell
          dimension={20}
          type="menu-tile"
          textContent="TEST"
          backgroundVariant={true}
          hoverable={true}
        />
        <HiveCell
          dimension={20}
          type=""
          textContent=""
          backgroundVariant={true}
          rotate={true}
          rotationValue="-30deg"
          children={<div onClick={() => console.log("TEST")}>Press me</div>}
          hoverable={true}
        />
        <HiveCell
          dimension={20}
          type="exit"
          textContent=""
          backgroundVariant={false}
          setVisible={setVisible}
          hoverable={true}
        />
      </div>
    </div>
  );
}
