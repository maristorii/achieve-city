import { useMemo, useCallback } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import styles from './CharacterEditor.module.css';

const root = process.env.NEXT_PUBLIC_ENV === 'export' ? '/achieve-city' : '';

const CharacterEditor = () => {
  const router = useRouter();

  const [hair, eye, glasses, top, cloak, backpack, bottom, foot] = useMemo(
    () => (
      (Array.isArray(router.query.char)? router.query.char[0] : router.query.char) || '0.0.0.0.0.0.0.0')
        .split('.')
        .map(val => Number(val)
    ),
    [router.query.char]
  );

  const changeCharacter = useCallback((part, move) => {
    const newChar = {hair, eye, glasses, top, cloak, backpack, bottom, foot};

    if (move === 0) {
      newChar[part] = 0;
    } else {
      newChar[part] += move;
    }

    router.push(`/?char=${[
      newChar.hair,
      newChar.eye,
      newChar.glasses,
      newChar.top,
      newChar.cloak,
      newChar.backpack,
      newChar.bottom,
      newChar.foot
    ].join('.')}`);
  }, [hair, eye, glasses, top, cloak, backpack, bottom, foot]);

  return (
    <div className={styles.Root}>
      <Head>
        <link rel="preload" href={`${root}/images/character/backpack_1.png`} as="image" />
        <link rel="preload" href={`${root}/images/character/bottom_0.png`} as="image" />
        <link rel="preload" href={`${root}/images/character/bottom_1.png`} as="image" />
        <link rel="preload" href={`${root}/images/character/bottom_2.png`} as="image" />
        <link rel="preload" href={`${root}/images/character/bottom_3.png`} as="image" />
        <link rel="preload" href={`${root}/images/character/cloak_1_back.png`} as="image" />
        <link rel="preload" href={`${root}/images/character/cloak_1_front.png`} as="image" />
        <link rel="preload" href={`${root}/images/character/eye_0.png`} as="image" />
        <link rel="preload" href={`${root}/images/character/eye_1.png`} as="image" />
        <link rel="preload" href={`${root}/images/character/eye_2.png`} as="image" />
        <link rel="preload" href={`${root}/images/character/eye_3.png`} as="image" />
        <link rel="preload" href={`${root}/images/character/eye_4.png`} as="image" />
        <link rel="preload" href={`${root}/images/character/eye_5.png`} as="image" />
        <link rel="preload" href={`${root}/images/character/foot_0.png`} as="image" />
        <link rel="preload" href={`${root}/images/character/foot_1.png`} as="image" />
        <link rel="preload" href={`${root}/images/character/glasses_0.png`} as="image" />
        <link rel="preload" href={`${root}/images/character/glasses_1.png`} as="image" />
        <link rel="preload" href={`${root}/images/character/hair_0.png`} as="image" />
        <link rel="preload" href={`${root}/images/character/hair_1.png`} as="image" />
        <link rel="preload" href={`${root}/images/character/hair_2.png`} as="image" />
        <link rel="preload" href={`${root}/images/character/hair_3.png`} as="image" />
        <link rel="preload" href={`${root}/images/character/hair_4.png`} as="image" />
        <link rel="preload" href={`${root}/images/character/hair_5.png`} as="image" />
        <link rel="preload" href={`${root}/images/character/hair_6.png`} as="image" />
        <link rel="preload" href={`${root}/images/character/hair_7.png`} as="image" />
        <link rel="preload" href={`${root}/images/character/top_0.png`} as="image" />
        <link rel="preload" href={`${root}/images/character/top_1.png`} as="image" />
      </Head>
      <div className={styles.Character}>
        <img src={`${root}/images/character/outline.png`} className={styles.Img} />
        {backpack !== 0 && <img src={`${root}/images/character/backpack_${backpack}.png`} className={styles.Img} />}
        {cloak !== 0 && <img src={`${root}/images/character/cloak_${cloak}_back.png`} className={styles.Img} />}
        <img src={`${root}/images/character/hair_${hair}.png`} className={styles.Img} />
        <img src={`${root}/images/character/eye_${eye}.png`} className={styles.Img} />
        {glasses !== 0 && <img src={`${root}/images/character/glasses_${glasses}.png`} className={styles.Img} />}
        <img src={`${root}/images/character/top_${top}.png`} className={styles.Img} />
        {cloak !== 0 && <img src={`${root}/images/character/cloak_${cloak}_front.png`} className={styles.Img} />}
        <img src={`${root}/images/character/bottom_${bottom}.png`} className={styles.Img} />
        <img src={`${root}/images/character/foot_${foot}.png`} className={styles.Img} />
      </div>
      <div className={styles.Controls}>
        <ControlsRow changeCharacter={changeCharacter} part="hair" value={hair} max={7} text="Волосы" />
        <ControlsRow changeCharacter={changeCharacter} part="eye" value={eye} max={5} text="Глаза" />
        <ControlsRow changeCharacter={changeCharacter} part="glasses" value={glasses} max={2} text="Очки" />
        <ControlsRow changeCharacter={changeCharacter} part="top" value={top} max={1} text="Верх" />
        <ControlsRow changeCharacter={changeCharacter} part="bottom" value={bottom} max={3} text="Низ" />
        <ControlsRow changeCharacter={changeCharacter} part="foot" value={foot} max={1} text="Обувь" />
        <ControlsRow changeCharacter={changeCharacter} part="cloak" value={cloak} max={1} text="Плащ" />
        <ControlsRow changeCharacter={changeCharacter} part="backpack" value={backpack} max={1} text="Рюкзак" />
      </div>
    </div>
  );
}

const ControlsRow = ({
  changeCharacter,
  part,
  value,
  max,
  text,
}) => {
  const minus = useCallback(() => changeCharacter(part, -1), [changeCharacter]);
  const plus = useCallback(() => changeCharacter(part, 1), [changeCharacter]);

  return (
    <div className={styles.ControlsRow}>
        <button onClick={minus} disabled={value < 1}>{'<'}</button>
        <span className={styles.ControlText}>{text}</span>
        <button onClick={plus} disabled={value >= max}>{'>'}</button>
    </div>
  );
};

export default CharacterEditor;
