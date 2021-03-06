import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: #bf7e00;
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: columnn;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }

  @media screen and (max-width: 414px) {
    margin-top: 80px;
  }

  @media screen and (max-width: 375px) {
    margin-top: 80px;
  }
`;

export const Icon = styled(Link)`
  margin-left: 24px;
  margin-top: 24px;
  justify-self: flex-start;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 1.5rem;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 600px;
  margin-top: 40px;

  @media screen and (max-width: 480px) {
    padding: 10px;
    width: 300px;
    margin-top: 20px;
  }
  @media screen and (max-width: 414px) {
    padding: 10px;
    width: 400px;
    margin-top: 20px;
  }
`;

export const Form = styled.form`
  background: #010101;
  max-width: 600px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }

  @media screen and (max-width: 414px) {
    padding-top: 20px;
    margin-top: -80px;
  }

  @media screen and (max-width: 375px) {
    margin-top: 20px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`;

export const FormInputMessage = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
  height: 200px;
`;

export const FormButton = styled.button`
  background: #ffca63;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #000;
  font-size: 20px;
  cursor: pointer;
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`;

export const Success = styled.span`
  color: blue;
  padding: 10px 15px;
`;

export const Err = styled.span`
  color: red;
  padding: 10px 15px;
`;
