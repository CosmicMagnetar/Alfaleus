// app/blogs/page.tsx
import { supabase } from "../../../lib/superbaseClient";
import BlogList from "./BlogList";

export const dynamic = "force-dynamic"; // For SSR or fresh fetch every time

type Blog = {
  id: string;
  title: string;
  slug: string;
  author: string;
  tags: string[];
  body: string;
  cover_image: string;
  published: boolean;
  created_at: string;
};

export default async function HomePage() {
  const { data: blogs, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("published", true)
    .order("created_at", { ascending: false });

  if (error) {
    return <div>Failed to load blogs: {error.message}</div>;
  }

  return <BlogList blogs={blogs || []} />;
}
