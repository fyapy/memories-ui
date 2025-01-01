export interface PaginationState {
  limit: number
  total: number
}

export const createPagination = (): PaginationState => ({total: 0, limit: 0})

export interface Column {
  maxWidth?: number
  right?: boolean
  label: string
  column: string
}

export interface SelectOption<T = any> {
  label: string
  value: T
}
