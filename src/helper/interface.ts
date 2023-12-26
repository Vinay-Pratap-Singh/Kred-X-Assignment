export interface IFeatureData {
  imgSrc: string;
  title: string;
  description: string;
}

export interface ICmsData {
  feature: string;
  data: string[];
}

export interface IResourceData {
  _type: string;
  _id: string;
  title: string;
  date: string;
  image: object;
  _createdAt: string;
}
