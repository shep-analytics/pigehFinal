import React from 'react'
import constants from '../Constant/Constants'
import './main.css'

export default function Roadmap() {

    return (
        <div className='relative w-full h-fit'>
            <img src='./images/BackgroundPath.png' alt='path_img' />
            <div className='absolute top-0 w-full h-full z-10'>
                <div className='flex w-full h-full tracking-wide main1'>
                    <div className='w-2/5 pt-64 pl-24 space-y-32 text-center'>
                        <p className='font-bold text-xl w-20rem dic1 mobileRes'>
                            { constants.roadmap[1] }
                        </p>
                        <p className='font-bold text-xl w-20rem dic2'>
                            { constants.roadmap[3] }
                        </p>
                    </div>
                    <div className='relative w-3/5 text-center pb-24'>
                        <p className='roadmap-item-0 font-bold text-xl w-72 pb-32 dic3'>
                            { constants.roadmap[0] }
                        </p>
                        <p className='roadmap-item-2 font-bold text-xl w-20rem pt-8 dic4'>
                            { constants.roadmap[2] }
                        </p>
                        <p className='roadmap-item-4 font-bold text-xl w-20rem pb-16 dic5'>
                            { constants.roadmap[4] }
                        </p>
                    </div>
                </div>

                <div className='absolute w-full bottom-0 uppercase flex items-end space-x-56 pl-36 pr-24 pt-24 pb-16 main'>

                    <div className='font-bold flex flex-col place-items-center mainText1'>
                        <h1 className='upIcontext11'>corey</h1>
                        <h1 className='upIcontext22'>Team Leader</h1>
                        <h1 className='upIcontext23'>+</h1>
                        <h1 className='upIcontext24'>developer</h1>
                        <h1 className='upIcontext25'>
                            <span className='text-blue-600 text-4xl cursor-pointer'>
                                <i className='fab fa-twitter icon'></i>
                            </span>
                            @elgaetr
                        </h1>
                    </div>

                    <div className='font-bold flex flex-col place-items-center mainText2'>
                    {/* style={{marginLeft: 185, marginTop: -10, fontSize: 20}} */}
                        <h1 className='upIcontext1'>Alex</h1>
                        {/* style={{marginLeft: -250, marginTop: 10, fontSize: 20}} */}
                        <h1  className='upIcontext2'>blockchain <br /> developer</h1>
                        <h1 className='upIcontext3'>+</h1>
                        <h1 className='upIcontext4'>Web Developer</h1>
                        <h1 className='upIcontext5'>
                            <span className='text-blue-600 text-4xl cursor-pointer'>
                                <i className='fab fa-twitter icon'></i>
                            </span>
                            @alex_sheppert
                        </h1>
                    </div>

                    <div className='font-bold flex flex-col place-items-center textDown mainText3'>
                        <h1 className='upIcontext3'>mackenna</h1>
                        <h1 className='upIcontext3'>artist</h1>
                        <h1 className='upIcontext3'>+</h1>
                        <h1 className='upIcontext3'>lead oinker</h1>
                        <h1 className='upIcontext3'>
                            <span className='text-blue-600 text-4xl cursor-pointer'>
                                <i className='fab fa-twitter icon'></i>
                            </span>
                            @cheezeymack
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}