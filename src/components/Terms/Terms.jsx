import "./Tearms.styles.css";
import elipse from "../../assets/elipse-terms.png";
export default function Terams() {
  return (
    <>
      <div className="container-tearms">
        <div className="container-toogle-terms">
          <img src={elipse} alt="elipse" />
        </div>
        <h1 className="tearms-head">Terms of Service</h1>
        <p className="tearms-small-text">
          Please read these Terms of Service carefully before <br />
          using our website or services.
        </p>
      </div>
      <section className="info">
        <p className="text-terms">
          Welcome to [Your Company Name] ("Company", "we", "our", or "us").
          These Terms of Service ("Terms") govern your access to and use of our
          website [website.com] and any related services (collectively, the
          "Service").
        </p>
        <p className="text-terms">
          By accessing or using our Service, you agree to be bound by these
          Terms. If you do not agree to all the terms, you may not access or use
          the Service
        </p>
        <ol>
          <li className="tearms-list-item">
            Acceptance of Terms
            <p className="text-terms-last">
              You may use our Service only in accordance with these Terms and
              all applicable local, state, national, and international laws. You
              agree not to:
            </p>
            <li className="list-terams-dot-left">
              <ul>
                <li>
                  {" "}
                  Infringe the intellectual property or other rights of any
                  third party.
                </li>
                <li>Transmit any harmful, abusive, or fraudulent content.</li>
                <li>
                  Interfere with the security or integrity of the Service.
                </li>
                <li> Violate any applicable laws or regulations.</li>
              </ul>
            </li>
          </li>
          <li className="tearms-list-item">Use of the Website</li>
          <ul>
            <li>
              {" "}
              You may be required to register for an account to access certain
              features.
            </li>
            <li>
              You agree to provide accurate and complete information and keep
              your account secure.
            </li>
            <li> You are responsible for all activity under your account.</li>
          </ul>

          <li className="tearms-list-item">Intellectual Property</li>
          <ul>
            <li>
              {" "}
              All content and materials on the Service, including but not
              limited to text, images, logos, graphics, software, and code, are
              owned by or licensed to [Your Company Name] and are protected
              under intellectual property laws.
            </li>
            <li>
              {" "}
              You may not copy, reproduce, distribute, modify, or create
              derivative works from any part of the Service without prior
              written permission.
            </li>
          </ul>

          <li className="tearms-list-item">User Accounts</li>
          <ul>
            <li>
              Our Service may contain links to third-party websites or services
              that are not owned or controlled by us.
            </li>
            <li>
              {" "}
              We do not endorse or assume responsibility for any third-party
              content, products, or services.
            </li>
          </ul>

          <li className="tearms-list-item">Termination</li>
          <ul>
            <li>
              We may suspend or terminate your access to the Service at any
              time, with or without notice, for any reason, including violation
              of these Terms.
            </li>
            <li>
              Upon termination, your right to use the Service will immediately
              cease. Any provisions of these Terms that should survive
              termination shall remain in effect.
            </li>
          </ul>

          <li className="tearms-list-item">Changes to Terms</li>
          <ul>
            <li>
              {" "}
              The Service is provided "as is" and "as available" without
              warranties of any kind. We do not guarantee that the Service will
              be uninterrupted or error-free.
            </li>
            <li>
              {" "}
              We disclaim all warranties, express or implied, including
              merchantability, fitness for a particular purpose, and
              non-infringement.
            </li>
          </ul>

          <li className="tearms-list-item">Indemnification</li>
          <ul>           
            <li className="list-item-paragraph">
              You agree to indemnify and hold harmless [Your Company Name], its
              affiliates, officers, directors, employees, and agents from any
              claims, liabilities, damages, and expenses (including legal fees)
              arising out of your use of the Service or violation of these
              Terms.
            </li>
          </ul>

          <li className="tearms-list-item">Contact Us</li>
          <ul>
            <li>
              {" "}
              If you have any questions or concerns about these Terms, please
              contact us at:
            </li>
            <li> Email: [email@example.com]</li>
            <li>Address: [Company Address]</li>
          </ul>
        </ol>
      </section>
    </>
  );
}
