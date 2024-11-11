import './BusinessList.css';
import Business from './Business.js';

// hardcoded data
import { List } from '../api/data.js';
const BusinessList = () => {

  return (
    <div className='container'>

      <div className='business-list'>
        {
          List.map((business) => (
            < Business business={business} key={business.id} />
          ))
        }
      </div>
    </div>
  )
}

export default BusinessList;
