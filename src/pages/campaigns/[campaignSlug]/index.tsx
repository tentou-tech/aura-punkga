import { i18n } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import CampaignDetail from './campaignDetail'
import Layout from 'components/Layout'
import HeadComponent from 'components/Head'

export default function Page(props) {
  if (props.justHead || props.pageProps?.justHead) {
    return <HeadComponent data={props.pageProps?.metadata || props.metadata} />
  }
  return (
    <>
      <HeadComponent data={props.pageProps?.metadata || props.metadata} />
      <CampaignDetail />
    </>
  )
}
Page.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
export const getServerSideProps = async (context) => {
  if (context.params?.campaignSlug) {
    const host = context.req.headers.host || context.req.headers.Host
    const res = await fetch(
      host.includes('dev')
        ? `https://api.dev.punkga.me/campaign/${context.params?.campaignSlug}`
        : host.includes('staging')
        ? `https://api.staging.punkga.me/campaign/${context.params?.campaignSlug}`
        : `https://api.punkga.me/campaign/${context.params?.campaignSlug}`
    )
    const data = await res.json()
    const campaign = data?.data?.campaign?.[0]
    if (!campaign)
      return {
        props: {
          ...(await serverSideTranslations(context?.locale!, ['common'])),
        },
      }
    const props = {
      image: '',
      title: '',
      description: '',
      canonical: `https://punkga.me/campaigns/${context.params?.campaignSlug}`,
    }
    if (context.locale == 'en') {
      const campaignLanguages =
        campaign.campaign_i18n.find((ml) => ml.i18n_language.id == 1) ||
        campaign.campaign_i18n.find((ml) => ml.i18n_language.is_main)

      props.image = campaignLanguages?.data?.seo?.thumbnail_url || campaignLanguages?.data?.thumbnail_url
      props.title = campaignLanguages?.data?.seo?.name || campaignLanguages?.data?.name
      props.description = campaignLanguages?.data?.seo?.description || campaignLanguages?.data?.description
    } else {
      const campaignLanguages =
        campaign.campaign_i18n.find((ml) => ml.i18n_language.id == 2) ||
        campaign.campaign_i18n.find((ml) => ml.i18n_language.is_main)

      props.image = campaignLanguages?.data?.seo?.thumbnail_url || campaignLanguages?.data?.thumbnail_url
      props.title = campaignLanguages?.data?.seo?.name || campaignLanguages?.data?.name
      props.description = campaignLanguages?.data?.seo?.description || campaignLanguages?.data?.description
    }
    return {
      props: {
        metadata: props,
        ...(await serverSideTranslations(context?.locale!, ['common'])),
      },
    }
  }
}
