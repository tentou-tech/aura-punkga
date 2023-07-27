import DummyComicDetail from 'components/DummyComponent/comicDetail'
import Header from 'components/Header'
import ComicDetail from 'components/pages/chapter/comicDetail'
import CommentSection from 'components/pages/chapter/commentSection'
import ReadingSection from 'components/pages/chapter/readingSection'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { LanguageType } from 'src/constants/global.types'
import { IChapter } from 'src/models/chapter'
import { IComicDetail } from 'src/models/comic'
import { IComment } from 'src/models/comment'
import { getItem, setItem } from 'src/utils/localStorage'
import ChatOutlineIcon from 'images/icons/chat_outline.svg'
import SquareArrowLeftIcon from 'images/icons/square_arrow_left_outline.svg'
import SquareArrowRightIcon from 'images/icons/square_arrow_right_outline.svg'
import { ChevronUpIcon } from '@heroicons/react/24/outline'
import FlashAnimation from 'components/AnimationIconHOC/Flash'
import { Context } from 'src/context'
import HeartFillIcon from 'images/icons/heart_fill.svg'
import HeartOutlineIcon from 'images/icons/heart_outline.svg'
import XIcon from 'images/icons/x-icon.svg'
import { useScrollDirection } from 'react-use-scroll-direction'
import ChatInput from 'components/Input/ChatInput'
import Comment from 'components/Comment'
const Chapter: React.FC = ({
  comicDetails,
  chapterDetails,
  chapterComments,
  postComment,
  like,
  unlike,
  subscribe,
  unsubscribe,
  addView,
}: {
  comicDetails: {
    data: IComicDetail
    loading: boolean
  }
  chapterDetails: {
    data: IChapter
    loading: boolean
  }
  chapterComments: {
    data: IComment[]
    loading: boolean
    callApi: (skipLoading: boolean) => void
  }
  postComment: (content: string) => void
  like: () => void
  unlike: () => void
  subscribe: () => void
  unsubscribe: () => void
  addView: () => void
}) => {
  const [openComments, setOpenComments] = useState(false)
  const [mode, setMode] = useState<'minscreen' | 'fullscreen'>('minscreen')
  const [isSubscribe, setIsSubscribe] = useState(false)
  const { locale } = useRouter()
  const [language, setLanguage] = useState<LanguageType>(locale as LanguageType)
  const commentIntervalId = useRef<any>()
  const router = useRouter()
  const [showChapterList, setShowChapterList] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const { account } = useContext(Context)
  const { isScrollingDown } = useScrollDirection()
  useEffect(() => {
    if (chapterDetails.data?.id) addView()
  }, [chapterDetails?.data?.id])
  useEffect(() => {
    setLanguage(locale as LanguageType)
  }, [locale])

  useEffect(() => {
    setIsSubscribe(comicDetails?.data?.isSubscribe)
  }, [comicDetails?.data])

  useEffect(() => {
    setIsLiked(chapterDetails.data?.isLiked)
  }, [chapterDetails.data?.isLiked])

  useEffect(() => {
    if (openComments) {
      commentIntervalId.current = setInterval(() => chapterComments.callApi(true), 5000)
    } else {
      if (commentIntervalId.current) clearInterval(commentIntervalId.current)
    }
    return () => clearInterval(commentIntervalId.current)
  }, [openComments])

  useEffect(() => {
    if (comicDetails?.data?.id) {
      const currentReading = getItem('current_reading_manga')
      if (currentReading) {
        const currentReadingManga = JSON.parse(currentReading)
        const newData = [comicDetails.data.id, ...currentReadingManga.filter((id) => id != comicDetails.data.id)]
        setItem('current_reading_manga', JSON.stringify(newData))
      } else {
        setItem('current_reading_manga', JSON.stringify([comicDetails.data.id]))
      }
    }
  }, [comicDetails?.data?.id])

  if (!comicDetails.data || !chapterDetails.data) return null
  const currentChapIndex = comicDetails?.data?.chapters.findIndex((chap) => chap.id == chapterDetails.data.id)
  const mainLanguage = comicDetails.data?.languages?.find((l) => l.isMainLanguage).shortLang
  const chapterLocale = chapterDetails.data?.[language] ? language : mainLanguage
  const goToChap = (direction: 'Prev' | 'Next') => {
    if (direction == 'Prev') {
      const prevChap = comicDetails.data.chapters[currentChapIndex + 1]
      router.push(`/comic/${comicDetails.data.id}/chapter/${prevChap?.number}`)
    } else {
      const nextChap = comicDetails.data.chapters[currentChapIndex - 1]
      router.push(`/comic/${comicDetails.data.id}/chapter/${nextChap?.number}`)
    }
  }
  const likeHandler = (isLike: boolean) => {
    if (account?.verified && account?.name) {
      if (isLike) {
        like()
      } else {
        unlike()
      }
      setIsLiked(isLike)
    } else {
      ;(document.querySelector('#open-sign-in-btn') as any)?.click()
    }
  }

  const commentLength = chapterComments.data
    ? chapterComments.data.reduce((total, current) => {
        return total + 1 + current.replies.length
      }, 0)
    : 0

  return (
    <>
      <div className='xl:hidden'>
        <div className='relative w-[100vw] h-full bg-black'>
          <div
            className={`${
              !isScrollingDown || openComments ? 'opacity-100' : 'opacity-0 pointer-events-none'
            } transition-all fixed z-10 flex justify-between items-center px-5 py-3 bg-black w-full`}>
            <div>
              {openComments ? (
                <Image src={XIcon} alt='' className='w-5 h-5' onClick={() => setOpenComments(false)} />
              ) : (
                <Image src={ChatOutlineIcon} alt='' className='w-6 h-6' onClick={() => setOpenComments(true)} />
              )}
            </div>
            <div className='flex justify-center items-center'>
              <Image
                className={`w-6 h-6 cursor-pointer ${
                  currentChapIndex == comicDetails.data.chapters.length - 1 ? 'opacity-60 cursor-not-allowed ' : ''
                }`}
                onClick={() => goToChap('Prev')}
                src={SquareArrowLeftIcon}
                alt=''
              />
              <div className='relative px-[10px] mx-2 rounded-lg border-second-color border-[1.5px] flex gap-[10px] items-center justify-between cursor-pointer '>
                <span
                  onClick={() => setShowChapterList(!showChapterList)}
                  className='text-second-color w-full text-xs leading-5'>{`Chapter ${chapterDetails.data.number}`}</span>
                <ChevronUpIcon
                  onClick={() => setShowChapterList(!showChapterList)}
                  className={`h-6 w-6 text-second-color transition-all ${showChapterList ? 'rotate-0' : 'rotate-180'}`}
                />
                <div
                  className={`absolute bg-light-gray top-[120%] left-0 px-[10px] py-[6px] border-[1.5px] border-second-color rounded-xl w-full flex gap-[10px] flex-col-reverse transition-all ${
                    showChapterList
                      ? 'max-h-[135px] overflow-auto opacity-100'
                      : 'max-h-[0px] overflow-hidden opacity-0 pointer-events-none'
                  }`}>
                  {comicDetails.data?.chapters?.map((chapter, index) => {
                    return (
                      <div
                        onClick={() => router.push(`/comic/${comicDetails.data.id}/chapter/${chapter?.id}`)}
                        key={index}
                        className={`cursor-pointer text-xs hover:bg-light-medium-gray ${
                          currentChapIndex == index ? 'text-second-color' : ''
                        }`}>
                        Chapter {chapter.number}
                      </div>
                    )
                  })}
                </div>
              </div>
              <Image
                className={`cursor-pointer w-6 h-6 ${currentChapIndex == 0 ? 'opacity-60 cursor-not-allowed ' : ''}`}
                onClick={() => goToChap('Next')}
                src={SquareArrowRightIcon}
                alt=''
              />
            </div>
            <div>
              <FlashAnimation
                InactiveComponent={(props: any) => (
                  <Image
                    className='cursor-pointer w-6 h-6'
                    onClick={() => likeHandler(true)}
                    src={HeartOutlineIcon}
                    alt=''
                    {...props}
                  />
                )}
                ActiveComponent={(props: any) => (
                  <Image
                    className='cursor-pointer w-6 h-6'
                    onClick={() => likeHandler(false)}
                    src={HeartFillIcon}
                    alt=''
                    {...props}
                  />
                )}
                active={isLiked}
              />
            </div>
          </div>
          <div className='pt-[48px]'>
            {chapterDetails.data[chapterLocale]?.map((page, index) => (
              <Image src={page} key={index} alt='' width={700} height={1000} className='mx-auto' />
            ))}
          </div>
          <div
            className={`${
              openComments ? 'h-[calc(100vh-48px)]' : 'h-0'
            } transition-all w-full overflow-auto fixed bottom-0 pb-[52px] bg-[#000000b2]`}>
            <div className='flex flex-col gap-6 overflow-auto p-5'>
              {chapterComments.data?.length &&
                chapterComments.data.map((comment, index) => (
                  <Comment
                    reload={() => chapterComments.callApi(true)}
                    key={index}
                    data={comment}
                    chapterId={chapterDetails.data.id}
                  />
                ))}
            </div>
            {account?.verified && account?.name ? (
              <div className='bg-light-gray fixed bottom-0 right-0 left-0 w-full'>
                <ChatInput onSubmit={postComment} />
              </div>
            ) : (
              <div className='bg-light-gray fixed bottom-0 right-0 left-0 w-full py-[14px]'>
                <div className=' text-sm font-medium text-center leading-6'>
                  You must{' '}
                  <span
                    className='text-second-color underline font-bold cursor-pointer'
                    onClick={() => {
                      ;(document.querySelector('#open-sign-in-btn') as any)?.click()
                    }}>
                    sign in
                  </span>{' '}
                  to comment
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className='hidden xl:block'>
        <Header />
        <div className='flex h-[calc(100vh-80px)] relative'>
          <div className='flex-auto w-2/3 h-full z-[5]'>
            {!chapterDetails || chapterDetails.loading ? (
              <div className='w-full h-full pt-5'>
                <div className='w-[70%] mx-auto mb-[60px] h-full bg-light-medium-gray animate-pulse'></div>
              </div>
            ) : (
              <ReadingSection
                commentNumber={commentLength}
                data={comicDetails.data}
                chapterData={chapterDetails.data}
                setOpenComments={setOpenComments}
                openComments={openComments}
                language={language}
                subscribe={subscribe}
                unsubscribe={unsubscribe}
                mode={mode}
                setMode={setMode}
                isSubscribe={isSubscribe}
                setIsSubscribe={setIsSubscribe}
                likeHandler={likeHandler}
                goToChap={goToChap}
                isLiked={isLiked}
              />
            )}
          </div>
          <div className='flex-auto w-1/3 h-full'>
            {!openComments ? (
              !comicDetails || comicDetails.loading ? (
                <DummyComicDetail />
              ) : (
                <ComicDetail
                  data={comicDetails.data}
                  language={language}
                  setLanguage={setLanguage}
                  isSubscribe={isSubscribe}
                  setIsSubscribe={setIsSubscribe}
                  subscribe={subscribe}
                  unsubscribe={unsubscribe}
                  like={like}
                  unlike={unlike}
                />
              )
            ) : !chapterDetails ? (
              <></>
            ) : window.innerWidth >= 1280 ? (
              <CommentSection
                reload={() => chapterComments.callApi(true)}
                postComment={postComment}
                comments={chapterComments.data}
                chapterId={chapterDetails.data.id}
                mode={mode}
                setOpenComments={setOpenComments}
                openComments={openComments}
              />
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
export default Chapter
