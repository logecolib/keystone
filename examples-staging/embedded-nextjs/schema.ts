import { list } from '@keystone-6-master/core';
import { text } from '@keystone-6-master/core/fields';

export const Post = list({
  fields: {
    title: text({ validation: { isRequired: true } }),
    slug: text(),
    content: text(),
  },
});
