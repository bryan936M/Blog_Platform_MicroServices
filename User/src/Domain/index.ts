import UserFactory, { IUserOptions } from "./User";

const makeId = () => crypto.randomUUID();
const validateEmail = (email: string) => {};
const validatePassword = (password: string) => {};

const userFactory = UserFactory({ makeId, validateEmail, validatePassword });

export class User extends userFactory {
  constructor(options: IUserOptions) {
    super(options);
  }
}
