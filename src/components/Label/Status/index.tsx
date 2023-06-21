export default function StatusLabel({ status }: { status: string }) {
  const classes = {
    ongoing: "text-[#EEB304] bg-[#FFF2D1]",
  }
  return <span className={`rounded-[6px] font-bold px-[8px] pb-[1px] text-[14px] leading-[24px] ${classes[status]}`}>{status}</span>
}
