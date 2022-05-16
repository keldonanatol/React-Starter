import "./Quote.css"

function Quote({ quote: { text, author} }) {
    return (
        <div className="card">
            <div className="card-header">Quote of the Day</div>
            <div className="card-body">
                <blockquote className="blockquote">
                    <p>{text}</p>
                    <footer classNmae="blockquote-footer">{author}</footer>
                </blockquote>
            </div>
        </div>
    );
};

export default Quote;






