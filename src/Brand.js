import React from 'react';
import '../src/assets/css/style.css';
import Brand1 from '../src/assets/images/brand-1.png';
import Brand2 from '../src/assets/images/brand-2.png';
import Brand3 from '../src/assets/images/brand-3.png';
import Brand4 from '../src/assets/images/brand-4.png';
import Brand5 from '../src/assets/images/brand-5.png';
import Brand6 from '../src/assets/images/brand-6.png';

function Brand() {
  return (
    <section class="section brand" aria-label="brand">
        <div class="container">

          <ul class="has-scrollbar">

            <li class="brand-item">
              <img src={Brand1} width="90" height="90" loading="lazy" alt="brand logo"/>
            </li>

            <li class="brand-item">
              <img src={Brand2} width="90" height="90" loading="lazy" alt="brand logo"/>
            </li>

            <li class="brand-item">
              <img src={Brand3} width="90" height="90" loading="lazy" alt="brand logo"/>
            </li>

            <li class="brand-item">
              <img src={Brand4} width="90" height="90" loading="lazy" alt="brand logo"/>
            </li>

            <li class="brand-item">
              <img src={Brand5} width="90" height="90" loading="lazy" alt="brand logo"/>
            </li>

            <li class="brand-item">
              <img src={Brand6} width="90" height="90" loading="lazy" alt="brand logo"/>
            </li>

          </ul>

        </div>
      </section>
  )
}

export default Brand