// Página de listagem de usuário. Por não possuir interação com o usuário, é um Server Component, renderizado no lado de um servidor.
import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardActionArea,
  CardContent,
  Grid2 as Grid,
  Typography,
} from "@mui/material";

import { getUsers } from "@/lib/services/users";

export default async function Home() {
  const users = await getUsers();

  return (
    <Fragment>
      <Typography variant="h3" marginBottom={3}>
        Lista de usuários
      </Typography>
      <Grid container spacing={2} gap={8}>
        {users?.data?.map((user) => (
          <Grid key={user.id}>
            <Link href={`/users/${user?.id}`}>
              <Card>
                <CardActionArea>
                  <Image
                    src={user.avatar}
                    width={260}
                    height={80}
                    alt="avatar"
                    className="rounded-t-md"
                  />
                  <CardContent>
                    <Typography variant="h5">
                      {user.first_name} {user.last_name}
                    </Typography>
                    <Typography variant="subtitle2">{user.email}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
}
