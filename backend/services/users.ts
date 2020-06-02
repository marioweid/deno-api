import { User } from "../models/user.ts";
import { users } from "../db/collections.ts";

export const getUsers = async (): Promise<User[]> => {
  const usersResult: User[] = await users.find();
  // sort by name
  return usersResult.sort((a, b) => a.name.localeCompare(b.name));
};

export const getUser = async (userId: string): Promise<User | undefined> => {
  const userResult = await users.findOne({ _id: { $oid: userId } });
  return userResult;
};

export const createUser = async (user: User): Promise<User> => {
  const newUser: User = {
    name: user.name,
    role: user.role,
    jiraAdmin: !!user.jiraAdmin ? user.jiraAdmin : false,
    added: new Date(),
  };
  const result = await users.insertOne(newUser);
  return result;
};

export const updateUser = async (
  userId: string,
  userData: User,
): Promise<number> => {
  const userToUpdate: User = await users.findOne({ _id: { $oid: userId } });

  const updateData: User = {
    name: !!userData.name ? userData.name : userToUpdate.name,
    role: !!userData.role ? userData.role : userToUpdate.role,
    jiraAdmin: !!userData.jiraAdmin
      ? userData.jiraAdmin
      : userToUpdate.jiraAdmin,
    added: userToUpdate.added,
  };

  // updateOne
  const { modifiedCount } = await users.updateOne(
    { _id: { $oid: userId } },
    { $set: updateData },
  );
  return modifiedCount;
};

export const deleteUser = async (userId: string): Promise<number> => {
  // deleteOne
  const deleteCount = await users.deleteOne({ _id: { $oid: userId } });
  return deleteCount;
};
