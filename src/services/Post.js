import axios from "axios";

const postInicial = () => {
    const peticion = axios.get(process.env.REACT_APP_API_URL + 'post?limit=6',
        {
            headers: {
                'app-id': process.env.REACT_APP_API_KEY
            }
        });
      
        return peticion;

}


const AllPost = () => {
    const peticion = axios.get(process.env.REACT_APP_API_URL + 'post?limit=15',
        {
            headers: {
                'app-id': process.env.REACT_APP_API_KEY
            }
        });
        
        return peticion;

}

const PostxTag = (tag) => {
    const peticion = axios.get(process.env.REACT_APP_API_URL +'tag/'+tag+'/post?limit=15',
        {
            headers: {
                'app-id': process.env.REACT_APP_API_KEY
            }
        });
        
        return peticion;

}

export{
    postInicial,
    AllPost,
    PostxTag
}