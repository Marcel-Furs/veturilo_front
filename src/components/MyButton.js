function MyButton({children, onClick, width=100}) {
    return (
        <button style={{width: width}} className="my-button" onClick={onClick}>{children}</button>
    )
}

export default MyButton
