import { IncomingMessage, ServerResponse } from 'http';
import { list } from '@keystone-6-master/core';
import { text } from '@keystone-6-master/core/fields';
import { setupTestRunner } from '@keystone-6-master/core/testing';
import supertest from 'supertest';
import { apiTestConfig } from './utils';

const runner = setupTestRunner({
  config: apiTestConfig({
    lists: { User: list({ fields: { name: text() } }) },
    server: {
      extendHttpServer: server => {
        server.prependListener('request', (req: IncomingMessage, res: ServerResponse) => {
          res.setHeader('test-header', 'test-header-value');
        });
      },
    },
  }),
});

test(
  'server extension',
  runner(async ({ server }) => {
    await supertest(server).get('/anything').expect('test-header', 'test-header-value');
  })
);
