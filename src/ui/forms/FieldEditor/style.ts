import {style} from '../../../css'
import '../../../styles/editor.scss'

export interface ImageConfig {
  endpoints?: {
    byFile?: string
    byUrl?: string
  }
  uploader?: {
    uploadByFile?(file: File): Promise<{
      success: 0 | 1
      file: {url: string}
    }>
    uploadByUrl(url: string): Promise<{
      success: 0 | 1
      file: {url: string}
    }>
  }
}

export const css = {
  wrapper: style({
    marginBottom: '16px',

    display: 'flex',
    flexDirection: 'column',
  }),
  label: style({
    margin: '0 0 9px 9px',

    fontSize: '14px',
    fontWeight: '500',
    color: '#969696',
  }),
}
