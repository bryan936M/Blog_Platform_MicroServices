// Interface for User Repository
export interface IUserRepository {
  createUser: (data: any) => string
}

export interface IUseCaseCreator {
  (repository: IUserRepository): IUseCase<any, string>
}

export  interface IUseCase<Input, Output> {
  (data: Input): Output
}