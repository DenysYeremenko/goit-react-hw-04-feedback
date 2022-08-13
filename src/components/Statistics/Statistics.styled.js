import styled from "styled-components";

export const StatisticsList = styled.ul`
    list-style: none;
    display: flex;
    border-radius: 4px;
    background-color: #9595955e;
    padding: 10px;
`

export const StatisticsListItem = styled.li`
    margin: 10px;
    font-weight: 700;
    color: ${(props) => {
        switch (props.children[0]) {
            case "Good: ":
                return "green";
            case "Neutral: ":
                return "yellow";
            case "Bad: ":
                return "red";
            default:
            return "rgb(33,150,243)"    ;
        }   
    }};
`