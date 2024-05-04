"use client";
import { ReactNode, useEffect, useMemo, useState } from "react";

import { IdType } from "@/types";

import Icon from "@/components/shared/utilities/Icon/icon";
import { useLocation } from "wouter";

interface MailLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MailLayoutProps) => {
  const [activeTab, setActiveTab] = useState<undefined | number>();
  const [location] = useLocation();

  const tabs = useMemo(
    () => [
      {
        id: 1,
        label: "Dashboard",
        route: "/dashboard",
        regex: "/dashboard/*",
        icon: "ChartBar",
      },
      {
        id: 2,
        label: "Create New Course",
        route: "/new-course?step=new",
        regex: "/new-course*",
        icon: "PlusCircle",
      },
      {
        id: 3,
        label: "My Courses",
        route: "/my-courses",
        regex: "/my-courses/*",
        icon: "Stack",
      },
      {
        id: 4,
        label: "Earning",
        route: "/earnings",
        regex: "/earnings/*",
        icon: "CreditCard",
      },
      {
        id: 5,
        label: "Message",
        route: "/message",
        regex: "/message/*",
        icon: "ChatCircleDots",
      },
      {
        id: 6,
        label: "Settings",
        route: "/settings",
        regex: "/settings/*",
        icon: "Gear",
      },
    ],
    []
  );

  useEffect(() => {
    const activeTab = tabs.find((tab) => new RegExp(tab.regex).test(location));
    setActiveTab(activeTab?.id);
  }, [location, tabs]);

  return (
    <div className="grid grid-cols-[280px_auto] bg-gray-50">
      {/* menu */}
      <nav className="h-[100vh] w-[280px] bg-gray-900 text-white">
        <div className="flex items-center gap-2 p-5">
          <Icon id="EtutorLogo" className="h-8 w-8 stroke-primary" />
          <span className="text-2xl font-semibold text-white">E-tutor</span>
        </div>
        <ul>
          {tabs.map((tab) => {
            return (
              <li key={tab.id}>
                <div
                  className={`group flex items-center gap-3 ${
                    activeTab === tab.id ? "bg-primary-500" : ""
                  } px-4 py-3`}
                >
                  <Icon
                    id={tab.icon as IdType}
                    className={`group-hover:stroke-white ${
                      activeTab === tab.id ? "stroke-white" : "stroke-gray-500"
                    }`}
                  />
                  <a
                    href={tab.route}
                    className={`w-full group-hover:text-white ${
                      activeTab === tab.id ? "text-white" : "text-gray-500"
                    }`}
                  >
                    {tab.label}
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
