import React from "react";
import Card from "../components/Card";

export default function Main(props) {
    const { cards } = props;
    return (
        <div className="w-full flex flex-col align-center md:flex-row md:flex-wrap">
            {cards.data.map((card) => (
                <Card info={card} key={card._id} />
            ))}
        </div>
    )
}