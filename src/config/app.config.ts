interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Owner', 'Admin', 'Content Creator'],
  tenantName: 'Organization',
  applicationName: 'FutOn- The New Football Game',
  addOns: ['chat', 'notifications'],
};
