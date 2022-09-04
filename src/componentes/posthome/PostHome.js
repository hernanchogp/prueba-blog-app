import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Modal, Button } from "react-bootstrap";
import { ComentariosPost } from '../../services/Comentarios';
const ModalComentarios = props => {

    const [comentarios, setComentarios] = useState(null);
    useEffect(() => {
        ComentariosPost(props.postid, setComentarios)

    });


    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {comentarios == null || comentarios.data.length <= 0 ? 'Sin comentarios' : 'Cantidad de Comentarios ' + comentarios.data.length}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {comentarios == null || comentarios.data.length <= 0 ? <div className="alert alert-warning d-flex align-items-center" role="alert">

                    <div>
                    No existen comentarios para este Post
                    </div>
                </div> : comentarios.data.map((e, i) => {
                    return <CardChipCommentario data={e} key={i} />
                })}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

const PostHome = props => {

    return (
        <div className="col-lg-4 mb-3 d-flex " data-bs-toggle="tooltip" data-bs-placement="right" title={props.data.text}>
            <div className="card cardSize mt-2" >
                <img src={props.data.image} className=" rounded card-img-top ImgSize" alt={props.data.publishDate} />
                <div className="card-body ">
                    <h5 className="card-title">{props.data.owner.firstName + ' ' + props.data.owner.lastName}</h5>
                    <p className='small'>{FormatearFecha(new Date(props.data.publishDate))}</p>
                    <p className="card-text">
                        <span className="small font-weight-light">{props.data.text}</span>
                    </p>
                </div>
                <div className='card-footer'>

                    <div className='text-left'>
                        <i className="fa-regular fa-thumbs-up text-primary"></i> {props.data.likes + '  '}
                        {props.data.tags.length === 0 ? (
                            <div>Sin Registros</div>
                        ) : (
                            props.data.tags.map((e, i) => {
                                return <Tags tag={e} key={i} />
                            })
                        )}
                    </div>

                </div>
            </div>
        </div>

    );
}

const PostPublicaciones = props => {
    const [modalShow, setModalShow] = useState(false);
    return (

        <div className="card mb-3" data-bs-toggle="tooltip" data-bs-placement="right" title={props.data.text}>
            <div className="row ">
                <div className="col-md-4">
                    <img src={props.data.image} className="card-img ImgSize" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-8">
                                <p className="chip bg-light">
                                    <img src={props.data.owner.picture} alt="Person" width="96" height="96" />
                                    {props.data.owner.firstName + ' ' + props.data.owner.lastName + ' '}
                                </p>
                            </div>
                            <div className="col-4"> <small>{FormatearFecha(new Date(props.data.publishDate))}</small></div>
                        </div>
                        <p className="card-text">
                            {props.data.text}
                        </p>

                        <p className="card-text">
                            {props.data.tags.length === 0 ? (
                                <div>Loading...</div>
                            ) : (
                                props.data.tags.map((e, i) => {
                                    return <Tags tag={e} key={i} />
                                })
                            )}
                        </p>
                    </div>
                    <div className='card-footer'>
                        <div className="row">
                            <div className="col-8">
                                <i className="fa-regular fa-thumbs-up text-primary"></i> {props.data.likes + '  '}
                            </div>

                            <ModalComentarios
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                                postid={props.data.id}
                            />

                            <div className="col-4"> <a href="#" onClick={() => setModalShow(true)} data-toggle="tooltip" data-placement="left" title="Ver comentarios del post" > Ver Comentarios <i className="fa-regular fa-comments"></i></a></div>

                        </div>
                    </div>
                </div>
            </div>

        </div>



    );
}

const Tags = props => {
    return (
        <span className="badge bg-info px-2 py-1 border mr-1 mb-1">{props.tag + ' '}</span>
    )
}

const CardChipCommentario = props => {
    console.log(props)
    return (

        <div className="card mb-4">
            <div className="row g-0">

                <div className="col-md-8">

                    <div className="card-body">
                        <p className="chip bg-light">
                            <img src={props.data.owner.picture} alt="Person" width="96" height="96" />
                            {props.data.owner.firstName + ' ' + props.data.owner.lastName + ' '}
                        </p>
                        <p className="card-text">
                            {props.data.message}
                        </p>
                        <p className="card-text">
                            <small className="text-muted">{FormatearFecha(new Date(props.data.publishDate))}</small>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}


function fecha(num) {
    return num.toString().padStart(2, '0');
}

function FormatearFecha(date) {
    return (
        [
            fecha(date.getDate()),
            fecha(date.getMonth() + 1),
            date.getFullYear(),
        ].join('-') +
        ' ' +
        [
            fecha(date.getHours()),
            fecha(date.getMinutes()),
            fecha(date.getSeconds()),
        ].join(':')
    );
}

export {
    PostHome,
    PostPublicaciones,
    ModalComentarios
}