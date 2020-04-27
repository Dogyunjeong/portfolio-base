import Types from '@/types/index'
import _ from '@/utilities/lodash'

class dialogueUtil {
  static rawDialogueToDialogue = (
    rawDialogue: Types.RawDialogue,
    speakers: Types.Speaker[],
  ) => {
    const dialogue: Types.Dialogue = {
      lang: rawDialogue.lang,
      title: rawDialogue.title,
      uuid: rawDialogue.uuid,
      paragraphs: _.map(rawDialogue.paragraphs, (rawParagraph, idx) => {
        const speakerUuid = _.get(
          _.find(rawDialogue.speakers, speakerData =>
            _.includes(speakerData.paragraphs, idx),
          ),
          'uuid',
        )
        const paragraph: Types.Paragraph = {
          content: rawParagraph,
          speaker: _.find(
            speakers,
            speaker => speaker.uuid === speakerUuid,
          ) as Types.Speaker,
        }
        return paragraph
      }),
    }
    return _.cloneDeep(dialogue)
  }

  static dialogueToRawDialogue = (dialogue: Types.Dialogue, uuid: string) => {
    const speakers: Types.SpeakerDataInDialogue[] = []
    const paragraphs: string[] = []
    _.forEach(dialogue.paragraphs, (paragraph, idx) => {
      paragraphs.push(paragraph.content)
      const speaker = _.find(
        speakers,
        ({ uuid }) => uuid === paragraph.speaker.uuid,
      )
      if (!speaker) {
        speakers.push({ uuid: paragraph.speaker.uuid, paragraphs: [idx] })
      } else {
        speaker.paragraphs.push(idx)
      }
    })
    const rawDialogue: Types.RawDialogue = {
      lang: dialogue.lang,
      title: dialogue.title,
      uuid,
      speakers,
      paragraphs,
    }

    return _.cloneDeep(rawDialogue)
  }
}

export default dialogueUtil

export { dialogueUtil }
