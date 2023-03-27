import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from "../../components/date"

import Head from "next/head"


export async function getStaticProps({params}){
  // console.log("In getStaticProps")
    const postData = await getPostData(params.id)

    return {
        props: {
            postData
        }
    }
}

export async function getStaticPaths(){
  // console.log("In getStaticPaths")
  const paths = getAllPostIds()
  return {
    paths, 
    fallback:false
  }
}

export default function Post({postData}) {
  return <Layout>
    
    <Head>
      <title>{postData.title}</title>
      </Head>
    <Date dateString={postData.date}></Date>
    
  </Layout>;
}