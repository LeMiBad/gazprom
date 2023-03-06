import { FC } from "react"
import styled from "styled-components"

const StyledSvg = styled.svg`
    position: absolute; 
    @media (max-width: 375px) {
        left: 115px;
        bottom: 91px;
    }
    @media (min-width: 375px) and (max-width: 425px) {
        left: 137px;
        bottom: 107px;
    }
    @media (min-width: 425px) and (max-width: 768px) {
        left: 156px;
        bottom: 122px;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        left: 290px;
        bottom: 222px;
    }
    @media (min-width: 1024px) and (max-width: 1440px) {
        left: 391px;
        bottom: 295px;
    }
    @media (min-width: 1440px) {
        left: 550px;
        bottom: 415px;
    }
`

const Mark7: FC<{vis: boolean}> = ({vis}) => {

    return (
        <>
            {vis? <StyledSvg width="21" height="57" viewBox="0 0 21 57" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.2709 20.2387C16.5566 19.8994 20.7387 15.5048 20.7387 10.1334C20.7387 4.54081 16.2049 0.00708008 10.6123 0.00708008C5.01967 0.00708008 0.485941 4.54081 0.485941 10.1334C0.485941 15.4428 4.57194 19.7977 9.77093 20.2254L9.77098 56.1353H11.271L11.2709 20.2387ZM5.88572 14.412C5.88572 11.7747 7.99561 9.62458 10.6122 9.62409C13.2288 9.62458 15.3387 11.7618 15.3387 14.412L5.88572 14.412ZM5.8858 9.59321C5.8858 6.95594 7.99569 4.80584 10.6123 4.80534C13.2289 4.80583 15.3388 6.94302 15.3388 9.59321L5.8858 9.59321ZM10.6123 4.80534C10.6126 4.80534 10.6129 4.80534 10.6132 4.80534H10.6114C10.6117 4.80534 10.612 4.80534 10.6123 4.80534Z" fill="white"/></StyledSvg>
            : 
            <StyledSvg width="21" height="57" viewBox="0 0 21 57" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.5237 20.2387C16.8093 19.8994 20.9914 15.5048 20.9914 10.1334C20.9914 4.54081 16.4577 0.00708008 10.865 0.00708008C5.2724 0.00708008 0.738674 4.54081 0.738674 10.1334C0.738674 15.4428 4.82468 19.7977 10.0237 20.2254L10.0237 56.1353L11.5237 56.1353L11.5237 20.2387ZM6.13845 14.412C6.13845 11.7747 8.24834 9.62458 10.8649 9.62409C13.4815 9.62458 15.5914 11.7618 15.5914 14.412L6.13845 14.412ZM6.13853 9.59321C6.13853 6.95594 8.24842 4.80584 10.865 4.80534C13.4816 4.80583 15.5915 6.94302 15.5915 9.59321L6.13853 9.59321ZM10.865 4.80534C10.8653 4.80534 10.8656 4.80534 10.8659 4.80534H10.8641C10.8644 4.80534 10.8647 4.80534 10.865 4.80534Z" fill="white" fill-opacity="0.5"/></StyledSvg>
            }
        </>
    )
}

export default Mark7