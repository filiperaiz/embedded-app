function embeddedApp(appId, urlManifest) {
  const appResources = {}

  const callFunction = async (functionName) => {
    const appFunction = window[`${appId}_${functionName}`]

    if (typeof appFunction !== 'function') {
      throw new Error(
        `${appId}_${functionName} is not a valid function on the window object`
      )
    }

    setTimeout(async () => {
      await appFunction(appId)
    }, 600)
  }

  document.addEventListener('beforeunload', () => callFunction('destroyer'))

  const loadResource = (resource, elementType, attributeName) => {
    return new Promise((resolve, reject) => {
      const existingElement = document.querySelector(
        `${elementType}[${attributeName}="${resource}"]`
      )

      if (existingElement) {
        resolve(existingElement)
        return
      }

      const element = document.createElement(elementType)
      element[attributeName] = resource

      if (elementType === 'link') {
        element.type = 'text/css'
        element.rel = 'stylesheet'
      }

      if (elementType === 'script') {
        element.type = 'text/javascript'
        element.defer = true
      }

      element.onload = () => {
        appResources[resource] = element
        resolve(element)
      }

      element.onerror = () => reject(`Error on loading ${resource}`)

      document.head.appendChild(element)
    })
  }

  fetch(`${urlManifest}/asset-manifest.json`)
    .then((response) => response.json())
    .then(async (json) => {
      const { files } = json

      for (const value of Object.values(files)) {
        const path = `${urlManifest}${value}`
        const element = {
          type: null,
          attributeName: null
        }

        if (path.endsWith('.js')) {
          element.type = 'script'
          element.attributeName = 'src'
        }

        if (path.endsWith('.css')) {
          element.type = 'link'
          element.attributeName = 'href'
        }

        if (element.type) {
          await loadResource(path, element.type, element.attributeName)
        }
      }
    })
    .then(() => callFunction('runner'))
    .catch((error) => console.error(error))

  window.embedded = true
  window.embeddedApp = embeddedApp
}
