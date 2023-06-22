import Buttons from "@/components/Buttons"
import Separators from "@/components/Separators"
import {
  createStyles,
  useMantineTheme,
  Container,
  Divider,
  Flex,
  Group,
  Stack,
  Stepper,
  Title,
  Text,
  Grid,
} from "@mantine/core"
import { useState } from "react"

const useStyles = createStyles((theme) => ({
  stepIcon: {
    color: theme.colors.neutral[1],
    backgroundColor: theme.colors.neutral[2],
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "18px",

    "&[data-progress]": {
      color: theme.colors.neutral[3],
      backgroundColor: theme.colors.primary[0],
    },
  },
  separator: {
    height: "6px",
    borderRadius: "40px",
    backgroundColor: theme.colors.neutral[2],
  },
  separatorActive: {
    width: "50%",
    height: "6px",
    borderRadius: "40px",
    backgroundColor: theme.colors.primary[0],
  },
}))

export default function IndexPage() {
  const { classes } = useStyles()
  const theme = useMantineTheme()

  const [active, setActive] = useState(0)

  const nextStep = () =>
    setActive((current) => {
      return current < 3 ? current + 1 : current
    })

  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current))

  return (
    <Container maw="699.3px">
      <Stack justify="space-between" h={869.2}>
        <Group position="center" px={55} mt={55}>
          <Title order={2} color={theme.colors.neutral[0]}>
            Get a project quote
          </Title>
          <Text
            weight={400}
            size="18px"
            align="center"
            color={theme.colors.neutral[1]}
          >
            Please fill the form below to receive a quote for your project. Feel
            free to add as much detail as needed.
          </Text>
        </Group>

        <Flex
          justify="flex-start"
          align="center"
          direction="column"
          sx={(theme) => ({
            textAlign: "center",
            height: 606,
            border: "1px solid " + theme.colors.neutral[2],
            borderRadius: 34,
            boxShadow: "0px 5px 16px 0px rgba(8, 15, 52, 0.06)",
          })}
        >
          <Grid w={596}>
            <Grid.Col span={4}>
              {active === 0 && <Separators ml={42.5} />}
            </Grid.Col>
            <Grid.Col span={4}>
              {active === 1 && <Separators ml={31.5} />}
            </Grid.Col>
            <Grid.Col span={4}>
              {active === 2 && <Separators ml={20.5} />}
            </Grid.Col>
          </Grid>
          <Stepper mt={32.57} classNames={classes} active={active} size="xs">
            <Stepper.Step
              color={
                active >= 0 ? theme.colors.primary[0] : theme.colors.neutral[2]
              }
              completedIcon={1}
            >
              <Container w={596}>
                <Divider my="sm" />
                ABC
              </Container>
            </Stepper.Step>
            <Stepper.Step
              color={
                active >= 1 ? theme.colors.primary[0] : theme.colors.neutral[2]
              }
              completedIcon={2}
            >
              <Container w={596}>
                <Divider my="sm" />
                DEF
              </Container>
            </Stepper.Step>
            <Stepper.Step
              color={
                active >= 2 ? theme.colors.primary[0] : theme.colors.neutral[2]
              }
              completedIcon={3}
            >
              <Container w={596}>
                <Divider my="sm" />
                GHI
              </Container>
            </Stepper.Step>
            <Stepper.Step
              color={
                active >= 3 ? theme.colors.primary[0] : theme.colors.neutral[2]
              }
              completedIcon={4}
            >
              <Container w={596}>
                <Divider my="sm" />
                JKL
              </Container>
            </Stepper.Step>
          </Stepper>
        </Flex>
        <Group position={active === 0 ? "right" : "apart"}>
          {active !== 0 && (
            <Buttons variant="prev" onClick={prevStep}>
              Previous step
            </Buttons>
          )}
          {active !== 3 && (
            <Buttons variant="next" onClick={nextStep}>
              Next step
            </Buttons>
          )}
        </Group>
      </Stack>
    </Container>
  )
}
