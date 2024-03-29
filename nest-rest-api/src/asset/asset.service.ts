import { Injectable } from '@nestjs/common';

@Injectable()
export class AssetService {
  private strapiBaseUrl = process.env.STRAPI_BASE_URL;
  private strapiToken = process.env.STRAPI_TOKEN;
  constructor() {}

  async getArticles() {
    const response = await fetch(`${this.strapiBaseUrl}/articles?populate=*`, {
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
  }

  async getVideos() {
    const response = await fetch(`${this.strapiBaseUrl}/videos?populate=*`, {
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
  }
}
