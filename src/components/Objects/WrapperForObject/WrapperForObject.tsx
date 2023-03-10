import { useStore } from "effector-react"
import { FC } from "react"
import styled from "styled-components"
import { $pickedObject } from "../../../store/askAnswers"
import { setCurPage } from "../../../store/page"
import GreenButton from "../../UI/GreenButton/GreenButton"

interface IWrapperForObject {
    textOne: string
    textTwo: string
}

const StyledWrapperForObject = styled.div`
    position: absolute;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    left: 5%;
    bottom: 0;
    padding-bottom: 5%;
    box-sizing: border-box;
    height: 80%;
    max-height: 80%;
    width: 90%;
`

const WrapperForText = styled.div`
    width: 75%;
    height: 90%;
    font-size: 16px;
    color: white;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: 10%;
`


const WrapperForObject: FC<IWrapperForObject> = ({textOne, textTwo}) => {
    const pickedObject = useStore($pickedObject)


    const buttonHandler = () => {
        if(pickedObject.index === 'h') setCurPage(5)
        else if(pickedObject.index === 'o') setCurPage(6)
        else if(pickedObject.index === 'ch') setCurPage(7)
    }


    return (
        <StyledWrapperForObject>
            <WrapperForText>
                <p>{textOne}</p>
                <p>{textTwo}</p>
            </WrapperForText>
            <GreenButton func={buttonHandler}>Старт</GreenButton>
        </StyledWrapperForObject>
    )
}

export default WrapperForObject