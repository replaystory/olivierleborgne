import React, { useState } from 'react'
import { useSprings, animated, to as interpolate } from 'react-spring'
import { useDrag } from 'react-use-gesture'

import css from './index.module.scss'

const img = [
  './images/portfolio/appartmaison.png',
  './images/portfolio/cartographe.png',
  './images/portfolio/baliwooddesign.png',
  './images/portfolio/candycandy.png',
  './images/portfolio/cubemysterious.png',
  './images/portfolio/theodor.png'
]

const shuffle = (a) => {
  let newArr = [].concat(a);
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};

const to = (i) => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 })
const from = (i) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })
const trans = (r, s) => `perspective(1500px) rotateX(40deg) rotateY(${r / 8}deg) rotateZ(${r}deg) scale(${s})`

export default function Cards() {
  const [cards, setCards] = useState(shuffle(img))
  const [gone] = useState(() => new Set())
  const [props, set] = useSprings(cards.length, (i) => ({ ...to(i), from: from(i) }))

  const bind = useDrag(({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
    const trigger = velocity > 0.2
    const dir = xDir < 0 ? -1 : 1
    if (!down && trigger) gone.add(index)
    set((i) => {
      if (index !== i) return
      const isGone = gone.has(index)
      const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0
      const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0)
      const scale = down ? 1.1 : 1
      return { x, rot, scale, delay: undefined, config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 } }
    })
    if (!down && gone.size === cards.length) {
      setCards(shuffle(img))
      setTimeout(() => gone.clear() || set((i) => to(i)), 500)
    }
  })
  return props.map(({ x, y, rot, scale }, i) => (
    <animated.div className={css.div} key={i} style={{ x, y }}>
      {}
      <animated.div
        className={css.card}
        {...bind(i)}
        style={{ transform: interpolate([rot, scale], trans), backgroundImage: `url(${cards[i]})` }}
      />
    </animated.div>
  ))
}
