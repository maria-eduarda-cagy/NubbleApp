import { backgroundColor } from '@shopify/restyle';
import { ThemeColors } from '../../theme/theme';
import { TouchableOpacityBoxProps } from '../Box/Box';

interface ButtonUI {
  container: TouchableOpacityBoxProps;
  content: ThemeColors;
}
export type ButtonPreset = 'primary' | 'outline' | 'secondary';

export const buttonPresets: Record<
  ButtonPreset,
  { default: ButtonUI; disabled: ButtonUI }
> = {
  primary: {
    default: {
      container: {
        backgroundColor: 'primary',
      },
      content: 'primaryContrast',
    },
    disabled: {
      container: {
        backgroundColor: 'gray4',
      },
      content: 'gray2',
    },
  },

  outline: {
    default: {
      container: {
        borderWidth: 1,
        borderColor: 'primary',
      },
      content: 'primary',
    },
    disabled: {
      container: {
        borderWidth: 1,
        borderColor: 'gray4',
      },
      content: 'gray2',
    },
  },
  secondary: {
    default: {
      container: {
        backgroundColor: 'carrotSecondary',
      },
      content: 'primaryContrast',
    },

    disabled: {
      container: {
        backgroundColor: 'gray4',
      },
      content: 'gray2',
    },
  },
};
