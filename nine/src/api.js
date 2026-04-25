import { API_URL } from "./config";

const getAllCategories = async () => {
  try {
    const response = await fetch(`${API_URL}categories.php`);
    return await response.json();
  } catch (error) {
    return null;
  }
};

const getMealById = async (idMeal) => {
  try {
    const response = await fetch(`${API_URL}lookup.php?i=${idMeal}`);
    return await response.json();
  } catch (error) {
    return null;
  }
};

const getFiltredCategory = async (category) => {
  try {
    const response = await fetch(`${API_URL}filter.php?c=${category}`);
    return await response.json();
  } catch (error) {
    return null;
  }
};

export { getAllCategories, getFiltredCategory, getMealById };
