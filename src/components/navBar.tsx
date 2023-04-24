import { Link } from "react-scroll";
import clsx from "clsx";

const NavBar: React.FC<{ className: string }> = ({ className }) => {
  return (
    <nav className={clsx([className])}>
      <ul className={clsx(["list-none", "flex flex-col justify-start gap-4"])}>
        <li className="cursor-pointer self-end">
          <Link activeClass="active" smooth spy to="overview">
            本书概况
          </Link>
        </li>
        <li className="cursor-pointer self-end">
          <Link activeClass="active" smooth spy to="author-translator">
            作者译者介绍
          </Link>
        </li>
        <li className="cursor-pointer self-end">
          <Link activeClass="active" smooth spy to="chapter-overview">
            章节梗概
          </Link>
        </li>
        <li className="cursor-pointer self-end">
          <Link activeClass="active" smooth spy to="recommendation">
            推荐语
          </Link>
        </li>
        <li className="cursor-pointer self-end">
          <Link activeClass="active" smooth spy to="origin-info">
            原著信息
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
