import React from 'react'

export default () => {
  const [prompt, setPrompt] = React.useState(null)

  const promptToInstall = () => {
    if (prompt) {
      return prompt.prompt()
    }
    return Promise.reject(
      new Error(
        'ブラウザに"beforeinstallprompt"イベントを送る前にインストールしてください'
      )
    )
  }

  React.useEffect(() => {
    const ready = (e) => {
      e.preventDefault()
      setPrompt(e)
    }

    window.addEventListener('beforeinstallprompt', ready)

    return () => {
      window.removeEventListener('beforeinstallprompt', ready)
    }
  }, [])

  return [prompt, promptToInstall]
}