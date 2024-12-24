export interface PaginationState {
  limit: number
  hasNext: boolean
  total: number
}

export interface Column {//<T>
  maxWidth?: number
  right?: boolean
  label: string
  column: string
  // render: (row: T) => JSX.Element | string | number | null
}
