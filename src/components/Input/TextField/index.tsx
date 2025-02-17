interface ITextField {
  placeholder?: string
  leadingComponent?: JSX.Element
  trailingComponent?: JSX.Element
  size?: 'xs' | 'sm' | 'md' | 'lg'
  className?: string
  onFocus?: (e: any) => void
  onBlur?: (e: any) => void
  onChange?: (value: string) => void
  value?: string
  type?: string
  id?: string
  inputref?: any
  disabled?: boolean
  defaultValue?: string
}

export default function TextField({
  placeholder,
  leadingComponent,
  trailingComponent,
  size = 'md',
  className = 'bg-white',
  onFocus,
  onBlur,
  onChange,
  type = 'text',
  value,
  inputref,
  disabled,
  id,
  defaultValue,
}: ITextField) {
  const ex = ['e', '-', '=', '*', '(', ')', '+', '.']
  const disabledStyle = disabled ? 'bg-[#F6F6F6]' : ''

  if (size == 'lg') {
    return (
      <div className={`relative w-full flex rounded-[6px] ${className} ${disabledStyle}`}>
        {leadingComponent && (
          <div className='absolute inset-y-0 left-0 flex items-center justify-center py-[10px] pl-[14px] pr-2 max-w-[50px]'>
            {leadingComponent}
          </div>
        )}
        <input
          defaultValue={defaultValue}
          ref={inputref}
          onFocus={onFocus}
          onBlur={onBlur}
          value={value}
          type={type}
          disabled={disabled}
          onKeyDown={(event) => {
            if (type == 'number' && ex.includes(event.key)) {
              event.preventDefault()
              event.stopPropagation()
              return false
            }
          }}
          onChange={(event) => {
            onChange && onChange(event.target.value)
          }}
          id={id || 'input-group-1'}
          className={`bg-transparent rounded-[6px] w-full p-[13px] placeholder-medium-gray focus:outline-none ${
            leadingComponent ? 'pl-[50px]' : ''
          } ${trailingComponent ? 'pr-[45px]' : ''} ${disabledStyle}`}
          placeholder={placeholder}></input>
        {trailingComponent && (
          <div className='absolute inset-y-0 right-0 flex items-center justify-center p-[13px] max-w-[50px]'>
            {trailingComponent}
          </div>
        )}
      </div>
    )
  }

  if (size == 'sm') {
    return (
      <div className={`relative w-full flex ${disabledStyle}`}>
        {leadingComponent && (
          <div className='absolute top-[2px] left-[10px] flex items-center justify-center w-5 h-5'>
            {leadingComponent}
          </div>
        )}
        <input
          defaultValue={defaultValue}
          onKeyDown={(event) => {
            if (type == 'number' && ex.includes(event.key)) {
              event.preventDefault()
              event.stopPropagation()
              return false
            }
          }}
          autoComplete='one-time-code'
          ref={inputref}
          onFocus={onFocus}
          onBlur={onBlur}
          value={value}
          type={type}
          disabled={disabled}
          onChange={(event) => onChange && onChange(event.target.value)}
          id={id || 'input-group-1'}
          className={`rounded-[8px] text-sm leading-6 w-full px-[13px] py-[2px] placeholder-medium-gray focus:outline-none ${
            leadingComponent ? 'pl-10' : ''
          } ${className} ${disabledStyle}`}
          placeholder={placeholder}></input>
        {trailingComponent && (
          <div className='absolute inset-y-0 right-[10px] flex items-center justify-center p-[13px] max-w-[50px]'>
            {trailingComponent}
          </div>
        )}
      </div>
    )
  }

  if (size == 'xs') {
    return (
      <div className={`relative w-full flex ${disabledStyle}`}>
        {leadingComponent && (
          <div className='absolute top-[2px] left-[10px] flex items-center justify-center w-5 h-5'>
            {leadingComponent}
          </div>
        )}
        <input
          defaultValue={defaultValue}
          onKeyDown={(event) => {
            if (type == 'number' && ex.includes(event.key)) {
              event.preventDefault()
              event.stopPropagation()
              return false
            }
          }}
          autoComplete='one-time-code'
          ref={inputref}
          onFocus={onFocus}
          onBlur={onBlur}
          value={value}
          type={type}
          disabled={disabled}
          onChange={(event) => onChange && onChange(event.target.value)}
          id={id || 'input-group-1'}
          className={`rounded-[8px] text-xs leading-6 w-full px-[13px] placeholder-medium-gray focus:outline-none ${
            leadingComponent ? 'pl-10' : ''
          } ${className} ${disabledStyle}`}
          placeholder={placeholder}></input>
      </div>
    )
  }

  return (
    <div
      className={`relative w-full flex rounded-lg border-border-secondary hover:border-black border h-10 ${className} ${disabledStyle}`}>
      {leadingComponent && (
        <div className='absolute inset-y-0 left-0 flex items-center justify-center py-2.5 pl-3 pr-1.5 w-[38px] [&>*]:w-5 [&>*]:h-5'>
          {leadingComponent}
        </div>
      )}
      <input
        defaultValue={defaultValue}
        onKeyDown={(event) => {
          if (type == 'number' && ex.includes(event.key)) {
            event.preventDefault()
            event.stopPropagation()
            return false
          }
        }}
        autoComplete='one-time-code'
        ref={inputref}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
        type={type}
        disabled={disabled}
        onChange={(event) => onChange && onChange(event.target.value)}
        id={id || 'input-group-1'}
        className={`bg-transparent w-full placeholder-text-quatenary px-3 text-sm font-normal focus:outline-none ${
          leadingComponent ? 'pl-[38px]' : ''
        } ${trailingComponent ? 'pr-[45px]' : ''} ${disabledStyle}`}
        placeholder={placeholder}></input>
      {trailingComponent && (
        <div className='absolute inset-y-0 right-0 flex items-center justify-center pr-3 pl-1.5 w-[38px] [&>*]:w-5 [&>*]:h-5'>
          {trailingComponent}
        </div>
      )}
    </div>
  )
}
