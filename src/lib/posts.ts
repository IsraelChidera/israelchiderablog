// Helpers for the markdown posts in src/pages/posts (frontmatter `tags` may be a string or an array).

export type PostFrontmatter = {
    title: string;
    description?: string;
    pubDate: string | Date;
    tags?: string | string[];
    image?: { url: string; alt: string };
};

export type Post = { url?: string; frontmatter: PostFrontmatter };

export const tagsOf = (post: Post): string[] => [post.frontmatter.tags ?? []].flat();

export const sortByDate = <T extends Post>(posts: T[]): T[] =>
    [...posts].sort((a, b) => +new Date(b.frontmatter.pubDate) - +new Date(a.frontmatter.pubDate));

export const formatDate = (date: string | Date) =>
    new Date(date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
