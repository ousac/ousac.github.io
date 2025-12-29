import React from 'react';

export default function CodeOfConduct() {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <p className="text-base leading-7 font-semibold text-indigo-600">
          Standards & Guidelines
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Code of Conduct
        </h1>
        <p className="mt-6 text-xl leading-8 text-gray-700">
          The Ontario Universities Sports Analytics Coalition (OUSAC) is
          dedicated to providing a harassment-free conference experience for
          everyone, regardless of gender, gender identity and expression, sexual
          orientation, disability, physical appearance, body size, race, age, or
          religion.
        </p>

        <div className="mt-10 max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Our Pledge
          </h2>
          <p className="mt-6">
            We pledge to make participation in our community a harassment-free
            experience for everyone, regardless of age, body size, visible or
            invisible disability, ethnicity, sex characteristics, gender
            identity and expression, level of experience, education,
            socio-economic status, nationality, personal appearance, race,
            religion, or sexual identity and orientation.
          </p>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            Our Standards
          </h2>
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <span>
                <strong className="font-semibold text-gray-900">
                  Positive Environment.
                </strong>{' '}
                Examples of behavior that contributes to a positive environment
                for our community include: Demonstrating empathy and kindness
                toward other people; Being respectful of differing opinions,
                viewpoints, and experiences; Giving and gracefully accepting
                constructive feedback. If a participant engages in harassing
                behavior, the conference organizers may take any action they
                deem appropriate, including warning the offender or expulsion
                from the conference with no refund. If you&apos;re being
                harassed, notice that someone else is being harassed, or have
                any other concerns, please contact a member of conference staff
                immediately.
              </span>
            </li>
            <li className="flex gap-x-3">
              <span>
                <strong className="font-semibold text-gray-900">
                  Unacceptable Behavior.
                </strong>{' '}
                Examples of unacceptable behavior include: The use of sexualized
                language or imagery, and sexual attention or advances of any
                kind; Trolling, insulting or derogatory comments, and personal
                or political attacks; Public or private harassment; Publishing
                others&apos; private information, such as a physical or email
                address, without their explicit permission.
              </span>
            </li>
          </ul>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            Enforcement Responsibilities
          </h2>
          <p className="mt-6">
            Conference organizers are responsible for clarifying and enforcing
            our standards of acceptable behavior and will take appropriate and
            fair corrective action in response to any behavior that they deem
            inappropriate, threatening, offensive, or harmful.
          </p>
          <p className="mt-6">
            Community leaders have the right and responsibility to remove, edit,
            or reject comments, commits, code, wiki edits, issues, and other
            contributions that are not aligned to this Code of Conduct, and will
            communicate reasons for moderation decisions when appropriate.
          </p>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            Scope
          </h2>
          <p className="mt-6">
            This Code of Conduct applies within all community spaces, and also
            applies when an individual is officially representing the community
            in public spaces. Examples of representing our community include
            using an official e-mail address, posting via an official social
            media account, or acting as an appointed representative at an online
            or offline event.
          </p>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            Contact Info
          </h2>
          <p className="mt-6">
            For specific questions or to report incidents, please contact the
            organizing committee at{' '}
            <a
              href="mailto:info.ousac@gmail.com"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              info.ousac@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
