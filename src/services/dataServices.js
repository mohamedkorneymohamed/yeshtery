import productsData from "../data/products-data.json";

export const fetchData = async () => {

try {
    const response = await fetch('../data/products-data.json'); // Replace with your API endpoint
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Re-throw the error to handle it in the calling component
  }
};

