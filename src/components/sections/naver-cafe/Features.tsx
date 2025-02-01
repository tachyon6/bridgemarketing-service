import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const features = [
    {
        image: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=400",
        title: "정확한 타겟팅",
        description: "맘카페, 지역카페, 취미카페 등 관심사 기반 맞춤 타겟팅",
    },
    {
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400",
        title: "높은 도달률",
        description: "월간 순방문자 4,500만 명의 국내 최대 커뮤니티 플랫폼",
    },
    {
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=400",
        title: "합리적인 비용",
        description: "기존 온라인 마케팅 채널 대비 최대 60% 비용 절감",
    },
    {
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400",
        title: "전문 컨설팅",
        description: "15년 이상의 네이버 카페 마케팅 노하우로 최적의 전략 제시",
    },
];

export function Features() {
    return (
        <section className='py-20 relative overflow-hidden bg-gradient-to-br from-white to-green-50'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className='text-4xl font-bold text-center mb-4 font-aggro'
                >
                    네이버 카페 마케팅의 강점
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className='text-gray-600 text-center mb-12 max-w-2xl mx-auto px-4 font-tway'
                >
                    온라인 마케팅의 새로운 기준을 제시합니다. 
                    <br />
                    정확한 타겟팅과 높은 도달률로 귀사의 마케팅 목표를 달성하세요.
                </motion.p>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'>
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className='h-full mx-4 sm:mx-0'
                        >
                            <Card className='h-full flex flex-col hover:shadow-lg transition-all duration-300 overflow-hidden group'>
                                <div className='relative h-48 flex-shrink-0'>
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'
                                    />
                                </div>
                                <div className='p-6 flex flex-col flex-grow'>
                                    <h3 className='text-xl font-bold mb-2 text-gray-900 font-tway'>{feature.title}</h3>
                                    <p className='text-gray-600 font-tway'>{feature.description}</p>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
} 
