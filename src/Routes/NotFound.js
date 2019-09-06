import React from 'react';
import Introduction from '../Components/Introduction';

export default class NotFound extends React.Component {
  render() {
    return (
      <main className='page fade'>
        <Introduction title='Page Not Found.' subtitle="Sorry, but the page you are looking for does not exist." />
      </main>
    )
  }
}
