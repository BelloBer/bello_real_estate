import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi =async (url) => {
    const { data } = await axios.get((url), {
    headers: {
        'x-rapidapi-host': 'bayut.p.rapidapi.com',
        'x-rapidapi-key': '511ce153b3mshef2e5ff10de04c2p1b6f51jsnf2fd7ff1a241'
    } 
    });

    return data;
}
