'use client';

import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen mt-20 bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-sm rounded-lg p-8 sm:p-12 border border-gray-100">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-8 border-b pb-6">Effective Date: July 20, 2026</p>

        <section className="mb-10 text-gray-700">
          <p className="mb-4">
            Welcome to TheSayHi ("TheSayHi," "we," "our," or "us"). We are committed to protecting your privacy and safeguarding the personal information entrusted to us. This Privacy Policy explains how we collect, use, disclose, store, and protect your information when you visit our website, use our live chat platform, create an account, or interact with any of our software, products, and services (collectively, the "Services").
          </p>
          <p>
            TheSayHi provides a cloud-based customer communication platform that enables businesses to engage website visitors, manage conversations, qualify leads, schedule appointments, and integrate customer interactions with business systems.
          </p> <br />
          <p>
            By accessing or using our Services, you acknowledge that you have read and understood this Privacy Policy. If you do not agree with this Privacy Policy, please discontinue use of our Services.
            </p>
        </section>

        <div className="space-y-10">
            <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-600">
              <p className="mb-4 text-gray-700">
                To provide our Services efficiently and securely, we collect different categories of information depending on how you interact with TheSayHi. The information we collect generally falls into the following categories:
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6 text-gray-700">
                <li className="flex items-center">• Personal Information</li>
                <li className="flex items-center">• Business Information</li>
                <li className="flex items-center">• Communication Information</li>
                <li className="flex items-center">• Technical Information</li>
                <li className="flex items-center">• Device Information</li>
                <li className="flex items-center">• Usage Information</li>
                <li className="flex items-center">• Cookie and Tracking Data</li>
                <li className="flex items-center">• Billing Information (for customers)</li>
                <li className="flex items-center">• Customer Support Information</li>
              </ul>

              <p className="text-gray-700 italic">
                The exact information collected depends on whether you are visiting our website, using our live chat widget, creating a customer account, purchasing a subscription, contacting our support team, requesting a demo, or communicating with one of our customers through our platform.
              </p>
            </div>
          </section>
{/* New Section: Live Chat & Conversation Data */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Live Chat & Conversation Data</h2>
            <p className="text-gray-700 mb-4">
              TheSayHi provides businesses with a hosted live chat platform that enables real-time communication with website visitors. When you interact with a chat widget powered by TheSayHi, we may collect information necessary to facilitate the conversation and provide the requested services.
            </p>
            
            <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Voluntary Information:</h3>
              <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-1">
                <li>Name, Email address, Phone number, Company name, Website URL</li>
                <li>Conversation transcript, Appointment preferences</li>
                <li>Files or attachments shared, Information submitted through chat forms</li>
                <li>Any other information voluntarily provided during the conversation</li>
              </ul>

              <h3 className="font-semibold text-gray-900 mb-2">Operational Information:</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Chat session ID, Conversation timestamps, Chat duration</li>
                <li>Browser information, Device information, Approximate location</li>
                <li>Referring webpage, Chat interaction history</li>
              </ul>
            </div>
          </section>

          {/* New Section: Customer-Controlled Data */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Customer Account Information</h2>
            <p className="text-gray-700 mb-4">
              Businesses that subscribe to TheSayHi create organizational accounts to access our Services. To establish and manage customer accounts, we may collect:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-md">
                <h4 className="font-semibold text-gray-800 mb-2">Collected Data Points:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Company name & Business address</li>
                  <li>• Business email & Billing contact info</li>
                  <li>• Admin info & Authorized users</li>
                  <li>• User roles and permissions</li>
                  <li>• Subscription plan & Workspace settings</li>
                  <li>• Login history, Security preferences & Auth records</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded-md">
                <h4 className="font-semibold text-blue-900 mb-2">Purpose of Collection:</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Create and maintain accounts</li>
                  <li>• Authenticate authorized users</li>
                  <li>• Provide administration features</li>
                  <li>• Enable team collaboration</li>
                  <li>• Protect security & prevent unauthorized access</li>
                  <li>• Deliver support & improve functionality</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Business & Billing Information</h2>
            <p className="text-gray-700 mb-4">
              If you purchase a subscription or other paid Services, we collect information necessary to process transactions and manage your account, including:
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <ul className="grid md:grid-cols-2 gap-2 text-gray-700 mb-6">
                <li>• Company legal name</li>
                <li>• Billing address</li>
                <li>• Tax identification number</li>
                <li>• Business contact information</li>
                <li>• Subscription history</li>
                <li>• Invoice records</li>
                <li>• Payment status</li>
                <li>• Transaction identifiers</li>
              </ul>
              
              <div className="bg-white p-4 rounded border-l-4 border-blue-500 text-sm text-gray-600">
                <p className="mb-2"><strong>Security Note:</strong> For your security, TheSayHi does not store complete payment card numbers or payment credentials on its own servers. Payment transactions are processed by trusted third-party payment providers that comply with applicable payment security standards, including PCI DSS requirements.</p>
                <p>We retain billing records as necessary for accounting, auditing, tax reporting, fraud prevention, legal compliance, and business operations.</p>
              </div>
            </div>
          </section>



          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies & Tracking Technologies</h2>
            <p className="text-gray-700 mb-6">
              TheSayHi uses cookies and similar technologies to provide, secure, and improve our Services. Cookies are small text files stored on your device that enable websites to recognize returning visitors, remember preferences, maintain secure sessions, and analyze website performance.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-1">Essential Cookies</h4>
                <p className="text-sm text-gray-600">Necessary for operation, authentication, account security, and session management.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-1">Performance Cookies</h4>
                <p className="text-sm text-gray-600">Understand visitor interaction to improve website speed, usability, and user experience.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-1">Functional Cookies</h4>
                <p className="text-sm text-gray-600">Remember preferences, language settings, and login state for a personalized experience.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-1">Analytics Cookies</h4>
                <p className="text-sm text-gray-600">Help understand traffic, behavior, and feature usage to improve our Services.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-1">Security Cookies</h4>
                <p className="text-sm text-gray-600">Assist in detecting fraud, preventing unauthorized access, and maintaining platform integrity.</p>
              </div>
            </div>

            <p className="text-sm text-gray-600 bg-blue-50 p-4 rounded border border-blue-200">
              <strong>Note:</strong> Most web browsers allow you to manage or disable cookies through settings. Please note that disabling certain cookies may affect the functionality, security, or performance of portions of our Services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Information</h2>
            <p className="text-gray-700 mb-6">
              TheSayHi uses the information we collect to operate, maintain, improve, and secure our Services while delivering a reliable customer communication platform. We process personal information only when we have a legitimate business purpose or another lawful basis under applicable privacy laws.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm">
                  <h4 className="font-bold text-blue-700 mb-2">Providing Our Services</h4>
                  <ul className="text-sm text-gray-600 space-y-1 list-disc pl-4">
                    <li>Create/manage customer accounts</li>
                    <li>Deliver live chat & comms services</li>
                    <li>Route conversations</li>
                    <li>Enable appointment scheduling</li>
                    <li>Manage billing & subscriptions</li>
                    <li>Provide customer support</li>
                  </ul>
                </div>

                <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm">
                  <h4 className="font-bold text-blue-700 mb-2">Security & Fraud Prevention</h4>
                  <ul className="text-sm text-gray-600 space-y-1 list-disc pl-4">
                    <li>Detect unauthorized access</li>
                    <li>Prevent fraud and abuse</li>
                    <li>Monitor suspicious activity</li>
                    <li>Protect customer accounts</li>
                    <li>Investigate security incidents</li>
                  </ul>
                </div>

                <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm">
                  <h4 className="font-bold text-blue-700 mb-2">Legal Compliance</h4>
                  <ul className="text-sm text-gray-600 space-y-1 list-disc pl-4">
                    <li>Comply with applicable laws</li>
                    <li>Respond to government requests</li>
                    <li>Enforce contracts</li>
                    <li>Resolve disputes</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm">
                  <h4 className="font-bold text-blue-700 mb-2">Improving Our Platform</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    We analyze usage to improve website performance, reliability, user experience, and platform security.
                  </p>
                </div>

                <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm">
                  <h4 className="font-bold text-blue-700 mb-2">Communications</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Necessary contacts regarding security alerts, billing, maintenance, and product updates.
                  </p>
                </div>

                <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm">
                  <h4 className="font-bold text-blue-700 mb-2">Marketing Communications</h4>
                  <p className="text-sm text-gray-600">
                    With consent, we may send newsletters, product announcements, and promotional offers. You may unsubscribe at any time via the link in our emails.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Legal Bases for Processing (GDPR)</h2>
            <p className="text-gray-700 mb-6">
              For individuals located in the European Economic Area (EEA), United Kingdom, or Switzerland, TheSayHi processes personal information only when a lawful basis exists under applicable data protection laws.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-2">Performance of a Contract</h4>
                <ul className="text-sm text-gray-600 list-disc pl-4 space-y-1">
                  <li>Create customer accounts</li>
                  <li>Deliver subscribed Services</li>
                  <li>Process payments</li>
                  <li>Provide customer support</li>
                  <li>Fulfill contractual obligations</li>
                </ul>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-2">Legitimate Interests</h4>
                <p className="text-sm text-gray-600 mb-2">
                  Processing necessary for improving services, protecting the platform, preventing fraud, maintaining security, developing features, and responding to requests. We balance these against individual rights.
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-2">Legal Obligations</h4>
                <ul className="text-sm text-gray-600 list-disc pl-4 space-y-1">
                  <li>Tax and financial reporting</li>
                  <li>Court orders & law enforcement</li>
                  <li>Regulatory compliance</li>
                </ul>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-2">Consent</h4>
                <p className="text-sm text-gray-600">
                  Where required, we process based on your consent (marketing/cookies). You may withdraw consent at any time without affecting prior lawfulness.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Sharing & Disclosure of Information</h2>
            <p className="text-gray-700 mb-6">
              TheSayHi values your privacy and does not sell your personal information for monetary compensation. We may share information only in the circumstances described below:
            </p>

            <div className="space-y-4">
              <div className="p-4 border-l-4 border-blue-500 bg-blue-50">
                <h4 className="font-bold text-gray-900">With Our Customers</h4>
                <p className="text-sm text-gray-700">
                  When you communicate through a chat widget operated by one of our customers, the information you provide is shared with that customer so they can respond to your inquiry and provide their products or services.
                </p>
              </div>

              <div className="p-4 border-l-4 border-blue-500 bg-blue-50">
                <h4 className="font-bold text-gray-900">With Service Providers</h4>
                <p className="text-sm text-gray-700 mb-2">
                  We work with trusted third-party providers for cloud hosting, payment processing, email delivery, support, data storage, security, analytics, and infrastructure. These providers access information only as necessary to perform services on our behalf and are contractually obligated to protect it.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-1">Business Transfers</h4>
                  <p className="text-sm text-gray-600">
                    In the event of a merger, acquisition, financing, or sale of assets, personal information may be transferred as part of the transaction, subject to legal requirements.
                  </p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-1">Legal Requirements</h4>
                  <ul className="text-sm text-gray-600 list-disc pl-4">
                    <li>Comply with applicable law or legal requests</li>
                    <li>Protect rights, property, or safety</li>
                    <li>Prevent fraud and investigate security</li>
                    <li>Enforce our agreements</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Service Providers</h2>
            <p className="text-gray-700 mb-6">
              TheSayHi relies on carefully selected third-party providers to deliver certain aspects of our Services. Each provider is selected based on appropriate security, reliability, and privacy standards. We require our providers to process personal information only for authorized purposes and in accordance with applicable data protection laws.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                "Cloud infrastructure",
                "Payment processing",
                "Email delivery",
                "Analytics",
                "Security monitoring",
                "Customer support tools",
                "Content delivery networks (CDNs)",
                "Domain and DNS services",
                "Communication infrastructure",
                "Data backup services"
              ].map((service) => (
                <div key={service} className="p-3 bg-gray-50 rounded border border-gray-200 text-sm font-medium text-gray-700 text-center">
                  {service}
                </div>
              ))}
            </div>
          </section>


          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">CRM & Third-Party Integrations</h2>
            <p className="text-gray-700 mb-4">
              TheSayHi allows customers to connect their accounts with third-party applications and business systems. When you authorize an integration, information may be exchanged between TheSayHi and the connected service according to your configuration.
            </p>

            <div className="bg-blue-50 border border-blue-100 p-6 rounded-lg mb-4">
              <h4 className="font-bold text-blue-900 mb-3">Supported Integration Categories:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 text-blue-800">
                <li className="flex items-center">• Customer Relationship Management (CRM)</li>
                <li className="flex items-center">• Calendar applications</li>
                <li className="flex items-center">• Help desk software</li>
                <li className="flex items-center">• Marketing platforms</li>
                <li className="flex items-center">• Business productivity tools</li>
                <li className="flex items-center">• Communication services</li>
                <li className="flex items-center">• Automation platforms</li>
                <li className="flex items-center">• Analytics solutions</li>
              </ul>
            </div>

            <p className="text-sm text-gray-600 italic">
              The privacy practices of third-party platforms are governed by their own privacy policies. We encourage customers to review those policies before enabling integrations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">International Data Transfers</h2>
            <p className="text-gray-700 mb-6">
              TheSayHi may process and store information in countries other than the country where the information was originally collected. These countries may have data protection laws that differ from those in your jurisdiction.
            </p>

            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
              <p className="text-gray-700 mb-4">
                Where personal information is transferred internationally, we implement appropriate safeguards designed to protect that information in accordance with applicable privacy laws. Such safeguards may include:
              </p>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <li className="flex items-center p-3 bg-gray-50 rounded border border-gray-100 text-sm font-medium text-gray-800">
                  <span className="mr-2 text-blue-600">✓</span> Standard Contractual Clauses (SCCs)
                </li>
                <li className="flex items-center p-3 bg-gray-50 rounded border border-gray-100 text-sm font-medium text-gray-800">
                  <span className="mr-2 text-blue-600">✓</span> Data Processing Agreements (DPAs)
                </li>
                <li className="flex items-center p-3 bg-gray-50 rounded border border-gray-100 text-sm font-medium text-gray-800">
                  <span className="mr-2 text-blue-600">✓</span> Contractual confidentiality obligations
                </li>
                <li className="flex items-center p-3 bg-gray-50 rounded border border-gray-100 text-sm font-medium text-gray-800">
                  <span className="mr-2 text-blue-600">✓</span> Technical and organizational security measures
                </li>
                <li className="flex items-center p-3 bg-gray-50 rounded border border-gray-100 text-sm font-medium text-gray-800">
                  <span className="mr-2 text-blue-600">✓</span> Other lawful transfer mechanisms
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
            <p className="text-gray-700 mb-6">
              Protecting customer information is a core priority at TheSayHi. We maintain administrative, technical, and physical safeguards designed to protect personal information against unauthorized access, disclosure, alteration, or destruction.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
              {[
                "HTTPS/TLS Encryption",
                "Encryption at rest",
                "Role-based access",
                "Multi-factor auth",
                "Security monitoring",
                "Infrastructure logging",
                "Software updates",
                "Vulnerability management",
                "Firewall protection",
                "Secure backups",
                "Access auditing",
                "Incident response"
              ].map((item) => (
                <div key={item} className="p-3 bg-blue-50 rounded border border-blue-100 text-sm font-medium text-blue-800 text-center">
                  {item}
                </div>
              ))}
            </div>

            <p className="text-sm text-gray-600 italic bg-gray-50 p-4 rounded border border-gray-200">
              <strong>Disclaimer:</strong> While we employ commercially reasonable safeguards, no method of electronic transmission or storage is completely secure. Therefore, we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</h2>
            <p className="text-gray-700 mb-4">
              TheSayHi retains personal information only for as long as necessary to fulfill the purposes described in this Privacy Policy, including providing our Services, complying with legal obligations, resolving disputes, enforcing agreements, and protecting our legitimate business interests.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-2">Policy Overview:</h4>
              <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
                <li>Retention periods are determined by the nature of the information and applicable legal requirements.</li>
                <li>When no longer required, we securely delete, anonymize, or dispose of data using reasonable technical and organizational measures.</li>
              </ul>
              
              <div className="text-sm text-gray-600 bg-white p-4 rounded border border-gray-200">
                <strong>Extended Retention:</strong> Certain information may be retained for longer periods where required by law, necessary for legal proceedings, fraud prevention, tax compliance, accounting obligations, or other legitimate business purposes.
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">U.S. Privacy Rights</h2>
            <p className="text-gray-700 mb-6">
              If you are a resident of a U.S. state with applicable privacy legislation (including CA, CO, CT, DE, IA, MT, NE, NH, NJ, OR, TX, UT, VA, or similar), you may have certain rights regarding your personal information.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-gray-50 rounded border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-2">Your Rights</h4>
                <ul className="text-sm text-gray-700 space-y-1 list-disc pl-4">
                  <li>Know what we collect</li>
                  <li>Access your information</li>
                  <li>Request correction of inaccuracies</li>
                  <li>Request deletion (subject to exceptions)</li>
                  <li>Receive a portable copy</li>
                  <li>Opt out of targeted advertising</li>
                  <li>Opt out of sale or sharing</li>
                  <li>Appeal a privacy decision</li>
                  <li>Limit use of sensitive information</li>
                </ul>
              </div>

              <div className="p-4 bg-blue-50 rounded border border-blue-100">
                <h4 className="font-bold text-blue-900 mb-2">Notice of Sale</h4>
                <p className="text-sm text-blue-800 mb-4">
                  TheSayHi does not sell your personal information for monetary compensation.
                </p>
                <h4 className="font-bold text-blue-900 mb-2">Exercising Rights</h4>
                <p className="text-sm text-blue-800">
                  To exercise your rights, please contact us using the information at the end of this policy. We may request additional information to verify your identity before processing your request.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">GDPR Rights</h2>
            <p className="text-gray-700 mb-6">
              If you are located in the European Economic Area (EEA), the United Kingdom, or Switzerland, you may have the following rights under applicable data protection laws:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "Right of access",
                "Right to rectification",
                'Right to erasure ("Right to be Forgotten")',
                "Right to restrict processing",
                "Right to object to processing",
                "Right to data portability",
                "Right to withdraw consent",
                "Right to lodge a complaint"
              ].map((right) => (
                <div key={right} className="flex items-center p-3 bg-gray-50 rounded border border-gray-200">
                  <span className="text-blue-600 mr-2">●</span>
                  <span className="text-sm font-medium text-gray-800">{right}</span>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm text-gray-600 bg-blue-50 p-4 rounded border border-blue-100">
              <strong>Exercising Your Rights:</strong> You may exercise these rights by contacting TheSayHi. We will respond within the timeframes required by applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
              <p className="text-gray-700 mb-4">
                TheSayHi is intended for businesses and individuals who are at least 18 years of age. Our Services are not directed toward children under the age of 13, and we do not knowingly collect personal information from children. Where applicable law establishes a higher minimum age for consent, we comply with those requirements.
              </p>
              
              <div className="space-y-3">
                <p className="text-sm text-gray-600">
                  <strong className="text-blue-900">Deletion Policy:</strong> If we become aware that personal information has been collected from a child without the required consent, we will take reasonable steps to delete that information promptly.
                </p>
                <p className="text-sm text-gray-600">
                  <strong className="text-blue-900">Parental/Guardian Contact:</strong> Parents or legal guardians who believe that a child has submitted personal information to TheSayHi may contact us so that appropriate action can be taken.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">SMS Communications</h2>
            <p className="text-gray-700 mb-4">
              If you voluntarily provide your mobile phone number, you may receive SMS communications related to your relationship with TheSayHi or the businesses using our platform.
            </p>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-3">Message Types:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600 mb-6">
                <li className="flex items-center">✓ Appointment confirmations</li>
                <li className="flex items-center">✓ Meeting reminders</li>
                <li className="flex items-center">✓ Customer support updates</li>
                <li className="flex items-center">✓ Account notifications</li>
                <li className="flex items-center">✓ Verification codes</li>
                <li className="flex items-center">✓ Service-related alerts</li>
              </ul>

              <div className="border-t pt-4 text-sm text-gray-600 space-y-2">
                <p>• <strong>Marketing:</strong> Where legally required, marketing text messages will only be sent with your prior consent.</p>
                <p>• <strong>Rates:</strong> Message frequency varies. Standard message and data rates may apply.</p>
                <p>• <strong>Opt-Out:</strong> Reply <strong>STOP</strong> to marketing messages or contact us directly. Reply <strong>HELP</strong> for assistance.</p>
                <p>• <strong>Important:</strong> Opting out of marketing does not prevent essential transactional or security-related communications.</p>
              </div>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Marketing Communications</h2>
            <p className="text-gray-700 mb-6">
              TheSayHi may occasionally send newsletters, product announcements, educational resources, feature updates, event invitations, promotional offers, and other marketing communications.
            </p>

            <div className="bg-indigo-50 border border-indigo-100 p-6 rounded-lg">
              <h4 className="font-bold text-indigo-900 mb-3">How to Unsubscribe:</h4>
              <ul className="space-y-2 mb-6 text-indigo-800 text-sm">
                <li className="flex items-center">
                  <span className="mr-2">➤</span> Clicking the "Unsubscribe" link included in our emails.
                </li>
                <li className="flex items-center">
                  <span className="mr-2">➤</span> Updating your communication preferences within your account.
                </li>
                <li className="flex items-center">
                  <span className="mr-2">➤</span> Contacting us directly.
                </li>
              </ul>
              
              <p className="text-xs text-indigo-700 italic border-t border-indigo-200 pt-4">
                <strong>Important Note:</strong> Even if you opt out of marketing communications, we may continue sending important administrative messages related to your account, security, billing, legal notices, or service updates.
              </p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Websites</h2>
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <p className="text-gray-700 mb-4">
                Our website and Services may contain links to third-party websites, applications, integrations, or online services that are not owned or controlled by TheSayHi.
              </p>
              
              <div className="p-4 bg-gray-50 rounded border border-gray-200">
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Responsibility Disclaimer:</strong> We are not responsible for the privacy practices, content, security, or policies of third-party websites.
                </p>
                <p className="text-sm text-gray-700">
                  Your interactions with third-party services are governed solely by their respective privacy policies and terms of service. We encourage you to review the privacy practices of every third-party website you visit.
                </p>
              </div>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-gray-700 mb-4">
                We may update this Privacy Policy periodically to reflect changes in our Services, technology, legal requirements, or business practices.
              </p>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2 font-bold text-blue-600">•</span>
                  <span><strong>Updates:</strong> When material changes are made, we will revise the "Effective Date" shown at the beginning of this Privacy Policy.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 font-bold text-blue-600">•</span>
                  <span><strong>Notice:</strong> Where required by applicable law, we will provide appropriate notice before changes become effective.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 font-bold text-blue-600">•</span>
                  <span><strong>Acceptance:</strong> Your continued use of TheSayHi after an updated Privacy Policy becomes effective constitutes your acceptance of the revised policy.</span>
                </li>
              </ul>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-gray-700 mb-6">
              If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:
            </p>

            <div className="bg-gray-900 text-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">TheSayHi</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-400 text-sm mb-1">General Inquiries:</p>
                  <a href="mailto:privacy@thesayhi.com" className="text-blue-400 hover:text-blue-300 font-medium">privacy@thesayhi.com</a>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Customer Support:</p>
                  <a href="mailto:support@thesayhi.com" className="text-blue-400 hover:text-blue-300 font-medium">support@thesayhi.com</a>
                </div>
                <div className="sm:col-span-2">
                  <p className="text-gray-400 text-sm mb-1">Official Website:</p>
                  <a href="https://thesayhi.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 font-medium underline">https://thesayhi.com</a>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-lg text-sm text-blue-800">
              <p>
                <strong>Note:</strong> If you are submitting a privacy rights request, please include sufficient information to verify your identity and describe your request in reasonable detail so we can respond efficiently.
              </p>
            </div>
          </section>

          <section className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
              <p className="text-gray-700 bg-gray-50 p-4 rounded border border-gray-200">
                This Privacy Policy shall be governed by and interpreted in accordance with the laws applicable to TheSayHi's principal place of business, without regard to conflict of law principles, except where mandatory privacy laws require otherwise.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Consent</h2>
              <p className="text-gray-700 mb-4">
                By accessing or using TheSayHi's website, applications, live chat platform, and related Services, you acknowledge that you have read, understood, and agreed to this Privacy Policy. If you do not agree with the practices described in this Privacy Policy, please discontinue use of our Services.
              </p>
              <div className="bg-blue-700 text-white p-6 rounded-lg shadow-lg">
                <p className="font-semibold text-lg">
                  Thank you for trusting TheSayHi with your information.
                </p>
                <p className="text-blue-100 text-sm mt-2">
                  We are committed to maintaining your privacy, protecting your data, and providing secure, reliable customer communication services.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;