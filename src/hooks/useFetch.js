import { useState, useEffect } from "react";

export function useFetch(keyword) {
  const [items, setItems] = useState([])

  console.log('keyword', keyword)
  
  useEffect(() => {
    const API_URL = "https://api.mocklets.com/mock68016";

    fetch(`${API_URL}${keyword ? keyword : '/talleres'}`)
      .then((resp) => resp.json())
      .then((items) => setItems(items));
  }, []);

  return items
}