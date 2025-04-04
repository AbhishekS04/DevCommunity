import Tag from "@/components/Tag";
import Image from "next/image";
import FeatureCard from "@/components/FeatureCard";
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import avatar2 from "@/assets/images/admin2222.jpg";
import avatar3 from "@/assets/images/avatar-lula-meyers.jpg";
import Avatar from "@/components/Avatar";
import Key from "@/components/Key";


const features = [
    "Asset Library",
    "Code Preview",
    "Flow Mode",
    "Smart Sync",
    "Auto Layout",
    "Fast Search",
    "Smart Guides",
];

export default function Features() {
    return (
        <section className="py-24">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Key Points</Tag>
                </div>
                <h2 className="text-6xl font-medium text-center mt-6 max-w-2xl mx-auto">
                    When knowledge meets{" "}
                    <span className="text-lime-400">good brain&apos;s</span>
                </h2>
                <div className="mt-12 grid grid-cols-1 lg:grid-cols-3  md:grid-cols-4 gap-8">
                    <FeatureCard
                        title="Community Admins"
                        description="Empowering developers to connect, share
                                knowledge, and build together with intuitive
                                tools and seamless workflows."
                                className="md:col-span-2 lg:col-span-1"
                    >
                        <div className="aspect-video flex items-center">
                            <Avatar className="z-40">
                                <Image
                                    src={avatar1}
                                    alt="Avatar 1"
                                    className="rounded-full"
                                />
                            </Avatar>

                            <Avatar className="-ml-6 border-indigo-500 z-30">
                                <Image
                                    src={avatar2}
                                    alt="Avatar 2"
                                    className="rounded-full"
                                />
                            </Avatar>

                            <Avatar className="-ml-6 border-amber-500 z-20">
                                <Image
                                    src={avatar3}
                                    alt="Avatar 3"
                                    className="rounded-full"
                                />
                            </Avatar>
                            <Avatar className="-ml-6 border-transparent">
                                <div className="size-full bg-neutral-700 rounded-full inline-flex items-center justify-center gap-1">
                                    {Array.from({ length: 3 }).map((_, i) => (
                                        <span
                                            className="size-1.5 rounded-full bg-white inline-flex"
                                            key={i}
                                        ></span>
                                    ))}
                                </div>
                            </Avatar>
                        </div>
                    </FeatureCard>
                    <FeatureCard
                        title=" community"
                        description=" Fostering collaboration and engagement through
                                interactive discussions, shared resources, and
                                real-time feedback."
                                className="md:col-span-2 lg:col-span-1"
                    >
                        <div className="aspect-video flex items-center justify-center">
                            <p className="text-4xl font-extrabold text-white/20 text-center">
                                Empowering you {" "}
                              
                                <span className=" text-5xl bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                                    {" "}to grow{"  "}
                                </span>
                                <span>
                                   {""} with us
                                </span>
                            </p>
                        </div>
                    </FeatureCard>
                    <FeatureCard
                        title="Keyboard Shortcut"
                        description="Keyboard quick action to delete your problem"
                        className="md:col-span-2 lg:col-span-1 md:col-start-2 lg:col-start-auto"
                    >
                        <div className="aspect-video flex items-center justify-center gap-4">
                            <Key className="w-28">ctrl</Key>
                            <Key>a</Key>
                            <Key>del</Key>
                        </div>
                    </FeatureCard>
                </div>
                <div className="mt-8 flex flex-wrap gap-3 justify-center"> 
                    {features.map((feature) => (
                        <div key={feature} className="bg-neutral-900 border border-white/10 inline-flex px-3 md:px-5 py-1.5 md:py-2 py-1.5 rounded-2xl gap-3 items-center">
                            <span className="bg-lime-400 text-neutral-950 size-5 rounded-full inline-flex items-center justify-center text-xl">&#10038;</span>
                            <span className="font-medium md:text-lg">{feature}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
