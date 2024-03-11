import React, { useEffect, useState } from "react";
import "../Styles/Home.css";
import "../Styles/Slider.css"
import { Link } from "react-router-dom";
export default function Home() {
    const [title,settitle] = useState(0)
    const word = "مرحبا بك في مسلم" 
    useEffect(()=>{
        const inter = setInterval(() => {
            settitle((i)=>i+1)
        }, 100);
        return ()=> clearInterval(inter)
    },[])
    const compelete = ()=>{
        return word.slice(0,title)
    }
    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY >= 260) {
            document.querySelector(".hr").style.width="80%";
            document.querySelector(".hr").style.transition="1s";
            document.querySelector(".text-tra").style.transition="1s";
            document.querySelector(".text-tra").style.transform ="translate(0px)";
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
  return (
    <div className="Home">
      <div className="c1 h-[92vh] p-5 text-white flex items-center flex-col">
        <h1 className="lg:text-[40px] whitespace-nowrap md:text-[35px] sm:text-[30px] text-[25px] font-bold lg:m-20 md:m-20 sm:m-10 m-10">
        {compelete()}
        </h1>
        <h2 className="lg:text-[32px] md:text-[28px] sm:text-[20px] text-[20px]">
          بسم الله الرحمن الرحيم أهلاً وسهلاً بك في موقعنا الإلكتروني! نفخر بأن
          نكون مصدرًا للأذكار الصباحية والمسائية، ومواعيد الصلوات، والمزيد من
          المحتوى الذي يحتاجه المسلم في حياته اليومية. نسعد بتواجدك معنا، ونتمنى
          أن يكون موقعنا مرجعًا مفيدًا لك في تعزيز عبادتك وتقوية روحك. إذا كان
          لديك أي استفسارات أو اقتراحات، فلا تتردد في التواصل معنا. نسأل الله أن
          يجعل هذا الموقع خيرًا وبركةً للجميع، وأن يكون لكم في ميزان حسناتكم.
          والله الموفق 🌙🕌🤲
        </h2>

        <Link 
        to={"/salat"}
          className="bg-emerald-500 mt-20 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
        >
           الصلوات
        </Link>
      </div>
      <div className="c2 h-[100vh] mt-20 flex items-center flex-col">
        <h1 className="lg:text-[40px] whitespace-nowrap md:text-[35px] sm:text-[30px] text-[25px]">
            ماذا يوجد هنا؟
        </h1>
        <hr className="hr w-[0%] h-[1px] mt-3 border-2 border-sky-500"/>
        <div className="contentc2 mt-10 flex justify-evenly w-[100%] items-center flex-wrap flex-row-reverse p-7 gap-10">
            <img width={"400px"} className="image" src={require("../img/_7ffe7167-7048-490e-bd17-54f3ff8912dd.jpeg")}/>
            <h2 className="w-[900px] text-tra translate-x-[-1200px] lg:text-[30px] md:text-[25px] sm:text-[22px] text-[20px]">
                نوفر هنا كل الادوات التي يحتاجها المسلم من مواقيت الصلاة و الاذكار و الاحاديث و غيره من الادوات التي تفيد المسلم في رمضان و باقي ايام السنة و غيرها من الادوات
                <li className="text-[22px] mt-10">
            مواقيت الصلاة: يمكن للمستخدمين العثور على أوقات الصلاة الدقيقة لمدينتهم
                </li>
                <li className="text-[22px]">
                التقويم الإسلامي: توفير معلومات حول الأيام المميزة في السنة الإسلامية، مثل شهر رمضان وعيد الفطر والحج.
                </li>
                <li className="text-[22px]">
                الأحاديث النبوية: مشاركة أحاديث نبوية مأثورة تلقائيًا في أوقات معينة
                </li>
                <li className="text-[22px]">
            الأذكار: قائمة بالأذكار اليومية التي يمكن للمسلمين قراءتها في أوقات محددة
                </li>
            </h2>
        </div>
      </div>
      <div className="c4 h-[30vh] mt-10 flex bg-[#9BB8CD] justify-evenly items-center flex-wrap lg:flex-row md:flex-row sm:flex-row flex-col">
            <Link className="font-bold text-[23px]">
                امير الاسلام
            </Link>
            <Link className="font-bold text-[23px]">
            الصلوات 
            </Link>
            <Link className="font-bold text-[23px]">
                الاذكار
            </Link>
            <Link className="font-bold text-[23px]">
                عنا
            </Link>
            <Link className="font-bold text-[23px]">
                تواصل معنا
            </Link>
      </div>
    </div>
  );
}
