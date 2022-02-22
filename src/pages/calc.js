import React from "react";
import { useState } from "react";
import {
  Main,
  InputContainer,
  Numpad,
  Container,
  Input,
  Button,
  Grey,
  Orange,
} from "../styles/calc";

const Calc = () => {
  // Onchange Function is here
  const handleUpChange = (event) => {
    setResult(result.concat(event.target.value));
  };

  //  Operations function Starts Here

  //   AC Button
  const AllClear = () => {
    const newResult = "";
    setResult(newResult);
  };

  //   Output button is here
  const resultOutup = () => {
    setResult(eval(result).toString());
  };

  const [result, setResult] = useState("");

  return (
    <Container>
      <Main>
        <InputContainer>
          <Input type="text" value={result} placeholder="0" />
        </InputContainer>
        <Numpad>
          <Grey type="button" onClick={AllClear} value="AC" />
          <Grey type="button" value="+/-" />
          <Grey type="button" value="%" onClick={handleUpChange} />
          <Orange type="button" value="/" onClick={handleUpChange} />
          <Button type="button" value="7" onClick={handleUpChange} />
          <Button type="button" value="8" onClick={handleUpChange} />
          <Button type="button" value="9" onClick={handleUpChange} />
          <Orange type="button" value="*" onClick={handleUpChange} />
          <Button type="button" value="4" onClick={handleUpChange} />
          <Button type="button" value="5" onClick={handleUpChange} />
          <Button type="button" value="6" onClick={handleUpChange} />
          <Orange type="button" value="-" onClick={handleUpChange} />
          <Button type="button" value="1" onClick={handleUpChange} />
          <Button type="button" value="2" onClick={handleUpChange} />
          <Button type="button" value="3" onClick={handleUpChange} />
          <Orange type="button" value="+" onClick={handleUpChange} />
          <Button type="button" value="0" onClick={handleUpChange} />
          <Button type="button" value="." onClick={handleUpChange} />
          <Orange type="button" value="=" onClick={resultOutup} />
        </Numpad>
      </Main>
    </Container>
  );
};

export default Calc;
