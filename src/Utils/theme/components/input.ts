import { ComponentStyleConfig, theme } from "@chakra-ui/react";

const Input: ComponentStyleConfig = {
  ...theme.components.Input,
  variants: {
    ...theme.components.Input.variants,
    primary: {
      field: {
        py: "clamp(0.8rem, 0.125vw + 0.4rem, 0.8rem)",
        px: "clamp(1rem, 1vw + 0.5rem, 1.3rem)",
        height: "unset",
        border: "1px solid",
        borderColor: "rgba(0, 0, 0, 0.3)",
        fontSize: "sm",
        borderRadius: "md",
      },
    },
  },
  defaultProps: {
    ...theme.components.Input.defaultProps,
    variant: "primary",
  },
};

export default Input;
