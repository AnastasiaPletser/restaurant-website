"use client";

import React, { useState, useEffect } from "react";
import "./specials.css";

export default function Specials() {
  const [data, setData] = useState<any | []>([]);
  const [items, setItems] = useState<any | []>([]);

  const getSpecialsData = () => {
    fetch("http://localhost:3000/api/specials")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    getSpecialsData();
  }, []);

  useEffect(() => {
    setItems(data);
  }, [data]);

  return <div>Specials</div>;
}
