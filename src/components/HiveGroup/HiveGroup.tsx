"use client";

import React from "react";
import "./HiveGroup.css";

type HiveCellProps = {
  dimension: number;
  type: string;
  textContent: string;
  rotate?: boolean;
  rotationValue?: string;
  setVisible?: React.Dispatch<React.SetStateAction<boolean>>;
  innerStyleCustom?: React.CSSProperties;
  outerStyleCustom?: React.CSSProperties;
  children?: React.ReactNode;
  hoverable?: boolean;
  customHandler?: (...args: any[]) => any;
};

type HiveGroupProps = {
  cells?: React.ReactElement<HiveCellProps>[];
  dimension?: number;
  speed?: number;
};

const HiveGroup: React.FC<HiveGroupProps> = ({
  cells = [],
  speed = 5,
  dimension = 0,
}) => {
  const centralComponent = cells[0];
  const orbitingComponents = cells.slice(1);
  const scaleFactor = dimension / 20;

  const distanceSizing = (dimension: number): number => {
    let distance: number;
    switch (dimension) {
      case 20:
      case 18:
      case 17:
        distance = 216;
        break;
      case 16:
        distance = 215;
        break;
      case 15:
        distance = 201;
        break;
      case 14:
        distance = 197;
        break;
      case 13:
        distance = 194;
        break;
      case 12:
        distance = 192;
        break;
      case 11:
        distance = 186;
        break;
      case 10:
        distance = 180;
        break;
      default:
        distance = 180;
        break;
    }
    return distance;
  };

  const distance = distanceSizing(dimension);

  const positions = [
    {
      x: distance * scaleFactor * (1 - 33.95 / 100),
      y: distance * scaleFactor * (1 - 215 / 100),
    }, // Top-Right
    { x: distance * scaleFactor * 1.337, y: 0 }, // Right
    {
      x: distance * scaleFactor * (1 - 33 / 100),
      y: -distance * scaleFactor * (1 - 215 / 100),
    }, // Bottom-Right
    {
      x: -distance * scaleFactor * (1 - 33 / 100),
      y: -distance * scaleFactor * (1 - 215 / 100),
    }, // Bottom-Left
    { x: -distance * scaleFactor * 1.337, y: 0 }, // Left
    {
      x: -distance * scaleFactor * (1 - 33.95 / 100),
      y: distance * scaleFactor * (1 - 215 / 100),
    }, // Top-Left
  ];

  // const positions = [
  //   {
  //     x: pxToRem(distance * (1 - 33.95 / 100)),
  //     y: pxToRem(distance * (1 - 215 / 100)),
  //   }, // Top-Right
  //   { x: pxToRem(distance * 1.337), y: "0" }, // Right
  //   {
  //     x: pxToRem(distance * (1 - 33 / 100)),
  //     y: pxToRem(-distance * (1 - 215 / 100)),
  //   }, // Bottom-Right
  //   {
  //     x: pxToRem(-distance * (1 - 33 / 100)),
  //     y: pxToRem(-distance * (1 - 215 / 100)),
  //   }, // Bottom-Left
  //   { x: pxToRem(-distance * 1.337), y: "0" }, // Left
  //   {
  //     x: pxToRem(-distance * (1 - 33.95 / 100)),
  //     y: pxToRem(distance * (1 - 215 / 100)),
  //   }, // Top-Left
  // ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="central">
        {React.cloneElement(centralComponent, { dimension })}
      </div>
      {orbitingComponents.map((component, index) => {
        const { x, y } = positions[index];
        return (
          <div
            key={index}
            className="surrounding item"
            style={{ transform: `translate(${x}px, ${y}px)` }}
          >
            {React.cloneElement(component, { dimension })}
          </div>
        );
      })}
    </div>
  );
};

export default HiveGroup;
