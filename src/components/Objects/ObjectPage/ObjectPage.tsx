import { useStore } from 'effector-react'
import { $pickedObject } from '../../../store/askAnswers'
import GameRule from '../../GameRule/GameRule'
import GazpromName from '../../UI/GazpromName/GazpromName'
import GradientBackground from '../../UI/GradientBackground/GradientBackground'
import WrapperForObject from '../WrapperForObject/WrapperForObject'
import background from './img/circles.png'




const ObjectPage = () => {
    const pickedObject = useStore($pickedObject)

    return (
        <GradientBackground gradient={`url('${pickedObject.object.figure}')`}>
            <GazpromName textOne={pickedObject.name} />
            <div style={{position: 'absolute', background: 'linear-gradient(89.1deg, #1570B8 19.95%, rgba(21, 184, 173, 0.08) 78%)', width: '100%', height: '100vh', zIndex: -1}}></div>
            <div style={{position: 'absolute', background: '#071D2F', width: '100%', height: '100vh', zIndex: -4}}></div>
            <WrapperForObject
            textOne={pickedObject.object.textOne}
            textTwo={pickedObject.object.textTwo}
            />
            <GameRule/>
        </GradientBackground>
    )
}

export default ObjectPage