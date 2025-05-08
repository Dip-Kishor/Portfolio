"use client";

import { useMemo } from "react";

export default function ExperienceBanner() {
  // Replace this with your actual start date
  const startDate = useMemo(() => new Date("2023-03-05"), []);

  const { years, months } = useMemo(() => {
    const now = new Date();
    let totalMonths =
      (now.getFullYear() - startDate.getFullYear()) * 12 +
      (now.getMonth() - startDate.getMonth());

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    return { years, months };
  }, [startDate]);

  return (
    <>
    <div className="h-[12vh] bg-[url('/Img2Mobile.png')] md:bg-[url('/Img2.png')] bg-no-repeat bg-center bg-cover">
    </div>
      
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5 mx-8 lg:mx-20 h-min-screen">
        <div className=" order-2 lg:order-1 pt-10 text-black text-justify text-lg mb-10">
          <p className="text-4xl mb-2 font-semibold ">
            I have {years} {years === 1 ? "year" : "years"} and {months}{" "}
            {months === 1 ? "month" : "months"} of professional experience in
            <span className="font-bold"> ASP.NET Core</span> and <span className="font-bold">React.js</span>.  <br/>
          </p>
          Over the years, I have contributed to a wide range of projects, including a 
          <span className="italic"> School Management System</span>, 
          <span className="italic"> Hotel Management System</span>, and an 
          <span className="italic"> Inventory Management System</span>.
          <br />
          <br />
          Currently, I am working as a <span className="font-bold">.NET Developer</span> at 
          <span className="font-bold"> Riddhasoft Pvt. Ltd.</span>, where I have been employed since 
          <span className="font-bold"> August 2024</span>.
          <hr/>
          <div className="mt-4">
            <span className="font-bold">Technical Stack:</span> 
            <ul className="list-disc list-inside">
              <li>
                Proficient in 
                <span className="italic font-semibold"> C#, ASP.NET Core, React.js, Next.js, SQL Server, Entity Framework, REST APIs, JWT, and Git</span>. 
              </li>
              <li>
                Experience with agile methodologies, unit testing, and CI/CD pipelines.
              </li>
              <li>
                Have working knowledge of <span className="italic font-semibold">Docker, Kubernetes, and Microsoft Azure</span>, 
                allowing me to contribute to scalable and cloud-ready applications.
              </li>
            </ul>
            <p className="mb-4 mt-4">
              In addition, I have experience with containerization and deployment. 
              I’ve created Dockerfiles for .NET applications and successfully deployed 
              <span className="italic">couple of personal projects</span> using Docker Image
              cloud services. This hands-on experience has strengthened my understanding of containerized environments and streamlined the deployment process.
            </p>

          </div>
        </div>
        <div className="order-1 lg:order-2">
          <img src="/Dip.jpeg" className="rounded-2xl mt-10 lg:w-5xl lg:h-[90%] ">
          </img>
        </div>
      </div>
    </>
  );
}
