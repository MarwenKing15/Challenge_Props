import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram,faFacebook,faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import './styles/Footer.css'

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4" id="cont">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Legendary Motorsport</h5>
            <p>
              Legendary Motorsport is a vehicle sales business that sells super cars as well as classic and rare vehicles.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Social Media</h5>
            <ul class="iconList">
          <li class="iconItem">
            <a href="#insta" className="iconLink"><FontAwesomeIcon icon={faInstagram} className="ii"/></a>
          </li>
          <li class="iconItem">
            <a href="#face" className="iconLink"><FontAwesomeIcon icon={faFacebook} className="ii"/></a>
          </li>
          <li className="iconItem">
            <a href="#twit" className="iconLink"><FontAwesomeIcon icon={faTwitter} className="ii"/></a>
          </li>
          <li className="iconItem">
            <a href="#mail" className="iconLink"><FontAwesomeIcon icon={faMailBulk} className="ii"/></a>
          </li>   
        </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://github.com/MarwenKing15"> Marwen Touati </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;