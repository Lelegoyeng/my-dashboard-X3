import { forwardRef } from "react";
import Link from "next/link";
import { HomeIcon, CreditCardIcon, ArrowTrendingUpIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

const SideBar = forwardRef(({ showNav }, ref) => {
  const router = useRouter();

  return (
    <div ref={ref} className="fixed w-56 h-full bg-white shadow-sm">
      <div className="flex justify-center mt-6 mb-14">
        <picture>
          <img
            className="w-32 h-auto"
            src="/ferox-transparent.png"
            alt="company logo"
          />
        </picture>
      </div>

      <div className="flex flex-col">
        <Link href="/">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${router.pathname == "/"
              ? "bg-orange-100 text-orange-500"
              : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
              }`}
          >
            <div className="mr-2">
              <HomeIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Home</p>
            </div>
          </div>
        </Link>
        <Link href="/history">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${router.pathname == "/history"
              ? "bg-orange-100 text-orange-500"
              : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
              }`}
          >
            <div className="mr-2">
              <ArrowTrendingUpIcon className="h-5 w-5" />
            </div>
            <div>
              <p>History</p>
            </div>
          </div>
        </Link>
        <Link href="/billing">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${router.pathname == "/billing"
              ? "bg-orange-100 text-orange-500"
              : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
              }`}
          >
            <div className="mr-2">
              <CreditCardIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Orders</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;
