import styled from "styled-components";

export const FeedbackButton = styled.button`
    margin: 15px;
    width: 150px;
    height: 50px;
    border: none;
    border-radius: 4px;
    background-color: ${(props) => {
        switch (props.children) {
            case "Good":
                return "green";

            case "Neutral":
                return "yellow";
            case "Bad":
                return "red";
            default:
                ;
        }   
    }};
    cursor: pointer;
    font-weight: 700;
    
    :hover {
        transform: scale(1.2)
    }
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
`