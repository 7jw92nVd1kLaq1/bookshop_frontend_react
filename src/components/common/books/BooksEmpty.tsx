import styled from "styled-components";


const BooksEmpty = () => {
  return (
    <BooksEmptyStyle>
        <h1>BooksEmpty</h1>
    </BooksEmptyStyle>
  )
};

const BooksEmptyStyle = styled.div`
  width: 100%;
  h1 {
    font-size: 2rem;
    color: ${props => props.theme.color.primary};
    text-align: center;
  }  
`;

export default BooksEmpty;