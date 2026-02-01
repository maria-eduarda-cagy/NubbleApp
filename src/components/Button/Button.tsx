import React from 'react';
import { ActivityIndicator } from '../ActivityIndicator/ActivityIndicator';
import { Text } from '../Text/Text';
import { TouchableOpacityBox, TouchableOpacityBoxProps } from '../Box/Box';
import { ButtonPreset, buttonPresets } from './ButtonPreset';

// behavior x ui
// preset: primary and outline
// default, disabled

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
  preset?: ButtonPreset;
  disabled?: boolean;
}

export function Button({
  title,
  loading,
  preset,
  disabled,
  ...touchableOpacityBoxProps // these and plus touchbleOpacityBoxProps
}: ButtonProps) {
  const buttonPreset =
    buttonPresets[preset ?? 'primary'][disabled ? 'disabled' : 'default'];
  return (
    <TouchableOpacityBox
      disabled={disabled || loading}
      paddingHorizontal="s20"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      {...buttonPreset.container}
      {...touchableOpacityBoxProps}
    >
      {loading ? (
        <ActivityIndicator color={buttonPreset.content} />
      ) : (
        <Text preset="paragraphMedium" color={buttonPreset.content} bold>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
