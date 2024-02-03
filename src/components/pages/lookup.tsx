import React, { useState } from 'react';

interface FoodSerchProps {
    barcode: string; // Or use an enum if you have a fixed set of pages
}

const FoodSearch = ({ barcode }) => {
  const [query, setQuery] = useState('');
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    let c = false;
    let p = 0;

    while (!c && p < 5) {
        e.preventDefault(); // Prevent form submission from reloading the page
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

  return (
    <div>
      <form onSubmit={handleSearch}>
        <button type="submit" disabled={loading}>
          Search
        </button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
        {foods.map((food, index) => (
        <p>{food.description}</p>
        ))}
    </div>
  );
};

export default FoodSearch;