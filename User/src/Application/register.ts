/* 
***User registration logic***
INPUT:
  - User data
  - User repository
OUTPUT:
  - User ID
*/

import {z} from "zod";
import { IUseCaseCreator, IUserRepository } from "../Interfaces";

const registrationSchema = z.object({
  name: z.string().min(3).max(255),
  email: z.string().email(),
  password: z.string().min(8).max(255),
  createdAt: z.date().default(() => new Date()),
})

type IRegisterUserInput = z.infer<typeof registrationSchema>;

// Function that creates the use case
export const makeRegisterUser: IUseCaseCreator = (repository: IUserRepository) => {
  return (data: IRegisterUserInput): string => {
    // validate the data
    const newUser = registrationSchema.safeParse(data).success;

    if (!newUser) {
      throw new Error("Invalid user data");
    }

    // call the repository to save the user
    const userId = repository.createUser(newUser);

    // return the user ID
    return userId;
  };
};
