import { FC } from "react"
import styled from "styled-components"
import { pickObject } from "../../store/askAnswers"
import { setCurPage } from "../../store/page"

const StyledSvg = styled.svg`
    position: absolute; 
    @media (max-width: 375px) {
        left: 200px;
        bottom: 10px;
    }
    @media (min-width: 375px) and (max-width: 425px) {
        left: 235px;
        bottom: 13px;
    }
    @media (min-width: 425px) and (max-width: 768px) {
        left: 270px;
        bottom: 15px;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        left: 500px;
        bottom: 25px;
    }
    @media (min-width: 1024px) and (max-width: 1440px) {
        left: 665px;
        bottom: 25px;
    }
    @media (min-width: 1440px) {
        left: 935px;
        bottom: 55px;
    }
`

const Mark2: FC<{vis: boolean}> = ({vis}) => {

    const clickHandler = () => {
        pickObject('k')
        setCurPage(4)
    }

    return (
        <>
            {vis? <StyledSvg onClick={clickHandler} width="21" height="41" viewBox="0 0 21 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.9999 20.5086C16.2423 20.1248 20.3763 15.75 20.3763 10.4096C20.3763 4.81693 15.8426 0.283203 10.2499 0.283203C4.65729 0.283203 0.123566 4.81693 0.123566 10.4096C0.123566 15.7499 4.25751 20.1248 9.49992 20.5086L9.49994 40.1353H10.9999L10.9999 20.5086ZM14.3856 6.27145V14.5458V14.5474C12.0991 14.5474 10.244 12.7027 10.2552 10.4039C10.2552 8.12738 12.0991 6.27145 14.3856 6.27145ZM10.2441 10.4123C10.2437 8.12505 8.38879 6.28071 6.11366 6.28071V14.5439C8.39993 14.5439 10.2437 12.6996 10.2441 10.4123ZM10.2441 10.4123C10.2441 10.4126 10.2441 10.4129 10.2441 10.4131V10.4115C10.2441 10.4118 10.2441 10.4121 10.2441 10.4123Z" fill="white"/></StyledSvg>
            : 
            <StyledSvg width="21" height="41" viewBox="0 0 21 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.5517 20.5086C16.7941 20.1248 20.9281 15.75 20.9281 10.4096C20.9281 4.81693 16.3943 0.283203 10.8017 0.283203C5.20905 0.283203 0.675323 4.81693 0.675323 10.4096C0.675323 15.7499 4.80927 20.1248 10.0517 20.5086L10.0517 40.1353H11.5517L11.5517 20.5086ZM14.9374 6.27145V14.5458V14.5474C12.6508 14.5474 10.7958 12.7027 10.8069 10.4039C10.8069 8.12738 12.6508 6.27145 14.9374 6.27145ZM10.7958 10.4123C10.7954 8.12505 8.94055 6.28071 6.66541 6.28071V14.5439C8.95169 14.5439 10.7954 12.6996 10.7958 10.4123ZM10.7958 10.4123C10.7958 10.4126 10.7958 10.4129 10.7958 10.4131V10.4115C10.7958 10.4118 10.7958 10.4121 10.7958 10.4123Z" fill="white" fill-opacity="0.5"/></StyledSvg>
            }
        </>
    )
}

export default Mark2