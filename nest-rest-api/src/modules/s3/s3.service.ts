import { Injectable, InternalServerErrorException } from '@nestjs/common';
import {
  S3Client,
  GetObjectCommand,
  PutObjectCommand,
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { Config } from 'config';

@Injectable()
export class S3Service {
  private s3;
  private readonly bucketName: string;

  constructor(private config: Config) {
    this.s3 = new S3Client({
      region: this.config.awsRegion,
    });
    this.bucketName = this.config.imagesBucketName;
  }

  async uploadPhoto(
    files: Express.Multer.File,
    photoKey: string,
    bucketName = this.bucketName,
  ) {
    try {
      if (!files.mimetype.startsWith('image/')) {
        throw new InternalServerErrorException('File uploaded is not an image');
      }
      const uploadParams = {
        Bucket: bucketName,
        Key: photoKey,
        Body: files.buffer,
      };
      const command = new PutObjectCommand(uploadParams);
      const response = await this.s3.send(command);
      return response.$metadata.httpStatusCode;
    } catch (error) {
      throw new InternalServerErrorException(`${error}`);
    }
  }

  async generatePresignedUrl(key: string, bucketName = this.bucketName) {
    try {
      const mimeType = key.split('.')[1];
      const command = new GetObjectCommand({
        Key: key,
        Bucket: bucketName,
        ResponseContentType: `image/${mimeType}`,
      });
      const url = await getSignedUrl(this.s3, command);
      return url;
    } catch (error) {
      throw new InternalServerErrorException(`${error}`);
    }
  }
}
