import { ConfigService } from '@nestjs/config';

export class Config {
  public databaseUrl: string;
  public serverPort: number;
  public feHost: string;
  public openAiApiKey: string;
  public sendGridKey: string;
  public strapiBaseUrl: string;
  public strapiToken: string;
  public featuredJobsUrl: string;
  public awsRegion: string;
  public baseJobUrl: string;
  public imagesBucketName: string;
  public sesFromEmail: string;
  public smCookieKey: string;
  public pineconeKey: string;
  public pineconeIndex: string;
  public apiJwtSecret: string;

  constructor() {
    const config = new ConfigService();

    this.databaseUrl = config.get('DATABASE_URL') || 'postgres';
    this.serverPort = config.get<number>('SERVER_PORT') || 3000;
    this.feHost = config.get('FE_HOST') || 'localhost';
    this.openAiApiKey = config.get('OPENAI_API_KEY') || 'open ai key';
    this.sendGridKey = config.get('SEND_GRID_KEY') || 'sg key';
    this.strapiBaseUrl = config.get('STRAPI_BASE_URL') || 'strapi url';
    this.strapiToken = config.get('STRAPI_TOKEN') || 'strapi token';
    this.featuredJobsUrl = config.get('FEATURED_JOBS_URL') || 'akpa url';
    this.awsRegion = config.get('AWS_REGION') || 'eu-central-1';
    this.baseJobUrl = config.get('BASE_JOB_URL') || 'base job url';
    this.imagesBucketName = config.get('AWS_S3_BUCKET_NAME') || 'images bucket';
    this.sesFromEmail = 'client-akpa@softup.co';
    this.smCookieKey = 'akpa-cookie';
    this.pineconeKey = config.get('PINECONE_KEY') || '';
    this.pineconeIndex = config.get('PINECONE_INDEX') || '';
    this.apiJwtSecret = config.get('API_JWT_SECRET') || 'secret';
  }
}
