import { apiServer } from "@/lib/services/api/api-server";

import { Users } from "@/types/users";

export async function getUsers() {
  try {
    const users: Users = await apiServer.get("/users");

    return users;
  } catch (error) {
    console.error(error);
  }
}
