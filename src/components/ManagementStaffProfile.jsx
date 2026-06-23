import React from "react";
import { Link, useParams } from "react-router-dom";
import { managementStaff } from "./ManagementStaff";

const ManagementStaffProfile = () => {
  const { slug } = useParams();

  const member = managementStaff.find((person) => person.slug === slug);

  if (!member || !member.hasProfile) {
    return (
      <main className="min-h-screen bg-white px-5 pb-24 pt-40 text-[#14171d] dark:bg-[#05070d] dark:text-white sm:px-10 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-red-700">
            Management Profile
          </p>

          <h1 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
            Profile Coming Soon
          </h1>

          <p className="mt-6 text-lg leading-8 text-[#8e8e8e] dark:text-white/60">
            This management profile is currently being updated.
          </p>

          <Link
            to="/about/management-staff"
            className="mt-10 inline-flex rounded-full bg-red-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-800"
          >
            Back to Management Staff
          </Link>
        </div>
      </main>
    );
  }

  const paragraphs = member.text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  return (
    <main className="min-h-screen bg-white px-5 pb-24 pt-40 text-[#14171d] dark:bg-[#05070d] dark:text-white sm:px-10 lg:px-16 xl:px-24">
      <article className="mx-auto max-w-5xl">
        <Link
          to="/about/management-staff"
          className="text-sm font-bold uppercase tracking-[0.25em] text-red-700 transition hover:text-red-800"
        >
          ← Back to Management
        </Link>

        <div className="mt-10 border-b border-slate-200 pb-10 dark:border-white/10">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-red-700">
            Management Profile
          </p>

          <h1 className="mt-5 text-4xl font-semibold tracking-[-0.045em] sm:text-6xl lg:text-7xl">
            {member.name}
          </h1>

          <p className="mt-5 text-xl leading-8 text-[#8e8e8e] dark:text-white/60">
            {member.role}
          </p>
        </div>

        <div className="mt-12 text-lg leading-9 text-[#555] dark:text-white/70">
          <div className="mb-8 overflow-hidden rounded-2xl bg-slate-100 shadow-xl dark:bg-white/10 sm:float-left sm:mb-6 sm:mr-10 sm:w-[320px] lg:w-[380px]">
            <img
              src={member.image}
              alt={member.name}
              className="h-full w-full object-cover object-top"
            />
          </div>

          {paragraphs.map((paragraph, index) => {
            const isHeading =
              index === 0 ||
              paragraph === "Professional Summary" ||
              paragraph === member.role ||
              paragraph.includes("Head,");

            return isHeading ? (
              <h2
                key={index}
                className="mb-4 mt-8 text-normal tracking-[-0.03em] text-[#14171d] dark:text-white"
              >
                {paragraph}
              </h2>
            ) : (
              <p key={index} className="mb-6">
                {paragraph}
              </p>
            );
          })}

          <div className="clear-both" />
        </div>
      </article>
    </main>
  );
};

export default ManagementStaffProfile;