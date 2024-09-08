import { useQueries } from '@tanstack/react-query';
import Layout1 from './layouts/Layout1';
import Layout2 from "./layouts/Layout2";
import { Article } from '../Types/types';
import { fetchArticlesByCategory } from '../Api/api';

const layoutConfigs = [
    { key: 'sport', layout: Layout1 },
    { key: 'travel', layout: Layout2 },
    { key: 'technik', layout: Layout2 },
];

function Content() {
    const queries = useQueries({
        queries: layoutConfigs.map(({ key }) => ({
            queryKey: ['articles', key],
            queryFn: () => fetchArticlesByCategory(key),
            staleTime: 30 * 60 * 1000, // Podaci su sveži 30 minuta
            refetchOnWindowFocus: true,
            refetchOnReconnect: true,
            enabled: !!key, // Omogućava upit samo ako je key prisutan
        })),
    });

    if (queries.some(query => query.isLoading)) {
        return <p>Loading...</p>;
    }

    if (queries.some(query => query.isError)) {
        return <p>Error loading articles</p>;
    }

    const articlesData = layoutConfigs.reduce((acc, { key }, index) => {
        acc[key] = queries[index].data || [];
        return acc;
    }, {} as Record<string, Article[]>);

    const getLayoutItems = (index: number) => {
        return layoutConfigs.map(({ key }) => articlesData[key]?.[index] || null).filter(Boolean);
    };

    return (
        <div className="col-md-8 col-sm-8">
            {layoutConfigs.map(({ layout: Layout }, index) => (
                <Layout
                    key={index}
                    Articles={getLayoutItems(index)}
                />
            ))}
        </div>
    );
}

export default Content;
