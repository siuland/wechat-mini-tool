import React, { useState } from 'react';
import SearchBox from '@/components/SearchBox';
import PopularCity from '@/components/PopularCity';
import Weather from '@/components/Weather';
import logo from './assets/logo.png'; // 图片导入
import './styles/index.css';
const Home: React.FC = () => {
  const [city, setCity] = useState<string>('');

  // 处理搜索框传值
  const handleSendCity = (city: string) => {
    setCity(city);
  };

  // 处理热门城市传值
  const handlePopularCity = (city: string) => {
    setCity(city);
  };

  return (
    <div className="home">
      <img alt="React logo" src={logo} />
      <SearchBox onSendCity={handleSendCity} />
      <PopularCity onPopularCity={handlePopularCity} />
      <Weather searchCity={city} popularCity={city} />
    </div>
  );
};

export default Home;