export interface Recommendation {
  name: string;
  title: string;
  company: string;
  relationship: string;
  text: string;
  photo: string;
  linkedin: string;
}

export const recommendations: Recommendation[] = [];
