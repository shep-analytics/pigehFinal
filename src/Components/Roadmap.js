import React from 'react'
import constants from '../Constant/Constants'

export default function Roadmap() {

    return (
        <div className='relative w-full h-fit'>
            <img src='./images/BackgroundPath.png' alt='path_img' />
            <div className='absolute top-0 w-full h-full z-10'>
                <div className='flex w-full h-full tracking-wide'>
                    <div className='w-2/5 pt-64 pl-24 space-y-32 text-center'>
                        <p className='font-bold text-xl w-20rem'>
                            { constants.roadmap[1] }
                        </p>
                        <p className='font-bold text-xl w-20rem pt-8'>
                            { constants.roadmap[3] }
                        </p>
                    </div>
                    <div className='relative w-3/5 text-center pb-24'>
                        <p className='roadmap-item-0 font-bold text-xl w-72 pb-32'>
                            { constants.roadmap[0] }
                        </p>
                        <p className='roadmap-item-2 font-bold text-xl w-20rem pt-8'>
                            { constants.roadmap[2] }
                        </p>
                        <p className='roadmap-item-4 font-bold text-xl w-20rem pb-16'>
                            { constants.roadmap[4] }
                        </p>
                    </div>
                </div>
                <div className='absolute w-full bottom-0 uppercase py-32 flex items-end space-x-56 pl-36 pr-24 pt-24 pb-16'>

                    <div className='font-bold text-2xl w-fit flex flex-col place-items-center py-8 pl-4'>
                        <h1>corey</h1>
                        <h1>Team Leader</h1>
                        <h1>+</h1>
                        <h1>developer</h1>
                        <h1>
                            <span className='text-blue-600 text-4xl cursor-pointer'>
                                <i className='fab fa-twitter'></i>
                            </span>
                            @elgaetr
                        </h1>
                    </div>

                    <div className='font-bold text-2xl w-fit flex flex-col place-items-center py-0 pl-14'>
                        <h1>Alex</h1>
                        <h1>blockchain developer</h1>
                        <h1>+</h1>
                        <h1>Web Developer</h1>
                        <h1>
                            <span className='text-blue-600 text-4xl cursor-pointer'>
                                <i className='fab fa-twitter'></i>
                            </span>
                            @alex_sheppert
                        </h1>
                    </div>

                    <div className='font-bold text-2xl w-fit flex flex-col place-items-center py-8'>
                        <h1>mackenna</h1>
                        <h1>artist</h1>
                        <h1>+</h1>
                        <h1>lead oinker</h1>
                        <h1>
                            <span className='text-blue-600 text-4xl cursor-pointer'>
                                <i className='fab fa-twitter'></i>
                            </span>
                            @cheezeymack
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}