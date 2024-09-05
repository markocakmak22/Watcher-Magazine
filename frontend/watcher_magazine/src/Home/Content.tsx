import React, { useEffect, useState } from 'react';
import Layout1 from "./layouts/Layout1";
import Layout1Test from "./layouts/Layout1Test";
import Layout2 from "./layouts/Layout2";
import Layout3 from './layouts/Layout3';

export interface ItemProps {
    id: number;
    image: string; // Ovo je "image" u API-ju
    category: {
        id: number;
        name: string;
    }; // "category" u API-ju je objekat
    title: string;
    link?: string; // Ako link nije prisutan, označite ga kao opcioni
    date: string; // Ovo bi mogao biti "created_at" u API-ju
    iconClass?: string;
    comment_count: number;
}


function Content() {
    const [sportArticles, setSportArticles] = useState<ItemProps[]>([]);
    const [travelArticles, setTravelArticles] = useState<ItemProps[]>([]);
    const [technikArticles, setTechnikArticles] = useState<ItemProps[]>([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/articles/', {});
                const data = await response.json();

                setSportArticles(data); // Prvih 3 članka za prvi Layout2
                setTravelArticles(data); // Prvih 4 članka za drugi Layout2
                setTechnikArticles(data); // Sledećih 4 članka za treći Layout2
            } catch (error) {
                console.error('Greška prilikom učitavanja članaka:', error);
            }
        };

        fetchArticles();
    }, []); // Prazan niz zavisnosti znači da će se useEffect pokrenuti samo jednom

    const Layout1Items = [
        sportArticles[0] || null,   // Ako `items[0]` ne postoji, koristi `null`
        travelArticles[1] || null,  // Ako `items2[0]` ne postoji, koristi `null`
        technikArticles[2] || null,   // Ako `items3[0]` ne postoji, koristi `null`
    ];

    const Layout2Items = [
        sportArticles[1] || null,   // Ako `items[0]` ne postoji, koristi `null`
        travelArticles[1] || null,  // Ako `items2[0]` ne postoji, koristi `null`
        technikArticles[1] || null,   // Ako `items3[0]` ne postoji, koristi `null`
    ];

    const Layout3Items = [
        sportArticles[2] || null,   // Ako `items[0]` ne postoji, koristi `null`
        travelArticles[2] || null,  // Ako `items2[0]` ne postoji, koristi `null`
        technikArticles[2] || null,   // Ako `items3[0]` ne postoji, koristi `null`
        sportArticles[1] || null   // Ako `items3[0]` ne postoji, koristi `null`
    ];

    return (
        <div className="col-md-8 col-sm-8">
            <Layout1Test items={Layout1Items.filter(item => item !== null)} />
            <Layout2 items={Layout2Items.filter(item => item !== null)} />
            <Layout3 items={Layout3Items.filter(item => item !== null)} />
        </div>
    );
}

export default Content;