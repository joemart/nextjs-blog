import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';

export async function getStaticProps({params}){
    const postData = getPostData(params.id)

    return {
        props: {
            postData
        }
    }
}

export default function Post({postData}) {
  return <Layout>
    
    <div>{postData.title}</div>
    <div>{postData.id}</div>
    <div>{postData.date}</div>
    

  </Layout>;
}