import { getFirstImageForDir } from './markdown'

export function getHomePreviews() {
  return {
    gas: getFirstImageForDir('GASTeamStuff'),
    oar: `/api/asset?path=${encodeURIComponent('OarWeThereYetStuff/write-ups/gaming/player-head.gif')}`,
    robotics: getFirstImageForDir('RoboticsStuff'),
    revo: getFirstImageForDir('RevoTechnologies'),
    churchvolunteering: `/api/asset?path=${encodeURIComponent('ChurchVolunteering/SonriseWriteups/OldChurchLogo.jpg')}`,
  }
}
