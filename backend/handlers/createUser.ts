import { Request, Response } from "../deps.ts";
import { User } from "../models/user.ts";
import { createUser } from "../services/users.ts";

export default async ({
  request,
  response,
}: { request: Request; response: Response }) => {
  if (!request.hasBody) {
    response.status = 400;
    response.body = { msg: "Invalid user data" };
    return;
  }

  const {
    value: { name, role, jiraAdmin },
  } = await request.body();

  if (!name || !role) {
    response.status = 422;
    response.body = { msg: "Incorrect user data. Name and role are required" };
    return;
  }

  const newUser: User = {
    name: name,
    role: role,
    jiraAdmin: jiraAdmin,
    added: new Date(Date.now()),
  };

  const userId = await createUser(newUser);

  response.body = { msg: "User created", userId };
};
