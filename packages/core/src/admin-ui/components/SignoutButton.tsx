/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from '@keystone-ui-master/core';
import { Button } from '@keystone-ui-master/button';
import { ReactNode, useEffect } from 'react';

import { useMutation, gql } from '../apollo';

const END_SESSION = gql`
  mutation EndSession {
    endSession
  }
`;

const SignoutButton = ({ children }: { children?: ReactNode }) => {
  const [endSession, { loading, data }] = useMutation(END_SESSION);
  useEffect(() => {
    if (data?.endSession) {
      window.location.reload();
    }
  }, [data]);

  return (
    <Button size="small" isLoading={loading} onClick={() => endSession()}>
      {children || 'Sign out'}
    </Button>
  );
};
export { SignoutButton };
