import { Blocks } from "lucide-react";

const jobs = [
  {
    title: 'Dayton Financial - Quoting System',
    desc: `
      Built a complete quoting software that saved thousands in operational costs by replacing complex spreadsheet workflows. Created real-time buyer-seller dashboard with live updates, interactive spreadsheet UI with cell-level editing and infinite scrolling, and secure role-based access control. Used Next.js, TypeScript, React, Firebase, and TanStack Table to deliver production-ready system.
    `
  },
  {
    title: 'FuseDesk - WordPress Plugin',
    desc: `
      Developed React-based WordPress Gutenberg plugin for help desk ticket creation. Built seamless integration with company API and created user-friendly interface for customer support workflows.
    `
  },
  {
    title: 'Bibadoula.com - Custom WordPress Theme',
    desc: `
      Developed React-based WordPress Gutenberg plugin for help desk ticket creation. Built seamless integration with company API and created user-friendly interface for customer support workflows.
    `
  }
];

const Timeline = () => {

  return (
    <ol className="relative border-s border-gray-300 ">
      {
        jobs.map(job=>(
          <li  key={job.title} className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 dark:bg-gray-400"></div>
            {/* <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time> */}
            <h3 className="text-lg font-semibold">{job.title}</h3>
            <p className="mb-4 text-base font-normal">{job.desc}</p>
          </li>
        ))
      }
    </ol>
  );

}


export default function Home() {
  return (
    <>
      {/* <div className="max-w-4xl mx-auto bg-amber-100"> */}
      <div className="mt-3 max-w-4xl mx-auto ">
        <div className="flex py-4">
          <div className="mr-2 font-semibold">N&M Labs</div>
          <div className="mr-2">services</div>
          <div className="mr-2">about-us</div>
        </div>
        <div className="text-center p-20">
          <div className="flex justify-center items-center">
            <Blocks className="mb-1 mr-3 w-12 h-12" />
            <h1 className="italic text-4xl py-6 font-medium text-center">We Build Smart Software</h1>
          </div>
          <p className="">From complex workflows to real-time apps<br /> we turn your ideas into reliable systems. </p>
        </div>
        {/* <h1 className="text-2xl text-center">N&M Labs</h1> */}
        <div>
          <h2 className="text-3xl py-6 font-medium text-center">Our Most Recent Project</h2>
        </div>
        <Timeline />
      </div>
    </>

  );
}
