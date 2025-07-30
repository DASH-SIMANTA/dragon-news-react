import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const LeftNavbar = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/news/categories')
            .then(res => res.json())
            .then(data => setCategories(data.data.news_category))
            .catch(err => console.error('Error fetching categories:', err));
    }, []);


    return (
        <div>
            <h2 className="font-semibold">All category</h2>

            <div className="flex flex-col mt-3">
              <div className="gap-6">
                  {
                    categories.map((category) => (

                        <NavLink to={`/category/${category.category_id}`}
                            className="btn w-full text-left"
                            key={category.category_id}>
                            {category.category_name}
                        </NavLink>

                    ))
                }
              </div>
            </div>
        </div>
    );
};

export default LeftNavbar;