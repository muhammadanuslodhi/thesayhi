'use client';

import React from 'react';

const PrivacyPolicy: React.FC = () => {
    
  return (
    <div className="min-h-screen mt-20 bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-sm rounded-lg p-8 sm:p-12 border border-gray-100">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Terms Of Services</h1>
        <p className="text-sm text-gray-500 mb-8 border-b pb-6">Effective Date: July 20, 2026</p>

        <section className="mb-10 text-gray-700">
          <p className="mb-4">
            Welcome to TheSayHi ("TheSayHi," "Company," "we," "our," or "us"). These Terms of Service ("Terms") govern your access to and use of TheSayHi's website, software, applications, APIs, live chat platform, integrations, and all related products and services (collectively, the "Services").
          </p>
          <p>
            Please read these Terms carefully before using our Services. By accessing or using TheSayHi, creating an account, or purchasing a subscription, you agree to be legally bound by these Terms and our Privacy Policy. If you do not agree with these Terms, you must discontinue use of the Services immediately.
            </p>
        </section>

        <div className="space-y-10">
<section className="max-w-4xl mx-auto my-10 p-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-6">Definitions</h2>
      
      <div className="grid gap-4">
        {[
          { term: 'Account', def: 'The registered profile used to access the Services.' },
          { term: 'Customer', def: 'Any business, organization, or individual that purchases or subscribes to TheSayHi Services.' },
          { term: 'Authorized User', def: 'Any employee, contractor, or representative authorized by a Customer to access an Account.' },
          { term: 'Visitor', def: 'Any individual who interacts with a website or application using TheSayHi\'s live chat platform.' },
          { term: 'Customer Data', def: 'Any information, content, files, messages, chat transcripts, contact information, or other data submitted to or processed through the Services by a Customer or its users.' },
          { term: 'Services', def: 'All products, software, websites, applications, APIs, integrations, documentation, and features offered by TheSayHi.' },
        ].map((item, index) => (
          <div 
            key={index} 
            className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <strong className="block text-lg text-gray-900 mb-2">{item.term}</strong>
            <p className="text-gray-600 text-sm leading-relaxed">{item.def}</p>
          </div>
        ))}
      </div>
    </section>
    <section className="max-w-4xl mx-auto my-10 p-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-6">Eligibility</h2>
      
      <p className="text-gray-700 mb-6">
        To use TheSayHi Services, you must:
      </p>

      <div className="grid gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex items-start">
          <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm mr-4">1</span>
          <span className="text-gray-600">Be at least 18 years of age or the legal age of majority in your jurisdiction.</span>
        </div>

        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex items-start">
          <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm mr-4">2</span>
          <span className="text-gray-600">Have the legal authority to enter into a binding agreement.</span>
        </div>

        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex items-start">
          <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm mr-4">3</span>
          <span className="text-gray-600">Provide accurate and complete registration information.</span>
        </div>

        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex items-start">
          <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm mr-4">4</span>
          <span className="text-gray-600">Comply with all applicable laws and regulations.</span>
        </div>

        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex items-start">
          <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm mr-4">5</span>
          <span className="text-gray-600">Use the Services only for lawful business purposes.</span>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
        <p className="text-gray-800 text-sm">
          <strong>Note:</strong> If you are accepting these Terms on behalf of a company or other legal entity, you represent that you have the authority to bind that entity to these Terms.
        </p>
      </div>
    </section>
    <section className="max-w-4xl mx-auto my-10 p-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-6">Account Registration</h2>
      
      <p className="text-gray-700 mb-6">
        Certain features of the Services require you to create an Account. When registering an Account, you agree to:
      </p>

      <div className="grid gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex items-start">
          <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm mr-4">✓</span>
          <span className="text-gray-600">Provide accurate, current, and complete information.</span>
        </div>

        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex items-start">
          <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm mr-4">✓</span>
          <span className="text-gray-600">Keep your information updated.</span>
        </div>

        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex items-start">
          <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm mr-4">✓</span>
          <span className="text-gray-600">Maintain the confidentiality of your login credentials.</span>
        </div>

        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex items-start">
          <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm mr-4">✓</span>
          <span className="text-gray-600">Restrict unauthorized access to your Account.</span>
        </div>

        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex items-start">
          <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm mr-4">✓</span>
          <span className="text-gray-600">Notify TheSayHi immediately of any suspected unauthorized use or security breach.</span>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
        <p className="text-gray-800 text-sm">
          <strong>Notice:</strong> We reserve the right to refuse registration or suspend Accounts that contain false, misleading, or incomplete information.
        </p>
      </div>
    </section>
    <section className="max-w-4xl mx-auto my-10 p-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-6">Account Security</h2>
      
      <p className="text-gray-700 mb-6">
        You are responsible for maintaining the security of your Account and all activities that occur under it. You agree to:
      </p>

      <div className="grid gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex items-start">
          <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm mr-4">🔒</span>
          <span className="text-gray-600">Use strong, unique passwords.</span>
        </div>

        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex items-start">
          <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm mr-4">🛡️</span>
          <span className="text-gray-600">Protect authentication credentials.</span>
        </div>

        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex items-start">
          <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm mr-4">💻</span>
          <span className="text-gray-600">Log out from shared or public devices.</span>
        </div>

        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex items-start">
          <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm mr-4">⚠️</span>
          <span className="text-gray-600">Promptly report unauthorized access or suspected compromise.</span>
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
          <p className="text-gray-800 text-sm">
            <strong>Liability Note:</strong> TheSayHi is not responsible for losses resulting from your failure to maintain appropriate Account security.
          </p>
        </div>
        
        <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
          <p className="text-gray-800 text-sm">
            <strong>Security Measures:</strong> We may implement additional security measures, including multi-factor authentication, device verification, or account verification procedures, to protect our Services and customers.
          </p>
        </div>
      </div>
    </section>
    <section className="max-w-4xl mx-auto my-10 p-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-6">Subscription Plans</h2>
      
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-6">
        <p className="text-gray-700 mb-4">
          TheSayHi offers various subscription plans designed to meet different business needs.
        </p>
        
        <p className="text-gray-600 mb-4">
          Subscription features, usage limits, pricing, included functionality, and support levels may vary depending on the plan selected.
        </p>

        <div className="bg-blue-50 p-4 rounded-md border border-blue-100">
          <p className="text-gray-800 text-sm">
            <strong>Subscription Details:</strong> Your specific plan details will be presented during the purchase process or in a separate Order Form or Service Agreement.
          </p>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
        <p className="text-gray-800 text-sm">
          <strong>Plan Modifications:</strong> We reserve the right to introduce new subscription plans, modify existing plans, or discontinue certain offerings at any time. Material changes affecting existing subscriptions will be communicated in accordance with applicable law or your subscription agreement.
        </p>
      </div>
    </section>
    <section className="max-w-4xl mx-auto my-10 p-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-6">Free Trials</h2>
      
      <p className="text-gray-700 mb-6">
        From time to time, TheSayHi may offer free trials or promotional access to certain Services.
      </p>

      {/* 1-Day Trial Highlight Box */}
      <div className="bg-blue-600 text-white p-6 rounded-lg shadow-lg mb-8 flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold mb-1">Limited Time Offer</h3>
          <p className="opacity-90">Experience TheSayHi with our 1-day free trial.</p>
        </div>
        <div className="bg-white/20 px-4 py-2 rounded font-bold border border-white/30">
          1 DAY FREE
        </div>
      </div>

      <div className="grid gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex items-start">
          <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm mr-4">!</span>
          <span className="text-gray-600">Free trials are available only for a limited period.</span>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex items-start">
          <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm mr-4">!</span>
          <span className="text-gray-600">Certain features may be restricted during the trial.</span>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex items-start">
          <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm mr-4">!</span>
          <span className="text-gray-600">A payment method may be required before activation.</span>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg space-y-2">
        <p className="text-gray-800 text-sm">
          <strong>Automatic Conversion:</strong> Trial accounts may automatically convert to a paid subscription unless cancelled before the trial period ends, where permitted by applicable law and disclosed at sign-up.
        </p>
        <p className="text-gray-600 text-xs">
          TheSayHi reserves the right to modify, suspend, or terminate free trial programs at any time.
        </p>
      </div>
    </section>
    <section className="max-w-4xl mx-auto my-10 p-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-6">Billing & Payments</h2>
      
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-6">
        <p className="text-gray-700 mb-4">
          Paid subscriptions require payment of applicable fees. By purchasing a subscription, you authorize TheSayHi or its authorized payment processor to charge your selected payment method for all applicable fees, taxes, and recurring charges.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h4 className="font-semibold text-gray-900 mb-2">Billing Cycle</h4>
          <p className="text-gray-600 text-sm">Subscription fees are billed in advance and charges are due on the billing date.</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h4 className="font-semibold text-gray-900 mb-2">Currency & Info</h4>
          <p className="text-gray-600 text-sm">Payments are processed in the currency specified at checkout. Ensure your payment information remains accurate.</p>
        </div>
      </div>

      <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
        <p className="text-gray-800 text-sm">
          <strong>Important:</strong> Failure to make timely payment may result in suspension or termination of Services.
        </p>
      </div>
    </section>
    <section className="max-w-4xl mx-auto my-10 p-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-6">Automatic Renewal</h2>
      
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-6">
        <p className="text-gray-700 mb-4">
          Unless cancelled in accordance with your subscription terms, paid subscriptions <strong>automatically renew</strong> at the end of each billing cycle.
        </p>
        <p className="text-gray-600">
          By subscribing, you authorize recurring billing using your selected payment method until your subscription is cancelled.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
          <h4 className="font-semibold text-blue-900 mb-2">How to Cancel</h4>
          <p className="text-blue-700 text-sm">
            You may cancel automatic renewal through your <strong>Account settings</strong> or by contacting our support team before the next renewal date.
          </p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h4 className="font-semibold text-gray-900 mb-2">Refund Policy</h4>
          <p className="text-gray-600 text-sm">
            Cancellation prevents future charges but does not provide a refund for the current billing period unless required by law or expressly stated otherwise.
          </p>
        </div>
      </div>
    </section>
    <section className="max-w-4xl mx-auto my-10 p-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-6">Taxes</h2>
      
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-6">
        <p className="text-gray-700 mb-4">
          Subscription fees do not include applicable taxes unless expressly stated.
        </p>
        
        <div className="border-t border-gray-100 pt-4">
          <p className="text-gray-600 text-sm leading-relaxed">
            Customers are responsible for all applicable sales, use, value-added, goods and services, withholding, or similar taxes imposed by governmental authorities, <strong>excluding taxes based solely on TheSayHi's income</strong>.
          </p>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
        <p className="text-gray-800 text-sm">
          <strong>Compliance Notice:</strong> Where required by law, TheSayHi may collect and remit applicable taxes on your behalf.
        </p>
      </div>
    </section>
    <section className="max-w-4xl mx-auto my-10 p-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-6">Refund Policy</h2>
      
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-6">
        <p className="text-gray-700 mb-4">
          Except where required by applicable law or expressly stated in a separate written agreement, subscription fees and other payments made to TheSayHi are <strong>non-refundable</strong>.
        </p>
        <p className="text-gray-600 text-sm">
          Customers are responsible for cancelling subscriptions before the next billing cycle if they do not wish to continue using the Services.
        </p>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-6">
        <h4 className="font-semibold text-blue-900 mb-2">Review Process</h4>
        <p className="text-blue-700 text-sm">
          Refund requests arising from duplicate charges, billing errors, or exceptional circumstances will be reviewed on a case-by-case basis at TheSayHi's sole discretion.
        </p>
      </div>

      <div className="text-gray-500 text-xs italic">
        * Nothing in this section limits any non-waivable consumer rights that may apply under applicable law.
      </div>
    </section>
    <section className="max-w-4xl mx-auto my-10 p-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-6">Updates to the Services</h2>
      
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-6">
        <p className="text-gray-700 mb-4">
          We continuously improve and evolve our Services. As a result, we may add, modify, replace, or remove features, functionality, integrations, or technical requirements from time to time.
        </p>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
        <p className="text-gray-800 text-sm">
          <strong>Notice Policy:</strong> We will use commercially reasonable efforts to provide advance notice of material changes when practicable. 
          <span className="block mt-2 font-semibold">Continued use of the Services following such updates constitutes acceptance of the modified functionality.</span>
        </p>
      </div>
    </section>
    <section className="max-w-4xl mx-auto my-10 p-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-6">Acceptable Use Policy</h2>
      
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-6">
        <p className="text-gray-700 leading-relaxed">
          TheSayHi is designed to facilitate lawful business communications between businesses and their customers. You agree to use the Services responsibly and in compliance with all applicable laws, regulations, and these Terms.
        </p>
      </div>

      <h3 className="text-lg font-semibold text-gray-900 mb-4">You agree not to use the Services to:</h3>
      
      <div className="grid md:grid-cols-2 gap-3 mb-8">
        {[
          "Violate any applicable law or regulation.",
          "Infringe the intellectual property rights of others.",
          "Send unlawful, abusive, threatening, defamatory, or fraudulent communications.",
          "Distribute malware, viruses, ransomware, or other harmful code.",
          "Attempt unauthorized access to any account, system, or network.",
          "Interfere with or disrupt the operation or security of the Services.",
          "Use automated tools to overload or abuse the platform.",
          "Harvest or collect personal information without proper authorization.",
          "Engage in phishing, identity theft, spam, or deceptive business practices.",
          "Use the Services for activities that promote violence, illegal conduct, or harmful content.",
          "Circumvent usage limits, security measures, or licensing restrictions."
        ].map((item, idx) => (
          <div key={idx} className="flex items-start bg-gray-50 p-3 rounded border border-gray-100">
            <span className="text-red-500 mr-2">✕</span>
            <span className="text-sm text-gray-600">{item}</span>
          </div>
        ))}
      </div>

      <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
        <p className="text-gray-800 text-sm">
          <strong>Enforcement:</strong> Violation of this Acceptable Use Policy may result in suspension or termination of your account without prior notice.
        </p>
      </div>
    </section>
    <section className="max-w-4xl mx-auto my-10 p-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-6">User Responsibilities</h2>
      
      <p className="text-gray-700 mb-6">
        As a customer of TheSayHi, you are responsible for:
      </p>

      <div className="grid gap-3 mb-8">
        <div className="flex items-center bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
          <span className="text-gray-600">Maintaining accurate account information.</span>
        </div>
        <div className="flex items-center bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
          <span className="text-gray-600">Protecting your login credentials.</span>
        </div>
        <div className="flex items-center bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
          <span className="text-gray-600">Managing authorized users within your organization.</span>
        </div>
        <div className="flex items-center bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
          <span className="text-gray-600">Ensuring that your use of the Services complies with applicable laws.</span>
        </div>
        <div className="flex items-center bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
          <span className="text-gray-600">Obtaining any required permissions or consents before collecting personal information from visitors.</span>
        </div>
        <div className="flex items-center bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
          <span className="text-gray-600">Maintaining your own backup copies of critical business information where appropriate.</span>
        </div>
        <div className="flex items-center bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
          <span className="text-gray-600">Promptly reporting security incidents or unauthorized account access.</span>
        </div>
      </div>

      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md">
        <p className="text-sm leading-relaxed">
          <strong>Account Content Liability:</strong> You are solely responsible for the content you submit, transmit, or process through the Services and for your interactions with website visitors and customers.
        </p>
      </div>
    </section>
    <section className="max-w-4xl mx-auto my-10 p-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-6">Customer Content</h2>
      
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-6">
        <p className="text-gray-700 leading-relaxed">
          The Services allow customers to upload, store, transmit, and manage various forms of content, including chat messages, contact information, files, documents, notes, and other business data ("Customer Content").
        </p>
        <p className="text-gray-800 font-semibold mt-4">
          You retain all ownership rights in your Customer Content.
        </p>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-8">
        <h4 className="font-semibold text-blue-900 mb-2">License Grant</h4>
        <p className="text-blue-700 text-sm">
          By submitting Customer Content to TheSayHi, you grant us a limited, worldwide, non-exclusive, royalty-free license to host, process, store, transmit, display, and otherwise use that content solely as necessary to provide, maintain, secure, support, and improve the Services.
        </p>
      </div>

      <h3 className="text-lg font-semibold text-gray-900 mb-4">You represent and warrant that:</h3>
      
      <div className="grid gap-3 mb-8">
        <div className="flex items-start bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <span className="text-blue-500 mr-3">✔</span>
          <span className="text-gray-600">You own or have the necessary rights to your Customer Content.</span>
        </div>
        <div className="flex items-start bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <span className="text-blue-500 mr-3">✔</span>
          <span className="text-gray-600">Your Customer Content does not violate any law or third-party rights.</span>
        </div>
        <div className="flex items-start bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <span className="text-blue-500 mr-3">✔</span>
          <span className="text-gray-600">You have obtained any necessary consents required to process personal information through the Services.</span>
        </div>
      </div>

      <div className="bg-gray-800 text-white p-4 rounded-lg text-center">
        <p className="text-sm">TheSayHi does not claim ownership of Customer Content.</p>
      </div>
    </section>
    <section className="max-w-4xl mx-auto my-10 p-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-6">Live Chat Services</h2>
      
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-8">
        <p className="text-gray-700 leading-relaxed">
          TheSayHi provides a hosted communication platform that enables businesses to interact with website visitors through live chat and related messaging features.
        </p>
      </div>

      <h3 className="text-lg font-semibold text-gray-900 mb-4">Customers are solely responsible for:</h3>
      
      <div className="grid gap-3 mb-8">
        <div className="flex items-start bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <span className="text-blue-500 font-bold mr-3">•</span>
          <span className="text-gray-600">The accuracy of information communicated through chat.</span>
        </div>
        <div className="flex items-start bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <span className="text-blue-500 font-bold mr-3">•</span>
          <span className="text-gray-600">The actions of their employees, representatives, and authorized users.</span>
        </div>
        <div className="flex items-start bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <span className="text-blue-500 font-bold mr-3">•</span>
          <span className="text-gray-600">Compliance with consumer protection, privacy, and communication laws.</span>
        </div>
        <div className="flex items-start bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <span className="text-blue-500 font-bold mr-3">•</span>
          <span className="text-gray-600">Maintaining appropriate disclosures and privacy notices on their websites.</span>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
        <p className="text-gray-800 text-sm">
          <strong>Service Provider Disclaimer:</strong> TheSayHi acts as a technology provider and does not control or assume responsibility for communications between customers and their website visitors.
        </p>
      </div>
    </section>
    <section className="max-w-4xl mx-auto my-10 p-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-6">Third-Party Integrations</h2>
      
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-8">
        <p className="text-gray-700 leading-relaxed mb-4">
          The Services may integrate with third-party platforms, applications, APIs, and software, including customer relationship management (CRM) systems, calendar services, communication tools, analytics providers, and other business applications.
        </p>
        <p className="text-gray-600 italic text-sm">
          Use of third-party integrations is subject to the terms and privacy policies of those providers.
        </p>
      </div>

      <h3 className="text-lg font-semibold text-gray-900 mb-4">TheSayHi is not responsible for:</h3>
      
      <div className="grid gap-3 mb-8">
        <div className="flex items-start bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <span className="text-blue-500 font-bold mr-3">×</span>
          <span className="text-gray-600">The availability of third-party services.</span>
        </div>
        <div className="flex items-start bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <span className="text-blue-500 font-bold mr-3">×</span>
          <span className="text-gray-600">Changes made by third-party providers.</span>
        </div>
        <div className="flex items-start bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <span className="text-blue-500 font-bold mr-3">×</span>
          <span className="text-gray-600">Third-party security practices.</span>
        </div>
        <div className="flex items-start bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <span className="text-blue-500 font-bold mr-3">×</span>
          <span className="text-gray-600">Data processing performed by third parties.</span>
        </div>
        <div className="flex items-start bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <span className="text-blue-500 font-bold mr-3">×</span>
          <span className="text-gray-600">Service interruptions caused by third-party systems.</span>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
        <p className="text-gray-800 text-sm">
          <strong>Customer Responsibility:</strong> Customers are responsible for reviewing and accepting the terms of any third-party service they choose to integrate with TheSayHi.
        </p>
      </div>
    </section>
    <section className="max-w-4xl mx-auto my-10 p-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-6">Intellectual Property</h2>
      
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-8">
        <p className="text-gray-700 leading-relaxed">
          TheSayHi and its licensors own all rights, title, and interest in and to the Services, including all software, source code, designs, interfaces, trademarks, logos, branding, documentation, databases, graphics, text, functionality, and other intellectual property.
        </p>
        <div className="mt-4 p-4 bg-blue-50 border border-blue-100 rounded-md">
          <p className="text-blue-900 font-semibold text-sm">
            Nothing in these Terms transfers ownership of TheSayHi intellectual property to you.
          </p>
        </div>
      </div>

      <h3 className="text-lg font-semibold text-gray-900 mb-4">Except as expressly permitted by these Terms, you may not:</h3>
      
      <div className="grid gap-3 mb-8">
        <div className="flex items-start bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <span className="text-red-500 font-bold mr-3">×</span>
          <span className="text-gray-600">Copy or reproduce the Services.</span>
        </div>
        <div className="flex items-start bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <span className="text-red-500 font-bold mr-3">×</span>
          <span className="text-gray-600">Modify or create derivative works.</span>
        </div>
        <div className="flex items-start bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <span className="text-red-500 font-bold mr-3">×</span>
          <span className="text-gray-600">Reverse engineer, decompile, or disassemble the software.</span>
        </div>
        <div className="flex items-start bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <span className="text-red-500 font-bold mr-3">×</span>
          <span className="text-gray-600">Remove copyright, trademark, or proprietary notices.</span>
        </div>
        <div className="flex items-start bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <span className="text-red-500 font-bold mr-3">×</span>
          <span className="text-gray-600">Sell, sublicense, lease, or commercially exploit the Services without written authorization.</span>
        </div>
      </div>

      <div className="bg-gray-800 text-white p-4 rounded-lg text-center">
        <p className="text-sm">All rights not expressly granted are reserved by TheSayHi.</p>
      </div>
    </section>
    <section className="max-w-4xl mx-auto my-10 p-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-6">License Grant</h2>
      
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-8">
        <p className="text-gray-700 leading-relaxed">
          Subject to these Terms and your payment of applicable fees, TheSayHi grants you a limited, non-exclusive, non-transferable, non-sublicensable, and revocable license to access and use the Services solely for your internal business purposes during your active subscription.
        </p>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
        <h4 className="font-semibold text-blue-900 mb-2">License Limitations</h4>
        <p className="text-blue-800 text-sm">
          This license does not grant ownership of any intellectual property and automatically terminates upon expiration or termination of your subscription.
        </p>
      </div>
    </section>
    <section className="max-w-4xl mx-auto my-10 p-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-6">Customer Feedback</h2>
      
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-8">
        <p className="text-gray-700 leading-relaxed">
          We welcome comments, ideas, suggestions, enhancement requests, and other feedback regarding our Services.
        </p>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-6">
        <h4 className="font-semibold text-blue-900 mb-2">Submission License</h4>
        <p className="text-blue-700 text-sm leading-relaxed">
          If you voluntarily submit feedback, you grant TheSayHi a perpetual, worldwide, irrevocable, royalty-free, transferable license to use, modify, reproduce, distribute, publish, and incorporate such feedback into our products and services without restriction or compensation.
        </p>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
        <p className="text-gray-600 text-sm">
          <strong>Note:</strong> You are not obligated to provide feedback, and TheSayHi is under no obligation to implement any suggestions.
        </p>
      </div>
    </section>
    <section className="max-w-4xl mx-auto my-10 p-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-6">Confidentiality</h2>
      
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-8">
        <p className="text-gray-700 leading-relaxed mb-4">
          During the course of using the Services, either party may receive confidential information belonging to the other.
        </p>
        <p className="text-gray-600 text-sm">
          Confidential information includes non-public business information, technical information, customer lists, pricing, product plans, trade secrets, software architecture, security practices, and other proprietary information.
        </p>
      </div>

      <h3 className="text-lg font-semibold text-gray-900 mb-4">Each party agrees to:</h3>
      <div className="grid gap-3 mb-8">
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <span className="text-blue-500 font-bold mr-2">✓</span>
          <span className="text-gray-600">Protect confidential information using reasonable care.</span>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <span className="text-blue-500 font-bold mr-2">✓</span>
          <span className="text-gray-600">Use confidential information only for purposes related to the Services.</span>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <span className="text-blue-500 font-bold mr-2">✓</span>
          <span className="text-gray-600">Not disclose confidential information except as authorized or required by law.</span>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
        <h4 className="font-semibold text-gray-900 mb-3">Exclusions</h4>
        <p className="text-gray-600 text-sm mb-4">These obligations do not apply to information that:</p>
        <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
          <li>Is publicly available through no fault of the receiving party.</li>
          <li>Was lawfully known before disclosure.</li>
          <li>Is independently developed without use of confidential information.</li>
          <li>Is received lawfully from another source without confidentiality obligations.</li>
        </ul>
      </div>
    </section>
    <section className="max-w-4xl mx-auto my-10 p-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-6">Service Availability</h2>
      
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-8">
        <p className="text-gray-700 leading-relaxed">
          TheSayHi strives to provide reliable and uninterrupted Services. However, we do not guarantee that the Services will always be available, uninterrupted, error-free, or free from delays.
        </p>
      </div>

      <h3 className="text-lg font-semibold text-gray-900 mb-4">Service interruptions may occur due to:</h3>
      
      <div className="grid md:grid-cols-2 gap-3 mb-8">
        <div className="flex items-start bg-gray-50 p-3 rounded border border-gray-100">
          <span className="text-blue-500 mr-2">•</span>
          <span className="text-sm text-gray-600">Scheduled maintenance</span>
        </div>
        <div className="flex items-start bg-gray-50 p-3 rounded border border-gray-100">
          <span className="text-blue-500 mr-2">•</span>
          <span className="text-sm text-gray-600">Emergency maintenance</span>
        </div>
        <div className="flex items-start bg-gray-50 p-3 rounded border border-gray-100">
          <span className="text-blue-500 mr-2">•</span>
          <span className="text-sm text-gray-600">Internet connectivity issues</span>
        </div>
        <div className="flex items-start bg-gray-50 p-3 rounded border border-gray-100">
          <span className="text-blue-500 mr-2">•</span>
          <span className="text-sm text-gray-600">Third-party provider outages</span>
        </div>
        <div className="flex items-start bg-gray-50 p-3 rounded border border-gray-100">
          <span className="text-blue-500 mr-2">•</span>
          <span className="text-sm text-gray-600">Security incidents</span>
        </div>
        <div className="flex items-start bg-gray-50 p-3 rounded border border-gray-100">
          <span className="text-blue-500 mr-2">•</span>
          <span className="text-sm text-gray-600">Force majeure events</span>
        </div>
        <div className="flex items-start bg-gray-50 p-3 rounded border border-gray-100">
          <span className="text-blue-500 mr-2">•</span>
          <span className="text-sm text-gray-600">Software updates</span>
        </div>
        <div className="flex items-start bg-gray-50 p-3 rounded border border-gray-100">
          <span className="text-blue-500 mr-2">•</span>
          <span className="text-sm text-gray-600">Infrastructure failures</span>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
        <p className="text-gray-800 text-sm">
          We reserve the right to suspend portions of the Services temporarily to perform maintenance, improve functionality, or protect the security of our platform.
        </p>
      </div>
    </section>
    <section className="max-w-4xl mx-auto my-10 p-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-6">Beta Features</h2>
      
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-8">
        <p className="text-gray-700 leading-relaxed">
          From time to time, TheSayHi may make beta, preview, experimental, or early access features available.
        </p>
      </div>

      <h3 className="text-lg font-semibold text-gray-900 mb-4">Beta features are provided solely for evaluation purposes and may:</h3>
      
      <div className="grid gap-3 mb-8">
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <span className="text-blue-500 font-bold mr-2">!</span>
          <span className="text-gray-600">Be incomplete.</span>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <span className="text-blue-500 font-bold mr-2">!</span>
          <span className="text-gray-600">Change without notice.</span>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <span className="text-blue-500 font-bold mr-2">!</span>
          <span className="text-gray-600">Contain bugs or errors.</span>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <span className="text-blue-500 font-bold mr-2">!</span>
          <span className="text-gray-600">Be discontinued at any time.</span>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
        <p className="text-blue-900 text-sm leading-relaxed mb-4">
          <strong>Warranty Disclaimer:</strong> Unless otherwise stated, beta features are provided "AS IS" without warranties of any kind.
        </p>
        <p className="text-blue-800 text-sm font-semibold">
          Customers use beta features at their own risk and should avoid relying on them for mission-critical business operations.
        </p>
      </div>
    </section>
    <section className="max-w-4xl mx-auto my-10 p-6">
      <h2 className="text-2xl font-bold text-red-600 mb-6">Disclaimer of Warranties</h2>
      
      <div className="bg-red-50 p-6 rounded-lg border border-red-200 shadow-sm mb-8">
        <p className="text-red-900 font-bold uppercase tracking-wide mb-4">
          The Services are provided on an "as is" and "as available" basis to the maximum extent permitted by applicable law.
        </p>
        <p className="text-red-800 text-sm">
          Except as expressly provided in these Terms, TheSayHi disclaims all warranties, whether express, implied, statutory, or otherwise, including but not limited to:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-4 text-sm text-red-700">
          <span>• Merchantability</span>
          <span>• Fitness for a particular purpose</span>
          <span>• Non-infringement</span>
          <span>• Accuracy</span>
          <span>• Reliability</span>
          <span>• Availability</span>
          <span>• Security</span>
          <span>• Performance</span>
          <span>• Error-free operation</span>
        </div>
      </div>

      <h3 className="text-lg font-semibold text-gray-900 mb-4">TheSayHi does not warrant that:</h3>
      
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-8">
        <ul className="space-y-3 text-gray-600">
          <li className="flex items-start">
            <span className="mr-2">✕</span>
            The Services will operate without interruption.
          </li>
          <li className="flex items-start">
            <span className="mr-2">✕</span>
            The Services will always be available.
          </li>
          <li className="flex items-start">
            <span className="mr-2">✕</span>
            Errors or defects will be corrected immediately.
          </li>
          <li className="flex items-start">
            <span className="mr-2">✕</span>
            The Services will be free from viruses or other harmful components.
          </li>
          <li className="flex items-start">
            <span className="mr-2">✕</span>
            Results obtained through the Services will meet your expectations.
          </li>
        </ul>
      </div>

      <div className="bg-gray-900 text-white p-4 rounded-lg text-center">
        <p className="font-semibold">You acknowledge that use of the Services is at your own risk.</p>
      </div>
    </section>
    <section className="max-w-4xl mx-auto my-10 p-6">
      <h2 className="text-2xl font-bold text-red-600 mb-6">Limitation of Liability</h2>
      
      <div className="bg-red-50 p-6 rounded-lg border border-red-200 shadow-sm mb-8">
        <p className="text-red-900 text-sm mb-4">
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, THESAYHI, ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, LICENSORS, AND SERVICE PROVIDERS SHALL NOT BE LIABLE FOR ANY:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-red-800 font-medium">
          <span>• Indirect damages</span>
          <span>• Incidental damages</span>
          <span>• Special damages</span>
          <span>• Consequential damages</span>
          <span>• Exemplary damages</span>
          <span>• Punitive damages</span>
          <span>• Loss of profits</span>
          <span>• Loss of revenue</span>
          <span>• Loss of business opportunities</span>
          <span>• Loss of goodwill</span>
          <span>• Loss of data</span>
          <span>• Business interruption</span>
        </div>
        <p className="text-red-900 text-xs mt-6 font-semibold uppercase italic">
          WHETHER ARISING IN CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY, OR OTHERWISE, EVEN IF THESAYHI HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
        </p>
      </div>

      <div className="bg-gray-900 text-white p-6 rounded-lg shadow-md mb-6">
        <h4 className="text-lg font-bold mb-3">Liability Cap</h4>
        <p className="text-sm leading-relaxed">
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, THESAYHI'S TOTAL AGGREGATE LIABILITY ARISING OUT OF OR RELATED TO THE SERVICES SHALL NOT EXCEED THE TOTAL AMOUNT PAID BY THE CUSTOMER TO THESAYHI DURING THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO THE CLAIM.
        </p>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
        <p className="text-xs text-gray-500 italic">
          Some jurisdictions do not allow certain limitations of liability, so portions of this section may not apply to you.
        </p>
      </div>
    </section>
    <section className="max-w-4xl mx-auto my-10 p-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-6">Indemnification</h2>
      
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-8">
        <p className="text-gray-700 leading-relaxed">
          You agree to defend, indemnify, and hold harmless TheSayHi, its affiliates, directors, officers, employees, contractors, licensors, partners, and agents from and against any claims, liabilities, damages, losses, judgments, penalties, costs, or expenses (including reasonable attorneys' fees) arising out of or relating to:
        </p>
      </div>

      <div className="grid gap-3 mb-8">
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex items-start">
          <span className="text-blue-500 font-bold mr-3">•</span>
          <span className="text-gray-600">Your use of the Services.</span>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex items-start">
          <span className="text-blue-500 font-bold mr-3">•</span>
          <span className="text-gray-600">Your Customer Content.</span>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex items-start">
          <span className="text-blue-500 font-bold mr-3">•</span>
          <span className="text-gray-600">Your violation of these Terms.</span>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex items-start">
          <span className="text-blue-500 font-bold mr-3">•</span>
          <span className="text-gray-600">Your violation of applicable law.</span>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex items-start">
          <span className="text-blue-500 font-bold mr-3">•</span>
          <span className="text-gray-600">Your infringement of any third-party rights.</span>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex items-start">
          <span className="text-blue-500 font-bold mr-3">•</span>
          <span className="text-gray-600">Your misuse of the Services.</span>
        </div>
      </div>

      <div className="bg-gray-800 text-white p-4 rounded-lg border-l-4 border-blue-500">
        <p className="text-sm">
          <strong>Defense Control:</strong> TheSayHi reserves the right to assume exclusive control of the defense of any matter subject to indemnification.
        </p>
      </div>
    </section>
    <section className="max-w-4xl mx-auto my-10 p-6">
      <h2 className="text-2xl font-bold text-red-600 mb-6">Suspension & Termination</h2>
      
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-8">
        <p className="text-gray-700 leading-relaxed mb-4">
          TheSayHi may suspend, restrict, or terminate your access to the Services immediately if:
        </p>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            "You violate these Terms.",
            "Required subscription fees remain unpaid.",
            "Your use creates security risks.",
            "Fraudulent, unlawful, or abusive activity is detected.",
            "Required by law or governmental authority.",
            "Necessary to protect our customers, infrastructure, or intellectual property."
          ].map((item, idx) => (
            <div key={idx} className="flex items-start bg-red-50 p-3 rounded border border-red-100">
              <span className="text-red-500 mr-2">•</span>
              <span className="text-sm text-red-800">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-8">
        <p className="text-blue-800 font-semibold mb-2">
          You may terminate your subscription at any time through your account settings or by contacting customer support.
        </p>
        <p className="text-blue-700 text-sm">
          Termination does not relieve either party of obligations that accrued before termination, including payment obligations.
        </p>
      </div>

      <h3 className="text-lg font-semibold text-gray-900 mb-4">Upon termination:</h3>
      
      <div className="space-y-3 mb-8">
        <div className="flex items-start bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <span className="text-red-500 font-bold mr-3">×</span>
          <span className="text-gray-600">Your right to use the Services immediately ends.</span>
        </div>
        <div className="flex items-start bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <span className="text-red-500 font-bold mr-3">×</span>
          <span className="text-gray-600">Access to your account may be disabled.</span>
        </div>
        <div className="flex items-start bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <span className="text-red-500 font-bold mr-3">×</span>
          <span className="text-gray-600">Customer Data may be retained for a limited period as described in our Privacy Policy or required by law.</span>
        </div>
      </div>

      <div className="bg-gray-800 text-white p-4 rounded-lg text-center">
        <p className="text-sm">
          Certain provisions of these Terms that by their nature should survive termination will remain in effect, including intellectual property rights, confidentiality obligations, limitation of liability, indemnification, and dispute resolution.
        </p>
      </div>
    </section>
    <section className="max-w-4xl mx-auto my-10 p-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-6">Governing Law</h2>
      
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-8">
        <p className="text-gray-700 leading-relaxed">
          These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which TheSayHi is incorporated or maintains its principal place of business, without regard to its conflict of law principles.
        </p>
      </div>

      <div className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-lg">
        <p className="text-gray-700 text-sm">
          <strong>Note:</strong> Nothing in these Terms limits any mandatory consumer protection rights available under applicable law.
        </p>
      </div>
    </section>
    <section className="max-w-4xl mx-auto my-10 p-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-6">Dispute Resolution</h2>
      
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-6">
        <p className="text-gray-700 leading-relaxed">
          We encourage users to contact TheSayHi first to resolve any dispute informally.
        </p>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-6">
        <p className="text-blue-900 leading-relaxed">
          If a dispute cannot be resolved through good-faith negotiations, the parties agree that the dispute shall be resolved through the courts or another legally recognized dispute resolution process in the jurisdiction specified by applicable law or a separate written agreement between the parties.
        </p>
      </div>

      <div className="bg-gray-800 text-white p-4 rounded-lg">
        <p className="text-sm">
          <strong>Equitable Relief:</strong> Nothing in these Terms prevents either party from seeking injunctive or equitable relief where necessary to protect intellectual property rights, confidential information, or other legal interests.
        </p>
      </div>
    </section>
    <section className="max-w-4xl mx-auto my-10 p-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-6">Force Majeure</h2>
      
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-8">
        <p className="text-gray-700 leading-relaxed mb-4">
          TheSayHi shall not be liable for any delay or failure to perform its obligations resulting from causes beyond its reasonable control, including but not limited to:
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {[
            "Natural disasters", "Floods", "Fires",
            "Earthquakes", "Pandemics", "Labor disputes",
            "Government actions", "War", "Civil unrest",
            "Terrorist acts", "Internet outages", "Utility failures",
            "Cybersecurity incidents", "Third-party infrastructure failures"
          ].map((item, index) => (
            <div key={index} className="flex items-center text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded">
              <span className="text-blue-500 mr-2">✦</span>
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
        <p className="text-gray-800 text-sm">
          <strong>Suspension of Obligations:</strong> Performance obligations affected by a force majeure event will be suspended for the duration of the event.
        </p>
      </div>
    </section>
    <section className="max-w-4xl mx-auto my-10 p-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-6">Assignment</h2>
      
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-6">
        <p className="text-gray-700 leading-relaxed">
          You may not assign or transfer your rights or obligations under these Terms without TheSayHi's prior written consent.
        </p>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
        <p className="text-blue-900 leading-relaxed">
          TheSayHi may assign or transfer these Terms, in whole or in part, in connection with a merger, acquisition, corporate restructuring, financing, sale of assets, or by operation of law.
        </p>
      </div>
    </section>
    <section className="max-w-4xl mx-auto my-10 p-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-8">Additional Terms</h2>

      {/* Severability */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Severability</h3>
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <p className="text-gray-700 leading-relaxed">
            If any provision of these Terms is found to be unlawful, invalid, or unenforceable, that provision shall be enforced to the maximum extent permitted by law, and the remaining provisions shall remain in full force and effect.
          </p>
        </div>
      </div>

      {/* Waiver */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Waiver</h3>
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <p className="text-gray-700 leading-relaxed mb-3">
            Failure by TheSayHi to enforce any provision of these Terms shall not constitute a waiver of that provision or any other right.
          </p>
          <p className="text-gray-700 font-medium">
            Any waiver must be in writing and signed by an authorized representative of TheSayHi.
          </p>
        </div>
      </div>

      {/* Entire Agreement */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Entire Agreement</h3>
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
          <p className="text-blue-900 leading-relaxed">
            These Terms, together with our Privacy Policy, applicable Order Forms, subscription agreements, and any additional policies expressly incorporated by reference, constitute the entire agreement between you and TheSayHi regarding the Services and supersede all prior agreements, communications, and understandings relating to the subject matter.
          </p>
        </div>
      </div>
    </section>
    <section className="max-w-4xl mx-auto my-10 p-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-6">Changes to These Terms</h2>
      
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-6">
        <p className="text-gray-700 leading-relaxed">
          TheSayHi may update these Terms from time to time to reflect changes in our Services, technology, legal requirements, or business operations.
        </p>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-6">
        <p className="text-blue-900 leading-relaxed">
          When material changes are made, we will update the Effective Date at the top of these Terms and provide notice where required by applicable law.
        </p>
      </div>

      <div className="bg-gray-800 text-white p-4 rounded-lg">
        <p className="text-sm">
          <strong>Acceptance:</strong> Your continued use of the Services after updated Terms become effective constitutes your acceptance of the revised Terms.
        </p>
      </div>
    </section>
    <section className="max-w-4xl mx-auto my-10 p-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-6">Contact Information</h2>
      
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-8">
        <p className="text-gray-700 leading-relaxed mb-6">
          If you have any questions regarding these Terms of Service, please contact us:
        </p>

        <div className="space-y-4">
          <div className="flex items-center">
            <span className="font-semibold text-gray-900 w-32">Company:</span>
            <span className="text-blue-600 font-bold">TheSayHi</span>
          </div>
          <div className="flex items-center">
            <span className="font-semibold text-gray-900 w-32">Website:</span>
            <a href="https://thesayhi.com" className="text-blue-600 hover:underline">https://thesayhi.com</a>
          </div>
          <div className="flex items-center">
            <span className="font-semibold text-gray-900 w-32">Support:</span>
            <a href="mailto:support@thesayhi.com" className="text-blue-600 hover:underline">support@thesayhi.com</a>
          </div>
          <div className="flex items-center">
            <span className="font-semibold text-gray-900 w-32">Legal:</span>
            <a href="mailto:legal@thesayhi.com" className="text-blue-600 hover:underline">legal@thesayhi.com</a>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
        <p className="text-blue-800 text-sm italic">
          Please include your account information and a detailed description of your inquiry so we can respond promptly.
        </p>
      </div>
    </section>
    <section className="max-w-4xl mx-auto my-10 p-6">
      <div className="bg-blue-600 rounded-lg p-8 text-white shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Acknowledgement</h2>
        
        <p className="leading-relaxed mb-6">
          By creating an account, accessing, or using TheSayHi's Services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and all policies incorporated by reference, including our Privacy Policy.
        </p>

        <div className="bg-white/10 p-4 rounded border border-white/20 mb-6">
          <p className="font-semibold">
            If you do not agree to these Terms, you must discontinue use of the Services immediately.
          </p>
        </div>

        <p className="text-blue-100 italic">
          Thank you for choosing TheSayHi. We appreciate the opportunity to help your business communicate with customers more effectively and securely.
        </p>
      </div>
    </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;