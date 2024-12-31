import {style} from '../../../styles'

export interface UploadProps {
  label?: string
  error?: string
  disabled?: boolean
  multiple?: boolean
  placeholder?: string
  modelValue?: FileList | null
}

export const css = {
  wrapper: style({
    marginBottom: '16px',
  }),
  buttonWrapper: style({
    display: 'flex',
  }),
  button: style({
    padding: '10px 17px',

    cursor: 'pointer',
    fontWeight: '700',
    borderRadius: '10px',
    border: '1px solid #FF8C02',
  }),
  tags: style({
    marginTop: '8px',

    display: 'flex',
  }),
}
