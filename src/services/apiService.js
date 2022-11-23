import  axios  from "axios";

const BASE_URL= "https://fcc-weather-api.glitch.me/api/current"

const apiService = {
    getCurrentWeather: function getCurrentWeather(data){
        return axios.get(BASE_URL+"?lat="+data.lat+"&lon="+data.lng);
    }
}
export default apiService;