### Example:

The following *JSON* is the result of the code found below.

> **Tip:** Change the code to get different results.

```js
import React, { useEffect, useState } from 'react';
import { useRepo } from 'dcs-react-hooks';
import ReactJson from 'react-json-view';

function Component(){
  const [ownerName, setOwnerName] = useState();
  const [repoName, setRepoName] = useState();

  const { state, actions } = useRepo({
    ownerName,
    repoName
  });

  const { repo, isLoading } = state;

  const unsetRepoParams = () => {
    setOwnerName(null);
    setRepoName(null);
  }

  const setRepoParams = () => {
    setOwnerName("unfoldingWord");
    setRepoName("en_tn");
  }

  return isLoading ? "loading..." : (
    <>
      <ReactJson
        style={{ maxHeight: '500px', overflow: 'scroll', whiteSpace: 'pre' }}
        src={repo}
        theme="monokai"
      />
      <button onClick={setRepoParams}>Set repository</button>
      <button onClick={unsetRepoParams}>Unset Repository</button>
    </>
  );
}

<Component />
```
