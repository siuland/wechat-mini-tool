import React, { useState, useEffect } from 'react';
import { Card, message } from 'antd'; // 使用AntD的Card和message替代Element组件
import  weather  from '../interface/IWeather';
import  getWeather  from '../utils/getWeather';
import '../styles/index.css';

interface WeatherProps {
  searchCity?: string; // 对应Vue的@Prop
}

const Weather: React.FC<WeatherProps> = ({ searchCity = '' }) => {
  const [city, setCity] = useState<string>('西安');
  const [weatherArr, setWeatherArr] = useState<Weather[]>([]);

  // 温度过滤器（替代Vue的filter）
  const temperatureFilter = (value: string): string => {
    return value.substring(2);
  };

  // 监听searchCity变化（替代Vue的@Watch）
  useEffect(() => {
    const fetchWeather = async (cityName: string) => {
      console.log(`搜索框或热门城市传入的地区是：${cityName}`);
      
      const res = await getWeather(cityName);
      console.log(res);
      
      if (res.status === 1000) {
        setCity(cityName);
        setWeatherArr(res.weather || []);
      } else if (res.status === 1002) {
        message.error(res.desc as string);
      }
    };

    if (searchCity) {
      fetchWeather(searchCity);
    }
  }, [searchCity]);

  // 初始化数据（替代Vue的created）
  useEffect(() => {
    const initData = async () => {
      const res = await getWeather('西安');
      if (res.status === 1000) {
        setWeatherArr(res.weather || []);
      } else if (res.status === 1002) {
        message.error(res.desc as string);
      }
      console.log(res);
    };

    initData();
  }, []);

  return (
    <div id="weather">
      {weatherArr.map((item, index) => (
        <Card
          key={index}
          className="box-card"
          title={<span>{city}</span>}
        >
          <div className="content">
            <div className="type">{item.type}</div>
            <div className="temp">
              {temperatureFilter(item.low)} ~ {temperatureFilter(item.high)}
            </div>
            <div className="time">{item.date}</div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Weather;