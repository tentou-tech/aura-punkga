import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import Mascot from './assets/Mascot2.png'
import useSWR from 'swr'
import { useEffect, useState } from 'react'
import { Pagination } from '@mui/material'
import Modal from 'components/Modal'
import So from 'components/pages/event/kaia-island/assets/so.png'
import LineFooter from 'components/pages/event/kaia-island/assets/Line.svg'
import Pin from 'components/pages/event/kaia-island/assets/pin.svg'
import NavButton from './assets/bt_left.svg'
import useApi from 'src/hooks/useApi'
import { IComic } from 'src/models/comic'
import { getLatestComic } from 'src/services'
import Manga from 'components/pages/homepage/manga'
import DummyComic from 'components/DummyComponent/comic'
export default function Artworks() {
  const { t } = useTranslation()
  const { data, isLoading } = useSWR(
    'https://script.google.com/macros/s/AKfycbyrIAyXFFkHVMzvV3Ku4syqak92g6-oPWuro6f-eVSWqYallYP4Fg9X5p_b5Zb894XDyg/exec',
    (url) => fetch(url).then((res) => res.json())
  )
  const [tab, setTab] = useState(1)
  const [page, setPage] = useState(1)
  const latestComic = useApi<IComic[]>(getLatestComic, true, [])
  const [useableComic, setUseableComic] = useState<any>()
  useEffect(() => {
    const comic = latestComic.data?.filter((data: any) =>
      data.tags.some((lang: any) => lang.en.toLowerCase() === 'kaia island')
    )
    setUseableComic(comic)
  }, [latestComic.data])
  useEffect(() => {
    setPage(1)
  }, [tab])
  if (isLoading)
    return (
      <div className='mt-8'>
        <div className='text-xl font-medium'>{t('Artworks')}</div>
      </div>
    )
  if (!data?.round1?.length && !data?.round2?.length && !data?.round3?.length) {
    return (
      <div className='mt-8'>
        <div className='text-xl font-medium'>{t('Artworks')}</div>
        <div className='mt-8 flex justify-center items-center gap-4 flex-col py-8'>
          <Image src={Mascot} alt='' className='w-[160px]' />
          <div className='font-medium text-center'>{t('Artist composing')}</div>
        </div>
      </div>
    )
  }
  return (
    <div className='mt-8'>
      <div className='text-xl font-medium flex items-center gap-4'>
        <Image src={So} alt='' className='w-[36px] h-[36px]' />
        {t('Artworks')}
      </div>
      <div className='lg:bg-[linear-gradient(180deg,#F1E5D3_0%,#FEF5E8_100%)] mt-4 lg:mt-8 lg:p-6 relative'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='117'
          height='121'
          viewBox='0 0 117 121'
          fill='none'
          className='absolute -top-8 -right-8 hidden lg:block'>
          <path
            opacity='0.5'
            d='M79.1622 48.7933C89.0417 57.0105 98.9225 65.2376 108.792 73.4562C109.892 74.37 110.992 75.2838 112.082 76.1991C112.884 76.8625 113.704 77.5839 114.442 78.3675C115.18 79.1511 115.835 79.9871 116.299 80.9008C116.762 81.8144 117.032 82.7861 116.991 83.8425C116.371 85.1632 112.631 88.616 116.617 85.6837C112.494 88.9992 109.765 89.1966 115.767 87.3707C109.741 89.2404 108.884 88.6152 115.04 88.434C108.884 88.6152 108.41 88.1272 114.246 89.4563C108.41 88.1272 108.192 87.8754 113.45 90.4588C108.192 87.8754 108.205 87.8938 112.512 91.7442C108.206 87.9037 108.478 88.2488 111.639 93.0606C108.476 88.2389 109.019 88.8585 110.833 94.4181C109.019 88.8585 110.596 92.4014 108.712 97.6096C110.229 92.9486 109.784 89.8302 110.081 95.8081C109.793 89.8189 107.528 98.8694 106.732 99.5183C105.985 100.09 105.687 100.051 106.059 99.6144C106.429 99.1675 110.306 91.7862 109.387 97.2406C110.304 91.7763 106.001 98.8549 105.135 99.0895C104.27 99.3241 103.997 99.2519 104.452 99.1162C104.906 98.9707 107.95 96.2334 108.117 98.6743C107.949 96.2235 104.789 98.8561 104.196 98.9507C103.602 99.0354 103.704 99.1118 104.478 99.0823C105.253 99.0627 108.754 95.7753 108.754 98.6844C108.752 95.7654 105.253 99.0627 104.482 99.112C103.711 99.1613 103.599 99.1571 104.188 99.1742C104.776 99.1913 106.823 98.2427 108.06 99.4097C106.823 98.2427 104.671 99.0951 103.936 99.0383C102.455 98.9263 103.524 99.1981 107.166 100.507C101.703 98.5387 102.202 99.1342 108.169 100.172C102.202 99.1342 102.072 99.0012 107.7 100.996C102.071 98.9913 102.205 99.154 107.625 101.674C102.195 99.1554 102.281 99.2643 107.399 102.353C102.281 99.2643 102.452 99.4722 107.126 103.2C102.452 99.4722 102.609 99.6518 106.977 103.716C102.609 99.6518 103.038 100.106 106.678 104.738C103.038 100.106 103.001 100.061 106.724 104.631C103.001 100.061 103.462 100.53 106.479 105.464C103.462 100.53 103.626 100.689 106.422 105.704C103.636 100.687 104.077 101.089 106.264 106.292C104.077 101.089 104.675 101.6 106.083 107.005C104.677 101.61 104.46 101.438 106.777 106.421C104.459 101.428 105.303 102.106 105.91 107.706C105.311 102.095 105.393 102.174 106.64 107.511C105.403 102.173 106.359 102.854 105.587 109.126C106.349 102.856 106.437 102.904 106.25 109.173C106.438 102.914 106.86 103.318 105.277 110.564C106.85 103.32 106.89 105.799 104.998 112.008C106.863 105.964 105.56 112.898 104.731 113.461C105.428 113.604 104.565 114.424 104.483 114.91C104.401 115.397 104.327 115.872 104.245 116.358C104.017 117.805 103.8 119.26 103.591 120.694C94.4653 111.743 85.3285 102.784 76.203 93.8326C71.0464 88.7701 65.8572 83.692 60.0089 79.516C54.7672 75.7687 49.0402 72.7977 43.773 69.0843C38.5751 65.4317 33.8554 61.0948 29.1484 56.7762C27.0444 54.844 24.9404 52.9117 22.8365 50.9795C21.7902 50.0176 20.7637 48.9822 19.6848 48.0754C18.671 47.0584 17.5992 46.1305 16.5345 45.1813C15.501 44.1671 14.6301 42.8772 13.3828 42.2773C12.6406 41.0397 11.4487 40.0481 10.2312 39.3733C9.43661 38.1936 8.41154 37.0267 7.08088 36.4791C6.44758 35.226 5.21461 34.0887 3.9292 33.5751C3.25771 32.2668 2.61056 29.5712 0.777512 30.6711C2.02531 28.4425 3.47957 26.2451 1.50478 28.9006C3.67058 25.8139 4.51079 24.9768 2.2872 27.1627C4.58719 24.8043 4.95209 24.6714 3.19409 25.3061C4.9917 24.5951 5.02706 24.5597 4.02596 23.7732C5.05112 24.5159 4.71041 23.8978 5.41253 20.6764C4.82361 23.6291 4.9198 23.4538 5.99521 20.5124C4.95376 23.4085 5.37716 20.7117 6.48651 17.7958C5.44368 20.4699 5.11095 22.3861 6.64171 19.5212C5.12792 22.3635 5.78621 19.0473 6.5475 16.878C5.81738 18.7701 5.45209 20.8121 7.18498 18.5144C5.47755 20.7782 6.14571 17.602 6.74423 16.1328C6.45693 17.1637 7.15845 16.8414 8.64626 16.5786C7.18391 16.8074 6.80922 16.4467 7.17707 15.6973C7.01289 16.3167 7.90252 15.8968 9.16398 15.9593C7.91949 15.8742 7.29862 16.0537 7.56459 15.5814C7.44288 16.0028 8.28724 15.6197 9.45961 15.6949C8.25613 15.6141 7.93364 15.9025 8.42442 15.6608C8.67611 15.8673 9.79057 15.5366 10.9956 15.0617C9.81744 15.5126 8.81471 15.7768 8.58989 15.617C8.19529 15.7541 8.53759 15.4628 9.7312 15.4037C8.54608 15.4515 8.45412 15.6565 9.00709 15.5676C9.49358 15.579 10.6278 15.3162 11.7707 14.6178C10.683 15.278 9.70431 15.4984 9.27863 15.4884C8.85296 15.4784 8.98877 15.2267 10.123 14.9639C8.98877 15.2267 9.03115 15.453 9.62089 15.4093C10.2106 15.3656 11.3392 15.0632 12.3774 14.2686C11.3562 15.0405 10.2672 15.3373 9.70434 15.357C9.14148 15.3767 9.11466 15.1179 10.2277 14.7773C8.02848 15.4344 11.2373 15.5525 13.12 13.8798C11.4537 15.4408 8.86571 15.3554 10.7497 14.1876C8.8742 15.3441 12.5328 15.0747 14.0449 13.5661C12.7605 14.9715 9.83591 15.1463 11.2731 13.6079C9.84581 15.1449 13.1325 14.8882 14.3971 13.5562C13.0858 14.9857 9.54735 15.3895 11.1669 14.0675C9.55584 15.3782 13.561 14.8472 14.8454 13.5125C13.9005 14.6776 11.1201 14.8722 11.9279 13.1004C11.1201 14.8722 14.1706 14.6593 15.1268 13.5734C14.0093 14.8742 10.0946 15.473 11.5106 14.069C10.1031 15.4617 14.22 14.8643 15.3559 13.6215C14.5453 14.6664 11.8809 14.7536 12.3325 12.8911C11.8894 14.7422 15.0559 14.7047 15.9484 13.8097C15.1265 14.9876 11.6135 15.4988 12.3945 13.751C11.6121 15.4889 15.1534 14.9635 15.9654 13.7871C15.0898 14.6595 12.0097 14.6645 12.3806 12.8035C12.0111 14.6744 14.6585 14.6099 15.445 13.6088C14.3572 14.8347 10.2643 15.4589 11.594 14.0167C10.2559 15.4702 14.3417 14.8672 15.4478 13.6286C14.6712 14.6283 12.1157 14.6292 12.4216 12.737C12.1327 14.6065 15.3105 14.2946 16.0843 13.4166C15.4887 14.1985 13.243 14.1047 12.9492 12.187C13.2613 14.092 15.8762 14.224 16.6047 13.5242C16.1901 14.2298 14.8072 13.6695 13.8714 11.712C14.8072 13.6695 16.2722 14.309 16.7503 13.6246C16.1053 14.3429 13.8893 14.0327 13.3197 12.0937C13.8907 14.0426 16.0967 14.637 16.828 13.957C16.2692 14.9256 14.0263 14.7809 13.6123 12.7288C13.4762 14.5361 15.473 14.726 16.582 13.9314C16.2579 14.9171 16.3386 14.5621 16.4901 13.5001C15.4534 13.8803 13.963 13.2747 13.655 11.6822C14.5342 13.5973 16.2892 13.8621 16.7575 13.1791C16.4194 13.5001 15.7394 12.2738 14.3991 10.5256C15.7309 12.2851 16.4449 13.1833 16.7109 12.7817C16.3813 13.0914 15.6122 12.0899 14.269 10.3926C15.6122 12.0899 16.3771 12.991 16.6628 12.6573C16.4139 12.9655 15.7564 11.9684 14.4416 10.2569C15.7649 11.957 16.4987 12.8524 16.7944 12.5173C16.677 12.6855 16.3067 11.506 15.1969 9.67438C16.3067 11.506 16.7038 12.6615 16.8411 12.4904C16.5978 12.7676 16.004 11.7916 14.7344 10.0434C16.0139 11.7902 16.6204 12.7138 16.8708 12.4155C16.7845 12.5187 16.4623 11.3222 15.5137 9.41706C16.4708 11.3109 16.7887 12.4777 16.8623 12.3561C16.6162 12.6134 16.0351 11.6559 14.7768 9.91613C16.0351 11.6559 16.5794 12.4974 16.7676 12.1878C16.67 12.2118 16.287 11.0139 15.3299 9.19075C16.287 11.0139 16.7025 12.0859 16.8793 11.9799C16.8864 12.1001 16.6462 11.0535 15.9494 9.07208C16.6547 11.0422 16.9175 12.0351 16.9755 11.8753C16.9161 11.8837 16.6618 10.7382 16.0894 8.77937C16.6618 10.7382 16.8837 11.5853 16.9983 11.3973C17.0888 11.253 17.0636 10.0849 17.1121 8.08803C17.0519 12.0563 16.6816 10.5939 18.3285 7.12661C16.7283 10.5671 16.5109 8.47681 19.5704 6.20197C16.6566 8.36512 17.8622 4.99105 21.6072 4.54776C18.4153 4.47781 21.3599 3.31027 23.2919 2.62053C22.1465 2.16775 24.1124 1.14992 24.4831 0.278837C25.6709 0.957902 26.8432 1.7402 28.0069 2.60453C36.16 8.63358 43.8004 18.5742 51.2039 25.084C60.3762 33.1596 69.7523 40.9637 79.1396 48.7764L79.1622 48.7933Z'
            fill='#0A8EED'
          />
        </svg>
        <div className=' flex gap-4 text-sm font-semibold'>
          {!!data?.round1?.length && (
            <div
              onClick={() => setTab(1)}
              className={`w-full cursor-pointer text-center max-w-[104px] py-1 px-2 ${
                tab == 1 ? 'bg-[#94715C] text-[#F1E2D5]' : 'text-text-teriary'
              }`}>
              Round 1
            </div>
          )}
          {!!data?.round2?.length && (
            <div
              onClick={() => setTab(2)}
              className={`w-full cursor-pointer text-center max-w-[104px] py-1 px-2 ${
                tab == 2 ? 'bg-[#94715C] text-[#F1E2D5]' : 'text-text-teriary'
              }`}>
              Round 2
            </div>
          )}
          {!!useableComic?.length && (
            <div
              onClick={() => setTab(3)}
              className={`w-full cursor-pointer text-center max-w-[104px] py-1 px-2 ${
                tab == 3 ? 'bg-[#94715C] text-[#F1E2D5]' : 'text-text-teriary'
              }`}>
              Round 3
            </div>
          )}
        </div>
        <div className='mt-4 lg:mt-8 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
          {tab == 1 ? (
            <>
              {data?.round1?.slice((page - 1) * 10, page * 10)?.map((artwork, index) => (
                <Artwork
                  data={artwork}
                  index={data?.round1?.findIndex((a) => a.image == artwork.image)}
                  allArtworks={data?.round1}
                  key={artwork?.title + index}
                />
              ))}
            </>
          ) : tab == 2 ? (
            <>
              {data?.round2?.slice((page - 1) * 10, page * 10)?.map((artwork, index) => (
                <Artwork
                  data={artwork}
                  index={data?.round2?.findIndex((a) => a.image == artwork.image)}
                  allArtworks={data?.round2}
                  key={artwork?.title + index}
                />
              ))}
            </>
          ) : (
            <>
              {latestComic.loading
                ? Array.apply(null, Array(10)).map((d, index) => <DummyComic key={index} />)
                : useableComic?.length
                ? useableComic?.slice((page - 1) * 10, page * 10)?.map((data, index) => <Manga key={index} {...data} />)
                : null}
            </>
          )}
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className='flex justify-center mt-4'>
          <Pagination
            shape='rounded'
            page={page}
            className='[&_.Mui-selected]:!bg-[#FABA77] [&_.Mui-selected]:!text-text-primary [&_.MuiPaginationItem-root:not(.Mui-selected)]:!text-text-quatenary'
            onChange={(event: React.ChangeEvent<unknown>, value: number) => {
              setPage(value)
            }}
            count={
              tab == 1
                ? Math.ceil(data?.round1?.length / 10)
                : tab == 2
                ? Math.ceil(data?.round2?.length / 10)
                : Math.ceil(data?.round3?.length / 10)
            }
          />
        </div>
      </div>
      <Image src={LineFooter} alt='' className='w-full hidden lg:block' />
    </div>
  )
}
const Artwork = ({ data, index, allArtworks }) => {
  const [idx, setIdx] = useState(index)
  const artwork = allArtworks[idx]
  const [open, setOpen] = useState(false)
  useEffect(() => {
    if (open) {
      setIdx(index)
      document.onkeydown = function (e) {
        switch (e.keyCode) {
          case 37:
            setIdx((prev) => (prev > 0 ? prev - 1 : 0))
            break
          case 39:
            setIdx((prev) => (prev < allArtworks.length - 1 ? prev + 1 : allArtworks.length - 1))
            break
        }
      }
    } else {
      document.onkeydown = function (e) {}
    }
  }, [open])
  const getImageSrc = (src: any) => {
    const image = typeof src == 'string' ? src : src?.[0]
    if (!image) return ''
    if (image.includes('https://drive.google.com/file')) {
      const id = image.split('/')?.[5]
      return `https://lh3.googleusercontent.com/d/${id}`
    }
    if (image.includes('imgur')) {
      return `${image}.jpg`
    }
    return image
  }
  if (!artwork?.title || !artwork?.image) return null
  return (
    <>
      <Image src={getImageSrc(allArtworks[idx - 1]?.image)} width={300} height={300} alt='' className='hidden' />
      <Image src={getImageSrc(allArtworks[idx + 1]?.image)} width={300} height={300} alt='' className='hidden' />
      <Image src={getImageSrc(allArtworks[idx + 2]?.image)} width={300} height={300} alt='' className='hidden' />
      <div className='cursor-pointer [&:hover_.pin]:block relative' onClick={() => setOpen(true)}>
        <Image
          width={300}
          height={300}
          className='w-full aspect-[219/308] break-words border-[5px] border-white hover:shadow-[4px_6px_4.1px_0px_rgba(0,0,0,0.25)] object-cover'
          src={getImageSrc(data?.image)}
          alt={getImageSrc(data?.image)}
        />
        <div className='mt-4 text-sm font-semibold line-clamp-2'>{data.title}</div>
        <div className='mt-0.5 text-xs font-medium'>by {data.artist}</div>
        <Image src={Pin} alt='' className='w-[12%] h-auto hidden absolute -top-[5%] right-[5%] pin' />
      </div>
      <Modal open={open} setOpen={setOpen} preventClickOutsideToClose={false} className='[&_.static]:!overflow-visible'>
        <div className='py-6 px-4 w-full relative'>
          <div
            className='absolute -bottom-14 lg:top-1/2 -scale-x-100 left-[calc(50%-20px)] lg:-left-[98px] -translate-x-1/2 lg:translate-x-0 -translate-y-1/2 cursor-pointer bg-[#FFFFFF] rounded-full text-[#B0B0B0] hover:text-border-brand-hover active:text-border-brand-focus w-8 lg:w-16 h-8 lg:h-16 grid place-items-center shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'
            onClick={() => setIdx((prev) => (prev > 0 ? prev - 1 : 0))}>
            <svg xmlns='http://www.w3.org/2000/svg' width='7' height='12' viewBox='0 0 7 12' fill='none'>
              <path
                d='M1 1L6 6L1 11'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
          <div
            className='absolute -bottom-14 lg:top-1/2 right-[calc(50%-20px)] lg:-right-[98px] translate-x-1/2 lg:translate-x-0 -translate-y-1/2 cursor-pointer bg-[#FFFFFF] rounded-full text-[#B0B0B0] hover:text-border-brand-hover active:text-border-brand-focus w-8 lg:w-16 h-8 lg:h-16 grid place-items-center shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'
            onClick={() => setIdx((prev) => (prev < allArtworks.length - 1 ? prev + 1 : allArtworks.length - 1))}>
            <svg xmlns='http://www.w3.org/2000/svg' width='7' height='12' viewBox='0 0 7 12' fill='none'>
              <path
                d='M1 1L6 6L1 11'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
          {typeof artwork?.image == 'string' ? (
            <Image
              width={600}
              height={600}
              className='w-full max-w-[90vw] h-full max-h-[83vh]'
              src={getImageSrc(artwork?.image)}
              alt={getImageSrc(artwork?.image)}
            />
          ) : (
            <div className='flex items-center flex-col lg:flex-row '>
              {artwork?.image[1] ? (
                <>
                  <Image
                    width={600}
                    height={600}
                    className='w-screen max-w-[90vw] md:max-w-[70vw] lg:w-auto lg:max-w-[38vw] lg:h-screen lg:max-h-[80vh]'
                    src={getImageSrc(artwork?.image[0])}
                    alt={getImageSrc(artwork?.image[0])}
                  />
                  <Image
                    width={600}
                    height={600}
                    className='w-screen max-w-[90vw] md:max-w-[70vw] lg:w-auto lg:max-w-[38vw] lg:h-screen lg:max-h-[80vh]'
                    src={getImageSrc(artwork?.image[1])}
                    alt={getImageSrc(artwork?.image[1])}
                  />
                </>
              ) : (
                <>
                  <Image
                    width={600}
                    height={600}
                    className='w-screen max-w-[90vw] md:max-w-[70vw] lg:w-auto lg:h-screen lg:max-h-[80vh]'
                    src={getImageSrc(artwork?.image[0])}
                    alt={getImageSrc(artwork?.image[0])}
                  />
                </>
              )}
            </div>
          )}
          <div className='mt-4 text-lg w-full text-center font-medium'>{artwork.title}</div>
          <div className='mt-0.5 text-base text-center font-medium'>by {artwork.artist}</div>
        </div>
      </Modal>
    </>
  )
}
