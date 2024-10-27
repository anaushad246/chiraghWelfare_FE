import axios from 'axios';


export const fetchVisitorCounts = async () => {
  const response = await axios.post(`https://chiraghwelfare-be.onrender.com/api/visitor/increment-visitor`);
  console.log(response.data);
  return response.data; // Make sure to return the data
};
