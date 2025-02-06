"use client";

import HiveCell from "@/components/HiveCell/HiveCell";
import HiveGroup from "@/components/HiveGroup/HiveGroup";
import { getDisplayName } from "next/dist/shared/lib/utils";
import { useEffect, useState } from "react";

export default function Home() {
  const [visible, setVisible] = useState<boolean>(true);
  const [dimension, setDimension] = useState<number>(1);
  const [pivotValue, setPivotValue] = useState<number>(0);

  useEffect(() => {
    setDimension(20);
  }, []);

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
        alignItems: "center",
        height: "200vh",
      }}
    >
      <h1
        style={{ fontWeight: "bolder", fontSize: "5rem", textAlign: "center" }}
      >
        Design System
      </h1>
      <div>
        <input
          type="text"
          onChange={(e) => setPivotValue(Number(e.target.value))}
          placeholder="Type value here..."
          style={{ border: "1px solid gray", borderRadius: 10 }}
        />
        <button
          style={{
            border: "1px solid black",
            borderRadius: 10,
            backgroundColor: "lightGray",
            marginLeft: 4,
            padding: 2,
          }}
          onClick={() => setDimension(pivotValue)}
        >
          Change
        </button>
      </div>
      {/* <div
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
      </div> */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          // marginTop: "35%",
        }}
      >
        <HiveGroup cells={cells} dimension={dimension} />
      </div>
    </div>
  );
}
