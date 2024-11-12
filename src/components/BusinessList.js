import './BusinessList.css';
import Business from './Business.js';

const BusinessList = ({ data }) => {

  return (
    <div className='container'>

      <div className='business-list'>
        {
          data.map((business) => (
            < Business business={business} key={business.id} />
          ))
        }
      </div>
    </div>
  )
}

export default BusinessList;
