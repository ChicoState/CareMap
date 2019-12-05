import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
     // When we need to 'do something' then update things
    // the screen think 'State'
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    // helper async function to search API
    const searchAPI = async (searchTerm) => {
        //error handling with try/catch
        try{
            //http get type request 
            //appending '/search' to baseURL in yelp.js 
            const response = await yelp.get('/search', {
                // any key value pairs will be automatically appended 
                // to onto our request URL
                params: {
                    limit: 50, 
                    term: searchTerm,
                    location: 'Chico, CA'
                }
            });
            //'await' waits for the GET to return, then loads
            // results  into the 'response' variable

            //the Response Body JSON documented format :
            //https://www.yelp.com/developers/documentation/v3/business_search
            
            setResults(response.data.businesses);
    } catch(err) {
        // to show user 'oops something went wrong'
        // need to update screen , use State!
        setErrorMessage('Oopsies! Something Went Wrong :(');
    }
    };

    useEffect(() => {
        searchAPI('childcare');
    }, [] );

    return [searchAPI, results, errorMessage]
};