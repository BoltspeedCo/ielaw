import { SliceZone } from '@prismicio/react'
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import RootLayout from '@/components/RootLayout';
import { Metadata, NextPage, NextPageContext } from 'next';
import { notFound, } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import { websiteConfig } from '@/config';
import { isFilled } from '@prismicio/client';


export async function generateMetadata({ params }: { params: { uid: string } }): Promise<Metadata> {
  const client = createClient();
  const page = await client.getByUID('flexiblePage', params.uid)

  return {
    title: page.data.meta_title || 'Clickvisa',
    description: page.data.meta_description || websiteConfig.defaultMetadata.description,
    openGraph: {
      type: 'website',
      url: websiteConfig.siteUrl + page.uid,
      title: page.data.meta_title || websiteConfig.defaultMetadata.title,
      description: page.data.meta_description || websiteConfig.defaultMetadata.description,
      siteName: websiteConfig.siteName,
      images: isFilled.image(page.data.meta_image) ? [page.data.meta_image.url] : undefined

    }
  }
}

export default async function Pages({ params }: { params: { uid: string } }) {
  if (!params.uid) return null
  const client = createClient();

  const page = await client.getByUID('flexiblePage', params.uid, {
    fetchLinks: ['service.name', 'service.featuredDescription', 'service.featuredIcon']
  }).catch(() => notFound())
  const globalSections = await client.getSingle('globalSections')
  const settings = await client.getSingle('settings')
  // console.log("page", page)
  return (
    <RootLayout settings={settings} globalContext={globalSections}>
      <Breadcrumbs />
      <SliceZone slices={page.data.slices} components={components} context={{
        globalSections: globalSections
      }} />
    </RootLayout>

  )
}

export async function generateStaticParams() {
  const client = createClient()

  const pages = await client.getAllByType('flexiblePage')

  return pages.filter(page => page.uid !== 'homepage').map(page => {
    return {
      pagePath: page.url?.split('/').filter(Boolean)
    }
  })
}