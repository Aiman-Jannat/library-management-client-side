import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { EffectFade } from 'swiper/modules';
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import { FreeMode, Pagination } from 'swiper/modules';
import {RxArrowTopRight} from 'react-icons/rx';
import { useState } from 'react';

const Banner = () => {

    
    let items = [
        {
            
            title: "A reader lives a thousand lives before he dies. The man who never reads lives only one",
            content: "George R.R. Martin",
            backgroundImage: "https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGlicmFyeXxlbnwwfHwwfHx8MA%3D%3D",
          },
          {
            
            title: "A book is a dream that you hold in your hand.",
            content: "Neil Gaiman",
            backgroundImage: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGlicmFyeXxlbnwwfHwwfHx8MA%3D%3D",
          },
          {
            
            title: "Reading is to the mind what exercise is to the body.",
            content: "Joseph Addison",
            backgroundImage:"https://png.pngtree.com/thumb_back/fh260/background/20210902/pngtree-photographs-of-unmanned-bookstores-in-the-library-image_785535.jpg",
          },
          {
            
            title: "You can find magic wherever you look. Sit back and relax, all you need is a book.",
            content: "Dr. Seuss",
            backgroundImage: "https://cdn.fs.teachablecdn.com/GpsIi4EURaiyKN8uiWLG",
          },
          {
            
            title: "A reader lives a thousand lives. The man who never reads lives only one.",
            content: "George R.R. Martin",
            backgroundImage: "https://st.depositphotos.com/1064024/2602/i/450/depositphotos_26027471-stock-photo-pile-of-books.jpg",
          },
          {
            
            title: "A book is a gift you can open again and again.",
            content: "Garrison Keillor",
            backgroundImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC8Zfsnf09hu54eMveTBjbTsQhlJYldv4hIw&usqp=CAU",
          },

    ];
    
    
    return (
        <div className='bg-purple-200 relative ' style={{backgroundImage:'url("data:image/png;base64,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")'}}>
             <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-50" />
             <Swiper
             breakpoints={{
                340: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },
                700: {
                  slidesPerView: 3,
                  spaceBetween: 15,
                },
              }}
              freeMode={true}
              pagination={{
                clickable: true,
                top:"5px"
              }}
              modules={[FreeMode, Pagination]}
              className="max-w-[90%] lg:max-w-[80%]"
             >
                {items.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="flex flex-col gap-6 my-5  py-8 group relative shadow-lg text-white rounded-xl px-6  h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
              <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-50" />
              <div className="relative flex flex-col gap-3 mt-20 text-lg font-bold">
                
                <h1 className="text-xl lg:text-2xl">{item.title} </h1>
                <p className="lg:text-[18px]">{item.content} </p>
              </div>
              <RxArrowTopRight className="absolute  bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
            </div>
          </SwiperSlide>
        ))}

             </Swiper>
        </div>
    );
};

export default Banner;