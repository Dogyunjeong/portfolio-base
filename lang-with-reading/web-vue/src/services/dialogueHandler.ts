import { BASE_PATH } from '@/config/s3config'
import { HOST_URI } from '@/config/server'
import Types from '@/types/index'
import dialogueUtil from '@/utilities/dialogueUtil'
import Request from '@/utilities/request'

import { MPromise } from '@/utilities/promise'
import { speakerHandler } from './speakerHandler'

const dialogueRequest = new Request(HOST_URI)

class dialogueHandler {
  private static _createPathByUuid = (lang: string, uuid: string) => {
    return `${BASE_PATH}/${lang}/${uuid}.json`
  }

  private static _log = (path: string, data: Types.RawDialogue) => {
    console.log('path: ', path, '  JSON: ', JSON.stringify(data))
  }

  static loadCategories = (): Promise<Types.Category[]> => {
    return dialogueRequest
      .get('/dialogue/category')
      .then((categories: Types.Category[]) => categories)
  }

  static saveDialogue = (dialogue: Types.Dialogue) => {
    const rawDialogue: Types.RawDialogue = dialogueUtil.dialogueToRawDialogue(
      dialogue,
      dialogue.uuid,
    )

    dialogueHandler._log(
      dialogueHandler._createPathByUuid(dialogue.lang, dialogue.uuid),
      dialogueUtil.dialogueToRawDialogue(dialogue, dialogue.uuid),
    )

    return dialogueRequest.post('/dialogue', rawDialogue)
  }

  static loadDialogue = async (
    uuid: string,
    lang: string,
  ): Promise<Types.Dialogue> =>
    MPromise.resolve().then(async () => {
      const rawDialogue: Types.RawDialogue = await dialogueRequest.get(
        `/dialogue/${uuid}/lang/${lang}`,
      )
      const speakers: Types.Speaker[] = await speakerHandler.listSpeakers()
      const dialogue: Types.Dialogue = dialogueUtil.rawDialogueToDialogue(
        rawDialogue,
        speakers,
      )

      return dialogue
    })
}

export default dialogueHandler

export { dialogueHandler }
