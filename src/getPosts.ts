import matter from 'gray-matter';

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
}

export interface FullPost extends PostMeta {
  content: string;
}

export const getAllPosts = async (): Promise<PostMeta[]> => {
  const files = import.meta.glob('/src/posts/*.md', {
    eager: true,
    import: 'default',
    query: '?raw',
  })
  ;console.log('find files for god sake:', Object.keys(files));

  return Object.entries(files).map(([path, raw]) => {
    const slug = path.split('/').pop()?.replace('.md', '') || '';
    const { data } = matter(raw as string);
    return {
      slug,
      title: data.title,
      date: data.date,
      description: data.description,
    };
  });
};
