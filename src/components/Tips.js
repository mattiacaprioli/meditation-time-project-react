import React, { useState } from 'react';
import data from '../data/tipsData';
import SingleTip from './SingleTip';

function Tips() {
  const [tips,setTips] = useState(data);

  const updateTips = () => {
    // Aggiorna lo stato di tips
    setTips([...tips, { id: 4, title: 'New tip' }]);
  };

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