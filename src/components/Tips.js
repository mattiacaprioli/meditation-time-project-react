import React, { useState } from 'react';
import data from '../data/tipsData';
import SingleTip from './SingleTip';

function Tips() {
  const tips = useState(data)[0];

  return (
    <main className='main-container'>
      <div className='container-tips'>
        <h5 className='title'>More Tips:</h5>
        <section className='info'>
          {
            tips.map((tip) =>{
              return <SingleTip key={tip.id} {...tip} />
            })
          }
        </section>
      </div>
    </main>
  );
}

export default Tips;