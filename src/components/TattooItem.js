import './TattooItem.css'

function TattooItem(props) {
    //const {title, thumbnaiUrl} = props;
    const {tattoo, onTattooClick} = props;
    return (
        <div className="tattoo-item">
            <img src={tattoo.thumbnaiUrl} onClick={()=> {onTattooClick(tattoo)}}/>
            <h4>{tattoo.title}</h4>
        </div>
    )
}

export default TattooItem;