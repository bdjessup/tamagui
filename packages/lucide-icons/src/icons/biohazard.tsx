import type { IconProps } from '@tamagui/helpers-icon'
import { themed } from '@tamagui/helpers-icon'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import {
  Defs,
  Ellipse,
  G,
  Line,
  LinearGradient,
  Path,
  Polygon,
  Polyline,
  RadialGradient,
  Rect,
  Stop,
  Svg,
  Symbol,
  Use,
  Circle as _Circle,
  Text as _Text,
} from 'react-native-svg'

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <_Circle cx="12" cy="11.9" r="2" stroke={color} />
      <Path
        d="M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6"
        stroke={color}
      />
      <Path d="m8.9 10.1 1.4.8" stroke={color} />
      <Path
        d="M17.3 3.4c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5"
        stroke={color}
      />
      <Path d="m15.1 10.1-1.4.8" stroke={color} />
      <Path
        d="M16.7 20.8c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2"
        stroke={color}
      />
      <Path d="M12 13.9v1.6" stroke={color} />
      <Path d="M13.5 5.4c-1-.2-2-.2-3 0" stroke={color} />
      <Path d="M17 16.4c.7-.7 1.2-1.6 1.5-2.5" stroke={color} />
      <Path d="M5.5 13.9c.3.9.8 1.8 1.5 2.5" stroke={color} />
    </Svg>
  )
}

Icon.displayName = 'Biohazard'

export const Biohazard = memo<IconProps>(themed(Icon))
