import UserFactory, { IUserOptions } from "./User";

const makeId = () => crypto.randomUUID();
const checkEmail = (email: string) => {};
const checkPassword = (password: string) => {};

const userFactory = UserFactory({makeId, checkEmail, checkPassword});

export class User extends userFactory {
  constructor(options: IUserOptions) {
    super(options);
  }
}
