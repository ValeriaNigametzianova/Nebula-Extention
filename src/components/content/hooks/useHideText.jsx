import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { HiddenBlock } from '../HiddenBlock'
import { AnalyseHTML, testRequest } from '../../utils/http'

export const useHideText = () => {
  const [AIModel, setAIModel] = useState('')
  const [APIKey, setAPIKey] = useState('')
  const [useNeuronet, setUseNeuronet] = useState('')

  useEffect(() => {
    chrome.storage.sync.get().then((storage) => {
      setAIModel(storage.neuronet_model)
      setAPIKey(storage.API_keys[storage.neuronet_model])
      setUseNeuronet(storage.use_neuronet)
    })
  }, [])

  const hideText = async (array, currentWords, wordList) => {
    const currentURL = window.location.href
    await testRequest(currentURL)

    let premasking = Object.assign(
      {},
      array.map(() => ({
        bool: true,
        word: '',
        category: '',
      }))
    )

    for (let key in premasking) {
      if (premasking[key].bool === true) {
        const node = array[key]
        const oldParent = node.parentNode

        // создаем подкорень Реакта
        const wrapper = document.createElement('div')
        wrapper.setAttribute('class', 'nebula_hidden_block_wrapper')
        wrapper.id = 'root ' + key
        oldParent?.replaceChild(wrapper, node)

        if (oldParent) {
          ReactDOM.createRoot(wrapper).render(
            <React.StrictMode>
              <HiddenBlock
                node={node}
                word={premasking[key].word}
                category={premasking[key].category}
              />
            </React.StrictMode>
          )
        } else return
      }
    }

    let AIResponse = {}
    if (APIKey && useNeuronet) {
      AIResponse = await AnalyseHTML(
        [...currentWords],
        wordList,
        array.map((el) => el.textContent),
        AIModel,
        APIKey
      )
    }

    for (let key in AIResponse) {
      if (AIResponse[key].bool === false || !AIResponse[key].bool) {
        const node = array[key]
        const wrapper = document.getElementById(`${'root ' + key}`)
        const oldParent = wrapper.parentNode

        // создаем подкорень Реакта
        oldParent?.replaceChild(node, wrapper)

        if (wrapper) {
          wrapper.remove()
        }
      }
    }

    array = []
  }
  return hideText
}
