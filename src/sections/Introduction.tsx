import Tag from "@/components/Tag";

const text = ` Building a developer community where innovation thrives, free from complexity and barriers, empowering creators to collaborate and grow.`;

export default function Introduction() {
    return (
        <section className="py-28 lg:py-40">
            <div className="container">
                <div className="flex justify-center">
                <Tag>Introducing DevX</Tag>
                </div>
                <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10">
                    <span>Your creativity deserves a better community</span> {" "}
                    <span className="text-white/15">{text}</span>
                    <span className="text-lime-400"> That&apos;s why we created DevX</span>
                </div>
            </div>
        </section>
    );
}
