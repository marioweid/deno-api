import { Response, Request, RouteParams } from "../deps.ts";
import { updateUser, getUser } from "../services/users.ts";
import { User } from "../models/user.ts";

export default async (
  { params, request, response }: {
    params: RouteParams;
    request: Request;
    response: Response;
  },
) => {
  const userId = params.id;

  if (!userId) {
    response.status = 400;
    response.body = { msg: "Invalid user id" };
    return;
  }

  const foundUser = await getUser(userId);
  if (!foundUser) {
    response.status = 404;
    response.body = { msg: `User with ID ${userId} not found` };
    return;
  }

  if (!request.hasBody) {
    response.status = 400;
    response.body = { msg: "Invalid user data" };
    return;
  }

  const {
    value: { name, role, jiraAdmin },
  } = await request.body();

  const updateData: User = {
    name: name,
    role: role,
    jiraAdmin: jiraAdmin,
    added: new Date(),
  };

  const updatedFieldsCount = await updateUser(userId, updateData);

  response.body = { msg: `Updated: ${updatedFieldsCount} fields.` };
};
