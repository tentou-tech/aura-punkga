import Dropdown, { DropdownMenu, DropdownToggle } from 'components/Dropdown'
import Checkbox from 'components/Input/Checkbox'
import Image from 'next/image'
import { useState } from 'react'
import Mascot2 from 'components/pages/campaigns/assets/Mascot2.svg'
import Mascot3 from 'components/pages/campaigns/assets/Mascot3.svg'
import { Quest } from 'src/models/campaign'
import QuestItem from '../../../components/pages/campaigns/questItem'

export default function QuestList({ quests, isEnded }: { quests: undefined | Quest[]; isEnded: boolean }) {
  const [rewardNFTChecked, setRewardNFTChecked] = useState<boolean>(false)
  const [filter, setFilter] = useState<string>()
  const questList = quests?.map((quest) => {
    if (quest.reward_status == 'OUT_OF_SLOT') {
      return {
        ...quest,
        weight: 4,
      }
    }
    if (quest.reward_status == 'CLAIMED') {
      return {
        ...quest,
        weight: 3,
      }
    }
    if (!quest.unlock) {
      return {
        ...quest,
        weight: 2,
      }
    }
    if (quest.unlock) {
      return {
        ...quest,
        weight: 1,
      }
    }
  })
  return (
    <div className='mt-10'>
      <div className='lg:flex lg:items-center lg:flex-wrap lg:justify-between'>
        <p className='text-lg leading-[23px] lg:text-xl lg:leading-[25px] font-bold'>
          {quests && !isEnded ? `Quests (${quests.length})` : 'Quests'}
        </p>
        {quests && !isEnded && (
          <div className='mt-[10px] flex justify-between items-center lg:mt-0'>
            <div className='p-1 lg:mr-[10px]'>
              <Checkbox
                label={'Reward NFT'}
                checked={rewardNFTChecked}
                onClick={() => setRewardNFTChecked(!rewardNFTChecked)}
              />
            </div>
            <div>
              <Dropdown>
                <DropdownToggle>
                  {(open) => (
                    <div
                      className={`p-[10px] rounded-lg bg-[#F2F2F2] flex hover:bg-white justify-between cursor-pointer items-center w-[233px] ${
                        open
                          ? 'border-primary-color border bg-white p-[9px]'
                          : 'hover:border hover:border-[#DEDEDE] hover:p-[9px]'
                      }`}>
                      <div className='px-[5px] text-sm leading-[18px] font-semibold'>
                        {filter ? filter : 'All quests'}
                      </div>
                      <div
                        className={`rounded-full p-[5px] aspect-square bg-[#C6FFDE] grid place-items-center ${
                          open ? 'rotate-180' : ''
                        }`}>
                        <svg xmlns='http://www.w3.org/2000/svg' width='8' height='4' viewBox='0 0 8 4' fill='none'>
                          <path
                            d='M1.4513 0L4.0013 2.47467L6.5513 0L7.33463 0.765333L4.0013 4L0.667969 0.765333L1.4513 0Z'
                            fill='#1FAB5E'
                          />
                        </svg>
                      </div>
                    </div>
                  )}
                </DropdownToggle>
                <DropdownMenu customClass='rounded-[8px]' closeOnClick>
                  <div className='w-[233px] bg-[#F2F2F2] cursor-pointer'>
                    <div className='p-[15px] text-sm font-semibold' onClick={() => setFilter(undefined)}>
                      All quests
                    </div>
                    <div className='p-[15px] text-sm font-semibold' onClick={() => setFilter('Once')}>
                      {`Once (${questList.filter((quest) => quest.repeat == 'Once').length})`}
                    </div>
                    <div className='p-[15px] text-sm font-semibold' onClick={() => setFilter('Daily')}>
                      {`Daily (${questList.filter((quest) => quest.repeat == 'Daily').length})`}
                    </div>
                  </div>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
        )}
      </div>
      {isEnded ? (
        <div className='mt-5 p-6 lg:mt-9 lg:p-6 flex flex-col items-center w-full'>
          <Image src={Mascot3} alt='' className='w-[240px] h-[240px] lg:w-[320px] lg:h-[320px]' />
          <div className='text-sm leading-[18px] lg:text-base lg:leading-5 font-semibold mt-5 text-center'>
            Campaign Ended
          </div>
        </div>
      ) : !quests ? (
        <div className='mt-5 p-6 lg:mt-9 lg:p-6 flex flex-col items-center w-full'>
          <Image src={Mascot2} alt='' className='w-[240px] h-[240px] lg:w-[320px] lg:h-[320px]' />
          <div className='text-sm leading-[18px] lg:text-base lg:leading-5 font-semibold mt-5 text-center'>
            Enroll to view quests
          </div>
        </div>
      ) : !quests.length ? (
        <div className='mt-5 p-6 lg:mt-9 lg:p-6 flex flex-col items-center w-full'>
          <Image src={Mascot2} alt='' className='w-[240px] h-[240px] lg:w-[320px] lg:h-[320px]' />
          <div className='text-sm leading-[18px] lg:text-base lg:leading-5 font-semibold mt-5 text-center'>
            No quests to show
          </div>
        </div>
      ) : (
        <div className='grid grid-cols-1 2xl:grid-cols-2 gap-5 mt-5'>
          {questList
            .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
            .sort((a, b) => a.weight - b.weight)
            .filter(
              (quest) =>
                (filter ? quest.repeat == filter : true) && (rewardNFTChecked ? !!quest.reward.nft?.nft_name : true)
            )
            .map((quest: Quest, index) => (
              <QuestItem quest={quest} key={index} />
            ))}
        </div>
      )}
    </div>
  )
}
