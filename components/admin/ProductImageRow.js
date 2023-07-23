import {v4 as uuidv4} from "uuid";
import {useEffect} from "react";

function ProductImageRow({images, setImages}) {

    useEffect(() => {
        images.forEach(
            image => {
                image.id = image._id ?? image.id;
            }
        )
    }, [images])

    const addImage = () => {
        if (images.length < 10) {
            setImages([...images, { id: uuidv4() }]);
        }
    };

    const deleteImage = (id) => {
        if (images.length === 1) {
            return;
        }

        setImages(images.filter((image) => image.id !== id));
    };

    const handleImageChange = (event, id) => {
        const newImages = images.map((image) => {
            if (image.id === id) {
                return { ...image, file: event.target.files[0] };
            } else {
                return image;
            }
        });
        setImages(newImages);
    };

    const renderImages = () => {
        return images.map((image, index) => (
            <div key={image._id} className="col-2 card imageCard">
                <img src={image.file ? URL.createObjectURL(image.file) : `/images/products/${image.filename}`} className="imgCol" />
                <div className="card-body d-flex justify-content-evenly">
                    <label htmlFor={`image-${image.id}`} className="image-card-actions">
                        edit
                    </label>
                    <input
                        type="file"
                        id={`image-${image.id}`}
                        name={`image-${image.id}`}
                        accept="image/*"
                        hidden
                        onChange={(event) => handleImageChange(event, image.id)}
                    />
                    {index !== 0 && (
                        <span className="image-card-actions" onClick={() => deleteImage(image.id)}> delete </span>
                    )}
                    <span className="image-card-actions" onClick={() => addImage()}> add </span>
                </div>
            </div>
        ))
    }

    return(
        <div className="row imgRow">
            {renderImages()}
        </div>
    )
}

export default ProductImageRow;
