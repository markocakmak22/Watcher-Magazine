import Layout1 from "./layouts/layout1";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
    const { categoryName } = useParams(); // Uzmi categoryName iz URL-a

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/articles/${categoryName}`);
                const data = await response.json();

                // Uzmi samo prvih 6 članaka iz API-ja
                setSportArticles(data.slice(0, 6));
            } catch (error) {
                console.error('Greška prilikom učitavanja članaka:', error);
            }
        };

        if (categoryName) {
            fetchArticles();
        }
    }, [categoryName]); // Prazan niz zavisnosti znači da će se useEffect pokrenuti samo jednom

    // Podeli članke po 3 za svaku Layout1 komponentu
    const firstThreeArticles = sportArticles.slice(0, 3); // Prva tri članka
    const secondThreeArticles = sportArticles.slice(3, 6); // Druga tri članka

    console.log("Svi artikli")
    console.log(sportArticles)

    return (
        <div className="col-md-8 col-sm-8">
            <div className="layout_3">
                <div className="row">
                    {sportArticles.length > 0 && (
                        <>
                            <Layout1 sportArticles={firstThreeArticles} />
                            <Layout1 sportArticles={secondThreeArticles} />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Content;
