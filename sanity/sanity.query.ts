import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getPages() {
  return client.fetch(
    groq`*[_type == "page"]{
      _id, 
      title,
      "slug": slug.current,
    }`
  );
}

export async function getSinglePage(slug: string) {
  return client.fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      title,
    }`,
    { slug }
  );
}

/* export async function getPageBuilder(slug: string) {
  return client.fetch(
    groq`*[_type == "page" && slug.current == $slug][0].pageBuilder`,
    { slug }
  );
}
 */

export async function getPage(slug: string) {
  return client.fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      description,
      pageBuilder
    }`,
    { slug }
  );
}

export async function getPageBuilder() {
  return client.fetch(
    groq`*[_type == "page"] {
      pageBuilder[]{
        _type,
        heading,
        tagline,
        image
      }
    }
    `
  );
}

/* *[_type == "page"] {
  pageBuilder[]{
    _type,
    heading,
    tagline,

  }
}
 */

/* export async function getNavigation() {
  return client.fetch(
    groq`*[_type == "navigation"] {
      _id,
      title,
      links[] {
        _key,
        title,
        path,
        external,
        outgoingPath,
        subLinks[] {
          _key,
          title,
          path,
          external,
          outgoingPath
        }
      }
    }`,

  );
}  */

export async function getNavigation() {
  return client.fetch(
    groq`*[_type == "navigation"]{
      links[] {
        _key,
        title,
        path,
        external,
        outgoingPath,
        subLinks[] {
          _key,
          subTitle,
          subRoute,
          external,
          outgoingPath
        }
      }
    }`
  );
}

