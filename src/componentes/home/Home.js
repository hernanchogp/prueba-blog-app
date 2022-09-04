import React from "react";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import { postInicial } from "../../services/Post";
import {PostHome} from "../posthome/PostHome";

class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            setPost: ''
        }
    }
    componentDidMount() {
        /*postInicial.then(data => {
            console.log(data)
        })
        .catch(err => console.log(err))//*/
        this.traerPublicaciones()

    }
    async traerPublicaciones() {
        const res = postInicial();
        const { data } = await res;
        console.log(data)
        this.setState({ setPost: data.data })//*/
        //console.log(this.state.setPost)
    }

    render() {

        /*   var CardPost = this.state.setPost.map((opt, i) => (
               <PostHome data={opt} />
            ))//*/
        return (
            <>
                <Nav />
                <main role="main" className="flex-shrink-0 mt-3">

                    <div className="container">

                        <div className=''>

                            <div className='card border-secondary border rounded border-1 border-light'>
                                <div className='card-header text-dark bg-light '>                                    
                                Ultimos {this.state.setPost.length} Post 
                                </div>
                                <div className='card-body'>
                                    <div className="row">
                                        {this.state.setPost.length === 0 ? (
                                            <div>Loading...</div>
                                        ) : (
                                            this.state.setPost.map((e, i) => {
                                                return <PostHome data={e} key={i}/>;
                                            })
                                        )}
                                    </div>
                                </div>
                                <div className='card-footer text-center'>

                                </div>
                            </div>

                        </div>


                    </div>
                </main>
                <Footer />

            </>
        )
    }
}
export default Home;