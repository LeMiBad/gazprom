import { FC } from "react"
import styled from "styled-components"

const StyledSvg = styled.svg`
    position: absolute; 
    @media (max-width: 375px) {
        left: 213px;
        bottom: 45px;
    }
    @media (min-width: 375px) and (max-width: 425px) {
        left: 250px;
        bottom: 50px;
    }
    @media (min-width: 425px) and (max-width: 768px) {
        left: 285px;
        bottom: 60px;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        left: 525px;
        bottom: 105px;
    }
    @media (min-width: 1024px) and (max-width: 1440px) {
        left: 710px;
        bottom: 140px;
    }
    @media (min-width: 1440px) {
        left: 990px;
        bottom: 190px;
    }
`

const Mark3: FC<{vis: boolean}> = ({vis}) => {

    return (
        <>
            {vis? <StyledSvg width="22" height="41" viewBox="0 0 22 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.6724 20.5086C16.9148 20.1248 21.0488 15.75 21.0488 10.4096C21.0488 4.81693 16.5151 0.283203 10.9224 0.283203C5.32981 0.283203 0.796082 4.81693 0.796082 10.4096C0.796082 15.7499 4.93003 20.1248 10.1724 20.5086L10.1725 40.1353H11.6725L11.6724 20.5086ZM15.8727 9.16183H13.045L14.4474 6.70833L12.3037 5.45774L10.9223 7.87312L9.54274 5.45774L7.3991 6.70833L8.80151 9.16183H5.97381V11.6592H8.75769L7.35527 14.1127L9.49891 15.3614L10.9223 12.8697L12.3476 15.3614L14.4912 14.1127L13.0888 11.6592H15.8727V9.16183Z" fill="white"/></StyledSvg>
            : 
            <StyledSvg width="21" height="41" viewBox="0 0 21 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.2242 20.5083C16.4666 20.1246 20.6006 15.7497 20.6006 10.4093C20.6006 4.81669 16.0668 0.282959 10.4742 0.282959C4.88157 0.282959 0.347839 4.81669 0.347839 10.4093C0.347839 15.7497 4.48179 20.1245 9.72419 20.5083L9.72421 40.135H11.2242L11.2242 20.5083ZM15.4244 9.16158H12.5967L13.9991 6.70808L11.8555 5.4575L10.474 7.87288L9.09449 5.4575L6.95085 6.70808L8.35327 9.16158H5.52557V11.6589H8.30944L6.90703 14.1124L9.05067 15.3611L10.474 12.8695L11.8993 15.3611L14.043 14.1124L12.6405 11.6589H15.4244V9.16158Z" fill="white" fill-opacity="0.5"/></StyledSvg>
            }
        </>
    )
}

export default Mark3