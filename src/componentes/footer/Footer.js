import React from 'react';

class Footer extends React.Component {

  render() {

    return (

      <footer className="bg-dark text-center text-lg-start text-white">
        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            © {(new Date().getFullYear())} Copyright: &nbsp;
            <span >Presentado por Hernan Gonzalez</span>
           
        </div>
        
    </footer>
       

    )
    
  }

}

export default Footer;