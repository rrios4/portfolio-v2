import React, { useRef } from "react";
import Link from "next/link";
import Head from "next/head";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";

// Local Data
import data from "../yourData";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="container mx-auto mb-10">
      <Head>
        <title>RR Portfolio</title>
      </Head>
      <Header
        handleWorkScroll={handleWorkScroll}
        handleAboutScroll={handleAboutScroll}
      />
      <div className="laptop:mt-20 mob:mt-10">
        <h1 className="mt-5 text-8xl mob:text-3xl laptop:text-8xl mob:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5">
          {data.headerTaglineOne} <br />
          {data.headerTaglineTwo}
        </h1>
        <Socials className="mt-5 mob:mt-2 laptop:mt-5" />
      </div>
      <div
        className="mt-40 mob:mt-10 laptop:mt-40 mob:p-2 laptop:p-0"
        ref={workRef}
      >
        <h1 className="text-2xl text-bold">Work.</h1>
        <div className="mt-10 mob:mt-5 laptop:mt-10 grid grid-cols-2 mob:grid-cols-1 laptop:grid-cols-2 gap-4">
          {data.projects.map((project, index) => (
            <React.Fragment key={index}>
              <WorkCard
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                date={project.date}
                repoURL={project.repoURL}
                techIcons={project.techIcons}
                active={project.active}
                onClick={() => window.open(project.url)}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="mt-40 mob:mt-2 laptop:mt-40 mob:p-2 laptop:p-0">
        <h1 className="text-2xl text-bold">Services.</h1>
        <div className="mt-10 grid grid-cols-2 mob:grid-cols-1 laptop:grid-cols-2 gap-6">
          {data.services.map((service, index) => (
            <React.Fragment key={index}>
              <ServiceCard
                key={index}
                name={service.title}
                description={service.description}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
      <div
        className="mt-40 mob:mt-2 laptop:mt-40 mob:p-2 laptop:p-0"
        ref={aboutRef}
      >
        <h1 className="text-2xl text-bold">About.</h1>
        <p className="m-5 mob:m-0 laptop:m-5 mob:mt-2 laptop:ml-0 ml-0 text-3xl mob:text-xl laptop:text2xl w-3/5 mob:w-full laptop:w-3/5">
          {data.aboutpara[0].paragraph}
        </p>
        <p className="m-5 mob:m-0 laptop:m-5 mob:mt-2 laptop:ml-0 ml-0 text-3xl mob:text-xl laptop:text2xl w-3/5 mob:w-full laptop:w-3/5">
          {data.aboutpara[1].paragraph}
        </p>
      </div>
      <div className="mt-40 mob:mt-5 laptop:mt-40 mob:p-2 laptop:p-0">
        <h1 className="text-2xl text-bold">Contact.</h1>
        <div className="mt-5">
          <Socials />
        </div>
      </div>
      <h1 className="text-sm text-bold mt-10 mob:mt-2 laptop:mt-10 mob:p-2 laptop:p-0">
        Made With ❤ by{" "}
        <Link href="https://github.com/chetanverma16/react-portfolio-template">
          <a className="underline underline-offset-1">
            Chetan Verma & Rogelio Rios
          </a>
        </Link>
      </h1>
    </div>
  );
}
