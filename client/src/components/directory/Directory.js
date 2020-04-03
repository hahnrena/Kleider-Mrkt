import React from 'react';
import { connect } from 'react-redux';

import { selectDirectorySections } from '../../redux/directory/directorySelectors';
import { createStructuredSelector } from 'reselect';

import MenuItem from '../menu-item/menuItem'
import './directory.modules.scss';


const Directory = ({ sections }) => (
  <div className='directory-menu'>
      {sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
      ))}
  </div>
)

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});
    

export default connect(mapStateToProps)(Directory);

// render() {
//   return(
//       <div className='directory-menu'>
//           {this.state.sections.map(({ title, imageUrl, id, size, linkUrl }) => (
//               <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl}/>
//           ))}
//       </div>
//   )
// }
// }