import TextField from 'components/Input/TextField'
import Image from 'next/image'
import { useState } from 'react'
import Frame from 'components/pages/event/artistic-voice-2024/assets/frame.svg'
import Placeholder from 'components/pages/event/artistic-voice-2024/assets/placeholder.svg'
import { toast } from 'react-toastify'
import { eventService } from 'src/services/event.service'
import useSWR from 'swr'
import moment from 'moment'
export default function Round1Submission() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState<any>()
  const [avatar, setAvatar] = useState<any>()
  const [error, setError] = useState()
  const { data, mutate } = useSWR('get-submissions', eventService.story.getSubmissions, {
    revalidateOnFocus: false,
  })
  const submitHandler = async () => {
    try {
      if (name && description && avatar) {
        const payload = new FormData()
        payload.append('name', name)
        payload.append('avatar', avatar)
        payload.append('description', description)
        const res = await eventService.story.createCharacter(payload)
        if (res.data?.errors?.message) {
          toast(res.data.errors.message, {
            type: 'error',
          })
        } else {
          await mutate()
          toast('Create new character successfully', {
            type: 'success',
          })
          setName('')
          setAvatar(undefined)
          setDescription(undefined)
        }
      }
    } catch (error) {
      toast(error.message, {
        type: 'error',
      })
    }
  }
  const submissions = data?.data?.data?.story_event_submission
  return (
    <div className='grid grid-cols-[3fr_4fr] gap-8'>
      <div className='rounded-md border-[3px] border-neutral-black bg-neautral-950 p-6'>
        <div>
          <label className='text-sm font-medium' htmlFor='name'>
            Character name <span className='text-error-default'>*</span>
          </label>
          <TextField id='name' className='mt-2 bg-transparent' value={name} onChange={setName} />
          <div className='mt-2 flex justify-between text-xs'>
            <div className='text-text-error-primary-3'>{error}</div>
            <div className='text-text-teriary'>{`${name.length}/50`}</div>
          </div>
        </div>
        <div className='mt-8 grid grid-cols-2 gap-10'>
          <div>
            <div className=''>
              <div className='text-sm font-medium'>
                Upload Character Avatar (1:1) <span className='text-error-default'>*</span>
              </div>
              <div className='text-[10px] text-text-quatenary'>1500px x 1500px recommended</div>
            </div>
            <div className='mt-4 relative rounded-xl border-[3px] border-black overflow-hidden'>
              <label htmlFor='character-avatar'>
                <div className='absolute bottom-0 inset-x-0 w-full'>
                  {avatar ? (
                    <Image
                      src={URL.createObjectURL(avatar)}
                      width={500}
                      height={500}
                      alt=''
                      className='w-full object-cover aspect-square'
                    />
                  ) : (
                    <Image
                      src={Placeholder}
                      width={500}
                      height={500}
                      alt=''
                      className='w-full object-cover aspect-square'
                    />
                  )}
                </div>
                <Image src={Frame} alt='' className='w-full  relative' />
                <input
                  id='character-avatar'
                  type='file'
                  className='hidden'
                  accept='image/*'
                  onChange={(e) => setAvatar(e.target.files[0])}
                />
              </label>
            </div>
          </div>
          <div>
            <div className=''>
              <div className='text-sm font-medium'>
                Upload description (A4) <span className='text-error-default'>*</span>
              </div>
              <div className='text-[10px] text-text-quatenary'>1500px x 2122px recommended</div>
            </div>
            <div className='mt-4 relative rounded-xl border-[3px] border-black overflow-hidden'>
              <label htmlFor='character-description'>
                <div className='absolute bottom-0 inset-x-0 w-full'>
                  {description ? (
                    <Image
                      src={URL.createObjectURL(description)}
                      width={500}
                      height={500}
                      alt=''
                      className='w-full object-cover aspect-square'
                    />
                  ) : (
                    <Image
                      src={Placeholder}
                      width={500}
                      height={500}
                      alt=''
                      className='w-full object-cover aspect-square'
                    />
                  )}
                </div>
                <Image src={Frame} alt='' className='w-full  relative' />
                <input
                  id='character-description'
                  type='file'
                  className='hidden'
                  accept='image/*'
                  onChange={(e) => setDescription(e.target.files[0])}
                />
              </label>
            </div>
          </div>
        </div>
        <div
          className='w-[217px] rounded-md font-jaro text-2xl border border-white bg-black p-2.5 text-center mx-auto cursor-pointer mt-6'
          onClick={submitHandler}>
          Submit
        </div>
      </div>
      <div className='rounded-md border-[3px] border-neutral-black bg-neautral-950 p-6'>
        <div className='text-lg font-semibold'>My submission</div>
        <div className='text-feedback-info-link-defaul text-xs mt-2'>
          Submitted artworks/mangas need to be approved by admin. This process may take upto 24 hours after you
          submitted.{' '}
        </div>
        <div className='mt-6 p-6 rounded-[10px] bg-black'>
          {submissions?.length ? (
            <>
              <div className='grid grid-cols-[12%_1fr_25%_25%] text-sm font-semibold border-b border-white'>
                <div className='px-2 py-4'>No</div>
                <div className='p-4'>Name</div>
                <div className='p-4'>Type</div>
                <div className='p-4'>Submited at</div>
              </div>
              <div className='h-[260px] overflow-auto'>
                {submissions?.map((submission, index) => (
                  <div
                    className='grid grid-cols-[12%_1fr_25%_25%] text-sm font-medium text-text-quatenary'
                    key={submission.id}>
                    <div className='px-2 py-4'>#{index + 1}</div>
                    <div className='p-4 truncate'>{submission.name}</div>
                    <div className='p-4 capitalize'>{submission.type}</div>
                    <div className='p-4'>{moment(submission.created_at).format('HH:mm DD/MM/yyyy')}</div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className='text-center w-full h-full grid place-items-center'>No submission found!</div>
          )}
        </div>
      </div>
    </div>
  )
}
