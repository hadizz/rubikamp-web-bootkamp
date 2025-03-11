import { useState } from "react";
import styles from "./Slider.module.css";

const SliderDot = ({text, onClick, key, isSelected}) => {
    return (
        <div 
            key={key} 
            onClick={onClick}
            className={styles.sliderDot}
            style={{backgroundColor: isSelected ? "green" : "gray"}}
            >
            {text}
        </div>
    )
}

const Slider = ({images}) => {
    const [selected, setSelected] = useState(0)
    const [open, setOpen] = useState(false)

    const handleOnBefore = () => {
        if (selected > 0) {
            setSelected(selected-1)
        }
    }

    const handleOnAfter = () => {
        if (selected < images.length - 1) {
            setSelected(selected+1)
        }
    }

    return (
        <div className={styles.root}>

            {
                open && (
                    <div className={styles.gallery}>
                        <div onClick={() => setOpen(false)}>X</div>

                        <div>{images[selected]}</div>

                        <div className={styles.galleryFooter}>
                            {images.map((image, index) => (
                                <div key={index} style={{color: index === selected ? "green" : "white"}}>{image}</div>
                            ))}
                        </div>
                    </div>
                )
            }

                
            <div className={styles.selectedImage} onClick={() => setOpen(true)}>
                {images[selected]}
            </div>
           
            <div className={styles.sliderDots}>
                <SliderDot onClick={handleOnBefore} text={"<"} />
                <div className={styles.sliderDotsContainer}>
                    {images.map((image, index) => (
                        <SliderDot 
                            key={index}
                            onClick={() => setSelected(index)}
                            text={index+ 1} 
                            isSelected={selected === index} 
                        />
                    ))}
                </div>
                <SliderDot onClick={handleOnAfter} text={">"}  />
            </div>

        </div>
    )
}

export default Slider;