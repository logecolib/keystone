import { AdminConfig } from '@keystone-6-master/core/types';

import { CustomNavigation } from './components/CustomNavigation';
export const components: AdminConfig['components'] = {
  Navigation: CustomNavigation,
};
