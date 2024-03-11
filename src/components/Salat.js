import React, { useEffect, useState } from "react";
import "../Styles/salat.css";
import { CardSala } from "./CardSala";
import moment from "moment/moment";
import 'moment/locale/ar-dz';
moment.locale("ar-dz")
export default function Salat() {
  const [data, setdata] = useState({});
  const [city,setcity] = useState('Alexandria')
  const [CityValue,setCityvalue] = useState('الاسكندرية')
  const [Time,setTime] = useState('')
  const [nextSala,setnextSala] = useState('')
  useEffect(() => {
    fetch(
      `https://api.aladhan.com/v1/timingsByCity/07-03-2024?city=${city}&country=Egypt&method=8`
    )
      .then((res) => res.json())
      .then((data) => setdata(data.data.timings));
  },[CityValue]);
  const cityValue = {
    city:"الاسكندرية",
    value:"Alexandria"
  }
  useEffect(()=>{
    setInterval(()=>{
      setTime(
        moment().format("LTS")
     )
    },1000)
  })
  const Fajr = moment(data.Fajr, "hh:mm");
  const Dhuhr = moment(data.Dhuhr, "hh:mm");
  const Asr = moment(data.Asr, "hh:mm");
  const Maghrib = moment(data.Maghrib, "hh:mm");
  const Isha = moment(data.Isha, "hh:mm");
  useEffect(()=>{
      if(moment().isAfter(Fajr) && moment().isBefore(Dhuhr)){
        setnextSala("الظهر")
      }
      else if(moment().isAfter(Dhuhr) && moment().isBefore(Asr)){
        setnextSala("العصر")
      }
      else if(moment().isAfter(Asr) && moment().isBefore(Maghrib)){
        setnextSala("المغرب")
      }
      else if(moment().isAfter(Maghrib) && moment().isBefore(Isha)){
        setnextSala("العشاء")
      }
      else{
        setnextSala("الفجر")
      }
  })
  const dateH = moment().format('ll');   // 10 مارس 2024
  return (
    <div className="Salat flex flex-col">
      <div className="line1 text-white font-bold flex lg:justify-evenly md:justify-evenly sm:justify-evenly justify-center mt-10 flex-row-reverse flex-wrap">
        <h1 className="lg:text-[30px] m-5 md:text-[30px] sm:text-[25px] text-[23px]">
          {dateH}
        </h1>
        <h1 className="lg:text-[30px] m-5 md:text-[30px] sm:text-[25px] text-[23px]">
          الصلاة القادمة : {nextSala}
        </h1>
        <h1 className="lg:text-[30px] m-5 md:text-[30px] sm:text-[25px] text-[23px]">
          {Time}
        </h1>
      </div>
      <div className="line2 text-white lg:justify-evenly md:justify-evenly sm:justify-evenly justify-center font-bold flex mt-20 flex-row-reverse flex-wrap">
        <h1 className="lg:text-[30px] m-5 md:text-[30px] sm:text-[25px] text-[23px]">
          {CityValue}
        </h1>
        <form className="w-[250px] mx-10">
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select an option
          </label>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={
              (e)=>{
                if(e.target.value === "Alexandria"){
                    cityValue.city ="الاسكندرية"
                    cityValue.value ="Alexandria"
                    setCityvalue(cityValue.city)
                }
                else if(e.target.value === "Cairo"){
                  cityValue.city ="القاهرة"
                  cityValue.value ="Cairo"     
                  setCityvalue(cityValue.city)
                  }
                  setcity(e.target.value)
              }
            }
          >
            <option value="Alexandria">الاسكندرية</option>
            <option value="Cairo">القاهرة</option>
          </select>
        </form>
        <div className="w-[100%]  p-4 gap-10 mt-16 flex justify-evenly flex-wrap">
          <CardSala
            image={require("../img/image Card/_0350927d-7fda-441e-9c11-e4f4947f915c.jpeg")}
            name="الفجر"
            time={data.Fajr}
          />
          <CardSala
            image={require("../img/image Card/_16507fa3-8e68-4918-b0ea-c85f7b00e8b4.jpeg")}
            name="الظهر"
            time={data.Dhuhr}
          />
          <CardSala
            image={require("../img/image Card/_5005c191-07aa-489e-b47f-635a1ae1c664.jpeg")}
            name="العصر"
            time={data.Asr}
          />
          <CardSala
            image={require("../img/image Card/_5601b845-b65a-4092-8d58-eb7b9cddf0c0.jpeg")}
            name="المغرب"
            time={data.Maghrib}
          />
          <CardSala
            image={require("../img/image Card/_b7a97450-b59e-443d-a45e-a9630eabf713.jpeg")}
            name="العشاء"
            time={data.Isha}
          />
        </div>
      </div>
    </div>
  );
}
