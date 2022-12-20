import React from "react";
import Image from "next/image";

function Features() {
  return (
    <React.Fragment>
      <h1 className="text-4xl text-center font-bold text-third leading-snug">
        <span className="text-secondary">Robust & Scalable </span>{" "}
        infrastructure
        <br />
        with <span className="text-secondary">SEO Integrations</span>
      </h1>
      <div className="py-16 flex items-start justify-evenly px-4 gap-8 max-md:flex-col">
        <div className="flex-1">
          <div className="flex justify-center pb-8">
            <Image src="/robust.jpg" height={400} width={400} alt="robust" />
          </div>
          <p className="text-center text-lg max-lg:text-base text-third max-md:w-full">
            We build robust, scalable website which can handle a large volume of
            traffic and user requests without experiencing downtime or
            performance issues. It is able to handle sudden spikes in traffic
            and can easily be modified or expanded as the needs of the business
            change. In addition, we make sure that the website is designed with
            usability and accessibility in mind, making it easy for users to
            navigate and access the information they need.
          </p>
        </div>
        <div className="flex-1">
          <div className="flex justify-center pb-8">
            <Image
              src="/analytics.jpg"
              height={400}
              width={400}
              alt="analytics"
            />
          </div>
          <p className="text-center text-lg max-lg:text-base text-third max-md:w-full">
            In addition to providing a robust and scalable website, we also
            offer support for Google Analytics, Google Search Console
            integrations and we cover all technical SEO. By integrating all the
            features into your website, you can gain valuable insights into how
            users are interacting with your site, which pages they are visiting,
            and where they are coming from. We can provide the support and
            expertise you need to succeed.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Features;
