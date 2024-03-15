/* eslint-disable react/prop-types */
import { styled } from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { Checkbox, TextField } from "@mui/material";
import Other from "../assets/icons/other.svg";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";

const Modal = ({ closeModalHandler }) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const Signup = (data) => {
    createUserWithEmailAndPassword(data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/trello");
        console.log(user, "userrrrrr");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <form onSubmit={handleSubmit(Signup)}>
      <StyledModal>
        <ContainerInput>
          <CloseIcon
            sx={{ color: "#fff", marginLeft: "20rem", marginTop: "2rem" }}
            onClick={closeModalHandler}
          />
          <h2
            style={{
              color: "#fff",
            }}
          >
            Закажите <br /> обратный звонок
          </h2>
          <TextField
            sx={{
              borderBottom: "1px solid #fff",
              width: "12rem",
              marginRight: "3rem",
            }}
            label="ИМЯ"
            type="search"
            variant="standard"
            {...register("email")}
          />
          {errors.email && <p>{errors.email.message}</p>}
          <TextField
            sx={{
              borderBottom: "1px solid #fff",
              width: "12rem",
              marginRight: "3rem",
            }}
            label="ТЕЛЕФОН"
            type="search"
            variant="standard"
            {...register("password")}
          />
          {errors.password && <p>{errors.password.message}</p>}

          <div>
            <Checkbox
              sx={{
                color: "white",
              }}
              defaultChecked
              color="success"
            />
            <span>
              Согласен на сохранение и обработку <br /> персональных данных
            </span>
          </div>
          <img
            style={{
              width: "14rem",
              height: "4rem",
              marginTop: "1rem",
            }}
            src={Other}
            alt="Other"
          />
        </ContainerInput>
      </StyledModal>
    </form>
  );
};
export default Modal;

const ContainerInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0.5rem;
    margin-right: 0.5rem;
  }
  label {
    color: #fff;
  }
  span {
    color: #ffffff;
    font-size: 0.8rem;
  }
  input {
    color: #fff;
  }
  p {
    margin-top: 30rem;
  }
  img {
    width: 14rem;
  }
`;

const StyledModal = styled.div`
  position: absolute;
  z-index: 20;
  width: 24rem;
  height: 100%;
  top: 0%;
  left: 0%;
  background-color: #0f1d45;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
