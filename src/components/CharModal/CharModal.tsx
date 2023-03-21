import { useStore } from "effector-react"
import { FC, useEffect, useState } from "react"
import styled from "styled-components"
import { $pickedObject, completeObject } from "../../store/askAnswers"
import { setCurPage } from "../../store/page"
import Cross from "../UI/Cross/Cross"
import GreenButton from "../UI/GreenButton/GreenButton"
import bBack from './bBack.png'
import chBack from './chBack.png'
import kBack from './kBack.png'
import oBack from './oBack.png'
import uBack from './uBack.png'
import zBack from './zBack.png'
import hBack from './hBack.png'
import { setCharModal } from "../../store/CharModal"
import Char from "../UI/Char/Char"

const ModalPhone = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(1.5px);
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ModalWrapper = styled.div`
    width: 100%; 
    height: 100%;
    filter: drop-shadow(0px 4px 20px rgba(21, 184, 173, 0.8));
    display: flex;
    justify-content: center;
    align-items: center;
`

const Modal = styled.div`
    position: relative;
    width: 55%;
    height: 60%;
    /* background: linear-gradient(90deg, #BEE4FA 32.87%, rgba(190, 228, 250, 0) 60.25%); */
    filter: drop-shadow(0px 4px 20px rgba(21, 184, 173, 0.8));
    background: rgba(21, 184, 173, 0.8);
`

const ModalImg = styled.img`
    position: relative; 
    width: 100%;
    height: 100%; 
    z-index: -1;
`

const ModalName = styled.h1`
    position: absolute;
    left: 3%;
    top: 3%;
    font-size: 16px;
    color: #1570B8;
`
const ModalDesk = styled.h1`
    position: absolute;
    left: 3%;
    bottom: 3%;
    font-size: 14px;
    color: #1570B8;
    width: 40%;
`


const CrossWrapper = styled.div`
    position: absolute;
    right: 1%;
    top: 2%;
`

const ButtonWrapper = styled.div`
    position: absolute;
    z-index: 100000000000;
    right: 5%;
    bottom: -25px;
`


interface IObjectModal {
    close?: () => void
    data?: {
        name: string
        desk: string
        image: string
        smallImage: string
        backImage: string
    }
}


const CharModal: FC<IObjectModal> = ({close, data}) => {
    const currentObj = useStore($pickedObject)
    const [img, setImg] = useState(bBack)

    const clickHandler = () => {
        completeObject(currentObj.index)
        setCharModal()
        setCurPage(3)
    }

    useEffect(() => {
        if(currentObj.index === 'b') setImg(bBack)
        if(currentObj.index === 'h') setImg(hBack)
        if(currentObj.index === 'z') setImg(zBack)
        if(currentObj.index === 'o') setImg(oBack)
        if(currentObj.index === 'k') setImg(kBack)
        if(currentObj.index === 'u') setImg(uBack)
        if(currentObj.index === 'ch') setImg(chBack)
    }, [currentObj])


    return <ModalPhone>
                <ModalWrapper>
                    <Modal>
                        <div style={{position: 'absolute', zIndex: 1000, width: '100%', height: '100%', background: 'rgba(21, 151, 184, 0.3)'}}></div>
                        <ModalImg alt='dw' src={img}></ModalImg>
                        {/* <CrossWrapper><Cross func={close}/></CrossWrapper> */}
                        {/* <ModalName>{data.name}</ModalName> */}
                        {/* <ModalDesk>{data.desk}</ModalDesk> */}
                        <h1 style={{position: 'absolute', color: 'white', bottom: '35%', zIndex: 1000, fontSize: 16,
                                    left: '5%'
                                }}>{currentObj.index === 'ch'? 'Тебе открылись буквы:' : 'Тебе открылась буква:'}</h1>
                        <div style={{position: 'absolute', bottom: '15%', left: '5%', zIndex: 1000}}>
                            <Char chars={currentObj.char}/>
                        </div>
                        <ButtonWrapper>
                            <GreenButton func={clickHandler}>Забрать</GreenButton>
                        </ButtonWrapper>
                    </Modal>
            </ModalWrapper>
    </ModalPhone>
}

export default CharModal