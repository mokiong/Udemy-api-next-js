import classes from './comment-list.module.css';

function CommentList(props) {
    console.log(props);
    const { items } = props;

    return (
        <ul className={classes.comments}>
            {items.map((item) => (
                <li key={item.id}>
                    <p>{item.text}</p>
                    <div>
                        By <address>{item.name}</address>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default CommentList;
