import { AsyncPaginate } from 'react-select-async-paginate'
import { OptionType, defaultAdditional } from './type'

import { controlStyles, menuListStyles } from './styles'
import { useRef, useState } from 'react'
import { searchOptions } from './searchOptions'

export const SelectPaginate = () => {
  const [value, onChange] = useState<OptionType | null>(null)
  const pageRef = useRef(defaultAdditional.page)

  const loadPageOptions = async (query: string) => {
    const { options, hasMore } = await searchOptions(query, pageRef.current)
    const nextPage = pageRef.current + 1

    pageRef.current = nextPage

    return {
      options,
      hasMore,

      additional: {
        page: nextPage,
      },
    }
  }

  return (
    <AsyncPaginate
      additional={defaultAdditional}
      value={value}
      loadOptions={loadPageOptions}
      styles={{
        control: base => controlStyles(base, '36px', '300px'),
        menuList: menuListStyles,
      }}
      loadingMessage={() => 'Carregando...'}
      onChange={(selectedOption: OptionType | null) => {
        onChange(selectedOption)
      }}
      placeholder="Selecione uma fruta"
    />
  )
}
