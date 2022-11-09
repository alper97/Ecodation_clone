import React from "react";
import Header from "../elements/Home/Header";

import { ReceiptLong, PhonelinkRing, Instagram, Headphones, MailOutline, LinkedIn, East, Layers, DataUsage, PermIdentity, ShoppingBasket, SupportAgent, Inventory, AccessTime, AttachMoney } from '@mui/icons-material';

import Roboti from "../Data/img/Robot.jpg";

import Logo from "../Data/img/Logo.png"
import Logo1 from "../Data/logo/Yildiz_Technical_University_Logo.png";
import Logo2 from "../Data/logo/1280px-Türk_Telekom_logo.svg.png";
import Logo3 from "../Data/logo/20200618101521Turkcell_logo.png";
import Logo4 from "../Data/logo/paycell-logo.svg";
import Logo5 from "../Data/logo/download-7.png";
import Logo6 from "../Data/logo/download-8.png";
import Logo7 from "../Data/logo/download-9.png";
import Logo8 from "../Data/logo/isaretdilim.webp";
import Logo9 from "../Data/logo/Pegasus_Airlines.jpeg";
import Logo10 from "../Data/logo/main-logo-dark.png";
import Logo11 from "../Data/logo/eco_ref.png";
import Logo12 from "../Data/logo/logo-hayal_480x360.png";
import Svg from "../Data/logo/layered-waves-haikei.svg";


export default function App() {
    return (
        <div class="w-full bg-home-pattern h-screen bg-cover bg-no-repeat">
            {/* Section1 */}
            <div className="container h-screen md:mx-auto mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-0 lg:px-0">
                <div><Header /></div>
                <div class="mt-56 gap-7 grid justify-items-start ">
                    <h1 className="text-5xl">Better digital future for nex- <br /> gen customers</h1>
                    <h4 className="text-xl">We are here to take over all your digital problems and fix <br /> them one by one to keep them managed</h4>
                    <button className="p-3 px-9 duration-700 rounded-lg bg-greener hover:bg-white hover:text-greener"><a href="/Book">Lern More</a></button>
                </div>
            </div>
            {/* Section2 */}
            <div className="-mt-8">
                <div className="container md:mx-auto mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-0 lg:px-0 text-zinc-800 ">
                    <div className="grid lg:grid-cols-6 grid-cols-1 pt-20">
                        <div className="col-span-2 grid gap-5 content-center h-full justify-items-start">
                            <h2 className="text-4xl font-light">Some of the investment services we offer</h2>
                            <p className="text-lg font-light">
                                We have been supporting our customers’ digital transformations for many years. Ecodation is your digital transformation partner with high quality and fast solutions. .
                            </p>
                            <button className="text-white border-spacing-1 font-semibold px-9 py-2 bg-greener rounded-lg uppercase"><a href="/Book">Viev More</a></button>
                        </div>
                        <div className="grid grid-cols-1 xl:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-6 col-span-4 m-7 mx-16">
                            <div className="grid gap-6 col-span-1 md:mb-8 xl:mb-0" >
                                <div className="card ">
                                    <div className="grid gap-4 p-8 hover:-translate-y-9 duration-300">
                                        <ReceiptLong className="text-greener object-none" sx={{ fontSize: 60 }} />
                                        <h5 className="text-lg font-semibold">Mobile Banking</h5>
                                        <p className="text-base font-normal ">Build your own digital bank with mobile banking solutions. </p>
                                        <East fontSize="large" className=" text-white" />
                                    </div>
                                </div>
                                <div className="card ">
                                    <div className="grid gap-4 p-8 hover:-translate-y-9 duration-300">
                                        <Layers className="text-greener object-none" sx={{ fontSize: 60 }} />
                                        <h5 className="text-lg font-semibold">Digital Education</h5>
                                        <p className="text-base font-normal ">Build your own training system with our LMS system. </p>
                                        <East fontSize="large" className=" text-white" />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-[-2rem] grid gap-6 mb-8 col-span-1">
                                <div className="card ">
                                    <div className="grid gap-4 p-8 hover:-translate-y-9 duration-300">
                                        <PhonelinkRing className="text-greener object-none" sx={{ fontSize: 60 }} />
                                        <h5 className="text-lg font-semibold">Mobile Application</h5>
                                        <p className="text-base font-normal ">Let’s develop your native mobile application together. We can also make super apps. </p>
                                        <East fontSize="large" className=" text-white" />
                                    </div>
                                </div>
                                <div className="card ">
                                    <div className="grid gap-4 p-8 hover:-translate-y-9 duration-300">
                                        <DataUsage className="text-greener object-none" sx={{ fontSize: 60 }} />
                                        <h5 className="text-lg font-semibold">Data Monitoring</h5>
                                        <p className="text-base font-normal ">Manage your data and reports from a single tool. Watch constantly. Set alarms. Get alerts.</p>
                                        <East fontSize="large" className=" text-white" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            {/* Section3 */}
            <div className="container text-zinc-800 md:mx-auto mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-0 lg:px-0">
                <div className="grid justify-items-center  my-14 gap-7">
                    <p className="text-zinc-400 text-xs font-bold">SOLUTIONS</p>
                    <h3 className="text-3xl font-light mt-5 ">How We Works</h3>
                    <div className="grid gap-32 my-14 lg:grid-cols-3 ">
                        <div className="card2">
                            <Layers sx={{ fontSize: 60 }} className="text-greener" />
                            <h6 className="text-lg font-semibold text-zinc-700 text-center">Product Installation</h6>
                            <p className="text-base font-normal text-zinc-500 text-center mt-3 ">We can produce fast solutions with our <br /> products suitable for you.</p>
                        </div>
                        <div className="card2">
                            <ShoppingBasket sx={{ fontSize: 60 }} className="text-greener" />
                            <h6 className="text-lg font-semibold text-zinc-700 text-center">End-to-End Digital Transformation</h6>
                            <p className="text-base font-normal text-zinc-500 text-center mt-3 ">We can develop new products to suit <br /> your needs..</p>
                        </div>
                        <div className="card2">
                            <SupportAgent sx={{ fontSize: 60 }} className="text-greener" />
                            <h6 className="text-lg font-semibold text-zinc-700 text-center">Outsourcing Service</h6>
                            <p className="text-base font-normal text-zinc-500 text-center mt-3 ">We can provide qualified resource <br /> support to your ongoing projects.</p>
                        </div>
                    </div>
                </div>

            </div>
            {/* Section4 */}
            <div className="container py-9 text-zinc-800 md:mx-auto mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-0 lg:px-0">
                <div className="grid grid-cols-6 items-stretch">
                    <div className="lg:p-9 lg:col-span-4 col-span-6">
                        <img src={Roboti} alt="" className=" shadow-lg" />
                    </div>
                    <div className="lg:col-span-2 col-span-6 self-center lg:p-5 py-5">
                        <h3 className="text-4xl font-light mb-6 " >Next generation <br /> solutions for new generation customers.</h3>
                        <p className="text-lg font-normal text-zinc-600">Your customers’ wishes, perspectives and needs are changing. Capture the change.</p>
                    </div>
                </div>
            </div>
            <hr />
            {/* Section5 */}
            <div className="container text-zinc-800 md:mx-auto mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-0 lg:px-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-28 gap-8">
                    <div className="card3 ">
                        <div className="flex justify-between border-b p-4">
                            <p className="text-base font-semibold">RD Product</p>
                            <Inventory className="text-greener" />
                        </div>
                        <div className="grid text-center p-8 min-h-[10rem]">
                            <p className="text-5xl font-light">12</p>
                            <p className="text-xs text-zinc-600">Products over 5 years</p>
                        </div>
                    </div>
                    <div className="card3 bg-greener text-white">
                        <div className="flex justify-between border-b border-green-300 p-4">
                            <p className="text-base font-semibold">Users</p>
                            <AttachMoney className="text-green-300" fontSize="medium" />
                        </div>
                        <div className="grid text-center p-8 min-h-[10rem]">
                            <div className="flex justify-center items-end pb-4">
                                <p className="text-5xl font-light">12</p>
                                <p className="text-xl font-semibold pl-2">Million</p>
                            </div>
                            <p className="text-xs text-white">the user who uses our products.</p>
                        </div>
                    </div>
                    <div className="card3 ">
                        <div className="flex justify-between border-b p-4">
                            <p className="text-base font-semibold">Experience</p>
                            <AccessTime className="text-greener" />
                        </div>
                        <div className="grid text-center p-8 min-h-[10rem]">
                            <div className="flex justify-center items-end pb-4">
                                <p className="text-5xl font-light">10</p>
                                <p className="text-xl font-semibold pl-2">Years</p>
                            </div>
                            <p className="text-xs text-zinc-600">we provide service</p>
                        </div>
                    </div>
                    <div className="card3 ">
                        <div className="flex justify-between border-b p-4">
                            <p className="text-base font-semibold">Clients</p>
                            <PermIdentity className="text-greener" />
                        </div>
                        <div className="grid text-center p-8 min-h-[10rem]">
                            <p className="text-5xl font-light">+100</p>
                            <p className="text-xs text-zinc-600">from across the world</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Section6 */}
            <div className="container text-zinc-800 md:mx-auto mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-0 lg:px-0">
                <h3 className="text-center text-4xl font-light">Our trusted partners</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 mt-8 gap-14 items-center justify-items-center ">
                    <img src={Logo1} alt="#" className="max-h-32 max-w-[12rem]" />
                    <img src={Logo2} alt="#" className="max-h-32 max-w-[12rem]" />
                    <img src={Logo3} alt="#" className="max-h-32 max-w-[12rem]" />
                    <img src={Logo4} alt="#" className="max-h-32 max-w-[12rem]" />
                    <img src={Logo5} alt="#" className="max-h-32 max-w-[12rem]" />
                    <img src={Logo6} alt="#" className="max-h-32 max-w-[12rem]" />
                    <img src={Logo7} alt="#" className="max-h-32 max-w-[12rem]" />
                    <img src={Logo8} alt="#" className="max-h-32 max-w-[12rem]" />
                    <img src={Logo9} alt="#" className="max-h-32 max-w-[12rem]" />
                    <img src={Logo10} alt="#" className="max-h-32 max-w-[12rem]" />
                    <img src={Logo11} alt="#" className="max-h-32 max-w-[12rem]" />
                    <img src={Logo12} alt="#" className="max-h-32 max-w-[12rem]" />
                </div>
                <p className="text-center font-light mt-8">+100 costumers ..</p>
            </div>
            {/* Section5 */}
            <div className="bg-greener">
                <div className="container text-zinc-800 md:mx-auto mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-0 lg:px-0">
                    <div className=" text-center py-9 text-white grid gap-7">
                        <p className="text-lg font-semibold">INNOVATION STARTS HERE</p>
                        <p className="text-4xl font-light mx-36"> We are with you in your digital transformation. Would you like to meet us?</p>
                        <div>
                            <button className="w-28 h-9 bg-white rounded-full shadow-lg text-xs font-semibold "><a href="/Book" className="text-greener">BOOK NOW</a></button>
                        </div>
                    </div>
                </div>
            </div>
            <img src={Svg} alt="#" className="w-full" />
            <hr />
            {/* Section6 */}
            <div className=" container text-zinc-800 md:mx-auto mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-0 lg:px-0">
                <div className="grid grid-cols-1 md:grid-cols-3 py-8">
                    <div className="grid gap-6 p-8">
                        <img src={Logo} alt="/" className="w-36" />
                        <p className="text-base font-normal text-zinc-500">Copyright © 2022 Ecodation Technology All Rights Reserved</p>
                        <div className="text-zinc-500 flex gap-2">
                            <Instagram />
                            <LinkedIn />
                        </div>
                    </div>
                    <div className="grid gap-6 text-zinc-500 border-r border-l p-8">
                        <p className="text-black font-semibold text-lg">RD Office :</p>
                        <p>Yıldız Teknik Üniversitesi Teknopark A1 Blok  Esenler/İstanbul</p>
                        <div className="flex gap-3">
                            <Headphones />
                            <p>+90 (0212) 934 10 84</p>
                        </div>
                        <div className="flex gap-3">
                            <MailOutline />
                            <p>info@ecodation.com</p>
                        </div>
                    </div>
                    <div className="grid gap-6 text-zinc-500 p-8">
                        <p className="text-black font-semibold text-lg">Europe Office :</p>
                        <p>Harju maakond, Tallinn, Estonia Lasnamäe linnaosa, Sepapaja tn 6, 15551</p>
                        <div className="flex gap-3">
                            <MailOutline />
                            <p>info@ecodation.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


