import React, { useEffect, useRef, useState } from 'react'
import { Dots } from './effects/Dots'
import { Flowers } from './effects/Flowers'

export const Prewiew = ({ blurColor, effectColor, value }) => {
  const [settings, setSettings] = useState(null)
  const [previewHeight, setPrewiewHeight] = useState(null)
  const [previewWidth, setPrewiewWigth] = useState(null)
  const ref = useRef(null)

  useEffect(() => {
    const storageListener = chrome.storage.sync.onChanged.addListener(
      (event) => {
        if (event.blur_settings) setSettings(event.blur_settings.newValue)

        return () => {
          chrome.storage.sync.onChanged.removeListener(storageListener)
        }
      }
    )
  }, [])

  useEffect(() => {
    chrome.storage.sync.get(['blur_settings']).then(({ blur_settings }) => {
      blur_settings && setSettings(blur_settings)
    })
  }, [])

  useEffect(() => {
    settings && setPrewiewSettings(settings)
  }, [settings])

  useEffect(() => {
    const storageListener = chrome.storage.sync.onChanged.addListener(() => {
      chrome.storage.sync.get(['blur_settings']).then(({ blur_settings }) => {
        setPrewiewSettings(blur_settings)
      })
      return () => {
        chrome.storage.sync.onChanged.removeListener(storageListener)
      }
    })
  }, [])

  const setPrewiewSettings = (settings) => {
    ref.current.style.filter = settings
      ? `blur(${settings.blur_degree / 8}px)`
      : `blur(${value}px)`

    ref.current.style.backgroundColor = settings
      ? `${settings.blur_color}`
      : `${blurColor}`
    setPrewiewHeight(ref.current.offsetHeight)
    setPrewiewWigth(ref.current.offsetWidth)
  }

  return (
    <div className="preview_wrap">
      <div
        className={
          settings?.hover_behavior === 'zoom'
            ? 'effects_wrap zoom'
            : settings?.hover_behavior === 'blur'
              ? 'effects_wrap blur'
              : 'effects_wrap'
        }
      >
        <div className="preview" ref={ref}>
          <div className="main_text">
            ВАШИНГТОН, 12 фев — РИА Новости. Российская экономика развивается
            лучше, чем ожидалось, заявила первый заместитель главы
            Международного валютного фонда (МВФ) Гита Гопинат в интервью журналу
            Foreign Policy.
          </div>
        </div>
        {settings?.effect === 'dots_effect' ? (
          <Dots
            effectColor={settings ? settings?.effect_color : effectColor}
            previewHeight={previewHeight}
            previewWidth={previewWidth}
          />
        ) : null}
        {settings?.effect === 'flowers_effect' ? (
          <Flowers
            effectColor={settings ? settings?.effect_color : effectColor}
            previewHeight={previewHeight}
            previewWidth={previewWidth}
          />
        ) : null}
      </div>
    </div>
  )
}
