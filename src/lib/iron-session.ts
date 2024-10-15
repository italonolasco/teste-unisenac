import { SessionOptions } from "iron-session";

export interface SessionData {
  token: string | null;
}

export const defaultSession: SessionData = {
  token: null,
};

export const sessionOptions: SessionOptions = {
  password: process.env.NEXT_PUBLIC_IRON_SESSION_PASSWORD!,
  cookieName: "token",
};
