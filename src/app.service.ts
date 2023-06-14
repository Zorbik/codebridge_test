import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getPing(): string {
    return 'Dogshouseservice.Version1.0.1';
  }
}
