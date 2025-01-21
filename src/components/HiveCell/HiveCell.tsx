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
    backgroundVariant,
    rotate,
    rotationValue,
    setVisible,
    styleCustom,
    children,
    hoverable,
  }: {
    dimension: string;
    type: string;
    textContent: string;
    backgroundVariant: boolean;
    rotate?: boolean;
    rotationValue?: string;
    setVisible?: Dispatch<SetStateAction<boolean>>;
    styleCustom?: React.CSSProperties;
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

    const renderContent = () => {
      if (Object.values(typeConfig).includes(type)) {
        switch (type) {
          case "logo-menu":
            return (
              <div onClick={handleVisibleMenu} style={styleCustom}>
                <Image priority src={mainLogo} alt="main logo" />
              </div>
            );

          case "menu-tile":
            return (
              <div
                onClick={() => handleNavigation(textContent)}
                className="text-wrapper"
                style={styleCustom}
              >
                {composeRendererText(renderText(textContent))}
              </div>
            );

          case "exit":
            return (
              <div onClick={handleVisibleMenu} style={styleCustom}>
                <Image priority src={exitIcon} alt="exit icon" />
              </div>
            );

          default:
            return null;
        }
      } else {
        return <div style={styleCustom}>{children}</div>;
      }
    };

    const baseStyle = {
      width: dimension,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      backgroundColor: backgroundVariant ? "#975f00" : "#ffcb73",
      transform: rotate
        ? `rotate(${rotationValue})`
        : isHover
        ? "scale(1.2)"
        : isHover && rotate
        ? `rotate(${rotationValue}) scale(1.2)`
        : undefined,
      fontSize: "3.125rem",
    };

    return (
      <div
        className={`hexagon`}
        style={baseStyle}
        onMouseEnter={() => {
          setIsHover(true);
          console.log("isHover: ", isHover);
        }}
        onMouseLeave={() => setIsHover(false)}
      >
        {renderContent()}
      </div>
    );
  }
);

export default HiveCell;
