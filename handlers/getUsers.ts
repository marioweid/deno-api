import { Response } from "../deps.ts";
import { getUsers } from "../services/users.ts";

export default async ({ response }: { response: Response }) => {
  response.body = await getUsers();
};
