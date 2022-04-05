import React from 'react'
import constants from '../Constant/Constants'
import './main.css'

const faqItem = (item, i) => {
    return (
        <div className='flex space-x-3' key={i}>
            <div className='-mt-0.5'>
                <span className='text-blue-600 text-2xl cursor-pointer'>
                    <i className='far fa-question-circle'></i>
                </span>
            </div>
            <div className='text-xl'>
                <h1 className='faq'>{ item.question}</h1>
                <p className='text-white faq'>
                    { item.answer }
                </p>
            </div>
        </div>
    )
}

export default function Faq() {

    return (
        <div className='relative endLine'>
            <img src='./images/BackgroundGrass.png' alt='grass_img' className='Imgs imgMian'/>
            <div className='absolute top-0 h-full uppercase font-bold z-10 space-y-12 pt-10 pl-64 mainFaq'>
                <h1 className='text-5xl question'>questions about pigehs?</h1>
                <div className='w-1/2 space-y-10 mainFaqs'>
                    { constants.faq.map((item, i) => {
                        return faqItem(item, i)
                    })}
                </div>
            </div>
        </div>
    )
}