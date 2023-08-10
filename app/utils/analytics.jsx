import React from 'react'

function Analytics() {
  return (
   // <!-- Google tag (gtag.js) -->
        <><script async src="https://www.googletagmanager.com/gtag/js?id=G-MSECNPR8XV"></script><script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)};
            gtag('js', new Date());

            gtag('config', 'G-MSECNPR8XV');
        </script></>
  )
}

export default Analytics