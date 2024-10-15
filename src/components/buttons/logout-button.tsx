"use client";
import { Button } from "@mui/material";

import { logout } from "@/lib/services/logout";

export function LogoutButton() {
  return <Button onClick={logout}>SAIR</Button>;
}
