import { BsChevronRight } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import NavElement from "./NavElement";
import { useState, useEffect } from "react";
import { navElements } from "../../../constants/navElement";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState<boolean>(true);

    const sidebarHandler = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (window.innerWidth < 550) setIsOpen(false);
    }, [window.innerWidth]);

    return (
        <div
            className={`bg-slate-100 min-h-screen  relative py-4 transition-all shadow-md  ${
                isOpen ? "w-80 px-4" : "w-16 px-1"
            }`}
        >
            {/*============= LOGO & CHEVRON ICON ================ */}
            <div className="flex items-center justify-between mb-12">
                <h3 className="w-full flex items-center justify-center gap-4 text-xl font-bold">
                    <FaShippingFast className="text-main w-8 h-8" />
                    {isOpen && "Shippium"}
                </h3>
                <BsChevronRight
                    onClick={sidebarHandler}
                    className={`w-6 h-6 p-1 bg-dark text-white rounded-full flex items-center justify-center  hover:cursor-pointer shadow-md ${
                        isOpen ? "" : "rotate-180 absolute -right-3"
                    }`}
                />
            </div>

            {/*============= NAV ELEMENTS ================ */}
            {navElements.map((navElement, index) => (
                <NavElement
                    key={index}
                    isOpen={isOpen}
                    name={navElement.name}
                    route={navElement.route}
                    icon={navElement.icon}
                />
            ))}
        </div>
    );
}
