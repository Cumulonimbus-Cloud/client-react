function ContentElem({ title, content }) {
    return (
        <div className="modal-contents">
            <b>💡 {title}</b>
            <br/>&nbsp;{content}<br/><br/>
        </div>
    )
}

export default ContentElem;