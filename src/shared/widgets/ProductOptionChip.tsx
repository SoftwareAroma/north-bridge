import React from 'react';
import PropTypes from 'prop-types';

type ProductOptionChipProps = {
    name: string;
    isActive?: boolean;
    onClick: () => void;
};

const ProductOptionChip = (props: ProductOptionChipProps) => {
    const {name, isActive = false, onClick}: ProductOptionChipProps = props;
    return (
        <React.Fragment>
            <button onClick={onClick} data-w-tab="gadgets" className={`product-tab-link w-inline-block w-tab-link ${isActive ? 'w--current': ''} `}>
                <div className="tab-menu">{name}</div>
            </button>
        </React.Fragment>
    );
};

ProductOptionChip.propTypes = {
    name: PropTypes.string,
    onClick: PropTypes.func
};

export default ProductOptionChip;