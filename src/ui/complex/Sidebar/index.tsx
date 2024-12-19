import {css} from './style'

interface SidebarProps {
  links: Array<{
    to?: string
    onClick?(): void
    text: string
  }>
  pathname: string
  navigate(path: string): void
}

export const Sidebar = ({links, pathname, navigate}: SidebarProps) => (
  <div class={css.wrapper()}>
    {links.map(({to, text, onClick}) => {
      if (typeof to === 'string') {
        const style = pathname === to ? 'background-color: #232324;' : undefined

        return (
          <a
            style={style}
            href={to}
            class={css.link()}
            onClick={e => {
              e.preventDefault()
              navigate(to)
            }}
          >
            {text}
          </a>
        )
      }

      return (
        <div class={css.link()} onClick={onClick}>
          {text}
        </div>
      )
    })}
  </div>
)
