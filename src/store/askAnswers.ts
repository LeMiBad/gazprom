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


const objects = {
    z: {
        name: 'Заполярное НГКМ',
        image: z,
        smallImage: zSmall,
        backImage: zBack,
        desk: 'С 1966 года месторождение оставалось крупнейшим в мире по начальным запасам газа (10,9 трлн кубометров). Также оно является мировым рекордсменом по объемам добычи — в 2019 году была достигнута отметка 7 трлн кубометров!'
    },
    u: {
        name: 'Уренгойское НГКМ',
        image: u,
        smallImage: uSmall,
        backImage: uBack,
        desk: 'С 1966 года месторождение оставалось крупнейшим в мире по начальным запасам газа (10,9 трлн кубометров). '
    },
    b: {
        name: 'Бованенковское НГКМ',
        image: b,
        smallImage: bSmall,
        backImage: bBack,
        desk: 'С 1966 года месторождение оставалось крупнейшим в мире по начальным запасам газа (10,9 трлн кубометров). Также оно является мировым рекордсменом по объемам добычи — в 2019 году была достигнута отметка 7 трлн кубометров!'
    },
    ch: {
        name: 'Чаяндинское НГКМ',
        image: ch,
        smallImage: chSmall,
        backImage: chBack,
        desk: 'С 1966 года месторождение оставалось крупнейшим в мире по начальным запасам газа (10,9 трлн кубометров). Также оно является мировым рекордсменом по объемам добычи — в 2019 году была достигнута отметка 7 трлн кубометров!'
    },
    h: {
        name: 'Харасавэйское ГКМ',
        image: h,
        smallImage: hSmall,
        backImage: hBack,
        desk: 'С 1966 года месторождение оставалось крупнейшим в мире по начальным запасам газа (10,9 трлн кубометров). Также оно является мировым рекордсменом по объемам добычи — в 2019 году была достигнута отметка 7 трлн кубометров!'
    },
    k: {
        name: 'Ковыктинское ГКМ',
        image: k,
        smallImage: kSmall,
        backImage: kBack,
        desk: 'С 1966 года месторождение оставалось крупнейшим в мире по начальным запасам газа (10,9 трлн кубометров). Также оно является мировым рекордсменом по объемам добычи — в 2019 году была достигнута отметка 7 трлн кубометров!'
    },
    o: {
        name: 'Омский НПЗ',
        image: o,
        smallImage: oSmall,
        backImage: oBack,
        desk: 'С 1966 года месторождение оставалось крупнейшим в мире по начальным запасам газа (10,9 трлн кубометров). Также оно является мировым рекордсменом по объемам добычи — в 2019 году была достигнута отметка 7 трлн кубометров!'
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