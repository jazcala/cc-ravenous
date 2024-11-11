import './Business.css';

const Business = ({ business }) => {
  return (
    < div className="business" key={`business${business.id}`
    }>
      <img src={business.imageSrc} alt={business.name} />
      <h2>{business.name}</h2>
      <div className='business-description'>
        <div className='col one'>
          <p>{business.address}</p>
          <p>{business.city}</p>

          <p>{business.state} {business.zipCode}</p>
        </div>
        <div className='col two'>
          <p className='orange upper'>{business.category}</p>
          <p className='orange'>{`${business.rating} stars`}</p>
          <p>{`${business.reviewCount} reviews`}</p>
        </div>
      </div >
    </div >

  )
}

export default Business;
