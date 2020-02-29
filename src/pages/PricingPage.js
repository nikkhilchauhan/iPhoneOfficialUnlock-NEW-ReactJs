import React, { Fragment } from 'react';

const PricingPage = () => {
  return (
    <Fragment>
      <div>
        <div className='container'>
          <section className='pricelist'>
            <div className='container pt-3'>
              <div className='row'>
                <div className='col-12'>
                  <h2 className='text-center text-dark pb-5'>Pricelist</h2>
                </div>
                <div className='col-md-6 text-dark mb-4'>
                  <div className='border rounded px-3'>
                    <div
                      className='row border-bottom py-3 px-3'
                      style={{ backgroundColor: '#888888' }}
                    >
                      <div className='col px-5 text-white'>
                        <b>
                          Device
                          <br />
                          Name
                        </b>
                      </div>
                      <div className='col text-center text-white'>
                        <b>
                          Price
                          <br />
                          ($)
                        </b>
                      </div>
                    </div>
                    <div className='row border-bottom py-3 px-3'>
                      <div className='col px-5'>iPhone 4</div>
                      <div className='col text-center priceBtn'>10$</div>
                    </div>
                    <div className='row border-bottom py-3 bg-light px-3'>
                      <div className='col px-5'>iPhone 4s</div>
                      <div className='col text-center priceBtn'>15$</div>
                    </div>
                    <div className='row border-bottom py-3 px-3'>
                      <div className='col px-5'>iPhone 5</div>
                      <div className='col text-center priceBtn'>40$</div>
                    </div>
                    <div className='row border-bottom py-3 bg-light px-3'>
                      <div className='col px-5'>iPhone 5S</div>
                      <div className='col text-center priceBtn'>60$</div>
                    </div>
                    <div className='row border-bottom py-3 px-3'>
                      <div className='col px-5'>iPhone 5C</div>
                      <div className='col text-center priceBtn'>60$</div>
                    </div>
                    <div className='row border-bottom py-3 bg-light px-3'>
                      <div className='col px-5'>iPhone 6</div>
                      <div className='col text-center priceBtn'>70$</div>
                    </div>
                    <div className='row border-bottom py-3 px-3'>
                      <div className='col px-5'>iPhone 6S</div>
                      <div className='col text-center priceBtn'>75$</div>
                    </div>
                  </div>
                </div>
                <div className='col-md-6 text-dark mb-4'>
                  <div className='border rounded px-3'>
                    <div
                      className='row border-bottom py-3 px-3'
                      style={{ backgroundColor: '#888888' }}
                    >
                      <div className='col px-5 text-white'>
                        <b>
                          Device
                          <br />
                          Name
                        </b>
                      </div>
                      <div className='col text-center text-white'>
                        <b>
                          Price
                          <br />
                          ($)
                        </b>
                      </div>
                    </div>
                    <div className='row border-bottom py-3 px-3'>
                      <div className='col px-5'>iPhone SE</div>
                      <div className='col text-center priceBtn'>60$</div>
                    </div>
                    <div className='row border-bottom py-3 bg-light px-3'>
                      <div className='col px-5'>iPhone 7</div>
                      <div className='col text-center priceBtn'>80$</div>
                    </div>
                    <div className='row border-bottom py-3 px-3'>
                      <div className='col px-5'>iPhone 7 Plus</div>
                      <div className='col text-center priceBtn'>80$</div>
                    </div>
                    <div className='row border-bottom py-3 bg-light px-3'>
                      <div className='col px-5'>iPhone 8</div>
                      <div className='col text-center priceBtn'>90$</div>
                    </div>
                    <div className='row border-bottom py-3 px-3'>
                      <div className='col px-5'>iPhone 8 Plus</div>
                      <div className='col text-center priceBtn'>90$</div>
                    </div>
                    <div className='row border-bottom py-3 bg-light px-3'>
                      <div className='col px-5'>iPhone X</div>
                      <div className='col text-center priceBtn'>100$</div>
                    </div>
                    <div className='row border-bottom py-3 px-3'>
                      <div className='col px-5'>iPad</div>
                      <div className='col text-center priceBtn'>75$</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Fragment>
  );
};

export default PricingPage;
