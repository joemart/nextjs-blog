import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';

export async function getStaticProps({params}){
  // console.log("In getStaticProps")
    const postData = getPostData(params.id)

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
    
    <div>{postData.title}</div>
    <div>{postData.id}</div>
    <div>{postData.date}</div>

    

  </Layout>;
}