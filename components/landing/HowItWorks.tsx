import React from 'react';
import ScrollAnimated from './ScrollAnimated'; // Adjust the import path as needed
import Link from 'next/link';
import { LandingPageData } from '@/types/mainLandingPageData'; // Adjust the import path as needed

interface HowItWorksProps {
  data: LandingPageData['landing_howItWorks'];
}

const HowItWorksSection: React.FC<HowItWorksProps> = ({ data }) => {
  return (
    <ScrollAnimated as="section" className="py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-white">{data.heading}</h2>
        <p className="text-center text-lg text-white mb-12 max-w-2xl mx-auto">
          {data.subheading}
        </p>
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {data.steps.map((step) => (
            <ScrollAnimated className="how-it-works-card-ui" key={step.title} delay={step.delay}>
              <div className="bg-white/10 rounded-full flex items-center justify-center w-16 h-16 mb-4 ml-auto mr-auto text-custom_primary">
                <i className={step.iconClass}></i>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{step.title}</h3>
              <p className="text-white text-sm leading-relaxed">{step.description}</p>
            </ScrollAnimated>
          ))}
        </div>
        <ScrollAnimated className="text-center mt-12" delay="300">
          <Link href={data.learnMoreLink} className="text-brand hover:text-brand-secondary font-semibold text-lg">
            {data.learnMoreLinkText} <i className={`${data.learnMoreIconClass} ml-1`}></i>
          </Link>
        </ScrollAnimated>
      </div>
    </ScrollAnimated>
  );
};

export default HowItWorksSection;