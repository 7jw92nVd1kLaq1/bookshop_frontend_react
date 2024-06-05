import { styled } from "styled-components";
import { ButtonSize, SchemaType } from "../../style/theme";
import React from "react";


interface ButtonProps {
  children: React.ReactNode;
  size: ButtonSize;
  scheme: SchemaType;
  disabled: boolean;
  isLoading: boolean;
  onClick?: () => void | Promise<void>;
}

const Button : React.FC<ButtonProps> = ({
  children,
  size,
  scheme,
  disabled,
  isLoading,
  onClick
}) => {
  return (
    <ButtonStyle 
      size={size} 
      scheme={scheme} 
      disabled={disabled} 
      isLoading={isLoading}
      onClick={onClick}
    >
      {children}
    </ButtonStyle>
  );
};

const ButtonStyle = styled.button<Omit<ButtonProps, 'children'>>`
  background-color: ${props => props.theme.buttonSchema[props.scheme].backgroundColor};
  color: ${props => props.theme.buttonSchema[props.scheme].color};
  font-size: ${props => props.theme.button[props.size].fontSize};
  padding: ${props => props.theme.button[props.size].padding};
  border: 0;
  border-radius: ${props => props.theme.button[props.size].borderRadius};
  pointer-events: ${props => props.disabled || props.isLoading ? 'none' : 'auto'};
`;

export default Button;