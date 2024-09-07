import Layout1 from "./layouts/layout1";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Article } from "../Types/types";


function Content() {
    const [sportArticles, setSportArticles] = useState<Article[]>([]);
    const { categoryName } = useParams(); // Uzmi categoryName iz URL-a

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/articles/${categoryName}`);
                const data = await response.json();

                setSportArticles(data.slice(0, 6));
            } catch (error) {
                console.error('Greška prilikom učitavanja članaka:', error);
            }
        };

        if (categoryName) {
            fetchArticles();
        }
    }, [categoryName]);

    const firstThreeArticles = sportArticles.slice(0, 3);
    const secondThreeArticles = sportArticles.slice(3, 6);

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
