import type {JSX} from 'preact'
import {NavigateFunction, useRouter} from 'router'
import {useMedia} from 'utils/hooks'
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

function columnProps(link: Props['link'], navigate: NavigateFunction, item: any) {
  if (typeof link === 'undefined') {
    return {}
  }

  return {
    onClick: () => navigate(link(item)),
    class: css.link(),
  }
}

export function Table<T extends Record<string, any>>({link, data, columns, isMobile: isMobileProp}: Props<T>) {
  const {navigate} = useRouter()
  const isMobile = useMedia()

  if (data.length === 0) {
    return <div class={css.empty()}>Тут пусто :(</div>
  }

  if (isMobile || isMobileProp) {
    return (
      <div>
        {data.map((item, index) => {
          const {onClick, ...props} = columnProps(link, navigate, item)

          return (
            <div
              key={item.id || index}
              className={clsx(
                mobileCss.item(),
                typeof link !== 'undefined' && css.link(),
              )}
              onClick={onClick}
            >
              {columns.map(column => (
                <div key={column.label}>
                  <div className={mobileCss.label()}>{column.label}</div>
                  <div>
                    <div data-right={column.right} {...props}>
                      {column.render(item)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )
        })}
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
          {data.map((item, index) => {
            const props = columnProps(link, navigate, item)

            return (
              <tr key={item.id || index}>
                {columns.map(column => (
                  <td
                    key={column.label}
                    class={css.td()}
                    style={typeof column.maxWidth === 'number' ? `width: ${column.maxWidth}px;` : undefined}
                  >
                    <div
                      {...props}
                      data-right={column.right}
                      class={clsx(
                        props.class,
                        typeof link !== 'undefined' && css.link(),
                      )}
                    >
                      {column.render(item)}
                    </div>
                  </td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
