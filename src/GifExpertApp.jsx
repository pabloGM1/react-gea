import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
    const [categories, setCategories] = useState(["Naruto"]);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
        // setCategories(cat => ['valorant', ...categories])
    };

    return (
        <div>
            <h1>GifExpertApp</h1>

            <AddCategory
                // setCategories={setCategories}
                onNewCategory={(event) => onAddCategory(event)}
            ></AddCategory>

            {/* barremos los elementos y regresamos algo nuevo */}

            {categories.map((category) => (
                <GifGrid
                    key={category}
                    category={category}
                >

                </GifGrid>
            ))}
        </div>
    );
};

export default GifExpertApp;
