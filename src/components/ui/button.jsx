import styled from '@emotion/styled';

const Button = styled.a`
    display: inline-block;
    background: crimson;
    color: #fff;
    font-size: 25px;
    padding: 12px 36px;
    margin-top: 20px;
    border-radius: 6px;
    border: solid 2px crimson;
    transition: all 0.3s ease;
    :hover {
        color: crimson;
        background: none;
    }
`;
 
export default Button;