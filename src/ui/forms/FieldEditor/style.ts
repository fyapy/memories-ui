import Underline from '@editorjs/underline'
import Paragraph from '@editorjs/paragraph'
import ImageTool from '@editorjs/image'
import Header from '@editorjs/header'
import Quote from '@editorjs/quote'
import List from '@editorjs/list'
import {style} from '../../../css'
import '../../../styles/editor.scss'

export const tools = {
  header: {class: Header as any, config: {defaultLevel: 3}},
  list: {
    class: List as any,
    inlineToolbar: true,
    config: {defaultStyle: 'unordered'},
  },
  quote: Quote,
  underline: Underline,
  paragraph: {class: Paragraph as any, inlineToolbar: true},
  image: {
    class: ImageTool,
    config: {endpoints: {}},
  },
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
