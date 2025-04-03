import Tag from "@/components/Tag";
import Image from "next/image";
import FeatureCard from "@/components/FeatureCard";
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import avatar2 from "@/assets/images/avatar-florence-shaw.jpg";
import avatar3 from "@/assets/images/avatar-lula-meyers.jpg";
import Avatar from "@/components/Avatar";

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
                <h2 className="text-6xl font-medium text-center mt-6">
                    When knowledge meets{" "}
                    <span className="text-lime-400">good brain</span>
                </h2>
                <div className="mt-12 grid grid-cols-1 gap-8">
                    <FeatureCard
                        title="Community dmins"
                        description="Empowering developers to connect, share
                                knowledge, and build together with intuitive
                                tools and seamless workflows."
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
                        title="Interactive community"
                        description=" Fostering collaboration and engagement through
                                interactive discussions, shared resources, and
                                real-time feedback."
                    >
                        <div className="aspect-video flex items-center justify-center">
                            <p className="text-4xl font-extrabold text-white/20 text-center">
                                We are building this community to empower
                                individuals to{" "}
                                <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                                    grow, learn, and thrive together.
                                </span>
                            </p>
                        </div>
                    </FeatureCard>
                    <FeatureCard
                        title="Keyboard quick action"
                        description="Keyboard quick action to delete your problem"
                    >
                        <div className="aspect-video flex items-center justify-center">
                            <div>ctrl</div>
                            <div>a</div>
                            <div>del</div>
                        </div>
                    </FeatureCard>
                </div>
                <div>
                    {features.map((feature) => (
                        <div key={feature}>
                            <span></span>
                            <span>{feature}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
