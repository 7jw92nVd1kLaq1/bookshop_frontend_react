import React from "react";
import { styled } from "styled-components";
import { ColorKey, HeadingSize } from "../../style/theme";


interface TitleProps {
  children: React.ReactNode;
  size: HeadingSize;
  color?: ColorKey;
}


const Title : React.FC<TitleProps> = ({children, size, color}) => {
  return (
    <TitleStyle color={color} size={size}>
      {children}
    </TitleStyle>
  )
};

const TitleStyle = styled.h1<Omit<TitleProps, 'children'>>`
  font-size: ${props => props.theme.heading[props.size].fontSize};
  font-weight: ${props => props.theme.heading[props.size].fontWeight};
  color: ${props => props.color ? props.theme.color[props.color] : props.theme.color.primary}; 
`;

export default Title;