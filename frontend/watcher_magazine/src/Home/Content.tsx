import { useEffect, useState } from 'react';
import Layout1 from './layouts/Layout1';
import Layout2 from "./layouts/Layout2";
import { Article } from '../Types/types';

const layoutConfigs = [
    { key: 'sport', layout: Layout1 },
    { key: 'travel', layout: Layout2 },
    { key: 'technik', layout: Layout2 },
];

function Content() {
    const [articles, setArticles] = useState<Record<string, Article[]>>({});

    useEffect(() => {
        const fetchArticles = async (category: string) => {
            try {
                const response = await fetch(`http://localhost:8000/api/articles/${category}`);
                const data = await response.json();
                setArticles(prevArticles => ({ ...prevArticles, [category]: data }));
            } catch (error) {
                console.error(`Greška prilikom učitavanja članaka za ${category}:`, error);
            }
        };

        layoutConfigs.forEach(({ key }) => {
            fetchArticles(key);
        });
    }, []);

    const getLayoutItems = (index: number) => {
        return layoutConfigs.map(({ key }) => articles[key]?.[index] || null).filter(Boolean);
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
