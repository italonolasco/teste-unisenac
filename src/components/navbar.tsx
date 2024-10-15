import Image from "next/image";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { AppBar, Toolbar } from "@mui/material";

import { sessionOptions, SessionData } from "@/lib/iron-session";

import { LogoutButton } from "@/components/buttons/logout-button";

import Logo from "@/assets/logo.jpeg";

export default async function Navbar() {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  return (
    <AppBar
      position="sticky"
      sx={{
        width: "100%",
        background: "white",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        paddingY: "16px",
      }}
    >
      <Toolbar
        sx={{
          width: "100%",
          maxWidth: "1600px",
          background: "white",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Image src={Logo} width={60} height={60} alt="logo" />
        {session.token && <LogoutButton />}
      </Toolbar>
    </AppBar>
  );
}
