
'use client';
import React from 'react';
import MainHeader from '@/components/header/MainHeader';
import { ThemeSwitcher } from '@/components';
import BannerArea from '@/widgets/BannerArea';
import TopCategories from '@/widgets/TopCategories';
import BestDealArea from '@/widgets/BestDealArea';


const Home = () => {
  return (
    <React.Fragment>
      <MainHeader />
      <main>
        <BannerArea />
        <TopCategories />
        <BestDealArea />
        <ThemeSwitcher />
      </main>
    </React.Fragment>
  );
}

export default Home;
