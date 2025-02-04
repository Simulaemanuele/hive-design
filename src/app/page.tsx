"use client";

import HiveCell from "@/components/HiveCell/HiveCell";
import HiveGroup from "@/components/HiveGroup/HiveGroup";
import { getDisplayName } from "next/dist/shared/lib/utils";
import { useState } from "react";

export default function Home() {
  const [visible, setVisible] = useState<boolean>(true);

  const cells = [
    <HiveCell
      dimension={20}
      type="logo-menu"
      textContent=""
      setVisible={setVisible}
      hoverable={true}
    />,
    <HiveCell
      dimension={20}
      type="menu-tile"
      textContent="Web App"
      innerStyleCustom={{ fontSize: "3.125rem" }}
      hoverable={true}
    />,
    <HiveCell
      dimension={20}
      type="menu-tile"
      textContent="TextContent 2"
      innerStyleCustom={{ fontSize: "1.3rem" }}
      hoverable={true}
    />,
    <HiveCell
      dimension={20}
      type="menu-tile"
      textContent="TEST"
      hoverable={true}
      customHandler={() => alert("Test")}
    />,
    <HiveCell
      dimension={20}
      type="menu-tile"
      textContent="TEST"
      outerStyleCustom={{ backgroundColor: "blueviolet" }}
      hoverable={true}
    />,
    <HiveCell
      dimension={20}
      type=""
      textContent=""
      rotate={false}
      rotationValue="-30deg"
      children={<div onClick={() => console.log("TEST")}>Press me</div>}
      hoverable={true}
    />,
    <HiveCell
      dimension={20}
      type="exit"
      textContent=""
      setVisible={setVisible}
      hoverable={true}
    />,
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          marginTop: "35%",
        }}
      >
        <HiveGroup cells={cells} />
      </div>
    </div>
  );
}
