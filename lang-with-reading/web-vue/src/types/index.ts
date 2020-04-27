namespace Types {
  export interface Speaker {
    uuid: string
    image: string
    name: string
  }

  export interface SpeakerDataInDialogue {
    uuid: string
    paragraphs: number[]
  }

  export interface RawDialogue {
    title: string
    uuid: string
    lang: string
    speakers: SpeakerDataInDialogue[]
    paragraphs: string[]
  }

  export interface Paragraph {
    speaker: Speaker
    content: string
  }

  export interface Dialogue {
    title: string
    uuid: string
    lang: string
    paragraphs: Paragraph[]
  }

  export interface CategoryItem {
    title: string
    uuid: string
  }

  export interface Category {
    title: string
    items: CategoryItem[]
  }
}

export default Types
