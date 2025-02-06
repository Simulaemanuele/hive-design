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

  const distanceLookup: Record<number, number> = {
    20: 220,
    19: 218,
    18: 216,
    17: 215,
    16: 213,
    15: 211,
    14: 209,
    13: 207,
    12: 204,
    11: 201,
    10: 197,
    9: 190,
    8: 184,
    7: 177,
    6: 165,
    5: 148,
    4: 109,
    3: 50,
    2: 50,
    1: 50,
  };

  const distanceSizing = (dimension: number): number => {
    if (distanceLookup[dimension]) return distanceLookup[dimension];

    const dims = Object.keys(distanceLookup)
      .map(Number)
      .sort((a, b) => b - a);

    const lowerDim = dims.find((d) => d < dimension) || 1;
    const upperDim = dims.find((d) => d > dimension) || 20;

    const lowerDist = distanceLookup[lowerDim];
    const upperDist = distanceLookup[upperDim];

    const ratio = (dimension - lowerDim) / (upperDim - lowerDim);
    return lowerDist + (upperDist - lowerDist) * ratio;
  };

  const distance = distanceSizing(dimension);

  const getPosition = (xFactor: number, yFactor: number) => ({
    x: distance * scaleFactor * xFactor,
    y: distance * scaleFactor * yFactor,
  });

  const positions = [
    getPosition(1 - 0.3395, 1 - 2.15),
    getPosition(1.337, 0),
    getPosition(1 - 0.33, -1 + 2.15),
    getPosition(-1 + 0.33, -1 + 2.15),
    getPosition(-1.337, 0),
    getPosition(-1 + 0.3395, 1 - 2.15),
  ];

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
        const { x, y } = positions[index] || { x: 0, y: 0 };

        console.log("PROPS: ", component.props);
        return (
          <div
            key={index}
            className="surrounding"
            style={{
              transform: `translate(${x}px, ${y}px)`,
            }}
          >
            {React.cloneElement(component, { dimension })}
          </div>
        );
      })}
    </div>
  );
};

export default HiveGroup;
