import axios from "axios";

const ComentariosPost = async (postid,state) => {
   
    try {
        
        const peticion = await axios.get(process.env.REACT_APP_API_URL + 'post/' + postid + '/comment?limit=10',
            {
                headers: {
                    'app-id': process.env.REACT_APP_API_KEY
                }
            });
          
            state(peticion.data);
    } catch (error) {
        console.log(error)
    }


}
export {
    ComentariosPost
}