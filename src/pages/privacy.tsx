import Navbar from "@/components/Navbar";
import Head from "next/head";

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Sygma</title>

        <meta
          name="description"
          content="Learn how Sygma protects your data and respects your privacy. Read our
      comprehensive policy."
        />
      </Head>
      <Navbar />
      <div className="bg-white px-6 py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
          <p className="text-primary-600 text-base font-semibold leading-7">
            Last Updated: November 2, 2022
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Privacy Policy
          </h1>
          <div className="mt-10 max-w-2xl">
            <h2 className="my-4 text-lg">1. Introduction</h2>
            <p>
              <span className="font-medium">Sygma Labs Ltd. (“Sygma”)</span>{" "}
              respects your privacy and is committed to protecting it by
              complying with this policy. This privacy policy (
              <span className="font-medium">“Privacy Policy”</span>) describes
              how we collect, use, disclose and protect your personal data.
            </p>
            <p className="my-4">
              We will only use your personal data in accordance with this policy
              unless otherwise required by applicable law. We take steps to
              ensure that the personal data that we collect about you is
              adequate, relevant, not excessive, and used for limited purposes.
              This policy applies to information we collect, use or disclose
              about you on this website (the “Services”) or through any email,
              text or email between you and this website.
            </p>
            <p className="my-4">
              The Services may include links to third-party websites, plug-ins,
              services, social networks, or applications. Clicking on those
              links or enabling those connections may allow the third party to
              collect or share data about you. If you follow a link to a
              third-party website or engage a third-party plugin, please note
              that these third parties have their own privacy policies and we do
              not accept any responsibility or liability for these policies. We
              do not control these third-party websites, and we encourage you to
              read the privacy policy of every website you visit.
            </p>
            <p className="my-4">
              Please read this policy carefully to understand our policies and
              practices for collecting, processing, and storing your
              information. If you do not agree with our policies and practices,
              your choice is not to use the Services. By accessing or using the
              Services, you indicate that you understand, accept, and consent to
              the practices described in this policy. This policy may change
              from time to time. Your continued use of the Services after we
              make changes indicates that you accept and consent to those
              changes, so please check the policy periodically for updates
            </p>
            <h2 className="my-4 text-lg">
              2. Personal Data We Collect About You
            </h2>
            <p className="my-4">
              Personal Data means any information in respect of commercial
              transactions that relates directly or indirectly to a data
              subject, who is identified or identifiable from that information,
              or from that and other information in the possession of a data
              user, including any sensitive personal data and expression of
              opinion about the data subject. The personal data we collect about
              you includes the following:
            </p>
            <ol
              role="list"
              className="list mt-8 max-w-xl space-y-8 text-gray-600"
            >
              <li className="flex gap-x-3 ">
                data that does not directly or indirectly reveal your identity,
                such as data regarding your use and interactions with the
                functionality of the Services, statistical and aggregated
                information. Statistical or aggregated data does not directly
                identify a specific person, but we may derive non-personal
                statistical or aggregate information from the personal data. For
                example, we may aggregate personal data to calculate the
                percentage of users that access a specific feature or the time
                they spend on the Services;
              </li>
              <li className="flex gap-x-3">
                login information (including your web3 wallet provider and
                public address), browser type and version, IP address, time zone
                setting, browser plug-in types and versions, operating system,
                platform, internet connection, equipment used to access the
                Service and usage details;
              </li>
              <li className="flex gap-x-3">
                usage analytics of the Services include how it is accessed,
                webpages visited, products viewed or searched for, page response
                times, length of time spent on certain pages, page interaction
                information (scrolling, clicks, mouse-overs);
              </li>
              <li className="flex gap-x-3">
                data regarding your digital asset wallet, its corresponding
                public address and any relevant transactions performed through
                it on public blockchains;
              </li>
              <li className="flex gap-x-3">
                feedback or information you provide to us through the Services
                or email relating to the Services.
              </li>
            </ol>
            <p className="my-4">
              The Services operate by communicating with a number of third-party
              public blockchains and other service providers that operate in the
              web3 space. We may collect personal data about you (as outlined in
              (a) - e)) from these blockchains and third-party services
              providers as may be required to operate the Services).
            </p>
            <h2 className="my-4 text-lg">3. How We Collect Personal Data</h2>
            <p>
              We use different methods to collect your personal data, these
              include:
            </p>
            <ul className="ml-6 mt-8 max-w-xl list-decimal space-y-8 ">
              <li>
                direct interactions with the Services when you provide it to us.
                For example, when connecting your web3 wallet to the Services to
                use its functionality. When you carry on a transaction over the
                Services, details of the transaction will be recorded.
              </li>
              <li>
                automated technologies. As you use the Services, personal data
                may automatically be collected, including usage details, IP
                address, and information collected through cookies and other
                tracking technologies.
              </li>
              <li>
                from third parties and from publicly available sources. For
                example, we may collect personal data from service providers and
                public blockchains that are generally available.
              </li>
            </ul>
            <p className="my-4">
              We collect your personal data when you access the Services and
              utilize its functionality. We may collect your personal data from
              third-party service providers that integrate with the Services.
              Some ways we may collect your personal data include:
            </p>
            <ol className="disc">
              <li>
                <strong>Public Blockchains:</strong> If you access the Services
                through a public blockchain, we may collect personal data that
                is accessible from that blockchain and necessary to interact
                with your web3 wallet.
              </li>
              <li>
                <strong>Ethereum Data:</strong> If you access the Services using
                an Ethereum address, we may store the Ethereum Address and
                collect personal data associated with it.
              </li>
              <li>
                <strong>OAuth Authentication:</strong> If you access and use the
                Services using our OAuth functionality, your name, email and
                username from our OAuth functionality may be collected and
                stored.
              </li>
            </ol>
            <p className="my-4">
              We use user insight and analytics tools to continually improve the
              Services and learn what features and functionality are utilized by
              you and our other users. We collect your personal data when you
              spend time on the Services and utilize its features.
            </p>
            <p className="my-4">
              Sygma also collects your personal data when you:
            </p>
            <ul className="disc">
              <li>
                Use the Services to download any file, software, media or other
                content from it;
              </li>
              <li>
                Communicate with us through email, social media, phone or any
                other means; and
              </li>
              <li>
                Provide us with your name, email address or other identifying
                information through text message, email or other electronic
                means.
              </li>
            </ul>
            <h2 className="my-4 text-lg">
              4.How we Collect Personal Data Through Automatic Data Collection
              Technologies
            </h2>
            <p className="my-4">
              As you interact with the Services, we may use cookies or other
              automatic data collection technologies to collect certain
              information about your equipment, browsing actions, and patterns,
              including:
            </p>
            <ul className="list-disc">
              <li>
                Details of your visits to the Services, including traffic data,
                logs and other communication data and the resources that you
                access and use on the Services.
              </li>
              <li>
                Information about your computer and internet connection,
                including your IP address, operating system, and browser type.
              </li>
            </ul>
            <p className="my-4">
              The information we collect automatically is statistical
              information and may include personal data that you provide to us
              or that we receive from third parties. It helps us to improve the
              Services and to deliver a better and more personalized
              functionality, including by enabling us to:
            </p>
            <ul className="list-disc">
              <li>Estimate our audience size and usage patterns.</li>
              <li>
                Store information about your preferences, allowing us to
                customize the Services according to your interests.
              </li>
              <li>Recognize you when you return to the Services.</li>
            </ul>
            <p className="my-4">
              The technologies we use for this automatic data collection may
              include:
            </p>
            <ul className="list-disc">
              <li>
                <strong>Cookies (or browser cookies)</strong>. A cookie is a
                small file placed on the hard drive of your computer. You may
                refuse to accept browser cookies by activating the appropriate
                setting on your browser. However, if you select this setting you
                may be unable to access certain parts of the Services. Unless
                you have adjusted your browser setting so that it will refuse
                cookies, our system will issue cookies when you direct your
                browser to the Services.
              </li>
              <li>
                <strong>Flash Cookies.</strong>
                Certain features of the Services may use local stored objects
                (or Flash cookies) to collect and store information about your
                preferences and navigation to, from, and on our Services. Flash
                cookies are not managed by the same browser settings that are
                used for browser cookies. For information about managing your
                privacy
              </li>
              <li>
                <strong>Web Beacons.</strong>
                Pages of the Services may contain small electronic files known
                as web beacons (also referred to as clear gifs, pixel tags, and
                single-pixel gifs) that permit the Company, for example, to
                count users who have visited those pages and for other related
                website statistics (for example, recording the popularity of
                certain website content and verifying system and server
                integrity).
              </li>
            </ul>
            <h2 className="my-4 text-lg">5. How We Use Your Personal Data</h2>
            <p>
              We use the personal data we collect about you or that you provide
              to us through providing the Services. We may use your personal
              data:
            </p>
            <ul>
              <li>
                To present the Services and its contents to you. We do not
                monitor or track personal data provided to the Services except
                as required by law.
              </li>
              <li>
                To provide you with the information, modifications to the
                Services, products and functionality you may request from us.
                Personal data may be used to provide a personalized experience
                and facilitate payments on the Services. To fulfil the purposes
                for which you provided your personal data or that we
              </li>
              <li>
                To fulfil the purposes for which you provided your personal data
                or that were described when it was collected, or any other
                purpose for which you provide it.
              </li>
              <li>
                To carry out our obligations and enforce our rights arising from
                any contracts with you, including our Terms and Conditions, for
                Fees or to comply with legal requirements.
              </li>
              <li>
                To notify you about changes to the Services or any products or
                functionality we offer or provide through it.
              </li>
              <li>
                To improve the Services, marketing and your experience on it.
              </li>
              <li>
                To provide you with customer support or assist with resolving
                complaints or issues.
              </li>
              <li>
                To conduct screenings, due diligence processes or any identity
                verification or wallet verification measures to comply with any
                applicable laws, regulations, directives or requests from
                relevant authorities.
              </li>
              <li>
                To assess and process instructions, transfers and other
                communications performed by you or others to the Services.
              </li>
              <li>
                To monitor infrastructure and third-party service providers the
                Services interacts with.
              </li>
              <li>
                To measure or understand the effectiveness of the functionality
                and offerings provided to you.
              </li>
              <li>
                To monitor, detect, prevent or otherwise address fraud and other
                illegal or harmful actions undertaken on or towards the Services
                in violation of our terms or policies.
              </li>
              <li>
                To comply with all application laws, rules, regulations, orders,
                instructions, directives, and other requests from law
                enforcement, governmental authorities or regulating bodies; or
              </li>
              <li>
                In any other way we may describe when you provide your personal
                data or for any other purpose communicated to you with your
                consent.
              </li>
            </ul>
            <p className="my-4">
              We may also use your personal data to contact you about our own
              and third-parties' services that may be of interest to you, as
              permitted by law. If you do not want us to use your personal data
              in this way, we will give you the opportunity to opt-out of
              receiving these communications.
            </p>
            <h2 className="my-4 text-lg">
              6. Disclosure of Your Personal Data
            </h2>
            <p>
              We may disclose aggregated anonymized personal data about our
              users, and personal data that does not identify any individual,
              without restriction.
            </p>
            <p className="my-4">
              We may disclose personal data that we collect or that you provide
              as described in this Privacy Policy:
            </p>
            <ol>
              <li>
                <strong>Affiliated entities:</strong> We may share your person
                with our subsidiaries, parent company and other related entities
                to effectively provide you with the Services.
              </li>
              <li>
                <strong>Third-Party Service Providers: </strong>We may share
                your information with trusted service providers, contractors,
                the organizations they act on behalf of, and other third-parties
                (such as decentralized protocols) that we use to support our
                business. These third-party service providers may require us to
                provide them with your information to perform or facilitate
                these functions. If we provide them with your information, we
                will contractually obligate them to keep your information
                confidential, use it only for the purposes for which we disclose
                it to them, and to process the personal data with the same
                standards set out in this policy.
              </li>
              <li>
                <strong>Payment Processors: </strong>Users may be able to submit
                payment information into the Service to pay for certain
                features. Sygma may utilize third-party payment processors to
                facilitate payments. We do not receive nor store any payment
                information on our servers. All payment transactions are
                encrypted when communicated through our third-party payment
                processor.
              </li>
              <li>
                <strong>Commercial Partners: </strong>We may share your personal
                data or anonymized aggregated data derived from your information
                and the information of others with some of our commercial
                partners.
              </li>
              <li>
                <strong>Legal Requirements: </strong>We may disclose personal
                data in order to comply with any court order, law, or legal
                process, including to respond to any government or regulatory
                request in accordance with applicable law.
              </li>
              <li>
                <strong>Enforcement:</strong> We may disclose personal data in
                order to establish or exercise our legal rights, or to defend
                against legal claims, or when we believe it is necessary to
                share information in order to investigate, prevent, or take
                action regarding illegal activities, data breaches, suspected
                fraud, situations involving potential threats to the physical
                safety of any person, violations of our Terms of Service, or as
                otherwise required by law.
              </li>
              <li>
                <strong>Applicable Law: </strong>there may be laws under the
                jurisdictions that we operate in that compel us to disclose
                personal data or Digital Wallet information. If required, we may
                provide personal data or Digital Wallet information that we
                receive from you or a third-party in an unencrypted format.
              </li>
              <li>
                <strong>Business Transactions: </strong>Sygma reserves the right
                to share your information in connection with any proposed or
                realized merger, divestiture, consolidation, restructuring,
                purchase, sale or any other type of business combination that
                requires its disclosure.
              </li>
            </ol>
            <h2 className="my-4 text-lg">7. Transferring of Personal Data</h2>
            <p>
              We may transfer personal data that we collect or that you provide
              as described in this policy to contractors, service providers, and
              other third parties we use to support our business (such as
              analytics and search engine providers that assist us with Services
              improvements and optimization) and who are contractually obligated
              to keep personal data confidential, use it only for the purposes
              for which we disclose it to them, and to process the personal da
              with the same standards set out in this policy.
            </p>
            <p className="my-4">
              We may process, store, and transfer your personal data in and to a
              foreign country, with different privacy laws that may or may not
              be as comprehensive as your jurisdiction. In these circumstances,
              the governments, courts, law enforcement, or regulatory agencies
              of that country may be able to obtain access to your personal data
              through the laws of the foreign country.
            </p>
            <p className="my-4">
              Whenever we engage a service provider, we require that its privacy
              and security standards adhere to this policy and applicable
              privacy legislation.
            </p>
            <p className="my-4">
              You are welcome to contact us to obtain further information about
              Sygma policies regarding service providers outside of your
              jurisdiction. By submitting your personal data or engaging with
              the Services, you consent to this transfer, storage, or
              processing.
            </p>
            <h2 className="my-4 text-lg">8. Data Security</h2>
            <p>
              The security of your personal data is very important to us. We use
              physical, electronic, and administrative measures designed to
              secure your personal data from accidental loss and from
              unauthorized access, use, alteration, and disclosure. The safety
              and security of your personal data also depends on you. Where we
              have given you (or where you have chosen) a password for access to
              certain parts of your Digital Wallet, you are responsible for
              keeping this password confidential. We ask you not to share your
              password with anyone.
            </p>
            <p className="my-4">
              Unfortunately, the transmission of information via the Internet is
              not completely secure. Although we do our best to protect your
              personal data, we cannot guarantee the security of your personal
              data transmitted to our Services. Any transmission of personal
              data is done at your own risk. We are not responsible for
              circumvention of any privacy settings or security measures
              contained on the Services.
            </p>
            <h2 className="my-4 text-lg">9. Data Retention</h2>
            <p className="my-4">
              Except as otherwise permitted or required by applicable law or
              regulation, we will only retain your personal data for as long as
              necessary to fulfill the purposes we collected it for, including
              for the purposes of satisfying any legal, accounting, or reporting
              requirements. Under some circumstances, we may anonymize your
              personal data so that it can no longer be associated with you. We
              reserve the right to use such anonymous and de-identified data for
              any legitimate business purpose without further notice to you or
              your consent.
            </p>
            <h2 className="my-4 text-lg">
              10. Accessing and Correcting Your Personal Data
            </h2>
            <p className="my-4">
              It is important that the personal data we hold about you is
              accurate and current. Please keep us informed if your personal
              data changes. If you want to review, verify, correct, or withdraw
              consent to the use of your personal data, you may also send us an
              email at
              <a
                className="font-medium"
                href="mailto:support@buildwithsygma.com"
              >
                support@buildwithsygma.com
              </a>{" "}
              to request access to, correct, or delete any personal data that
              you have provided to us. We may not accommodate a request to
              change information if we believe the change would violate any law
              or legal requirement or cause the information to be incorrect.
            </p>
            <p className="my-4">
              We may request specific information from you to help us confirm
              your identity and your right to access, and to provide you with
              the personal data that we hold about you or make your requested
              changes. Applicable law may allow or require us to refuse to
              provide you with access to some or all of the personal data that
              we hold about you, or we may have destroyed, erased, or made your
              personal data anonymous in accordance with our record retention
              obligations and practices. If we cannot provide you with access to
              your personal data, we will inform you of the reasons why, subject
              to any legal or regulatory restrictions.
            </p>
            <p className="my-4">
              We will provide access to your personal data, subject to
              exceptions set out in applicable privacy legislation. Examples of
              such exceptions include:
            </p>
            <ul className="ml-6 mt-8 max-w-xl list-decimal space-y-8 ">
              <li>Information that protected by attorney-client privilege;</li>
              <li>
                Information that is part of a formal dispute resolution process;
              </li>
              <li>
                Information that is about another individual that would reveal
                their personal data or confidential commercial information; and
              </li>
              <li>Information that is prohibitively expensive to provide.</li>
            </ul>
            <h2 className="my-4 text-lg">11. Withdrawing Your Consent</h2>
            <p className="my-4">
              Where you have provided your consent to the collection, use, and
              transfer of your personal data, you may have the legal right to
              withdraw your consent under certain circumstances. To withdraw
              your consent, if applicable, contact us at{" "}
              <a
                className="font-medium"
                href="mailto:support@buildwithsygma.com"
              >
                support@buildwithsygma.com
              </a>{" "}
              Please note that if you withdraw your consent we may not be able
              to provide you with a particular product or service. We will
              explain the impact to you at the time to help you with your
              decision.
            </p>
            <h2 className="my-4 text-lg">12. Changes to our Privacy Policy</h2>
            <p className="my-4">
              Our policy is to post any changes we make to our privacy policy on
              this page. If we make material changes to how we treat our users'
              personal data, we will notify you through a notice on the Services
              home page.
            </p>
            <p className="my-4">
              We include the date the privacy policy was last revised at the top
              of the page. You are responsible for ensuring we have an
              up-to-date, active, and deliverable email address for you, and for
              periodically visiting our Services and this privacy policy to
              check for any changes.
            </p>
            <h2 className="my-4 text-lg">
              13. Additional Terms for Residents of the European Economic Area
              (EEA) and the United Kingdom
            </h2>
            <p className="my-4">
              If you are a resident of the European Economic Area or the United
              Kingdom, you have the following rights:
            </p>
            <ol>
              <li>
                <strong>Right of Access.</strong> You have the right to request
                and obtain access to your personal data (known as a “data
                subject access request”). This enables you to receive a copy of
                the personal data we hold about you and check that we are
                lawfully processing it.
              </li>
              <li>
                <strong>Right to Rectification. </strong>You have the right to
                request the correction of the personal data that we hold about
                you. This enables you to have any incomplete or inaccurate data
                we hold about you corrected, including through providing us with
                a supplementary
              </li>
              <li>
                <strong>Right to Erasure. </strong>You have the right to request
                the erasure of your personal data. This enables you to ask us to
                delete or remove personal data where there is no good reason for
                us to continue to process it. You also have the right to ask us
                to delete or remove your personal data where you have
                successfully exercised your right to object to processing (see
                below), where we may have processed your information unlawfully
                or where we are required to erase your personal data to comply
                with local law. Note, however, that we may not always be able to
                comply with your request of erasure for specific legal reasons,
                which will be notified to you, if applicable, at the time of
                your request.
              </li>
              <li>
                <strong>Right to Object to Processing.</strong>
                You have the right to object to the processing of your personal
                data where we are relying on a legitimate interest (or those of
                a third-party) and there is something about your particular
                situation which makes you want to object to processing on this
                ground as you feel it impacts on your fundamental rights and
                freedoms. In some cases, we may demonstrate that we have
                compelling legitimate grounds to process your information which
                override your rights and freedoms.
              </li>
              <li>
                <strong>Right to Restriction of Processing.</strong> You have
                the right to request the restriction of processing of your
                personal data. This enables you to ask us to suspend the
                processing of your personal data in the following scenarios:
                <ul className="ml-6 list-disc">
                  <li>If you want us to establish the data's accuracy.</li>
                  <li>
                    Where our use of the data is unlawful, but you do not want
                    us to erase it.
                  </li>
                  <li>
                    Where you need us to hold the personal data even if we no
                    longer require it as you need it to establish, exercise or
                    defend legal claims.
                  </li>
                  <li>
                    Where you have objected to our use of your personal data but
                    we need to verify whether we have overriding legitimate
                    grounds to use it.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Right to Portability.</strong> You have the right to
                request the transfer of your personal data to you or a
                third-party. We will provide to you, or a third-party you have
                chosen, your personal data in a structured, commonly used,
                machine-readable format. Note that this right only applies to
                automated information which you initially provided consent for
                us to use or where we used the information to perform a contract
                with you.
              </li>
              <li>
                <strong>Right to Withdraw Consent.</strong> You have the right
                to withdraw consent at any time where we are relying on consent
                to process your personal data. However, this will not affect the
                lawfulness of any processing carried out before you withdraw
                your consent. If you withdraw your consent, we may not be able
                to provide certain products or services to you. We will advise
                you if this is the case at the time you withdraw your consent.
              </li>
            </ol>
            <p className="my-4">
              You may exercise any of the rights listed above by contacting our
              Privacy Officer at:{" "}
              <a
                className="font-medium"
                href="mailto:support@buildwithsygma.com"
              >
                support@buildwithsygma.com
              </a>{" "}
            </p>
            <h2 className="my-4 text-lg">
              14. Contact Information and Challenging Compliance
            </h2>
            <p className="my-4">
              We welcome your questions, comments, and requests regarding this
              privacy policy and our privacy practices. Please contact us at:
            </p>
            <p className="mb-2 mt-4">Privacy Officer</p>
            <a className="font-medium" href="mailto:support@buildwithsygma.com">
              support@buildwithsygma.com
            </a>{" "}
            <p className="my-4">
              We have procedures in place to receive and respond to complaints
              or inquiries about our handling of personal data, our compliance
              with this policy, and with applicable privacy laws. To discuss our
              compliance with this policy please contact our Privacy Officer
              using the contact information listed above.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
