import { Link, useMatch, useResolvedPath } from "react-router-dom";


export function MyLinks({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                className={`active ${match ? "yes" : "no"}`}
                datatype="active"
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
}