import { getAllposts, getPostBySlug } from "@/app/consts/posts";
import { Box } from "@mui/material";

export default function post() {
    return (
        <Box>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </Box>
    )
}

export async function getStaticPaths() {
    const posts = getAllposts();
    const paths = posts.map(post => ({
        params: { slug: post.slug }
    }));
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const post = getPostBySlug(params.slug);
    return {
        props: { post },
    }
}