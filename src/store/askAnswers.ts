import { createEvent } from 'effector';
import { createStore } from 'effector';
import z from './../components/PickObject/img/z.png'
import u from './../components/PickObject/img/u.png'
import b from './../components/PickObject/img/b.png'
import ch from './../components/PickObject/img/ch.png'
import h from './../components/PickObject/img/h.png'
import k from './../components/PickObject/img/k.png'
import o from './../components/PickObject/img/o.png'
import zSmall from './../components/PickObject/img/zSmall.png'
import uSmall from './../components/PickObject/img/uSmall.png'
import bSmall from './../components/PickObject/img/bSmall.png'
import chSmall from './../components/PickObject/img/chSmall.png'
import hSmall from './../components/PickObject/img/hSmall.png'
import kSmall from './../components/PickObject/img/kSmall.png'
import oSmall from './../components/PickObject/img/oSmall.png'
import zBack from './../components/PickObject/img/zBack.png'
import uBack from './../components/PickObject/img/uBack.png'
import bBack from './../components/PickObject/img/bBack.png'
import chBack from './../components/PickObject/img/chBack.png'
import hBack from './../components/PickObject/img/hBack.png'
import kBack from './../components/PickObject/img/kBack.png'
import oBack from './../components/PickObject/img/oBack.png'

import backObjFigureH from './../components/Objects/ObjectPage/img/circles.png'
import backObjFigureU from './../components/Objects/ObjectPage/img/backObjFigurU.png'
import backObjFigureO from './../components/Objects/ObjectPage/img/backObjFigureO.png'
import backObjFigureCH from './../components/Objects/ObjectPage/img/backObjFigureCH.png'
import backObjFigureB from './../components/Objects/ObjectPage/img/backObjFigureB.png'
import backObjFigureZ from './../components/Objects/ObjectPage/img/backObjFigureZ.png'
import backObjFigureK from './../components/Objects/ObjectPage/img/backObjFigureK.png'


import askH from './../components/GameRule/askH.png'
import askU from './../components/GameRule/askU.png'
import askO from './../components/GameRule/askO.png'
import askCH from './../components/GameRule/askCH.png'



interface IObj {
    z: {
        name: string,
        image: string,
        smallImage: string,
        backImage: string,
        desk: string,
        object: {
            textOne: string,
            textTwo: string,
            figure: string
        },
        askPage: {
            text: string,
            img: string
        } | null
    },
    u: {
        name: string,
        image: string,
        smallImage: string,
        backImage: string,
        desk: string,
        object: {
            textOne: string,
            textTwo: string,
            figure: string
        },
        askPage: {
            text: string,
            img: string
        } | null
    },
    b: {
        name: string,
        image: string,
        smallImage: string,
        backImage: string,
        desk: string,
        object: {
            textOne: string,
            textTwo: string,
            figure: string
        },
        askPage: {
            text: string,
            img: string
        } | null
    },
    ch: {
        name: string,
        image: string,
        smallImage: string,
        backImage: string,
        desk: string,
        object: {
            textOne: string,
            textTwo: string,
            figure: string
        },
        askPage: {
            text: string,
            img: string
        } | null
    },
    h: {
        name: string,
        image: string,
        smallImage: string,
        backImage: string,
        desk: string,
        object: {
            textOne: string,
            textTwo: string,
            figure: string
        },
        askPage: {
            text: string,
            img: string
        } | null
    },
    k: {
        name: string,
        image: string,
        smallImage: string,
        backImage: string,
        desk: string,
        object: {
            textOne: string,
            textTwo: string,
            figure: string
        },
        askPage: {
            text: string,
            img: string
        } | null
    },
    o: {
        name: string,
        image: string,
        smallImage: string,
        backImage: string,
        desk: string,
        object: {
            textOne: string,
            textTwo: string,
            figure: string
        },
        askPage: {
            text: string,
            img: string
        } | null
    },
}



const objects = {
    z: {
        name: 'Заполярное НГКМ',
        image: z,
        smallImage: zSmall,
        backImage: zBack,
        desk: 'С 1966 года месторождение оставалось крупнейшим в мире по начальным запасам газа (10,9 трлн кубометров). Также оно является мировым рекордсменом по объемам добычи — в 2019 году была достигнута отметка 7 трлн кубометров!',
        object: {
            textOne: 'Самое мощное по добыче газа месторождение в России. При его освоении использовались прогрессивные технические решения и передовое оборудование с высоким ресурсом надежности, рассчитанное на эксплуатацию в тяжелых природно-климатических условиях. Как и на многих объектах, работы здесь идут без выпуска природного газа в атмосферу благодаря использованию средств телемеханики и телеметрии!',
            textTwo: '',
            figure: backObjFigureZ
        },
        askPage: null
    },
    u: {
        name: 'Уренгойское НГКМ',
        image: u,
        smallImage: uSmall,
        backImage: uBack,
        desk: 'С 1966 года месторождение оставалось крупнейшим в мире по начальным запасам газа (10,9 трлн кубометров). ',
        object: {
            textOne: 'С 1966 года месторождение оставалось крупнейшим в мире по начальным запасам газа (10,9 трлн кубометров). Также оно является мировым рекордсменом по объемам добычи — в 2019 году была достигнута отметка 7 трлн кубометров!Новый Уренгой благодаря НГКМ вырос до полноценного города и сейчас носит титул газовой столицы России.',
            textTwo: 'На объект привезли новую спецтехнику! Проконтролируй, чтобы её компактно расположили на территории.',
            figure: backObjFigureU
        },
        askPage: {
            text: 'Длинным касанием перетаскивай объекты на поле. Расположи спецтехнику так, чтобы поместились все объекты без пустых участков. Для постановки ты можешь поворачивать объекты коротким касанием.',
            img: askU
        }
    },
    b: {
        name: 'Бованенковское НГКМ',
        image: b,
        smallImage: bSmall,
        backImage: bBack,
        desk: 'С 1966 года месторождение оставалось крупнейшим в мире по начальным запасам газа (10,9 трлн кубометров). Также оно является мировым рекордсменом по объемам добычи — в 2019 году была достигнута отметка 7 трлн кубометров!',
        object: {
            textOne: 'Это ядро мегапроекта «Ямал», которое служит ресурсной базой для поставок в северо-западные и центральные регионы России, а также на экспорт в Европу. Добыча здесь будет вестись более 100 лет!  На месторождении есть аэропорт Бованенково и проложенная сюда от станции Обская железная дорога с уникальным мостом через реку Юрибей — самым длинным в мире из расположенных в Заполярье (3,9 км).',
            textTwo: '',
            figure: backObjFigureB
        },
        askPage: null
    },
    ch: {
        name: 'Чаяндинское НГКМ',
        image: ch,
        smallImage: chSmall,
        backImage: chBack,
        desk: 'С 1966 года месторождение оставалось крупнейшим в мире по начальным запасам газа (10,9 трлн кубометров). Также оно является мировым рекордсменом по объемам добычи — в 2019 году была достигнута отметка 7 трлн кубометров!',
        object: {
            textOne: 'Основа Якутского центра газодобычи и ресурсная база для трубопровода «Сила Сибири». Это месторождение — одно из крупнейших в восточной части страны и относится к категории уникальных.Сейчас под руководством «Газстройпрома» ведётся расширение мощностей, чтобы выйти на новые высоты.',
            textTwo: 'Узнай, как выглядит объект на рассвете!',
            figure: backObjFigureCH
        },
        askPage: {
            text: 'Нажимай на участки труб, чтобы крутить их по часовой стрелке. Собери газопровод так, чтобы он соединял Пункт А с Пунктом Б.',
            img: askCH
        }
    },
    h: {
        name: 'Харасавэйское ГКМ',
        image: h,
        smallImage: hSmall,
        backImage: hBack,
        desk: 'С 1966 года месторождение оставалось крупнейшим в мире по начальным запасам газа (10,9 трлн кубометров). Также оно является мировым рекордсменом по объемам добычи — в 2019 году была достигнута отметка 7 трлн кубометров!',
        object: {
            textOne: 'По размеру запасов газа относится к категории уникальных — 2 трлн м³! Находится преимущественно на суше полуострова и даже частично выходит на шельф Карского моря.А в 2023 году на месторождении планируется построить установку комплексной подготовки газа, дожимную компрессорную станцию, кусты газовых скважин, энергоцентр и другую инфраструктуру.',
            textTwo: 'В общем, технологии и инновации бьют ключом! Узнай ещё больше интересных цифр про Газстройпром в викторине',
            figure: backObjFigureH
        },
        askPage: {
            text: 'Читай вопросы и доверься интуиции: располагай ползунок там, где, тебе кажется, кроется верный ответ!',
            img: askH
        }
    },
    k: {
        name: 'Ковыктинское ГКМ',
        image: k,
        smallImage: kSmall,
        backImage: kBack,
        desk: 'С 1966 года месторождение оставалось крупнейшим в мире по начальным запасам газа (10,9 трлн кубометров). Также оно является мировым рекордсменом по объемам добычи — в 2019 году была достигнута отметка 7 трлн кубометров!',
        object: {
            textOne: 'Газоконденсатное месторождение является крупнейшим на Востоке России и относится к категории уникальных: его запасы составляют 1,8 трлн м³ газа и 65,7 млн тонн газового конденсата. Месторождение имеет сложное геологическое строение, поэтому для его разработки применяются передовые высокоэффективные технологии. Кстати, здешний газ имеет интересную особенность: в нём содержится много гелия.',
            textTwo: '',
            figure: backObjFigureK
        },
        askPage: null
    },
    o: {
        name: 'Омский НПЗ',
        image: o,
        smallImage: oSmall,
        backImage: oBack,
        desk: 'С 1966 года месторождение оставалось крупнейшим в мире по начальным запасам газа (10,9 трлн кубометров). Также оно является мировым рекордсменом по объемам добычи — в 2019 году была достигнута отметка 7 трлн кубометров!',
        object: {
            textOne: 'Предприятие активно ведёт социальные проекты. Например, обеспечило городу комфортную площадку для обучения и творчества: библиотеки, театральные классы и другие улучшения инфраструктуры города и жизни людей!',
            textTwo: 'Узнай, как выглядит объект на рассвете!',
            figure: backObjFigureO
        },
        askPage: {
            text: 'Тапай на кусочки, чтобы двигать их рядом на пустую ячейку.',
            img: askO
        }
    }
}


const company: any = {
    '000': [objects.k, objects.ch, objects.h],
    '010': [objects.k, objects.ch, objects.b],
    '020': [objects.k, objects.ch],
    '001': [objects.k, objects.ch],
    '011': [objects.z, objects.u, objects.o],
    '021': [objects.z, objects.u, objects.o],
    '111': [objects.h, objects.b],
    '220': [objects.o, objects.h, objects.ch],
    '221': [objects.o, objects.z, objects.u]
}


export const setAskAnswers = createEvent<number[]>()
export const $askAnswers = createStore<any>(null)
    .on(setAskAnswers, (_, result) => {
        return company[result.join('')]
    })


export const pickObject = createEvent<string>()
export const $pickedObject = createStore<any>(objects.o)
    .on(pickObject, (_, objectName) => {
        if(objectName === 'z') return objects.z
        else if(objectName === 'u') return objects.u
        else if(objectName === 'b') return objects.b
        else if(objectName === 'ch') return objects.ch
        else if(objectName === 'h') return objects.h
        else if(objectName === 'k') return objects.k
        else if(objectName === 'O') return objects.o
    })