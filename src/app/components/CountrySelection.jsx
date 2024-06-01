"use client";

import { useState, useEffect } from "react";

const CountrySelection = () => {
  const [country, setCountry] = useState("United States");

  useEffect(() => {
    // console.log("API Key:", process.env.NEXT_PUBLIC_COUNTRY_LOOKUP_KEY); 

    const getCountry = async () => {
      const response = await fetch(
        `https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_COUNTRY_LOOKUP_KEY}`
      )
        .then((res) => res.json())
        .then((data) => data.country);
      if (!response) return;
      setCountry(response);
    };

    getCountry();
  }, []);

  return <div>{country}</div>;
};

export default CountrySelection;

