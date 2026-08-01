'use client'
import DarkVeil from "./DarkVeil";

export function Background() {

    return (
        <div className='w-screen h-screen overflow-hidden z-0'>
            <DarkVeil
                hueShift={-30}
                noiseIntensity={0}
                scanlineIntensity={0.2}
                speed={1}
                scanlineFrequency={0}
                warpAmount={0}
                resolutionScale={1.5}
            />
        </div>
    )
}