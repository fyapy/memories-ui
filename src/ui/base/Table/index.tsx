import type {JSX} from 'preact'
import {css} from './style'

export interface Column<T> {
  label: string
  render: (row: T) => JSX.Element | string | number | null
  right?: boolean
  maxWidth?: number
}

interface Props<T> {
  columns: Column<T>[]
  data: T[]
}

export function Table<T extends Record<string, any>>({data, columns}: Props<T>) {
  if (data.length === 0) {
    return <div class={css.empty()}>Тут пусто :(</div>
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
                  <div data-right={column.right}>
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
