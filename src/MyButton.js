import styled from "styled-components";
const Button = styled.button`
    width: 150px;
    background-color: ${props => (props.primary ? 'red' : 'gray')};
    color: white;
    border: none;
    border-radius: 25px;
    height: 50px;
    transition: .3s;
    cursor: pointer;
    &:hover {
        opacity: 0.5;
    }
`;
export function MyButton({children, primary}) {
    return(
        <Button primary={primary}>
            {children}
        </Button>
    )
}
