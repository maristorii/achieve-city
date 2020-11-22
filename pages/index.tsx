import { useMemo, useCallback } from 'react';
import Head from 'next/head';

import CharacterEditor from 'features/CharacterEditor/CharacterEditor';

export default () => (
  <div>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <CharacterEditor />
  </div>
);
