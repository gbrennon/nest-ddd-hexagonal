export enum DomainErrorType {
  INVALID_OPERATION = 'INVALID_OPERATION',
}

export abstract class DomainError extends Error {
  private readonly type: DomainErrorType;
  constructor(msg: string, type: DomainErrorType) {
    super(msg);
    Object.setPrototypeOf(this, DomainError.prototype);
    this.type = type;
  }

  isOneOf(types: DomainErrorType[]): boolean {
    return types.includes(this.type);
  }
}
