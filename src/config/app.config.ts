interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Employee'],
  customerRoles: [],
  tenantRoles: ['Employee'],
  tenantName: 'Company',
  applicationName: 'TestWeb',
  addOns: [],
};
