import IWeather from "./IWeather";

//带有返回值状态的天气接口的数据类型
interface IFiveWeather {
  status: number;
  desc?: string;
  weather: Array<IWeather>;
}

export default IFiveWeather;