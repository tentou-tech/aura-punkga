import { Pagination, Skeleton } from '@mui/material'
import Mc from 'assets/images/mascot-empty.png'
import Modal from 'components/Modal'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { getArtistArtworks } from 'src/services'
import useSWR from 'swr'

import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
export default function ArtworkList({ id }) {
  const [page, setPage] = useState(1)
  const [open, setOpen] = useState(false)
  const [selectedArtwork, setSelectedArtwork] = useState<any>(null)
  const { data, isLoading } = useSWR(
    {
      key: 'fetch-artist-artworks',
      id,
    },
    ({ id }) => (id ? getArtistArtworks(id) : null)
  )

  const { t } = useTranslation()

  const prevHandler = () => {
    const idx = data?.artworks?.findIndex((artwork) => artwork.url == selectedArtwork.url)
    if (data?.artworks[idx - 1]) {
      setSelectedArtwork(data?.artworks[idx - 1])
    }
  }
  const nextHandler = () => {
    const idx = data?.artworks?.findIndex((artwork) => artwork.url == selectedArtwork.url)
    if (data?.artworks[idx + 1]) {
      setSelectedArtwork(data?.artworks[idx + 1])
    }
  }
  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      if (e.key == 'ArrowRight') {
        ;(document.querySelector('#next') as any)?.click()
      }
      if (e.key == 'ArrowLeft') {
        ;(document.querySelector('#prev') as any)?.click()
      }
    })
  }, [])
  if (isLoading) {
    return (
      <div className='grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-4'>
        {Array(6)
          .fill(0)
          ?.map((c, index) => (
            <div key={index}>
              <Skeleton className='w-full aspect-square' />
            </div>
          ))}
      </div>
    )
  }
  return (
    <div>
      {data?.artworks?.length ? (
        <>
          <Modal
            open={open}
            setOpen={setOpen}
            preventClickOutsideToClose={false}
            className='[&_.static]:!overflow-visible'>
            <div className='relative'>
              <Image
                width={300}
                height={300}
                src={selectedArtwork?.url}
                alt=''
                className='w-auto h-full max-h-[80vh] rounded-md object-cover'
              />
              <div>
                <div
                  onClick={prevHandler}
                  id='prev'
                  className='absolute -bottom-14 lg:top-1/2 -scale-x-100 left-[calc(50%-20px)] lg:-left-[98px] -translate-x-1/2 lg:translate-x-0 -translate-y-1/2 cursor-pointer bg-[#FFFFFF] rounded-full text-[#B0B0B0] hover:text-border-brand-hover active:text-border-brand-focus w-8 lg:w-16 h-8 lg:h-16 grid place-items-center shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'>
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
                  onClick={nextHandler}
                  id='next'
                  className='absolute -bottom-14 lg:top-1/2 right-[calc(50%-20px)] lg:-right-[98px] translate-x-1/2 lg:translate-x-0 -translate-y-1/2 cursor-pointer bg-[#FFFFFF] rounded-full text-[#B0B0B0] hover:text-border-brand-hover active:text-border-brand-focus w-8 lg:w-16 h-8 lg:h-16 grid place-items-center shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'>
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
              </div>
            </div>
          </Modal>
          <div className='grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4'>
            {data?.artworks?.slice((page - 1) * 12, page * 12)?.map((artwork, index) => (
              <div
                key={index}
                onClick={() => {
                  setSelectedArtwork(artwork)
                  setOpen(true)
                }}>
                <Image
                  width={300}
                  height={300}
                  src={artwork.url}
                  alt=''
                  className='w-full aspect-square rounded-md object-cover'
                />
              </div>
            ))}
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </>
      ) : (
        <div className='flex flex-col items-center gap-4 py-8'>
          <Image src={Mc} alt='' className='w-[160px] h-[160px]' />
          <div className='font-medium'>{t('No artworks shared')}</div>
        </div>
      )}
      {!!data?.artworks_aggregate?.aggregate?.count && (
        <div className='w-full flex justify-center'>
          <Pagination
            shape='rounded'
            count={Math.ceil(data?.artworks_aggregate?.aggregate?.count / 12)}
            page={page}
            onChange={(event: React.ChangeEvent<unknown>, value: number) => {
              setPage(value)
            }}
          />
        </div>
      )}
    </div>
  )
}
