export const ageUp = () => {
    return {type:'Age_Up'};
}

export const ageUpAsync = (dispach) => {
    return  dispach => {
        setTimeout(()=>{
            dispach(ageUp());
        }, 5000)
    }
}

export const ageDown = () => {
    return {type:'Age_Down'};
}