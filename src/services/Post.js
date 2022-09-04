import axios from "axios";

const postInicial = () => {
    try {
        const peticion = axios.get(process.env.REACT_APP_API_URL + 'post?limit=6',
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


const AllPost = () => {
    try {
        const peticion = axios.get(process.env.REACT_APP_API_URL + 'post?limit='+process.env.REACT_APP_CANT_LISTAR,
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

const PostxTag = (tag) => {
    try {
        const peticion = axios.get(process.env.REACT_APP_API_URL + 'tag/' + tag + '/post?limit='+process.env.REACT_APP_CANT_LISTAR,
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
    postInicial,
    AllPost,
    PostxTag
}