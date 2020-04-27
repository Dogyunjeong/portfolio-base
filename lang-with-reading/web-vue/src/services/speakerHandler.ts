import Types from '@/types/index'

interface Handler {}

class SpeakerHandler {
  private _speakers: Types.Speaker[] = [
    {
      uuid: 'tony-speaker',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7DraIw5I3K2b3OfQ8W1dGfhn6ZPyA3NFJDagYTTDDc6x59fS8cg',
      name: 'Tony',
    },
    {
      uuid: 'maya-speaker',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRIoV0Ge1vz7k5V3Oj4UXM315tnCEmOXzvRl8cZ4riischjk5a',
      name: 'Maya',
    },
  ]

  public async listSpeakers(): Promise<Types.Speaker[]> {
    if (this._speakers && this._speakers.length !== 0) {
      return this._speakers
    }
    // TODO: Retrieve speakers from server and set `_speakers` with returned value

    return this._speakers
  }
}

const speakerHandler = new SpeakerHandler()

export default speakerHandler
export { SpeakerHandler, speakerHandler }
