import Man from "../../assets/icons/man.svg";
import { LinkGlobal } from "../link/LinkGlobal";
import Logo from "../../assets/icons/logo.svg";
import Telephone from "../../assets/icons/telephone.svg";
import Button from "../../assets/icons/button.svg";
import Rectangle from "../../assets/icons/rectangle.svg";
import Burger from "../../assets/icons/burger.svg";
import SignUp from "../../assets/icons/signUp.svg";
import OrderaCall from "../../assets/icons/orderaCall.svg";

import { useState } from "react";
import Modal from "../Modal";
import "./Main.css";

export const Main = () => {
  const [openModal1, setOpenModal1] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);

  function openModalHandler1() {
    setOpenModal1(true);
  }

  function openModalHandler2() {
    setOpenModal2(true);
  }

  function closeModalHandler1() {
    setOpenModal1(false);
  }

  function closeModalHandler2() {
    setOpenModal2(false);
  }
  return (
    <>
      <div className="GlobalContainer">
        <div className="Globalchaild">
          <img className="ImgLogo" src={Logo} alt="Logo" />
        </div>
        <div className="LinkGlobalContainer">
          <LinkGlobal className="LinkGlobal " />
        </div>
        <div className="ContainerTelephone">
          <img
            onClick={openModalHandler1}
            className="Burger"
            src={Burger}
            alt="Burger"
          />
          {openModal1 && <Modal closeModalHandler={closeModalHandler1} />}
          <img className="ImgTelephone" src={Telephone} alt="Telephone" />
          <h3 className="H3Hello">8-345-123-34-45</h3>
        </div>
      </div>

      <div className="Container">
        <h1 className="H1Hello">
          Создаю условия <br /> для вашего успеха
        </h1>
        <p className="tet">
          Когда ваше время и энергия лучше сфокусированы, стремление к новым
          <br />
          возможностям становится реальностью, ваш успех зависит от ваших
          действий
        </p>

        <h3 className="h3noneGlobal">
          Создаю условия для <br /> вашего <br /> успеха
        </h3>
        <p className="PnoneGlobal">
          Ваш успех зависит от ваших <br /> действий
        </p>
        <img className="SignUp" src={SignUp} alt="SignUp" />
        <img className="OrderaCall" src={OrderaCall} alt="OrderaCall" />

        <div className="ImgContainer">
          <img
            onClick={openModalHandler2}
            style={{ width: "14rem", height: "6rem" }}
            src={Rectangle}
            alt="Rectangle"
          />
          <img
            style={{ width: "14rem", height: "6rem" }}
            src={Button}
            alt="Button"
          />
          {openModal2 && <Modal closeModalHandler={closeModalHandler2} />}
        </div>
        <img className="Man" src={Man} alt="Man" />
      </div>
    </>
  );
};
