import { twJoin } from "tailwind-merge"

interface ContainerProps {
    children: React.ReactNode;
    classes?: string;
}

const Container = ({
    children,
    classes
}: ContainerProps) => {
    return (
        <div className={twJoin(`max-w-7xl mx-auto px-4`, classes)}>
            {children}
        </div>
    )
}
export default Container