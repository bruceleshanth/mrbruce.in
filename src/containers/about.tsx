export default function AboutMe() {
  return (
    <>
      <div className="p-8 sm:p-12 px-1 flex justify-center items-center max-w-screen-lg mx-auto">
        <div className="text-center text-base sm:text-xl text-gray-600 leading-normal sm:leading-loose tracking-wide">
          Yep, that&apos;s me. <br />
          Nice to meet you 🙂
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-[1fr_3fr] p-8 sm:p-12 max-w-screen-lg mx-auto gap-x-12 gap-y-10 sm:gap-y-16">
        <h3 className="text-lg">About</h3>
        <p className="font-light leading-relaxed">
          My name is Bruce. I&apos;m a full stack developer with a strong focus
          on usability and user experience.
          <br />
          <br />
          My goal is to create usable and lovable products for people. I&apos;m
          good at solving problems, developing scalable websites and creating
          delightful experiences. I&apos;m obsessed with quality, I do believe
          that the details are not the details, they make the product.
          <br />
          <br />I enjoy my free time refactoring existing code, learning new
          frameworks and riding my bike.
        </p>

        <h3 className="text-lg">Work</h3>
        <p className="font-light leading-relaxed">
          Freelance Developer @ Popstream
          <br />
          <span className="text-sm">Mar 2022 - Now</span>
          <br />
          <br />
          Freelance Developer @ Handmadelove
          <br />
          <span className="text-sm">Mar 2021 - Oct 2021</span>
          <br />
          <br />
          Freelance Developer @ VisiblX
          <br />
          <span className="text-sm">Oct 2020 - Jan 2021</span>
          <br />
          <br />
          {/* Systems Engineer @ Tata Consultancy Services
          <br />
          2019 - Now
          <br />
          <br /> */}
        </p>

        <h3 className="text-lg">Skills</h3>
        <p className="font-light leading-loose grid grid-cols-1 sm:grid-cols-2">
          <span>
            <strong>React</strong>, Next.js and Remix
          </span>
          <span>Typescript, Tailwind CSS</span>
          <span>
            Node.js (<strong>Express</strong>, and Fastify)
          </span>
          <span>Linux, Digital ocean</span>
          <span>
            <strong>MongoDB</strong>, Postgres w Prisma
          </span>
          <span>Docker, K8s</span>
        </p>

        <h3 className="text-lg">Apps I use</h3>
        <p className="font-light leading-loose grid grid-cols-2">
          <span>Visual Studio Code</span>
          <span>Figma</span>
          <span>Vim</span>
          <span>Git</span>
          <span>MongoDB Compass</span>
          <span>iTerm 2</span>
        </p>

        <h3 className="text-lg">Devices I use</h3>
        <p className="font-light leading-loose">
          MacBook Pro 14&quot;
          <br />
          LG 27UL850
          <br />
          Keychron K2-v2
          <br />
          Logitech MX Master 3
        </p>

        <h3 className="text-lg">Contact</h3>
        <p className="font-light leading-loose">
          <a href="mailto:bruceupwork@gmail.com">Email</a>
          <br />
          <a href="https://github.com/bruceleshanth">Github</a>
        </p>
      </div>
    </>
  );
}
