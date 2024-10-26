import axios from 'axios';
const API_URL = 'http://localhost:5000/api/visitor';

export const fetchVisitorCounts = async () => {
  const response = await axios.post(`${API_URL}/increment-visitor`);
  console.log(response.data);
  return response.data; // Make sure to return the data
};
