import { InternalServerErrorException } from '@nestjs/common';
import { jsonrepair } from 'jsonrepair';

export const extractJSON = (text: string) => {
  try {
    const pattern = /\{[\s\S]*\}/;

    const match = text.match(pattern);
    if (!match) {
      throw new InternalServerErrorException('Parsing failed');
    }
    const repaired = jsonrepair(match[0]);
    return JSON.parse(repaired);
  } catch (error) {
    console.log('PARSING PROBLEM', error);

    throw new InternalServerErrorException('Parsing failed');
  }
};
