import { PortableTextBlock } from "sanity";

export type page = {
  pageBuilder: any;
  _id: string;
  title: string;
  slug: string;
  description: PortableTextBlock[];
};

export type NavigationType = {
  _id: string;
  title: string;
  links: {
    _key: string;
    title: string;
    path: string;
    external: boolean;
    outgoingPath: string;
    subLinks: {
      _key: string;
      subTitle: string;
      subRoute: string;
      external: boolean;
      outgoingPath: string;
    }[];
  }[];
};



