import Image from "next/image";
import SocialLink from "@/components/sociallink";

export default function Home() {
  return (
    <div className="flex flex-col items-start space-y-4">
      <div className="flex items-start w-full">
        <h1 className="text-4xl font-bold">Allen Cheng</h1>
      </div>

      <div className="flex flex-col md:flex-row w-full">
        <div className="relative w-48 aspect-w-1 aspect-h-1">
          <Image
            src="/images/avatar.png"
            alt="Allen Cheng"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        <div className="w-full md:ml-6">
          <div className="text-slate-500 mb-4">
            // Optimism in the face of uncertainty{" "}
          </div>
          <p>
            Heya, welcome to my little corner of the web. I grew up in the bay
            area and currently work on motion planning for all kinds of robots.
            Previously, I studied mechanical engineering and robotics at
            Carnegie Mellon University and was fortunate to be advised by Max
            Likhachev. I am probably laying on the beach, bed, or my rogue
            bench.
          </p>
          <div className="mt-4">
            <SocialLink url="https://github.com/allenc" text="github" />
            <SocialLink
              url="https://www.linkedin.com/in/chengallen/"
              text="linkedin"
            />
            <SocialLink url="https://x.com/walnut_shrimp" text="twitter" />
            <SocialLink
              url="https://www.instagram.com/training_data"
              text="instagram"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
