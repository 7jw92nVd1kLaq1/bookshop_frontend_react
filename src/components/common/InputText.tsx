import React from "react";

import { styled } from "styled-components";


interface InputTextProps {
  placeholder: string;
}

const InputText = React.forwardRef((props: InputTextProps, ref: React.Ref<HTMLInputElement>) => {
  return (
    <InputTextStyle ref={ref} placeholder={props.placeholder} />
  );
});

const InputTextStyle = styled.input.attrs({type: "text"})`
  padding: 0.5rem;
  border: 1px solid ${props => props.theme.color.primary};
  border-radius: 0.25rem;
  font-size: 1rem;
  width: 100%;
`;

export default InputText;