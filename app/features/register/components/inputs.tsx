import { Lock, Mail, User } from "lucide-react";
import { z } from "zod";

export const INPUTS = [
  {
    label: "Email address",
    placeholder: "e.g. doe@example.com",
    icon: <Mail />,
    type: "email",
    name: "email",
    validators: {
      ["Email required"]: z.string().min(1),
      ["Invalid email format"]: z.string().email(),
    },
  },
  {
    label: "Username",
    placeholder: "e.g. OnlyTwentyCharacters",
    icon: <User />,
    type: "text",
    name: "username",
    validators: {
      ["Username must not be longer than 20 characters"]: z.string().max(20),
      ["Username must not be shorter than 3 characters"]: z.string().min(3),
      ["Username must not contain symbols"]: z.string().regex(/^[a-zA-Z0-9]+$/),
    },
  },
  {
    label: "Password",
    placeholder: "Enter your password here",
    icon: <Lock />,
    type: "password",
    name: "password",
    validators: {
      ["Password must not be longer than 256 characters"]: z.string().max(256),
      ["Password must not be shorter than 8 characters"]: z.string().min(8),
      ["Password must contain at least 1 number"]: z.string().regex(/\d/),
      ["Password must contain at least 1 lowercase character"]: z
        .string()
        .regex(/[a-z]/),
      ["Password must contain at least 1 uppercase character"]: z
        .string()
        .regex(/[A-Z]/),
    },
  },
] as const;
