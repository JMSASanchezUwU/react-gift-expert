import { useState } from "react"
import AddCategory from "./componets/AddCategory"
import GiftGrid from "./componets/GiftGrid"

const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories])
    }

    return (
        <>

            <h1>Gift</h1>

            <AddCategory
                onNewCategory={ (value) => onAddCategory(value) }
            />

            {
                categories.map((category) => (
                    <GiftGrid
                     key={category} 
                     category={category} />
                ))
            }

        </>
    )
}

export default GiftExpertApp
