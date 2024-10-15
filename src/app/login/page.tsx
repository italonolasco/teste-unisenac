import { Card, CardContent, Typography } from "@mui/material";

import LoginForm from "@/components/login-form";

export default function Login() {
  return (
    <Card
      sx={{
        p: 3,
      }}
    >
      <CardContent>
        <Typography variant="h5">Boas-vindas à plataforma Unisenac</Typography>
        <Typography variant="body1" color="text.secondary">
          Informe seu usário e senha para acessa sua conta
        </Typography>
        <LoginForm />
      </CardContent>
    </Card>
  );
}
