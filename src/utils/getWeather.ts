import axios from "axios";
import IFiveWeather from "../interface/IFiveWeather";

//获取某地的天气
async function getWeather(city: string): Promise<IFiveWeather> {
  const weatherArr: IFiveWeather = {
    status: 0,
    weather: [],
  };
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric&lang=zh_cn`
    );

    const status: number = res.data.status;

    switch (status) {
      //输入城市错误的返回码
      case 1002:
        weatherArr.status = 1002;
        weatherArr.desc = res.data.desc;
        weatherArr.weather = [];
        break;
      //数据返回成功
      case 1000:
        weatherArr.status = 1000;
        weatherArr.weather.push(...res.data.data.forecast);
    }
  } catch (error) {
    console.log("天气接口出错啦：" + error);
  }

  return weatherArr;
}

export default getWeather;
