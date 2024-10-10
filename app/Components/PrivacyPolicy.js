import Link from "next/link";
import React from "react";
import { FaHome } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function PrivacyPolicy() {
  return (
    <div>

      <div className="px-5 md:px-8 lg:px-20 py-5 lg:py-10 flex flex-col gap-5">
      <img src="/images/pri.webp" alt="privacy-banner" className=" rounded-2xl" />
    
        <div className="space-y-5">
          <h2 className="font-semibold text-[21px] md:text-[1.7rem] text-slate-800">
            Privacy Policy
          </h2>
          <p className="text-sm md:text-base text-gray-500 leading-[1.75rem] text-justify">
            At NX Edge Solutions, we are committed to protecting your privacy.
            This policy outlines how we collect, use, and safeguard your
            personal information when you visit our website. As part of our
            services, we may collect personal data such as your name, email
            address, and contact details. This information is used solely to
            enhance your experience and respond to inquiries or promotional
            content that may be of interest to you.
          </p>
          <p className="text-sm md:text-base text-gray-500 leading-[1.75rem] text-justify">
            We employ advanced security measures to protect your personal
            information. However, please note that no method of data
            transmission over the internet is completely secure, and while we
            strive to protect your data, we cannot guarantee its absolute
            security.
          </p>
        </div>
        <div className="space-y-5">
          <h2 className="font-semibold text-[21px] md:text-[1.7rem] text-slate-800">
            Information Collection
          </h2>
          <p className="text-sm md:text-base text-gray-500 leading-[1.75rem] text-justify">
            NX Edge Solutions collects personal data to enhance your experience
            with our web solutions. This includes details such as your name,
            email, and contact information when you interact with our services.
            We also gather usage data, including your IP address and browsing
            behavior, to analyze site performance and improve user experience.
            Our use of cookies helps us remember your preferences and optimize
            your interactions with our platform.
          </p>
        </div>
        <div className="space-y-5">
          <h2 className="font-semibold text-[21px] md:text-[1.7rem] text-slate-800">
            Usage of Information
          </h2>
          <p className="text-sm md:text-base text-gray-500 leading-[1.75rem] text-justify">
            We utilize the information we collect to deliver and improve our web
            development services at NX Edge Solutions. Your personal data helps
            us process inquiries, manage your account, and keep you updated with
            important information. We may use your information for marketing
            purposes, ensuring the content we provide aligns with your
            preferences. Rest assured, we only share your data with trusted
            partners necessary to provide our services, such as secure payment
            processors.
          </p>
        </div>
        <div className="space-y-5">
          <h2 className="font-semibold text-[21px] md:text-[1.7rem] text-slate-800">
            Data Security
          </h2>
          <p className="text-sm md:text-base text-gray-500 leading-[1.75rem] text-justify">
            Protecting your data is a priority at NX Edge Solutions. We
            implement strict security protocols, including encryption and
            regular audits, to ensure your information is safe from unauthorized
            access. We collect only the data necessary to deliver our services,
            reducing potential exposure in the event of a breach. All payment
            transactions are securely processed through PCI-compliant gateways.
          </p>
        </div>
        <div className="space-y-5">
          <h2 className="font-semibold text-[21px] md:text-[1.7rem] text-slate-800">
            Copyright and Intellectual Property
          </h2>
          <p className="text-sm md:text-base text-gray-500 leading-[1.75rem] text-justify">
            All content on the NX Edge Solutions website, including text,
            graphics, and logos, is owned or licensed by us. Unauthorized use of
            our content is strictly prohibited. We combine robust security
            practices with intellectual property enforcement to ensure the
            protection of both our content and user data.
          </p>
        </div>
        <div className="space-y-5">
          <h2 className="font-semibold text-[21px] md:text-[1.7rem] text-slate-800">
            Third-Party Services
          </h2>
          <p className="text-sm md:text-base text-gray-500 leading-[1.75rem] text-justify">
            Our website may contain links to third-party websites and services.
            Please note that we do not control these sites and are not
            responsible for their content or privacy practices. We encourage you
            to review the privacy policies of any third-party sites you visit to
            understand their data collection and use practices.
          </p>
        </div>
        <div className="space-y-5">
          <h2 className="font-semibold text-[21px] md:text-[1.7rem] text-slate-800">
            Children's Privacy
          </h2>
          <p className="text-sm md:text-base text-gray-500 leading-[1.75rem] text-justify">
            NX Edge Solutions does not knowingly collect personal information
            from children under the age of 13. If we become aware that we have
            collected personal data from a child, we will take steps to delete
            such information. If you are a parent or guardian and believe your
            child has provided us with personal information, please contact us
            immediately.
          </p>
        </div>
        <div className="space-y-5">
          <h2 className="font-semibold text-[21px] md:text-[1.7rem] text-slate-800">
            Changes to This Privacy Policy
          </h2>
          <p className="text-sm md:text-base text-gray-500 leading-[1.75rem] text-justify">
            We may update our privacy policy from time to time. We will notify
            you of any changes by posting the new privacy policy on this page.
            You are advised to review this policy periodically for any changes.
            Changes to this privacy policy are effective when they are posted
            on this page.
          </p>
        </div>
        <div className="space-y-5">
          <h2 className="font-semibold text-[21px] md:text-[1.7rem] text-slate-800">
            Contact Us
          </h2>
          <p className="text-sm md:text-base text-gray-500 leading-[1.75rem] text-justify">
            If you have any questions about this privacy policy, please contact
            us:
          </p>
          <p className="text-sm md:text-base text-gray-500 leading-[1.75rem] text-justify">
            NX Edge Solutions <br />
            Email: invoice@nxedgesol.com <br />
            Phone: +91-512-640-6568
          </p>
        </div>
      </div>
    </div>
  );
}
