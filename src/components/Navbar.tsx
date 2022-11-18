import { useRouter } from "next/router";
import { FC, useState } from "react";

type NavbarType = {
    error?: boolean;
};

const Navbar: FC<NavbarType> = ({ error }) => {
    const [show, setShow] = useState(false);

    const router = useRouter();
    let path = router.asPath;
    if (error) path = "/404";
    if (!(path == "/")) path;
    if (path == "/") path = "cosrnic.uk";

    path = path.replaceAll("/", "");

    const onChange = (e: any) => {
        if (e.keyCode == 13) {
            const newVal =
                router.asPath + "/" + e.target.value.replaceAll("#", "");
            router.push(newVal);
        }
    };

    return (
        <div
            className="bg-transparent text-main w-full h-12  items-center p-2 fixed"
            onClick={() => setShow(!show)}
        >
            <div className="font-mono text-xl text-main">
                <span className="cursor-pointer hover:underline text-2xl">
                    {"<"}
                    {path} /{">"}
                </span>
            </div>
            <div
                className={
                    show
                        ? `opacity-100 rounded-md w-48 ring-2 p-1 mt-1 ring-main/40 text-xl transition-all duration-1000 ease-in-out`
                        : "opacity-0 [display:_none]"
                }
            >
                <p
                    onClick={() => router.push("/")}
                    className="cursor-pointer hover:underline"
                >
                    {"<home />"}
                </p>
                <p
                    onClick={() => router.push("/about/")}
                    className="cursor-pointer hover:underline"
                >
                    {"<about />"}
                </p>
                <p
                    onClick={() => router.push("/projects/")}
                    className="cursor-pointer hover:underline"
                >
                    {"<projects />"}
                </p>
            </div>
        </div>
    );
};

export default Navbar;
