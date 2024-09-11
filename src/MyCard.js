import styled from "styled-components";
const Card = styled.div`
    width: ${props => {
        switch(props.size) {
            case 'l':
                return '400px';
            case 's':
                return '200px';
            default:
                return '300px';
        }
    }};
    min-height: 300px;
    background: ${props => (props.primary ? 'pink' : 'white')};
    border-radius: 10px;
    transition: 0.3s;
    box-shadow: 0px 0px 15px -5px #777777;
    padding: 10px;
    cursor: pointer;
    h2 {
        font-weight: bold;
        font-size: 20px;
        line-height: 1.5em;
        letter-spacing: 0.01em;
    }
    p {
        font-size: 15px;
        letter-spacing: 0.01em;
        line-height: 1.5em;
        margin: 10px 0 0 0;
    }
    &:hover {
        box-shadow: 0px 0px 15px 0px #777777;
    }
    &:active {
        box-shadow: 0px 0px 15px -10px #777777;
    }
    @media (max-width: 768px) {
        width: 70%;
    }
`;
export default function MyCard({children, primary, size}) {
    return(
        <Card primary={primary} size={size}>
            {children}
        </Card>
    )
}