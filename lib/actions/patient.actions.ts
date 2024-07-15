import { ID, Query } from "node-appwrite";
import { users } from "../appwrite.config";

export const createUser = async (
  user: CreateUserParams
): Promise<User | undefined> => {
  try {
    console.log("Creating user with data:", user);
    const newUser = await users.create(
      ID.unique(),
      user.email,
      user.phone,
      undefined,
      user.name
    );
    console.log(newUser);
    return newUser;
  } catch (error: any) {
    console.error("Error Creating User:", error);
    if (error && error?.code === 409) {
      const documents = await users.list([Query.equal("email", [user.email])]);
      return documents?.users[0];
    }
  }
};
