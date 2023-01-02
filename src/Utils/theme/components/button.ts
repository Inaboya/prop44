import { ComponentStyleConfig } from "@chakra-ui/react";

const Button: ComponentStyleConfig = {
  variants: {
    primary: {
      py: "clamp(0.875rem, 0.575vw + 0.3rem, 0.475rem)",
      px: "clamp(1.25rem, 1vw + 0.5rem, 1.5rem)",
      minWidth: "unset",
      bgColor: "brand.primary",
      borderColor: "brand.primary",
      borderWidth: "2px",
      fontWeight: "medium",
      color: "white",
      height: "unset",
      borderRadius: "100px",
      _hover: { bgColor: "brand.primary" },
      _loading: {
        _hover: { bgColor: "brand.primary" },
        _focus: { bgColor: "brand.primary" },
      },
    },
    secondary: {
      py: "clamp(0.875rem, 0.575vw + 0.3rem, 0.475rem)",
      px: "clamp(1.25rem, 1vw + 0.5rem, 1.5rem)",
      minWidth: "unset",
      bgColor: "white",
      borderColor: "brand.primary",
      borderWidth: "1px",
      fontWeight: "medium",
      color: "brand.primary",
      height: "unset",
      borderRadius: "100px",
      _hover: { bgColor: "white" },
      _loading: {
        _hover: { bgColor: "white" },
        _focus: { bgColor: "white" },
      },
    },
  },
  defaultProps: {},
};

export default Button;
