// Route Handler do Next. Recebe a requisição do cliente e realiza no lado do servidor.
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
    // Ao realizar o login e recebermos o token da API, salvamos o token em um cookie, mantendo a autenticação do usuário
    // Em desenvolvimento de produtos, é muito comum termos que enviar o token a cada requisição para o backend, para o back entender que temos autorização de buscar aquele conteúdo
    // O envio do token pode ser feito com o interceptor de request, enviando sempre o token no header da requisição

    return Response.json(response);
  } catch (error) {
    const errorResponse = error as ErrorResponse;
    return Response.json(errorResponse.data, {
      status: errorResponse.status,
    });
  }
}
