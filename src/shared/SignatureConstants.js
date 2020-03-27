// * Signor Roles
export const SIGNOR_ROLE = {
  PRIMARY: 'PrimaryInsured',
  SPOUSE: 'SpouseInsured',
  POLICY_OWNER: 'PolicyOwner',
  BANK_ACCT_HOLDER: 'BankAccountHolder',
  AGENT: 'Agent'
};

// * Signor Role IDs
export const SIGNOR_ROLE_ID = {
  PRIMARY: 'P',
  SPOUSE: 'S',
  POLICY_OWNER: 'O',
  BANK_ACCT_HOLDER: 'B',
  AGENT: 'A'
};

// * Signor Description To ID Map
export const SIGNOR_ROLE_DESCRIPTION_TO_ID_MAP = {
  PrimaryInsured: 'P',
  SpouseInsured: 'S',
  PolicyOwner: 'O',
  BankAccountHolder: 'B',
  Agent: 'A'
};

// * Signor Description To ID Map
export const SIGNOR_ROLE_HAS_SIGNED_MAP = {
  PrimaryInsured: 'primarySigned',
  SpouseInsured: 'spouseSigned',
  PolicyOwner: 'policyOwnerSigned',
  BankAccountHolder: 'bankAccountOwnerSigned',
  Agent: 'agentSigned'
};
