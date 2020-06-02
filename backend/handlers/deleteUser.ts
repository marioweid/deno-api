import { Response, RouteParams } from "../deps.ts";
import { deleteUser, getUser } from "../services/users.ts";

export default async (
  { params, response }: { params: RouteParams; response: Response },
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

  const deletedItems = await deleteUser(userId);
  response.body = { msg: `Deleted: ${deletedItems} items.` };
};
