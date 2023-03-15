import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../../components/Button';
import add from '../../../../assets/icons/add.png';
import chevron from '../../../../assets/icons/chevron.png'
import styles from './NavbarStyle'

export function Navbar({ isOpenForm, setIsOpenForm, setShowModal, isEnabled }) {
  const { navbar, openFormBtn } = styles()
  const toggleOpenForm = () => {
    return setIsOpenForm(!isOpenForm);
  }
  const handleClick = (e) => {
    if (isEnabled) {
      setShowModal(true)
    }
  }
  return (
    <nav className={navbar}>
      <button className={openFormBtn} onClick={toggleOpenForm}>
        <img src={isOpenForm ? chevron : add} alt="" />
      </button>
      <h1>Create a palette</h1>
      <div className='buttons'>
        <Link to='/colorsapp' >
          <Button
            text='GO BACK'
            color='#e74c3c' />
        </Link>
        <Button
          onClick={handleClick}
          text='SAVE'
          color='#023E8A' />
      </div>
    </nav>)
}