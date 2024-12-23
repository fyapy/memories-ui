import {JSX} from 'preact'

interface IconProps extends JSX.SVGAttributes<SVGSVGElement> {
  name: string
  size?: number
  fill?: string
  stroke?: string
}

export const Icon = ({size, name, fill, stroke, ...rest}: IconProps) => (
  <svg class="icon" width={size} height={size} {...rest}>
    <use xlinkHref={`#${name}`} stroke={stroke} fill={fill} />
  </svg>
)
