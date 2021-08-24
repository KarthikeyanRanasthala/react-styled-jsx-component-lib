import React from "react";

interface Props {
  title: string;
  description: string;
}

const Card: React.FC<Props> = (props) => {
  const { title, description } = props;
  return (
    <>
      <style jsx>
        {`
          .card {
            padding: 24px;
            background-color: #d9d4e7;
            border-radius: 3px;
            width: 100%;
          }
          .card__title {
            color: #0e172c;
            font-size: 28px;
            line-height: 30px;
            margin: 0px 0px 16px;
            padding: 0;
          }
          .card__description {
            color: #0e172c;
            font-size: 18px;
            line-height: 1.8;
            margin: 0;
          }

          @media (--screen-large) {
            .card {
              padding: 40px;
            }
          }
        `}
      </style>
      <div className="card">
        <h3 className="card__title">{title}</h3>
        <p className="card__description">{description}</p>
      </div>
    </>
  );
};

export default Card;
