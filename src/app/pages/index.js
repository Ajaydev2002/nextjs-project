import Link from "next/link";
import { getAllposts } from "../consts/posts";
import { Box, Typography } from "@mui/material";

const SlugMainPage = () => {
    const posts = getAllposts();
    return (
        <Box>
            <Typography variant="h5">My Slug Content</Typography>
            <Box>
                {posts.map(post => (
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                ))}
            </Box>
        </Box>
    )
}

export default SlugMainPage;