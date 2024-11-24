import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { iSocialMediaSet } from "./social_media_set.d";

export const SocialMediaSet: React.FC<iSocialMediaSet> = ({
  children,
  orientation,
  backgroundColor = "transparent",
}) => {
  const SocialMediaSetClassName = `inline-flex gap-[30px] items-center ${
    orientation === "horizontal" ? "flex-row" : "flex-col"
  }`;

  const defaultIcons: IconProp[] = [
    ["fab", "github-square"],
    ["fab", "instagram-square"],
    ["fab", "square-x-twitter"],
    ["fab", "linkedin"],
  ];

  return (
    <>
      <div
        className={SocialMediaSetClassName}
        style={{ backgroundColor: `${backgroundColor}` }}
      >
        {children
          ? children
          : defaultIcons.map((icon, index) => (
              <FontAwesomeIcon
                key={index}
                icon={icon}
                color="#ffffff"
                size="xl"
              />
            ))}
      </div>
    </>
  );
};
