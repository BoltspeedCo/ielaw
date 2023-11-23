import { createClient } from '@/prismicio'
import Link from 'next/link'
import * as React from 'react'

type Props = {

}

const Page = async ({ }: Props) => {
    const client = createClient()
    const services = await client.getAllByType('service')
    if (!services) return null
    return (
        <>
            <div className="">
                Service Index
                <div className="">
                    {services.map((service, index) => {
                        return (
                            <div className="" key={index}>
                                <Link href={`/services/${service.uid}`} className='underline'>
                                    <span>{service.uid}</span>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Page