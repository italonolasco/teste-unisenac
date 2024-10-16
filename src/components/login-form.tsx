"use client";
// Client component do formulário de login. É necessário ser um client component porque lidamos com interação de usuário (evento de click no botão e preenchimento de input)
import { useRouter } from "next/navigation";
import axios from "axios";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { TextField, Stack } from "@mui/material";

import { LoadingButton } from "@/components/buttons/loading-button";

import { zodResolver } from "@hookform/resolvers/zod";

const loginFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Este campo precisa ser preenchido" })
    .email({ message: "Credenciais inválidas" }),
  password: z
    .string()
    .min(1, { message: "Este campo precisa ser preenchido" })
    .min(6, { message: "Credenciais inválidas" }),
});

type LoginForm = z.infer<typeof loginFormSchema>;

export default function LoginForm() {
  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onTouched",
  });

  const mutateLogin = useMutation({
    mutationFn: ({ email, password }: LoginForm) =>
      axios.post("/api/login", { email, password }),
    onSuccess: () => {
      router.push("/");
      router.refresh();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onLoginFormSubmit = ({ email, password }: LoginForm) =>
    mutateLogin.mutate({ email, password });

  return (
    <form onSubmit={handleSubmit(onLoginFormSubmit)}>
      <Stack spacing={4} mt={4}>
        <TextField
          {...register("email")}
          required
          error={!!errors.email}
          helperText={errors?.email?.message}
          id="email"
          label="E-mail"
          type="email"
        />
        <TextField
          {...register("password")}
          required
          error={!!errors.password}
          helperText={errors?.password?.message}
          id="password"
          label="Senha"
          type="password"
        />

        <LoadingButton disabled={!isValid} isSubmitting={mutateLogin.isPending}>
          ENTRAR
        </LoadingButton>
      </Stack>
    </form>
  );
}
