import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import './index.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Data = [
    {
        id: 1,
        image: "https://cdn2.cellphones.com.vn/690x300/https://dashboard.cellphones.com.vn/storage/zenbook%2014.png"
    },
    {
        id: 2,
        image: "https://cdn2.cellphones.com.vn/690x300/https://dashboard.cellphones.com.vn/storage/rightbanner-des-ipapro11.png"
    },
    {
        id: 3,
        image: "https://cdn2.cellphones.com.vn/690x300/https://dashboard.cellphones.com.vn/storage/Fold3.png"
    },
]
const DataSwiper = [
    {
        id: 1,
        image: "https://cdn.didongviet.vn/pub/media/mageplaza/bannerslider/banner/image/7/6/768x371_61.jpg"
    },
    {
        id: 2,
        image: "https://cdn.didongviet.vn/pub/media/mageplaza/bannerslider/banner/image/7/6/768x371_3__19.jpg"
    },
    {
        id: 3,
        image: "https://cdn.didongviet.vn/pub/media/mageplaza/bannerslider/banner/image/7/6/768x381.png"
    },
    {
        id: 4,
        image: "https://cdn.didongviet.vn/pub/media/mageplaza/bannerslider/banner/image/7/6/768x371_92.jpg"
    }
]
const DataTrend = [
    {
        id: 1,
        name: 'Galaxy S21 Ultra 5G',
        title: 'Mở bán. Ưu đã khủng',
        href: '#',
    },
    {
        id: 2,
        name: 'iPhone 14 Pro Max',
        title: 'Thiết kế hoàn hảo',
        href: '#',
    },
    {
        id: 3,
        name: 'iPhone 13 Pro Max',
        title: 'Sang trọng. Đẳng cấp',
        href: '#',
    },
    {
        id: 4,
        name: 'AirPods Pro',
        title: 'Âm thanh chân thực',
        href: '#',
    },
    {
        id: 5,
        name: 'Oppo Reno5 Pro 5G',
        title: 'Màn hình siêu mỏng',
    },
    {
        id: 6,
        name: 'Laptop Asus Zenbook 14',
        title: 'Hiệu năng mạnh mẽ',
    },
    // {
    //     id: 7,
    //     name: 'Laptop Lenovo ThinkPad X1 Carbon',
    //     title: 'Màn hình siêu mỏng',
    // }

]
const DataiPhone = [
    {
        id: 1,
        name: 'iPhone 14 Pro Max 512GB | Chính hãng VN/A',
        price: '31.990.000đ',
        image: 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/b/_/b_c_ar_6.png',
        note: 'Giảm 3.500.000đ',
    },
    {
        id: 2,
        name: 'iPhone 13 Pro Max 512GB | Chính hãng VN/A',
        price: '31.990.000đ',
        image: 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/b/_/b_c_ar_6.png',
        note: 'giam iahdk hkasjdow8euiwo ishdkasjh23ihi',
    },
    {
        id: 3,
        name: 'iPhone 12 Pro Max 512GB | Chính hãng VN/A',
        price: '31.990.000đ',
        image: 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/b/_/b_c_ar_6.png',
        note: 'Giảm 3.500.000đ cho mấy thằng ngu học',
    },
    {
        id: 4,
        name: 'iPhone 11 Pro Max 512GB | Chính hãng VN/A',
        price: '31.990.000đ',
        image: 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/b/_/b_c_ar_6.png',
        note: 'Giảm 3.500.000đ cho ml Duy',
    },
    {
        id: 5,
        name: 'iPhone 10 Pro Max 512GB | Chính hãng VN/A',
        price: '31.990.000đ',
        image: 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/b/_/b_c_ar_6.png',
        note: 'Giảm 3.500.000đ dickkkkkkkkkkkkkkkkkk',
    },
    {
        id: 6,
        name: 'iPhone 15 Pro Max 512GB | Chính hãng VN/A',
        price: '31.990.000đ',
        image: 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/b/_/b_c_ar_6.png',
        note: 'Giảm 3.500.000đ iku iku iku',
    },
    {
        id: 7,
        name: 'iPhone 16 Pro Max 512GB | Chính hãng VN/A',
        price: '31.990.000đ',
        image: 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/b/_/b_c_ar_6.png',
        note: 'Đéo giảm',
    },
    {
        id: 8,
        name: 'iPhone 17 Pro Max 512GB | Chính hãng VN/A',
        price: '31.990.000đ',
        image: 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/b/_/b_c_ar_6.png',
        note: 'Giảm 3.ádkjad kashdkja124124500.000đ',
    },
    {
        id: 9,
        name: 'iPhone 18 Pro Max 512GB | Chính hãng VN/A',
        price: '31.990.000đ',
        image: 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/b/_/b_c_ar_6.png',
        note: 'Giảm 3.500.000đ',
    },
    {
        id: 10,
        name: 'iPhone 19 Pro Max 512GB | Chính hãng VN/A',
        price: '31.990.000đ',
        image: 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/b/_/b_c_ar_6.png',
        note: 'Giảm 3.500.000đxxx serlox io12jokdsdwe',
    },
    {
        id: 11,
        name: 'iPhone 20 Pro Max 512GB | Chính hãng VN/A',
        price: '31.990.000đ',
        image: 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/b/_/b_c_ar_6.png',
        note: 'Giảm 3.500.000đ1 hi 24128ufsoidfsdff',
    },
    {
        id: 12,
        name: 'iPhone 21 Pro Max 512GB | Chính hãng VN/A',
        price: '31.990.000đ',
        image: 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/b/_/b_c_ar_6.png',
        note: 'Giảm 3.500.as9o12 oiew000đ',
    },
]
export default function HomeScreen() {
    return (
        <div className='pt-5'>
            <div className='flex max-w-screen-2xl mx-auto px-2'>
                <div className='2xl:hidden basis-[20%] bg-white rounded-md pl-1 pr-1 mr-2.5'>
                    <div className=" bg-red-600 h-10 rounded-md">
                        <p className=' text-center text-white pt-2'>Xu hướng mua sắm</p>
                    </div>
                    {DataTrend.map((item) => (
                        <div className='flex flex-row items-center mt-2.5 border-b-2 border-b-cartNumBg '>
                            <div className='w-1/4'>
                                <p className='text-center text-gray-400'>#{item.id}</p>
                            </div>
                            <div className='w-3/4 cursor-pointer mb-2'>
                                <p className='text-sm'>{item.name}</p>
                                <p className='text-xs'>{item.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='  xl:hidden basis-[20%] bg-white rounded-md pl-1 pr-1 mr-2.5'>
                    <div className=" bg-red-600 h-10 rounded-md">
                        <p className=' text-center text-white pt-2'>Xu hướng mua sắm</p>
                    </div>
                    {DataTrend.map((item, index) => index < 4 && (
                        <div className='flex flex-row items-center mt-2.5 border-b-2 border-b-cartNumBg '>
                            <div className='w-1/4'>
                                <p className='text-center text-gray-400'>#{item.id}</p>
                            </div>
                            <div className='w-3/4 cursor-pointer mb-2'>
                                <p className='text-sm'>{item.name}</p>
                                <p className='text-xs'>{item.title}</p>
                            </div>
                        </div>
                    ))}
                </div>


                <div className='  xl:w-[750px] xl:h-[380px] md:w-[650px] md:h-[350px] flex justify-center basis-[50%] bg-slate-100 rounded-md'>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        autoplay={{ delay: 3000 }}
                        pagination={{ clickable: true }}
                        className=' rounded-md'>
                        {DataSwiper.map((item) => (
                            <SwiperSlide key={item.id}>
                                <img className="h-full" src={item.image} alt="" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className='basis-[30%]'>
                    {Data.map((item, index) => (
                        <div className='flex flex-col pl-3 mb-1.5 pr-1'>
                            <div className='flex justify-center h-[120px]'>
                                <img className='w-full rounded-lg' src={item.image} alt="" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className=" px-2 py-2 mt-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 grid w-full">
                {DataiPhone.map((item, index) => (
                    <div className="flex flex-col relative bg-white shadow-xl rounded-2xl w-[230px] h-[450px]">
                        <a href="https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/309386911_2963210790642194_8982269311703264944_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=dbeb18&_nc_ohc=oWHEiRrEzRsAX_mTNQZ&_nc_ht=scontent.fsgn5-14.fna&oh=00_AT_N15U9x0twpAzv47maoseyIFo4DRuIAFqi3y0I19NJmQ&oe=633AEAA9"
                            className="flex flex-col">
                            <img src={item.image} alt="" className=" self-center w-[200px] h-[200px]" />
                            <p className=" px-2 py-2">{item.name}</p>
                            <p className=" px-2 py-4 text-lg text-red-600">{item.price}</p>
                            <div className=" bg-red-100 rounded border-2 px-2 w-11/12 self-center ">
                                <p>{item.note}</p>
                            </div>
                        </a>
                        <div className="flex items-center absolute self-end bottom-2 right-1 w-fit">
                            <span className="text-sm px-1">Yêu thích</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 hover:text-red-600">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                Laptop
            </div>
            <div>
                Âm thanh
            </div>
            <div>

            </div>
            <div>
                footer
            </div>
        </div>
    );
}

