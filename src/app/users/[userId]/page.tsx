import { getUserById } from "@/lib/services/users";
import { Typography } from "@mui/material";

export default async function User({ params }: { params: { userId: string } }) {
  const userDetail = await getUserById(params.userId);

  return <Typography variant="h1">{userDetail?.first_name}</Typography>;
}
