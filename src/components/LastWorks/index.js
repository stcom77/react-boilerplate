import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import LastWorksItem from 'components/LastWorksItem';
import p1 from 'assets/images/portraits/t1.jpg';
import p1742 from 'assets/images/portraits/t1742.jpg';
import a5 from 'assets/images/arts/m5.jpg';
import a13 from 'assets/images/arts/m13.jpg';
import './styles.styl';


class LastWorks extends PureComponent {
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      ...props
    } = this.props;
    const {} = this.state;

    return (
      <section className="section last-works">
        <div className="container">
          <div className="level last-works__title is-mobile">
            <div className="level-item">
              <h2 className="title is-size-3">LAST WORKS</h2>
            </div>
          </div>
          <div className="last-works__body">
            <div className="columns">
              <div className="column is-6 link_with_description">
                <LastWorksItem
                  src={p1}>
                  <p className="title">
                    Kira portrait
                  </p>
                  <p>
                    2016 year
                  </p>
                  <p>
                    50x40 cm
                  </p>
                  <p>
                    Canvas, acrylic
                  </p>
                </LastWorksItem>
              </div>
              <div className="column is-6 link_with_description">
                <LastWorksItem
                  src={p1742}>
                  <p className="title">
                    Rafael portrait
                  </p>
                  <p>
                    2017 year
                  </p>
                  <p>
                    40x40 cm
                  </p>
                  <p>
                    Canvas, oil
                  </p>
                </LastWorksItem>
              </div>
            </div>
            <div className="columns">
              <div className="column is-6 link_with_description">
                <LastWorksItem
                  src={a5}>
                  <p className="title">
                    Poppies
                  </p>
                  <p>
                    2012 year
                  </p>
                  <p>
                    50x60 cm
                  </p>
                  <p>
                    Canvas, oil
                  </p>
                </LastWorksItem>
              </div>
              <div className="column is-6 link_with_description">
                <LastWorksItem
                  src={a13}>
                  <p className="title">
                    Old citadel
                  </p>
                  <p>
                    2011 year
                  </p>
                  <p>
                    40x50 cm
                  </p>
                  <p>
                    Canvas, oil
                  </p>
                </LastWorksItem>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default LastWorks;
