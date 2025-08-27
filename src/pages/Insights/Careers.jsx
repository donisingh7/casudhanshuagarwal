import { Link } from "react-router-dom";

export default function Careers() {
  const mail = " info.casudhanshu@gmail.com"; 

  return (
    <section className="bg-white">
      <figure className="w-full">
        <img
          src="/careers/hero.jpg"
          alt="Careers"
          className="w-full h-64 md:h-80 lg:h-[420px] object-cover"
          loading="eager"
        />
      </figure>

      <div className="container-xl py-10">
        <h1 className="h2">JOIN US</h1>

        <div className="mt-4 space-y-4 text-slate-700 leading-relaxed">
          <p>
            The firm offers excellent career opportunity for bright, talented Chartered Accountants
            and other desirous individuals who want to grow with the firm. Most of the present Partners
            have built their career with the growth of the Firm. The firm also believes in the policy
            of sharing and rewarding with its professional staff. The firm continuously recognizes and
            encourages the synchronizing of the growth of its professional staff with the growth of the firm.
          </p>

          <p>
            Mail your resume to{" "}
            <a className="text-blue-700 hover:text-blue-800 font-medium" href={`mailto:${mail}`}>
              {mail}
            </a>.
          </p>

          <p>
            You may also use the form on the{" "}
            <Link to="/submit-resume" className="text-blue-700 hover:text-blue-800 font-semibold">
              Submit Resume
            </Link>{" "}
            page to send in your application.
          </p>
        </div>

        <div className="mt-6 flex gap-3">
          <a href={`mailto:${mail}`} className="btn-primary">Email Your CV</a>
          <Link to="/submit-resume" className="btn-outline">Submit Resume</Link>
        </div>
      </div>
    </section>
  );
}
