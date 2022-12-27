import react from "react";
const Model=({show,item,onClose})=>{
    if(!show){
        return null;
    }
    let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail; 
    return(
        <>
        <div className="overlay">
            <div className="overlay-inner">
                <button className="close" onClick={onClose}>close</button>
                <div className="inner-box">
                    <div className="info">
                        <img src={thumbnail}></img>
                        <h1>{item.volumeInfo.title}</h1>
                        <h3>{item.volumeInfo.authors}</h3>
                        <h4>pageCount:{item.volumeInfo.pageCount}</h4>
                        <h4>Rating:{item.volumeInfo.averageRating}</h4>
                        <a href={item.volumeInfo.infoLink}>Info:Click</a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Model;