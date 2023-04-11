import { useStore } from "effector-react"
import { FC, useEffect, useState } from "react"
import styled from "styled-components"
import { $pickedObject } from "../../../store/askAnswers"
import { setCharModal } from "../../../store/CharModal"
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
    justify-content: center;
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-start;
    gap: 15px;
`


const WrapperForObject: FC<IWrapperForObject> = ({textOne, textTwo}) => {
    const pickedObject = useStore($pickedObject)
    const [wordForButton, setWordForButton] = useState('В игру')


    useEffect(() => {
        if(pickedObject.index === 'b') setWordForButton('Вот это да!')
        if(pickedObject.index === 'z') setWordForButton('Ого!')
        if(pickedObject.index === 'k') setWordForButton('Хмм.. Интересно')
    }, [pickedObject])


    const buttonHandler = () => {
        if(pickedObject.index === 'h') setCurPage(5)
        else if(pickedObject.index === 'o') setCurPage(6)
        else if(pickedObject.index === 'ch') setCurPage(7)
        else if(pickedObject.index === 'k') {
            setCharModal()
            setCurPage(3)
        }
        else if (pickedObject.index === 'z') {
            setCharModal()
            setCurPage(3)
        }
        else if (pickedObject.index === 'b') {
            setCharModal()
            setCurPage(3)
        }
        else if (pickedObject.index === 'u') {
            setCurPage(8)
        }
    }


    return (
        <StyledWrapperForObject>
            <WrapperForText>
                <p>{textTwo}</p>
                <p>{textOne}</p>
            </WrapperForText>
            <GreenButton func={buttonHandler}>{wordForButton}</GreenButton>
        </StyledWrapperForObject>
    )
}

export default WrapperForObject