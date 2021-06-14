import React, {useState} from 'react'

import css from './index.module.scss'
import img from '../../assets/images/arrow-bottom.png'

export default function BtnScroll() {
  const [visible, setVisible] = useState(true);

  return (
    <>
    {visible &&
    <button className={css.btn}>
      <img src={img} alt="Scroll" width={25} />
    </button>}
    </>
    )
}
