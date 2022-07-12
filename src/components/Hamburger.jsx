
function Hamburger(props) {
    return (
        <div className={`three col ${props.className}`} onClick={props.onClick}>
            <div className={`hamburger ${props.isActive && 'is-active'}`} id="hamburger-6">
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </div>
        </div>
    )
}

export default Hamburger