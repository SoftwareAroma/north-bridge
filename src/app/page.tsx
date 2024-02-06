import React from 'react';
import BannerArea from '@/widgets/BannerArea';
import TopCategories from '@/widgets/TopCategories';
import BestDealArea from '@/widgets/BestDealArea';
import ChooseByBrand from '@/widgets/ChooseByBrand';
import DiscountArea from '@/widgets/DiscountArea';


const Home = () => {
  return (
    <React.Fragment>
      <BannerArea />
      <TopCategories />
      <BestDealArea />
      <ChooseByBrand />
      <DiscountArea />
    </React.Fragment>
  );
}

export default Home;
