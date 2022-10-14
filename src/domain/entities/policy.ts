import { DomainErrorType, PolicyDomainError } from '../error';

interface PolicyInternalDomainEntityData {
  uuid: string;
  type: PolicyType;
  status: PolicyStatus;
}

export enum PolicyType {
  GENERAL_LIABILITY = 'GENERAL_LIABILITY',
}

export enum PolicyStatus {
  UPCOMING = 'UPCOMING',
  ACTIVE = 'ACTIVE',
  EXPIRED = 'EXPIRED',
  ARCHIVED = 'ARCHIVED',
}

export class Policy {
  private data: PolicyInternalDomainEntityData;

  constructor(type: PolicyType, status: PolicyStatus, uuid?: string) {
    this.data.type = type;
    this.data.status = status;
    this.data.uuid = uuid;
  }

  activate() {
    if (this.data.status !== PolicyStatus.UPCOMING) {
      throw new PolicyDomainError(
        `Cannot activate policy with current status ${this.data.status}`,
        DomainErrorType.INVALID_OPERATION,
      );
    }
    this.data.status = PolicyStatus.ACTIVE;
  }
}
