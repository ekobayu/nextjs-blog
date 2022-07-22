import Image from 'next/image'
import classes from '../homepage/hero.module.css'

export default function Hero(params) {
    return <section className={classes.hero}>
        <div className={classes.image}>
            <Image src='/images/site/good.webp' alt='halo' width={200} height={200}></Image>
        </div>
        <h1>Hi Im Bayu</h1>
        <p>lorem ipsum</p>
    </section>
}