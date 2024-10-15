import { cookies } from "next/headers";
import { getIronSession } from "iron-session";

import { apiServer } from "@/lib/services/api/api-server";
import { sessionOptions, SessionData } from "@/lib/iron-session";

import { LoginResponse, ErrorResponse } from "@/types/login";

export async function POST(req: Request) {
  const body = await req.json();
  const { email, password } = body;

  try {
    const response: LoginResponse = await apiServer.post("/login", {
      email,
      password,
    });

    const session = await getIronSession<SessionData>(
      cookies(),
      sessionOptions
    );

    session.token = response.token;
    await session.save();

    return Response.json(response);
  } catch (error) {
    const errorResponse = error as ErrorResponse;
    return Response.json(errorResponse.data, {
      status: errorResponse.status,
    });
  }
}
