import React from 'react';
import { Button } from 'antd'; // 使用AntD的Button替代Element的el-button
import '../styles/index.css'; // 导入样式文件

interface CityProps {
  onPopularCity?: (city: string) => void; // 对应Vue的@Emit事件
}

const City: React.FC<CityProps> = ({ onPopularCity }) => {
  const message = ["北京", "上海", "深圳", "成都", "重庆", "武汉", "南京"];

  const clickCity = (city: string) => {
    console.log("点击热门城市：" + city);
    if (onPopularCity) {
      onPopularCity(city); // 触发父组件事件
    }
    return city; // 保持与Vue版本一致的行为
  };

  return (
    <div id="city">
      {message.map((item, index) => (
        <div key={index}>
          <Button 
            type="text" 
            className="box-city"
            onClick={() => clickCity(item)}
          >
            {item}
          </Button>
        </div>
      ))}
    </div>
  );
};

export default City;