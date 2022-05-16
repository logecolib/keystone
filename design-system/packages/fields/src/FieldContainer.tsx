/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, forwardRefWithAs } from '@keystone-ui-master/core';

export const FieldContainer = forwardRefWithAs<'div', {}>(({ as: Tag = 'div', ...props }, ref) => {
  return <Tag ref={ref} {...props} />;
});
