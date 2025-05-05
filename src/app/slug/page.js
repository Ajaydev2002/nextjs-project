'use-client'

import { Box, Typography } from "@mui/material"
import Link from "next/link"

const posts = [
    { slug: 'learn-nextjs', title: 'Learn Next.js' },
    { slug: 'react-hooks', title: 'Understanding React Hooks' },
    { slug: 'javascript-tips', title: 'JavaScript Tips and Tricks' },
]

const SlugPost = () => {
    return (
        <Box sx={{marginLeft:"14%"}}>
            <Typography variant="h4">My blog posts</Typography>
            <Box>
                <ul>
                    {posts.map(post => (
                        <li key={post.slug}>
                            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        </li>
                    ))}
                </ul>
            </Box>
        </Box>
    )
}

export default SlugPost;