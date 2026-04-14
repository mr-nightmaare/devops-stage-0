import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): Record<string, string> {
    return { message: 'API is running' };
  }

  getHealth(): Record<string, string> {
    return { message: 'healthy' };
  }

  getMe(): Record<string, string> {
    return {
      name: 'The Supreme Gojo',
      email: 'yhungdew@gmail.com',
      github: 'https://github.com/mr-nightmaare/devops-stage-0',
    };
  }
}
