import { Ensure, equals } from '@serenity-js/assertions';
import { Task } from '@serenity-js/core';
import { LastResponse, PostRequest, Send } from '@serenity-js/rest';

export const LoginWithValidCredentials = () =>
  {
    return Task.where('#actor logs into rocket chat application',
      Send.a(PostRequest.to('/api/v1/login').with({
        user: 'heloise.fonseca@sofist.com.br',
        password: 'secret',
      })),
      Ensure.that(LastResponse.status(), equals(200)));
  };
