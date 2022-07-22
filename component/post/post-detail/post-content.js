import PostHeader from "./post-header";
import classes from './post-content.module.css'
import ReactMarkdown from 'react-markdown'
import Image from "next/image";
import {PrismLight as Highlighter} from 'react-syntax-highlighter'
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark'
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css'

Highlighter.registerLanguage('js', js)
Highlighter.registerLanguage('css', css)

export default function PostContent(props) {
    // const imagePath = `/images/posts/${post.slug}/${post.image}`
    const { post } = props
    const imagePath = `/images/post/${post.image}`

    const customRenderers = {
        // image(image) {
        //     <Image src={`/images/post/${image.src}`} alt={image.alt} width={200} height={200} />
        // },
        paragraph(paragraph) {
            const {node} =paragraph

            if (node.children[0].type === 'image'){
                const image= node.children[0]

                return <div className={classes.image}>
                    <Image src={`/images/post/${image.url}`} alt={image.alt} width={200} height={200} />
                </div>
            }
            return <p>{paragraph.children}</p>
        },
        code(code){
            const { className, children} = code
            const language = className.split('-')[1]
            return <Highlighter 
                    style={atomDark} 
                    languange={language} 
                    children={children} 
                />
        }
    }
    return <article className={classes.content}>
        <PostHeader title={post.title} image={imagePath}/>
        <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
}