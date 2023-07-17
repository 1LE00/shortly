import { forwardRef } from "react";

const Link = forwardRef(({ href, name, className, target, rel }, ref) => {
    return (
        <a href={href} className={className} referrerPolicy="no-referrer" target={target} rel={rel} ref={ref}>{name}</a>
    )
});

export default Link