import React from "react";
import Card from "./Card"; // Import the Card component

const cardData = [
  {
    imageSrc: "/images/mobile.png",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum culpa neque quo eum et quasi velit voluptatum cum maiores exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum culpa neque quo Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum culpa neque quo Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum culpa neque quo.",
    name:"APP Development"
  },
  {
    imageSrc: "/images/uiux.png",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum culpa neque quo eum et quasi velit voluptatum cum maiores exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum culpa neque quo Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum culpa neque quo Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum culpa neque quo.",
    name: "UI / UX Design"
    },
  {
    imageSrc: "/images/web.png",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum culpa neque quo eum et quasi velit voluptatum cum maiores exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum culpa neque quo Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum culpa neque quo Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum culpa neque quo.",
    name:"Web Developer"
    },
];

const CardList = () => {
  return (
    <div className="card_container">
      {cardData.map((card, index) => (
        <Card key={index} imageSrc={card.imageSrc} content={card.content} name={card.name} />
      ))}
    </div>
  );
};

export default CardList;
