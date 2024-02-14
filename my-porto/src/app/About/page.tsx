import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";

export default function About() {
  return (
    <div>
      <div className="relative bg-[#F5F4F6] sm:bg-[#F5F4F6]">
        <div className="grid">
          <div className="col-span-7 place-self-center text-center sm:text-left container mt-24 mx-auto py-4 px-12 ">
            <div className="text-center w-[155px] mx-auto">
              <h1 className="text-3xl font-bold items-center justify-center">
                About Me
              </h1>
            </div>

            <div className="col-span-3 flex flex-col items-start justify-start mt-5">
              <p className="font-medium text-base sm:text-sm md:text-base lg:text-base xl:text-base">
                Hi, I'm Tanya Ardhia Pramesti, a full-stack developer who has
                experience in Backend Developer and Frontend Developer. I am
                highly motivated to transition into a new career path in the
                tech industry. Recently, I completed Hacktiv8 bootcamp as a
                Full-stack Javascript.
              </p>
              <p className="my-4 font-medium text-base sm:text-sm md:text-base lg:text-base xl:text-base">
                With my comprehensive experience on both Frontend and Backend
                sides, I am ready to take on new challenges and work on more
                complex projects. I believe that technology has the power to
                change the world, and I am committed to contributing to that
                change.
              </p>
              <p className="font-medium text-base sm:text-sm md:text-base lg:text-base xl:text-base">
                I hope you find inspiration and useful information here. Feel
                free to contact me if you are interested in collaborating or
                sharing ideas!
              </p>
            </div>

            <div className="mt-28">
              <Skills />
              <Experience />
              <Education/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
