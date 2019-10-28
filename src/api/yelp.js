import axios from 'axios';

export default axios.create({
    //root url for api
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 
            'Bearer K1R8ICRpjEAkkdxykufjDjbIZ9snbotBh86FSYtM4kQp0EwaB89HI6i9FzXoSqUj9-FHzdROg3y-qAlMAyUZAOUdayCE6Pe48DDgeq8K6Bd-621SQ360QniManeuXXYx'
    }
});

