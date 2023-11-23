'use client'
import Link from 'next/link'
import { useRouter, usePathname, useParams } from 'next/navigation'
import * as React from 'react'
import Section from './Section'
import Container from './Container'
import { SmartText } from './Typography'
import { noCase } from 'change-case'
type Props = {

}

const Breadcrumbs = ({ }: Props) => {
    const pathname = usePathname()
    const paths = pathname.split('/').filter(Boolean).reduce((acc, path, i) => {
        if (i === 0) return [{
            name: noCase(path),
            path: `/${path}`
        }]
        const newPath = {
            name: noCase(path),
            path: `${acc[i - 1].path}/${path}`
        }
        return [...acc, newPath]
    }, [{ name: '', path: '' }])
    const parents = paths.slice(0, paths.length - 1)
    const currentPath = paths[paths.length - 1]
    return (
        <Section name="breadcrumb" className='pt-12 pb-6 lg:pt-32 lg:pb-6'>
            <Container >
                <div className=" grid md:grid-cols-5 gap-2 items-center md:items-end">
                    <nav className="flex md:col-span-2" aria-label="Breadcrumb">
                        <ol role="list" className="flex items-center space-x-1 md:space-x-4 text-xs md:text-sm uppercase">
                            <li>
                                <div className='flex gap-1 md:gap-2 items-center'>
                                    <Link href="/" className="">

                                        <span className="">Home</span>
                                    </Link>
                                    <svg
                                        className="h-4 w-4 flex-shrink-0 "
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        aria-hidden="true"
                                    >
                                        <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                                    </svg>
                                </div>
                            </li>
                            {parents.map(({ name, path }) => {

                                return (

                                    <li key={name}>
                                        <div className='flex gap-1 md:gap-2 items-center'>
                                            <Link href={path} className="">

                                                <span className="">{name}</span>
                                            </Link>
                                            <svg
                                                className="h-4 w-4 flex-shrink-0 "
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                aria-hidden="true"
                                            >
                                                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                                            </svg>
                                        </div>
                                    </li>

                                )
                            })}
                        </ol>
                    </nav>
                    <div className="md:col-span-3">
                        <SmartText text={currentPath.name} variant="h1" size="h5" className="uppercase mb-0 lg:mb-0" />
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default Breadcrumbs