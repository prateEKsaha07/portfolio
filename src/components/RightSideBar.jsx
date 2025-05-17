import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function RightSideBar() {
    return (
    <>
        <div className="fixed right-0 h-screen w-24 flex flex-col items-center justify-center space-y-6">
      {/* Email link (vertical) */}
      <a
        href="mailto:your@email.com"
        className="rotate-90 mb-32 text-xs text-slate hover:text-teal transition"
      >
        kokilaben@email.com
      </a>

      {/* Social icons (vertical) */}
      <div className="flex flex-col space-y-4">
        <a href="#">
          <FaGithub className="text-slate hover:text-teal h-5 w-5" />
        </a>
        <a href="#">
          <FaLinkedin className="text-slate hover:text-teal h-5 w-5" />
        </a>
        <a href="#">
          <FaTwitter className="text-slate hover:text-teal h-5 w-5" />
        </a>
      </div>
    </div>
    </>
    )
};
