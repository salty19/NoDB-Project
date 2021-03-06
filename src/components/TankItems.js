import React from 'react'

const TankItems = (props) => {

    const {tankId} = props.data
console.log("props data", props.data.quantity)
    return (

        <div className="tank-item">
            <img src={props.data.image} width="75" height="55" />
            <div>
                <p>{props.data.name}</p>
                <p> Quantity {props.data.quantity}</p>

                <div className="tankPlantButton">
                    <button onClick={() => props.changeQuantity(tankId, 'down')} > - </button>
                    <button onClick={() => props.changeQuantity(tankId, 'up')}> + </button>
                </div>
            </div>
        </div>

    )
}

export default TankItems