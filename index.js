const axios = require('axios');
const readline = require('node:readline/promises');

const dotenv = require('dotenv');
const icons = require('./icons.json');

// Loading dotenv
dotenv.config();

axios.get(process.env.WEATHER_API_URL, {
    params: {
        key: process.env.WEATHER_API_TOKEN,
        q: process.env.CITY
    }
})
.then(
    response => {
        let status = response.data.current.condition.text.toLowerCase();
        if(status.includes("cloudy")){
            console.log(icons.cloudy);
        }
            else if(status.includes("clear")){
                console.log(icons.clear);
            }

                else if(status.includes("thunder")){
                    console.log(icons.thunder);
                }

                    else if(status.includes("raining")){
                        console.log(icons.raining);
                    }
                        else{
                            console.log(icons.cloudy);
                        }
        let data = response.data.current;
        console.log(``);
        console.log(`location: ${process.env.CITY} `);
        console.log(`feels like: ${data.feelslike_c}*c`);
        console.log(`weather: ${status}`);
        console.log(`uv: ${data.uv} `);

    }
)
.catch(
    error => {
        console.log(error);
        console.log("=====");
    });
