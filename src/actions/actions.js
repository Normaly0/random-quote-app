import axios from 'axios';

const options = {
    method: 'GET',
    url: 'https://quotes15.p.rapidapi.com/quotes/random/',
    headers: {
      'x-rapidapi-host': 'quotes15.p.rapidapi.com',
      'x-rapidapi-key': 'edf4b57f38msh62da24f1ea5360ap1ea4d4jsn34408c2826c5'
    }
  };

  export function loadQuote() {
    return(dispatch) => {
        return axios.request(options).then((response) => {
            dispatch(changeQuote(response.data));
        });
    };
};

export function changeQuote(data) {
    return {
        type: "CHANGE_QUOTE",
        quote: data.content,
        name: data.originator.name
    };
};