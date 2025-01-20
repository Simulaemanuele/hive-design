"use client";

import HiveCell from "@/components/HiveCell/HiveCell";
import { useState } from "react";

export default function Home() {
  const [visible, setVisible] = useState<boolean>(true);

  console.log("visible: ", visible);

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
          dimension="20rem"
          type="logo-menu"
          textContent=""
          backgroundVariant={false}
          setVisible={setVisible}
        />
        <HiveCell
          dimension="20rem"
          type="menu-tile"
          textContent="Web App"
          backgroundVariant={false}
        />
        <HiveCell
          dimension="20rem"
          type="menu-tile"
          textContent="TextContent 2"
          backgroundVariant={true}
        />
        <HiveCell
          dimension="20rem"
          type="menu-tile"
          textContent="TEST"
          backgroundVariant={true}
        />
        <HiveCell
          dimension="20rem"
          type=""
          textContent=""
          backgroundVariant={true}
          rotate={true}
          rotationValue="-30deg"
          children={
            <button onClick={() => console.log("TEST")}>Press me</button>
          }
        />
        <HiveCell
          dimension="20rem"
          type="exit"
          textContent=""
          backgroundVariant={false}
          setVisible={setVisible}
        />
      </div>
    </div>
  );
}
