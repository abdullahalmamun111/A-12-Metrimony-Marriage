import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeProvider';
import SectionTitle from '../Shared/SectionTitle';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

const Faq = () => {
  const { theme } = useContext(ThemeContext);

  const faqs = [
    {
      question: 'How does the matchmaking process work?',
      answer: 'Our platform uses advanced algorithms and user preferences to suggest compatible matches based on various criteria.'
    },
    {
      question: 'Is my information safe and secure?',
      answer: 'Yes, we prioritize user privacy and implement robust security measures to protect your data.'
    },
    {
      question: 'Can I communicate with potential matches for free?',
      answer: 'Basic messaging is free, but premium features are available for enhanced interaction and filtering options.'
    },
    {
      question: 'How do I report a suspicious profile?',
      answer: 'You can report a profile by clicking on the “Report” button on the user’s profile page and selecting the appropriate reason.'
    }
  ];

  return (
    <div className={`${theme === 'dark' ? 'bg-gray-900 text-gray-300' : 'bg-white text-gray-900'} py-12 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-4xl mx-auto">
        <SectionTitle 
          title="Frequently Asked Questions (FAQ)" 
          subtitle="Find answers to common questions about our matchmaking platform."
        />
        <Accordion.Root type="single" collapsible className="mt-6 w-full space-y-4">
          {faqs.map((faq, index) => (
            <Accordion.Item key={index} value={`item-${index}`} className="border-b border-gray-300 py-4">
              <Accordion.Header>
                <Accordion.Trigger className="flex justify-between items-center w-full text-left text-lg font-medium focus:outline-none">
                  {faq.question}
                  <ChevronDown className="w-5 h-5 transition-transform duration-300" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="mt-2 text-gray-500">{faq.answer}</Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </div>
  );
};

export default Faq;
