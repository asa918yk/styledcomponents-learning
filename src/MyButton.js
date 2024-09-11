import styled from "styled-components";
const Button = styled.button`
    width: ${props => {
        switch(props.size) {
            case 'l':
                return '200px';
            case 's':
                return '100px';
            default:
                return '150px';
        }
    }};
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
export function MyButton({children, primary, size}) {
    return(
        <Button primary={primary} size={size}>
            {children}
        </Button>
    )
}
