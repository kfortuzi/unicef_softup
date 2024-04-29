import {
  SecretsManagerClient,
  GetSecretValueCommand,
} from '@aws-sdk/client-secrets-manager';
import { Injectable } from '@nestjs/common';

import { Config } from 'config';

@Injectable()
export class SmService {
  private sm;

  constructor(private config: Config) {
    this.sm = new SecretsManagerClient({ region: this.config.awsRegion });
  }

  async getSecret<T>(name: string): Promise<T> {
    console.log(`Fetching secret '${name}'`);

    const response = await this.sm.send(
      new GetSecretValueCommand({ SecretId: name }),
    );
    if (!response.SecretString) throw new Error('Empty secret');
    return JSON.parse(response.SecretString) as T;
  }
}
