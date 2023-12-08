import styled from "styled-components";

type TSections = {
    id: number,
    title: string,
    dateStart: number,
    dateEnd: number,
    events: {
        id: number,
        date: number,
        event: string
    }[]
}[]

const StyledPadding = styled.div`
    padding-left: 18%;
    padding-right: 9%;
`
const StyledContainer = styled.div`
    position: relative;
    border-left: 1px solid #e9ebf1;
    border-right: 1px solid #e9ebf1;
    height: 100vh;
`
const StyledVerticalLine = styled.div`
    position: absolute;
    left: 50%;
    height: 100vh;
    border-left: 1px solid #e9ebf1;
`
const StyledHorizontalLine = styled.div`
    position: absolute;
    top: 45%;
    width: 100%;
    border-top: 1px solid #e9ebf1;
`
export const HistoricalBlock = ({sections}: {sections: TSections}) => { 

    
    return (
        <StyledPadding>  
            <StyledContainer>
           
                <StyledVerticalLine/>
                
                <StyledHorizontalLine></StyledHorizontalLine>
                   
            </StyledContainer>
        </StyledPadding>
    )
}

