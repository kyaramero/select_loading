import { frutas, pageSize, totalPages } from './data'
import { OptionType } from './type'

const sleep = (ms: number) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(undefined)
    }, ms)
  })

export const searchOptions = async (search: string, page: number) => {
  await sleep(500)
  const startIndex = (page - 1) * pageSize
  const endIndex = page * pageSize
  const pageFrutas = frutas.slice(startIndex, endIndex)

  const options: OptionType[] = pageFrutas.map(item => ({
    value: item.index,
    label: item.nome,
  }))
  let filteredOptions: OptionType[]

  if (!search) {
    filteredOptions = options
  } else {
    const searchLower = search.toLowerCase()

    filteredOptions = options.filter(({ label }) =>
      label.toLowerCase().includes(searchLower)
    )
  }
  console.log(filteredOptions)

  const hasMore = totalPages > page
  return {
    options: filteredOptions,
    hasMore,
  }
}
