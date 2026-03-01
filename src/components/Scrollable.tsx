import { LuMouse } from "react-icons/lu";

interface Props {
    children?: React.ReactNode;
    className?: string;
}
const Scrollable: React.FC<Props> = ({ children, className }) => {
    return (
        <section className={className}>
            <div className="container min-h-screen">
                <button>
                    <LuMouse />
                    <span></span>
                </button>
                {children}
            </div>
        </section>
    );
};

export default Scrollable;
