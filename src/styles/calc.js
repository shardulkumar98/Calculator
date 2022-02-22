import styled from "styled-components";

export const Container = styled.div`
  /* border: 1px solid green; */
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: #000; */
  height: 100vh;
  align-items: center;
`;
export const Main = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid red; */
  height: 600px;
  width: 376px;
  background-color: #000;
  color: #fff;
`;

export const Numpad = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 0fr);
  grid-gap: 15px;
  padding: 0px 40px;
`;
export const InputContainer = styled.div`
  width: 375px;
`;
export const Input = styled.input`
  font-size: 1.8rem;
  background: #000;
  color: #fff;
  height: 120px;
  text-align: right;

  /* border: 1px solid green; */
  border: none;
  outline: none;
  /* margin: 0px 35px; */
  padding: 0px 35px;
`;
export const Button = styled.input`
  width: 60px;
  height: 60px;
  border: none;
  background: #2c3333;
  color: #fff;
  font-size: 1.4rem;
  border-radius: 52px;
  cursor: pointer;
`;

export const Grey = styled(Button)`
  background: #d1d1d1;
  color: #000;
`;

export const Orange = styled(Button)`
  background: #f3950d;
  color: #fff;
`;

export const Zero = styled(Button)`
  width: 200px;
`;
