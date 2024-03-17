import axios from "axios"
const API_URL = 'http://api.openweathermap.org/data/2.5/weather';
const API_KEY = process.env.REACT_APP_API_KEY;
export const fetchData= async(city, country)=>{
    try {
        let response = await axios.get(`${API_URL}?q=${city},${country}&appid=${API_KEY}&units=metric`);
        return response.data;
    } catch (error) {
        console.error("The error While Fetching The data", error.message)
    }
}