import axios from "axios";

const postInicial = (state) => {
    const peticion = axios.get(process.env.REACT_APP_API_URL + 'post?limit=6',
        {
            headers: {
                'app-id': process.env.REACT_APP_API_KEY
            }
        });
        console.log(peticion)
        return peticion;

}

export{
    postInicial
}