import DashboardCard from "@/components/dashboard/DashboardCard";
import { Folder, MessageCircle, Newspaper, User,  } from "lucide-react";
import PostsTable from "@/components/posts/PostTable";
import AnalyticsChat from "@/components/dashboard/AnalyticsChat";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-row justify-between gap-5 mb-5">
        <DashboardCard icon={<Newspaper className="text-slate-200" size={50}  />} title="Posts" count={100} />
        <DashboardCard icon={<Folder className="text-slate-200" size={50}  />} title="Categorise" count={12} />
        <DashboardCard icon={<User className="text-slate-200" size={50}  />} title="Users" count={100} />
        <DashboardCard icon={<MessageCircle className="text-slate-200" size={50}  />} title="Comments" count={900} />
      </div>
      <Link href="/register">Register</Link>
      <AnalyticsChat />
      <PostsTable title="Data Table" limit={7} />
    </>
  );
}
