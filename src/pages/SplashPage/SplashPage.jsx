import React from 'react';
import StyleSplashPage from './SplashStyle';
import Layout from "../../styles/Layout";

function SplashPage() {
  return (
      <Layout>
        <StyleSplashPage>
          <div className="lego red">
            <div className="left" />
            <div className="right" />
            <div className="container-top">
              <div className="top">
                <div className="dot d-n1" />
                <div className="dot d-n2" />
                <div className="dot d-n3" />
                <div className="dot d-n4" />
              </div>
            </div>
          </div>

          <div className="lego blue">
            <div className="left" />
            <div className="right" />
            <div className="container-top">
              <div className="top">
                <div className="dot d-n1" />
                <div className="dot d-n2" />
                <div className="dot d-n3" />
                <div className="dot d-n4" />
              </div>
            </div>
          </div>

          <div className="lego yellow">
            <div className="left" />
            <div className="right" />
            <div className="container-top">
              <div className="top">
                <div className="dot d-n1" />
                <div className="dot d-n2" />
                <div className="dot d-n3" />
                <div className="dot d-n4" />
              </div>
            </div>
          </div>
        </StyleSplashPage>
      </Layout>
  );
}

export default SplashPage;
