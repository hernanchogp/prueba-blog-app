import axios from "axios";

const TagsAPI = () => {
    try {
        const peticion = axios.get(process.env.REACT_APP_API_URL + 'tag',
            {
                headers: {
                    'app-id': process.env.REACT_APP_API_KEY
                }
            });

        return peticion;
    } catch (error) {
        console.log(error)
    }


}
export {
    TagsAPI
}