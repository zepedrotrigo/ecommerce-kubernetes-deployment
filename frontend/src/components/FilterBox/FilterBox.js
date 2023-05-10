
import { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import styles from './styles.module.css'

let tokenParse = []

const FilterBox = ({applyFilter})=>{

    const [price,setPrice] = useState({
        minprice : '',
        maxprice : ''
    })
    
    const { minprice, maxprice } = price;
    const [rating,setRating] = useState('');
    const [condition,setCondition] = useState('');

    const handlePrice = e=>setPrice({...price,[e.target.name]:e.target.value});

    const handleRating = (rate)=>{
        setRating(rate);
    }

    const handleCondition = (cond)=>setCondition(cond);

    const resetFilter = ()=>{
        setPrice({
            minprice:'',
            maxprice:''
        })
        setRating('');
        setCondition('');
        applyFilter('','','','');
    }

    return (
        <div className={styles.container}>
            <h3>Price</h3>
            <input type="number" name="minprice" placeholder='Min Price' onChange={e=>handlePrice(e)} value={minprice} />
            <input type="number" name="maxprice" placeholder='Max Price' onChange={e=>handlePrice(e)} value={maxprice} />
            <h3>Avg. Customer Review</h3>
            <div onClick={()=>handleRating(5)} className={rating === 5?styles.ratingStarSelected:styles.ratingStar}>
                <Rating readonly={true} ratingValue={5} size={20} /><span> 5</span>
            </div>
            <div onClick={()=>handleRating(4)} className={rating === 4?styles.ratingStarSelected:styles.ratingStar}>
                <Rating readonly={true} ratingValue={4} size={20} /><span> 4</span>
            </div>
            <div onClick={()=>handleRating(3)} className={rating === 3?styles.ratingStarSelected:styles.ratingStar}>
                <Rating readonly={true} ratingValue={3} size={20} /><span> 3</span>
            </div>
            <div onClick={()=>handleRating(2)} className={rating === 2?styles.ratingStarSelected:styles.ratingStar}>
                <Rating readonly={true} ratingValue={2} size={20} /><span> 2</span>
            </div>
            <div onClick={()=>handleRating(1)} className={rating === 1?styles.ratingStarSelected:styles.ratingStar}>
                <Rating readonly={true} ratingValue={1} size={20} /><span >1</span>
            </div>
            <h3>Condition</h3>
            <div onClick={()=>handleCondition('Excellent')} style={{fontWeight:condition == 'Excellent'?'bold':400}}>
            Excellent 
            </div>
            <div onClick={()=>handleCondition('Good')} style={{fontWeight:condition == 'Good'?'bold':400}}>
               Good 
            </div>
            <div onClick={()=>handleCondition('Used')} style={{fontWeight:condition == 'Used'?'bold':400}}>
               Used 
            </div>
            <button onClick={()=>applyFilter(minprice,maxprice,rating,condition)}>Apply Filter</button>
            <button onClick={resetFilter}>Reset Filter</button>
        </div>
    )
}

export default FilterBox;