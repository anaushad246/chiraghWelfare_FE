// NewsSlider.js

// Import React and necessary packages
import React from 'react';

// Import slick-carousel CSS
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Import the Slider component from react-slick
import Slider from "react-slick";

const NewsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false, // Ensures no margin around the slide
    swipeToSlide: true,
        }
      }
    ]
  };
  const images = [
    {
       src: "/news1.jpg",
       width: 320,
       height: 212,
       header:"चिराग़ वेलफेयर फाउंडेशन द्वारा कैरियर मार्गदर्शन का आयोजन",
       header2:"सांसारिक सफलता परलोक के कल्याण में निहित है : डा वजीहउल कमर "
    },
    {
       src: "/news2.jpg",
       width: 320,
       height: 212,
       header:" سیرت النبیﷺ کوئز کمپٹیشن کا انعقاد",
       header2:"دارالفلاح سہرول کی جانب سے سب ڈویزن سطح کا سیرت النبیﷺ کوئز مقابلہ اختتام پذیر",
       tags: [
          { value: "Ocean", title: "Ocean" },
          { value: "People", title: "People" },
       ],
       alt: "Boats (Jeshu John - designerspics.com)",
    },
    {
       src: "/news3.jpg",
       width: 320,
       height: 212,
       header:" سماج کو صحت مند رکھنے کے لیے میڈیکل کیمپ کا انعقاد",
       header2:"صحت مند سماج کے حصول کے لیے میڈیکل کیمپ کا انعقاد بہترین ذریعہ ہے",
       
    },
    {
      src: "/news4.jpg",
       width: 320,
       height: 212,
       header:" خدمت خلق کا جذبہ پیدا کرنا انسسانی ھمدردی کی پہچان ہے:ذوالفقاراللہ",
       header2:"باہم مربوط رہ کر اسلامی احکام کی اشاعت ضروری:ناظم علاقہ",
       
    },
    {src: "/news5.jpg",
      width: 320,
      height: 212,
      header:" تعلیم سے معاش کا اٹوٹ رشتہ ہے:سمت کمار",
      header2:"چراغ ویلفئر فاؤنڈیشن کے ایک سال مکمل ہونے پر سمینار کا انعقاد،22اساتذہ کو عزت افزائی ایوارڈ سے نوازا گیا ",
      
    },
    {src: "/news6.jpg",
      width: 320,
      height: 212,
      header:" چراغ ویلفئر فاؤنڈیشن کے زیر اھتمام راحت کاری",
       header2:"سیلاب متاثرین تک امداد پہنچانا انسانیت کی پہچان:محمد وجہ القمر",
       
    },
    {src: "/news7.jpg",
      width: 320,
      height: 212,
      header:"सामाजिक उत्थान के लिए आदर्श समाज की ज़रुरत : विधायक",
      tags: [
        { value: "HelpingHand", title: "Ocean" },
        { value: "People", title: "People" },
     ]},{src: "/news8.jpg",
      width: 320,
      height: 212,
    header:"نوجوان تعلیمی ،سماجی و معاشرتی ترقی میں معاونت کے لیے آگے آئیں",
    header2:"چراغ ویلفئر فاؤنڈیشن کے زیر اھتمام منعقدہ تقریب سے سابق وزیر ھارون یوسف کا اظھار خیال",
    }
  ];
  return (
    <div className=" bg-[#E5E5E5] text-[#333333] mb-6 ">
        <h1 className="text-3xl font-bold p-4 text-center ">News</h1>
      <Slider {...settings}>
        {images.map((item, index) => (
          <div key={index} className=" bg-white shadow-lg rounded-lg p-4 h-[100%]">
            
            <div className=" relative overflow-hidden rounded-md mb-3 flex flex-col items-center justify-center">
              <img 
                src={item.src} 
                alt="Post"
                className="w-fit px-1  transition-transform duration-200 transform scale-100 hover:scale-110"
              />
              {/* <a href="#" className="over-layer p-4 absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500 to-indigo-600 opacity-0 hover:opacity-75 flex justify-center items-center transition-opacity duration-500">
                <i className="fa fa-link text-red-900 text-2xl"></i>
              </a> */}
            </div>
            <div className="post-content px-5 pb-10">
              <h3 className="post-title text-lg font-bold uppercase mb-2">
                <a href="#" className="text-gray-800 hover:text-blue-600 transition-colors">{item.header}</a>
              </h3>
              <p className="post-description text-gray-600 leading-relaxed mb-4">{item.header2}</p>
              <span className="post-date text-gray-500 text-sm flex items-center">
                <i className="fa fa-clock-o text-gray-300 mr-2"></i>Out 27, 2019
              </span>
              <a href="#" className="read-more bg-blue-600 text-white text-xs px-4 py-2 rounded-full float-right hover:bg-blue-700 transition-colors shadow-md">Read more</a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewsSlider;
