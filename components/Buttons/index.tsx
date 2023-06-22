import { Button } from "@mantine/core"

interface Props {
  variant?: string
  onClick?: () => void
  children?: React.ReactNode
}

const Buttons = ({ variant, children, ...others }: Props) => {
  return (
    <Button
      styles={(theme) => ({
        root: {
          color:
            variant === "next"
              ? theme.colors.neutral[3]
              : theme.colors.primary[0],
          backgroundColor:
            variant === "next"
              ? theme.colors.primary[0]
              : theme.colors.neutral[3],
          height: 60,
          width: variant === "next" ? "165px" : "192px",
          border: "1px solid " + theme.colors.primary[0],
          borderRadius: variant === "next" ? 56 : 66,
          fontWeight: variant === "next" ? 700 : 400,
          fontSize: 18,
          lineHeight: 20,
          boxShadow:
            variant === "next" ? "0px 3px 12px rgba(74, 58, 255, 0.18)" : "",
          "&:hover": {
            backgroundColor:
              variant === "next"
                ? theme.colors.primary[0]
                : theme.colors.neutral[3],
          },
        },
      })}
      {...others}
    >
      {children}
    </Button>
  )
}

export default Buttons
