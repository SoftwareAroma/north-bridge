import React from 'react';
import BannerArea from '@/widgets/BannerArea';
import TopCategories from '@/widgets/TopCategories';
import BestDealArea from '@/widgets/BestDealArea';
import ChooseByBrand from '@/widgets/ChooseByBrand';
import DiscountArea from '@/widgets/DiscountArea';
import ServiceHelpArea from '@/widgets/ServiceHelpArea';
import BestSellingStore from '@/widgets/BestSellingStore';
import TrendingProductsArea from '@/widgets/TrendingProductsArea';
import MostSellingProductArea from '@/widgets/MostSellingProductArea';
import DiscountBannerArea from '@/widgets/DiscountBannerArea';
import MainHeader from '@/components/header/MainHeader';
import MainFooter from '@/components/footer/MainFooter';


const Home = () => {
  return (
    <React.Fragment>
      {/* header */}
      <MainHeader />

      <BannerArea />
      <TopCategories />
      <BestDealArea />
      <ChooseByBrand />
      <DiscountArea />
      <DiscountBannerArea />
      <MostSellingProductArea />
      <TrendingProductsArea />
      <BestSellingStore />
      <ServiceHelpArea />

      {/* footer */}
      <MainFooter />
    </React.Fragment>
  );
}

export default Home;
