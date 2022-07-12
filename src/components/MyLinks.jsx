import { useMatch, useResolvedPath } from "react-router-dom";


export function MyLinks({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, hash: resolved.hash });


    return (
        <div>
            <a
                className={`active ${match?.pattern?.hash === window.location.hash ? "yes" : "no"}`}
                href={to}
                rel="noopener noreferrer"
                referrerPolicy="no-referrer"
                {...props}

            >
                {children}
            </a>
        </div>
    );
}