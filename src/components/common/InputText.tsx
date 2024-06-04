import React from "react";
import { styled } from "styled-components";


interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement>{
  placeholder: string;
  inputType: string;
}

const InputText = React.forwardRef((props: InputTextProps, ref: React.Ref<HTMLInputElement>) => {
  return (
    <InputTextStyle 
      ref={ref} 
      type={props.inputType}
      {...props}
    />
  );
});

const InputTextStyle = styled.input`
  padding: 1rem;
  border: 1px solid ${props => props.theme.color.primary};
  border-radius: 0.25rem;
  font-size: 1rem;
  width: 100%;
`;

export default InputText;