import axios from "axios";


export default axios.create({
    baseURL : 'https://api.yelp.com/v3/businesses',
    headers :{
        Authorization : 'Bearer OdF_c7wNMoH-KBM4nQPD_dGYOEptt1ga0Gn2r7340R-clL1QiWWbSNj7dJI-cdtIq2MCyTawJXzgN62QJIS3tM5Z8pIhlnZehboC82HcIRkCzq2oF7BrLUiIYlPdZXYx'
    }

});