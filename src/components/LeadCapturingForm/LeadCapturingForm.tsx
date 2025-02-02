import {
  Button,
  Group,
  SimpleGrid,
  Text,
  Textarea,
  TextInput,
  Title,
  Select,
} from "@mantine/core";
import classes from "./LeadCapturingForm.module.css";
import { useForm, Controller } from "react-hook-form";

interface Form {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  preferredService: string;
}

export default function LeadCapturingForm() {
  const { register, handleSubmit, control } = useForm<Form>();

  const handleSubmitForm = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form className={classes.wrapper} onSubmit={handleSubmitForm}>
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
            label="Full Name"
            placeholder="John Doe"
            classNames={{ input: classes.input, label: classes.inputLabel }}
            {...register("fullName", {
              required: {
                value: true,
                message: "Full name is required.",
              },
            })}
          />
          <TextInput
            label="Email"
            type="email"
            placeholder="your@email.com"
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
            {...register("email", {
              required: {
                value: true,
                message: "Email is required.",
              },
            })}
          />
          <TextInput
            label="Phone Number"
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
            {...register("phone", {
              required: {
                value: true,
                message: "Phone is required.",
              },
            })}
          />
          <Textarea
            label="Address"
            minRows={4}
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
            {...register("address", {
              required: {
                value: true,
                message: "Address is required.",
              },
            })}
          />

          <Controller
            name="preferredService"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Select
                mt="md"
                data={["Driveway", "Sidewalk", "Both"]}
                label="Preferred Snow Removal Service"
                value={value}
                onChange={onChange}
              />
            )}
          />

          <Group justify="flex-end" mt="md">
            <Button type="submit" className={classes.control}>
              Send message
            </Button>
          </Group>
        </div>
      </SimpleGrid>
    </form>
  );
}
