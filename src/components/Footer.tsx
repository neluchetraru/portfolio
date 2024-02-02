import React from "react";

interface Props {
  className?: string;
}

const Footer = ({ className }: Props) => {
  return (
    <p className={className}>
      This website was created in React with TypeScript and bootstrapped with
      create-react-app. The styling was done using TailwindCSS.
    </p>
  );
};

export default Footer;
