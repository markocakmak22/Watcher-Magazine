import { useQuery } from '@tanstack/react-query';
import { Article } from '../../Types/types';
import Socialnetwork from './Socialnetwork';
import { fetchFeaturedArticles } from '../../Api/api';

function Aside() {
    const { data: featuredArticles = [], error } = useQuery<Article[], Error>({
        queryKey: ['featuredArticles'],
        queryFn: fetchFeaturedArticles,
        staleTime: 5 * 60 * 1000, // Podaci su sveži 5 minuta
    });

    if (error) {
        console.error("Error fetching articles:", error);
    }

    return (
        <aside className="col-md-4 col-sm-4">
            <Socialnetwork />

            <div className="side-widget margin-bottom-30">
                <h3 className="heading-1"><span>Featured</span></h3>
                <div id="tab-1" className="tab-content current">
                    <ul className="trending padding-bottom-30">
                        {featuredArticles.map((article) => (
                            <li key={article.id}>
                                <div className="thumb">
                                    <img
                                        src={`images/home/01/${article?.image}`}
                                        className="img-responsive"
                                        alt={article.title}
                                    />
                                </div>
                                <span className="cat">{article.category.name}</span>
                                <h4><a href="#">{article.title}</a></h4>
                                <div className="meta">
                                    <span className="comments">{article.comment_count}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </aside>
    );
}

export default Aside;
