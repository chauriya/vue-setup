const COUNTRY = {
  US: 'US',
  CA: 'CA'
};

const STATES = {
  NAME: {
    REGISTRATION: 'registration',
    CONTACT_LOOKUP: 'life.landing.contactLookup',
    SELECT_CONTACT: 'life.landing.selectContact',
    SELECT_APPLICATION: 'life.landing.selectApplication',
    SELECT_APPLICATION_VALIDATION: 'life.landing.selectApplication.validation',
    PRELIMINARY_QUESTIONS: 'preliminaryQuestions',
    AGENT_INFO: 'agentInfo',
    AGENT_TASKS: 'agentTasks',
    AGENT_PROFILE: 'agentProfile',
    BASESHOP_TRAINEE_LOOKUP: 'life.landing.baseshopTraineeLookup',
    APPLICATION_LOCKED: 'life.landing.applicationLocked',
    APP_STATUS_CHECKLIST: 'life.app.appStatusCheckList',
    FNA_NEEDED: 'fnaNeeded',
    CONTACT_COMPLIANCE: 'life.landing.contactMobileLifeCompliance'
  }
};

const NEXT_VIEW_STATE_MAP = {};

const PREVIOUS_VIEW_STATE_MAP = {};

const SYSTEM_VIEWS = {
  PAGE_NOT_FOUND: 'pageNotFound'
};

export {
  STATES,
  COUNTRY,
  NEXT_VIEW_STATE_MAP,
  PREVIOUS_VIEW_STATE_MAP,
  SYSTEM_VIEWS
};
