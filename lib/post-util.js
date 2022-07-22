import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getPostFiles() {
    return fs.readdirSync(postsDirectory)
}

export function getPostData(postIdentifier) {
    const postSlug = postIdentifier.replace(/\.md$/, '') // remove file extension
    const filePath = path.join(postsDirectory, `${postSlug}.md`)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(fileContent)

    const postData = {
        slug: postSlug,
        ...data,
        content,
    }

    return postData
}

export function getAllPost() {
    const postFiles = getPostFiles()

    const allPost = postFiles.map((postFile) =>{
        return getPostData(postFile)
    })

    const sortedPost = allPost.sort((postA, postB) => postA.date > postB.date ? -1 : 1)

    return sortedPost
}


export function getFeaturedPost(params) {
    const allPost = getAllPost()

    const featuredPost = allPost.filter(post => post.isFeatured)

    return featuredPost
}