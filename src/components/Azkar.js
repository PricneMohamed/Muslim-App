import React, { useEffect, useState } from 'react'
import "../Styles/azkar.css"
import MobtalatBox from './MobtalatBox'
import { Link } from 'react-router-dom'
export default function Azkar() {
  const [title,settitle] = useState(0)
  const [sabah,setsabah] = useState(0)
  const [contentTitle,setContentTitle] = useState(null)
  const [salaNext,setsalaNext] = useState(0)
  useEffect(()=>{
    const inter = setInterval(() => {
        settitle((i)=> i+1 )
    }, 100);
    return ()=> clearInterval(inter)
  })
  const Title = "تذكر أن الله معك، فاستعن به ولا تيأس."
  const compeleteTitle = ()=>{
    return `${Title.slice(0,title)}|`
  }
    useEffect(()=>{
      const scrolingLevel = ()=>{
        if (window.scrollY >= 200 && window.scrollY <= 230) {
          document.querySelector(".hrLine1").style.width="80%"
            document.querySelector(".hrLine1").style.transition="1s"
          }
        }
        scrolingLevel()
        window.addEventListener("scroll",scrolingLevel)
        return ()=>{
          window.removeEventListener("scroll",scrolingLevel)
        }
      },[])
      const azkarContentTitle = "الحمد لله الذي أحيانا بعد ما أماتنا وإليه النشور، اللهم إني أشهدك وأشهد حملة عرشك وملائكتك وجميع خلقك، أنك أنت الله لا إله إلا أنت وحدك لا شريك لك، وأن محمدًا عبدك ورسولك، اللهم ما أصبح بي من نعمة أو بأحد من خلقك فمنك وحدك لا شريك لك، فلك الحمد ولك الشكر، اللهم إني أعوذ بك من الهم والحزن، وأعوذ بك من العجز والكسل، وأعوذ بك من الجبن والبخل، وأعوذ بك من غلبة الدين وقهر الرجال، سبحان الله وبحمده، عدد خلقه ورضا نفسه وزنة عرشه ومداد كلماته، لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير."
      const compeleteSabah = ()=>{
        setInterval(() => {
          setsabah((i)=> i +1 )
        }, 100);
        setContentTitle(azkarContentTitle.slice(0,sabah))
      }
      useEffect(()=>{
        const scrolingLevel = ()=>{
          if (window.scrollY >= 200 && window.scrollY <= 2500) {
            document.querySelector(".hrLine2").style.width="80%"
              document.querySelector(".hrLine2").style.transition="1s"
            }
          }
          scrolingLevel()
          window.addEventListener("scroll",scrolingLevel)
          return ()=>{
            window.removeEventListener("scroll",scrolingLevel)
          }
        },[])
  return (
    <div className='Azkar h-auto'>
        <div className='c1 lg:p-10 md:p-8 sm:p-5 p-4 flex items-center flex-col' style={{direction:"rtl"}}>
            <h1  className='mt-20 lg:text-[40px] font-bold 
            md:text-[35px]
            sm:text-[30px]
            text-[25px]
            '
            style={{direction:"rtl"}}
            >{compeleteTitle()}</h1>
            <h2 className='
            mt-10
            lg:text-[35px]
            md:text-[30px]
            sm:text-[25px]
            text-[22px]
            '>هنا بأذن الله سوف تجد جميع الاذكار التي سوف تحتاجها يا اخي المسلم بما في ذلك اذكار الصباح و المساء التي تنير لك يومك بالامال و السعادة  و تذكر دائما ان بذكر الله تطمئن القلوب.</h2>
            <button
  className="zkr relative px-8 font-bold py-2 mt-10 rounded-md bg-white isolation-auto z-10 border-2 border-lime-500 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-lime-500 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"
    onClick={
      ()=>{
        window.scrollTo({
          top:700,
          behavior:"smooth"
        })
      }
    }
>
    ابدأ الذكر
</button>
        </div>
        <div className='c2 h-auto flex items-center flex-col'>
        <h1 className='text-[30px] mt-20 font-bold'>اختر ذكرك واستعن بالله</h1>
        <hr className='border hrLine1 w-[40%] border-black mt-5'/>
        <div className='container mt-10 flex justify-evenly flex-wrap'>
        <div className='zkr h-[500px] overflow-y-scroll border-2 border-[#ffb400] w-[400px] rounded-[10px]'>
          <h1 className='font-bold p-5 text-[20px]' style={{direction:"rtl"}}>
          {contentTitle}
          </h1>
        </div>
        <div className='btnzkrDiv h-[500px] w-[400px]  flex justify-center  flex-col items-center'>
        <button className='btnzkr w-[150px] p-4 bg-black text-white rounded-xl mt-2' onClick={
          ()=>{
            compeleteSabah()
          }
        }>
        <h1 className='font-bold'>
        ذكر الصباح
        </h1>
        </button>
        <button className='btnzkr w-[150px] p-4 bg-black text-white rounded-xl mt-2'
        onClick={
          ()=>{
        const befFajr = "قبل الصلاة الفجر: اللهم بارك لي فيما رزقتني وقني عذاب النار."
        const befZohr = "قبل الصلاة الظهر: اللهم اجعل في قلبي نورًا وفي لساني نورًا واجعل في سمعي نورًا واجعل في بصري نورًا واجعل من خلفي نورًا ومن أمامي نورًا واجعل من فوقي نورًا ومن تحتي نورًا، اللهم أعطني نورا."
        const befAsr = "قبل الصلاة العصر: اللهم إني أسألك خير هذه الدنيا وخير ما بعدها وأعوذ بك من شر هذه الدنيا وشر ما بعدها."
        const befMagraip = "قبل الصلاة المغرب: اللهم إني أعوذ بك من زوال نعمتك وتحول عافيتك وفجاءة نقمتك وجميع سخطك."
        const befIsha = "قبل الصلاة العشاء:  سبحان الله وبحمده، سبحان الله العظيم."
        setsalaNext((i)=> i+1)
        if(salaNext === 0){
          setContentTitle(befFajr)
        }else if(salaNext === 1){
          setContentTitle(
            <>
          {contentTitle}
            <br />
            <br />
            {befZohr}
            </>
          )
        }else if(salaNext === 2){
          setContentTitle(
            <>
          {contentTitle}
            <br />
            <br />
            {befAsr}
            </>
          )
        }else if(salaNext === 3){
          setContentTitle(
            <>
          {contentTitle}
            <br />
            <br />
            {befMagraip}
            </>
          )
        }else if(salaNext === 4){
          setContentTitle(
            <>
          {contentTitle}
            <br />
            <br />
            {befIsha}
            </>
          )
        }else{
          setsalaNext(0)
        }
          }
        }
        >
        <h1 className='font-bold'>
        ذكر قبل الصلاة
        </h1>
        </button>
        <button className='btnzkr w-[150px] p-4 bg-black text-white rounded-xl mt-2'
        onClick={
          ()=>{
            const zekrnextSala1 = "الاستغفار عدة مرات: أستغفر الله العظيم من كل ذنب عظيم."
            const zekrnextSala2 = "التسبيح: سبحان الله 33 مرةو الحمد لله 33 مرة و الله اكبر 33 مرة و اكمالها بقول: لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير"
            const zekrnextSala3 = "التسبيح: سبحان الله 33 مرةو الحمد لله 33 مرة و الله اكبر 33 مرة و اكمالها بقول: لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير"
            setsalaNext((i)=> i+1)
            if(salaNext === 0){
              setContentTitle(zekrnextSala1)
            }else if (salaNext === 1){
              setContentTitle(
                <>
                {contentTitle}
                <br/>
                <br/>
                {zekrnextSala2}
                </>
              )
            }else if (salaNext === 2){
              setContentTitle(
                <>
                {contentTitle}
                <br/>
                <br/>
                {zekrnextSala3}
                </>
              )
            }else{
              setsalaNext(0)
            }
          }
        }
        >
        <h1 className='font-bold'>
        ذكر بعد الصلاة
        </h1>
        </button>
        <button className='btnzkr w-[150px] p-4 bg-black text-white rounded-xl mt-2'
        onClick={
          ()=>{
            const Korsi =  "قراءة آية الكرسي: اللَّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ(آية الكرسي - البقرة: 255)."
            const elm3ozten = "سورة الإخلاص والمعوذتين: قُلْ هُوَ اللَّهُ أَحَدٌ، اللَّهُ الصَّمَدُ، لَمْ يَلِدْ وَلَمْ يُولَدْ، وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ (الإخلاص)، قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ، مِن شَرِّ مَا خَلَقَ، وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ، وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ، وَمِن شَرِّ حَاسِدٍ إِذَا حَسَد (الفلق)، قُلْ أَعُوذُ بِرَبِّ النَّاسِ، مَلِكِ النَّاسِ، إِلَهِ النَّاسِ، مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ، الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ، مِنَ الْجِنَّةِ وَالنَّاسِ (الناس)."
            const estgfaar = "الاستغفار: أستغفر الله العظيم الذي لا إله إلا هو، الحي القيوم، وأتوب إليه."
            const tasbeh = "التسبيح: سبحان الله وبحمده"
            const salaNabi = "الصلاة على النبي صلى الله عليه وسلم: اللهم صل وسلم وبارك على نبينا."
            setsalaNext((i)=> i+1 )
            if(salaNext === 0){
              setContentTitle(Korsi)
            }else if(salaNext === 1){
              setContentTitle(
                <>
                {contentTitle}
                <br />
                <br />
                {elm3ozten}
                </>
              )
            }else if(salaNext === 2){
              setContentTitle(
                <>
                {contentTitle}
                <br />
                <br />
                {estgfaar}
                </>
              )
            }else if(salaNext === 3){
              setContentTitle(
                <>
                {contentTitle}
                <br />
                <br />
                {tasbeh}
                </>
              )
            }else if(salaNext === 4){
              setContentTitle(
                <>
                {contentTitle}
                <br />
                <br />
                {salaNabi}
                </>
              )
            }else{
              setsalaNext(0)
            }
          }
        }
        >
        <h1 className='font-bold'>
        ذكر المساء
        </h1>
        </button>
        <button className='btnzkr w-[150px] p-4 bg-black text-white rounded-xl mt-2'
        onClick={
          ()=>{
            setContentTitle(null)
          }
        }
        >
        <h1 className='font-bold'>
        مسح المحتوي
        </h1>
        </button>
        </div>
        </div>
        </div>
        <div className='c3 h-auto flex items-center flex-col mt-20'>
          <h1 className='lg:text-[35px] md:text-[35px] sm:text-[30px] text-[24px] font-bold'>
            ماذا يبطل الصيام؟
          </h1>
        <hr className='border hrLine2 w-[40%] border-black mt-5'/>
        <div className='flex justify-evenly flex-wrap p-4 h-auto'>
        <MobtalatBox image={require("../img/Mobtalat/Drink-Blood.webp")} title={"بلع الدم"} direction={" بلع الدم لا يفطر الا اذا تعمد الانسان ذلك."}/>
        <MobtalatBox image={require("../img/Mobtalat/a945ad5f9a1386599f6e5787580cfb93.jpg")} title={"التدخين"} direction={" التدخين مفطر للصائم ولايجوز لمسلم شربها."}/>
        <MobtalatBox image={require("../img/Mobtalat/2fa2066a9f29877c9deda87c3658ff94.jpg")} title={"الابر المغذية"} direction={"الابر المغذية مفطرة للصائم وأما الابر غير المغذية تجوز اثناء الصيام."}/>
        <MobtalatBox image={require("../img/Mobtalat/73fa4d35a92ca891555eadf90ade6f25.jpg")} title={"السب و الشتيمة "} direction={"السب و الشتيمة ليس مفطر و لكن ينقص من أجر الصيام و أما سب الدين فهو خارج عن الملة كلها."}/>
        <MobtalatBox image={require("../img/Mobtalat/2018_3_2_21_54_56_73.jpg")} title={"النميمة و الغيبة"} direction={"النميمة و الغيبة تنقص من أجر الصيام و لكنها ليست مفطرة."}/>
        <MobtalatBox image={require("../img/Mobtalat/c009096850e88091d8a6b7740af8ad27.jpg.webp")} title={"النوم و الخمول"} direction={"النوم و الخمول في نهار رمضان فهو منقص من أجر الصيام و لكنه ليس مفطر."}/>
        <MobtalatBox image={require("../img/Mobtalat/e1d0e36daad6f4868a8ca882d1d69c4e.jpg")} title={"مشاهدة التلفاز"} direction={"مشاهدة التلفاز للأشياء الغير مفيدة فهو ينقص من أجر الصيام بسبب وجود متبرجات في برامج التلفاز   ."}/>
        <MobtalatBox image={require("../img/Mobtalat/images-2021-11-15T001610.413.webp")} title={"التقيئ"} direction={"التقيئ المتعمد فهو مفطر للصائم أما الغير متعمد فلا مشكلة به."}/>
        </div>
        </div>
        <div className="c4 h-[30vh] mt-10 flex bg-[#9BB8CD] justify-evenly items-center flex-wrap lg:flex-row md:flex-row sm:flex-row flex-col">
            <Link to={"/"} className="font-bold text-[23px]">
                امير الاسلام
            </Link>
            <Link to={"/salat"} className="font-bold text-[23px]">
            الصلوات 
            </Link>
            <Link to={"/azkar"} className="font-bold text-[23px]">
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
  )
}
