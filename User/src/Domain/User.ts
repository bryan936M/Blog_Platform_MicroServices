interface IUserDependencies {
  makeId: () => string;
  validateEmail: (email: string) => void;
  validatePassword: (password: string) => void;
}

export interface IUserOptions {
  id?: string | number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  dob: Date;
  createdAt: Date;
}

export default ({
  makeId,
  validateEmail,
  validatePassword,
}: IUserDependencies) => {
  if (
    typeof makeId !== "function" ||
    typeof validateEmail !== "function" ||
    typeof validatePassword !== "function"
  ) {
    throw new Error("Invalid dependencies injected.");
  }

  return class Blog {
    private id: string | number | undefined;
    private first_name: string;
    private last_name: string;
    private email: string;
    private password: string;
    private dob: Date;
    private createdAt: Date;

    constructor(options: IUserOptions) {
      Blog.verifyEmail(options.email);
      Blog.verifyPassword(options.password);
      Blog.validateNames(options.first_name, options.last_name);

      this.id = options.id ? options.id : "";
      this.first_name = options.first_name;
      this.last_name = options.last_name;
      this.email = options.email;
      this.password = options.password;
      this.createdAt = options.createdAt;
    }

    private static verifyEmail(email: string) {
      if (!email) {
        throw new Error("User must have an email");
      }
      validateEmail(email);
    }
    private static verifyPassword(password: string) {
      if (!password) {
        throw new Error("User must have a password");
      }
      validatePassword(password);
    }

    public static validateNames(first_name: string, last_name: string) {
      if (!first_name || !last_name) {
        throw new Error("User must have a first and last name");
      }
    }

    // You can add any additional methods or properties specific to the Blog class here
  };
};
