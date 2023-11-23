import { SliceZone } from '@prismicio/react'
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import RootLayout from '@/components/RootLayout';
import { Metadata, NextPage, NextPageContext } from 'next';
import { notFound, } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import { websiteConfig } from '@/config';
import { isFilled } from '@prismicio/client';
import Head from 'next/head';
import { ButtonLink } from '@/components/ui/Button';


export async function generateMetadata({ params }: { params: { uid: string } }): Promise<Metadata> {
  const client = createClient();
  const page = await client.getByUID('landingPage', params.uid)

  return {
    title: page.data.meta_title || 'Clickvisa',
    description: page.data.meta_description || websiteConfig.defaultMetadata.description,
    // openGraph: {
    //   type: 'website',
    //   url: websiteConfig.siteUrl + page.uid,
    //   title: page.data.meta_title || websiteConfig.defaultMetadata.title,
    //   description: page.data.meta_description || websiteConfig.defaultMetadata.description,
    //   siteName: websiteConfig.siteName,
    //   images: isFilled.image(page.data.meta_image) ? [page.data.meta_image.url] : undefined

    // }
  }
}

export default async function Pages({ params }: { params: { uid: string } }) {
  if (!params.uid) return null
  const client = createClient();

  const page = await client.getByUID('landingPage', params.uid,).catch(() => notFound())
  const globalSections = await client.getSingle('globalSections')
  const settings = await client.getSingle('settings')
  // console.log("page", page)
  return (
    <RootLayout noFooter headerMenu={(
      <ButtonLink href={'#contact'} variant={'fill'} size="sm" className="mx-2">
        Contact Us
      </ButtonLink>
    )} settings={settings} globalContext={globalSections}>

      <SliceZone slices={page.data.slices} components={components} context={{
        globalSections: globalSections
      }} />
    </RootLayout>

  )
}

export async function generateStaticParams() {
  const client = createClient()

  const pages = await client.getAllByType('landingPage')

  return pages.map(page => {
    return {
      pagePath: page.url?.split('/').filter(Boolean)
    }
  })
}