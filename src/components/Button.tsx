import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<Props> = ({ children, ...props }) => {
   return (
      <button
         {...props}
         className={`bg-white transition-colors border border-transparent hover:bg-transparent hover:border-white hover:text-white text-black rounded py-1.5 cursor-pointer flex-1 ${props.className}`}>
         {children}
      </button>
   );
};

export default Button;
