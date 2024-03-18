import Image from "next/image";
import Link from "next/link";
import projectBloodBuddy from "../../../public/images/BloodBuddy.png";
import projectInstaX from "../../../public/images/InstaX.png";
import projectShoesAndShou from "../../../public/images/ShoesAndShou.png";

interface FeaturedProjectProps {
  type: string;
  title: string;
  summary: string;
  image: string;
  link: string;
  github: string;
}

const FeaturedProject = ({
  type,
  title,
  summary,
  image,
  link,
  github,
}: FeaturedProjectProps) => {
  return (
    <article className="lg:w-full flex items-center justify-between rounded-2xl border border-solid border-black bg-white shadow-2xl p-12 sm:w-screen sm:p-7">
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg "
      >
        <Image
          src={image}
          alt={title}
          width={800}
          height={600}
          className="w-full h-auto"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-[#6b639b] font-medium lg:text-lg sm:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left lg:text-3xl font-bold sm:text-2xl">
            {title}
          </h2>
        </Link>

        <p className="my-2 font-medium text-stone-950 sm:w-96 lg:w-auto md:w-auto">
          {summary}
        </p>

        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <Image
              src="/images/github.png"
              alt="github photo"
              width={40}
              height={40}
            />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-[#9890c5] text-white p-2 px-6 text-lg font-semibold"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({
  title,
  type,
  image,
  link,
  github,
  summary,
}: FeaturedProjectProps) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-black bg-white p-6 relative">
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg "
      >
        <Image
          src={image}
          alt={title}
          width={800}
          height={600}
          className="w-full h-auto"
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-[#6b639b] font-medium lg:text-lg sm:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left lg:text-3xl font-bold sm:text-2xl">
            {title}
          </h2>
        </Link>

        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="rounded-lg text-lg font-semibold hover:text-[#9890c5]"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8">
            <Image
              src="/images/github.png"
              alt="github photo"
              width={35}
              height={35}
            />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  return (
    <div>
      <div className="relative bg-[#F5F4F6] sm:bg-[#F5F4F6]">
        <div className="grid">
          <div className="col-span-7 place-self-center text-center sm:text-left container mt-24 mx-auto py-4 px-12 mb-10">
            <div className="text-center mb-10">
              <h1 className="text-3xl font-bold items-center justify-center">
                Featured Project
              </h1>
            </div>

            <div className="grid grid-cols-12 gap-24">
              <div className="col-span-12">
                <FeaturedProject
                  title="Blood Buddy"
                  image={projectBloodBuddy.src}
                  summary="lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit am lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit am lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor sit amet"
                  link="https://github.com/Blood-Buddy"
                  github="https://github.com/Blood-Buddy"
                  type="Featured Project"
                />
              </div>
              <div className="col-span-6">
                <Project
                  title="InstaX"
                  image={projectInstaX.src}
                  summary="none"
                  link="https://phase2-group-project.web.app/login"
                  github="https://github.com/hacktiv8-hck65/social-media-app"
                  type="Featured Project"
                />
              </div>
              <div className="col-span-6">
                {" "}
                <Project
                  title="Shoes And Shou"
                  image={projectShoesAndShou.src}
                  summary="none"
                  link="https://github.com/rafizuaf/shoesAndShout"
                  github="https://github.com/rafizuaf/shoesAndShout"
                  type="Project"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
