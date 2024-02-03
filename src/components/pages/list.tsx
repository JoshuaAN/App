import React, { useState, useEffect } from 'react';
import { db } from './firebase-config';
import { collectionGroup, query, where, getDocs } from 'firebase/firestore';
import { Container, TextField, MenuItem, Typography, Button, Box } from '@mui/material';

// Assuming each food item belongs to a location and has a unique ID
interface FoodItem {
  id: string; // Unique identifier for each food item
  name: string;
  description?: string; // Assuming there might be a description
  location: string; // Name of the location (restaurant)
}

const RestaurantList = () => {
  const [locations, setLocations] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [foodItems, setFoodItems] = useState<FoodItem[]>([]);
  const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null);

  useEffect(() => {
    const fetchFoodItems = async () => {
      const mealItemColl = collectionGroup(db, "locationFoodItems");
      const allFoodItems = query(mealItemColl, where('b12', '>=', 0));
      const querySnapshot = await getDocs(allFoodItems);
      const fetchedFoodItems: FoodItem[] = [];
      const fetchedLocations: string[] = [];

      querySnapshot.forEach((doc) => {
        const foodData: FoodItem = {
          id: doc.id,
          ...doc.data() as any, // Cast to any to bypass Firestore's type limitation
        };
        fetchedFoodItems.push(foodData);
        if (!fetchedLocations.includes(foodData.location)) {
          fetchedLocations.push(foodData.location);
        }
      });

      setLocations(fetchedLocations);
      setFoodItems(fetchedFoodItems);
    };

    fetchFoodItems();
  }, []);

  return (
    <div className="testing123">
      <h4>Restaurants</h4>
      <div style={{ height: '125px', overflowY: 'scroll' }}>
        {locations.map((location, index) => (
          <div
            key={index}
            style={{
              height: '30px',
              fontSize: '16px',
              padding: '10px',
              borderBottom: '1px solid #ccc',
              cursor: 'pointer',
              backgroundColor: selectedLocation === location ? '#616161' : 'transparent', // Highlight if selected
            }}
            onClick={() => setSelectedLocation(location)}
          >
            <p>{location}</p>
          </div>
        ))}
      </div>
      {selectedLocation && (
        <>
          <h4>Foods at {selectedLocation}</h4>
          <div style={{ height: '125px', overflowY: 'scroll' }}>
            {foodItems.filter(food => food.location === selectedLocation).map((food) => (
              <div
                key={food.id}
                style={{
                  height: '30px',
                  fontSize: '16px',
                  padding: '10px',
                  borderBottom: '1px solid #ccc',
                  cursor: 'pointer',
                  backgroundColor: selectedFood && selectedFood.id === food.id ? '#616161' : 'transparent', // Highlight if selected
                }}
                onClick={() => setSelectedFood(food)}
              >
                <p>{food.name}</p>
              </div>
            ))}
          </div>
        </>
      )}
      <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >Add Food</Button>
    </div>
  );
};

export default RestaurantList;
