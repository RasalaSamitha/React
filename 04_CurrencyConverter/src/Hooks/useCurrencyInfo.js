import React, { useEffect, useState } from 'react'

export default function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    useEffect(() => {
      fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
      .then((resp) => resp.json())
      .then((resp) => setData(resp[currency]))
    }, [currency])
    console.log("values" , data);
  return data;
}
