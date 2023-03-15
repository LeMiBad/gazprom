import { FC } from "react"
import styled from "styled-components"
import { setCurPage } from "../../store/page"
import GreenButton from "../UI/GreenButton/GreenButton"


interface IPolzunokModal {
    img: string,
    num: number,
    neededNum: number,
    setModal: React.Dispatch<React.SetStateAction<boolean>>,
    setCurAsk: React.Dispatch<React.SetStateAction<number>>,
    curAsk: number
}


const Background = styled.div`
    position: absolute;
    z-index: 10000;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(8px);
`

const Wrapper = styled.div`
    position: relative;
    width: 80vh;
    height: 60vh;
    display: flex;
`

const Img = styled.img`
    position: absolute;
    width: 100%; 
    height: 100%;;
    filter: drop-shadow(0px 4px 20px rgba(21, 184, 173, 0.8));
`


const PolzunokModal: FC<IPolzunokModal> = ({img, num, setModal, neededNum, setCurAsk, curAsk}) => {

    const buttonHandler = () => {
        if(neededNum !== num) setCurPage(3)

        else if(curAsk <= 2) {
            setModal(false)
            setCurAsk(curAsk+1)
        }
        else {
            setCurPage(3)
        }
    }


    return (
        <Background>
            <Wrapper>
                <div style={{position: 'absolute', zIndex: 7000000000000000, bottom: -25, right: -50}}>
                    <GreenButton func={buttonHandler}>Далее</GreenButton>
                </div>
                <div style={{color: 'white', fontWeight: 600, position: 'absolute', bottom: '5%', left: '7%', zIndex: 123121111111111}}>
                    {neededNum === num? 'Бинго!' : 'Не совсем!'}<br/>Верный ответ: {neededNum}
                </div>
                <div style={{position: 'absolute', width: '100%', height: '100%', background: 'linear-gradient(0deg, rgba(21, 112, 184, 0.96) 20%, rgba(0, 0, 0, 0) 100%)', zIndex: 101000101}}></div>
                <Img alt="eq" src={img}></Img>
            </Wrapper>
        </Background>
    )
}

export default PolzunokModal