import Article from "./Article";

const ArticleList = ({listData}) => {

    return ( 
        <main>
            <Article articleProp={listData} />
        </main>
     );
}
 
export default ArticleList;