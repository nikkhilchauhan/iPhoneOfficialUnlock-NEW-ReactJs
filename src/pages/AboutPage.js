import React, { Fragment } from 'react';

const AboutPage = () => {
  return (
    <Fragment>
      <div className='container box-pd-tp'>
        <div className='row d-flex justify-content-center'>
          <div className='col-10'>
            <h1>About Us</h1>
            <p>
              We are an internet-based company founded in XXXX. We are
              specialised in IMEI based unlocking of iPhones (Anywhere in the
              World) from the network they are locked with. We have been doing
              this from past several years. We permanently{' '}
              <a href='/iphone-unlock' className='text-apple'>
                Unlock your iPhone
              </a>{' '}
              by whitelisting it from Apple’s Database without jailbreaking.
            </p>
            <p>
              Apart from unlocking iPhones we also provide iCloud unlock
              service. This is useful when your Apple device’s iCloud activation
              lock is activated and you can’t remember your iCloud’s ID and
              password. On our website you can check your network provider if
              you don’t know. Besides this we also have shopping page where we
              sell one of the high quality items that you may be interested in.
            </p>
            <h3>Our Ideology</h3>
            <ul>
              <li>
                We will provide 100% legit and legal service to our customers.
              </li>
              <li>
                We will help resolve any problems faced by our customers with
                24x7 support helpline number.
              </li>
              <li>
                Full commitment in providing the best quality service in minimal
                time.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutPage;
