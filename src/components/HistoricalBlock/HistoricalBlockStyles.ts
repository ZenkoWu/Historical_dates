import styled from "styled-components";
import { CIRCLE_DIAMETER } from "../../constants";

export const StyledPadding = styled.div`
    padding-left: 18%;
    padding-right: 9%;

    @media (max-width: 576px) {
        padding: 0 20px;
    }
`
export const StyledContainer = styled.div`
    position: relative;
    border-left: 1px solid #e9ebf1;
    border-right: 1px solid #e9ebf1;
    height: 100vh;

    @media (max-width: 576px) {
        border: none;
    }
`
export const StyledVerticalLine = styled.div`
    position: absolute;
    left: 50%;
    height: 100vh;
    border-left: 1px solid #e9ebf1;

    @media (max-width: 576px) {
        border: none;
    }
`
export const StyledHorizontalLine = styled.div`
    position: absolute;
    top: 45%;
    width: 100%;
    border-top: 1px solid #e9ebf1;

    @media (max-width: 576px) {
        border: none;
    }
`
export const StyledCenter = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0; 
    bottom: 0;
    width: 0;
    height: 0;
    margin: auto;

    @media (max-width: 576px) {
        display: none;
    }
`

export const StyledCircle = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0; 
    bottom: 0;
    margin: auto;
    height: ${CIRCLE_DIAMETER}vw;
    width: ${CIRCLE_DIAMETER}vw;
    border: 1px solid #d4dee3;
    border-radius: 50%; 

    @media (max-width: 576px) {
        display: none;
    }
`
export const StyledPoint = styled.div<{left: number, top: number, isBorder: boolean}>`
    position: absolute;
    z-index: 1000;
    left: ${({left}: {left: number}) => left}px;
    top: ${({top}:{top: number}) => top}px;
    display: flex; 
    align-items: center;
    gap: 10px;
    border:  ${({isBorder}: {isBorder:boolean}) => isBorder ? '3px solid grey': 'none'};
    border-radius: 50%;

    &:hover {
        border: none !important;
        width: 10px;
        transition: all 0.5s ease-out;
        transform: scale(110%);
    }

    &:hover .section {
        display: flex;
        transition: transform 4s ease-in-out 3s;
    }

`
export const StyledSection = styled.div<{isDisplay: boolean}>`
    position: absolute;  
    top: -20px; 
    left: -20px; 
    display: ${({isDisplay}:{isDisplay: boolean}) =>  isDisplay ? 'flex' : 'none'}; 
    align-items: center; 
    gap: 15px; 
`
export const StyledSectionBtn = styled.button`
    width: 3vw;
    height: 3vw;  
    cursor: pointer;
    border-radius: 50%;
    border: 1px solid grey;
    background-color: #f4f5f9;

    &:hover {
        transform: scale(110%);
        transition: all 1s ease-out;
    }
`
export const StyledSectionTitle = styled.h4`
    fontSize: 1.2vw;
`
export const StyledSectionTitleMobile = styled.h4`
    display: none;

    @media (max-width: 576px) {
        display: block;
        padding: 4vh 0;
        padding-top: 7vh;
        margin: 0 4vw;
        border-bottom: 2px solid #e1e1e3;
    }
`
export const StyledPeriod = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0; 
    bottom: 0;
    width: 50vw;
    height: 15vh; 
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    margin: auto;
    z-index: 2;
    font-size: 9vw; 

    @media (max-width: 576px) {
        position: relative;
        font-size: 17vw; 
        font-weight: bold;
        top: -20vh;
    }
`
export const StyledStartDate = styled.p`
    color: #5d5fef;
`
export const StyledEndDate = styled.p`
    color: #ef5da8;
`
export const StyledTextContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 10%;
    padding-bottom: 5%;

    @media(max-width: 576px) {
        padding-top: 0;
        padding-bottom: 2%;
        justify-content: center;
    }
`

export const StyledGradient = styled.div`
    border-image: 
        linear-gradient(
            to bottom, 
            #2E9AFF,
            #F498AD
        )
        1 100% 50 /
        0px 0 69px 5px /
        0px 0
        stretch;
    padding-left: 3vw; 

    @media(max-width: 576px) {
        border-image: none;
    }
`
export const StyledHeadingContainer = styled.div`
    padding-bottom: 22%;
    
    @media(max-width: 576px) {
        padding: 0;
        margin-bottom: 45%;
     }
`

export const StyledHeading = styled.h1`
    font-size: 3vw;
    max-width: 33%;

    @media(max-width: 576px) {
       font-size: 6vw;
    }
`
export const StyledBtnContainer = styled.div`
    padding-left: 3vw; 
    font-weight: bold; 
    padding-bottom: 5%;

    @media(max-width: 576px) { 
        position: absolute;
        bottom: 0;
        order: 3;
    }
`
export const StyledBtnTitle = styled.p`
    font-size: 1.1vw;

    @media(max-width: 576px) {
        font-size: 3.5vw;
    }
`
export const StyledBtnGroup = styled.div`
    display: flex;
    gap: 1vw;
    padding-top: 10px;

    @media(max-width: 576px) {
        gap: 2vw;
    }
`
export const StyledPrevNextBtn = styled.button`
    font-size: 1.5vw;
    cursor: pointer;
    color: #586a8a;
    width: 3vw;
    height: 3vw; 
    border: 1px solid #586a8a;
    border-radius: 50%; 
    background-color: transparent;

    &:disabled {
        color: #c0c8d6;
        border: 1px solid #c0c8d6;
    }

    @media(max-width: 576px) {
        font-size: 3vw;
        width: 6vw;
        height: 6vw;
    }
`