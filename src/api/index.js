import axios from "axios";

const url = "https://type.fit/api/quotes";

export const fetchData =  async () => {
    try {
        const { data } = await axios.get(url);
        
        const keys = Object.keys(data);
        const { text, author } = data[keys[keys.length * Math.random() << 0]];

        return { text, author };
    } catch(err) {
        console.error(err);
    }
}