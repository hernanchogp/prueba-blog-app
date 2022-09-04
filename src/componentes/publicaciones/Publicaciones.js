import React from "react";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import Select from 'react-select';

import { AllPost, PostxTag } from "../../services/Post";

import { PostPublicaciones } from "../posthome/PostHome";
import { TagsAPI } from "../../services/Tags";
class Publicaciones extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      setPost: '',
      setTags: '',
      setTag: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e) {
    this.consultarPostxTag(e.value.trim());
    this.setState({ setTag: e.value.trim() })
  }
  componentDidMount() {

    this.traerPublicaciones()
    this.traerTags()

  }
  async traerPublicaciones() {
    const res = AllPost();
    const { data } = await res;
    this.setState({ setPost: data.data })
  }

  async consultarPostxTag(tag) {
    const res = PostxTag(tag);
    const { data } = await res;
    this.setState({ setPost: data.data })
  }

  async traerTags() {
    const res = TagsAPI();
    const { data } = await res;
    let TagOpciones = [];
    data.data.map((valor, i) => {
      if (valor !== '' && valor !== null) {
        var valorLimpio = valor.replace(/[.#,┤├:"'!*+\-?^${}()|[\]\\]/g, '')
        if (valorLimpio !== '' && valorLimpio !== null)
          TagOpciones.push({
            value: valorLimpio,
            label: valorLimpio
          });
      }
    })

    this.setState({ setTags: TagOpciones })
  }

  render() {
    return (
      <>
        <Nav />
        <main role="main" className="flex-shrink-0 mt-3">
          <div className="container-fluid">
            <div className='card border-secondary border rounded border-1 border-light'>
              <div className='card-header text-dark bg-light '>
                Post del Sistema dummyapi.io
              </div>
              <div className='card-body'>
                <div className="container">
                  <div className="row">
                    <div className="col-md-3 col">
                      <div className="card bg-light mb-3">
                        <div className="card-header"><i className="fas fa-search"></i> Filtrar post por Tag</div>
                        <div className="card-body">
                          <Select options={this.state.setTags} onChange={(e) => this.handleChange(e)} />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-9 col ">
                      <div className="card bg-light mb-3">
                        <div className="card-header"><i className="fa-solid fa-signs-post"></i> Post Registrados</div>
                        <div className="card-body">
                          {this.state.setPost.length === 0 ? (
                            <div className="alert alert-warning d-flex align-items-center" role="alert">

                              <div>
                                No existen post con el tag {this.state.setTag}
                              </div>
                            </div>
                          ) : (
                            this.state.setPost.map((e, i) => {
                              return <PostPublicaciones data={e} key={i} />;
                            })
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
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

export default Publicaciones;