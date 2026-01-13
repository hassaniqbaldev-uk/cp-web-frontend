import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import ChevronDownIcon from "../icons/ChevronDownIcon";

const NavigationDropdown = ({ label, items = [] }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="nav-dropdown group inline-flex items-center gap-[6px] !border-0 !outline-0">
        <span>{label}</span>
        <i className="origin-center transition-transform duration-200 group-aria-expanded:rotate-180">
          <ChevronDownIcon width="10" height="6" />
        </i>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-[15rem] rounded-[8px] bg-white/20 backdrop-blur-[10px]">
        {items.map((item, index) => (
          <DropdownMenuItem key={index}>
            <Link
              href={item.href}
              className="flex w-full px-[1.6rem] py-[8px] text-[1.6rem] font-medium text-white transition-all duration-200 hover:bg-white/10"
            >
              {item.label}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavigationDropdown;
