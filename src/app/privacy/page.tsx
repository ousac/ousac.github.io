import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <p className="text-base leading-7 font-semibold text-indigo-600">
          Legal
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-6 text-xl leading-8 text-gray-700">
          This Privacy Policy describes how OUSAC (&quot;we&quot;,
          &quot;us&quot;, or &quot;our&quot;) collects, uses, and discloses your
          personal information when you visit our website or participate in our
          conference.
        </p>

        <div className="mt-10 max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Information We Collect
          </h2>
          <p className="mt-6">
            We collect information that you voluntarily provide to us when you
            register for the conference, submit an abstract, or contact us. This
            may include:
          </p>
          <ul
            role="list"
            className="mt-4 list-disc space-y-2 pl-5 text-gray-600"
          >
            <li>Name and contact information (email address)</li>
            <li>University affiliation and role</li>
            <li>Dietary restrictions (for event catering)</li>
            <li>
              Payment information (processed securely via third-party providers)
            </li>
          </ul>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            How We Use Your Information
          </h2>
          <p className="mt-6">We use the information we collect to:</p>
          <ul
            role="list"
            className="mt-4 list-disc space-y-2 pl-5 text-gray-600"
          >
            <li>Facilitate your participation in OUSAC</li>
            <li>
              Communicate with you about event updates, schedules, and changes
            </li>
            <li>Process registrations and payments</li>
            <li>Maintain the safety and security of our event</li>
          </ul>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            Information Sharing
          </h2>
          <p className="mt-6">
            We do not sell your personal information. We may share your
            information with:
          </p>
          <ul
            role="list"
            className="mt-4 list-disc space-y-2 pl-5 text-gray-600"
          >
            <li>
              Service providers who assist with event logistics (e.g., catering,
              venue security)
            </li>
            <li>
              Sponsors (only if you explicitly opt-in to share your resume or
              profile)
            </li>
            <li>Legal authorities, if required by law</li>
          </ul>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            Data Security
          </h2>
          <p className="mt-6">
            We implement appropriate technical and organizational measures to
            protect the security of your personal information. However, please
            be aware that no method of transmission over the Internet is 100%
            secure.
          </p>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            Changes to This Policy
          </h2>
          <p className="mt-6">
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page.
          </p>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            Contact Us
          </h2>
          <p className="mt-6">
            If you have any questions about this Privacy Policy, please contact
            us at{' '}
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
