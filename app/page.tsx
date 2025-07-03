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


export default function Home() {
  return (
    <>
      {/* <div className="max-w-4xl mx-auto bg-amber-100"> */}
      <div className="max-w-4xl mx-auto ">
        <main>
          <div className="flex py-2">
            <div className="mr-2 font-semibold">N&M Labs</div>
            <div className="mr-2">services</div>
            <div className="mr-2">about us</div>
          </div>
        </main>
        <div className="text-center p-20">
          <div className="flex justify-center items-center">
            <Blocks className="mb-1 mr-3 w-12 h-12" />
            <h1 className="italic text-4xl py-6 font-medium text-center">We Build Smart Software</h1>
          </div>
          <p className="">From complex workflows to real-time apps<br /> we turn your ideas into reliable systems. </p>
        </div>
        {/* <h1 className="text-2xl text-center">N&M Labs</h1> */}
        <ul>
          {jobs.map(job =>
          (<li key={job.title} className="my-3">
            <h3 className="text-lg font-semibold">{job.title}</h3>
            <p className="p-2">{job.desc}</p>
          </li>)
          )
          }
        </ul>
      </div>
    </>

  );
}
