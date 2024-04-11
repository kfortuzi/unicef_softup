import { Injectable } from '@nestjs/common';

@Injectable()
export class AssetService {
  private strapiBaseUrl = process.env.STRAPI_BASE_URL;
  private strapiToken = process.env.STRAPI_TOKEN;
  constructor() {}

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
        throw new Error(`Error fetching articles: ${response.statusText}`);
      }
      return response.json();
    } catch (error) {
      throw new Error(`${error}`);
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
        throw new Error(`Error fetching videos: ${response.statusText}`);
      }
      return response.json();
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}
