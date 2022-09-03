import '@fortawesome/fontawesome-free/css/all.min.css';
const PostHome = props => {

    return (
        <div className="col-lg-4 mb-3 d-flex " data-bs-toggle="tooltip" data-bs-placement="right" title={props.data.text}>
            <div className="card cardSize mt-2" >
                <img src={props.data.image} className=" rounded card-img-top ImgSize" alt={props.data.publishDate} />
                <div className="card-body ">
                    <h5 className="card-title">{props.data.owner.firstName + ' ' + props.data.owner.lastName}</h5>
                    <p className="card-text">
                        <span className="small font-weight-light">{props.data.text}</span>
                    </p>
                </div>
                <div className='card-footer'>
                  
                    <div className='text-left'>
                    <i className="fa-regular fa-thumbs-up"></i> {props.data.likes} <span className='font-italic small'>{props.data.tags + ' '} </span>
                    </div>
                
                </div>
            </div>
        </div>

    );
}


export default PostHome;