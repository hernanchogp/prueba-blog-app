import React from "react";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";

class Publicaciones extends React.Component {
  render() {

    return (
      <>
        <Nav />
        <main role="main" className="flex-shrink-0 mt-2">

          <div className="container-fluid">
            <div className='card border-secondary border rounded border-1 border-light'>
              <div className='card-header text-dark bg-light '>
                Post del Sistema dummyapi.io
              </div>
              <div className='card-body'>
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