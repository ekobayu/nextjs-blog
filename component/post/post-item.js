import classes from '../post/post-item.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function PostItem(props) {
    const { title, image, excerpt, date, slug} = props.post

    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })

    // const imagePath = `/images/post/${slug}/${image}`
    const imagePath = `/images/post/getting.png`
    const linkPath = `/post/${slug}`

    return <li className={classes.post}>
        <Link href={linkPath}>
            <a>
                <div className={classes.image}>
                    <Image src={imagePath} alt={title} width={200} height={200} layout='responsive' />
                </div>
                <div className={classes.content}>
                    <h3>{title}</h3>
                    <time>{formattedDate}</time>
                    <p>{excerpt}</p>
                </div>
            </a>
        </Link>
    </li>
}