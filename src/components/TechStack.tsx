import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface Props {
  faStack: IconDefinition[];
}

const TechStack = ({ faStack }: Props) => {
  return (
    <div>
      <h1 className="text-lg text-slate-400 mt-20 mb-3">Tech Stack</h1>
      {faStack.map((icon) => (
        <div
          key={icon.iconName}
          className="inline-block mr-3 text-slate-400 hover:text-slate-300 transition-all duration-100"
        >
          <FontAwesomeIcon icon={icon} size="lg" color="" />
        </div>
      ))}
    </div>
  );
};

export default TechStack;
