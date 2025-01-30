import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#2DB400] to-[#1E9600]">
            <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative pt-20 sm:pt-0'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className='max-w-4xl mx-auto text-center'
                >
                    <div className='space-y-12 mb-12'>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="font-['Changa'] text-[28px] sm:text-[50px] font-bold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-[#E5FFE8] to-[#FFFFFF] select-none"
                        >
                            BRIDGE MARKETING
                        </motion.p>
                        <div className='flex items-center justify-center gap-12'>
                            <motion.img
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                src='/logo/naverplace.png'
                                alt='네이버 플레이스 로고'
                                className='h-28 rounded-2xl'
                            />
                            <motion.h1
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="font-['Changa'] text-[50px] sm:text-[130px] font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-br from-[#E5FFE8] via-[#FFFFFF] to-[#F5FFF7] select-none leading-none"
                            >
                                PLACE
                            </motion.h1>
                        </div>
                        <div className='space-y-8'>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className='text-3xl sm:text-5xl font-bold text-white font-aggro'
                            >
                                대한민국 최대 지도 서비스 마케팅
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className='text-lg sm:text-xl text-white/90 px-4 font-tway'
                            >
                                4,200만 이상의 사용자가 이용하는 네이버 플레이스에서 시작하세요.
                                <br className='hidden sm:block' />
                                매장의 노출도를 높이고 방문자 수를 늘리는 최적의 마케팅 솔루션을 제공합니다.
                            </motion.p>
                        </div>

                        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 mt-12 pb-8 sm:pb-0'>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                className='bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white'
                            >
                                <h3 className='text-2xl sm:text-4xl font-bold mb-2'>4,200만+</h3>
                                <p className='text-sm sm:text-base text-white/80'>월간 활성 사용자</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className='bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white'
                            >
                                <h3 className='text-2xl sm:text-4xl font-bold mb-2'>25만+</h3>
                                <p className='text-sm sm:text-base text-white/80'>등록 매장 수</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.7 }}
                                className='bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white'
                            >
                                <h3 className='text-2xl sm:text-4xl font-bold mb-2'>99%</h3>
                                <p className='text-sm sm:text-base text-white/80'>광고 만족도</p>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className='mt-12 pb-16 sm:pb-20'
                        >
                            <a
                                href='http://pf.kakao.com/_CYGdn/chat'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-white/90 text-[#2DB400] rounded-full font-bold text-lg transition-all duration-300 hover:scale-105'
                            >
                                <MessageCircle className='w-5 h-5' />더 빠른 성장을 원하시나요?
                            </a>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
} 
