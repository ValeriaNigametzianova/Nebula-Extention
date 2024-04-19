export const addWord = async (word, category) => {
  if (word && category) {
    const { word_list } = await chrome.storage.sync.get(['word_list'])
    const listOfWordCategories = word_list ? word_list[word]?.categories : null

    if (listOfWordCategories) {
      category.forEach((category) => {
        if (listOfWordCategories.includes(category)) return
        listOfWordCategories.push(category)
      })
      await chrome.storage.sync.set({
        word_list: {
          ...word_list,
          [word]: {
            categories: listOfWordCategories,
            dateCreated: word_list[word].dateCreated,
            dateEdited: new Date().toISOString(),
          },
        },
      })
    } else {
      await chrome.storage.sync.set({
        word_list: {
          ...word_list,
          [word]: {
            categories: category,
            dateCreated: new Date().toISOString(),
            dateEdited: new Date().toISOString(),
          },
        },
      })
    }
  }
}

export const editWord = async (word, newWord, categories) => {
  if (word && categories) {
    const { word_list } = await chrome.storage.sync.get(['word_list'])
    const dateCreated = word_list[word].dateCreated
    if (word === newWord) {
      await chrome.storage.sync.set({
        word_list: {
          ...word_list,
          [word]: {
            categories: categories,
            dateCreated: dateCreated,
            dateEdited: new Date().toISOString(),
          },
        },
      })
    } else {
      delete word_list[word]
      await chrome.storage.sync.set({
        word_list: {
          ...word_list,
          [newWord]: {
            categories: categories,
            dateCreated: dateCreated,
            dateEdited: new Date().toISOString(),
          },
        },
      })
    }
  }
}

export const deleteWord = async (word) => {
  chrome.storage.sync.get(['word_list']).then(({ word_list }) => {
    delete word_list[word]
    chrome.storage.sync.set({
      word_list,
    })
  })
}
