import { ArrowsUpDownIcon } from "@heroicons/react/20/solid"
import Mock from "assets/images/mokup1.png"
import Mock2 from "assets/images/mokup2.png"
import Button from "components/Button"
import FilledButton from "components/Button/FilledButton"
import OutlineButton from "components/Button/OutlineButton"
import Carousel from "components/Carousel"
import Dropdown, { DropdownMenu, DropdownToggle } from "components/Dropdown"
import Header from "components/Header"
import TextField from "components/Input/TextField"
import AutoGrowingTextField from "components/Input/TextField/AutoGrowing"
import Select from "components/Select"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import Image from "next/image"

export default function Test() {
  return (
    <>
      <Header />
      <div className="p-3 flex bg-light-gray h-[100vh] gap-3 ">
        <div className="flex flex-col flex-1 w-2/4 gap-3 items-baseline">
          <Button size="lg">Large Button</Button>
          <FilledButton>Filled Button</FilledButton>
          <FilledButton size="lg">Large Filled Button</FilledButton>
          <OutlineButton>Outline Button</OutlineButton>
          <OutlineButton size="lg">Large Outline Button</OutlineButton>
          <TextField size="sm" placeholder="Small Text Field" />
          <TextField placeholder="Text Field" />
          <TextField size="lg" placeholder="Large Text Field" />
          <AutoGrowingTextField placeholder="Auto Growing Text Field" />
          <Select
            icon={<ArrowsUpDownIcon className="h-5 w-5 text-medium-gray" aria-hidden="true" />}
            options={[
              {
                key: 1,
                value: "Wade Cooper",
              },
              {
                key: 2,
                value: "Arlene Mccoy",
              },
              {
                key: 3,
                value: "Devon Webb",
              },
            ]}
          />
          <Dropdown>
            <DropdownToggle>
              <FilledButton>Dropdown Toggle</FilledButton>
            </DropdownToggle>
            <DropdownMenu>
              <div className="p-3">Dropdown Menu</div>
            </DropdownMenu>
          </Dropdown>
        </div>
        <div className="flex-1 w-2/4">
          <Carousel>
            <div>
              <Image className="w-full" src={Mock} alt="" />
            </div>
            <div>
              <Image className="w-full" src={Mock2} alt="" />
            </div>
            <div>
              <Image className="w-full" src={Mock2} alt="" />
            </div>
            <div>
              <Image className="w-full" src={Mock2} alt="" />
            </div>
            <div>
              <Image className="w-full" src={Mock2} alt="" />
            </div>
            <div>
              <Image className="w-full" src={Mock2} alt="" />
            </div>
          </Carousel>
        </div>
      </div>
    </>
  )
}


export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
})
