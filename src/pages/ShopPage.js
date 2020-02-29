import React, { Fragment } from 'react';
import chargingCase from '../img/chargingCase.jpg';
import appleEarpods from '../img/appleEarpods.jpg';
import iphoneLense from '../img/iPhoneLense.jpg';

export default function ShopPage() {
  return (
    <Fragment>
      <div>
        <div className='container box-pd-all'>
          <div className='row text-center d-flex justify-content-center mb-3'>
            <h1>Shop with us</h1>
          </div>
          <div class='row text-center'>
            <div class='col-md-4 mb-3'>
              <div class='product-card'>
                <img
                  src={chargingCase}
                  alt='Denim Jeans'
                  style={{ width: '100%' }}
                />
                <h3>Wireless Charging Case</h3>
                <p class='price'>$114.95</p>
                <p>
                  Wireless Charging - Protective Battery Pack Case for Apple
                  iPhone Xs Max.
                </p>
                <p>
                  <button>Buy now</button>
                </p>
              </div>
            </div>
            <div class='col-md-4 mb-3'>
              <div class='product-card'>
                <img
                  src={appleEarpods}
                  alt='Denim Jeans'
                  style={{ width: '100%' }}
                />
                <h3>Apple 3.5mm EarPods</h3>
                <p class='price'>$34.99</p>
                <p>
                  EarPods is defined by the geometry of the ear Which makes them
                  more comfortable for more people than any other.
                </p>
                <p>
                  <button>Buy now</button>
                </p>
              </div>
            </div>
            <div class='col-md-4 mb-3'>
              <div class='product-card'>
                <img
                  src={iphoneLense}
                  alt='Denim Jeans'
                  style={{ width: '100%' }}
                />
                <h3>Wide Lens for iPhone</h3>
                <p class='price'>$35.97</p>
                <p>
                  This wide lens captures 2x more picture with a multi-element
                  glass design that provides edge to edge clarity..
                </p>
                <p>
                  <button>Buy now</button>
                </p>
              </div>
            </div>
          </div>
          <div class='row text-center'>
            <div class='col-md-4 mb-3'>
              <div class='product-card'>
                <img
                  src={chargingCase}
                  alt='Denim Jeans'
                  style={{ width: '100%' }}
                />
                <h3>Wireless Charging Case</h3>
                <p class='price'>$114.95</p>
                <p>
                  Wireless Charging - Protective Battery Pack Case for Apple
                  iPhone Xs Max.
                </p>
                <p>
                  <button>Buy now</button>
                </p>
              </div>
            </div>
            <div class='col-md-4 mb-3'>
              <div class='product-card'>
                <img
                  src={appleEarpods}
                  alt='Denim Jeans'
                  style={{ width: '100%' }}
                />
                <h3>Apple 3.5mm EarPods</h3>
                <p class='price'>$34.99</p>
                <p>
                  EarPods is defined by the geometry of the ear Which makes them
                  more comfortable for more people than any other.
                </p>
                <p>
                  <button>Buy now</button>
                </p>
              </div>
            </div>
            <div class='col-md-4 mb-3'>
              <div class='product-card'>
                <img
                  src={iphoneLense}
                  alt='Denim Jeans'
                  style={{ width: '100%' }}
                />
                <h3>Wide Lens for iPhone</h3>
                <p class='price'>$35.97</p>
                <p>
                  This wide lens captures 2x more picture with a multi-element
                  glass design that provides edge to edge clarity..
                </p>
                <p>
                  <button>Buy now</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
