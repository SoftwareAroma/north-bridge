import React from 'react';
import CategoryCard from './CategoryCard';

const TopCategories = () => {
    return (
        <React.Fragment>
            <section className="shop-category-area">
                <div className="container">
                    <div className="section-title-wrap">
                        <h3
                            className="section-title mb-40">Shop our top categories</h3>
                    </div>
                    <div className="shop-category-wrap">
                        <CategoryCard title="Furniture" image="/images/Furniture-min.png" />
                        <CategoryCard title="Hand Bag" image="/images/hand bag-min.png" />
                        <CategoryCard title="Books" image="/images/books-min.png" />
                        <CategoryCard title="Tech" image="/images/tech-min.png" />
                        <CategoryCard title="Sneakers" image="/images/sneakers-min.png" />
                        <CategoryCard title="Travel" image="/images/travel-min.png" />
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default TopCategories;