import Typography from "../components/Typography";
import Button from "../components/Button";
import {
    LuCode,
    LuComputer,
    LuGithub,
    LuHouse,
    LuInstagram,
    LuRadio,
    LuUser,
} from "react-icons/lu";
import Htmltext from "../components/Htmltext";
import Nav from "../components/Nav";
import type { Social, NavItem, SideBarItem } from "../types";
import { FaDiscord } from "react-icons/fa";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import { Element } from "react-scroll";
import { Link } from "react-router-dom";
const navItems: NavItem[] = [
    {
        label: "home",
        to: "/",
    },
    {
        label: "blogs",
        to: "/blogs",
    },
];
const socials: Social[] = [
    {
        label: "instagram",
        icon: LuInstagram,
        url: "",
    },
    {
        label: "discord",
        icon: FaDiscord,
        url: "",
    },
    {
        label: "github",
        icon: LuGithub,
        url: "",
    },
];
const sideBarItems: SideBarItem[] = [
    {
        label: "home",
        icon: LuHouse,
    },
    {
        label: "about me",
        icon: LuUser,
    },
    {
        label: "skills",
        icon: LuCode,
    },
    {
        label: "works",
        icon: LuComputer,
    },
];

const Ui = () => {
    return (
        <main className="bg-dark-300 min-h-screen">
            <div className="container">
                <Link to="/">
                    {" "}
                    <Button variant="primary">
                        <Element name="home">go home</Element>
                    </Button>
                </Link>

                <section>
                    <fieldset className="flex flex-col items-start text-white border border-white p-2">
                        <legend>Typography</legend>
                        <Typography variant="bgText-U">hello world</Typography>
                        <Typography variant="h1-U">hello world</Typography>
                        <Typography variant="h2-U">hello world</Typography>
                        <Typography variant="para-U">hello world</Typography>
                        <Typography variant="button-U">hello world</Typography>
                        <Typography variant="label-U-L">hello world</Typography>
                        <Typography variant="label-U-M">hello world</Typography>
                        <Typography variant="number-M">hello world</Typography>
                        <Typography variant="h2-M">hello world</Typography>
                        <Typography variant="code-M">hello world</Typography>
                        <Typography variant="para-M">hello world</Typography>
                        <Htmltext element="h1">
                            <Typography variant="para-M">
                                hello world
                            </Typography>
                        </Htmltext>
                    </fieldset>
                </section>
                <section>
                    <fieldset className="flex flex-col items-start gap-2 text-white border border-white p-2">
                        <legend>Buttons</legend>
                        <Button variant="primary">click me</Button>
                        <Button variant="white">click me</Button>
                        <Button variant="stroke">click me</Button>
                        <Button
                            variant="stroke"
                            icon={<LuRadio className="text-white" />}
                        >
                            click me
                        </Button>
                    </fieldset>
                </section>

                <section>
                    <fieldset className="flex flex-col items-start gap-2 text-white border border-white p-2">
                        <legend>NavBars</legend>
                        <Nav
                            logo="privet"
                            navItems={navItems}
                            socials={socials}
                            onSearch={() => {
                                alert("search");
                            }}
                        />
                    </fieldset>
                </section>
                <section>
                    <fieldset className="flex flex-col items-start gap-2 text-white border border-white p-2">
                        <legend>Footer</legend>
                        <Footer
                            socials={socials}
                            license="© 2025 all rights reserved"
                            author="Andrey"
                        />
                    </fieldset>
                </section>
                <section>
                    <fieldset className="flex flex-col items-start gap-2 text-white border border-white p-2">
                        <legend>Side bar</legend>
                        <SideBar sideBarItems={sideBarItems} />
                    </fieldset>
                </section>
            </div>
        </main>
    );
};

export default Ui;
