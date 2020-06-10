import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Git/Lab CI/CD against Rancher';
  }
}
