"use client";

import React, {
  Children,
  Dispatch,
  memo,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import "@/components/HiveCell/HiveCell.css";
import Image from "next/image";
import mainLogo from "../../../public/img/logo-BEeYELLOW-png.png";
import exitIcon from "../../../public/svg/cross.svg";
import { useRouter } from "next/navigation";

type IConfigType = {
  logoMenu: string;
  menuTile: string;
  exit: string;
};

const typeConfig: IConfigType = {
  logoMenu: "logo-menu",
  menuTile: "menu-tile",
  exit: "exit",
};

const HiveCell = memo(
  ({
    dimension,
    type,
    textContent,
    rotate,
    rotationValue,
    setVisible,
    innerStyleCustom,
    outerStyleCustom,
    children,
    hoverable,
  }: {
    dimension: number;
    type: string;
    textContent: string;
    rotate?: boolean;
    rotationValue?: string;
    setVisible?: Dispatch<SetStateAction<boolean>>;
    innerStyleCustom?: React.CSSProperties;
    outerStyleCustom?: React.CSSProperties;
    children?: ReactNode;
    hoverable?: boolean;
  }) => {
    const router = useRouter();

    const [isHover, setIsHover] = useState<boolean>(false);

    const handleNavigation = (menuText: string): void => {
      router.push(`/${menuText}`);
    };

    const handleVisibleMenu = () => {
      if (setVisible) setVisible(type === typeConfig.logoMenu ? true : false);
    };

    const renderText = (text: string): string[] => {
      let newText = [""];
      if (text && text.length > 0) {
        newText = text.split(" ");
      }

      return newText;
    };

    const composeRendererText = (textArray: string[]) => {
      return (
        <>
          {textArray.map((text: string, i) => (
            <div key={i + text}>{text}</div>
          ))}
        </>
      );
    };

    const dimensionRatio = (dimension: number): number => {
      const part = 2.679;
      const percentage = (part / dimension) * 100;
      const resultRatio = dimension - dimension * (percentage / 100);
      return resultRatio;
    };

    const renderContent = () => {
      if (Object.values(typeConfig).includes(type)) {
        switch (type) {
          case "logo-menu":
            return (
              <div onClick={handleVisibleMenu} style={innerStyleCustom}>
                <Image priority src={mainLogo} alt="main logo" />
              </div>
            );

          case "menu-tile":
            return (
              <div
                onClick={() => handleNavigation(textContent)}
                className="text-wrapper"
                style={innerStyleCustom}
              >
                {composeRendererText(renderText(textContent))}
              </div>
            );

          case "exit":
            return (
              <div onClick={handleVisibleMenu} style={innerStyleCustom}>
                <Image priority src={exitIcon} alt="exit icon" />
              </div>
            );

          default:
            return null;
        }
      } else {
        return <div style={innerStyleCustom}>{children}</div>;
      }
    };

    const baseStyle = {
      width: `${rotate ? dimension : dimensionRatio(dimension)}rem`,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      transform: isHover ? `scale(1.1)` : undefined,
      transitionDuration: hoverable ? "1s" : "",
      fontSize: "3.125rem",
      ...outerStyleCustom,
    };

    return (
      <div
        className={`${rotate ? "hexagon-variant" : "hexagon"}`}
        style={baseStyle}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {renderContent()}
      </div>
    );
  }
);

export default HiveCell;
