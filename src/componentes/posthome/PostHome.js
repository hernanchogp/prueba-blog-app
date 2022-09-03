const PostHome = props => {
    return (
        <div className="col-lg-4 mb-3 d-flex " data-bs-toggle="tooltip" data-bs-placement="right" title={props.data.text}>
            <div className="card cardSize mt-2" >
                <img src={props.data.image} className=" rounded card-img-top ImgSize" alt={props.data.publishDate} />
                <div className="card-body ">
                <h5 className="card-title">{props.data.owner.firstName + ' '+props.data.owner.lastName }</h5>
                    <p className="card-text">
                        <span className="small">{props.data.text}</span>
                    </p>
                </div>
            </div>
        </div>

    );
}


export default PostHome;