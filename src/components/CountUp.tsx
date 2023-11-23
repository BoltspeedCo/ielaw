'use client'
import * as React from 'react'
import ReactCountUp, { useCountUp } from 'react-countup'
type Props = {
    countNumber: number
}

const CountUp = ({ countNumber }: Props) => {
    const countUpRef = React.useRef(null);
    const { } = useCountUp({
        ref: countUpRef,
        end: countNumber,
        duration: 2.5,
    })
    return (
        <span ref={countUpRef} className='block' />
    )
}

export default CountUp