import React, { useState } from 'react';
import { Input } from 'antd'; // 使用AntD的Input替代Element的el-input
import { SearchOutlined } from '@ant-design/icons'; // 搜索图标

interface SearchBoxProps {
  onSendCity?: (value: string) => void; // 对应Vue的@Emit事件
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSendCity }) => {
  const [city, setCity] = useState<string>('');

  // 对应@Emit("sendCity")
  const handleEnter = (value: string) => {
    console.log("按下回车，搜索地是：" + value);
    if (onSendCity) {
      onSendCity(value);
    }
    return value; // 保持与Vue版本一致的行为
  };

  // 对应edit方法
  const handleInput = (value: string) => {
    console.log("正在输入中......" + value);
  };

  return (
    <div id="search">
      <Input
        placeholder="请输入内容"
        suffix={<SearchOutlined />}
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
          handleInput(e.target.value);
        }}
        onPressEnter={(e) => {
          handleEnter((e.target as HTMLInputElement).value);
        }}
        onBlur={(e) => {
          handleEnter(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchBox;