import Link from "next/link";
import React from "react";
import { FaHome } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function TermsAndConditions() {
  const termsSections = [
    {
      title: "Terms and Conditions",
      content: [
        "Welcome to NX Edge Solutions. These Terms and Conditions govern your use of our website and services. By accessing our website, you agree to comply with these terms. If you do not agree with any part of these terms, please do not use our website.",
        "We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting the revised terms on this page. Your continued use of the website after any changes constitutes your acceptance of the new terms.",
      ],
    },
    {
      title: "User Obligations",
      content: [
        "As a user of our website, you agree to provide accurate, current, and complete information when prompted and to update such information to keep it accurate, current, and complete. You are responsible for maintaining the confidentiality of your account and password.",
        "You agree to use the website and services in a manner that complies with all applicable laws and regulations. You agree not to engage in any activity that may interfere with or disrupt the website or the services provided.",
      ],
    },
    {
      title: "Intellectual Property",
      content: [
        "All content on the NX Edge Solutions website, including text, graphics, and logos, is the property of NX Edge Solutions or its licensors. Unauthorized use of any content may violate copyright, trademark, and other laws.",
        "You may not reproduce, distribute, modify, or create derivative works from our content without prior written permission. Any unauthorized use may result in legal action.",
      ],
    },
    {
      title: "Limitation of Liability",
      content: [
        "NX Edge Solutions shall not be liable for any direct, indirect, incidental, or consequential damages arising out of or related to your use of our website or services. This includes, but is not limited to, damages for loss of profits, goodwill, use, data, or other intangible losses.",
        "We do not warrant that our services will be uninterrupted, secure, or error-free. You acknowledge that your use of the services is at your own risk.",
      ],
    },
    {
      title: "Governing Law",
      content: [
        "These Terms and Conditions shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles. Any legal action or proceeding arising under these terms shall be brought exclusively in the courts located in Chandigarh, India.",
      ],
    },
    {
      title: "Indemnification",
      content: [
        "You agree to indemnify and hold harmless NX Edge Solutions, its affiliates, and their respective officers, directors, employees, and agents from any claims, losses, damages, liabilities, costs, or expenses (including reasonable attorney’s fees) arising out of or related to your use of the website or services, your violation of these terms, or your infringement of any third-party rights.",
      ],
    },
    {
      title: "Changes to Terms",
      content: [
        "We may update these Terms and Conditions from time to time. We will notify you of any changes by posting the new terms on this page. You are advised to review these terms periodically for any changes.",
      ],
    },
    {
      title: "Contact Us",
      content: [
        "If you have any questions about these Terms and Conditions, please contact us:",
        "NX Edge Solutions \n Email: invoice@nxedgesol.com \n Phone: +91-512-640-6568",
      ],
    },
  ];

  return (
    <div>
      <div className="px-5 md:px-8 lg:px-20 py-5 lg:py-10 flex flex-col gap-5">
        <img src="/images/terms.webp" alt="terms-banner" className="rounded-2xl" />

        {termsSections.map((section, index) => (
          <div key={index} className="space-y-2">
            <h2 className="font-semibold text-lg lg:text-2xl text-slate-800">
              {section.title}
            </h2>
            {section.content.map((paragraph, idx) => (
              <p
                key={idx}
                className="text-sm md:text-base text-gray-500 leading-[1.75rem] text-justify"
              >
                {paragraph}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
