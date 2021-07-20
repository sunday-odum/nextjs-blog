import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I am a Software Developer and research scientist.  My primary focus and inspiration are Web Development and Data Science.
I am both driven and self-motivated, constantly experimenting with new technologies and techniques. I am very passionate about Web Development and strive to better myself as a developer, and the development community as a whole.
I have  developed in PHP(CakePHP) and Javascript, though I primarily use Reactjs. I am experienced in both front and back-end development,and also  proficient in HTML/HTML5,CSS/CSS3,Bootstrap,Reactjs, WordPress, CakePHP,SQL/MySQL/PostgreSQL, to name a few.
I have worked with Cybernek Limited since 2019, dedicated to building CMS, responsive design integration, optimizing the performance of user-centric, high-impact websites,  and global companies. Leverage technical, analytical and problem-solving skills to create dynamic, high-speed websites, apps and platforms fueling competitive advantage.
</p>
        <p>
        This profile is built with Next.js which gives you the best experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more
          (This is my github repository{' '}
          <a href="https://github.com/sunday-odum">Works on repository</a>.)
        </p>
      </section>
    </Layout>
  )
}