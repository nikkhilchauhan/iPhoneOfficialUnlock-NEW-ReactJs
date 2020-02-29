import React, { Fragment } from 'react';

const UnlockStatusPage = () => {
  return (
    <Fragment>
      <div>
        <div className='container box-pd-tp'>
          <div className='row text-center d-flex justify-content-center'>
            <div className='col-6'>
              <h1 className='mb-3'>Track your unlock status</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat, cum.
              </p>
              <div className='col-12'>
                <div class='form-group'>
                  <input
                    type='text'
                    class='form-control'
                    data-val-required='Please enter your IMEI number'
                    id='imei'
                    name='IMEI'
                    placeholder='Enter IMEI Number'
                    value=''
                  />
                  <span
                    className='field-validation-valid'
                    data-valmsg-for='IMEI'
                    data-valmsg-replace='true'
                  ></span>
                  <a href='/' className='btn btn-default btn-lg mt-3'>
                    Track Status
                  </a>
                  <p className='text-grey' style={{ marginTop: '10px' }}>
                    <small>
                      Note: Please enter the IMEI number used at the time of
                      purchase or use the link in the confirmation email.
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default UnlockStatusPage;
