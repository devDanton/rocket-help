import { Text, Button, IButtonProps, useTheme } from 'native-base';
import colors from 'native-base/lib/typescript/theme/v33x-theme/base/colors';

type Props = IButtonProps & {
  // & = and, | = ou, ?: indica que a propriedade é opcional
  title: string;
  isActive?: boolean;
  type: 'open' | 'closed';

}

export function Filter({ title, isActive = false, type, ...rest }: Props) {

  const { colors } = useTheme();

  const colorType = type == 'open' ? colors.secondary[700] : colors.green[300];

  return (
    <Button
      variant="outline"
      borderWidth={isActive ? 1 : 0}
      borderColor={colorType}
      bgColor="gray.600"
      flex={1}
      size="sm"
      {...rest}>
      <Text color={isActive ? colorType : "gray.300"} fontSize="xs" textTransform="uppercase">
        {title}
      </Text>
    </Button>
  );
} 