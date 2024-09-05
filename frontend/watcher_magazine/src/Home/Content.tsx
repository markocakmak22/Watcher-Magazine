import { useEffect, useState } from 'react';
import Layout1 from './layouts/Layout1';
import Layout2 from "./layouts/Layout2";
import Layout3 from './layouts/Layout3';

export interface ItemProps {
    id: number;
    image: string;
    category: {
        id: number;
        name: string;
    };
    title: string;
    link?: string;
    date: string;
    iconClass?: string;
    comment_count: number;
}


function Content() {
    const [sportArticles, setSportArticles] = useState<ItemProps[]>([]);
    const [travelArticles, setTravelArticles] = useState<ItemProps[]>([]);
    const [technikArticles, setTechnikArticles] = useState<ItemProps[]>([]);

    useEffect(() => {
        const fetchArticlesSport = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/articles/sport', {});
                const data = await response.json();

                setSportArticles(data); // Prvih 3 članka za prvi Layout2
            } catch (error) {
                console.error('Greška prilikom učitavanja članaka:', error);
            }
        };

        const fetchArticlesTravel = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/articles/travel', {});
                const data = await response.json();

                setTravelArticles(data); // Prvih 4 članka za drugi Layout2
            } catch (error) {
                console.error('Greška prilikom učitavanja članaka:', error);
            }
        };

        const fetchArticlesTechnik = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/articles/technik', {});
                const data = await response.json();

                setTechnikArticles(data); // Prvih 4 članka za drugi Layout2
            } catch (error) {
                console.error('Greška prilikom učitavanja članaka:', error);
            }
        };

        fetchArticlesSport();
        fetchArticlesTravel();
        fetchArticlesTechnik();
    }, []); // Prazan niz zavisnosti znači da će se useEffect pokrenuti samo jednom

    const Layout1Items = [
        sportArticles[0] || null,   // Ako `items[0]` ne postoji, koristi `null`
        sportArticles[1] || null,  // Ako `items2[0]` ne postoji, koristi `null`
        sportArticles[2] || null,   // Ako `items3[0]` ne postoji, koristi `null`
    ];

    const Layout2Items = [
        travelArticles[0] || null,   // Ako `items[0]` ne postoji, koristi `null`
        travelArticles[1] || null,  // Ako `items2[0]` ne postoji, koristi `null`
        travelArticles[2] || null,   // Ako `items3[0]` ne postoji, koristi `null`
    ];

    const Layout3Items = [
        technikArticles[0] || null,   // Ako `items[0]` ne postoji, koristi `null`
        technikArticles[1] || null,  // Ako `items2[0]` ne postoji, koristi `null`
        technikArticles[2] || null,   // Ako `items3[0]` ne postoji, koristi `null`
        technikArticles[3] || null   // Ako `items3[0]` ne postoji, koristi `null`
    ];

    return (
        <div className="col-md-8 col-sm-8">
            <Layout1 items={Layout1Items.filter(item => item !== null)} />
            <Layout2 items={Layout2Items.filter(item => item !== null)} />
            <Layout3 items={Layout3Items.filter(item => item !== null)} />
        </div>
    );
}

export default Content;