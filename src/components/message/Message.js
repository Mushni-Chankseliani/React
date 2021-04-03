import { Fragment } from "react";

const Message = ({ title = 'Default title', description = 'Default description' }) => {

    return (
        <Fragment>
            <h1>{title}</h1>
            <h3>{description}</h3>
        </Fragment>
    )
}

export default Message;