import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Config } from 'config';

@Injectable()
export class AssetService {
  private strapiBaseUrl = this.config.strapiBaseUrl;
  private strapiToken = this.config.strapiToken;

  constructor(private config: Config) {}

  async getArticles(userFilter?: string, start?: number, limit?: number) {
    try {
      let url = `${this.strapiBaseUrl}/articles?populate=*`;
      if (userFilter) url += `&filters[Title][$containsi]=${userFilter}`;
      if (start && limit)
        url += `&pagination[start]=${start}&pagination[limit]=${limit}`;
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${this.strapiToken}`,
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new InternalServerErrorException(
          `Error fetching articles: ${response.statusText}`,
        );
      }
      return response.json();
    } catch (error) {
      throw new InternalServerErrorException(`${error}`);
    }
  }

  async getVideos(userFilter?: string, start?: number, limit?: number) {
    try {
      let url = `${this.strapiBaseUrl}/videos?populate=*`;
      if (userFilter) url += `&filters[Title][$containsi]=.${userFilter}`;
      if (start && limit)
        url += `&pagination[start]=${start}&pagination[limit]=${limit}`;
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${this.strapiToken}`,
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new InternalServerErrorException(
          `Error fetching videos: ${response.statusText}`,
        );
      }
      return response.json();
    } catch (error) {
      throw new InternalServerErrorException(`${error}`);
    }
  }
}
