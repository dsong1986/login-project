import React, { useState } from "react";
import Login from "./Login";
import "../../css/header.css"
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle
} from "mdb-react-ui-kit";
import { nav } from "../data/Data";

export default function Header() {
  const [showBasic, setShowBasic] = useState(false);
  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);
  const [navList, setNavList] = useState(false);

  return (
    <>
      <header>
        <div className="container flex">
          <div className="logo">
            <img src="./images/logo.png" alt="" />
          </div>
          <div className="nav">
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <BrowserRouter>
                    <Link to={list.path}>{list.text}</Link>
                  </BrowserRouter>
                </li>
              ))}
            </ul>
          </div>
          <div className="button flex">
            <MDBBtn onClick={toggleShow}>Sign in</MDBBtn>
            <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
              <MDBModalDialog>
                <MDBModalContent>
                  <MDBModalHeader>
                    <MDBModalTitle>Log in or Sign up</MDBModalTitle>
                    <MDBBtn
                      className="btn-close"
                      color="none"
                      onClick={toggleShow}
                    ></MDBBtn>
                  </MDBModalHeader>
                  <Login />
                </MDBModalContent>
              </MDBModalDialog>
            </MDBModal>
          </div>

          <div className="toggle">
            <button onClick={() => setNavList(!navList)}>
              {navList ? (
                <i className="fa fa-times"></i>
              ) : (
                <i className="fa fa-bars"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
