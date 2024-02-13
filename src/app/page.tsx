import React from 'react';
import BannerArea from '@shared/widgets/BannerArea';
import TopCategories from '@shared/widgets/TopCategories';
import BestDealArea from '@shared/widgets/BestDealArea';
import ChooseByBrand from '@shared/widgets/ChooseByBrand';
import DiscountArea from '@shared/widgets/DiscountArea';
import ServiceHelpArea from '@shared/widgets/ServiceHelpArea';
import BestSellingStore from '@shared/widgets/BestSellingStore';
import TrendingProductsArea from '@shared/widgets/TrendingProductsArea';
import MostSellingProductArea from '@shared/widgets/MostSellingProductArea';
import DiscountBannerArea from '@shared/widgets/DiscountBannerArea';
import MainHeader from '@shared/components/header/MainHeader';
import MainFooter from '@shared/components/footer/MainFooter';
import ProductTabARea from "@shared/widgets/ProductTabARea";


const HomePage = () => {
    return (
        <React.Fragment>
            {/* header */}
            <MainHeader/>

            <BannerArea/>
            <TopCategories/>
            <BestDealArea/>
            <ChooseByBrand/>
            <ProductTabARea/>
            <DiscountArea/>
            <DiscountBannerArea/>
            <MostSellingProductArea/>
            <TrendingProductsArea/>
            <BestSellingStore/>
            <ServiceHelpArea/>

            {/* footer */}
            <MainFooter/>
        </React.Fragment>
    );
}

export default HomePage;

