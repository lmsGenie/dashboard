"use client";

// import Image from "next/image.js";
// import { useRouter } from "next/navigation.js";
import pageNotFoundImage from "../../public/assets/images/404.png";
import MainLayout from "@/components/shared/layouts/MainLayout/MailLayout";

// import { Button } from "@/components/ui/button.tsx";
// import Layout from "@/components/layout/Layout";

function PageNotFound() {
  // const router = useRouter();

  return (
    <MainLayout>
      <div className="flex h-full flex-col justify-center md:flex-row md:items-center md:justify-between">
        <div className="ml-10 w-[90%] space-y-2 md:w-[50%] md:space-y-4">
          <div className="space-y-1 md:space-y-2">
            <h1 className="text-xl font-semibold text-gray-200 md:text-2xl lg:text-5xl">
              Error 404
            </h1>
            <h2 className="text-lg font-semibold text-gray-900 md:text-xl lg:text-4xl">
              Oops! page not found
            </h2>
          </div>
          <p className="md:text-md text-sm text-gray-700 lg:text-lg">
            Something went wrong. It looks that your requested resource could
            not be found. It looks like the link is broken or the page is
            removed.
          </p>
          {/* <Button onClick={() => router.back()}>Go Back</Button> */}
        </div>
        <div className="ml-10 w-[90%] self-end md:w-[50%] md:self-center">
          <img src={pageNotFoundImage} alt="page not found" />
        </div>
      </div>
    </MainLayout>
  );
}

export default PageNotFound;
