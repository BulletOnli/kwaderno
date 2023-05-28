import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarTab = ({ name, path, icon }) => {
    const pathname = usePathname();

    return (
        <Link href={path}>
            <div
                className={`${
                    pathname === path ? "activeTab" : ""
                } w-full flex justify-start pl-7 items-center gap-2 bg-[#343541] text-center text-[1.2rem] p-2 my-1 rounded-md`}
            >
                {icon}
                {name}
            </div>
        </Link>
    );
};

export default SidebarTab;
