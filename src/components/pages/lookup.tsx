import React, { useState, useEffect } from 'react';

interface FoodSerchProps {
    barcode: string; // Or use an enum if you have a fixed set of pages
}

const FoodSearch = ({ barcode }) => {
  const [query, setQuery] = useState('');
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  useEffect(() => {
    // This function will run whenever `propValue` changes
    const handlePropChange = () => {
      console.log('Prop has changed to: ', barcode);
      const fetchData = async () => {
        let c = false;
    let p = 0;

    while (!c && p < 5) {
        setLoading(true);
        setError('');
        const apiKey = "WvJcUpdiej9dX4GGDhFS6ceCzZxmwUg9SetWsqvt"; // Use environment variable in production
        const url = `https://api.nal.usda.gov/fdc/v1/foods/search?query=${encodeURIComponent(barcode.substring(p))}&pageSize=10&api_key=${apiKey}`;
        console.log(barcode.substring(p));
        try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch data from the USDA API');
        }
        const data = await response.json();
        c = true;
        if (data.foods.length == 0) {
            c = false;
        }
        setFoods(data.foods || []);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }

        p += 1;
    }
      };
  
      // Call the async function
      if (barcode != "Test") {
        fetchData();
      }
      // You can place more code here to do something when `propValue` changes
    };

    handlePropChange();
  }, [barcode]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
        {foods.map((food, index) => (
        <p>{food.description}</p>
        ))}
    </div>
  );
};

export default FoodSearch;