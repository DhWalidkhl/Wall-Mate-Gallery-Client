import React from "react";
import termsImg from "../../assets/img/terms&condition.jpg";

const Terms = () => {
  return (
    <div className="pt-20 pb-8 container mx-auto">
      <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-10">
        <div>
          <img className="w-full h-full" src={termsImg} alt="" />
        </div>
        <div>
          <div className="my-5">
            <h1 className="mb-3 text-lg text-gray-700 md:text-xl dark:text-gray-400">
              User Policy ......
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Track work across the enterprise through an open, collaborative
              platform. Link issues across Jira and ingest data from other
              software development tools, so your IT support and operations
              teams have richer contextual information to rapidly respond to
              requests, incidents, and changes.
            </p>
          </div>
          <div className="my-5">
            <h1 className="mb-3 text-lg text-gray-700 md:text-xl dark:text-gray-400">
              Refund Policy .....
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Track work across the enterprise through an open, collaborative
              platform. Link issues across Jira and ingest data from other
              software development tools, so your IT support and operations
              teams have richer contextual information to rapidly respond to
              requests, incidents, and changes.
            </p>
          </div>
          <div className="my-5">
            <h1 className="mb-3 text-lg text-gray-700 md:text-xl dark:text-gray-400">
              Data Privacy ....
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Track work across the enterprise through an open, collaborative
              platform. Link issues across Jira and ingest data from other
              software development tools, so your IT support and operations
              teams have richer contextual information to rapidly respond to
              requests, incidents, and changes.
            </p>
          </div>
          <div className="my-5">
            <p className="mb-3 text-lg text-gray-700 md:text-xl dark:text-gray-400">
              Delivery Policy ....
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Track work across the enterprise through an open, collaborative
              platform. Link issues across Jira and ingest data from other
              software development tools, so your IT support and operations
              teams have richer contextual information to rapidly respond to
              requests, incidents, and changes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
