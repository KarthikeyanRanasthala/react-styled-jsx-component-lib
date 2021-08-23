import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary";
}

const Button: React.FC<Props> = (props) => {
  const { children, variant, className = "", ...restProps } = props;

  return (
    <>
      <style jsx>
        {`
          button {
            border: 0;
            border-radius: 4px;
            font-size: 14px;
            padding: 6px 16px;
          }
          button:hover {
            cursor: pointer;
          }
          .primary {
            background-color: #0e172c;
            color: #fffffe;
          }
          .secondary {
            background-color: #ffc0ad;
            color: #271c19;
          }
        `}
      </style>
      <button {...restProps} className={`${className} ${variant}`}>
        {children}
      </button>
    </>
  );
};

export default Button;
