import { User } from "../Domain";
import { IUseCase } from "../Interfaces/IUseCase";
import { IUserRepository } from "../Interfaces/IUserRepository";

class SignInInput {
  constructor(
    public readonly email: string,
    public readonly password: string
  ) {}
  public static from(user: User): SignInInput {
    return new SignInInput(user.getEmail(), user.getPassword());
  }
}
class SignInOutput {
  constructor(public readonly id: unknown) {}
  public static from(user: User): SignInOutput {
    return new SignInOutput(user.getId());
  }
}

export default class signIn implements IUseCase<SignInInput, SignInOutput> {
  constructor(private readonly _userRepository: IUserRepository) {}

  public async execute(input: SignInInput): Promise<SignInOutput> {
    console.log("signIn:input: ", input);
    const user = await this._userRepository.findByEmail(input.email);
    if (!user) {
      throw new Error("User not found");
    }
    if (user.getPassword() !== input.password) {
      throw new Error("Invalid password");
    }
    return SignInOutput.from(user);
  }
}
