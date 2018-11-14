import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import Select from 'react-select';
import style from './PostModule.css';

class PostModule extends Component {
  constructor () {
    super();
    this.state = {
      from: '',
      to: '',
      date: moment(),
      time: '',
      seats: '',
      price: '',
      detail: '',
      destination: [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ],
    };

    this.handleFrom = this.handleFrom.bind(this);
    this.handleTo = this.handleTo.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onClick () {
    const { post } = this.props;
    const {
      from,
      to,
      date,
      time,
      seats,
      price,
      detail,
    } = this.state;
    post({
      from: from.label,
      to: to.label,
      date,
      time,
      price,
      detail,
    });
  }

  handleFrom (val) {
    this.setState({ from: val });
  }

  handleTo (val) {
    this.setState({ to: val });
  }

  handleDate (date) {
    this.setState({ date });
  }

  handleChange (e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render () {
    const {
      from,
      to,
      date,
      time,
      seats,
      price,
      detail,
      destination,
    } = this.state;

    return (
      <div className={style.PostModule}>
        <form>
          <div className={style.fromWrapper}>
            <label>
              From
              <div className={style.from}>
                <Select
                  value={from}
                  onChange={this.handleFrom}
                  options={destination}
                  style={{ cursor: 'text' }}
                />
              </div>
            </label>
          </div>
          <div className={style.margin} />
          <div className={style.toWrapper}>
            <label>
              To
              <div>
                <Select
                  value={to}
                  onChange={this.handleTo}
                  options={destination}
                />
              </div>
            </label>
          </div>
          <div className={style.margin} />
          <div className={style.dateWrapper}>
            <label>
              Date
              <div>
                <DatePicker
                  className={style.dateInput}
                  placeholderText="Click to select a date/time"
                  selected={date}
                  onChange={this.handleDate}
                  minDate={moment()}
                  showDisabledMonthNavigation
                />
              </div>
            </label>
          </div>
          <div className={style.seatsWrapper}>
            <label>
              Seats
              <div>
                <input className={style.seatsInput} name="seats" value={seats} onChange={this.handleChange} />
              </div>
            </label>
          </div>
          <div className={style.priceWrapper}>
            <label>
              Price
              <div>
                <input className={style.priceInput} name="price" value={price} onChange={this.handleChange} />
              </div>
            </label>
          </div>
          <div className={style.margin} />
          <div className={style.detailWrapper}>
            <label>
              Detail
              <div>
                <textarea className={style.detailInput} name="detail" value={detail} onChange={this.handleChange} />
              </div>
            </label>
          </div>
        </form>
        <div className={style.margin} />
        <button className={style.postBtn} type="button" onClick={this.onClick}>
          Post a ride
        </button>
      </div>
    );
  }
}

export default PostModule;
