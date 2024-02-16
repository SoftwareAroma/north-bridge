import React from 'react';

const CategoryCard = (props: any) => {
    const { title, image } = props;
    return (
        <React.Fragment>
            <div
                className="shop-category-single-item"
            >
                <img
                    src={image} loading="lazy" alt=""
                    className="deal-image" // category-image
                />
                <h3 className="category-title">
                    {title}
                </h3>
            </div>
        </React.Fragment>
    )
}

export default CategoryCard;