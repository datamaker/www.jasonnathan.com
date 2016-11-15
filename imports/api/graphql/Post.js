import Author from './Author';
import Category from './Category';

const Post = `
scalar Date
scalar JSON

type RenderedString {
  rendered: String
}

type Post {
  id: Int!
  date: Date
  date_gmt: Date
  guid: RenderedString
  modified: Date
  modified_gmt: Date
  slug: ID!
  type: String
  link: String
  title: RenderedString
  content: RenderedString
  excerpt: RenderedString
  author: Author
  categories: [Category]
  comment_status: String
  ping_status: String
  sticky: Boolean
  format: String
  meta: JSON
  featured_media_url: String
  _links: JSON
}
`
/**
  categories: [Category]
  tags: [Tag]
  featured_media: Attachment
 */
export default () => [Post, Author, Category];
