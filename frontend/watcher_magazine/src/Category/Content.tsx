import Layout1 from "./layouts/layout1";
import { useQuery } from '@tanstack/react-query';
import { useParams } from "react-router-dom";
import { Article } from "../Types/types";
import { fetchArticlesByCategory } from "../Api/api";

function Content() {
    const { categoryName } = useParams();

    const { data: articles = [], isError, isLoading } = useQuery<Article[], Error>({
        queryKey: ['articles', categoryName],
        queryFn: () => fetchArticlesByCategory(categoryName || ''),
        enabled: !!categoryName,
        staleTime: 30 * 60 * 1000,

        refetchOnWindowFocus: true,
        refetchOnMount: false,
        refetchOnReconnect: true,
    });

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (isError) {
        return <p>Error loading articles</p>;
    }

    const firstThreeArticles = articles.slice(0, 3);
    const secondThreeArticles = articles.slice(3, 6);

    return (
        <div className="col-md-8 col-sm-8">
            <div className="layout_3">
                <div className="row">
                    {articles.length > 0 && (
                        <>
                            <Layout1 articles={firstThreeArticles} />
                            <Layout1 articles={secondThreeArticles} />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Content;
