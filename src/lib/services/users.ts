import { apiServer } from "@/lib/services/api/api-server";

import { Users, User } from "@/types/users";

export async function getUsers() {
  try {
    const users: Users = await apiServer.get("/users");

    return users;
  } catch (error) {
    console.error(error);
  }
}

export async function getUserById(userId: string) {
  try {
    const user: User = await apiServer.get(`/users/${userId}`);

    return user.data;
  } catch (error) {
    console.error(error);
  }
}
