import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Modal from './Modal'
import useSWR from 'swr'
import { eventService } from 'src/services/eventService'
import Image from 'next/image'
import O1 from './assets/OBJECTS.svg'
import O2 from './assets/OBJECTS2.svg'
import O3 from './assets/OBJECTS3.svg'
import moment, { Moment } from 'moment-timezone'
export default function Calendar({ date, setDate }: { date: Moment; setDate: (date: Moment) => void }) {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const [week, setWeeks] = useState(Math.floor((date.date() - 1) / 14))
  const { data } = useSWR('get-all-topic', () => eventService.punktober.getAllTopic(), {
    revalidateOnFocus: false,
  })
  const topics = data?.data?.data?.artwork_topics
  return (
    <>
      <div className=' w-full mx-auto max-w-96'>
        <div className='w-full flex items-center justify-between'>
          <div
            className='text-xs font-bold text-neutral-black cursor-pointer flex gap-1.5 items-center'
            onClick={() => setOpen(true)}>
            <svg xmlns='http://www.w3.org/2000/svg' width='18' height='19' viewBox='0 0 18 19' fill='none'>
              <path
                d='M8.09974 12.6999V15.3998C8.09974 16.8847 6.88469 18.0997 5.39983 18.0997H2.69991C1.21505 18.0997 0 16.8847 0 15.3998V12.6999C0 11.215 1.21505 10 2.69991 10H5.39983C6.88469 10 8.09974 11.215 8.09974 12.6999Z'
                fill='#0B0B0B'
              />
              <path
                d='M8.09974 2.80148V5.50139C8.09974 6.98625 6.88469 8.2013 5.39983 8.2013H2.69991C1.21505 8.2013 0 6.98625 0 5.50139V2.80148C0 1.31661 1.21505 0.101562 2.69991 0.101562H5.39983C6.88469 0.101562 8.09974 1.31661 8.09974 2.80148Z'
                fill='#0B0B0B'
              />
              <path
                d='M17.9992 12.6999V15.3998C17.9992 16.8847 16.7841 18.0997 15.2992 18.0997H12.5993C11.1145 18.0997 9.89941 16.8847 9.89941 15.3998V12.6999C9.89941 11.215 11.1145 10 12.5993 10H15.2992C16.7841 10 17.9992 11.215 17.9992 12.6999Z'
                fill='#0B0B0B'
              />
              <path
                d='M17.9992 2.80148V5.50139C17.9992 6.98625 16.7841 8.2013 15.2992 8.2013H12.5993C11.1145 8.2013 9.89941 6.98625 9.89941 5.50139V2.80148C9.89941 1.31661 11.1145 0.101562 12.5993 0.101562H15.2992C16.7841 0.101562 17.9992 1.31661 17.9992 2.80148Z'
                fill='#0B0B0B'
              />
            </svg>
            {t('View All')}
          </div>
          <div className='flex gap-6'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='36'
              height='37'
              viewBox='0 0 36 37'
              fill='none'
              className='cursor-pointer'
              onClick={() => setWeeks((prev) => (prev > 0 ? prev - 1 : 0))}>
              <g clipPath='url(#clip0_7175_34515)'>
                <path
                  d='M28 36.6016H8C3.58 36.6016 0 33.0216 0 28.6016V8.60156C0 4.18156 3.58 0.601562 8 0.601562H28C32.42 0.601562 36 4.18156 36 8.60156V28.6016C36 33.0216 32.42 36.6016 28 36.6016Z'
                  fill='#4F4F4F'
                />
                <rect
                  x='12'
                  y='18.7031'
                  width='2'
                  height='12'
                  rx='1'
                  transform='rotate(-53.398 12 18.7031)'
                  fill='white'
                />
                <rect
                  x='21.417'
                  y='10.6016'
                  width='2'
                  height='12'
                  rx='1'
                  transform='rotate(51.698 21.417 10.6016)'
                  fill='white'
                />
              </g>
              <defs>
                <clipPath id='clip0_7175_34515'>
                  <rect width='36' height='36' fill='white' transform='translate(0 0.601562)' />
                </clipPath>
              </defs>
            </svg>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='36'
              height='37'
              viewBox='0 0 36 37'
              fill='none'
              className='cursor-pointer'
              onClick={() => setWeeks((prev) => (prev < 2 ? prev + 1 : 2))}>
              <g clipPath='url(#clip0_7175_34519)'>
                <path
                  d='M8 0.601562H28C32.42 0.601562 36 4.18156 36 8.60156V28.6016C36 33.0216 32.42 36.6016 28 36.6016H8C3.57999 36.6016 -3.8147e-06 33.0216 -3.8147e-06 28.6016V8.60156C-3.8147e-06 4.18156 3.57999 0.601562 8 0.601562Z'
                  fill='#4F4F4F'
                />
                <rect x='24' y='18.5' width='2' height='12' rx='1' transform='rotate(126.602 24 18.5)' fill='white' />
                <rect
                  x='14.583'
                  y='26.6016'
                  width='2'
                  height='12'
                  rx='1'
                  transform='rotate(-128.302 14.583 26.6016)'
                  fill='white'
                />
              </g>
              <defs>
                <clipPath id='clip0_7175_34519'>
                  <rect width='36' height='36' fill='white' transform='matrix(-1 0 0 -1 36 36.6016)' />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div className='mt-4 text-lg font-medium'>
          <div className='grid grid-cols-7 [&>div]:cursor-pointer place-items-center gap-4'>
            <div className={new Date().getDay() == 0 ? 'font-bold text-neutral-black' : ''}>{t('Sun')}</div>
            <div className={new Date().getDay() == 1 ? 'font-bold text-neutral-black' : ''}>{t('Mon')}</div>
            <div className={new Date().getDay() == 2 ? 'font-bold text-neutral-black' : ''}>{t('Tue')}</div>
            <div className={new Date().getDay() == 3 ? 'font-bold text-neutral-black' : ''}>{t('Wed')}</div>
            <div className={new Date().getDay() == 4 ? 'font-bold text-neutral-black' : ''}>{t('Thu')}</div>
            <div className={new Date().getDay() == 5 ? 'font-bold text-neutral-black' : ''}>{t('Fri')}</div>
            <div className={new Date().getDay() == 6 ? 'font-bold text-neutral-black' : ''}>{t('Sat')}</div>
          </div>
          <div
            className='mt-4 overflow-hidden h-20 relative [&_.selected-date]:text-neutral-black [&_.selected-date]:bg-feedback-success-defaul [&_.selected-date]:w-7 [&_.selected-date]:h-7 [&_.selected-date]:grid [&_.selected-date]:place-items-center [&_.selected-date]:rounded-full
        [&_.current-date]:border [&_.current-date]:border-feedback-success-700 [&_.current-date]:text-feedback-success-700 [&_.current-date]:w-7 [&_.current-date]:h-7 [&_.current-date]:grid [&_.current-date]:place-items-center [&_.current-date]:rounded-full'>
            <div
              className={`transition-all space-y-4 absolute inset-0 duration-500 ${
                week != 0 ? '-translate-x-full' : ''
              }`}>
              <div className='grid grid-cols-7 [&>div]:cursor-pointer place-items-center gap-4'>
                <div
                  onClick={() => setDate(moment.tz('2024-12-1', 'YYYY-MM-D', 'Asia/Ho_Chi_Minh'))}
                  className={
                    date.date() == 1
                      ? 'selected-date'
                      : moment().tz('Asia/Ho_Chi_Minh').date() == 1
                      ? 'current-date'
                      : `aspect-square h-full grid place-items-center ${
                          moment().tz('Asia/Ho_Chi_Minh').date() >= 1 ? '' : 'pointer-events-none [&_div]:opacity-50'
                        }`
                  }>
                  {t('1')}
                </div>
                <div
                  onClick={() => setDate(moment.tz('2024-11-2', 'YYYY-MM-D', 'Asia/Ho_Chi_Minh'))}
                  className={
                    date.date() == 2
                      ? 'selected-date'
                      : moment().tz('Asia/Ho_Chi_Minh').date() == 2
                      ? 'current-date'
                      : `aspect-square h-full grid place-items-center ${
                          moment().tz('Asia/Ho_Chi_Minh').date() >= 2 ? '' : 'pointer-events-none [&_div]:opacity-50'
                        }`
                  }>
                  {t('2')}
                </div>
                <div
                  onClick={() => setDate(moment.tz('2024-11-3', 'YYYY-MM-D', 'Asia/Ho_Chi_Minh'))}
                  className={
                    date.date() == 3
                      ? 'selected-date'
                      : moment().tz('Asia/Ho_Chi_Minh').date() == 3
                      ? 'current-date'
                      : `aspect-square h-full grid place-items-center ${
                          moment().tz('Asia/Ho_Chi_Minh').date() >= 3 ? '' : 'pointer-events-none [&_div]:opacity-50'
                        }`
                  }>
                  {t('3')}
                </div>
                <div
                  onClick={() => setDate(moment.tz('2024-11-4', 'YYYY-MM-D', 'Asia/Ho_Chi_Minh'))}
                  className={
                    date.date() == 4
                      ? 'selected-date'
                      : moment().tz('Asia/Ho_Chi_Minh').date() == 4
                      ? 'current-date'
                      : `aspect-square h-full grid place-items-center ${
                          moment().tz('Asia/Ho_Chi_Minh').date() >= 4 ? '' : 'pointer-events-none [&_div]:opacity-50'
                        }`
                  }>
                  {t('4')}
                </div>
                <div
                  onClick={() => setDate(moment.tz('2024-11-5', 'YYYY-MM-D', 'Asia/Ho_Chi_Minh'))}
                  className={
                    date.date() == 5
                      ? 'selected-date'
                      : moment().tz('Asia/Ho_Chi_Minh').date() == 5
                      ? 'current-date'
                      : `aspect-square h-full grid place-items-center ${
                          moment().tz('Asia/Ho_Chi_Minh').date() >= 5 ? '' : 'pointer-events-none [&_div]:opacity-50'
                        }`
                  }>
                  {t('5')}
                </div>
                <div
                  onClick={() => setDate(moment.tz('2024-11-6', 'YYYY-MM-D', 'Asia/Ho_Chi_Minh'))}
                  className={
                    date.date() == 6
                      ? 'selected-date'
                      : moment().tz('Asia/Ho_Chi_Minh').date() == 6
                      ? 'current-date'
                      : `aspect-square h-full grid place-items-center ${
                          moment().tz('Asia/Ho_Chi_Minh').date() >= 6 ? '' : 'pointer-events-none [&_div]:opacity-50'
                        }`
                  }>
                  {t('6')}
                </div>
                <div
                  onClick={() => setDate(moment.tz('2024-11-7', 'YYYY-MM-D', 'Asia/Ho_Chi_Minh'))}
                  className={
                    date.date() == 7
                      ? 'selected-date'
                      : moment().tz('Asia/Ho_Chi_Minh').date() == 7
                      ? 'current-date'
                      : `aspect-square h-full grid place-items-center ${
                          moment().tz('Asia/Ho_Chi_Minh').date() >= 7 ? '' : 'pointer-events-none [&_div]:opacity-50'
                        }`
                  }>
                  {t('7')}
                </div>
              </div>
              <div className='grid grid-cols-7 [&>div]:cursor-pointer place-items-center gap-4'>
                <div
                  onClick={() => setDate(moment.tz('2024-11-8', 'YYYY-MM-D', 'Asia/Ho_Chi_Minh'))}
                  className={
                    date.date() == 8
                      ? 'selected-date'
                      : moment().tz('Asia/Ho_Chi_Minh').date() == 8
                      ? 'current-date'
                      : `aspect-square h-full grid place-items-center ${
                          moment().tz('Asia/Ho_Chi_Minh').date() >= 8 ? '' : 'pointer-events-none [&_div]:opacity-50'
                        }`
                  }>
                  {t('8')}
                </div>
                <div
                  onClick={() => setDate(moment.tz('2024-11-9', 'YYYY-MM-D', 'Asia/Ho_Chi_Minh'))}
                  className={
                    date.date() == 9
                      ? 'selected-date'
                      : moment().tz('Asia/Ho_Chi_Minh').date() == 9
                      ? 'current-date'
                      : `aspect-square h-full grid place-items-center ${
                          moment().tz('Asia/Ho_Chi_Minh').date() >= 9 ? '' : 'pointer-events-none [&_div]:opacity-50'
                        }`
                  }>
                  {t('9')}
                </div>
                <div
                  onClick={() => setDate(moment.tz('2024-11-10', 'YYYY-MM-D', 'Asia/Ho_Chi_Minh'))}
                  className={
                    date.date() == 10
                      ? 'selected-date'
                      : moment().tz('Asia/Ho_Chi_Minh').date() == 10
                      ? 'current-date'
                      : `aspect-square h-full grid place-items-center ${
                          moment().tz('Asia/Ho_Chi_Minh').date() >= 10 ? '' : 'pointer-events-none [&_div]:opacity-50'
                        }`
                  }>
                  {t('10')}
                </div>
                <div
                  onClick={() => setDate(moment.tz('2024-11-11', 'YYYY-MM-D', 'Asia/Ho_Chi_Minh'))}
                  className={
                    date.date() == 11
                      ? 'selected-date'
                      : moment().tz('Asia/Ho_Chi_Minh').date() == 11
                      ? 'current-date'
                      : `aspect-square h-full grid place-items-center ${
                          moment().tz('Asia/Ho_Chi_Minh').date() >= 11 ? '' : 'pointer-events-none [&_div]:opacity-50'
                        }`
                  }>
                  {t('11')}
                </div>
                <div
                  onClick={() => setDate(moment.tz('2024-11-12', 'YYYY-MM-D', 'Asia/Ho_Chi_Minh'))}
                  className={
                    date.date() == 12
                      ? 'selected-date'
                      : moment().tz('Asia/Ho_Chi_Minh').date() == 12
                      ? 'current-date'
                      : `aspect-square h-full grid place-items-center ${
                          moment().tz('Asia/Ho_Chi_Minh').date() >= 12 ? '' : 'pointer-events-none [&_div]:opacity-50'
                        }`
                  }>
                  {t('12')}
                </div>
                <div
                  onClick={() => setDate(moment.tz('2024-11-13', 'YYYY-MM-D', 'Asia/Ho_Chi_Minh'))}
                  className={
                    date.date() == 13
                      ? 'selected-date'
                      : moment().tz('Asia/Ho_Chi_Minh').date() == 13
                      ? 'current-date'
                      : `aspect-square h-full grid place-items-center ${
                          moment().tz('Asia/Ho_Chi_Minh').date() >= 13 ? '' : 'pointer-events-none [&_div]:opacity-50'
                        }`
                  }>
                  {t('13')}
                </div>
                <div
                  onClick={() => setDate(moment.tz('2024-11-14', 'YYYY-MM-D', 'Asia/Ho_Chi_Minh'))}
                  className={
                    date.date() == 14
                      ? 'selected-date'
                      : moment().tz('Asia/Ho_Chi_Minh').date() == 14
                      ? 'current-date'
                      : `aspect-square h-full grid place-items-center ${
                          moment().tz('Asia/Ho_Chi_Minh').date() >= 14 ? '' : 'pointer-events-none [&_div]:opacity-50'
                        }`
                  }>
                  {t('14')}
                </div>
              </div>
            </div>
            <div
              className={`transition-all space-y-4 absolute inset-0 duration-500 ${
                week == 0 ? 'translate-x-full' : week == 2 ? '-translate-x-full' : ''
              }`}>
              <div className='grid grid-cols-7 [&>div]:cursor-pointer place-items-center gap-4'>
                <div
                  onClick={() => setDate(moment.tz('2024-11-15', 'YYYY-MM-D', 'Asia/Ho_Chi_Minh'))}
                  className={
                    date.date() == 15
                      ? 'selected-date'
                      : moment().tz('Asia/Ho_Chi_Minh').date() == 15
                      ? 'current-date'
                      : `aspect-square h-full grid place-items-center ${
                          moment().tz('Asia/Ho_Chi_Minh').date() >= 15 ? '' : 'pointer-events-none [&_div]:opacity-50'
                        }`
                  }>
                  {t('15')}
                </div>
                <div
                  onClick={() => setDate(moment.tz('2024-11-16', 'YYYY-MM-D', 'Asia/Ho_Chi_Minh'))}
                  className={
                    date.date() == 16
                      ? 'selected-date'
                      : moment().tz('Asia/Ho_Chi_Minh').date() == 16
                      ? 'current-date'
                      : `aspect-square h-full grid place-items-center ${
                          moment().tz('Asia/Ho_Chi_Minh').date() >= 16 ? '' : 'pointer-events-none [&_div]:opacity-50'
                        }`
                  }>
                  {t('16')}
                </div>
                <div
                  onClick={() => setDate(moment.tz('2024-11-17', 'YYYY-MM-D', 'Asia/Ho_Chi_Minh'))}
                  className={
                    date.date() == 17
                      ? 'selected-date'
                      : moment().tz('Asia/Ho_Chi_Minh').date() == 17
                      ? 'current-date'
                      : `aspect-square h-full grid place-items-center ${
                          moment().tz('Asia/Ho_Chi_Minh').date() >= 17 ? '' : 'pointer-events-none [&_div]:opacity-50'
                        }`
                  }>
                  {t('17')}
                </div>
                <div
                  onClick={() => setDate(moment.tz('2024-11-18', 'YYYY-MM-D', 'Asia/Ho_Chi_Minh'))}
                  className={
                    date.date() == 18
                      ? 'selected-date'
                      : moment().tz('Asia/Ho_Chi_Minh').date() == 18
                      ? 'current-date'
                      : `aspect-square h-full grid place-items-center ${
                          moment().tz('Asia/Ho_Chi_Minh').date() >= 18 ? '' : 'pointer-events-none [&_div]:opacity-50'
                        }`
                  }>
                  {t('18')}
                </div>
                <div
                  onClick={() => setDate(moment.tz('2024-11-19', 'YYYY-MM-D', 'Asia/Ho_Chi_Minh'))}
                  className={
                    date.date() == 19
                      ? 'selected-date'
                      : moment().tz('Asia/Ho_Chi_Minh').date() == 19
                      ? 'current-date'
                      : `aspect-square h-full grid place-items-center ${
                          moment().tz('Asia/Ho_Chi_Minh').date() >= 19 ? '' : 'pointer-events-none [&_div]:opacity-50'
                        }`
                  }>
                  {t('19')}
                </div>
                <div
                  onClick={() => setDate(moment.tz('2024-11-20', 'YYYY-MM-D', 'Asia/Ho_Chi_Minh'))}
                  className={
                    date.date() == 20
                      ? 'selected-date'
                      : moment().tz('Asia/Ho_Chi_Minh').date() == 20
                      ? 'current-date'
                      : `aspect-square h-full grid place-items-center ${
                          moment().tz('Asia/Ho_Chi_Minh').date() >= 20 ? '' : 'pointer-events-none [&_div]:opacity-50'
                        }`
                  }>
                  {t('20')}
                </div>
                <div
                  onClick={() => setDate(moment.tz('2024-11-21', 'YYYY-MM-D', 'Asia/Ho_Chi_Minh'))}
                  className={
                    date.date() == 21
                      ? 'selected-date'
                      : moment().tz('Asia/Ho_Chi_Minh').date() == 21
                      ? 'current-date'
                      : `aspect-square h-full grid place-items-center ${
                          moment().tz('Asia/Ho_Chi_Minh').date() >= 21 ? '' : 'pointer-events-none [&_div]:opacity-50'
                        }`
                  }>
                  {t('21')}
                </div>
              </div>
              <div className='grid grid-cols-7 [&>div]:cursor-pointer place-items-center gap-4'>
                <div
                  onClick={() => setDate(moment.tz('2024-11-22', 'YYYY-MM-D', 'Asia/Ho_Chi_Minh'))}
                  className={
                    date.date() == 22
                      ? 'selected-date'
                      : moment().tz('Asia/Ho_Chi_Minh').date() == 22
                      ? 'current-date'
                      : `aspect-square h-full grid place-items-center ${
                          moment().tz('Asia/Ho_Chi_Minh').date() >= 22 ? '' : 'pointer-events-none [&_div]:opacity-50'
                        }`
                  }>
                  {t('22')}
                </div>
                <div
                  onClick={() => setDate(moment.tz('2024-11-23', 'YYYY-MM-D', 'Asia/Ho_Chi_Minh'))}
                  className={
                    date.date() == 23
                      ? 'selected-date'
                      : moment().tz('Asia/Ho_Chi_Minh').date() == 23
                      ? 'current-date'
                      : `aspect-square h-full grid place-items-center ${
                          moment().tz('Asia/Ho_Chi_Minh').date() >= 23 ? '' : 'pointer-events-none [&_div]:opacity-50'
                        }`
                  }>
                  {t('23')}
                </div>
                <div
                  onClick={() => setDate(moment.tz('2024-11-24', 'YYYY-MM-D', 'Asia/Ho_Chi_Minh'))}
                  className={
                    date.date() == 24
                      ? 'selected-date'
                      : moment().tz('Asia/Ho_Chi_Minh').date() == 24
                      ? 'current-date'
                      : `aspect-square h-full grid place-items-center ${
                          moment().tz('Asia/Ho_Chi_Minh').date() >= 24 ? '' : 'pointer-events-none [&_div]:opacity-50'
                        }`
                  }>
                  {t('24')}
                </div>
                <div
                  onClick={() => setDate(moment.tz('2024-11-25', 'YYYY-MM-D', 'Asia/Ho_Chi_Minh'))}
                  className={
                    date.date() == 25
                      ? 'selected-date'
                      : moment().tz('Asia/Ho_Chi_Minh').date() == 25
                      ? 'current-date'
                      : `aspect-square h-full grid place-items-center ${
                          moment().tz('Asia/Ho_Chi_Minh').date() >= 25 ? '' : 'pointer-events-none [&_div]:opacity-50'
                        }`
                  }>
                  {t('25')}
                </div>
                <div
                  onClick={() => setDate(moment.tz('2024-11-26', 'YYYY-MM-D', 'Asia/Ho_Chi_Minh'))}
                  className={
                    date.date() == 26
                      ? 'selected-date'
                      : moment().tz('Asia/Ho_Chi_Minh').date() == 26
                      ? 'current-date'
                      : `aspect-square h-full grid place-items-center ${
                          moment().tz('Asia/Ho_Chi_Minh').date() >= 26 ? '' : 'pointer-events-none [&_div]:opacity-50'
                        }`
                  }>
                  {t('26')}
                </div>
                <div
                  onClick={() => setDate(moment.tz('2024-11-27', 'YYYY-MM-D', 'Asia/Ho_Chi_Minh'))}
                  className={
                    date.date() == 27
                      ? 'selected-date'
                      : moment().tz('Asia/Ho_Chi_Minh').date() == 27
                      ? 'current-date'
                      : `aspect-square h-full grid place-items-center ${
                          moment().tz('Asia/Ho_Chi_Minh').date() >= 27 ? '' : 'pointer-events-none [&_div]:opacity-50'
                        }`
                  }>
                  {t('27')}
                </div>
                <div
                  onClick={() => setDate(moment.tz('2024-11-28', 'YYYY-MM-D', 'Asia/Ho_Chi_Minh'))}
                  className={
                    date.date() == 28
                      ? 'selected-date'
                      : moment().tz('Asia/Ho_Chi_Minh').date() == 28
                      ? 'current-date'
                      : `aspect-square h-full grid place-items-center ${
                          moment().tz('Asia/Ho_Chi_Minh').date() >= 28 ? '' : 'pointer-events-none [&_div]:opacity-50'
                        }`
                  }>
                  {t('28')}
                </div>
              </div>
            </div>
            <div className={`transition-all space-y-4 duration-500 ${week != 2 ? 'translate-x-full' : ''}`}>
              <div className='grid grid-cols-7 [&>div]:cursor-pointer place-items-center gap-4'>
                <div
                  onClick={() => setDate(moment.tz('2024-11-22', 'YYYY-MM-D', 'Asia/Ho_Chi_Minh'))}
                  className={
                    date.date() == 22
                      ? 'selected-date'
                      : moment().tz('Asia/Ho_Chi_Minh').date() == 22
                      ? 'current-date'
                      : `aspect-square h-full grid place-items-center ${
                          moment().tz('Asia/Ho_Chi_Minh').date() >= 22 ? '' : 'pointer-events-none [&_div]:opacity-50'
                        }`
                  }>
                  {t('22')}
                </div>
                <div
                  onClick={() => setDate(moment.tz('2024-11-23', 'YYYY-MM-D', 'Asia/Ho_Chi_Minh'))}
                  className={
                    date.date() == 23
                      ? 'selected-date'
                      : moment().tz('Asia/Ho_Chi_Minh').date() == 23
                      ? 'current-date'
                      : `aspect-square h-full grid place-items-center ${
                          moment().tz('Asia/Ho_Chi_Minh').date() >= 23 ? '' : 'pointer-events-none [&_div]:opacity-50'
                        }`
                  }>
                  {t('23')}
                </div>
                <div
                  onClick={() => setDate(moment.tz('2024-11-24', 'YYYY-MM-D', 'Asia/Ho_Chi_Minh'))}
                  className={
                    date.date() == 24
                      ? 'selected-date'
                      : moment().tz('Asia/Ho_Chi_Minh').date() == 24
                      ? 'current-date'
                      : `aspect-square h-full grid place-items-center ${
                          moment().tz('Asia/Ho_Chi_Minh').date() >= 24 ? '' : 'pointer-events-none [&_div]:opacity-50'
                        }`
                  }>
                  {t('24')}
                </div>
                <div
                  onClick={() => setDate(moment.tz('2024-11-25', 'YYYY-MM-D', 'Asia/Ho_Chi_Minh'))}
                  className={
                    date.date() == 25
                      ? 'selected-date'
                      : moment().tz('Asia/Ho_Chi_Minh').date() == 25
                      ? 'current-date'
                      : `aspect-square h-full grid place-items-center ${
                          moment().tz('Asia/Ho_Chi_Minh').date() >= 25 ? '' : 'pointer-events-none [&_div]:opacity-50'
                        }`
                  }>
                  {t('25')}
                </div>
                <div
                  onClick={() => setDate(moment.tz('2024-11-26', 'YYYY-MM-D', 'Asia/Ho_Chi_Minh'))}
                  className={
                    date.date() == 26
                      ? 'selected-date'
                      : moment().tz('Asia/Ho_Chi_Minh').date() == 26
                      ? 'current-date'
                      : `aspect-square h-full grid place-items-center ${
                          moment().tz('Asia/Ho_Chi_Minh').date() >= 26 ? '' : 'pointer-events-none [&_div]:opacity-50'
                        }`
                  }>
                  {t('26')}
                </div>
                <div
                  onClick={() => setDate(moment.tz('2024-11-27', 'YYYY-MM-D', 'Asia/Ho_Chi_Minh'))}
                  className={
                    date.date() == 27
                      ? 'selected-date'
                      : moment().tz('Asia/Ho_Chi_Minh').date() == 27
                      ? 'current-date'
                      : `aspect-square h-full grid place-items-center ${
                          moment().tz('Asia/Ho_Chi_Minh').date() >= 27 ? '' : 'pointer-events-none [&_div]:opacity-50'
                        }`
                  }>
                  {t('27')}
                </div>
                <div
                  onClick={() => setDate(moment.tz('2024-11-28', 'YYYY-MM-D', 'Asia/Ho_Chi_Minh'))}
                  className={
                    date.date() == 28
                      ? 'selected-date'
                      : moment().tz('Asia/Ho_Chi_Minh').date() == 28
                      ? 'current-date'
                      : `aspect-square h-full grid place-items-center ${
                          moment().tz('Asia/Ho_Chi_Minh').date() >= 28 ? '' : 'pointer-events-none [&_div]:opacity-50'
                        }`
                  }>
                  {t('28')}
                </div>
              </div>
              <div className='grid grid-cols-7 [&>div]:cursor-pointer place-items-center gap-4'>
                <div
                  onClick={() => setDate(moment.tz('2024-11-29', 'YYYY-MM-D', 'Asia/Ho_Chi_Minh'))}
                  className={
                    date.date() == 29
                      ? 'selected-date'
                      : moment().tz('Asia/Ho_Chi_Minh').date() == 29
                      ? 'current-date'
                      : `aspect-square h-full grid place-items-center ${
                          moment().tz('Asia/Ho_Chi_Minh').date() >= 29 ? '' : 'pointer-events-none [&_div]:opacity-50'
                        }`
                  }>
                  {t('29')}
                </div>
                <div
                  onClick={() => setDate(moment.tz('2024-11-30', 'YYYY-MM-D', 'Asia/Ho_Chi_Minh'))}
                  className={
                    date.date() == 30
                      ? 'selected-date'
                      : moment().tz('Asia/Ho_Chi_Minh').date() == 30
                      ? 'current-date'
                      : `aspect-square h-full grid place-items-center ${
                          moment().tz('Asia/Ho_Chi_Minh').date() >= 30 ? '' : 'pointer-events-none [&_div]:opacity-50'
                        }`
                  }>
                  {t('30')}
                </div>
                <div
                  onClick={() => setDate(moment.tz('2024-11-31', 'YYYY-MM-D', 'Asia/Ho_Chi_Minh'))}
                  className={
                    date.date() == 31
                      ? 'selected-date'
                      : moment().tz('Asia/Ho_Chi_Minh').date() == 31
                      ? 'current-date'
                      : `aspect-square h-full grid place-items-center ${
                          moment().tz('Asia/Ho_Chi_Minh').date() >= 31 ? '' : 'pointer-events-none [&_div]:opacity-50'
                        }`
                  }>
                  {t('31')}
                </div>
                <div className='opacity-30'>{t('1')}</div>
                <div className='opacity-30'>{t('2')}</div>
                <div className='opacity-30'>{t('3')}</div>
                <div className='opacity-30'>{t('4')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal open={open} setOpen={setOpen}>
        <div className='w-screen p-4 lg:max-w-[1160px] mx-auto relative'>
          <div
            className='flex items-center lg:justify-center gap-4 text-lg font-medium text-white w-full lg:text-3xl'
            onClick={() => setOpen(false)}>
            <svg
              width='33'
              height='32'
              viewBox='0 0 33 32'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='lg:hidden'>
              <path
                d='M20.3996 22.7969L13.5996 15.9969L20.3996 9.19688'
                stroke='white'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            {t('31-day drawing challenge')}
          </div>
          <div className='relative'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='cursor-pointer absolute left-full top-0 ml-4'
              onClick={() => setOpen(false)}>
              <path d='M16 8L8 16M16 16L8 8' stroke='white' strokeWidth='1.5' strokeLinecap='round' />
            </svg>
            <div className='mt-4 rounded-lg bg-white divide-y-[1px] lg:mt-11 relative'>
              <div className='grid grid-cols-7 items-center divide-x-[1px] lg:text-xl [&>div]:p-3 [&>div]:font-medium [&>div]:text-neutral-400 [&>div:first-child]:text-red-500'>
                <div className=''>S</div>
                <div className=''>M</div>
                <div className=''>T</div>
                <div className=''>W</div>
                <div className=''>T</div>
                <div className=''>F</div>
                <div className=''>S</div>
              </div>
              <div className='grid grid-cols-7 items-center divide-x-[1px] text-gray-black font-medium [&>div]:h-full text-[8px] lg:text-xs [&>div:first-child>.date]:text-red-500 [&_.date]:text-sm lg:[&_.date]:text-lg [&_.date]:font-semibold [&>div]:p-3'>
                <div
                  onClick={() => setDate(moment.tz('2024-11-1', 'YYYY-MM-D', 'Asia/Ho_Chi_Minh'))}
                  className={`${
                    moment().tz('Asia/Ho_Chi_Minh').date() == 1
                      ? 'bg-green-100'
                      : date.date() == 1
                      ? 'bg-neutral-200'
                      : moment().tz('Asia/Ho_Chi_Minh').date() >= 1 &&
                        topics.find((topic) => topic.date == '2024-12-01')
                      ? 'cursor-pointer'
                      : 'pointer-events-none [&_div]:opacity-50'
                  } flex flex-col items-center gap-1.5`}>
                  <div className='date'>01</div>
                  {topics.find((topic) => topic.date == '2024-12-01') ? (
                    <>
                      <div className='line-clamp-2 lg:line-clamp-1'>
                        {topics.find((topic) => topic.date == '2024-12-01')?.title}
                      </div>
                      <div className='w-[30px] h-[30px]'>
                        {topics.find((topic) => topic.date == '2024-12-01')?.sponser_logo ? (
                          <Image
                            alt=''
                            className='w-full aspect-square object-cover rounded-full'
                            width={30}
                            height={30}
                            src={topics.find((topic) => topic.date == '2024-12-01')?.sponser_logo}
                          />
                        ) : null}
                      </div>
                    </>
                  ) : (
                    <div className='h-full grid place-items-center '>
                      <svg width='15' height='25' viewBox='0 0 15 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M4.80859 17.3068V17.0909C4.82375 15.6818 4.9639 14.5606 5.22905 13.7273C5.50178 12.8939 5.88814 12.2197 6.38814 11.7045C6.88814 11.1894 7.49041 10.7197 8.19496 10.2955C8.6495 10.0076 9.05859 9.68561 9.42223 9.32955C9.78587 8.97348 10.0737 8.56439 10.2859 8.10227C10.498 7.64015 10.604 7.12879 10.604 6.56818C10.604 5.89394 10.445 5.31061 10.1268 4.81818C9.80859 4.32576 9.38435 3.94697 8.85405 3.68182C8.33132 3.40909 7.74799 3.27273 7.10405 3.27273C6.52072 3.27273 5.9639 3.39394 5.43359 3.63636C4.90329 3.87879 4.4639 4.25758 4.11541 4.77273C3.76693 5.2803 3.56617 5.93561 3.51314 6.73864H0.0585938C0.111624 5.375 0.456321 4.22348 1.09268 3.28409C1.72905 2.33712 2.56996 1.62121 3.61541 1.13636C4.66844 0.651514 5.83132 0.40909 7.10405 0.40909C8.49799 0.40909 9.71769 0.670454 10.7631 1.19318C11.8086 1.70833 12.6192 2.43182 13.195 3.36364C13.7783 4.28788 14.07 5.36742 14.07 6.60227C14.07 7.45076 13.9374 8.21591 13.6722 8.89773C13.4071 9.57197 13.0283 10.1742 12.5359 10.7045C12.051 11.2348 11.4677 11.7045 10.7859 12.1136C10.1419 12.5152 9.6192 12.9318 9.21768 13.3636C8.82375 13.7955 8.53587 14.3068 8.35405 14.8977C8.17223 15.4886 8.07375 16.2197 8.05859 17.0909V17.3068H4.80859ZM6.5245 24.2159C5.90329 24.2159 5.3692 23.9962 4.92223 23.5568C4.47526 23.1098 4.25178 22.572 4.25178 21.9432C4.25178 21.322 4.47526 20.7917 4.92223 20.3523C5.3692 19.9053 5.90329 19.6818 6.5245 19.6818C7.13814 19.6818 7.66844 19.9053 8.11541 20.3523C8.56996 20.7917 8.79723 21.322 8.79723 21.9432C8.79723 22.3598 8.69117 22.7424 8.47905 23.0909C8.2745 23.4318 8.00178 23.7045 7.66087 23.9091C7.31996 24.1136 6.94117 24.2159 6.5245 24.2159Z'
                          fill='#067537'
                        />
                      </svg>
                    </div>
                  )}
                </div>
                <div
                  onClick={() => setDate(moment.tz('2024-11-2', 'YYYY-MM-D', 'Asia/Ho_Chi_Minh'))}
                  className={`${
                    moment().tz('Asia/Ho_Chi_Minh').date() == 2
                      ? 'bg-green-100'
                      : date.date() == 2
                      ? 'bg-neutral-200'
                      : moment().tz('Asia/Ho_Chi_Minh').date() >= 2 &&
                        topics.find((topic) => topic.date == '2024-12-02')
                      ? 'cursor-pointer'
                      : 'pointer-events-none [&_div]:opacity-50'
                  } flex flex-col items-center gap-1.5`}>
                  <div className='date'>02</div>
                  {topics.find((topic) => topic.date == '2024-12-02') ? (
                    <>
                      <div className='line-clamp-2 lg:line-clamp-1'>
                        {topics.find((topic) => topic.date == '2024-12-02')?.title}
                      </div>
                      <div className='w-[30px] h-[30px]'>
                        {topics.find((topic) => topic.date == '2024-12-02')?.sponser_logo ? (
                          <Image
                            alt=''
                            className='w-full aspect-square object-cover rounded-full'
                            width={30}
                            height={30}
                            src={topics.find((topic) => topic.date == '2024-12-02')?.sponser_logo}
                          />
                        ) : null}
                      </div>
                    </>
                  ) : (
                    <div className='h-full grid place-items-center '>
                      <svg width='15' height='25' viewBox='0 0 15 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M4.80859 17.3068V17.0909C4.82375 15.6818 4.9639 14.5606 5.22905 13.7273C5.50178 12.8939 5.88814 12.2197 6.38814 11.7045C6.88814 11.1894 7.49041 10.7197 8.19496 10.2955C8.6495 10.0076 9.05859 9.68561 9.42223 9.32955C9.78587 8.97348 10.0737 8.56439 10.2859 8.10227C10.498 7.64015 10.604 7.12879 10.604 6.56818C10.604 5.89394 10.445 5.31061 10.1268 4.81818C9.80859 4.32576 9.38435 3.94697 8.85405 3.68182C8.33132 3.40909 7.74799 3.27273 7.10405 3.27273C6.52072 3.27273 5.9639 3.39394 5.43359 3.63636C4.90329 3.87879 4.4639 4.25758 4.11541 4.77273C3.76693 5.2803 3.56617 5.93561 3.51314 6.73864H0.0585938C0.111624 5.375 0.456321 4.22348 1.09268 3.28409C1.72905 2.33712 2.56996 1.62121 3.61541 1.13636C4.66844 0.651514 5.83132 0.40909 7.10405 0.40909C8.49799 0.40909 9.71769 0.670454 10.7631 1.19318C11.8086 1.70833 12.6192 2.43182 13.195 3.36364C13.7783 4.28788 14.07 5.36742 14.07 6.60227C14.07 7.45076 13.9374 8.21591 13.6722 8.89773C13.4071 9.57197 13.0283 10.1742 12.5359 10.7045C12.051 11.2348 11.4677 11.7045 10.7859 12.1136C10.1419 12.5152 9.6192 12.9318 9.21768 13.3636C8.82375 13.7955 8.53587 14.3068 8.35405 14.8977C8.17223 15.4886 8.07375 16.2197 8.05859 17.0909V17.3068H4.80859ZM6.5245 24.2159C5.90329 24.2159 5.3692 23.9962 4.92223 23.5568C4.47526 23.1098 4.25178 22.572 4.25178 21.9432C4.25178 21.322 4.47526 20.7917 4.92223 20.3523C5.3692 19.9053 5.90329 19.6818 6.5245 19.6818C7.13814 19.6818 7.66844 19.9053 8.11541 20.3523C8.56996 20.7917 8.79723 21.322 8.79723 21.9432C8.79723 22.3598 8.69117 22.7424 8.47905 23.0909C8.2745 23.4318 8.00178 23.7045 7.66087 23.9091C7.31996 24.1136 6.94117 24.2159 6.5245 24.2159Z'
                          fill='#067537'
                        />
                      </svg>
                    </div>
                  )}
                </div>
                <div
                  onClick={() => setDate(moment.tz('2024-11-3', 'YYYY-MM-D', 'Asia/Ho_Chi_Minh'))}
                  className={`${
                    moment().tz('Asia/Ho_Chi_Minh').date() == 3
                      ? 'bg-green-100'
                      : date.date() == 3
                      ? 'bg-neutral-200'
                      : moment().tz('Asia/Ho_Chi_Minh').date() >= 3 &&
                        topics.find((topic) => topic.date == '2024-12-03')
                      ? 'cursor-pointer'
                      : 'pointer-events-none [&_div]:opacity-50'
                  } flex flex-col items-center gap-1.5`}>
                  <div className='date'>03</div>
                  {topics.find((topic) => topic.date == '2024-12-03') ? (
                    <>
                      <div className='line-clamp-2 lg:line-clamp-1'>
                        {topics.find((topic) => topic.date == '2024-12-03')?.title}
                      </div>
                      <div className='w-[30px] h-[30px]'>
                        {topics.find((topic) => topic.date == '2024-12-03')?.sponser_logo ? (
                          <Image
                            alt=''
                            className='w-full aspect-square object-cover rounded-full'
                            width={30}
                            height={30}
                            src={topics.find((topic) => topic.date == '2024-12-03')?.sponser_logo}
                          />
                        ) : null}
                      </div>
                    </>
                  ) : (
                    <div className='h-full grid place-items-center '>
                      <svg width='15' height='25' viewBox='0 0 15 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M4.80859 17.3068V17.0909C4.82375 15.6818 4.9639 14.5606 5.22905 13.7273C5.50178 12.8939 5.88814 12.2197 6.38814 11.7045C6.88814 11.1894 7.49041 10.7197 8.19496 10.2955C8.6495 10.0076 9.05859 9.68561 9.42223 9.32955C9.78587 8.97348 10.0737 8.56439 10.2859 8.10227C10.498 7.64015 10.604 7.12879 10.604 6.56818C10.604 5.89394 10.445 5.31061 10.1268 4.81818C9.80859 4.32576 9.38435 3.94697 8.85405 3.68182C8.33132 3.40909 7.74799 3.27273 7.10405 3.27273C6.52072 3.27273 5.9639 3.39394 5.43359 3.63636C4.90329 3.87879 4.4639 4.25758 4.11541 4.77273C3.76693 5.2803 3.56617 5.93561 3.51314 6.73864H0.0585938C0.111624 5.375 0.456321 4.22348 1.09268 3.28409C1.72905 2.33712 2.56996 1.62121 3.61541 1.13636C4.66844 0.651514 5.83132 0.40909 7.10405 0.40909C8.49799 0.40909 9.71769 0.670454 10.7631 1.19318C11.8086 1.70833 12.6192 2.43182 13.195 3.36364C13.7783 4.28788 14.07 5.36742 14.07 6.60227C14.07 7.45076 13.9374 8.21591 13.6722 8.89773C13.4071 9.57197 13.0283 10.1742 12.5359 10.7045C12.051 11.2348 11.4677 11.7045 10.7859 12.1136C10.1419 12.5152 9.6192 12.9318 9.21768 13.3636C8.82375 13.7955 8.53587 14.3068 8.35405 14.8977C8.17223 15.4886 8.07375 16.2197 8.05859 17.0909V17.3068H4.80859ZM6.5245 24.2159C5.90329 24.2159 5.3692 23.9962 4.92223 23.5568C4.47526 23.1098 4.25178 22.572 4.25178 21.9432C4.25178 21.322 4.47526 20.7917 4.92223 20.3523C5.3692 19.9053 5.90329 19.6818 6.5245 19.6818C7.13814 19.6818 7.66844 19.9053 8.11541 20.3523C8.56996 20.7917 8.79723 21.322 8.79723 21.9432C8.79723 22.3598 8.69117 22.7424 8.47905 23.0909C8.2745 23.4318 8.00178 23.7045 7.66087 23.9091C7.31996 24.1136 6.94117 24.2159 6.5245 24.2159Z'
                          fill='#067537'
                        />
                      </svg>
                    </div>
                  )}
                </div>
                <div
                  onClick={() => setDate(moment.tz('2024-11-4', 'YYYY-MM-D', 'Asia/Ho_Chi_Minh'))}
                  className={`${
                    moment().tz('Asia/Ho_Chi_Minh').date() == 4
                      ? 'bg-green-100'
                      : date.date() == 4
                      ? 'bg-neutral-200'
                      : moment().tz('Asia/Ho_Chi_Minh').date() >= 4 &&
                        topics.find((topic) => topic.date == '2024-12-04')
                      ? 'cursor-pointer'
                      : 'pointer-events-none [&_div]:opacity-50'
                  } flex flex-col items-center gap-1.5`}>
                  <div className='date'>04</div>
                  {topics.find((topic) => topic.date == '2024-12-04') ? (
                    <>
                      <div className='line-clamp-2 lg:line-clamp-1'>
                        {topics.find((topic) => topic.date == '2024-12-04')?.title}
                      </div>
                      <div className='w-[30px] h-[30px]'>
                        {topics.find((topic) => topic.date == '2024-12-04')?.sponser_logo ? (
                          <Image
                            alt=''
                            className='w-full aspect-square object-cover rounded-full'
                            width={30}
                            height={30}
                            src={topics.find((topic) => topic.date == '2024-12-04')?.sponser_logo}
                          />
                        ) : null}
                      </div>
                    </>
                  ) : (
                    <div className='h-full grid place-items-center '>
                      <svg width='15' height='25' viewBox='0 0 15 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M4.80859 17.3068V17.0909C4.82375 15.6818 4.9639 14.5606 5.22905 13.7273C5.50178 12.8939 5.88814 12.2197 6.38814 11.7045C6.88814 11.1894 7.49041 10.7197 8.19496 10.2955C8.6495 10.0076 9.05859 9.68561 9.42223 9.32955C9.78587 8.97348 10.0737 8.56439 10.2859 8.10227C10.498 7.64015 10.604 7.12879 10.604 6.56818C10.604 5.89394 10.445 5.31061 10.1268 4.81818C9.80859 4.32576 9.38435 3.94697 8.85405 3.68182C8.33132 3.40909 7.74799 3.27273 7.10405 3.27273C6.52072 3.27273 5.9639 3.39394 5.43359 3.63636C4.90329 3.87879 4.4639 4.25758 4.11541 4.77273C3.76693 5.2803 3.56617 5.93561 3.51314 6.73864H0.0585938C0.111624 5.375 0.456321 4.22348 1.09268 3.28409C1.72905 2.33712 2.56996 1.62121 3.61541 1.13636C4.66844 0.651514 5.83132 0.40909 7.10405 0.40909C8.49799 0.40909 9.71769 0.670454 10.7631 1.19318C11.8086 1.70833 12.6192 2.43182 13.195 3.36364C13.7783 4.28788 14.07 5.36742 14.07 6.60227C14.07 7.45076 13.9374 8.21591 13.6722 8.89773C13.4071 9.57197 13.0283 10.1742 12.5359 10.7045C12.051 11.2348 11.4677 11.7045 10.7859 12.1136C10.1419 12.5152 9.6192 12.9318 9.21768 13.3636C8.82375 13.7955 8.53587 14.3068 8.35405 14.8977C8.17223 15.4886 8.07375 16.2197 8.05859 17.0909V17.3068H4.80859ZM6.5245 24.2159C5.90329 24.2159 5.3692 23.9962 4.92223 23.5568C4.47526 23.1098 4.25178 22.572 4.25178 21.9432C4.25178 21.322 4.47526 20.7917 4.92223 20.3523C5.3692 19.9053 5.90329 19.6818 6.5245 19.6818C7.13814 19.6818 7.66844 19.9053 8.11541 20.3523C8.56996 20.7917 8.79723 21.322 8.79723 21.9432C8.79723 22.3598 8.69117 22.7424 8.47905 23.0909C8.2745 23.4318 8.00178 23.7045 7.66087 23.9091C7.31996 24.1136 6.94117 24.2159 6.5245 24.2159Z'
                          fill='#067537'
                        />
                      </svg>
                    </div>
                  )}
                </div>
                <div
                  onClick={() => setDate(moment.tz('2024-11-5', 'YYYY-MM-D', 'Asia/Ho_Chi_Minh'))}
                  className={`${
                    moment().tz('Asia/Ho_Chi_Minh').date() == 5
                      ? 'bg-green-100'
                      : date.date() == 5
                      ? 'bg-neutral-200'
                      : moment().tz('Asia/Ho_Chi_Minh').date() >= 5 &&
                        topics.find((topic) => topic.date == '2024-12-05')
                      ? 'cursor-pointer'
                      : 'pointer-events-none [&_div]:opacity-50'
                  } flex flex-col items-center gap-1.5`}>
                  <div className='date'>05</div>
                  {topics.find((topic) => topic.date == '2024-12-05') ? (
                    <>
                      <div className='line-clamp-2 lg:line-clamp-1'>
                        {topics.find((topic) => topic.date == '2024-12-05')?.title}
                      </div>
                      <div className='w-[30px] h-[30px]'>
                        {topics.find((topic) => topic.date == '2024-12-05')?.sponser_logo ? (
                          <Image
                            alt=''
                            className='w-full aspect-square object-cover rounded-full'
                            width={30}
                            height={30}
                            src={topics.find((topic) => topic.date == '2024-12-05')?.sponser_logo}
                          />
                        ) : null}
                      </div>
                    </>
                  ) : (
                    <div className='h-full grid place-items-center '>
                      <svg width='15' height='25' viewBox='0 0 15 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M4.80859 17.3068V17.0909C4.82375 15.6818 4.9639 14.5606 5.22905 13.7273C5.50178 12.8939 5.88814 12.2197 6.38814 11.7045C6.88814 11.1894 7.49041 10.7197 8.19496 10.2955C8.6495 10.0076 9.05859 9.68561 9.42223 9.32955C9.78587 8.97348 10.0737 8.56439 10.2859 8.10227C10.498 7.64015 10.604 7.12879 10.604 6.56818C10.604 5.89394 10.445 5.31061 10.1268 4.81818C9.80859 4.32576 9.38435 3.94697 8.85405 3.68182C8.33132 3.40909 7.74799 3.27273 7.10405 3.27273C6.52072 3.27273 5.9639 3.39394 5.43359 3.63636C4.90329 3.87879 4.4639 4.25758 4.11541 4.77273C3.76693 5.2803 3.56617 5.93561 3.51314 6.73864H0.0585938C0.111624 5.375 0.456321 4.22348 1.09268 3.28409C1.72905 2.33712 2.56996 1.62121 3.61541 1.13636C4.66844 0.651514 5.83132 0.40909 7.10405 0.40909C8.49799 0.40909 9.71769 0.670454 10.7631 1.19318C11.8086 1.70833 12.6192 2.43182 13.195 3.36364C13.7783 4.28788 14.07 5.36742 14.07 6.60227C14.07 7.45076 13.9374 8.21591 13.6722 8.89773C13.4071 9.57197 13.0283 10.1742 12.5359 10.7045C12.051 11.2348 11.4677 11.7045 10.7859 12.1136C10.1419 12.5152 9.6192 12.9318 9.21768 13.3636C8.82375 13.7955 8.53587 14.3068 8.35405 14.8977C8.17223 15.4886 8.07375 16.2197 8.05859 17.0909V17.3068H4.80859ZM6.5245 24.2159C5.90329 24.2159 5.3692 23.9962 4.92223 23.5568C4.47526 23.1098 4.25178 22.572 4.25178 21.9432C4.25178 21.322 4.47526 20.7917 4.92223 20.3523C5.3692 19.9053 5.90329 19.6818 6.5245 19.6818C7.13814 19.6818 7.66844 19.9053 8.11541 20.3523C8.56996 20.7917 8.79723 21.322 8.79723 21.9432C8.79723 22.3598 8.69117 22.7424 8.47905 23.0909C8.2745 23.4318 8.00178 23.7045 7.66087 23.9091C7.31996 24.1136 6.94117 24.2159 6.5245 24.2159Z'
                          fill='#067537'
                        />
                      </svg>
                    </div>
                  )}
                </div>
                <div
                  onClick={() => setDate(moment.tz('2024-11-6', 'YYYY-MM-D', 'Asia/Ho_Chi_Minh'))}
                  className={`${
                    moment().tz('Asia/Ho_Chi_Minh').date() == 6
                      ? 'bg-green-100'
                      : date.date() == 6
                      ? 'bg-neutral-200'
                      : moment().tz('Asia/Ho_Chi_Minh').date() >= 6 &&
                        topics.find((topic) => topic.date == '2024-12-06')
                      ? 'cursor-pointer'
                      : 'pointer-events-none [&_div]:opacity-50'
                  } flex flex-col items-center gap-1.5`}>
                  <div className='date'>06</div>
                  {topics.find((topic) => topic.date == '2024-12-06') ? (
                    <>
                      <div className='line-clamp-2 lg:line-clamp-1'>
                        {topics.find((topic) => topic.date == '2024-12-06')?.title}
                      </div>
                      <div className='w-[30px] h-[30px]'>
                        {topics.find((topic) => topic.date == '2024-12-06')?.sponser_logo ? (
                          <Image
                            alt=''
                            className='w-full aspect-square object-cover rounded-full'
                            width={30}
                            height={30}
                            src={topics.find((topic) => topic.date == '2024-12-06')?.sponser_logo}
                          />
                        ) : null}
                      </div>
                    </>
                  ) : (
                    <div className='h-full grid place-items-center '>
                      <svg width='15' height='25' viewBox='0 0 15 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M4.80859 17.3068V17.0909C4.82375 15.6818 4.9639 14.5606 5.22905 13.7273C5.50178 12.8939 5.88814 12.2197 6.38814 11.7045C6.88814 11.1894 7.49041 10.7197 8.19496 10.2955C8.6495 10.0076 9.05859 9.68561 9.42223 9.32955C9.78587 8.97348 10.0737 8.56439 10.2859 8.10227C10.498 7.64015 10.604 7.12879 10.604 6.56818C10.604 5.89394 10.445 5.31061 10.1268 4.81818C9.80859 4.32576 9.38435 3.94697 8.85405 3.68182C8.33132 3.40909 7.74799 3.27273 7.10405 3.27273C6.52072 3.27273 5.9639 3.39394 5.43359 3.63636C4.90329 3.87879 4.4639 4.25758 4.11541 4.77273C3.76693 5.2803 3.56617 5.93561 3.51314 6.73864H0.0585938C0.111624 5.375 0.456321 4.22348 1.09268 3.28409C1.72905 2.33712 2.56996 1.62121 3.61541 1.13636C4.66844 0.651514 5.83132 0.40909 7.10405 0.40909C8.49799 0.40909 9.71769 0.670454 10.7631 1.19318C11.8086 1.70833 12.6192 2.43182 13.195 3.36364C13.7783 4.28788 14.07 5.36742 14.07 6.60227C14.07 7.45076 13.9374 8.21591 13.6722 8.89773C13.4071 9.57197 13.0283 10.1742 12.5359 10.7045C12.051 11.2348 11.4677 11.7045 10.7859 12.1136C10.1419 12.5152 9.6192 12.9318 9.21768 13.3636C8.82375 13.7955 8.53587 14.3068 8.35405 14.8977C8.17223 15.4886 8.07375 16.2197 8.05859 17.0909V17.3068H4.80859ZM6.5245 24.2159C5.90329 24.2159 5.3692 23.9962 4.92223 23.5568C4.47526 23.1098 4.25178 22.572 4.25178 21.9432C4.25178 21.322 4.47526 20.7917 4.92223 20.3523C5.3692 19.9053 5.90329 19.6818 6.5245 19.6818C7.13814 19.6818 7.66844 19.9053 8.11541 20.3523C8.56996 20.7917 8.79723 21.322 8.79723 21.9432C8.79723 22.3598 8.69117 22.7424 8.47905 23.0909C8.2745 23.4318 8.00178 23.7045 7.66087 23.9091C7.31996 24.1136 6.94117 24.2159 6.5245 24.2159Z'
                          fill='#067537'
                        />
                      </svg>
                    </div>
                  )}
                </div>
                <div
                  onClick={() => setDate(moment.tz('2024-11-7', 'YYYY-MM-D', 'Asia/Ho_Chi_Minh'))}
                  className={`${
                    moment().tz('Asia/Ho_Chi_Minh').date() == 7
                      ? 'bg-green-100'
                      : date.date() == 7
                      ? 'bg-neutral-200'
                      : moment().tz('Asia/Ho_Chi_Minh').date() >= 7 &&
                        topics.find((topic) => topic.date == '2024-12-07')
                      ? 'cursor-pointer'
                      : 'pointer-events-none [&_div]:opacity-50'
                  } flex flex-col items-center gap-1.5`}>
                  <div className='date'>07</div>
                  {topics.find((topic) => topic.date == '2024-12-07') ? (
                    <>
                      <div className='line-clamp-2 lg:line-clamp-1'>
                        {topics.find((topic) => topic.date == '2024-12-07')?.title}
                      </div>
                      <div className='w-[30px] h-[30px]'>
                        {topics.find((topic) => topic.date == '2024-12-07')?.sponser_logo ? (
                          <Image
                            alt=''
                            className='w-full aspect-square object-cover rounded-full'
                            width={30}
                            height={30}
                            src={topics.find((topic) => topic.date == '2024-12-07')?.sponser_logo}
                          />
                        ) : null}
                      </div>
                    </>
                  ) : (
                    <div className='h-full grid place-items-center '>
                      <svg width='15' height='25' viewBox='0 0 15 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M4.80859 17.3068V17.0909C4.82375 15.6818 4.9639 14.5606 5.22905 13.7273C5.50178 12.8939 5.88814 12.2197 6.38814 11.7045C6.88814 11.1894 7.49041 10.7197 8.19496 10.2955C8.6495 10.0076 9.05859 9.68561 9.42223 9.32955C9.78587 8.97348 10.0737 8.56439 10.2859 8.10227C10.498 7.64015 10.604 7.12879 10.604 6.56818C10.604 5.89394 10.445 5.31061 10.1268 4.81818C9.80859 4.32576 9.38435 3.94697 8.85405 3.68182C8.33132 3.40909 7.74799 3.27273 7.10405 3.27273C6.52072 3.27273 5.9639 3.39394 5.43359 3.63636C4.90329 3.87879 4.4639 4.25758 4.11541 4.77273C3.76693 5.2803 3.56617 5.93561 3.51314 6.73864H0.0585938C0.111624 5.375 0.456321 4.22348 1.09268 3.28409C1.72905 2.33712 2.56996 1.62121 3.61541 1.13636C4.66844 0.651514 5.83132 0.40909 7.10405 0.40909C8.49799 0.40909 9.71769 0.670454 10.7631 1.19318C11.8086 1.70833 12.6192 2.43182 13.195 3.36364C13.7783 4.28788 14.07 5.36742 14.07 6.60227C14.07 7.45076 13.9374 8.21591 13.6722 8.89773C13.4071 9.57197 13.0283 10.1742 12.5359 10.7045C12.051 11.2348 11.4677 11.7045 10.7859 12.1136C10.1419 12.5152 9.6192 12.9318 9.21768 13.3636C8.82375 13.7955 8.53587 14.3068 8.35405 14.8977C8.17223 15.4886 8.07375 16.2197 8.05859 17.0909V17.3068H4.80859ZM6.5245 24.2159C5.90329 24.2159 5.3692 23.9962 4.92223 23.5568C4.47526 23.1098 4.25178 22.572 4.25178 21.9432C4.25178 21.322 4.47526 20.7917 4.92223 20.3523C5.3692 19.9053 5.90329 19.6818 6.5245 19.6818C7.13814 19.6818 7.66844 19.9053 8.11541 20.3523C8.56996 20.7917 8.79723 21.322 8.79723 21.9432C8.79723 22.3598 8.69117 22.7424 8.47905 23.0909C8.2745 23.4318 8.00178 23.7045 7.66087 23.9091C7.31996 24.1136 6.94117 24.2159 6.5245 24.2159Z'
                          fill='#067537'
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              <div className='grid grid-cols-7 items-center divide-x-[1px] text-gray-black font-medium [&>div]:h-full text-[8px] lg:text-xs [&>div:first-child>.date]:text-red-500 [&_.date]:text-sm lg:[&_.date]:text-lg [&_.date]:font-semibold [&>div]:p-3'>
                <div
                  onClick={() => setDate(moment.tz('2024-11-8', 'YYYY-MM-D', 'Asia/Ho_Chi_Minh'))}
                  className={`${
                    moment().tz('Asia/Ho_Chi_Minh').date() == 8
                      ? 'bg-green-100'
                      : date.date() == 8
                      ? 'bg-neutral-200'
                      : moment().tz('Asia/Ho_Chi_Minh').date() >= 8 &&
                        topics.find((topic) => topic.date == '2024-12-08')
                      ? 'cursor-pointer'
                      : 'pointer-events-none [&_div]:opacity-50'
                  } flex flex-col items-center gap-1.5`}>
                  <div className='date'>08</div>
                  {topics.find((topic) => topic.date == '2024-12-08') ? (
                    <>
                      <div className='line-clamp-2 lg:line-clamp-1'>
                        {topics.find((topic) => topic.date == '2024-12-08')?.title}
                      </div>
                      <div className='w-[30px] h-[30px]'>
                        {topics.find((topic) => topic.date == '2024-12-08')?.sponser_logo ? (
                          <Image
                            alt=''
                            className='w-full aspect-square object-cover rounded-full'
                            width={30}
                            height={30}
                            src={topics.find((topic) => topic.date == '2024-12-08')?.sponser_logo}
                          />
                        ) : null}
                      </div>
                    </>
                  ) : (
                    <div className='h-full grid place-items-center '>
                      <svg width='15' height='25' viewBox='0 0 15 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M4.80859 17.3068V17.0909C4.82375 15.6818 4.9639 14.5606 5.22905 13.7273C5.50178 12.8939 5.88814 12.2197 6.38814 11.7045C6.88814 11.1894 7.49041 10.7197 8.19496 10.2955C8.6495 10.0076 9.05859 9.68561 9.42223 9.32955C9.78587 8.97348 10.0737 8.56439 10.2859 8.10227C10.498 7.64015 10.604 7.12879 10.604 6.56818C10.604 5.89394 10.445 5.31061 10.1268 4.81818C9.80859 4.32576 9.38435 3.94697 8.85405 3.68182C8.33132 3.40909 7.74799 3.27273 7.10405 3.27273C6.52072 3.27273 5.9639 3.39394 5.43359 3.63636C4.90329 3.87879 4.4639 4.25758 4.11541 4.77273C3.76693 5.2803 3.56617 5.93561 3.51314 6.73864H0.0585938C0.111624 5.375 0.456321 4.22348 1.09268 3.28409C1.72905 2.33712 2.56996 1.62121 3.61541 1.13636C4.66844 0.651514 5.83132 0.40909 7.10405 0.40909C8.49799 0.40909 9.71769 0.670454 10.7631 1.19318C11.8086 1.70833 12.6192 2.43182 13.195 3.36364C13.7783 4.28788 14.07 5.36742 14.07 6.60227C14.07 7.45076 13.9374 8.21591 13.6722 8.89773C13.4071 9.57197 13.0283 10.1742 12.5359 10.7045C12.051 11.2348 11.4677 11.7045 10.7859 12.1136C10.1419 12.5152 9.6192 12.9318 9.21768 13.3636C8.82375 13.7955 8.53587 14.3068 8.35405 14.8977C8.17223 15.4886 8.07375 16.2197 8.05859 17.0909V17.3068H4.80859ZM6.5245 24.2159C5.90329 24.2159 5.3692 23.9962 4.92223 23.5568C4.47526 23.1098 4.25178 22.572 4.25178 21.9432C4.25178 21.322 4.47526 20.7917 4.92223 20.3523C5.3692 19.9053 5.90329 19.6818 6.5245 19.6818C7.13814 19.6818 7.66844 19.9053 8.11541 20.3523C8.56996 20.7917 8.79723 21.322 8.79723 21.9432C8.79723 22.3598 8.69117 22.7424 8.47905 23.0909C8.2745 23.4318 8.00178 23.7045 7.66087 23.9091C7.31996 24.1136 6.94117 24.2159 6.5245 24.2159Z'
                          fill='#067537'
                        />
                      </svg>
                    </div>
                  )}
                </div>
                <div
                  onClick={() => setDate(moment.tz('2024-11-9', 'YYYY-MM-D', 'Asia/Ho_Chi_Minh'))}
                  className={`${
                    moment().tz('Asia/Ho_Chi_Minh').date() == 9
                      ? 'bg-green-100'
                      : date.date() == 9
                      ? 'bg-neutral-200'
                      : moment().tz('Asia/Ho_Chi_Minh').date() >= 9 &&
                        topics.find((topic) => topic.date == '2024-12-09')
                      ? 'cursor-pointer'
                      : 'pointer-events-none [&_div]:opacity-50'
                  } flex flex-col items-center gap-1.5`}>
                  <div className='date'>09</div>
                  {topics.find((topic) => topic.date == '2024-12-09') ? (
                    <>
                      <div className='line-clamp-2 lg:line-clamp-1'>
                        {topics.find((topic) => topic.date == '2024-12-09')?.title}
                      </div>
                      <div className='w-[30px] h-[30px]'>
                        {topics.find((topic) => topic.date == '2024-12-09')?.sponser_logo ? (
                          <Image
                            alt=''
                            className='w-full aspect-square object-cover rounded-full'
                            width={30}
                            height={30}
                            src={topics.find((topic) => topic.date == '2024-12-09')?.sponser_logo}
                          />
                        ) : null}
                      </div>
                    </>
                  ) : (
                    <div className='h-full grid place-items-center '>
                      <svg width='15' height='25' viewBox='0 0 15 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M4.80859 17.3068V17.0909C4.82375 15.6818 4.9639 14.5606 5.22905 13.7273C5.50178 12.8939 5.88814 12.2197 6.38814 11.7045C6.88814 11.1894 7.49041 10.7197 8.19496 10.2955C8.6495 10.0076 9.05859 9.68561 9.42223 9.32955C9.78587 8.97348 10.0737 8.56439 10.2859 8.10227C10.498 7.64015 10.604 7.12879 10.604 6.56818C10.604 5.89394 10.445 5.31061 10.1268 4.81818C9.80859 4.32576 9.38435 3.94697 8.85405 3.68182C8.33132 3.40909 7.74799 3.27273 7.10405 3.27273C6.52072 3.27273 5.9639 3.39394 5.43359 3.63636C4.90329 3.87879 4.4639 4.25758 4.11541 4.77273C3.76693 5.2803 3.56617 5.93561 3.51314 6.73864H0.0585938C0.111624 5.375 0.456321 4.22348 1.09268 3.28409C1.72905 2.33712 2.56996 1.62121 3.61541 1.13636C4.66844 0.651514 5.83132 0.40909 7.10405 0.40909C8.49799 0.40909 9.71769 0.670454 10.7631 1.19318C11.8086 1.70833 12.6192 2.43182 13.195 3.36364C13.7783 4.28788 14.07 5.36742 14.07 6.60227C14.07 7.45076 13.9374 8.21591 13.6722 8.89773C13.4071 9.57197 13.0283 10.1742 12.5359 10.7045C12.051 11.2348 11.4677 11.7045 10.7859 12.1136C10.1419 12.5152 9.6192 12.9318 9.21768 13.3636C8.82375 13.7955 8.53587 14.3068 8.35405 14.8977C8.17223 15.4886 8.07375 16.2197 8.05859 17.0909V17.3068H4.80859ZM6.5245 24.2159C5.90329 24.2159 5.3692 23.9962 4.92223 23.5568C4.47526 23.1098 4.25178 22.572 4.25178 21.9432C4.25178 21.322 4.47526 20.7917 4.92223 20.3523C5.3692 19.9053 5.90329 19.6818 6.5245 19.6818C7.13814 19.6818 7.66844 19.9053 8.11541 20.3523C8.56996 20.7917 8.79723 21.322 8.79723 21.9432C8.79723 22.3598 8.69117 22.7424 8.47905 23.0909C8.2745 23.4318 8.00178 23.7045 7.66087 23.9091C7.31996 24.1136 6.94117 24.2159 6.5245 24.2159Z'
                          fill='#067537'
                        />
                      </svg>
                    </div>
                  )}
                </div>
                <div
                  onClick={() => setDate(moment.tz('2024-11-10', 'YYYY-MM-D', 'Asia/Ho_Chi_Minh'))}
                  className={`${
                    moment().tz('Asia/Ho_Chi_Minh').date() == 10
                      ? 'bg-green-100'
                      : date.date() == 10
                      ? 'bg-neutral-200'
                      : moment().tz('Asia/Ho_Chi_Minh').date() >= 10 &&
                        topics.find((topic) => topic.date == '2024-12-10')
                      ? 'cursor-pointer'
                      : 'pointer-events-none [&_div]:opacity-50'
                  } flex flex-col items-center gap-1.5`}>
                  <div className='date'>10</div>
                  {topics.find((topic) => topic.date == '2024-12-10') ? (
                    <>
                      <div className='line-clamp-2 lg:line-clamp-1'>
                        {topics.find((topic) => topic.date == '2024-12-10')?.title}
                      </div>
                      <div className='w-[30px] h-[30px]'>
                        {topics.find((topic) => topic.date == '2024-12-10')?.sponser_logo ? (
                          <Image
                            alt=''
                            className='w-full aspect-square object-cover rounded-full'
                            width={30}
                            height={30}
                            src={topics.find((topic) => topic.date == '2024-12-10')?.sponser_logo}
                          />
                        ) : null}
                      </div>
                    </>
                  ) : (
                    <div className='h-full grid place-items-center '>
                      <svg width='15' height='25' viewBox='0 0 15 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M4.80859 17.3068V17.0909C4.82375 15.6818 4.9639 14.5606 5.22905 13.7273C5.50178 12.8939 5.88814 12.2197 6.38814 11.7045C6.88814 11.1894 7.49041 10.7197 8.19496 10.2955C8.6495 10.0076 9.05859 9.68561 9.42223 9.32955C9.78587 8.97348 10.0737 8.56439 10.2859 8.10227C10.498 7.64015 10.604 7.12879 10.604 6.56818C10.604 5.89394 10.445 5.31061 10.1268 4.81818C9.80859 4.32576 9.38435 3.94697 8.85405 3.68182C8.33132 3.40909 7.74799 3.27273 7.10405 3.27273C6.52072 3.27273 5.9639 3.39394 5.43359 3.63636C4.90329 3.87879 4.4639 4.25758 4.11541 4.77273C3.76693 5.2803 3.56617 5.93561 3.51314 6.73864H0.0585938C0.111624 5.375 0.456321 4.22348 1.09268 3.28409C1.72905 2.33712 2.56996 1.62121 3.61541 1.13636C4.66844 0.651514 5.83132 0.40909 7.10405 0.40909C8.49799 0.40909 9.71769 0.670454 10.7631 1.19318C11.8086 1.70833 12.6192 2.43182 13.195 3.36364C13.7783 4.28788 14.07 5.36742 14.07 6.60227C14.07 7.45076 13.9374 8.21591 13.6722 8.89773C13.4071 9.57197 13.0283 10.1742 12.5359 10.7045C12.051 11.2348 11.4677 11.7045 10.7859 12.1136C10.1419 12.5152 9.6192 12.9318 9.21768 13.3636C8.82375 13.7955 8.53587 14.3068 8.35405 14.8977C8.17223 15.4886 8.07375 16.2197 8.05859 17.0909V17.3068H4.80859ZM6.5245 24.2159C5.90329 24.2159 5.3692 23.9962 4.92223 23.5568C4.47526 23.1098 4.25178 22.572 4.25178 21.9432C4.25178 21.322 4.47526 20.7917 4.92223 20.3523C5.3692 19.9053 5.90329 19.6818 6.5245 19.6818C7.13814 19.6818 7.66844 19.9053 8.11541 20.3523C8.56996 20.7917 8.79723 21.322 8.79723 21.9432C8.79723 22.3598 8.69117 22.7424 8.47905 23.0909C8.2745 23.4318 8.00178 23.7045 7.66087 23.9091C7.31996 24.1136 6.94117 24.2159 6.5245 24.2159Z'
                          fill='#067537'
                        />
                      </svg>
                    </div>
                  )}
                </div>
                <div
                  onClick={() => setDate(moment.tz('2024-11-11', 'YYYY-MM-D', 'Asia/Ho_Chi_Minh'))}
                  className={`${
                    moment().tz('Asia/Ho_Chi_Minh').date() == 11
                      ? 'bg-green-100'
                      : date.date() == 11
                      ? 'bg-neutral-200'
                      : moment().tz('Asia/Ho_Chi_Minh').date() >= 11 &&
                        topics.find((topic) => topic.date == '2024-12-11')
                      ? 'cursor-pointer'
                      : 'pointer-events-none [&_div]:opacity-50'
                  } flex flex-col items-center gap-1.5`}>
                  <div className='date'>11</div>
                  {topics.find((topic) => topic.date == '2024-12-11') ? (
                    <>
                      <div className='line-clamp-2 lg:line-clamp-1'>
                        {topics.find((topic) => topic.date == '2024-12-11')?.title}
                      </div>
                      <div className='w-[30px] h-[30px]'>
                        {topics.find((topic) => topic.date == '2024-12-11')?.sponser_logo ? (
                          <Image
                            alt=''
                            className='w-full aspect-square object-cover rounded-full'
                            width={30}
                            height={30}
                            src={topics.find((topic) => topic.date == '2024-12-11')?.sponser_logo}
                          />
                        ) : null}
                      </div>
                    </>
                  ) : (
                    <div className='h-full grid place-items-center '>
                      <svg width='15' height='25' viewBox='0 0 15 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M4.80859 17.3068V17.0909C4.82375 15.6818 4.9639 14.5606 5.22905 13.7273C5.50178 12.8939 5.88814 12.2197 6.38814 11.7045C6.88814 11.1894 7.49041 10.7197 8.19496 10.2955C8.6495 10.0076 9.05859 9.68561 9.42223 9.32955C9.78587 8.97348 10.0737 8.56439 10.2859 8.10227C10.498 7.64015 10.604 7.12879 10.604 6.56818C10.604 5.89394 10.445 5.31061 10.1268 4.81818C9.80859 4.32576 9.38435 3.94697 8.85405 3.68182C8.33132 3.40909 7.74799 3.27273 7.10405 3.27273C6.52072 3.27273 5.9639 3.39394 5.43359 3.63636C4.90329 3.87879 4.4639 4.25758 4.11541 4.77273C3.76693 5.2803 3.56617 5.93561 3.51314 6.73864H0.0585938C0.111624 5.375 0.456321 4.22348 1.09268 3.28409C1.72905 2.33712 2.56996 1.62121 3.61541 1.13636C4.66844 0.651514 5.83132 0.40909 7.10405 0.40909C8.49799 0.40909 9.71769 0.670454 10.7631 1.19318C11.8086 1.70833 12.6192 2.43182 13.195 3.36364C13.7783 4.28788 14.07 5.36742 14.07 6.60227C14.07 7.45076 13.9374 8.21591 13.6722 8.89773C13.4071 9.57197 13.0283 10.1742 12.5359 10.7045C12.051 11.2348 11.4677 11.7045 10.7859 12.1136C10.1419 12.5152 9.6192 12.9318 9.21768 13.3636C8.82375 13.7955 8.53587 14.3068 8.35405 14.8977C8.17223 15.4886 8.07375 16.2197 8.05859 17.0909V17.3068H4.80859ZM6.5245 24.2159C5.90329 24.2159 5.3692 23.9962 4.92223 23.5568C4.47526 23.1098 4.25178 22.572 4.25178 21.9432C4.25178 21.322 4.47526 20.7917 4.92223 20.3523C5.3692 19.9053 5.90329 19.6818 6.5245 19.6818C7.13814 19.6818 7.66844 19.9053 8.11541 20.3523C8.56996 20.7917 8.79723 21.322 8.79723 21.9432C8.79723 22.3598 8.69117 22.7424 8.47905 23.0909C8.2745 23.4318 8.00178 23.7045 7.66087 23.9091C7.31996 24.1136 6.94117 24.2159 6.5245 24.2159Z'
                          fill='#067537'
                        />
                      </svg>
                    </div>
                  )}
                </div>
                <div
                  onClick={() => setDate(moment.tz('2024-11-12', 'YYYY-MM-D', 'Asia/Ho_Chi_Minh'))}
                  className={`${
                    moment().tz('Asia/Ho_Chi_Minh').date() == 12
                      ? 'bg-green-100'
                      : date.date() == 12
                      ? 'bg-neutral-200'
                      : moment().tz('Asia/Ho_Chi_Minh').date() >= 12 &&
                        topics.find((topic) => topic.date == '2024-12-12')
                      ? 'cursor-pointer'
                      : 'pointer-events-none [&_div]:opacity-50'
                  } flex flex-col items-center gap-1.5`}>
                  <div className='date'>12</div>
                  {topics.find((topic) => topic.date == '2024-12-12') ? (
                    <>
                      <div className='line-clamp-2 lg:line-clamp-1'>
                        {topics.find((topic) => topic.date == '2024-12-12')?.title}
                      </div>
                      <div className='w-[30px] h-[30px]'>
                        {topics.find((topic) => topic.date == '2024-12-12')?.sponser_logo ? (
                          <Image
                            alt=''
                            className='w-full aspect-square object-cover rounded-full'
                            width={30}
                            height={30}
                            src={topics.find((topic) => topic.date == '2024-12-12')?.sponser_logo}
                          />
                        ) : null}
                      </div>
                    </>
                  ) : (
                    <div className='h-full grid place-items-center '>
                      <svg width='15' height='25' viewBox='0 0 15 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M4.80859 17.3068V17.0909C4.82375 15.6818 4.9639 14.5606 5.22905 13.7273C5.50178 12.8939 5.88814 12.2197 6.38814 11.7045C6.88814 11.1894 7.49041 10.7197 8.19496 10.2955C8.6495 10.0076 9.05859 9.68561 9.42223 9.32955C9.78587 8.97348 10.0737 8.56439 10.2859 8.10227C10.498 7.64015 10.604 7.12879 10.604 6.56818C10.604 5.89394 10.445 5.31061 10.1268 4.81818C9.80859 4.32576 9.38435 3.94697 8.85405 3.68182C8.33132 3.40909 7.74799 3.27273 7.10405 3.27273C6.52072 3.27273 5.9639 3.39394 5.43359 3.63636C4.90329 3.87879 4.4639 4.25758 4.11541 4.77273C3.76693 5.2803 3.56617 5.93561 3.51314 6.73864H0.0585938C0.111624 5.375 0.456321 4.22348 1.09268 3.28409C1.72905 2.33712 2.56996 1.62121 3.61541 1.13636C4.66844 0.651514 5.83132 0.40909 7.10405 0.40909C8.49799 0.40909 9.71769 0.670454 10.7631 1.19318C11.8086 1.70833 12.6192 2.43182 13.195 3.36364C13.7783 4.28788 14.07 5.36742 14.07 6.60227C14.07 7.45076 13.9374 8.21591 13.6722 8.89773C13.4071 9.57197 13.0283 10.1742 12.5359 10.7045C12.051 11.2348 11.4677 11.7045 10.7859 12.1136C10.1419 12.5152 9.6192 12.9318 9.21768 13.3636C8.82375 13.7955 8.53587 14.3068 8.35405 14.8977C8.17223 15.4886 8.07375 16.2197 8.05859 17.0909V17.3068H4.80859ZM6.5245 24.2159C5.90329 24.2159 5.3692 23.9962 4.92223 23.5568C4.47526 23.1098 4.25178 22.572 4.25178 21.9432C4.25178 21.322 4.47526 20.7917 4.92223 20.3523C5.3692 19.9053 5.90329 19.6818 6.5245 19.6818C7.13814 19.6818 7.66844 19.9053 8.11541 20.3523C8.56996 20.7917 8.79723 21.322 8.79723 21.9432C8.79723 22.3598 8.69117 22.7424 8.47905 23.0909C8.2745 23.4318 8.00178 23.7045 7.66087 23.9091C7.31996 24.1136 6.94117 24.2159 6.5245 24.2159Z'
                          fill='#067537'
                        />
                      </svg>
                    </div>
                  )}
                </div>
                <div
                  onClick={() => setDate(moment.tz('2024-11-13', 'YYYY-MM-D', 'Asia/Ho_Chi_Minh'))}
                  className={`${
                    moment().tz('Asia/Ho_Chi_Minh').date() == 13
                      ? 'bg-green-100'
                      : date.date() == 13
                      ? 'bg-neutral-200'
                      : moment().tz('Asia/Ho_Chi_Minh').date() >= 13 &&
                        topics.find((topic) => topic.date == '2024-12-13')
                      ? 'cursor-pointer'
                      : 'pointer-events-none [&_div]:opacity-50'
                  } flex flex-col items-center gap-1.5`}>
                  <div className='date'>13</div>
                  {topics.find((topic) => topic.date == '2024-12-13') ? (
                    <>
                      <div className='line-clamp-2 lg:line-clamp-1'>
                        {topics.find((topic) => topic.date == '2024-12-13')?.title}
                      </div>
                      <div className='w-[30px] h-[30px]'>
                        {topics.find((topic) => topic.date == '2024-12-13')?.sponser_logo ? (
                          <Image
                            alt=''
                            className='w-full aspect-square object-cover rounded-full'
                            width={30}
                            height={30}
                            src={topics.find((topic) => topic.date == '2024-12-13')?.sponser_logo}
                          />
                        ) : null}
                      </div>
                    </>
                  ) : (
                    <div className='h-full grid place-items-center '>
                      <svg width='15' height='25' viewBox='0 0 15 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M4.80859 17.3068V17.0909C4.82375 15.6818 4.9639 14.5606 5.22905 13.7273C5.50178 12.8939 5.88814 12.2197 6.38814 11.7045C6.88814 11.1894 7.49041 10.7197 8.19496 10.2955C8.6495 10.0076 9.05859 9.68561 9.42223 9.32955C9.78587 8.97348 10.0737 8.56439 10.2859 8.10227C10.498 7.64015 10.604 7.12879 10.604 6.56818C10.604 5.89394 10.445 5.31061 10.1268 4.81818C9.80859 4.32576 9.38435 3.94697 8.85405 3.68182C8.33132 3.40909 7.74799 3.27273 7.10405 3.27273C6.52072 3.27273 5.9639 3.39394 5.43359 3.63636C4.90329 3.87879 4.4639 4.25758 4.11541 4.77273C3.76693 5.2803 3.56617 5.93561 3.51314 6.73864H0.0585938C0.111624 5.375 0.456321 4.22348 1.09268 3.28409C1.72905 2.33712 2.56996 1.62121 3.61541 1.13636C4.66844 0.651514 5.83132 0.40909 7.10405 0.40909C8.49799 0.40909 9.71769 0.670454 10.7631 1.19318C11.8086 1.70833 12.6192 2.43182 13.195 3.36364C13.7783 4.28788 14.07 5.36742 14.07 6.60227C14.07 7.45076 13.9374 8.21591 13.6722 8.89773C13.4071 9.57197 13.0283 10.1742 12.5359 10.7045C12.051 11.2348 11.4677 11.7045 10.7859 12.1136C10.1419 12.5152 9.6192 12.9318 9.21768 13.3636C8.82375 13.7955 8.53587 14.3068 8.35405 14.8977C8.17223 15.4886 8.07375 16.2197 8.05859 17.0909V17.3068H4.80859ZM6.5245 24.2159C5.90329 24.2159 5.3692 23.9962 4.92223 23.5568C4.47526 23.1098 4.25178 22.572 4.25178 21.9432C4.25178 21.322 4.47526 20.7917 4.92223 20.3523C5.3692 19.9053 5.90329 19.6818 6.5245 19.6818C7.13814 19.6818 7.66844 19.9053 8.11541 20.3523C8.56996 20.7917 8.79723 21.322 8.79723 21.9432C8.79723 22.3598 8.69117 22.7424 8.47905 23.0909C8.2745 23.4318 8.00178 23.7045 7.66087 23.9091C7.31996 24.1136 6.94117 24.2159 6.5245 24.2159Z'
                          fill='#067537'
                        />
                      </svg>
                    </div>
                  )}
                </div>
                <div
                  onClick={() => setDate(moment.tz('2024-11-14', 'YYYY-MM-D', 'Asia/Ho_Chi_Minh'))}
                  className={`${
                    moment().tz('Asia/Ho_Chi_Minh').date() == 14
                      ? 'bg-green-100'
                      : date.date() == 14
                      ? 'bg-neutral-200'
                      : moment().tz('Asia/Ho_Chi_Minh').date() >= 14 &&
                        topics.find((topic) => topic.date == '2024-12-14')
                      ? 'cursor-pointer'
                      : 'pointer-events-none [&_div]:opacity-50'
                  } flex flex-col items-center gap-1.5`}>
                  <div className='date'>14</div>
                  {topics.find((topic) => topic.date == '2024-12-14') ? (
                    <>
                      <div className='line-clamp-2 lg:line-clamp-1'>
                        {topics.find((topic) => topic.date == '2024-12-14')?.title}
                      </div>
                      <div className='w-[30px] h-[30px]'>
                        {topics.find((topic) => topic.date == '2024-12-14')?.sponser_logo ? (
                          <Image
                            alt=''
                            className='w-full aspect-square object-cover rounded-full'
                            width={30}
                            height={30}
                            src={topics.find((topic) => topic.date == '2024-12-14')?.sponser_logo}
                          />
                        ) : null}
                      </div>
                    </>
                  ) : (
                    <div className='h-full grid place-items-center '>
                      <svg width='15' height='25' viewBox='0 0 15 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M4.80859 17.3068V17.0909C4.82375 15.6818 4.9639 14.5606 5.22905 13.7273C5.50178 12.8939 5.88814 12.2197 6.38814 11.7045C6.88814 11.1894 7.49041 10.7197 8.19496 10.2955C8.6495 10.0076 9.05859 9.68561 9.42223 9.32955C9.78587 8.97348 10.0737 8.56439 10.2859 8.10227C10.498 7.64015 10.604 7.12879 10.604 6.56818C10.604 5.89394 10.445 5.31061 10.1268 4.81818C9.80859 4.32576 9.38435 3.94697 8.85405 3.68182C8.33132 3.40909 7.74799 3.27273 7.10405 3.27273C6.52072 3.27273 5.9639 3.39394 5.43359 3.63636C4.90329 3.87879 4.4639 4.25758 4.11541 4.77273C3.76693 5.2803 3.56617 5.93561 3.51314 6.73864H0.0585938C0.111624 5.375 0.456321 4.22348 1.09268 3.28409C1.72905 2.33712 2.56996 1.62121 3.61541 1.13636C4.66844 0.651514 5.83132 0.40909 7.10405 0.40909C8.49799 0.40909 9.71769 0.670454 10.7631 1.19318C11.8086 1.70833 12.6192 2.43182 13.195 3.36364C13.7783 4.28788 14.07 5.36742 14.07 6.60227C14.07 7.45076 13.9374 8.21591 13.6722 8.89773C13.4071 9.57197 13.0283 10.1742 12.5359 10.7045C12.051 11.2348 11.4677 11.7045 10.7859 12.1136C10.1419 12.5152 9.6192 12.9318 9.21768 13.3636C8.82375 13.7955 8.53587 14.3068 8.35405 14.8977C8.17223 15.4886 8.07375 16.2197 8.05859 17.0909V17.3068H4.80859ZM6.5245 24.2159C5.90329 24.2159 5.3692 23.9962 4.92223 23.5568C4.47526 23.1098 4.25178 22.572 4.25178 21.9432C4.25178 21.322 4.47526 20.7917 4.92223 20.3523C5.3692 19.9053 5.90329 19.6818 6.5245 19.6818C7.13814 19.6818 7.66844 19.9053 8.11541 20.3523C8.56996 20.7917 8.79723 21.322 8.79723 21.9432C8.79723 22.3598 8.69117 22.7424 8.47905 23.0909C8.2745 23.4318 8.00178 23.7045 7.66087 23.9091C7.31996 24.1136 6.94117 24.2159 6.5245 24.2159Z'
                          fill='#067537'
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              <div className='grid grid-cols-7 items-center divide-x-[1px] text-gray-black font-medium [&>div]:h-full text-[8px] lg:text-xs [&>div:first-child>.date]:text-red-500 [&_.date]:text-sm lg:[&_.date]:text-lg [&_.date]:font-semibold [&>div]:p-3'>
                <div
                  onClick={() => setDate(moment.tz('2024-11-15', 'YYYY-MM-D', 'Asia/Ho_Chi_Minh'))}
                  className={`${
                    moment().tz('Asia/Ho_Chi_Minh').date() == 15
                      ? 'bg-green-100'
                      : date.date() == 15
                      ? 'bg-neutral-200'
                      : moment().tz('Asia/Ho_Chi_Minh').date() >= 15 &&
                        topics.find((topic) => topic.date == '2024-12-15')
                      ? 'cursor-pointer'
                      : 'pointer-events-none [&_div]:opacity-50'
                  } flex flex-col items-center gap-1.5`}>
                  <div className='date'>15</div>
                  {topics.find((topic) => topic.date == '2024-12-15') ? (
                    <>
                      <div className='line-clamp-2 lg:line-clamp-1'>
                        {topics.find((topic) => topic.date == '2024-12-15')?.title}
                      </div>
                      <div className='w-[30px] h-[30px]'>
                        {topics.find((topic) => topic.date == '2024-12-15')?.sponser_logo ? (
                          <Image
                            alt=''
                            className='w-full aspect-square object-cover rounded-full'
                            width={30}
                            height={30}
                            src={topics.find((topic) => topic.date == '2024-12-15')?.sponser_logo}
                          />
                        ) : null}
                      </div>
                    </>
                  ) : (
                    <div className='h-full grid place-items-center '>
                      <svg width='15' height='25' viewBox='0 0 15 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M4.80859 17.3068V17.0909C4.82375 15.6818 4.9639 14.5606 5.22905 13.7273C5.50178 12.8939 5.88814 12.2197 6.38814 11.7045C6.88814 11.1894 7.49041 10.7197 8.19496 10.2955C8.6495 10.0076 9.05859 9.68561 9.42223 9.32955C9.78587 8.97348 10.0737 8.56439 10.2859 8.10227C10.498 7.64015 10.604 7.12879 10.604 6.56818C10.604 5.89394 10.445 5.31061 10.1268 4.81818C9.80859 4.32576 9.38435 3.94697 8.85405 3.68182C8.33132 3.40909 7.74799 3.27273 7.10405 3.27273C6.52072 3.27273 5.9639 3.39394 5.43359 3.63636C4.90329 3.87879 4.4639 4.25758 4.11541 4.77273C3.76693 5.2803 3.56617 5.93561 3.51314 6.73864H0.0585938C0.111624 5.375 0.456321 4.22348 1.09268 3.28409C1.72905 2.33712 2.56996 1.62121 3.61541 1.13636C4.66844 0.651514 5.83132 0.40909 7.10405 0.40909C8.49799 0.40909 9.71769 0.670454 10.7631 1.19318C11.8086 1.70833 12.6192 2.43182 13.195 3.36364C13.7783 4.28788 14.07 5.36742 14.07 6.60227C14.07 7.45076 13.9374 8.21591 13.6722 8.89773C13.4071 9.57197 13.0283 10.1742 12.5359 10.7045C12.051 11.2348 11.4677 11.7045 10.7859 12.1136C10.1419 12.5152 9.6192 12.9318 9.21768 13.3636C8.82375 13.7955 8.53587 14.3068 8.35405 14.8977C8.17223 15.4886 8.07375 16.2197 8.05859 17.0909V17.3068H4.80859ZM6.5245 24.2159C5.90329 24.2159 5.3692 23.9962 4.92223 23.5568C4.47526 23.1098 4.25178 22.572 4.25178 21.9432C4.25178 21.322 4.47526 20.7917 4.92223 20.3523C5.3692 19.9053 5.90329 19.6818 6.5245 19.6818C7.13814 19.6818 7.66844 19.9053 8.11541 20.3523C8.56996 20.7917 8.79723 21.322 8.79723 21.9432C8.79723 22.3598 8.69117 22.7424 8.47905 23.0909C8.2745 23.4318 8.00178 23.7045 7.66087 23.9091C7.31996 24.1136 6.94117 24.2159 6.5245 24.2159Z'
                          fill='#067537'
                        />
                      </svg>
                    </div>
                  )}
                </div>
                <div
                  onClick={() => setDate(moment.tz('2024-11-16', 'YYYY-MM-D', 'Asia/Ho_Chi_Minh'))}
                  className={`${
                    moment().tz('Asia/Ho_Chi_Minh').date() == 16
                      ? 'bg-green-100'
                      : date.date() == 16
                      ? 'bg-neutral-200'
                      : moment().tz('Asia/Ho_Chi_Minh').date() >= 16 &&
                        topics.find((topic) => topic.date == '2024-12-16')
                      ? 'cursor-pointer'
                      : 'pointer-events-none [&_div]:opacity-50'
                  } flex flex-col items-center gap-1.5`}>
                  <div className='date'>16</div>
                  {topics.find((topic) => topic.date == '2024-12-16') ? (
                    <>
                      <div className='line-clamp-2 lg:line-clamp-1'>
                        {topics.find((topic) => topic.date == '2024-12-16')?.title}
                      </div>
                      <div className='w-[30px] h-[30px]'>
                        {topics.find((topic) => topic.date == '2024-12-16')?.sponser_logo ? (
                          <Image
                            alt=''
                            className='w-full aspect-square object-cover rounded-full'
                            width={30}
                            height={30}
                            src={topics.find((topic) => topic.date == '2024-12-16')?.sponser_logo}
                          />
                        ) : null}
                      </div>
                    </>
                  ) : (
                    <div className='h-full grid place-items-center '>
                      <svg width='15' height='25' viewBox='0 0 15 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M4.80859 17.3068V17.0909C4.82375 15.6818 4.9639 14.5606 5.22905 13.7273C5.50178 12.8939 5.88814 12.2197 6.38814 11.7045C6.88814 11.1894 7.49041 10.7197 8.19496 10.2955C8.6495 10.0076 9.05859 9.68561 9.42223 9.32955C9.78587 8.97348 10.0737 8.56439 10.2859 8.10227C10.498 7.64015 10.604 7.12879 10.604 6.56818C10.604 5.89394 10.445 5.31061 10.1268 4.81818C9.80859 4.32576 9.38435 3.94697 8.85405 3.68182C8.33132 3.40909 7.74799 3.27273 7.10405 3.27273C6.52072 3.27273 5.9639 3.39394 5.43359 3.63636C4.90329 3.87879 4.4639 4.25758 4.11541 4.77273C3.76693 5.2803 3.56617 5.93561 3.51314 6.73864H0.0585938C0.111624 5.375 0.456321 4.22348 1.09268 3.28409C1.72905 2.33712 2.56996 1.62121 3.61541 1.13636C4.66844 0.651514 5.83132 0.40909 7.10405 0.40909C8.49799 0.40909 9.71769 0.670454 10.7631 1.19318C11.8086 1.70833 12.6192 2.43182 13.195 3.36364C13.7783 4.28788 14.07 5.36742 14.07 6.60227C14.07 7.45076 13.9374 8.21591 13.6722 8.89773C13.4071 9.57197 13.0283 10.1742 12.5359 10.7045C12.051 11.2348 11.4677 11.7045 10.7859 12.1136C10.1419 12.5152 9.6192 12.9318 9.21768 13.3636C8.82375 13.7955 8.53587 14.3068 8.35405 14.8977C8.17223 15.4886 8.07375 16.2197 8.05859 17.0909V17.3068H4.80859ZM6.5245 24.2159C5.90329 24.2159 5.3692 23.9962 4.92223 23.5568C4.47526 23.1098 4.25178 22.572 4.25178 21.9432C4.25178 21.322 4.47526 20.7917 4.92223 20.3523C5.3692 19.9053 5.90329 19.6818 6.5245 19.6818C7.13814 19.6818 7.66844 19.9053 8.11541 20.3523C8.56996 20.7917 8.79723 21.322 8.79723 21.9432C8.79723 22.3598 8.69117 22.7424 8.47905 23.0909C8.2745 23.4318 8.00178 23.7045 7.66087 23.9091C7.31996 24.1136 6.94117 24.2159 6.5245 24.2159Z'
                          fill='#067537'
                        />
                      </svg>
                    </div>
                  )}
                </div>
                <div
                  onClick={() => setDate(moment.tz('2024-11-17', 'YYYY-MM-D', 'Asia/Ho_Chi_Minh'))}
                  className={`${
                    moment().tz('Asia/Ho_Chi_Minh').date() == 17
                      ? 'bg-green-100'
                      : date.date() == 17
                      ? 'bg-neutral-200'
                      : moment().tz('Asia/Ho_Chi_Minh').date() >= 17 &&
                        topics.find((topic) => topic.date == '2024-12-17')
                      ? 'cursor-pointer'
                      : 'pointer-events-none [&_div]:opacity-50'
                  } flex flex-col items-center gap-1.5`}>
                  <div className='date'>17</div>
                  {topics.find((topic) => topic.date == '2024-12-17') ? (
                    <>
                      <div className='line-clamp-2 lg:line-clamp-1'>
                        {topics.find((topic) => topic.date == '2024-12-17')?.title}
                      </div>
                      <div className='w-[30px] h-[30px]'>
                        {topics.find((topic) => topic.date == '2024-12-17')?.sponser_logo ? (
                          <Image
                            alt=''
                            className='w-full aspect-square object-cover rounded-full'
                            width={30}
                            height={30}
                            src={topics.find((topic) => topic.date == '2024-12-17')?.sponser_logo}
                          />
                        ) : null}
                      </div>
                    </>
                  ) : (
                    <div className='h-full grid place-items-center '>
                      <svg width='15' height='25' viewBox='0 0 15 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M4.80859 17.3068V17.0909C4.82375 15.6818 4.9639 14.5606 5.22905 13.7273C5.50178 12.8939 5.88814 12.2197 6.38814 11.7045C6.88814 11.1894 7.49041 10.7197 8.19496 10.2955C8.6495 10.0076 9.05859 9.68561 9.42223 9.32955C9.78587 8.97348 10.0737 8.56439 10.2859 8.10227C10.498 7.64015 10.604 7.12879 10.604 6.56818C10.604 5.89394 10.445 5.31061 10.1268 4.81818C9.80859 4.32576 9.38435 3.94697 8.85405 3.68182C8.33132 3.40909 7.74799 3.27273 7.10405 3.27273C6.52072 3.27273 5.9639 3.39394 5.43359 3.63636C4.90329 3.87879 4.4639 4.25758 4.11541 4.77273C3.76693 5.2803 3.56617 5.93561 3.51314 6.73864H0.0585938C0.111624 5.375 0.456321 4.22348 1.09268 3.28409C1.72905 2.33712 2.56996 1.62121 3.61541 1.13636C4.66844 0.651514 5.83132 0.40909 7.10405 0.40909C8.49799 0.40909 9.71769 0.670454 10.7631 1.19318C11.8086 1.70833 12.6192 2.43182 13.195 3.36364C13.7783 4.28788 14.07 5.36742 14.07 6.60227C14.07 7.45076 13.9374 8.21591 13.6722 8.89773C13.4071 9.57197 13.0283 10.1742 12.5359 10.7045C12.051 11.2348 11.4677 11.7045 10.7859 12.1136C10.1419 12.5152 9.6192 12.9318 9.21768 13.3636C8.82375 13.7955 8.53587 14.3068 8.35405 14.8977C8.17223 15.4886 8.07375 16.2197 8.05859 17.0909V17.3068H4.80859ZM6.5245 24.2159C5.90329 24.2159 5.3692 23.9962 4.92223 23.5568C4.47526 23.1098 4.25178 22.572 4.25178 21.9432C4.25178 21.322 4.47526 20.7917 4.92223 20.3523C5.3692 19.9053 5.90329 19.6818 6.5245 19.6818C7.13814 19.6818 7.66844 19.9053 8.11541 20.3523C8.56996 20.7917 8.79723 21.322 8.79723 21.9432C8.79723 22.3598 8.69117 22.7424 8.47905 23.0909C8.2745 23.4318 8.00178 23.7045 7.66087 23.9091C7.31996 24.1136 6.94117 24.2159 6.5245 24.2159Z'
                          fill='#067537'
                        />
                      </svg>
                    </div>
                  )}
                </div>
                <div
                  onClick={() => setDate(moment.tz('2024-11-18', 'YYYY-MM-D', 'Asia/Ho_Chi_Minh'))}
                  className={`${
                    moment().tz('Asia/Ho_Chi_Minh').date() == 18
                      ? 'bg-green-100'
                      : date.date() == 18
                      ? 'bg-neutral-200'
                      : moment().tz('Asia/Ho_Chi_Minh').date() >= 18 &&
                        topics.find((topic) => topic.date == '2024-12-18')
                      ? 'cursor-pointer'
                      : 'pointer-events-none [&_div]:opacity-50'
                  } flex flex-col items-center gap-1.5`}>
                  <div className='date'>18</div>
                  {topics.find((topic) => topic.date == '2024-12-18') ? (
                    <>
                      <div className='line-clamp-2 lg:line-clamp-1'>
                        {topics.find((topic) => topic.date == '2024-12-18')?.title}
                      </div>
                      <div className='w-[30px] h-[30px]'>
                        {topics.find((topic) => topic.date == '2024-12-18')?.sponser_logo ? (
                          <Image
                            alt=''
                            className='w-full aspect-square object-cover rounded-full'
                            width={30}
                            height={30}
                            src={topics.find((topic) => topic.date == '2024-12-18')?.sponser_logo}
                          />
                        ) : null}
                      </div>
                    </>
                  ) : (
                    <div className='h-full grid place-items-center '>
                      <svg width='15' height='25' viewBox='0 0 15 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M4.80859 17.3068V17.0909C4.82375 15.6818 4.9639 14.5606 5.22905 13.7273C5.50178 12.8939 5.88814 12.2197 6.38814 11.7045C6.88814 11.1894 7.49041 10.7197 8.19496 10.2955C8.6495 10.0076 9.05859 9.68561 9.42223 9.32955C9.78587 8.97348 10.0737 8.56439 10.2859 8.10227C10.498 7.64015 10.604 7.12879 10.604 6.56818C10.604 5.89394 10.445 5.31061 10.1268 4.81818C9.80859 4.32576 9.38435 3.94697 8.85405 3.68182C8.33132 3.40909 7.74799 3.27273 7.10405 3.27273C6.52072 3.27273 5.9639 3.39394 5.43359 3.63636C4.90329 3.87879 4.4639 4.25758 4.11541 4.77273C3.76693 5.2803 3.56617 5.93561 3.51314 6.73864H0.0585938C0.111624 5.375 0.456321 4.22348 1.09268 3.28409C1.72905 2.33712 2.56996 1.62121 3.61541 1.13636C4.66844 0.651514 5.83132 0.40909 7.10405 0.40909C8.49799 0.40909 9.71769 0.670454 10.7631 1.19318C11.8086 1.70833 12.6192 2.43182 13.195 3.36364C13.7783 4.28788 14.07 5.36742 14.07 6.60227C14.07 7.45076 13.9374 8.21591 13.6722 8.89773C13.4071 9.57197 13.0283 10.1742 12.5359 10.7045C12.051 11.2348 11.4677 11.7045 10.7859 12.1136C10.1419 12.5152 9.6192 12.9318 9.21768 13.3636C8.82375 13.7955 8.53587 14.3068 8.35405 14.8977C8.17223 15.4886 8.07375 16.2197 8.05859 17.0909V17.3068H4.80859ZM6.5245 24.2159C5.90329 24.2159 5.3692 23.9962 4.92223 23.5568C4.47526 23.1098 4.25178 22.572 4.25178 21.9432C4.25178 21.322 4.47526 20.7917 4.92223 20.3523C5.3692 19.9053 5.90329 19.6818 6.5245 19.6818C7.13814 19.6818 7.66844 19.9053 8.11541 20.3523C8.56996 20.7917 8.79723 21.322 8.79723 21.9432C8.79723 22.3598 8.69117 22.7424 8.47905 23.0909C8.2745 23.4318 8.00178 23.7045 7.66087 23.9091C7.31996 24.1136 6.94117 24.2159 6.5245 24.2159Z'
                          fill='#067537'
                        />
                      </svg>
                    </div>
                  )}
                </div>
                <div
                  onClick={() => setDate(moment.tz('2024-11-19', 'YYYY-MM-D', 'Asia/Ho_Chi_Minh'))}
                  className={`${
                    moment().tz('Asia/Ho_Chi_Minh').date() == 19
                      ? 'bg-green-100'
                      : date.date() == 19
                      ? 'bg-neutral-200'
                      : moment().tz('Asia/Ho_Chi_Minh').date() >= 19 &&
                        topics.find((topic) => topic.date == '2024-12-19')
                      ? 'cursor-pointer'
                      : 'pointer-events-none [&_div]:opacity-50'
                  } flex flex-col items-center gap-1.5`}>
                  <div className='date'>19</div>
                  {topics.find((topic) => topic.date == '2024-12-19') ? (
                    <>
                      <div className='line-clamp-2 lg:line-clamp-1'>
                        {topics.find((topic) => topic.date == '2024-12-19')?.title}
                      </div>
                      <div className='w-[30px] h-[30px]'>
                        {topics.find((topic) => topic.date == '2024-12-19')?.sponser_logo ? (
                          <Image
                            alt=''
                            className='w-full aspect-square object-cover rounded-full'
                            width={30}
                            height={30}
                            src={topics.find((topic) => topic.date == '2024-12-19')?.sponser_logo}
                          />
                        ) : null}
                      </div>
                    </>
                  ) : (
                    <div className='h-full grid place-items-center '>
                      <svg width='15' height='25' viewBox='0 0 15 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M4.80859 17.3068V17.0909C4.82375 15.6818 4.9639 14.5606 5.22905 13.7273C5.50178 12.8939 5.88814 12.2197 6.38814 11.7045C6.88814 11.1894 7.49041 10.7197 8.19496 10.2955C8.6495 10.0076 9.05859 9.68561 9.42223 9.32955C9.78587 8.97348 10.0737 8.56439 10.2859 8.10227C10.498 7.64015 10.604 7.12879 10.604 6.56818C10.604 5.89394 10.445 5.31061 10.1268 4.81818C9.80859 4.32576 9.38435 3.94697 8.85405 3.68182C8.33132 3.40909 7.74799 3.27273 7.10405 3.27273C6.52072 3.27273 5.9639 3.39394 5.43359 3.63636C4.90329 3.87879 4.4639 4.25758 4.11541 4.77273C3.76693 5.2803 3.56617 5.93561 3.51314 6.73864H0.0585938C0.111624 5.375 0.456321 4.22348 1.09268 3.28409C1.72905 2.33712 2.56996 1.62121 3.61541 1.13636C4.66844 0.651514 5.83132 0.40909 7.10405 0.40909C8.49799 0.40909 9.71769 0.670454 10.7631 1.19318C11.8086 1.70833 12.6192 2.43182 13.195 3.36364C13.7783 4.28788 14.07 5.36742 14.07 6.60227C14.07 7.45076 13.9374 8.21591 13.6722 8.89773C13.4071 9.57197 13.0283 10.1742 12.5359 10.7045C12.051 11.2348 11.4677 11.7045 10.7859 12.1136C10.1419 12.5152 9.6192 12.9318 9.21768 13.3636C8.82375 13.7955 8.53587 14.3068 8.35405 14.8977C8.17223 15.4886 8.07375 16.2197 8.05859 17.0909V17.3068H4.80859ZM6.5245 24.2159C5.90329 24.2159 5.3692 23.9962 4.92223 23.5568C4.47526 23.1098 4.25178 22.572 4.25178 21.9432C4.25178 21.322 4.47526 20.7917 4.92223 20.3523C5.3692 19.9053 5.90329 19.6818 6.5245 19.6818C7.13814 19.6818 7.66844 19.9053 8.11541 20.3523C8.56996 20.7917 8.79723 21.322 8.79723 21.9432C8.79723 22.3598 8.69117 22.7424 8.47905 23.0909C8.2745 23.4318 8.00178 23.7045 7.66087 23.9091C7.31996 24.1136 6.94117 24.2159 6.5245 24.2159Z'
                          fill='#067537'
                        />
                      </svg>
                    </div>
                  )}
                </div>
                <div
                  onClick={() => setDate(moment.tz('2024-11-20', 'YYYY-MM-D', 'Asia/Ho_Chi_Minh'))}
                  className={`${
                    moment().tz('Asia/Ho_Chi_Minh').date() == 20
                      ? 'bg-green-100'
                      : date.date() == 20
                      ? 'bg-neutral-200'
                      : moment().tz('Asia/Ho_Chi_Minh').date() >= 20 &&
                        topics.find((topic) => topic.date == '2024-12-20')
                      ? 'cursor-pointer'
                      : 'pointer-events-none [&_div]:opacity-50'
                  } flex flex-col items-center gap-1.5`}>
                  <div className='date'>20</div>
                  {topics.find((topic) => topic.date == '2024-12-20') ? (
                    <>
                      <div className='line-clamp-2 lg:line-clamp-1'>
                        {topics.find((topic) => topic.date == '2024-12-20')?.title}
                      </div>
                      <div className='w-[30px] h-[30px]'>
                        {topics.find((topic) => topic.date == '2024-12-20')?.sponser_logo ? (
                          <Image
                            alt=''
                            className='w-full aspect-square object-cover rounded-full'
                            width={30}
                            height={30}
                            src={topics.find((topic) => topic.date == '2024-12-20')?.sponser_logo}
                          />
                        ) : null}
                      </div>
                    </>
                  ) : (
                    <div className='h-full grid place-items-center '>
                      <svg width='15' height='25' viewBox='0 0 15 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M4.80859 17.3068V17.0909C4.82375 15.6818 4.9639 14.5606 5.22905 13.7273C5.50178 12.8939 5.88814 12.2197 6.38814 11.7045C6.88814 11.1894 7.49041 10.7197 8.19496 10.2955C8.6495 10.0076 9.05859 9.68561 9.42223 9.32955C9.78587 8.97348 10.0737 8.56439 10.2859 8.10227C10.498 7.64015 10.604 7.12879 10.604 6.56818C10.604 5.89394 10.445 5.31061 10.1268 4.81818C9.80859 4.32576 9.38435 3.94697 8.85405 3.68182C8.33132 3.40909 7.74799 3.27273 7.10405 3.27273C6.52072 3.27273 5.9639 3.39394 5.43359 3.63636C4.90329 3.87879 4.4639 4.25758 4.11541 4.77273C3.76693 5.2803 3.56617 5.93561 3.51314 6.73864H0.0585938C0.111624 5.375 0.456321 4.22348 1.09268 3.28409C1.72905 2.33712 2.56996 1.62121 3.61541 1.13636C4.66844 0.651514 5.83132 0.40909 7.10405 0.40909C8.49799 0.40909 9.71769 0.670454 10.7631 1.19318C11.8086 1.70833 12.6192 2.43182 13.195 3.36364C13.7783 4.28788 14.07 5.36742 14.07 6.60227C14.07 7.45076 13.9374 8.21591 13.6722 8.89773C13.4071 9.57197 13.0283 10.1742 12.5359 10.7045C12.051 11.2348 11.4677 11.7045 10.7859 12.1136C10.1419 12.5152 9.6192 12.9318 9.21768 13.3636C8.82375 13.7955 8.53587 14.3068 8.35405 14.8977C8.17223 15.4886 8.07375 16.2197 8.05859 17.0909V17.3068H4.80859ZM6.5245 24.2159C5.90329 24.2159 5.3692 23.9962 4.92223 23.5568C4.47526 23.1098 4.25178 22.572 4.25178 21.9432C4.25178 21.322 4.47526 20.7917 4.92223 20.3523C5.3692 19.9053 5.90329 19.6818 6.5245 19.6818C7.13814 19.6818 7.66844 19.9053 8.11541 20.3523C8.56996 20.7917 8.79723 21.322 8.79723 21.9432C8.79723 22.3598 8.69117 22.7424 8.47905 23.0909C8.2745 23.4318 8.00178 23.7045 7.66087 23.9091C7.31996 24.1136 6.94117 24.2159 6.5245 24.2159Z'
                          fill='#067537'
                        />
                      </svg>
                    </div>
                  )}
                </div>
                <div
                  onClick={() => setDate(moment.tz('2024-11-21', 'YYYY-MM-D', 'Asia/Ho_Chi_Minh'))}
                  className={`${
                    moment().tz('Asia/Ho_Chi_Minh').date() == 21
                      ? 'bg-green-100'
                      : date.date() == 21
                      ? 'bg-neutral-200'
                      : moment().tz('Asia/Ho_Chi_Minh').date() >= 21 &&
                        topics.find((topic) => topic.date == '2024-12-21')
                      ? 'cursor-pointer'
                      : 'pointer-events-none [&_div]:opacity-50'
                  } flex flex-col items-center gap-1.5`}>
                  <div className='date'>21</div>
                  {topics.find((topic) => topic.date == '2024-12-21') ? (
                    <>
                      <div className='line-clamp-2 lg:line-clamp-1'>
                        {topics.find((topic) => topic.date == '2024-12-21')?.title}
                      </div>
                      <div className='w-[30px] h-[30px]'>
                        {topics.find((topic) => topic.date == '2024-12-21')?.sponser_logo ? (
                          <Image
                            alt=''
                            className='w-full aspect-square object-cover rounded-full'
                            width={30}
                            height={30}
                            src={topics.find((topic) => topic.date == '2024-12-21')?.sponser_logo}
                          />
                        ) : null}
                      </div>
                    </>
                  ) : (
                    <div className='h-full grid place-items-center '>
                      <svg width='15' height='25' viewBox='0 0 15 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M4.80859 17.3068V17.0909C4.82375 15.6818 4.9639 14.5606 5.22905 13.7273C5.50178 12.8939 5.88814 12.2197 6.38814 11.7045C6.88814 11.1894 7.49041 10.7197 8.19496 10.2955C8.6495 10.0076 9.05859 9.68561 9.42223 9.32955C9.78587 8.97348 10.0737 8.56439 10.2859 8.10227C10.498 7.64015 10.604 7.12879 10.604 6.56818C10.604 5.89394 10.445 5.31061 10.1268 4.81818C9.80859 4.32576 9.38435 3.94697 8.85405 3.68182C8.33132 3.40909 7.74799 3.27273 7.10405 3.27273C6.52072 3.27273 5.9639 3.39394 5.43359 3.63636C4.90329 3.87879 4.4639 4.25758 4.11541 4.77273C3.76693 5.2803 3.56617 5.93561 3.51314 6.73864H0.0585938C0.111624 5.375 0.456321 4.22348 1.09268 3.28409C1.72905 2.33712 2.56996 1.62121 3.61541 1.13636C4.66844 0.651514 5.83132 0.40909 7.10405 0.40909C8.49799 0.40909 9.71769 0.670454 10.7631 1.19318C11.8086 1.70833 12.6192 2.43182 13.195 3.36364C13.7783 4.28788 14.07 5.36742 14.07 6.60227C14.07 7.45076 13.9374 8.21591 13.6722 8.89773C13.4071 9.57197 13.0283 10.1742 12.5359 10.7045C12.051 11.2348 11.4677 11.7045 10.7859 12.1136C10.1419 12.5152 9.6192 12.9318 9.21768 13.3636C8.82375 13.7955 8.53587 14.3068 8.35405 14.8977C8.17223 15.4886 8.07375 16.2197 8.05859 17.0909V17.3068H4.80859ZM6.5245 24.2159C5.90329 24.2159 5.3692 23.9962 4.92223 23.5568C4.47526 23.1098 4.25178 22.572 4.25178 21.9432C4.25178 21.322 4.47526 20.7917 4.92223 20.3523C5.3692 19.9053 5.90329 19.6818 6.5245 19.6818C7.13814 19.6818 7.66844 19.9053 8.11541 20.3523C8.56996 20.7917 8.79723 21.322 8.79723 21.9432C8.79723 22.3598 8.69117 22.7424 8.47905 23.0909C8.2745 23.4318 8.00178 23.7045 7.66087 23.9091C7.31996 24.1136 6.94117 24.2159 6.5245 24.2159Z'
                          fill='#067537'
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              <div className='grid grid-cols-7 items-center divide-x-[1px] text-gray-black font-medium [&>div]:h-full text-[8px] lg:text-xs [&>div:first-child>.date]:text-red-500 [&_.date]:text-sm lg:[&_.date]:text-lg [&_.date]:font-semibold [&>div]:p-3'>
                <div
                  onClick={() => setDate(moment.tz('2024-11-22', 'YYYY-MM-D', 'Asia/Ho_Chi_Minh'))}
                  className={`${
                    moment().tz('Asia/Ho_Chi_Minh').date() == 22
                      ? 'bg-green-100'
                      : date.date() == 22
                      ? 'bg-neutral-200'
                      : moment().tz('Asia/Ho_Chi_Minh').date() >= 22 &&
                        topics.find((topic) => topic.date == '2024-12-22')
                      ? 'cursor-pointer'
                      : 'pointer-events-none [&_div]:opacity-50'
                  } flex flex-col items-center gap-1.5`}>
                  <div className='date'>22</div>
                  {topics.find((topic) => topic.date == '2024-12-22') ? (
                    <>
                      <div className='line-clamp-2 lg:line-clamp-1'>
                        {topics.find((topic) => topic.date == '2024-12-22')?.title}
                      </div>
                      <div className='w-[30px] h-[30px]'>
                        {topics.find((topic) => topic.date == '2024-12-22')?.sponser_logo ? (
                          <Image
                            alt=''
                            className='w-full aspect-square object-cover rounded-full'
                            width={30}
                            height={30}
                            src={topics.find((topic) => topic.date == '2024-12-22')?.sponser_logo}
                          />
                        ) : null}
                      </div>
                    </>
                  ) : (
                    <div className='h-full grid place-items-center '>
                      <svg width='15' height='25' viewBox='0 0 15 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M4.80859 17.3068V17.0909C4.82375 15.6818 4.9639 14.5606 5.22905 13.7273C5.50178 12.8939 5.88814 12.2197 6.38814 11.7045C6.88814 11.1894 7.49041 10.7197 8.19496 10.2955C8.6495 10.0076 9.05859 9.68561 9.42223 9.32955C9.78587 8.97348 10.0737 8.56439 10.2859 8.10227C10.498 7.64015 10.604 7.12879 10.604 6.56818C10.604 5.89394 10.445 5.31061 10.1268 4.81818C9.80859 4.32576 9.38435 3.94697 8.85405 3.68182C8.33132 3.40909 7.74799 3.27273 7.10405 3.27273C6.52072 3.27273 5.9639 3.39394 5.43359 3.63636C4.90329 3.87879 4.4639 4.25758 4.11541 4.77273C3.76693 5.2803 3.56617 5.93561 3.51314 6.73864H0.0585938C0.111624 5.375 0.456321 4.22348 1.09268 3.28409C1.72905 2.33712 2.56996 1.62121 3.61541 1.13636C4.66844 0.651514 5.83132 0.40909 7.10405 0.40909C8.49799 0.40909 9.71769 0.670454 10.7631 1.19318C11.8086 1.70833 12.6192 2.43182 13.195 3.36364C13.7783 4.28788 14.07 5.36742 14.07 6.60227C14.07 7.45076 13.9374 8.21591 13.6722 8.89773C13.4071 9.57197 13.0283 10.1742 12.5359 10.7045C12.051 11.2348 11.4677 11.7045 10.7859 12.1136C10.1419 12.5152 9.6192 12.9318 9.21768 13.3636C8.82375 13.7955 8.53587 14.3068 8.35405 14.8977C8.17223 15.4886 8.07375 16.2197 8.05859 17.0909V17.3068H4.80859ZM6.5245 24.2159C5.90329 24.2159 5.3692 23.9962 4.92223 23.5568C4.47526 23.1098 4.25178 22.572 4.25178 21.9432C4.25178 21.322 4.47526 20.7917 4.92223 20.3523C5.3692 19.9053 5.90329 19.6818 6.5245 19.6818C7.13814 19.6818 7.66844 19.9053 8.11541 20.3523C8.56996 20.7917 8.79723 21.322 8.79723 21.9432C8.79723 22.3598 8.69117 22.7424 8.47905 23.0909C8.2745 23.4318 8.00178 23.7045 7.66087 23.9091C7.31996 24.1136 6.94117 24.2159 6.5245 24.2159Z'
                          fill='#067537'
                        />
                      </svg>
                    </div>
                  )}
                </div>
                <div
                  onClick={() => setDate(moment.tz('2024-11-23', 'YYYY-MM-D', 'Asia/Ho_Chi_Minh'))}
                  className={`${
                    moment().tz('Asia/Ho_Chi_Minh').date() == 23
                      ? 'bg-green-100'
                      : date.date() == 23
                      ? 'bg-neutral-200'
                      : moment().tz('Asia/Ho_Chi_Minh').date() >= 23 &&
                        topics.find((topic) => topic.date == '2024-12-23')
                      ? 'cursor-pointer'
                      : 'pointer-events-none [&_div]:opacity-50'
                  } flex flex-col items-center gap-1.5`}>
                  <div className='date'>23</div>
                  {topics.find((topic) => topic.date == '2024-12-23') ? (
                    <>
                      <div className='line-clamp-2 lg:line-clamp-1'>
                        {topics.find((topic) => topic.date == '2024-12-23')?.title}
                      </div>
                      <div className='w-[30px] h-[30px]'>
                        {topics.find((topic) => topic.date == '2024-12-23')?.sponser_logo ? (
                          <Image
                            alt=''
                            className='w-full aspect-square object-cover rounded-full'
                            width={30}
                            height={30}
                            src={topics.find((topic) => topic.date == '2024-12-23')?.sponser_logo}
                          />
                        ) : null}
                      </div>
                    </>
                  ) : (
                    <div className='h-full grid place-items-center '>
                      <svg width='15' height='25' viewBox='0 0 15 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M4.80859 17.3068V17.0909C4.82375 15.6818 4.9639 14.5606 5.22905 13.7273C5.50178 12.8939 5.88814 12.2197 6.38814 11.7045C6.88814 11.1894 7.49041 10.7197 8.19496 10.2955C8.6495 10.0076 9.05859 9.68561 9.42223 9.32955C9.78587 8.97348 10.0737 8.56439 10.2859 8.10227C10.498 7.64015 10.604 7.12879 10.604 6.56818C10.604 5.89394 10.445 5.31061 10.1268 4.81818C9.80859 4.32576 9.38435 3.94697 8.85405 3.68182C8.33132 3.40909 7.74799 3.27273 7.10405 3.27273C6.52072 3.27273 5.9639 3.39394 5.43359 3.63636C4.90329 3.87879 4.4639 4.25758 4.11541 4.77273C3.76693 5.2803 3.56617 5.93561 3.51314 6.73864H0.0585938C0.111624 5.375 0.456321 4.22348 1.09268 3.28409C1.72905 2.33712 2.56996 1.62121 3.61541 1.13636C4.66844 0.651514 5.83132 0.40909 7.10405 0.40909C8.49799 0.40909 9.71769 0.670454 10.7631 1.19318C11.8086 1.70833 12.6192 2.43182 13.195 3.36364C13.7783 4.28788 14.07 5.36742 14.07 6.60227C14.07 7.45076 13.9374 8.21591 13.6722 8.89773C13.4071 9.57197 13.0283 10.1742 12.5359 10.7045C12.051 11.2348 11.4677 11.7045 10.7859 12.1136C10.1419 12.5152 9.6192 12.9318 9.21768 13.3636C8.82375 13.7955 8.53587 14.3068 8.35405 14.8977C8.17223 15.4886 8.07375 16.2197 8.05859 17.0909V17.3068H4.80859ZM6.5245 24.2159C5.90329 24.2159 5.3692 23.9962 4.92223 23.5568C4.47526 23.1098 4.25178 22.572 4.25178 21.9432C4.25178 21.322 4.47526 20.7917 4.92223 20.3523C5.3692 19.9053 5.90329 19.6818 6.5245 19.6818C7.13814 19.6818 7.66844 19.9053 8.11541 20.3523C8.56996 20.7917 8.79723 21.322 8.79723 21.9432C8.79723 22.3598 8.69117 22.7424 8.47905 23.0909C8.2745 23.4318 8.00178 23.7045 7.66087 23.9091C7.31996 24.1136 6.94117 24.2159 6.5245 24.2159Z'
                          fill='#067537'
                        />
                      </svg>
                    </div>
                  )}
                </div>
                <div
                  onClick={() => setDate(moment.tz('2024-11-24', 'YYYY-MM-D', 'Asia/Ho_Chi_Minh'))}
                  className={`${
                    moment().tz('Asia/Ho_Chi_Minh').date() == 24
                      ? 'bg-green-100'
                      : date.date() == 24
                      ? 'bg-neutral-200'
                      : moment().tz('Asia/Ho_Chi_Minh').date() >= 24 &&
                        topics.find((topic) => topic.date == '2024-12-24')
                      ? 'cursor-pointer'
                      : 'pointer-events-none [&_div]:opacity-50'
                  } flex flex-col items-center gap-1.5 relative`}>
                  <Image src={O1} alt='' className='absolute right-0 top-0 -translate-y-1/2 w-1/2 lg:w-auto' />
                  <div className='date'>24</div>
                  {topics.find((topic) => topic.date == '2024-12-24') ? (
                    <>
                      <div className='line-clamp-2 lg:line-clamp-1'>
                        {topics.find((topic) => topic.date == '2024-12-24')?.title}
                      </div>
                      <div className='w-[30px] h-[30px]'>
                        {topics.find((topic) => topic.date == '2024-12-24')?.sponser_logo ? (
                          <Image
                            alt=''
                            className='w-full aspect-square object-cover rounded-full'
                            width={30}
                            height={30}
                            src={topics.find((topic) => topic.date == '2024-12-24')?.sponser_logo}
                          />
                        ) : null}
                      </div>
                    </>
                  ) : (
                    <div className='h-full grid place-items-center '>
                      <svg width='15' height='25' viewBox='0 0 15 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M4.80859 17.3068V17.0909C4.82375 15.6818 4.9639 14.5606 5.22905 13.7273C5.50178 12.8939 5.88814 12.2197 6.38814 11.7045C6.88814 11.1894 7.49041 10.7197 8.19496 10.2955C8.6495 10.0076 9.05859 9.68561 9.42223 9.32955C9.78587 8.97348 10.0737 8.56439 10.2859 8.10227C10.498 7.64015 10.604 7.12879 10.604 6.56818C10.604 5.89394 10.445 5.31061 10.1268 4.81818C9.80859 4.32576 9.38435 3.94697 8.85405 3.68182C8.33132 3.40909 7.74799 3.27273 7.10405 3.27273C6.52072 3.27273 5.9639 3.39394 5.43359 3.63636C4.90329 3.87879 4.4639 4.25758 4.11541 4.77273C3.76693 5.2803 3.56617 5.93561 3.51314 6.73864H0.0585938C0.111624 5.375 0.456321 4.22348 1.09268 3.28409C1.72905 2.33712 2.56996 1.62121 3.61541 1.13636C4.66844 0.651514 5.83132 0.40909 7.10405 0.40909C8.49799 0.40909 9.71769 0.670454 10.7631 1.19318C11.8086 1.70833 12.6192 2.43182 13.195 3.36364C13.7783 4.28788 14.07 5.36742 14.07 6.60227C14.07 7.45076 13.9374 8.21591 13.6722 8.89773C13.4071 9.57197 13.0283 10.1742 12.5359 10.7045C12.051 11.2348 11.4677 11.7045 10.7859 12.1136C10.1419 12.5152 9.6192 12.9318 9.21768 13.3636C8.82375 13.7955 8.53587 14.3068 8.35405 14.8977C8.17223 15.4886 8.07375 16.2197 8.05859 17.0909V17.3068H4.80859ZM6.5245 24.2159C5.90329 24.2159 5.3692 23.9962 4.92223 23.5568C4.47526 23.1098 4.25178 22.572 4.25178 21.9432C4.25178 21.322 4.47526 20.7917 4.92223 20.3523C5.3692 19.9053 5.90329 19.6818 6.5245 19.6818C7.13814 19.6818 7.66844 19.9053 8.11541 20.3523C8.56996 20.7917 8.79723 21.322 8.79723 21.9432C8.79723 22.3598 8.69117 22.7424 8.47905 23.0909C8.2745 23.4318 8.00178 23.7045 7.66087 23.9091C7.31996 24.1136 6.94117 24.2159 6.5245 24.2159Z'
                          fill='#067537'
                        />
                      </svg>
                    </div>
                  )}
                </div>
                <div
                  onClick={() => setDate(moment.tz('2024-11-25', 'YYYY-MM-D', 'Asia/Ho_Chi_Minh'))}
                  className={`${
                    moment().tz('Asia/Ho_Chi_Minh').date() == 25
                      ? 'bg-green-100'
                      : date.date() == 25
                      ? 'bg-neutral-200'
                      : moment().tz('Asia/Ho_Chi_Minh').date() >= 25 &&
                        topics.find((topic) => topic.date == '2024-12-25')
                      ? 'cursor-pointer'
                      : 'pointer-events-none [&_div]:opacity-50'
                  } flex flex-col items-center gap-1.5 relative`}>
                  <Image src={O2} alt='' className='absolute right-0 top-0 -translate-y-1/2 w-1/2 lg:w-auto' />

                  <div className='date'>25</div>
                  {topics.find((topic) => topic.date == '2024-12-25') ? (
                    <>
                      <div className='line-clamp-2 lg:line-clamp-1'>
                        {topics.find((topic) => topic.date == '2024-12-25')?.title}
                      </div>
                      <div className='w-[30px] h-[30px]'>
                        {topics.find((topic) => topic.date == '2024-12-25')?.sponser_logo ? (
                          <Image
                            alt=''
                            className='w-full aspect-square object-cover rounded-full'
                            width={30}
                            height={30}
                            src={topics.find((topic) => topic.date == '2024-12-25')?.sponser_logo}
                          />
                        ) : null}
                      </div>
                    </>
                  ) : (
                    <div className='h-full grid place-items-center '>
                      <svg width='15' height='25' viewBox='0 0 15 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M4.80859 17.3068V17.0909C4.82375 15.6818 4.9639 14.5606 5.22905 13.7273C5.50178 12.8939 5.88814 12.2197 6.38814 11.7045C6.88814 11.1894 7.49041 10.7197 8.19496 10.2955C8.6495 10.0076 9.05859 9.68561 9.42223 9.32955C9.78587 8.97348 10.0737 8.56439 10.2859 8.10227C10.498 7.64015 10.604 7.12879 10.604 6.56818C10.604 5.89394 10.445 5.31061 10.1268 4.81818C9.80859 4.32576 9.38435 3.94697 8.85405 3.68182C8.33132 3.40909 7.74799 3.27273 7.10405 3.27273C6.52072 3.27273 5.9639 3.39394 5.43359 3.63636C4.90329 3.87879 4.4639 4.25758 4.11541 4.77273C3.76693 5.2803 3.56617 5.93561 3.51314 6.73864H0.0585938C0.111624 5.375 0.456321 4.22348 1.09268 3.28409C1.72905 2.33712 2.56996 1.62121 3.61541 1.13636C4.66844 0.651514 5.83132 0.40909 7.10405 0.40909C8.49799 0.40909 9.71769 0.670454 10.7631 1.19318C11.8086 1.70833 12.6192 2.43182 13.195 3.36364C13.7783 4.28788 14.07 5.36742 14.07 6.60227C14.07 7.45076 13.9374 8.21591 13.6722 8.89773C13.4071 9.57197 13.0283 10.1742 12.5359 10.7045C12.051 11.2348 11.4677 11.7045 10.7859 12.1136C10.1419 12.5152 9.6192 12.9318 9.21768 13.3636C8.82375 13.7955 8.53587 14.3068 8.35405 14.8977C8.17223 15.4886 8.07375 16.2197 8.05859 17.0909V17.3068H4.80859ZM6.5245 24.2159C5.90329 24.2159 5.3692 23.9962 4.92223 23.5568C4.47526 23.1098 4.25178 22.572 4.25178 21.9432C4.25178 21.322 4.47526 20.7917 4.92223 20.3523C5.3692 19.9053 5.90329 19.6818 6.5245 19.6818C7.13814 19.6818 7.66844 19.9053 8.11541 20.3523C8.56996 20.7917 8.79723 21.322 8.79723 21.9432C8.79723 22.3598 8.69117 22.7424 8.47905 23.0909C8.2745 23.4318 8.00178 23.7045 7.66087 23.9091C7.31996 24.1136 6.94117 24.2159 6.5245 24.2159Z'
                          fill='#067537'
                        />
                      </svg>
                    </div>
                  )}
                </div>
                <div
                  onClick={() => setDate(moment.tz('2024-11-26', 'YYYY-MM-D', 'Asia/Ho_Chi_Minh'))}
                  className={`${
                    moment().tz('Asia/Ho_Chi_Minh').date() == 26
                      ? 'bg-green-100'
                      : date.date() == 26
                      ? 'bg-neutral-200'
                      : moment().tz('Asia/Ho_Chi_Minh').date() >= 26 &&
                        topics.find((topic) => topic.date == '2024-12-26')
                      ? 'cursor-pointer'
                      : 'pointer-events-none [&_div]:opacity-50'
                  } flex flex-col items-center gap-1.5 relative`}>
                  <div className='date'>26</div>
                  {topics.find((topic) => topic.date == '2024-12-26') ? (
                    <>
                      <div className='line-clamp-2 lg:line-clamp-1'>
                        {topics.find((topic) => topic.date == '2024-12-26')?.title}
                      </div>
                      <div className='w-[30px] h-[30px]'>
                        {topics.find((topic) => topic.date == '2024-12-26')?.sponser_logo ? (
                          <Image
                            alt=''
                            className='w-full aspect-square object-cover rounded-full'
                            width={30}
                            height={30}
                            src={topics.find((topic) => topic.date == '2024-12-26')?.sponser_logo}
                          />
                        ) : null}
                      </div>
                    </>
                  ) : (
                    <div className='h-full grid place-items-center '>
                      <svg width='15' height='25' viewBox='0 0 15 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M4.80859 17.3068V17.0909C4.82375 15.6818 4.9639 14.5606 5.22905 13.7273C5.50178 12.8939 5.88814 12.2197 6.38814 11.7045C6.88814 11.1894 7.49041 10.7197 8.19496 10.2955C8.6495 10.0076 9.05859 9.68561 9.42223 9.32955C9.78587 8.97348 10.0737 8.56439 10.2859 8.10227C10.498 7.64015 10.604 7.12879 10.604 6.56818C10.604 5.89394 10.445 5.31061 10.1268 4.81818C9.80859 4.32576 9.38435 3.94697 8.85405 3.68182C8.33132 3.40909 7.74799 3.27273 7.10405 3.27273C6.52072 3.27273 5.9639 3.39394 5.43359 3.63636C4.90329 3.87879 4.4639 4.25758 4.11541 4.77273C3.76693 5.2803 3.56617 5.93561 3.51314 6.73864H0.0585938C0.111624 5.375 0.456321 4.22348 1.09268 3.28409C1.72905 2.33712 2.56996 1.62121 3.61541 1.13636C4.66844 0.651514 5.83132 0.40909 7.10405 0.40909C8.49799 0.40909 9.71769 0.670454 10.7631 1.19318C11.8086 1.70833 12.6192 2.43182 13.195 3.36364C13.7783 4.28788 14.07 5.36742 14.07 6.60227C14.07 7.45076 13.9374 8.21591 13.6722 8.89773C13.4071 9.57197 13.0283 10.1742 12.5359 10.7045C12.051 11.2348 11.4677 11.7045 10.7859 12.1136C10.1419 12.5152 9.6192 12.9318 9.21768 13.3636C8.82375 13.7955 8.53587 14.3068 8.35405 14.8977C8.17223 15.4886 8.07375 16.2197 8.05859 17.0909V17.3068H4.80859ZM6.5245 24.2159C5.90329 24.2159 5.3692 23.9962 4.92223 23.5568C4.47526 23.1098 4.25178 22.572 4.25178 21.9432C4.25178 21.322 4.47526 20.7917 4.92223 20.3523C5.3692 19.9053 5.90329 19.6818 6.5245 19.6818C7.13814 19.6818 7.66844 19.9053 8.11541 20.3523C8.56996 20.7917 8.79723 21.322 8.79723 21.9432C8.79723 22.3598 8.69117 22.7424 8.47905 23.0909C8.2745 23.4318 8.00178 23.7045 7.66087 23.9091C7.31996 24.1136 6.94117 24.2159 6.5245 24.2159Z'
                          fill='#067537'
                        />
                      </svg>
                    </div>
                  )}
                </div>
                <div
                  onClick={() => setDate(moment.tz('2024-11-27', 'YYYY-MM-D', 'Asia/Ho_Chi_Minh'))}
                  className={`${
                    moment().tz('Asia/Ho_Chi_Minh').date() == 27
                      ? 'bg-green-100'
                      : date.date() == 27
                      ? 'bg-neutral-200'
                      : moment().tz('Asia/Ho_Chi_Minh').date() >= 27 &&
                        topics.find((topic) => topic.date == '2024-12-27')
                      ? 'cursor-pointer'
                      : 'pointer-events-none [&_div]:opacity-50'
                  } flex flex-col items-center gap-1.5`}>
                  <div className='date'>27</div>
                  {topics.find((topic) => topic.date == '2024-12-27') ? (
                    <>
                      <div className='line-clamp-2 lg:line-clamp-1'>
                        {topics.find((topic) => topic.date == '2024-12-27')?.title}
                      </div>
                      <div className='w-[30px] h-[30px]'>
                        {topics.find((topic) => topic.date == '2024-12-27')?.sponser_logo ? (
                          <Image
                            alt=''
                            className='w-full aspect-square object-cover rounded-full'
                            width={30}
                            height={30}
                            src={topics.find((topic) => topic.date == '2024-12-27')?.sponser_logo}
                          />
                        ) : null}
                      </div>
                    </>
                  ) : (
                    <div className='h-full grid place-items-center '>
                      <svg width='15' height='25' viewBox='0 0 15 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M4.80859 17.3068V17.0909C4.82375 15.6818 4.9639 14.5606 5.22905 13.7273C5.50178 12.8939 5.88814 12.2197 6.38814 11.7045C6.88814 11.1894 7.49041 10.7197 8.19496 10.2955C8.6495 10.0076 9.05859 9.68561 9.42223 9.32955C9.78587 8.97348 10.0737 8.56439 10.2859 8.10227C10.498 7.64015 10.604 7.12879 10.604 6.56818C10.604 5.89394 10.445 5.31061 10.1268 4.81818C9.80859 4.32576 9.38435 3.94697 8.85405 3.68182C8.33132 3.40909 7.74799 3.27273 7.10405 3.27273C6.52072 3.27273 5.9639 3.39394 5.43359 3.63636C4.90329 3.87879 4.4639 4.25758 4.11541 4.77273C3.76693 5.2803 3.56617 5.93561 3.51314 6.73864H0.0585938C0.111624 5.375 0.456321 4.22348 1.09268 3.28409C1.72905 2.33712 2.56996 1.62121 3.61541 1.13636C4.66844 0.651514 5.83132 0.40909 7.10405 0.40909C8.49799 0.40909 9.71769 0.670454 10.7631 1.19318C11.8086 1.70833 12.6192 2.43182 13.195 3.36364C13.7783 4.28788 14.07 5.36742 14.07 6.60227C14.07 7.45076 13.9374 8.21591 13.6722 8.89773C13.4071 9.57197 13.0283 10.1742 12.5359 10.7045C12.051 11.2348 11.4677 11.7045 10.7859 12.1136C10.1419 12.5152 9.6192 12.9318 9.21768 13.3636C8.82375 13.7955 8.53587 14.3068 8.35405 14.8977C8.17223 15.4886 8.07375 16.2197 8.05859 17.0909V17.3068H4.80859ZM6.5245 24.2159C5.90329 24.2159 5.3692 23.9962 4.92223 23.5568C4.47526 23.1098 4.25178 22.572 4.25178 21.9432C4.25178 21.322 4.47526 20.7917 4.92223 20.3523C5.3692 19.9053 5.90329 19.6818 6.5245 19.6818C7.13814 19.6818 7.66844 19.9053 8.11541 20.3523C8.56996 20.7917 8.79723 21.322 8.79723 21.9432C8.79723 22.3598 8.69117 22.7424 8.47905 23.0909C8.2745 23.4318 8.00178 23.7045 7.66087 23.9091C7.31996 24.1136 6.94117 24.2159 6.5245 24.2159Z'
                          fill='#067537'
                        />
                      </svg>
                    </div>
                  )}
                </div>
                <div
                  onClick={() => setDate(moment.tz('2024-11-28', 'YYYY-MM-D', 'Asia/Ho_Chi_Minh'))}
                  className={`${
                    moment().tz('Asia/Ho_Chi_Minh').date() == 28
                      ? 'bg-green-100'
                      : date.date() == 28
                      ? 'bg-neutral-200'
                      : moment().tz('Asia/Ho_Chi_Minh').date() >= 28 &&
                        topics.find((topic) => topic.date == '2024-12-28')
                      ? 'cursor-pointer'
                      : 'pointer-events-none [&_div]:opacity-50'
                  } flex flex-col items-center gap-1.5`}>
                  <div className='date'>28</div>
                  {topics.find((topic) => topic.date == '2024-12-28') ? (
                    <>
                      <div className='line-clamp-2 lg:line-clamp-1'>
                        {topics.find((topic) => topic.date == '2024-12-28')?.title}
                      </div>
                      <div className='w-[30px] h-[30px]'>
                        {topics.find((topic) => topic.date == '2024-12-28')?.sponser_logo ? (
                          <Image
                            alt=''
                            className='w-full aspect-square object-cover rounded-full'
                            width={30}
                            height={30}
                            src={topics.find((topic) => topic.date == '2024-12-28')?.sponser_logo}
                          />
                        ) : null}
                      </div>
                    </>
                  ) : (
                    <div className='h-full grid place-items-center '>
                      <svg width='15' height='25' viewBox='0 0 15 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M4.80859 17.3068V17.0909C4.82375 15.6818 4.9639 14.5606 5.22905 13.7273C5.50178 12.8939 5.88814 12.2197 6.38814 11.7045C6.88814 11.1894 7.49041 10.7197 8.19496 10.2955C8.6495 10.0076 9.05859 9.68561 9.42223 9.32955C9.78587 8.97348 10.0737 8.56439 10.2859 8.10227C10.498 7.64015 10.604 7.12879 10.604 6.56818C10.604 5.89394 10.445 5.31061 10.1268 4.81818C9.80859 4.32576 9.38435 3.94697 8.85405 3.68182C8.33132 3.40909 7.74799 3.27273 7.10405 3.27273C6.52072 3.27273 5.9639 3.39394 5.43359 3.63636C4.90329 3.87879 4.4639 4.25758 4.11541 4.77273C3.76693 5.2803 3.56617 5.93561 3.51314 6.73864H0.0585938C0.111624 5.375 0.456321 4.22348 1.09268 3.28409C1.72905 2.33712 2.56996 1.62121 3.61541 1.13636C4.66844 0.651514 5.83132 0.40909 7.10405 0.40909C8.49799 0.40909 9.71769 0.670454 10.7631 1.19318C11.8086 1.70833 12.6192 2.43182 13.195 3.36364C13.7783 4.28788 14.07 5.36742 14.07 6.60227C14.07 7.45076 13.9374 8.21591 13.6722 8.89773C13.4071 9.57197 13.0283 10.1742 12.5359 10.7045C12.051 11.2348 11.4677 11.7045 10.7859 12.1136C10.1419 12.5152 9.6192 12.9318 9.21768 13.3636C8.82375 13.7955 8.53587 14.3068 8.35405 14.8977C8.17223 15.4886 8.07375 16.2197 8.05859 17.0909V17.3068H4.80859ZM6.5245 24.2159C5.90329 24.2159 5.3692 23.9962 4.92223 23.5568C4.47526 23.1098 4.25178 22.572 4.25178 21.9432C4.25178 21.322 4.47526 20.7917 4.92223 20.3523C5.3692 19.9053 5.90329 19.6818 6.5245 19.6818C7.13814 19.6818 7.66844 19.9053 8.11541 20.3523C8.56996 20.7917 8.79723 21.322 8.79723 21.9432C8.79723 22.3598 8.69117 22.7424 8.47905 23.0909C8.2745 23.4318 8.00178 23.7045 7.66087 23.9091C7.31996 24.1136 6.94117 24.2159 6.5245 24.2159Z'
                          fill='#067537'
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              <div className='grid grid-cols-7 items-center divide-x-[1px] text-gray-black font-medium [&>div]:h-full text-[8px] lg:text-xs [&>div:first-child>.date]:text-red-500 [&_.date]:text-sm lg:[&_.date]:text-lg [&_.date]:font-semibold [&>div]:p-3'>
                <div
                  onClick={() => setDate(moment.tz('2024-11-29', 'YYYY-MM-D', 'Asia/Ho_Chi_Minh'))}
                  className={`${
                    moment().tz('Asia/Ho_Chi_Minh').date() == 29
                      ? 'bg-green-100'
                      : date.date() == 29
                      ? 'bg-neutral-200'
                      : moment().tz('Asia/Ho_Chi_Minh').date() >= 29 &&
                        topics.find((topic) => topic.date == '2024-12-29')
                      ? 'cursor-pointer'
                      : 'pointer-events-none [&_div]:opacity-50'
                  } flex flex-col items-center gap-1.5`}>
                  <div className='date'>29</div>
                  {topics.find((topic) => topic.date == '2024-12-29') ? (
                    <>
                      <div className='line-clamp-2 lg:line-clamp-1'>
                        {topics.find((topic) => topic.date == '2024-12-29')?.title}
                      </div>
                      <div className='w-[30px] h-[30px]'>
                        {topics.find((topic) => topic.date == '2024-12-29')?.sponser_logo ? (
                          <Image
                            alt=''
                            className='w-full aspect-square object-cover rounded-full'
                            width={30}
                            height={30}
                            src={topics.find((topic) => topic.date == '2024-12-29')?.sponser_logo}
                          />
                        ) : null}
                      </div>
                    </>
                  ) : (
                    <div className='h-full grid place-items-center '>
                      <svg width='15' height='25' viewBox='0 0 15 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M4.80859 17.3068V17.0909C4.82375 15.6818 4.9639 14.5606 5.22905 13.7273C5.50178 12.8939 5.88814 12.2197 6.38814 11.7045C6.88814 11.1894 7.49041 10.7197 8.19496 10.2955C8.6495 10.0076 9.05859 9.68561 9.42223 9.32955C9.78587 8.97348 10.0737 8.56439 10.2859 8.10227C10.498 7.64015 10.604 7.12879 10.604 6.56818C10.604 5.89394 10.445 5.31061 10.1268 4.81818C9.80859 4.32576 9.38435 3.94697 8.85405 3.68182C8.33132 3.40909 7.74799 3.27273 7.10405 3.27273C6.52072 3.27273 5.9639 3.39394 5.43359 3.63636C4.90329 3.87879 4.4639 4.25758 4.11541 4.77273C3.76693 5.2803 3.56617 5.93561 3.51314 6.73864H0.0585938C0.111624 5.375 0.456321 4.22348 1.09268 3.28409C1.72905 2.33712 2.56996 1.62121 3.61541 1.13636C4.66844 0.651514 5.83132 0.40909 7.10405 0.40909C8.49799 0.40909 9.71769 0.670454 10.7631 1.19318C11.8086 1.70833 12.6192 2.43182 13.195 3.36364C13.7783 4.28788 14.07 5.36742 14.07 6.60227C14.07 7.45076 13.9374 8.21591 13.6722 8.89773C13.4071 9.57197 13.0283 10.1742 12.5359 10.7045C12.051 11.2348 11.4677 11.7045 10.7859 12.1136C10.1419 12.5152 9.6192 12.9318 9.21768 13.3636C8.82375 13.7955 8.53587 14.3068 8.35405 14.8977C8.17223 15.4886 8.07375 16.2197 8.05859 17.0909V17.3068H4.80859ZM6.5245 24.2159C5.90329 24.2159 5.3692 23.9962 4.92223 23.5568C4.47526 23.1098 4.25178 22.572 4.25178 21.9432C4.25178 21.322 4.47526 20.7917 4.92223 20.3523C5.3692 19.9053 5.90329 19.6818 6.5245 19.6818C7.13814 19.6818 7.66844 19.9053 8.11541 20.3523C8.56996 20.7917 8.79723 21.322 8.79723 21.9432C8.79723 22.3598 8.69117 22.7424 8.47905 23.0909C8.2745 23.4318 8.00178 23.7045 7.66087 23.9091C7.31996 24.1136 6.94117 24.2159 6.5245 24.2159Z'
                          fill='#067537'
                        />
                      </svg>
                    </div>
                  )}
                </div>
                <div
                  onClick={() => setDate(moment.tz('2024-11-30', 'YYYY-MM-D', 'Asia/Ho_Chi_Minh'))}
                  className={`${
                    moment().tz('Asia/Ho_Chi_Minh').date() == 30
                      ? 'bg-green-100'
                      : date.date() == 30
                      ? 'bg-neutral-200'
                      : moment().tz('Asia/Ho_Chi_Minh').date() >= 30 &&
                        topics.find((topic) => topic.date == '2024-12-30')
                      ? 'cursor-pointer'
                      : 'pointer-events-none [&_div]:opacity-50'
                  } flex flex-col items-center gap-1.5`}>
                  <div className='date'>30</div>
                  {topics.find((topic) => topic.date == '2024-12-30') ? (
                    <>
                      <div className='line-clamp-2 lg:line-clamp-1'>
                        {topics.find((topic) => topic.date == '2024-12-30')?.title}
                      </div>
                      <div className='w-[30px] h-[30px]'>
                        {topics.find((topic) => topic.date == '2024-12-30')?.sponser_logo ? (
                          <Image
                            alt=''
                            className='w-full aspect-square object-cover rounded-full'
                            width={30}
                            height={30}
                            src={topics.find((topic) => topic.date == '2024-12-30')?.sponser_logo}
                          />
                        ) : null}
                      </div>
                    </>
                  ) : (
                    <div className='h-full grid place-items-center '>
                      <svg width='15' height='25' viewBox='0 0 15 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M4.80859 17.3068V17.0909C4.82375 15.6818 4.9639 14.5606 5.22905 13.7273C5.50178 12.8939 5.88814 12.2197 6.38814 11.7045C6.88814 11.1894 7.49041 10.7197 8.19496 10.2955C8.6495 10.0076 9.05859 9.68561 9.42223 9.32955C9.78587 8.97348 10.0737 8.56439 10.2859 8.10227C10.498 7.64015 10.604 7.12879 10.604 6.56818C10.604 5.89394 10.445 5.31061 10.1268 4.81818C9.80859 4.32576 9.38435 3.94697 8.85405 3.68182C8.33132 3.40909 7.74799 3.27273 7.10405 3.27273C6.52072 3.27273 5.9639 3.39394 5.43359 3.63636C4.90329 3.87879 4.4639 4.25758 4.11541 4.77273C3.76693 5.2803 3.56617 5.93561 3.51314 6.73864H0.0585938C0.111624 5.375 0.456321 4.22348 1.09268 3.28409C1.72905 2.33712 2.56996 1.62121 3.61541 1.13636C4.66844 0.651514 5.83132 0.40909 7.10405 0.40909C8.49799 0.40909 9.71769 0.670454 10.7631 1.19318C11.8086 1.70833 12.6192 2.43182 13.195 3.36364C13.7783 4.28788 14.07 5.36742 14.07 6.60227C14.07 7.45076 13.9374 8.21591 13.6722 8.89773C13.4071 9.57197 13.0283 10.1742 12.5359 10.7045C12.051 11.2348 11.4677 11.7045 10.7859 12.1136C10.1419 12.5152 9.6192 12.9318 9.21768 13.3636C8.82375 13.7955 8.53587 14.3068 8.35405 14.8977C8.17223 15.4886 8.07375 16.2197 8.05859 17.0909V17.3068H4.80859ZM6.5245 24.2159C5.90329 24.2159 5.3692 23.9962 4.92223 23.5568C4.47526 23.1098 4.25178 22.572 4.25178 21.9432C4.25178 21.322 4.47526 20.7917 4.92223 20.3523C5.3692 19.9053 5.90329 19.6818 6.5245 19.6818C7.13814 19.6818 7.66844 19.9053 8.11541 20.3523C8.56996 20.7917 8.79723 21.322 8.79723 21.9432C8.79723 22.3598 8.69117 22.7424 8.47905 23.0909C8.2745 23.4318 8.00178 23.7045 7.66087 23.9091C7.31996 24.1136 6.94117 24.2159 6.5245 24.2159Z'
                          fill='#067537'
                        />
                      </svg>
                    </div>
                  )}
                </div>
                <div
                  onClick={() => setDate(moment.tz('2024-11-31', 'YYYY-MM-D', 'Asia/Ho_Chi_Minh'))}
                  className={`${
                    moment().tz('Asia/Ho_Chi_Minh').date() == 31
                      ? 'bg-green-100'
                      : date.date() == 31
                      ? 'bg-neutral-200'
                      : moment().tz('Asia/Ho_Chi_Minh').date() >= 31 &&
                        topics.find((topic) => topic.date == '2024-12-31')
                      ? 'cursor-pointer'
                      : 'pointer-events-none [&_div]:opacity-50'
                  } flex flex-col items-center gap-1.5 relative`}>
                  <Image src={O3} alt='' className='absolute right-0 top-0 -translate-y-1/2 w-1/2 lg:w-auto' />

                  <div className='date'>31</div>
                  {topics.find((topic) => topic.date == '2024-12-31') ? (
                    <>
                      <div className='line-clamp-2 lg:line-clamp-1'>
                        {topics.find((topic) => topic.date == '2024-12-31')?.title}
                      </div>
                      <div className='w-[30px] h-[30px]'>
                        {topics.find((topic) => topic.date == '2024-12-31')?.sponser_logo ? (
                          <Image
                            alt=''
                            className='w-full aspect-square object-cover rounded-full'
                            width={30}
                            height={30}
                            src={topics.find((topic) => topic.date == '2024-12-31')?.sponser_logo}
                          />
                        ) : null}
                      </div>
                    </>
                  ) : (
                    <div className='h-full grid place-items-center '>
                      <svg width='15' height='25' viewBox='0 0 15 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M4.80859 17.3068V17.0909C4.82375 15.6818 4.9639 14.5606 5.22905 13.7273C5.50178 12.8939 5.88814 12.2197 6.38814 11.7045C6.88814 11.1894 7.49041 10.7197 8.19496 10.2955C8.6495 10.0076 9.05859 9.68561 9.42223 9.32955C9.78587 8.97348 10.0737 8.56439 10.2859 8.10227C10.498 7.64015 10.604 7.12879 10.604 6.56818C10.604 5.89394 10.445 5.31061 10.1268 4.81818C9.80859 4.32576 9.38435 3.94697 8.85405 3.68182C8.33132 3.40909 7.74799 3.27273 7.10405 3.27273C6.52072 3.27273 5.9639 3.39394 5.43359 3.63636C4.90329 3.87879 4.4639 4.25758 4.11541 4.77273C3.76693 5.2803 3.56617 5.93561 3.51314 6.73864H0.0585938C0.111624 5.375 0.456321 4.22348 1.09268 3.28409C1.72905 2.33712 2.56996 1.62121 3.61541 1.13636C4.66844 0.651514 5.83132 0.40909 7.10405 0.40909C8.49799 0.40909 9.71769 0.670454 10.7631 1.19318C11.8086 1.70833 12.6192 2.43182 13.195 3.36364C13.7783 4.28788 14.07 5.36742 14.07 6.60227C14.07 7.45076 13.9374 8.21591 13.6722 8.89773C13.4071 9.57197 13.0283 10.1742 12.5359 10.7045C12.051 11.2348 11.4677 11.7045 10.7859 12.1136C10.1419 12.5152 9.6192 12.9318 9.21768 13.3636C8.82375 13.7955 8.53587 14.3068 8.35405 14.8977C8.17223 15.4886 8.07375 16.2197 8.05859 17.0909V17.3068H4.80859ZM6.5245 24.2159C5.90329 24.2159 5.3692 23.9962 4.92223 23.5568C4.47526 23.1098 4.25178 22.572 4.25178 21.9432C4.25178 21.322 4.47526 20.7917 4.92223 20.3523C5.3692 19.9053 5.90329 19.6818 6.5245 19.6818C7.13814 19.6818 7.66844 19.9053 8.11541 20.3523C8.56996 20.7917 8.79723 21.322 8.79723 21.9432C8.79723 22.3598 8.69117 22.7424 8.47905 23.0909C8.2745 23.4318 8.00178 23.7045 7.66087 23.9091C7.31996 24.1136 6.94117 24.2159 6.5245 24.2159Z'
                          fill='#067537'
                        />
                      </svg>
                    </div>
                  )}
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}
