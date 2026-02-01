import {
  createBox,
  createRestyleComponent,
  layout,
  backgroundColor,
  spacing,
  border,
  BackgroundColorProps,
  SpacingProps,
  BorderProps,
  LayoutProps,
  spacingShorthand,
  SpacingShorthandProps,
} from '@shopify/restyle';
import { Theme } from '../../theme/theme';
import {
  TouchableOpacity,
  TouchableOpacityProps as RNTouchableOpacityProps,
} from 'react-native';
import { BoxProps as RSBoxProps } from '@shopify/restyle';

export const Box = createBox<Theme>();
export type BoxProps = RSBoxProps<Theme>;

export type TouchableOpacityBoxProps = BackgroundColorProps<Theme> &
  SpacingProps<Theme> &
  LayoutProps<Theme> &
  BorderProps<Theme> &
  SpacingProps<Theme> &
  SpacingShorthandProps<Theme> &
  RNTouchableOpacityProps;

export const TouchableOpacityBox = createRestyleComponent<
  TouchableOpacityBoxProps,
  Theme
>(
  [backgroundColor, spacing, layout, border, spacingShorthand],
  TouchableOpacity,
);
