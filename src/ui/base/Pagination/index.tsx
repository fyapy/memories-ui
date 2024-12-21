import {useRouter} from 'router'
import {css} from './style'

export interface PaginationState {
  limit: number
  hasNext: boolean
  total: number
}

interface Props {
  link: ((page: number) => void) | string
  currentPage: number
  pagin: PaginationState
}

const props = (active: boolean, onClick: (event: Event) => void) => ({
  'data-active': active,
  class: css.btn(),
  onClick,
})

export const Pagination = ({pagin, link, currentPage}: Props) => {
  const {search, navigate} = useRouter()

  const pageCount = Math.ceil(pagin.total / pagin.limit)
  const prevPage = currentPage - 1
  const nextPage = currentPage + 1
  const nextAfterOnePage = currentPage + 2

  const handleRedirect = (page: number) => (event: Event) => {
    event.preventDefault()

    if (typeof link === 'function') {
      link(page)
    } else {
      const searchParams = new URLSearchParams(search)
      searchParams.delete('page')
      searchParams.append('page', `${page}`)

      navigate(`${link}${searchParams && `?${searchParams}`}`)
    }
  }

  if (Number.isNaN(pageCount) || [1, 0].includes(pageCount)) {
    return null
  }

  return (
    <div class={css.wrapper()}>
      {currentPage - 2 > 0 && (
        <div {...props(currentPage === 1, handleRedirect(1))}>{'<'}</div>
      )}
      {prevPage - 1 > 0 && (
        <div {...props(currentPage === prevPage - 1, handleRedirect(prevPage - 1))}>
          {prevPage - 1}
        </div>
      )}
      {prevPage > 0 && (
        <div {...props(currentPage === prevPage, handleRedirect(prevPage))}>
          {prevPage}
        </div>
      )}
      <div {...props(true, handleRedirect(currentPage))}>
        {currentPage}
      </div>
      {nextPage <= pageCount && (
        <div {...props(currentPage === nextPage, handleRedirect(nextPage))}>
          {nextPage}
        </div>
      )}
      {nextAfterOnePage <= pageCount && (
        <div {...props(currentPage === nextAfterOnePage, handleRedirect(nextAfterOnePage))}>
          {nextAfterOnePage}
        </div>
      )}
      {currentPage + 2 < pageCount && (
        <div {...props(currentPage === pageCount, handleRedirect(pageCount))}>{'>'}</div>
      )}
    </div>
  )
}
