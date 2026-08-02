'use client'

import Image from 'next/image'
import BlurText from './BlurText'
import { useState } from 'react'

export function TextAnimate() {
    const [isCompleted, setIsCompleted] = useState<boolean>(false)

    return (
        <div className='flex items-end justify-center absolute w-full z-50'>
            <div className="flex flex-col items-center justify-between h-160">
                <div className="relative inline-block overflow-hidden">
                    <Image className='animate-EaseIn relative block w-full max-w-67.5 h-auto'
                        style={{ width: 'auto', height: 'auto' }}
                        priority src="/jo-hair-logo.png"
                        alt="logo"
                        width={270}
                        height={216}
                    />
                    {isCompleted && <div className="silk-mask absolute inset-0 z-100 pointer-events-none blur-[10px]"></div>}
                </div>
                <div className="flex flex-col justify-start items-center gap-7 h-70">
                    <BlurText
                        text="We're Coming Soon"
                        delay={100}
                        animateBy="word"
                        direction="top"
                        threshold={1}
                        className="text-3xl md:text-6xl font-bold text-purple-200"
                        animationFrom={{ opacity: 0, transform: 'translate3d(0,40px,0)' }}
                        animationTo={[{ opacity: 1, transform: 'translate3d(0,0,0)' }]}
                        onAnimationComplete={() => {
                            setIsCompleted(true)
                        }}
                    />
                    {isCompleted && <BlurText
                        text="Get Ready, Something Exciting Is Coming"
                        delay={50}
                        animateBy="word"
                        direction="left"
                        threshold={1}
                        className="text-lg md:text-xl text-purple-500"
                        animationFrom={{ opacity: 0, transform: 'translate3d(0,40px,0)' }}
                        animationTo={[{ opacity: 1, transform: 'translate3d(0,0,0)' }]}
                        onAnimationComplete={() => { }}
                    />}
                </div>
            </div>
        </div>
    )
}