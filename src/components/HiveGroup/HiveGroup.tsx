"use client";

import React from "react";
import "./HiveGroup.css";

type HiveGroupProps = {
  cells?: React.ReactElement[];
  speed?: number;
};

const HiveGroup: React.FC<HiveGroupProps> = ({ cells = [], speed = 5 }) => {
  const centralComponent = cells[0];
  const orbitingComponents = cells.slice(1);
  const distance = 215;
  const angleStep = (2 * Math.PI) / cells.length;

  const positions = [
    { x: distance * (1 - 33.95 / 100), y: distance * (1 - 215 / 100) }, // Top-Right
    { x: distance * 1.337, y: 0 }, // Right
    { x: distance * (1 - 33 / 100), y: -distance * (1 - 215 / 100) }, // Bottom-Right
    { x: -distance * (1 - 33 / 100), y: -distance * (1 - 215 / 100) }, // Bottom-Left
    { x: -distance * 1.337, y: 0 }, // Left
    { x: -distance * (1 - 33.95 / 100), y: distance * (1 - 215 / 100) }, // Top-Left
  ];

  // const generatePosition = (
  //   index: number,
  //   radius: number
  // ): { x: number; y: number } => {
  //   const angle = index * angleStep;
  //   const x = radius * Math.cos(angle);
  //   const y = radius * Math.sin(angle);
  //   return { x, y };
  // };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="central">{centralComponent}</div>
      {orbitingComponents.map((component, index) => {
        const { x, y } = positions[index];
        return (
          <div
            key={index}
            className="surrounding item"
            style={{ transform: `translate(${x}px, ${y}px)` }}
          >
            {component}
          </div>
        );
      })}
    </div>
  );
};

export default HiveGroup;
