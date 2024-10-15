export interface LoginResponse {
  token: string;
}

export interface ErrorResponse {
  status: number;
  data: { error: string };
}
