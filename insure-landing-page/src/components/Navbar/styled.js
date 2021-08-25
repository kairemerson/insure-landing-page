import styled from "styled-components";
import colors from "../../colors";

export const WrapperNav = styled.nav`
    display: flex;
    align-items: baseline;
    ul{
        list-style: none;
        display: flex;
        li{
            margin-right: 20px;
            color: ${colors.darkGrayishViolet};
            cursor: pointer;
        }
        li:hover{
            color: ${colors.veryDarkViolet};
            font-weight: 500;
        }
    }
`