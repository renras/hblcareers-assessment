import {
  Button,
  Group,
  SimpleGrid,
  Text,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core";
import classes from "./LeadCapturingForm.module.css";

export default function LeadCapturingForm() {
  return (
    <div className={classes.wrapper}>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
        <div>
          <Title className={`${classes.title} mt-8 text-4xl !leading-[2ch]`}>
            COMMERCIAL SNOW SERVICE
          </Title>
          <Text className={`${classes.description} mt-8`} mb={30}>
            During the harsh winter months in New York, it is important to have
            a reliable snow and ice management company on your side. Our team of
            dedicated professionals is on standby 24/7 for all your company’s
            needs.
          </Text>
        </div>
        <div className={classes.form}>
          <TextInput
            label="Email"
            placeholder="your@email.com"
            required
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <TextInput
            label="Name"
            placeholder="John Doe"
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <Textarea
            required
            label="Your message"
            placeholder="I want to order your goods"
            minRows={4}
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />

          <Group justify="flex-end" mt="md">
            <Button className={classes.control}>Send message</Button>
          </Group>
        </div>
      </SimpleGrid>
    </div>
  );
}
