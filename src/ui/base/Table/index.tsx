import type {JSX} from 'preact'
import {useMedia} from 'utils/hooks'
import {useRouter} from 'router'
import {clsx} from 'utils/dom'
import {mobileCss, css} from './style'

export interface Column<T> {
  label: string
  render: (row: T) => JSX.Element | string | number | null
  right?: boolean
  maxWidth?: number
}

interface Props<T extends Record<string, any> = Record<string, any>> {
  link?(item: T): string
  isMobile?: boolean
  columns: Column<T>[]
  data: T[]
}

export function Table<T extends Record<string, any>>({link, data, columns, isMobile: isMobileProp}: Props<T>) {
  const {navigate} = useRouter()
  const isMobile = useMedia()

  if (data.length === 0) {
    return <div class={css.empty()}>Тут пусто :(</div>
  }

  const linkClass = typeof link === 'undefined' ? undefined : css.link()

  if (isMobile || isMobileProp) {
    return (
      <div>
        {data.map((item, index) => (
          <div
            key={item.id || index}
            onClick={typeof link === 'undefined' ? undefined : () => navigate(link(item))}
            className={clsx(mobileCss.item(), linkClass)}
          >
            {columns.map(column => (
              <div key={column.label}>
                <div className={mobileCss.label()}>{column.label}</div>
                <div>
                  <div data-right={column.right}>
                    {column.render(item)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div>
      <table class={css.table()}>
        <thead>
          <tr>
            {columns.map(column => (
              <th key={column.label} data-right={column.right} class={css.th()}>
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id || index}>
              {columns.map(column => (
                <td
                  key={column.label}
                  class={css.td()}
                  style={typeof column.maxWidth === 'number' ? `width: ${column.maxWidth}px;` : undefined}
                >
                  <div
                    data-right={column.right}
                    onClick={typeof link === 'undefined' ? undefined : () => navigate(link(item))}
                    class={linkClass}
                  >
                    {column.render(item)}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
