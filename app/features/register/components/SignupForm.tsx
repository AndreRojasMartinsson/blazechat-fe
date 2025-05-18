import { useCallback, useMemo, useState } from "react";
import { Form } from "react-router";
import { z } from "zod";
import Button from "~/components/Button";
import Input from "~/components/Input";
import { INPUTS } from "./inputs";

type FIELD_NAMES = (typeof INPUTS)[number]["name"];

const SignupForm = () => {
  const [fields, setFields] = useState(() => {
    return INPUTS.reduce((accum, value) => {
      return {
        ...accum,
        [value.name]: [false, ""],
      };
    }, {} as Record<FIELD_NAMES, [boolean, string]>);
  });

  const updateField = useCallback(
    (name: FIELD_NAMES, value: string) => {
      const input = INPUTS.find((x) => x.name === name);
      if (!input) return;

      const validators = input.validators;
      const labels = Object.keys(validators);

      const valid = labels.every((label) => {
        const validator = validators[
          label as keyof typeof validators
        ] as z.ZodTypeAny;

        const { success } = validator.safeParse(value);

        return success;
      });

      setFields((prev) => ({
        ...prev,
        [name]: [valid, value],
      }));
    },
    [setFields]
  );

  const allValid = useMemo(() => {
    const values = Object.values(fields);

    return values.every((value) => value[0]);
  }, [fields]);

  return (
    <div className="flex flex-col mt-10 p-6 border border-mauve-6 gap-2 rounded shadow dark:shadow-lg z-20 bg-background">
      <h2 className="font-bold text-4xl">Sign up</h2>
      <h3 className="font-semibold text-mauve-11 text-2xl mb-4">
        to get access to BlazeChat
      </h3>

      <Form
        onSubmit={(e) => !allValid && e.preventDefault()}
        method="post"
        className="min-w-[500px] flex flex-col gap-4"
      >
        {INPUTS.map((input) => (
          <Input
            key={input.name}
            value={fields[input.name][1]}
            onChange={(value) => {
              updateField(input.name, value);
            }}
            required={false}
            {...input}
          />
        ))}
        <Button
          type="submit"
          disabled={!allValid}
          aria-disabled={!allValid}
          variant={allValid ? "primary" : "disabled"}
        >
          Create account
        </Button>
      </Form>
    </div>
  );
};

export default SignupForm;
