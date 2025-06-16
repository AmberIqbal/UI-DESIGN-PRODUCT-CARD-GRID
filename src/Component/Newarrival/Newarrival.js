import React from "react";
import "./Newarrival.css";
import trolley from "../../Assets/Images/trolley.png";

import { createContext, useState } from "react";
export const MyContext = createContext("dark");
function Newarrival({ products }) {
  const [theme, setTheme] = useState("light");
  const [showCards, setShowCards] = useState(false);
  const visible = () => {
    setShowCards(!showCards);
  };
  function handleChange() {
    setTheme((preValue) => (preValue === "light" ? "dark" : "light"));
  }
  return (
    <div
      style={{
        background: theme === "light" ? "#f9f9f9" : "#00bfa6",
        color: theme === "light" ? "#00bfa6" : "#f9f9f9",
        minHeight: "100vh", // Stretch the container to see the full background change
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: "10px",
      }}
    >
      <MyContext.Provider value={{ theme, setTheme }}></MyContext.Provider>
      <div>
        <button
          className="main"
          onClick={() => {
            handleChange();
            visible();
          }}
          style={{
            backgroundColor: theme === "light" ? "#00bfa6" : "#f9f9f9",
            color: theme === "light" ? "#333333" : "#00bfa6",
          }}
        >
          NEW ARRIVAL
        </button>
      </div>
      {showCards && (
        <div className="hidden">
          {products.map((item) => (
            <div key={item.id} className="card">
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "330px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <h2>{item.title}</h2>
              <p>{item.price}</p>
              <p>{item.description}</p>
              <button className="cart">
                <img src={trolley} width={40} height={30} />
                Add to cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default Newarrival;
