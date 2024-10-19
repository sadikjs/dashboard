import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import Link from "next/link";
import posts from "@/data/posts";
import { Post } from "@/types/posts";
interface postsTable{
    title: string, 
    limit: number
}
const PostsTable = ({title, limit}: postsTable) => {
    const sortedPost: Post[] = [...posts].sort((a,b)=> new Date(b.date).getTime() - new Date(a.date).getTime())
    const filteredPosted = limit? sortedPost.slice(0, limit): sortedPost
    return ( 
    <div className="mt-10">
        <h3 className="text-2xl mb-4 font-semibold">
        {title? title : "Posts"}
        </h3>
        <Table>
            <TableCaption>A List of Post</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead className="hidden md:table-cell">Author</TableHead>
                    <TableHead className="hidden md:table-cell text-right">Date</TableHead>
                    <TableHead className="hidden md:table-cell text-right">view</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {filteredPosted.map((post)=>(
                    <TableRow key={post.id}>
                        <TableCell>{post.title}</TableCell>
                        <TableCell className="hidden md:table-cell">{post.author}</TableCell>
                        <TableCell className="text-right hidden md:table-cell">{post.date}</TableCell>
                        <TableCell>
                            <Link href={`/posts/edit/${post.id}`}>
                                <button className="cursor-pointer text-center bg-blue-500 hover:bg-blue-700 py-2 px-2 rounded text-xs text-white">edit</button>
                            </Link>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </div> 
    );
}
 
export default PostsTable;