import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'

const Cup = ({ percentage, setPercentage, remained, setRemained }) => {
  const [isFull, setIsFull] = useState(false)

  const handleCupClick = () => {
    setIsFull(!isFull)

    setPercentage(() => (isFull ? percentage - 12.5 : percentage + 12.5))

    console.log('percentage', percentage)

    setRemained(() => (isFull ? remained + 1.875 : remained - 1.875))
  }

  return (
    <div
      onClick={handleCupClick}
      className={`${isFull ? 'cup cup-small full' : 'cup cup-small'}`}
    >
      250 ml
    </div>
  )
}

Cup.propTypes = {
  percentage: PropTypes.number.isRequired,
  remained: PropTypes.number.isRequired,
  setPercentage: PropTypes.func.isRequired,
  setRemained: PropTypes.func.isRequired,
}

const DrinkWater = () => {
  const [percentage, setPercentage] = useState(0)
  const [remained, setRemained] = useState(15)

  return (
    <Fragment>
      <h1>Drink Water</h1>
      <h3>Goal: 2 Liters</h3>

      <div className='cup'>
        <div
          className='remained'
          style={{
            visibility: `${remained === 0 ? 'hidden' : 'visible'}`,
            height: `${remained === 0 && 0}`,
          }}
        >
          <span id='liters'>{remained}L</span>
          <small>Remained</small>
        </div>

        {percentage !== 0 && (
          <div
            className='percentage'
            style={{ height: `${3.3 * percentage}px` }}
          >
            {percentage}%
          </div>
        )}
      </div>

      <p className='text'>
        Select how many glasses of water that you have drank
      </p>

      <div className='cups'>
        <Cup
          percentage={percentage}
          setPercentage={setPercentage}
          remained={remained}
          setRemained={setRemained}
        />
        <Cup
          percentage={percentage}
          setPercentage={setPercentage}
          remained={remained}
          setRemained={setRemained}
        />
        <Cup
          percentage={percentage}
          setPercentage={setPercentage}
          remained={remained}
          setRemained={setRemained}
        />
        <Cup
          percentage={percentage}
          setPercentage={setPercentage}
          remained={remained}
          setRemained={setRemained}
        />
        <Cup
          percentage={percentage}
          setPercentage={setPercentage}
          remained={remained}
          setRemained={setRemained}
        />
        <Cup
          percentage={percentage}
          setPercentage={setPercentage}
          remained={remained}
          setRemained={setRemained}
        />
        <Cup
          percentage={percentage}
          setPercentage={setPercentage}
          remained={remained}
          setRemained={setRemained}
        />
        <Cup
          percentage={percentage}
          setPercentage={setPercentage}
          remained={remained}
          setRemained={setRemained}
        />
      </div>
    </Fragment>
  )
}

export default DrinkWater
