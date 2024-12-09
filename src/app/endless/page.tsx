"use client";
import React, { useState, useEffect } from "react";
import { textOptions, backgroundColors, textColors, heightRange } from "../endless/itemParams";

interface Item {
  text: string;
  backgroundColor: string;
  textColor: string;
  height: number;
}

export default function Home() {
  const [items, setItems] = useState<Item[]>([]);
  const [page, setPage] = useState(1);

  const generateRandomItem = (): Item => {
    const randomText = textOptions[Math.floor(Math.random() * textOptions.length)];
    const randomBackground = backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
    const randomTextColor = textColors[Math.floor(Math.random() * textColors.length)];
    const randomHeight = Math.floor(Math.random() * (heightRange[1] - heightRange[0] + 1)) + heightRange[0];

    return {
      text: randomText,
      backgroundColor: randomBackground,
      textColor: randomTextColor,
      height: randomHeight,
    };
  };

  useEffect(() => {
    const fetchItems = () => {
      const newItems = Array.from({ length: 10 }, () => generateRandomItem());
      setItems((prev) => [...prev, ...newItems]);
    };
    fetchItems();
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        setPage((prev) => prev + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-4">
      {items.map((item, index) => (
        <div
          key={index}
          style={{
            backgroundColor: item.backgroundColor,
            color: item.textColor,
            height: `${item.height}px`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "16px",
          }}
          className="text-4xl font-bold active:scale-90 transition-transform duration-260 shadow"
        >
          {item.text}
        </div>
      ))}
    </div>
  );
}
