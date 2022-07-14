import React, {useState,useContext, useEffect} from 'react'
import { getContrastYIQ } from '../helpers'
import MainContext from './MainContext'
import ClipboardButton from 'react-clipboard.js'
import Copied from './Copied'

const Brand = ({ brand }) => {

    const {selectedBrands, setSelectedBrands, setCopied} = useContext(MainContext)

    const toggleSelected = () => {
        if(selectedBrands.includes(brand.slug)) {
            setSelectedBrands(selectedBrands.filter(slug => slug !== brand.slug))
        } else {
            setSelectedBrands([...selectedBrands, brand.slug])
        }
        
    }
    const setColor = (color) => {
        setCopied(color)
    }

    return (
        <div className={`brand ${selectedBrands.includes(brand.slug) ? 'selected' : ''}`} key={brand.index}>
            <h5 onClick={toggleSelected}>{brand.title}</h5>
            <div className="brand-colors">
                {brand.colors.map((color, i) => {
                    return (
                        <div key={i}>
                            <ClipboardButton data-clipboard-text={`#${color}`} onSuccess={()=> setColor(color)} component="span" style={{'--bgColor': `#${color}`,'--textColor': `${getContrastYIQ(color)}`}}>
                            #{color}
                        </ClipboardButton>
                        </div>
                        
                    )
                })}
            </div>

        </div>
    )
}

export default Brand