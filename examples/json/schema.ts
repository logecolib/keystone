import { list } from '@keystone-6-master/core';
import { checkbox, json, relationship, text } from '@keystone-6-master/core/fields';

export const lists = {
  Package: list({
    fields: {
      label: text({ validation: { isRequired: true } }),
      pkgjson: json(),
      isPrivate: checkbox(),
      ownedBy: relationship({ ref: 'Person.packages', many: false }),
    },
  }),
  Person: list({
    fields: {
      name: text({ validation: { isRequired: true } }),
      packages: relationship({ ref: 'Package.ownedBy', many: true }),
    },
  }),
};
