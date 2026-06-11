import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { managementStaff } from "./ManagementStaff";

const ManagementStaffProfile = () => {
  const { slug } = useParams();

  if (slug === "profile-coming-soon") {
    return (
      <main className="min-h-screen bg-white px-5 pb-28 pt-40 text-center text-[#14171d] sm:px-10">
        <h1 className="text-5xl font-semibold tracking-[-0.045em]">
          Profile Coming Soon
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-[#9a9a9a]">
          This management staff profile will be updated shortly.
        </p>
      </main>
    );
  }

  const member = managementStaff.find((person) => person.slug === slug);

  if (!member || !member.hasProfile) {
    return <Navigate to="/about/management-staff/profile-coming-soon" />;
  }

  return (
    <main className="min-h-screen bg-white px-5 pb-28 pt-40 text-[#14171d] sm:px-10 lg:px-16 xl:px-24">
      <section className="mx-auto max-w-7xl">
        <div className="text-center">
          <h1 className="text-5xl font-semibold leading-tight tracking-[-0.045em] sm:text-6xl">
            {member.name}
          </h1>

          <p className="mt-4 text-2xl text-[#9a9a9a]">{member.role}</p>
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-16">
          <div className="mx-auto w-full max-w-[280px] overflow-hidden">
            <img
              src={member.image}
              alt={member.name}
              className="h-[450px] w-full object-cover"
            />
          </div>

          <article className="max-w-4xl">
            <p className="whitespace-pre-line text-[21px] leading-[1.45] text-[#999999]">
              {member.text}
            </p>
          </article>
        </div>
      </section>
    </main>
  );
};

export default ManagementStaffProfile;