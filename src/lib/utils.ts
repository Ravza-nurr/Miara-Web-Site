import { latestNews } from "./data";

interface NewsItem {
  id: number;
  title: string;
  category: string;
  image: string;
  excerpt: string;
  readTime: string;
  views: string;
  author: string;
  tags: string[];
  date: string;
  content?: string;
}

export const getCategoryNews = (category: string): NewsItem[] => {
  return latestNews.filter(
    (news) => news.category.toLowerCase() === category.toLowerCase()
  );
};
